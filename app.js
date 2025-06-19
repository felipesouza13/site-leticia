// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
    closeMobileMenu();
}

// FAQ Toggle functionality
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq__icon');
    
    // Close all other FAQ items
    const allAnswers = document.querySelectorAll('.faq__answer');
    const allIcons = document.querySelectorAll('.faq__icon');
    
    allAnswers.forEach((item, index) => {
        if (item !== answer) {
            item.classList.remove('active');
            allIcons[index].textContent = '+';
            allIcons[index].style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current FAQ item
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Blog category filtering
function filterBlog(category) {
    const cards = document.querySelectorAll('.blog-card');
    const buttons = document.querySelectorAll('.blog__category');
    const grid = document.querySelector('.blog__grid');
    
    // Remove expanded state when filtering
    grid.classList.remove('expanded');
    document.querySelector('.blog__more').classList.remove('expanded');
    document.querySelector('.blog__more button').textContent = 'Ver mais posts ↓';
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category || 
            (category === 'todos' && btn.textContent.toLowerCase() === 'todos')) {
            btn.classList.add('active');
        }
    });
    
    // Filter cards
    cards.forEach(card => {
        card.style.display = 'none';
        if (category === 'todos' || card.dataset.category === category) {
            if (grid.querySelectorAll(`[data-category="${category === 'todos' ? card.dataset.category : category}"]:nth-child(-n+3)`).length <= 3) {
                card.style.display = 'block';
            }
        }
    });
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        
        // Remove previous error states
        input.classList.remove('error', 'success');
        
        if (!value) {
            input.classList.add('error');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(value)) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.add('success');
        }
    });
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle contact form submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('.form__submit');
    const originalText = submitButton.textContent;
    
    if (validateForm(form)) {
        // Show loading state
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset form
            form.reset();
            
            // Remove validation classes
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    } else {
        showNotification('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
    }
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification__close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add close button styles
    const closeButton = notification.querySelector('.notification__close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    `;
    
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.background = 'rgba(255,255,255,0.2)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.background = 'none';
    });
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Highlight active navigation link based on scroll position
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current nav link
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Add active nav link styles
function addNavLinkStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .nav__link.active {
            color: var(--rosa-escuro);
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);
}

// Animate elements on scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.area-card, .blog-card, .step');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.area-card, .blog-card, .step');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Blog card read more functionality
function handleReadMore(event) {
    if (event.target.classList.contains('blog-card__read-more')) {
        event.preventDefault();
        showNotification('Esta funcionalidade estará disponível em breve no blog completo.', 'info');
    }
}

// WhatsApp button click tracking
function trackWhatsAppClick() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
        });
    }
}

// Handle smooth scrolling for navigation links
function initSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    addNavLinkStyles();
    initSmoothScrolling();
    trackWhatsAppClick();
    
    // Mobile navigation
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Blog read more buttons
    document.addEventListener('click', handleReadMore);
    
    // Scroll events
    window.addEventListener('scroll', () => {
        highlightActiveNavLink();
        animateOnScroll();
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Initial animation trigger
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

// Global functions (accessible from HTML)
window.scrollToSection = scrollToSection;
window.toggleFaq = toggleFaq;
window.filterBlog = filterBlog;

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event
const debouncedScrollHandler = debounce(() => {
    highlightActiveNavLink();
    animateOnScroll();
}, 10);

// Replace the scroll event listener with debounced version
window.removeEventListener('scroll', () => {
    highlightActiveNavLink();
    animateOnScroll();
});

window.addEventListener('scroll', debouncedScrollHandler);

function expandBlog() {
    const grid = document.querySelector('.blog__grid');
    const moreButton = document.querySelector('.blog__more');
    const buttonText = moreButton.querySelector('button');
    
    grid.classList.toggle('expanded');
    moreButton.classList.toggle('expanded');
    
    if (grid.classList.contains('expanded')) {
        buttonText.textContent = 'Ver menos posts ↑';
    } else {
        buttonText.textContent = 'Ver mais posts ↓';
    }
}