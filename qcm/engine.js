/* engine.js — Moteur QCM partagé
   Usage : charger data.js AVANT ce fichier dans le HTML.
   Attend une variable globale DATA = { titre, matiere, questions: [...] }
*/
(function () {
  'use strict';

  /* ── Vérification DATA ── */
  if (typeof DATA === 'undefined' || !DATA.questions || DATA.questions.length === 0) {
    var c = document.getElementById('quizContainer');
    if (c) c.innerHTML = '<div style="text-align:center; padding:3rem;"><p style="color:var(--text-dim);">Aucune question disponible dans ce chapitre.</p></div>';
    return;
  }

  var questions = DATA.questions;
  var total     = questions.length;
  var current   = 0;
  var answered  = new Array(total).fill(null); // null | id choisi

  /* ── DOM ── */
  var progressFill       = document.getElementById('progressFill');
  var progressText       = document.getElementById('progressText');
  var questionTitle      = document.getElementById('questionTitle');
  var choicesContainer   = document.getElementById('choicesContainer');
  var explanationPanel   = document.getElementById('explanationPanel');
  var explanationContent = document.getElementById('explanationContent');
  var prevButton         = document.getElementById('prevButton');
  var nextButton         = document.getElementById('nextButton');
  var answerIndicator    = document.getElementById('answerIndicator');

  /* ── Titre de page ── */
  if (DATA.titre) {
    var t = document.querySelector('.qcm-page-title');
    if (t) t.textContent = DATA.titre;
    document.title = 'QCM — ' + DATA.titre;
  }

  /* ── Rendu question ── */
  function render() {
    var q          = questions[current];
    var userAnswer = answered[current];
    var pct        = Math.round(((current + 1) / total) * 100);

    progressFill.style.width       = pct + '%';
    progressText.textContent        = 'Question ' + (current + 1) + ' / ' + total;
    questionTitle.textContent       = q.enonce;

    /* Niveau badge */
    var badge = document.getElementById('levelBadge');
    if (badge && q.niveau) {
      badge.textContent  = q.niveau.charAt(0).toUpperCase() + q.niveau.slice(1);
      badge.className    = 'qcm-level-badge level-' + q.niveau;
    }

    /* Choix */
    choicesContainer.innerHTML = '';
    q.choix.forEach(function(c) {
      var item = document.createElement('div');
      item.className         = 'choice-item';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.dataset.id        = c.id;
      item.innerHTML         =
        '<span class="choice-label">' + c.id + '</span>' +
        '<span class="choice-text">'  + c.texte + '</span>';

      if (userAnswer) {
        item.classList.add('locked');
        if (c.id === q.reponse)                              item.classList.add('correct');
        else if (c.id === userAnswer && userAnswer !== q.reponse) item.classList.add('incorrect');
        else                                                  item.classList.add('dimmed');
      } else {
        (function(choiceId) {
          item.addEventListener('click',   function() { selectAnswer(choiceId); });
          item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') selectAnswer(choiceId);
          });
        })(c.id);
      }
      choicesContainer.appendChild(item);
    });

    /* Navigation */
    prevButton.disabled = (current === 0);
    nextButton.disabled = (current === total - 1 && !userAnswer);
    var nextTextEl = nextButton.querySelector('.nav-text');
    if (nextTextEl) nextTextEl.textContent = (current === total - 1) ? 'Résultats' : 'Suivant';

    /* Explication */
    if (userAnswer) showExplication(q, userAnswer);
    else            explanationPanel.classList.remove('visible');
  }

  /* ── Sélectionner une réponse ── */
  function selectAnswer(choiceId) {
    if (answered[current] !== null) return;
    answered[current] = choiceId;

    var isCorrect = (choiceId === questions[current].reponse);
    answerIndicator.className   = 'answer-indicator ' + (isCorrect ? 'correct-indicator' : 'incorrect-indicator');
    answerIndicator.textContent = isCorrect ? '✓' : '✗';
    answerIndicator.classList.add('show');
    setTimeout(function() { answerIndicator.classList.remove('show'); }, 700);

    nextButton.disabled = false;
    render();
  }

  /* ── Explication ── */
  function showExplication(q, userAnswer) {
    var isCorrect   = (userAnswer === q.reponse);
    var correctItem = q.choix.find(function(c) { return c.id === q.reponse; });
    var html        = '';

    html += '<div class="explanation-title ' + (isCorrect ? 'correct' : 'incorrect') + '">';
    html += '<span class="explanation-icon">' + (isCorrect ? '✅' : '❌') + '</span> ';
    if (isCorrect) {
      html += 'Bonne réponse !';
    } else {
      html += 'Bonne réponse : <strong>' + q.reponse + ' — ' + correctItem.texte + '</strong>';
    }
    html += '</div>';
    html += '<p class="explanation-text">' + q.explication.correcte + '</p>';

    var wrongKeys = Object.keys(q.explication.incorrectes || {});
    if (wrongKeys.length) {
      html += '<div class="explanation-section">';
      html += '<p class="explanation-section-title">Pourquoi les autres réponses sont incorrectes :</p>';
      html += '<ul class="explanation-list">';
      wrongKeys.forEach(function(k) {
        html += '<li><strong>' + k + ' :</strong> ' + q.explication.incorrectes[k] + '</li>';
      });
      html += '</ul></div>';
    }

    explanationContent.innerHTML = html;
    explanationPanel.classList.add('visible');
  }

  /* ── Écran résultats ── */
  function showScore() {
    var correct = answered.filter(function(a, i) { return a === questions[i].reponse; }).length;
    var pct     = Math.round((correct / total) * 100);
    var color   = pct >= 70 ? 'var(--green)' : pct >= 50 ? '#f5a623' : '#ef4444';
    var emoji   = pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚';

    document.querySelector('.quiz-container').innerHTML =
      '<div class="question-card" style="text-align:center; padding:3rem 2rem;">' +
      '<div style="font-size:4rem; margin-bottom:1rem;">' + emoji + '</div>' +
      '<h2 style="color:' + color + '; font-size:2.5rem; margin-bottom:.5rem;">' + pct + '%</h2>' +
      '<p style="color:var(--text-muted); font-size:1.1rem; margin-bottom:2rem;">' +
        correct + ' / ' + total + ' bonnes réponses</p>' +
      '<button class="btn btn-primary" onclick="location.reload()">Recommencer</button>' +
      ' <a href="../index.html" class="btn btn-outline">← Retour chapitres</a>' +
      '</div>';

    explanationPanel.classList.remove('visible');
    document.querySelector('.navigation-buttons').style.display = 'none';
    progressText.textContent = 'Terminé — ' + correct + '/' + total;
    progressFill.style.width = '100%';
  }

  /* ── Navigation ── */
  prevButton.addEventListener('click', function() {
    if (current > 0) { current--; render(); }
  });
  nextButton.addEventListener('click', function() {
    if (current < total - 1)              { current++; render(); }
    else if (answered[current] !== null)  showScore();
  });

  /* ── Raccourcis clavier ── */
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight') nextButton.click();
    if (e.key === 'ArrowLeft')  prevButton.click();
    if (['a','b','c','d'].includes(e.key.toLowerCase())) selectAnswer(e.key.toUpperCase());
  });

  /* ── Init ── */
  render();

})();
