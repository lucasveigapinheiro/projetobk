// ===== INTERATIVIDADE DO SITE =====

// Menu Hamburger
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // Fechar menu ao redimensionar
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            hamburger?.classList.remove('active');
            nav?.classList.remove('active');
        }
    });
});

// Botões primários com efeito ripple
const btnPrimary = document.querySelectorAll('.btn-primary');

btnPrimary.forEach(btn => {
    btn.addEventListener('click', function (e) {
        // Efeito de ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        // Remover ripple após animação
        setTimeout(() => ripple.remove(), 600);

        // Mensagem de feedback
        showNotification('Pedido realizado com sucesso! 🎉');
    });
});

// Formulário de contato
const formContato = document.querySelector('.form-contato');
if (formContato) {
    formContato.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensagem = this.querySelector('textarea').value;

        if (nome && email && mensagem) {
            showNotification('✅ Mensagem enviada com sucesso!');
            this.reset();
        }
    });
}

// Animação ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.promo-card, .menu-item, .contato-info, .media-card').forEach(el => {
    observer.observe(el);
});

// Contador animado de scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo - esconder header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll para cima - mostrar header
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Adicionar transição suave ao header
header.style.transition = 'transform 0.3s ease';

// Função para mostrar notificações
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #EC1C24;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInNotification 0.3s ease;
        font-weight: bold;
    `;

    document.body.appendChild(notification);

    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animações das notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInNotification {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutNotification {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Efeito de contador para seções
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Adicionar efeito hover aos itens do menu
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação das promoções
    const promoCards = document.querySelectorAll('.promo-card');
    promoCards.forEach((card, index) => {
        card.style.animation = `slideIn ${0.6 + index * 0.1}s ease`;
    });
});

// Função para atualizar ano no footer
document.addEventListener('DOMContentLoaded', function () {
    const anoAtual = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = `© ${anoAtual} Burger King Brasil. Todos os direitos reservados. | Qualidade que Reina`;
    }

    // Detectar cliques em links internos e scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Animação dos contadores na hero
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    let countersStarted = false;
    const countersObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                counters.forEach(el => {
                    const target = parseInt(el.dataset.target, 10) || 0;
                    animateCounter(el, target, 1600);
                });
                countersObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) countersObserver.observe(heroStats);
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const open = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            if (!open) answer.style.display = 'block';
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showNotification('✅ Obrigado! Você foi inscrito na newsletter.');
            this.reset();
        });
    }
});

// Galeria interativa com zoom
document.addEventListener('DOMContentLoaded', function () {
    function setupGalleryModal() {
        const galleryItems = document.querySelectorAll('.galeria-item');
        
        galleryItems.forEach(item => {
            const button = item.querySelector('.media-card');
            if (!button) return;

            button.addEventListener('click', () => {
                const title = button?.dataset.title || item.querySelector('.galeria-overlay p')?.textContent || '';
                const symbol = button?.textContent?.trim() || '';
                
                createModal(symbol, title);
            });
        });
    }

    function createModal(symbol, title) {
        // Verificar se modal já existe
        if (document.querySelector('.modal-overlay')) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Fechar modal">&times;</button>
                ${symbol ? `<div class="modal-symbol">${symbol}</div>` : ''}
                ${title ? `<h3 class="modal-title">${title}</h3>` : ''}
            </div>
        `;

        // Estilos do modal
        const styles = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                color: #fff;
                text-align: center;
                max-width: 90%;
                padding: 2rem;
                position: relative;
            }
            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            .modal-close:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
            .modal-symbol {
                font-size: 6rem;
                margin-bottom: 1rem;
            }
            .modal-title {
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
            }
        `;

        // Adicionar estilos se não existirem
        if (!document.querySelector('#modal-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'modal-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }

        document.body.appendChild(modal);

        // Event listeners
        const closeModal = () => {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => modal.remove(), 300);
            document.body.style.overflow = '';
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Fechar com ESC
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
    }

    setupGalleryModal();
});
