// ═══════════════════════════════════════════════════════
//  Thought Page — renders a single blog post by fetching
//  its .md file from blogs/ and rendering with marked.js.
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async () => {
    const id = new URLSearchParams(window.location.search).get('id');
    const post = thoughts.find(t => t.id === id);
    const article = document.getElementById('post-article');

    if (!post) {
        article.innerHTML = `
            <div class="empty-state">
                <p>Post not found.</p>
                <a href="index.html#thoughts" class="back-link" style="justify-content:center;margin-top:1rem;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Back to all thoughts
                </a>
            </div>
        `;
        return;
    }

    // Set page title
    document.title = `${post.title} — Thuwaragesh J`;

    // Build header
    const dateStr = new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const tagsHtml = post.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join('');

    const coverHtml = post.coverImage
        ? `<img class="post-cover" src="${post.coverImage}" alt="${post.title}">`
        : '';

    // Fetch the markdown file
    let bodyHtml = '';
    try {
        const res = await fetch(`blogs/${post.file}`);
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const md = await res.text();
        bodyHtml = marked.parse(md);
    } catch (err) {
        // Fallback: try inline content if file fetch fails (backwards compat)
        if (post.content) {
            bodyHtml = marked.parse(post.content);
        } else {
            bodyHtml = `<p class="empty-state">Could not load post content.</p>`;
        }
    }

    article.innerHTML = `
        <header class="post-header">
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span>${dateStr}</span>
                ${tagsHtml}
            </div>
        </header>
        ${coverHtml}
        <div class="post-body">${bodyHtml}</div>
    `;
});
