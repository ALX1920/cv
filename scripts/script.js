/* ============================================================
   1. COPIAR DATOS DE CONTACTO AL PORTAPAPELES
============================================================ */
document.querySelectorAll('.contact__value').forEach((btn) => {
    btn.addEventListener('click', async () => {
        const value = btn.dataset.copy || btn.textContent.trim();

        try {
            await navigator.clipboard.writeText(value);
        } catch (err) {
            // Navegador sin soporte para Clipboard API (o sin permisos)
            console.warn('No se pudo copiar automáticamente:', err);
            return;
        }

        const original = btn.textContent;
        btn.textContent = 'Copiado ✓';
        btn.setAttribute('data-copied', 'true');
        btn.setAttribute('aria-live', 'polite');

        setTimeout(() => {
            btn.textContent = original;
            btn.removeAttribute('data-copied');
        }, 1500);
    });
});

/* ============================================================
   2. COMPARTIR CV (Web Share API con fallback a portapapeles)
============================================================ */
const shareBtn = document.getElementById('shareBtn');

if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: 'CV de Alejandro Martínez',
            text: 'Te comparto mi CV profesional.',
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // El usuario canceló el diálogo de compartir; no es un error real
                if (err.name !== 'AbortError') console.warn(err);
            }
            return;
        }

        try {
            await navigator.clipboard.writeText(shareData.url);
            const original = shareBtn.textContent;
            shareBtn.textContent = 'Enlace copiado ✓';
            setTimeout(() => (shareBtn.textContent = original), 1500);
        } catch {
            alert('Copia este enlace para compartirlo: ' + shareData.url);
        }
    });
}

/* ============================================================
   3. DESCARGAR / EXPORTAR A PDF
============================================================ */
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => window.print());
}

/* ============================================================
   4. AÑO ACTUAL EN EL FOOTER
============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
