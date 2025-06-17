// Blog Posts Data - Add your blog posts here
const blogPosts = [
    //{
    //     id: 1,
    //     title: "The Art of Slow Living",
    //     date: "March 15, 2024",
    //     excerpt: "In our fast-paced world, finding moments of stillness and intentional living has become more important than ever. Here's what I've learned about embracing a slower, more mindful approach to life.",
    //     content: `
    //         <h2>Finding Beauty in the Pause</h2>
    //         <p>We live in a world that constantly demands our attention, our time, and our energy. Every notification, every deadline, every expectation pulls us in different directions. But what if we chose to pause? What if we decided to move at our own pace?</p>
            
    //         <h2>What Slow Living Means to Me</h2>
    //         <p>Slow living isn't about doing less—it's about doing what matters most with intention and presence. It's about savoring your morning coffee instead of gulping it down. It's about taking a walk without checking your phone every five minutes. It's about having a conversation where you truly listen.</p>
            
    //         <h2>Small Changes, Big Impact</h2>
    //         <p>You don't need to overhaul your entire life to embrace slow living. Start with these simple practices:</p>
    //         <ul>
    //             <li>Take five deep breaths before starting your day</li>
    //             <li>Eat one meal without any distractions</li>
    //             <li>Spend 10 minutes in nature, even if it's just your backyard</li>
    //             <li>Write down three things you're grateful for each evening</li>
    //         </ul>
            
    //         <h2>The Gift of Presence</h2>
    //         <p>When we slow down, we begin to notice things we've been missing. The way sunlight filters through your window in the morning. The sound of birds singing outside. The taste of food when you actually pay attention to it.</p>
            
    //         <h2>Creating Space for What Matters</h2>
    //         <p>By intentionally slowing down, we create space for the things that truly matter: meaningful relationships, personal growth, creative expression, and inner peace. We stop living on autopilot and start living with purpose.</p>
            
    //         <h2>Conclusion</h2>
    //         <p>Slow living is a practice, not a destination. Some days you'll nail it, and other days you'll forget entirely. That's okay. The important thing is that you keep coming back to it, keep choosing presence over distraction, and keep remembering that life is meant to be savored, not rushed through.</p>
    //     `,
    //     icon: "fas fa-leaf",
    //     tags: ["Mindfulness", "Lifestyle", "Wellness", "Reflection"]
    // },
    
];

// Function to render blog posts
function renderBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card';
        blogCard.setAttribute('data-post-id', post.id);
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <i class="${post.icon}"></i>
            </div>
            <div class="blog-content">
                <h3>${post.title}</h3>
                <p class="blog-meta">Published on ${post.date}</p>
                <p>${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read Full Post</a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}

// Initialize blog posts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
}); 