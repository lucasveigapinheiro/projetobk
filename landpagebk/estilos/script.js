// ===== FLAME KING — Interatividade =====

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Menu mobile ---------- */
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('active');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 860) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ---------- Header: sombra + esconder ao rolar ---------- */
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        header.classList.toggle('scrolled', scrollY > 10);

        if (scrollY > lastScroll && scrollY > 160) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScroll = scrollY <= 0 ? 0 : scrollY;
    }, { passive: true });

    /* ---------- Scroll suave para âncoras ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    /* ---------- Reveal on scroll ---------- */
    const revealTargets = document.querySelectorAll(
        '.promo-card, .menu-item, .avaliacao-card, .faq-item, .sobre-visual, .sobre-text, .contato-info, .form-contato'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));

    /* ---------- Contadores do hero ---------- */
    function animateCounter(el, target, duration = 1600) {
        const start = performance.now();
        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target.toLocaleString('pt-BR');
        }
        requestAnimationFrame(tick);
    }

    const counters = document.querySelectorAll('.counter');
    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(el => animateCounter(el, parseInt(el.dataset.target, 10) || 0));
                    counterObserver.disconnect();
                }
            });
        }, { threshold: 0.4 });
        counterObserver.observe(document.querySelector('.hero-stats'));
    }

    /* ---------- Filtro do cardápio ---------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filter = btn.dataset.filter;
            menuItems.forEach(item => {
                const match = filter === 'all' || item.dataset.category === filter;
                item.classList.toggle('hidden', !match);
            });
        });
    });

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    openItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            item.classList.toggle('open', !isOpen);
            question.setAttribute('aria-expanded', String(!isOpen));
            answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
        });
    });

    /* ---------- Toast ---------- */
    const toast = document.getElementById('cart-toast');
    let toastTimer = null;

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    /* ---------- Adicionar ao carrinho (simulado) ---------- */
    let cartCount = 0;
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            const item = btn.closest('.promo-card, .menu-item')?.querySelector('h3, h4')?.textContent || 'Item';
            showToast(`🔥 ${item} adicionado ao pedido!`);
        });
    });

    /* ---------- Formulário de contato ---------- */
    const formContato = document.querySelector('.form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function (e) {
            e.preventDefault();
            showToast('✅ Mensagem enviada com sucesso!');
            this.reset();
        });
    }

    /* ---------- Newsletter ---------- */
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showToast('✅ Inscrição confirmada! Fique de olho no seu email.');
            this.reset();
        });
    }
});
