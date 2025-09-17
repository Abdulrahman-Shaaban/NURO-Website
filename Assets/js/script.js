// Page navigation
function showPage(pageId, scrollToId = null) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (activeLink) activeLink.classList.add('active');
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');
    if (scrollToId) {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    document.querySelector('nav ul').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
            showPage(link.getAttribute('data-page'));
        }, 100);
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
});

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}
prevButton.addEventListener('click', () => {
    prevButton.style.transform = 'translateY(-50%) scale(0.9)';
    setTimeout(() => {
        prevButton.style.transform = 'translateY(-50%) scale(1)';
        showSlide(currentSlide - 1);
    }, 100);
});
nextButton.addEventListener('click', () => {
    nextButton.style.transform = 'translateY(-50%) scale(0.9)';
    setTimeout(() => {
        nextButton.style.transform = 'translateY(-50%) scale(1)';
        showSlide(currentSlide + 1);
    }, 100);
});
setInterval(() => showSlide(currentSlide + 1), 5000);

// Order form
const purchaseForm = document.getElementById('purchase-form');
const orderMessage = document.getElementById('order-message');
purchaseForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitButton = purchaseForm.querySelector('.btn-primary');
    submitButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        submitButton.style.transform = 'scale(1)';
        const quantity = document.getElementById('quantity').value;
        const size = document.getElementById('size').value;
        const color = document.getElementById('color').value;
        if (!quantity || !size || !color) {
            orderMessage.className = 'order-message error';
            orderMessage.textContent = 'Please fill all fields!';
            return;
        }
        orderMessage.className = 'order-message success';
        orderMessage.textContent = `Order placed: ${quantity} NURO Smart Headband(s) - Size: ${size} - Color: ${color}`;
    }, 100);
});

// Contact form
const contactForm = document.getElementById('contact-form');
const contactMsg = document.getElementById('contact-message');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('.btn-primary');
    submitButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        submitButton.style.transform = 'scale(1)';
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            contactMsg.className = 'contact-message error';
            contactMsg.textContent = 'Please fill in all fields!';
            return;
        }
        contactMsg.className = 'contact-message success';
        contactMsg.textContent = `Thank you, ${name}! We have received your message.`;
        contactForm.reset();
    }, 100);
});