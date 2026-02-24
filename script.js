
document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Modal Handling
    const modals = document.querySelectorAll('.modal-backdrop');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Function to open modal
    window.openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    // Function to close modal
    window.closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Close modal on backdrop click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');

        // Update icon
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    themeToggle.addEventListener('click', toggleTheme);

    // Initial check
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        icon.className = 'fa-solid fa-sun';
    }

    // Generic image popup
    window.openImageModal = (src) => {
        const modal = document.getElementById('modal-image');
        const img = document.getElementById('popup-img');
        if (modal && img) {
            img.src = src;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };
});
