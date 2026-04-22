/* render-reviewing.js */
(function () {
  const container = document.getElementById('cards');

  if (!DATA || DATA.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span style="font-size:2rem;">📝</span>
        <p>Aucune activité de reviewing enregistrée pour le moment.</p>
        <p style="margin-top:.5rem; font-size:.8rem;">Ajoutez vos activités dans <code>data.js</code>.</p>
      </div>`;
    return;
  }

  container.innerHTML = `<div class="cards-grid">${DATA.map((d, i) => `
    <div class="card observe" style="animation-delay:${i * 0.08}s">
      <div class="card-meta">
        <h4>${d.journal}</h4>
        <span class="tag">${d.type}</span>
      </div>
      <p class="card-sub">${d.publisher} · ${d.year}</p>
      ${d.nb_articles ? `<p style="font-size:.88rem;">Manuscrits évalués : <strong>${d.nb_articles}</strong></p>` : ''}
      <div class="card-actions">
        <span class="mono" style="font-size:.78rem; color:var(--text-dim);">📅 ${d.year}</span>
        ${d.attestation
          ? `<a href="${d.attestation}" class="btn btn-outline" target="_blank">📜 Attestation</a>`
          : `<span style="font-size:.78rem; color:var(--text-dim); font-family:var(--font-mono);">Attestation bientôt disponible</span>`
        }
      </div>
    </div>`).join('')}</div>`;
})();
