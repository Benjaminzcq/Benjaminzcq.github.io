# AI Product Manager Portfolio - Benjamin

🚀 A modern, tech-inspired portfolio website showcasing AI product management expertise, projects, and insights.

## ✨ Features

- **Modern AI Tech Design**: Dark theme with neon blue/purple gradients
- **Smooth Interactions**: Parallax effects, scroll animations, and micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessibility First**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Lazy loading, throttled events, and efficient CSS
- **SEO Ready**: Semantic HTML5 and meta tags for better search engine visibility

## 🎨 Design Highlights

- Deep dark color scheme (#0a0e27, #121730)
- Vibrant gradient accents (blue → purple, cyan → blue)
- Animated background with floating orbs and grid overlay
- Glassmorphism effects on navigation
- Smooth scroll behavior with intersection observers

## 📂 Project Structure

```
Benjaminzcq.github.io/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete styling with CSS variables
├── script.js           # Interactive features and animations
└── README.md          # Project documentation
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/benjaminzcq/benjaminzcq.github.io.git
   cd benjaminzcq.github.io
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Deploy to GitHub Pages**
   - Push to the `main` branch
   - Enable GitHub Pages in repository settings
   - Your site will be live at `https://benjaminzcq.github.io/`

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About**: Professional background, skills, and statistics
3. **Portfolio**: Filterable project showcase with 6 representative AI products
4. **Articles**: Blog posts and insights about AI product management
5. **Contact**: Multiple contact methods with social links
6. **Footer**: Copyright and quick navigation

## 🛠️ Customization Guide

### Update Personal Information

**Contact Details** (index.html, line ~615):
```html
<a href="mailto:your.email@example.com" class="contact-btn">
```

**Social Links** (index.html, lines ~620-635):
```html
<a href="https://github.com/benjaminzcq">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### Change Color Scheme

Edit CSS variables in `styles.css` (lines 7-15):
```css
:root {
    --primary-blue: #6366f1;     /* Primary accent color */
    --primary-purple: #a855f7;   /* Secondary accent */
    --primary-cyan: #06b6d4;     /* Tertiary accent */
}
```

### Add New Projects

Add a new project card in the Portfolio section (around line 250 in index.html):
```html
<article class="project-card" data-category="ai-app">
    <div class="project-image">
        <img src="your-image-url" alt="Project description">
        <div class="project-overlay">
            <a href="#" class="project-link">查看详情</a>
        </div>
    </div>
    <div class="project-content">
        <div class="project-tags">
            <span class="project-tag">AI</span>
        </div>
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Description here</p>
        <div class="project-metrics">
            <div class="metric">
                <span class="metric-value">100%</span>
                <span class="metric-label">Success</span>
            </div>
        </div>
    </div>
</article>
```

### Add New Articles

Add a new article card in the Articles section (around line 450 in index.html):
```html
<article class="article-card" data-category="product">
    <div class="article-meta">
        <span class="article-date">2024年1月1日</span>
        <span class="article-category">产品思考</span>
    </div>
    <h3 class="article-title">
        <a href="#">Your Article Title</a>
    </h3>
    <p class="article-excerpt">Article excerpt...</p>
    <div class="article-footer">
        <span class="read-time">5分钟阅读</span>
        <a href="#" class="read-more">阅读全文 →</a>
    </div>
</article>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Reduced motion support for users with motion sensitivity

## ⚡ Performance Features

- Lazy loading for images
- Throttled scroll events
- Debounced resize handlers
- Intersection Observer for animations
- Minimal external dependencies
- Optimized CSS with CSS variables

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📧 Contact

- **Email**: your.email@example.com
- **GitHub**: [@benjaminzcq](https://github.com/benjaminzcq)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ by Benjamin**

*Powered by HTML, CSS, and Vanilla JavaScript - No frameworks needed!*
