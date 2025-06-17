// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listeners to navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked nav item and corresponding tab content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Add smooth scrolling for better UX
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add hover effects for cards
    const cards = document.querySelectorAll('.blog-card, .idea-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add typing effect to the tagline (optional)
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                tagline.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Add scroll reveal animation for content
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all content sections
    const contentSections = document.querySelectorAll('.content-wrapper > *');
    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add active state management for better UX
    let currentTab = 'about';
    
    function updateActiveTab(tabName) {
        currentTab = tabName;
        localStorage.setItem('activeTab', tabName);
    }

    // Restore active tab from localStorage if available
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab && document.getElementById(savedTab)) {
        navItems.forEach(nav => nav.classList.remove('active'));
        tabContents.forEach(tab => tab.classList.remove('active'));
        
        document.querySelector(`[data-tab="${savedTab}"]`).classList.add('active');
        document.getElementById(savedTab).classList.add('active');
        currentTab = savedTab;
    }

    // Enhanced click handler with active state management
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            updateActiveTab(targetTab);
            
            // Remove active class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked nav item and corresponding tab content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const currentIndex = Array.from(navItems).findIndex(item => 
            item.classList.contains('active')
        );
        
        let newIndex = currentIndex;
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            newIndex = (currentIndex + 1) % navItems.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            newIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
        }
        
        if (newIndex !== currentIndex) {
            navItems[newIndex].click();
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}); 