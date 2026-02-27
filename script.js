// Gerenciamento do Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');

        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    });
}

// Animação de Números (Stats)
const stats = document.querySelectorAll('.stat-number');
const speed = 200;

const animateStats = () => {
    stats.forEach(stat => {
        const updateCount = () => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;
            const inc = target / speed;

            if (count < target) {
                stat.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                stat.innerText = target;
            }
        };
        updateCount();
    });
};

// Disparar animação quando chegar na seção
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if(statsSection) observer.observe(statsSection);

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// ===== EFEITO DIGITANDO HERO =====
document.addEventListener("DOMContentLoaded", function () {

    const texto = "R$399,00";
    const elemento = document.getElementById("digitando");

    if (!elemento) return;

    let i = 0;

    function digitar() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, 80);
        }
    }

    digitar();
});



const canvas = document.getElementById("particles");
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

function init() {
    particlesArray = [];
    for (let i = 0; i < 80; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    init();
});

init();
animate();

const container = document.querySelector('.bubbles-container');

function createBubble() {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');

    // tamanho aleatório entre 10px e 30px
    const size = Math.random() * 5 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // posição horizontal aleatória
    bubble.style.left = Math.random() * 100 + '%';

    // duração aleatória da animação (4s a 12s)
    const duration = Math.random() * 8 + 4;
    bubble.style.animationDuration = duration + 's';

    // adiciona à seção
    container.appendChild(bubble);

    // remove bolinha depois da animação
    bubble.addEventListener('animationend', () => bubble.remove());
}

// cria bolinhas a cada 300ms
setInterval(createBubble, 300);

const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    }

    // opcional: só começar quando estiver visível
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
            updateCount();
            observer.disconnect();
        }
    }, {threshold: 0.5});

    observer.observe(counter);
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 900; // velocidade (quanto menor, mais rápido)

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
