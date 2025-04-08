document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    let isDark = localStorage.getItem('theme') === 'dark';
    
    function setTheme() {
        html.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        setTheme();
    });
    
    setTheme();

    // Exams Data
    const exams = [
        { 
            name: 'JEE Mains 2024', 
            council: 'National Testing Agency',
            logo: '⚛️',
            desc: 'Comprehensive preparation with 10,000+ practice problems and AI mock tests',
            cta: 'Start Preparation'
        },
        // Add 5 more exam objects...
    ];

    const examsGrid = document.querySelector('.exams-grid');
    exams.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        card.innerHTML = `
            <div class="exam-content">
                <div class="exam-details">
                    <h3>${exam.name}</h3>
                    <small>${exam.council}</small>
                    <p class="exam-desc">${exam.desc}</p>
                    <a href="#" class="exam-cta">
                        ${exam.cta} <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <div class="exam-logo">
                    ${exam.logo}
                </div>
            </div>
        `;
        examsGrid.appendChild(card);
    });

    // Testimonials Data
    const testimonials = [
        {
            name: 'Aarav Sharma',
            role: 'NEET Top 100',
            text: 'Edxtra revolutionized my preparation strategy with personalized study plans'
        },
        // Add more testimonials...
    ];

    const testimonialsGrid = document.querySelector('.testimonials-grid');
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-content">
                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                <p>${testimonial.text}</p>
                <div class="author">
                    <h4>${testimonial.name}</h4>
                    <small>${testimonial.role}</small>
                </div>
            </div>
        `;
        testimonialsGrid.appendChild(card);
    });

    // Mobile Menu
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.exam-card, .feature-card').forEach(el => observer.observe(el));
});
