# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features a clean design with tabbed navigation for different sections.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Tab Navigation**: Clean tab-based navigation with smooth transitions
- **Modern UI**: Beautiful gradients, shadows, and hover effects
- **Interactive Elements**: Smooth animations and transitions
- **Keyboard Navigation**: Use arrow keys to navigate between tabs
- **Local Storage**: Remembers the last active tab

## Sections

1. **About Me**: Personal introduction and skills showcase
2. **Blogs**: Blog posts with featured images and descriptions
3. **Random Ideas**: Creative project ideas with tags
4. **Projects**: Portfolio of completed projects with technologies used

## Customization Guide

### Personal Information

1. **Update the header** in `index.html`:
   ```html
   <h1 class="logo">Your Name</h1>
   <p class="tagline">Developer • Creator • Thinker</p>
   ```

2. **Add your photo**: Replace the placeholder in the About Me section with your actual photo:
   ```html
   <div class="about-image">
       <img src="your-photo.jpg" alt="Your Name" class="profile-photo">
   </div>
   ```

3. **Update skills**: Modify the skill tags in the About Me section:
   ```html
   <div class="skill-tags">
       <span class="skill-tag">Your Skill 1</span>
       <span class="skill-tag">Your Skill 2</span>
       <!-- Add more skills -->
   </div>
   ```

### Blog Posts

Add your blog posts by duplicating the blog card structure:
```html
<article class="blog-card">
    <div class="blog-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="blog-content">
        <h3>Your Blog Title</h3>
        <p class="blog-meta">Published on Date</p>
        <p>Your blog description...</p>
        <a href="your-blog-url" class="read-more">Read More</a>
    </div>
</article>
```

### Random Ideas

Add your creative ideas by duplicating the idea card:
```html
<div class="idea-card">
    <div class="idea-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Your Idea Title</h3>
    <p>Description of your idea...</p>
    <div class="idea-tags">
        <span class="idea-tag">Tag 1</span>
        <span class="idea-tag">Tag 2</span>
    </div>
</div>
```

### Projects

Add your projects by duplicating the project card:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-url" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="demo-url" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
    </div>
</div>
```

### Social Links

Update the social media links in the footer:
```html
<div class="social-links">
    <a href="your-github" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="mailto:your-email" class="social-link"><i class="fas fa-envelope"></i></a>
</div>
```

## Styling Customization

### Colors

The website uses a purple gradient theme. To change colors, update the CSS variables in `styles.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Alternative color schemes you can try: */
/* Blue: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%) */
/* Green: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%) */
/* Orange: linear-gradient(135deg, #fa709a 0%, #fee140 100%) */
```

### Fonts

The website uses Inter font from Google Fonts. To change fonts, update the font-family in `styles.css`:

```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features

- **Smooth Animations**: Fade-in effects and hover animations
- **Responsive Grid**: Automatically adjusts layout for different screen sizes
- **Accessibility**: Keyboard navigation and semantic HTML
- **Performance**: Optimized CSS and minimal JavaScript
- **Modern Design**: Clean, professional appearance

## Getting Started

1. Download or clone the files
2. Open `index.html` in your web browser
3. Customize the content as described above
4. Host on your preferred platform (GitHub Pages, Netlify, etc.)

## Deployment

### GitHub Pages
1. Create a new repository
2. Upload the files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly

### Other Platforms
The website is static HTML/CSS/JS, so it works on any web hosting platform.

## License

Feel free to use and modify this template for your personal website!

## Support

If you need help customizing the website, check the comments in the code or refer to this README file. 