// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load and display blog post
function loadBlogPost() {
    const postId = parseInt(getUrlParameter('id'));
    
    if (!postId) {
        showError('Blog post not found');
        return;
    }

    const post = blogPosts.find(p => p.id === postId);
    
    if (!post) {
        showError('Blog post not found');
        return;
    }

    // Update page title
    document.title = `${post.title} - Your Name`;

    // Update post header
    document.getElementById('post-icon').className = post.icon;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = post.date;
    
    // Update post tags
    const postTagsContainer = document.getElementById('post-tags');
    postTagsContainer.innerHTML = post.tags.map(tag => 
        `<span class="post-tag">${tag}</span>`
    ).join('');

    // Update post content
    document.getElementById('post-content').innerHTML = post.content;

    // Load related posts
    loadRelatedPosts(postId);
}

// Function to show error message
function showError(message) {
    document.getElementById('post-title').textContent = 'Error';
    document.getElementById('post-content').innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
            <a href="index.html#blogs" class="back-link">Back to All Posts</a>
        </div>
    `;
}

// Function to load related posts
function loadRelatedPosts(currentPostId) {
    const relatedPostsGrid = document.getElementById('related-posts-grid');
    
    // Get posts that are not the current post
    const relatedPosts = blogPosts.filter(post => post.id !== currentPostId).slice(0, 3);
    
    if (relatedPosts.length === 0) {
        relatedPostsGrid.innerHTML = '<p>No other posts available.</p>';
        return;
    }

    relatedPostsGrid.innerHTML = relatedPosts.map(post => `
        <article class="related-post-card">
            <div class="related-post-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="related-post-content">
                <h4>${post.title}</h4>
                <p class="related-post-meta">${post.date}</p>
                <p>${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read Post</a>
            </div>
        </article>
    `).join('');
}

// Function to handle navigation
function handleNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Navigate to the main page with the correct tab
            if (targetTab === 'blogs') {
                window.location.href = 'index.html#blogs';
            } else {
                window.location.href = `index.html#${targetTab}`;
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPost();
    handleNavigation();
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to top when page loads
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 