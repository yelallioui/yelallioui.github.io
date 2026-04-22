/* render-articles.js */
(function () {
  const MOI = "Y. El Allioui";
  const container = document.getElementById('cards');

  function highlight(authors) {
    return authors.map(a =>
      a.includes('El Allioui') || a.includes('Allioui')
        ? `<strong style="color:var(--text);">${a}</strong>`
        : a
    ).join(', ');
  }

  if (!DATA || DATA.length === 0) {
    container.innerHTML = `<div class="empty-state"><span style="font-size:2rem;">📄</span><p>Aucun article disponible.</p></div>`;
    return;
  }

  container.innerHTML = `<div class="cards-grid">${DATA.map((d, i) => `
    <div class="card observe" style="animation-delay:${i * 0.08}s">
      <div style="margin-bottom:.75rem;">
        <span class="tag" style="margin-bottom:.5rem; display:inline-block;">${d.year}</span>
        <h4 style="margin-top:.4rem; line-height:1.4;">${d.title}</h4>
      </div>
      <p class="card-sub" style="margin-bottom:.5rem;">${highlight(d.authors)}</p>
      <p style="font-size:.88rem; color:var(--cyan); font-family:var(--font-mono); margin-bottom:.5rem;">
        ${d.journal}${d.volume ? ` · Vol. ${d.volume}` : ''}${d.number ? `(${d.number})` : ''}${d.pages ? ` · pp. ${d.pages}` : ''}
      </p>
      <p style="font-size:.82rem; margin-bottom:1rem;">${d.abstract || ''}</p>
      <div class="card-actions">
        <span class="tag">${d.publisher}</span>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
          ${d.doi ? `<a href="https://doi.org/${d.doi}" class="btn btn-outline" target="_blank">🔗 DOI</a>` : ''}
          ${d.pdf ? `<a href="${d.pdf}" class="btn btn-outline" target="_blank">📄 PDF</a>` : ''}
        </div>
      </div>
    </div>`).join('')}</div>`;
})();
