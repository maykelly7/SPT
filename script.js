// Gerenciamento do Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Animação básica nos traços do botão
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
});

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
const textoHero = "R$399,00";
const elementoHero = document.getElementById("digitando");
const cursorHero = document.querySelector(".cursor");

if (elementoHero) {
    let i = 0;

    function digitarHero() {
        if (i < textoHero.length) {
            elementoHero.innerHTML += textoHero.charAt(i);
            i++;
            setTimeout(digitarHero, 80);
        } else {
            setTimeout(() => {
                cursorHero.style.display = "none";
            }, 500);
        }
    }

    digitarHero();
}