/* render-conferences.js */
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
    container.innerHTML = `<div class="empty-state"><span style="font-size:2rem;">🎤</span><p>Aucune conférence disponible.</p></div>`;
    return;
  }

  container.innerHTML = `<div class="cards-grid">${DATA.map((d, i) => `
    <div class="card observe" style="animation-delay:${i * 0.08}s">
      <div style="margin-bottom:.6rem;">
        <span class="tag" style="margin-bottom:.5rem; display:inline-block;">${d.year}</span>
        <h4 style="margin-top:.4rem; line-height:1.4;">${d.title}</h4>
      </div>
      <p class="card-sub" style="margin-bottom:.5rem;">${highlight(d.authors)}</p>
      <p style="font-size:.85rem; color:var(--cyan); font-family:var(--font-mono); margin-bottom:.3rem;">${d.conference}</p>
      <p style="font-size:.82rem; color:var(--text-dim); margin-bottom:.75rem;">📍 ${d.location}</p>
      <div class="card-actions">
        ${d.publisher ? `<span class="tag">${d.publisher}</span>` : '<span></span>'}
        <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
          ${d.doi    ? `<a href="https://doi.org/${d.doi}" class="btn btn-outline" target="_blank">🔗 DOI</a>` : ''}
          ${d.pdf    ? `<a href="${d.pdf}" class="btn btn-outline" target="_blank">📄 PDF</a>` : ''}
          ${d.slides ? `<a href="${d.slides}" class="btn btn-outline" target="_blank">🖥 Slides</a>` : ''}
        </div>
      </div>
    </div>`).join('')}</div>`;
})();
