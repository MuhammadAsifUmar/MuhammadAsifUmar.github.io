/* ============================================================
   MUHAMMAD ASIF UMAR — AI ENGINEER PORTFOLIO
   ============================================================ */

AOS.init({ duration: 900, once: false, offset: 60, easing: 'ease-in-out', delay: 80, mirror: false, anchorPlacement: 'top-bottom' });

// ---------- Preloader ----------
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 400);
});

// ---------- Typing Animation ----------
const roles = [
    'AI Engineer',
    'LLM & RAG Developer',
    'Speech AI Researcher',
    'Computer Vision Engineer',
    'Full-Stack AI Developer'
];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    if (!typedEl) return;
    const current = roles[roleIndex];
    if (!isDeleting) {
        typedEl.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) { isDeleting = true; return setTimeout(typeEffect, 1800); }
        setTimeout(typeEffect, 80);
    } else {
        typedEl.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; return setTimeout(typeEffect, 400); }
        setTimeout(typeEffect, 40);
    }
}
document.addEventListener('DOMContentLoaded', () => setTimeout(typeEffect, 600));

// ---------- Mobile Menu ----------
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navLinks.classList.remove('active');
}));
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
});

// ---------- Scroll: nav, progress, spy, back-to-top ----------
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const sections = document.querySelectorAll('section[id], header[id]');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 50);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = (y / docHeight) * 100 + '%';
    backToTop.classList.toggle('show', y > 500);

    let current = 'home';
    sections.forEach(section => {
        if (y >= section.offsetTop - 150) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}, { passive: true });

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---------- Animated Counters (supports decimals) ----------
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimals || 0);
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();
        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (eased * target).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ---------- Skill Bars ----------
const progressBars = document.querySelectorAll('.progress-bar');
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.progress + '%';
        barObserver.unobserve(entry.target);
    });
}, { threshold: 0.4 });
progressBars.forEach(bar => barObserver.observe(bar));

// ---------- Project Filtering ----------
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            card.classList.toggle('hide', !(filter === 'all' || card.dataset.category === filter));
        });
    });
});

// ---------- Contact Form ----------
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = contactForm.email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) { showStatus('Please enter a valid email address.', 'error'); return; }

        /* 🔗 Connect Formspree / FastAPI / EmailJS here (see previous notes) */
        showStatus('✅ Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
    });
}
function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = `form-status ${type}`;
    setTimeout(() => { formStatus.textContent = ''; formStatus.className = 'form-status'; }, 5000);
}

// ---------- Footer Year ----------
document.getElementById('year').textContent = new Date().getFullYear();
