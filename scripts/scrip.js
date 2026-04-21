/* ============================================================
   1. COPIAR CORREO AL PORTAPAPELES
============================================================ */

const copyButtons = document.querySelectorAll('.contact__value');

copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.textContent.trim())
            .then(() => {
                const original = btn.textContent;
                btn.textContent = 'Copiado';
                setTimeout(() => btn.textContent = original, 1500);
            });
    });
});


/* ============================================================
   2. ANIMACIONES SUAVES AL HACER SCROLL
============================================================ */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .project-card, .blog-card, .skills-block, .education__item, .contact')
    .forEach(el => observer.observe(el));


/* ============================================================
   3. MOSTRAR MÁS PROYECTOS
============================================================ */

const verMasBtn = document.querySelector('.btn--secondary');
const projectsGrid = document.querySelector('.projects-grid');

const proyectosExtra = [
    {
        titulo: "Proyecto adicional 1",
        descripcion: "Descripción breve del proyecto.",
        tecnologias: ["HTML", "CSS", "JS"],
        imagen: "assets/img/proyecto-extra1.png",
        codigo: "#",
        demo: "#"
    },
    {
        titulo: "Proyecto adicional 2",
        descripcion: "Otro proyecto que puedes agregar.",
        tecnologias: ["Python", "Linux"],
        imagen: "assets/img/proyecto-extra2.png",
        codigo: "#",
        demo: "#"
    }
];

let proyectosAgregados = false;

if (verMasBtn && projectsGrid) {
    verMasBtn.addEventListener('click', () => {
        if (proyectosAgregados) return;

        proyectosExtra.forEach(proyecto => {
            const card = document.createElement('article');
            card.classList.add('project-card');

            card.innerHTML = `
                <div class="project-card__image-wrapper">
                    <img src="${proyecto.imagen}" class="project-card__image">
                </div>

                <div class="project-card__content">
                    <h3 class="project-card__title">${proyecto.titulo}</h3>
                    <p class="project-card__description">${proyecto.descripcion}</p>

                    <div class="project-card__tech">
                        ${proyecto.tecnologias.map(t => `<span class="badge">${t}</span>`).join('')}
                    </div>

                    <div class="project-card__links">
                        <a href="${proyecto.codigo}" class="project-card__link">Ver código</a>
                        <a href="${proyecto.demo}" class="project-card__link">Ver demo</a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(card);
            observer.observe(card);
        });

        proyectosAgregados = true;
        verMasBtn.textContent = "No hay más proyectos por ahora";
    });
}


/* ============================================================
   4. EFECTO SUAVE EN EL MENÚ AL HACER SCROLL
============================================================ */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) header.classList.add('header--scrolled');
    else header.classList.remove('header--scrolled');
});


/* ============================================================
   5. BOTÓN DE COMPARTIR CV (Web Share API)
============================================================ */

const shareBtn = document.querySelector('.contact__copy');

if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'CV de Alejandro Martínez',
                text: 'Te comparto mi CV profesional.',
                url: window.location.href
            });
        } else {
            alert("Tu navegador no soporta compartir directamente.");
        }
    });
}
