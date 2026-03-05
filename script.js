// =============================
// HEADER SCROLL EFFECT
// =============================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});


// =============================
// EFEITO DIGITANDO
// =============================
document.addEventListener("DOMContentLoaded", function () {

    const texto = "R$399,00";
    const elemento = document.getElementById("digitando");

    if (elemento) {
        let i = 0;

        function digitar() {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 80);
            }
        }

        digitar();
    }
});


// =============================
// ANIMAÇÃO DOS NÚMEROS (STATS)
// =============================
document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");

                let current = 0;
                const increment = target / 200;

                function updateCount() {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                }

                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});


// =============================
// ANIMAÇÃO DOS CARDS (CASES)
// =============================
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll('.case-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});


// =============================
// CANVAS PARTICLES
// =============================
const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particlesArray = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 2;
            this.speedY = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.20 + 0.05;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;

            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(160, 32, 240, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < 80; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesArray.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initParticles();
    });

    initParticles();
    animateParticles();
}


// =============================
// BOLHAS ANIMADAS
// =============================
const container = document.querySelector('.bubbles-container');

if (container) {
    function createBubble() {
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');

        const size = Math.random() * 5 + 10;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 8 + 4) + 's';

        container.appendChild(bubble);
        bubble.addEventListener('animationend', () => bubble.remove());
    }

    setInterval(createBubble, 300);
}


// =============================
// MENU HAMBURGUER
// =============================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    // Função para abrir/fechar o menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
});