// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll animations
    const scrollElements = document.querySelectorAll('.feature-card, .team-member, .value-card, .service-card');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const elementOutOfView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutOfView(el)) {
                hideScrollElement(el);
            }
        });
    };
    
    // Add initial fade-in animation to elements
    scrollElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Run once on initial load
    handleScrollAnimation();
    
    // Form validation for contact forms if present
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            let valid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value.trim() === '') {
                valid = false;
                showError(nameInput, 'Name is required');
            } else {
                removeError(nameInput);
            }
            
            if (emailInput.value.trim() === '') {
                valid = false;
                showError(emailInput, 'Email is required');
            } else if (!isValidEmail(emailInput.value)) {
                valid = false;
                showError(emailInput, 'Please enter a valid email');
            } else {
                removeError(emailInput);
            }
            
            if (messageInput.value.trim() === '') {
                valid = false;
                showError(messageInput, 'Message is required');
            } else {
                removeError(messageInput);
            }
            
            if (valid) {
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>LMAO this doesnt do anything, i couldnt be bothered to set up an endpoint for this bit CHRIS.</h3><p>Bass AI Solutions will get back to you shortly.</p></div>';
            }
        });
    }
    
    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorElement);
        }
        input.classList.add('error-input');
    }
    
    function removeError(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        if (errorElement) {
            formControl.removeChild(errorElement);
        }
        input.classList.remove('error-input');
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Add CSS class for scroll animation and other styling
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.scrolled {
            opacity: 1;
            transform: translateY(0);
        }
        
        .error-message {
            color: #dc3545;
            font-size: 0.9rem;
            margin-top: 5px;
        }
        
        .error-input {
            border-color: #dc3545 !important;
        }
        
        .success-message {
            text-align: center;
            padding: 40px;
        }
        
        .success-message i {
            color: #28a745;
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        /* New styles for centered social icons and website icon */
        .social-icons-centered {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
        }
        
        .social-icons-centered a {
            font-size: 1.5rem;
            color: #FFF;
            transition: color 0.3s ease;
        }
        
        .social-icons-centered a:hover {
            color: #0275d8;
        }
        
        .website-icon {
            text-align: center;
            margin: 15px 0;
        }
        
        .website-icon a {
            font-size: 1.5rem;
            color: #333;
            transition: color 0.3s ease;
        }
        
        .website-icon a:hover {
            color: #0275d8;
        }
        
        /* Updated styles for Our Approach section */
        .process {
            background-color: #f8f9fa;
            padding: 80px 0;
        }
        
        .process h2 {
            text-align: center;
            margin-bottom: 50px;
        }
        
        .process-steps {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .step {
            flex-basis: calc(20% - 20px);
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }
        
        .step:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 20px rgba(0,0,0,0.1);
        }
        
        .step-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: #0275d8;
            color: white;
            border-radius: 50%;
            margin: 0 auto 15px;
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        .step h3 {
            margin-bottom: 10px;
            color: #333;
        }
        
        .step p {
            font-size: 0.9rem;
            color: #666;
        }
        
        /* Responsive styles for approach section */
        @media (max-width: 768px) {
            .step {
                flex-basis: calc(50% - 20px);
                margin-bottom: 20px;
            }
        }
        
        @media (max-width: 480px) {
            .step {
                flex-basis: 100%;
            }
        }
        
        /* Contact form styles */
        .contact-section {
            padding: 80px 0;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }
        
        .contact-details {
            margin: 30px 0;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .contact-item i {
            font-size: 1.2rem;
            color: #0275d8;
            margin-right: 15px;
            width: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
        }
        
        .form-group textarea {
            resize: vertical;
        }
        
        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});
