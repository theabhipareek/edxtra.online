document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let isDark = localStorage.getItem('theme') === 'dark' || prefersDark;
    
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

    const exams = [
        {name: 'JEE Main', council: 'NTA', logo: '⚛️'},
        {name: 'NEET UG', council: 'NTA', logo: '🩺'},
        {name: 'UPSC CSE', council: 'UPSC', logo: '📜'},
        {name: 'CAT', council: 'IIM', logo: '📊'},
        {name: 'SSC CGL', council: 'SSC', logo: '🏛️'},
        {name: 'CLAT', council: 'NLU', logo: '⚖️'}
    ];

    const examsGrid = document.querySelector('.exams-grid');
    exams.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card fade-in';
        card.innerHTML = `
            <div class="exam-logo">${exam.logo}</div>
            <h3>${exam.name}</h3>
            <p>Conducted by ${exam.council}</p>
        `;
        examsGrid.appendChild(card);
    });

    const testimonials = [
        {name: 'Rahul Sharma', text: 'Edxtra helped me crack NEET with AIR 42!', role: 'Medical Aspirant'},
        {name: 'Priya Singh', text: 'Best platform for UPSC preparation.', role: 'Civil Services'},
        {name: 'Amit Patel', text: 'Transformed my JEE preparation strategy.', role: 'Engineering'}
    ];

    const testimonialsGrid = document.querySelector('.testimonials-grid');
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card fade-in';
        card.innerHTML = `
            <p>"${testimonial.text}"</p>
            <h4>${testimonial.name}</h4>
            <small>${testimonial.role}</small>
        `;
        testimonialsGrid.appendChild(card);
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});
