const cards = document.querySelectorAll('.card');
let lastScroll = window.scrollY;

function animateCards() {
    const direction = window.scrollY > lastScroll ? 'down' : 'up';
    lastScroll = window.scrollY;

    cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
            setTimeout(() => {
                card.classList.add('show');
            }, i * 150);
        } else {
            setTimeout(() => {
                card.classList.remove('show');
            }, i * 100);
        }
    });
}

window.addEventListener('scroll', animateCards);
animateCards();

cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hover-effect'));
    card.addEventListener('mouseleave', () => card.classList.remove('hover-effect'));
});



document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');
    let lastScrollY = window.scrollY;

    function animateProjects() {
        const direction = window.scrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = window.scrollY;

        projectCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) { // 85% viewport
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 150);
            } else if (rect.top > window.innerHeight) { // Optional: reset when scrolling back
                card.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', animateProjects);
    animateProjects(); // Trigger on load

    // Hover effect already handled in CSS
});


document.addEventListener("DOMContentLoaded", function () {
    const projectDivs = document.querySelectorAll('.projects-description > div');

    function animateProjects() {
        projectDivs.forEach((div, index) => {
            const rect = div.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) { // appear when 85% visible
                setTimeout(() => {
                    div.classList.add('show');
                }, index * 150);
            } else if (rect.top > window.innerHeight) { // reset for scroll back
                div.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', animateProjects);
    animateProjects(); // trigger on load
});





// Scroll-triggered animation for Skills
const skillItems = document.querySelectorAll('.skill-item');

function animateSkills() {
    skillItems.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
            setTimeout(() => item.classList.add('show'), i * 150);
        } else {
            // Remove show class when scrolling up/out of view for repeat effect
            setTimeout(() => item.classList.remove('show'), i * 100);
        }
    });
}

window.addEventListener('scroll', animateSkills);
animateSkills();
