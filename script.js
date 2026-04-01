// ═══════════════════════════════════════════════════════
//  Main Script — Tab switching & content rendering
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderProjects();
    renderThoughts();
    renderIdeas();
    handleDeepLinks();
});

// ─── Tab Switching ───
function initTabs() {
    const btns   = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;

            btns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tab).classList.add('active');

            // Update URL hash so tabs are shareable / bookmarkable
            history.replaceState(null, '', `#${tab}`);
        });
    });
}

// Open tab from URL hash (e.g. index.html#thoughts)
function handleDeepLinks() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const btn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
        if (btn) btn.click();
    }
}

// ─── Render Projects ───
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid || typeof projects === 'undefined') return;

    if (projects.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>Projects coming soon.</p></div>';
        return;
    }

    grid.innerHTML = projects.map(p => `
        <div class="project-card">
            <h3>${p.links && p.links.length ? `<a href="${p.links[0].url}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</h3>
            <p class="desc">${p.description}</p>
            <div class="meta">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${p.links && p.links.length ? `
                <div class="links">
                    ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// ─── Render Thoughts (Blog list) ───
function renderThoughts() {
    const list = document.getElementById('thoughts-list');
    if (!list || typeof thoughts === 'undefined') return;

    if (thoughts.length === 0) {
        list.innerHTML = '<div class="empty-state"><p>No thoughts yet. Check back soon.</p></div>';
        return;
    }

    list.innerHTML = thoughts.map(t => `
        <a href="thought.html?id=${t.id}" class="thought-item">
            ${t.coverImage ? `<img class="thought-cover" src="${t.coverImage}" alt="${t.title}">` : ''}
            <h3>${t.title}</h3>
            <p class="excerpt">${t.excerpt}</p>
            <div class="thought-meta">
                <span>${formatDate(t.date)}</span>
                ${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </a>
    `).join('');
}

// ─── Render Ideas ───
function renderIdeas() {
    const list = document.getElementById('ideas-list');
    if (!list || typeof ideas === 'undefined') return;

    if (ideas.length === 0) {
        list.innerHTML = '<div class="empty-state"><p>No ideas yet. The spark will come.</p></div>';
        return;
    }

    list.innerHTML = ideas.map(i => `
        <div class="idea-item">
            <p class="idea-title">${i.title}</p>
            ${i.description ? `<p class="idea-desc">${i.description}</p>` : ''}
        </div>
    `).join('');
}

// ─── Helpers ───
function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
