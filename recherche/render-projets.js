/* render-projets.js */
(function () {
  const container = document.getElementById('cards');

  const STATUT_COLOR = {
    'Terminé':   '#00f5a0',
    'En cours':  '#00d4ff',
    'En pause':  '#f5a623'
  };

  if (!DATA || DATA.length === 0) {
    container.innerHTML = `<div class="empty-state"><span style="font-size:2rem;">🔬</span><p>Aucun projet enregistré.</p></div>`;
    return;
  }

  container.innerHTML = `<div style="display:flex; flex-direction:column; gap:1.25rem;">${DATA.map((d, i) => `
    <div class="card observe" style="animation-delay:${i * 0.08}s">
      <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-bottom:.75rem;">
        <h4 style="font-size:1.05rem; line-height:1.3;">${d.titre}</h4>
        <span style="font-size:.75rem; font-family:var(--font-mono); padding:.25rem .7rem; border-radius:999px;
                     border:1px solid ${STATUT_COLOR[d.statut] || 'var(--border)'};
                     color:${STATUT_COLOR[d.statut] || 'var(--text-dim)'};
                     flex-shrink:0;">
          ${d.statut}
        </span>
      </div>
      <p class="card-sub" style="margin-bottom:.75rem;">📅 ${d.periode}</p>
      <p style="font-size:.9rem; margin-bottom:1rem;">${d.description}</p>
      ${d.partenaires && d.partenaires.length ? `
        <p style="font-size:.8rem; color:var(--text-dim); margin-bottom:.75rem;">
          <strong style="color:var(--text-muted);">Partenaires :</strong>
          ${d.partenaires.join(' · ')}
        </p>` : ''}
      <div class="card-actions">
        <div class="tags" style="margin-top:0;">${d.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        ${d.lien ? `<a href="${d.lien}" class="btn btn-outline" target="_blank">🔗 Voir</a>` : ''}
      </div>
    </div>`).join('')}</div>`;
})();
