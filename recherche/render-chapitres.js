/* render-chapitres.js */
(function () {
  const container = document.getElementById('cards');

  function highlight(authors) {
    return authors.map(a =>
      a.includes('El Allioui') || a.includes('Allioui')
        ? `<strong style="color:var(--text);">${a}</strong>`
        : a
    ).join(', ');
  }

  if (!DATA || DATA.length === 0) {
    container.innerHTML = `<div class="empty-state"><span style="font-size:2rem;">📚</span><p>Aucun chapitre disponible.</p></div>`;
    return;
  }

  container.innerHTML = `<div style="display:flex; flex-direction:column; gap:1rem;">${DATA.map((d, i) => `
    <div class="card observe" style="animation-delay:${i * 0.08}s">
      <div style="display:flex; align-items:flex-start; gap:1rem; flex-wrap:wrap; margin-bottom:.6rem;">
        <span class="tag" style="flex-shrink:0;">${d.year}</span>
        <h4 style="line-height:1.4; flex:1;">${d.title}</h4>
      </div>
      <p class="card-sub" style="margin-bottom:.4rem;">${highlight(d.authors)}</p>
      <p style="font-size:.88rem; color:var(--cyan); font-family:var(--font-mono); margin-bottom:.75rem;">
        In: ${d.booktitle} · <strong>${d.volume}</strong> · ${d.publisher}
        ${d.pages ? ` · pp. ${d.pages}` : ''}
      </p>
      <div class="card-actions">
        <span style="font-size:.78rem; color:var(--text-dim);">Chapitre de livre</span>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
          ${d.doi ? `<a href="https://doi.org/${d.doi}" class="btn btn-outline" target="_blank">🔗 DOI</a>` : ''}
          ${d.pdf ? `<a href="${d.pdf}" class="btn btn-outline" target="_blank">📄 PDF</a>` : ''}
        </div>
      </div>
    </div>`).join('')}</div>`;
})();
