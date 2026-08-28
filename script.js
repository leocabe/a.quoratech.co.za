document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. FAQ ACCORDION (FORMADO ACCORDION - SOLO UNA PREGUNTA ABIERTA A LA VEZ)
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todas las demás preguntas
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            // Alternar el estado de la pregunta clickeada
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('active');
                // Asignar el scrollHeight para animación suave de apertura
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* ==========================================================================
       2. SCROLL REVEAL (ELEMENTOS SURGEN LENTAMENTE - FADE / SLIDE / 3D ROTATION)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const mockupElements = document.querySelectorAll('.scroll-reveal-mockup');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Una vez revelado, dejamos de observarlo para optimizar rendimiento
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealObserverOption = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12 // Se activa cuando el 12% del elemento es visible
    };
    
    const observer = new IntersectionObserver(revealCallback, revealObserverOption);
    
    // Registrar observadores
    revealElements.forEach(el => observer.observe(el));
    mockupElements.forEach(el => observer.observe(el));

    /* ==========================================================================
       3. MICRO DETALLE: CORAZÓN DE INSTAGRAM INTERACTIVO
       ========================================================================== */
    const heartButtons = document.querySelectorAll('.heart-icon-wrapper');
    
    heartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const svg = btn.querySelector('.heart-svg');
            const post = btn.closest('.instagram-post') || btn.closest('.instagram-reply');
            const likesCountEl = post.querySelector('.post-likes-count');
            
            let likesText = likesCountEl.textContent;
            let currentLikes = parseInt(likesText);
            
            if (svg.style.fill === 'rgb(237, 73, 86)' || svg.style.fill === '#ed4956') {
                // Desmarcar me gusta
                svg.style.fill = '#8e8e8e';
                svg.style.transform = 'scale(1)';
                currentLikes--;
            } else {
                // Marcar me gusta (rojo de Instagram)
                svg.style.fill = '#ed4956';
                svg.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    svg.style.transform = 'scale(1)';
                }, 150);
                currentLikes++;
            }
            
            likesCountEl.textContent = `${currentLikes} Me gusta`;
        });
    });

    /* ==========================================================================
       4. CONEXIÓN DE COMPRAS Y TRASPASO DE UTMs (AUTODECORACIÓN DE ENLACES)
       ========================================================================== */
    const decorateCheckoutLinks = () => {
        const searchParams = window.location.search;
        if (!searchParams) return;
        
        const cleanParams = searchParams.startsWith('?') ? searchParams.substring(1) : searchParams;
        const currentUrlParams = new URLSearchParams(cleanParams);
        
        document.querySelectorAll('a[href*="pay.hotmart.com"]').forEach(link => {
            try {
                const url = new URL(link.href);
                currentUrlParams.forEach((value, key) => {
                    url.searchParams.set(key, value);
                });
                link.href = url.toString();
            } catch (err) {
                console.error("Error decorando enlace de checkout:", err);
            }
        });
    };

    // Decorar enlaces inmediatamente
    decorateCheckoutLinks();

    /* ==========================================================================
       5. DETALLE: EFECTO 3D DE PARALAJE SUAVE AL MOVER EL MOUSE (SOLO DESKTOP)
       ========================================================================== */
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    
    if (!isMobile) {
        mockupElements.forEach(mockup => {
            if (mockup.classList.contains('video-wrapper')) return;
            
            const parent = mockup.parentElement;
            if (!parent) return;
            
            parent.addEventListener('mousemove', (e) => {
                const rect = parent.getBoundingClientRect();
                const x = e.clientX - rect.left - (rect.width / 2);
                const y = e.clientY - rect.top - (rect.height / 2);
                
                // Rotación leve proporcional a la posición del mouse
                const rotateX = -(y / rect.height) * 15;
                const rotateY = (x / rect.width) * 15;
                
                mockup.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                mockup.style.transition = 'transform 0.1s ease';
            });
            
            parent.addEventListener('mouseleave', () => {
                mockup.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                mockup.style.transition = 'transform 0.6s ease';
            });
        });
    }

    /* ==========================================================================
       6. CRONÓMETRO DE OFERTA EXCLUSIVA (15 MINUTOS, PRAZO REAL POR VISITANTE)
       O prazo é fixado no primeiro acesso e guardado em localStorage, então
       um F5 não reinicia o contador — a urgência corresponde ao que é mostrado.
       ========================================================================== */
    const timerTextEl = document.getElementById('promo-timer-text');
    if (timerTextEl) {
        const DURATION_MS = 15 * 60 * 1000; // 15 minutos
        const STORAGE_KEY = 'promoDeadline';

        let deadline = Number(localStorage.getItem(STORAGE_KEY));
        if (!deadline || deadline < Date.now()) {
            deadline = Date.now() + DURATION_MS;
            localStorage.setItem(STORAGE_KEY, String(deadline));
        }

        const updateTimer = () => {
            const timeRemaining = Math.round((deadline - Date.now()) / 1000);

            if (timeRemaining <= 0) {
                timerTextEl.textContent = '¡Se acabó el tiempo, termina ya!';
                clearInterval(timerInterval);
                return;
            }

            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            const minutesStr = String(minutes).padStart(2, '0');
            const secondsStr = String(seconds).padStart(2, '0');

            timerTextEl.textContent = `🔥 La oferta expira en ${minutesStr}:${secondsStr} 🔥`;
        };

        updateTimer(); // ejecutar inmediatamente al inicio
        const timerInterval = setInterval(updateTimer, 1000);
    }

    /* ==========================================================================
       7. CTA FIJO (MOBILE) — visible após passar do hero, oculto perto do
       rodapé (onde já existe o CTA final) para não duplicar o botão à vista.
       ========================================================================== */
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.querySelector('.hero-section');
    const footer = document.querySelector('footer');

    if (stickyCta && heroSection && footer) {
        const heroObserver = new IntersectionObserver(([entry]) => {
            stickyCta.dataset.pastHero = String(!entry.isIntersecting);
            updateStickyCtaVisibility();
        }, { threshold: 0 });
        heroObserver.observe(heroSection);

        const footerObserver = new IntersectionObserver(([entry]) => {
            stickyCta.dataset.nearFooter = String(entry.isIntersecting);
            updateStickyCtaVisibility();
        }, { threshold: 0, rootMargin: '0px 0px -50% 0px' });
        footerObserver.observe(footer);

        function updateStickyCtaVisibility() {
            const shouldShow = stickyCta.dataset.pastHero === 'true' && stickyCta.dataset.nearFooter !== 'true';
            stickyCta.classList.toggle('is-visible', shouldShow);
        }
    }
});
