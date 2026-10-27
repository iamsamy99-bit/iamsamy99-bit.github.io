/**
 * Samuel Juárez (@iamsamy99-bit) - Portfolio Application Controller
 * Handles dynamic project rendering, live system clock, magnetic spotlights,
 * tactile interaction states, and accessibility features.
 */

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');

  // Live System Clock in Navigation Island
  function initLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;

    function update() {
      try {
        const now = new Date();
        const options = {
          timeZone: 'America/Mexico_City',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        };
        const timeStr = now.toLocaleTimeString('es-MX', options);
        clockEl.textContent = `CDMX ${timeStr} CST`;
      } catch (err) {
        clockEl.textContent = '● SISTEMA ACTIVO';
      }
    }

    update();
    setInterval(update, 1000);
  }

  // Render Projects
  function renderProjects() {
    if (!projectsContainer || typeof PROJECTS === 'undefined') return;

    projectsContainer.innerHTML = '';

    PROJECTS.forEach((project, idx) => {
      const cardOuter = document.createElement('article');
      // The first / featured project gets the perpetual illuminated border beam
      const isFeatured = idx === 0 || project.id === 'atendo';
      cardOuter.className = `double-bezel-outer ${isFeatured ? 'border-beam-card' : ''}`;
      cardOuter.setAttribute('data-category', project.category);
      cardOuter.setAttribute('aria-label', project.title);

      // Interactive magnetic spotlight tracking
      cardOuter.addEventListener('pointermove', (e) => {
        const rect = cardOuter.getBoundingClientRect();
        cardOuter.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        cardOuter.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });

      cardOuter.addEventListener('pointerleave', () => {
        cardOuter.style.removeProperty('--mouse-x');
        cardOuter.style.removeProperty('--mouse-y');
      });

      const liveBadgeHtml = project.liveUrl 
        ? `<span class="project-badge-live">
             <span class="status-dot" style="width: 6px; height: 6px;"></span>
             ${project.liveBadge || 'En vivo'}
           </span>` 
        : (project.badge ? `<span class="project-category-chip">${project.badge}</span>` : '');

      const tagsHtml = project.tags.map(tag => 
        `<span class="tech-tag">${tag}</span>`
      ).join('');

      const liveBtnHtml = project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-apple btn-primary" style="padding: 0.45rem 1rem; font-size: 0.84rem;">
          <span>${project.liveLabel || 'Ver sitio'}</span>
          <span class="trailing-icon-wrap" aria-hidden="true" style="width: 20px; height: 20px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </a>
      ` : '';

      const githubBtnHtml = project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-apple btn-secondary" style="padding: 0.45rem 0.95rem; font-size: 0.84rem;" aria-label="Ver código de ${project.title} en GitHub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span>GitHub</span>
        </a>
      ` : '';

      cardOuter.innerHTML = `
        <div class="double-bezel-inner">
          <div class="project-card-header">
            <span class="project-category-chip">${project.categoryLabel}</span>
            ${liveBadgeHtml}
          </div>
          
          <h3 class="project-card-title">${project.title}</h3>
          
          <p class="project-card-desc">${project.description}</p>
          
          <div class="vibe-story-box">
            <strong>Vibe Coding & Arquitectura:</strong>
            ${project.vibeStory}
          </div>
          
          <div class="tech-tags">
            ${tagsHtml}
          </div>
          
          <div class="project-card-footer">
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${liveBtnHtml}
              ${githubBtnHtml}
            </div>
            <span class="mono" style="font-size: 0.72rem; color: var(--text-tertiary);">${project.badge}</span>
          </div>
        </div>
      `;

      projectsContainer.appendChild(cardOuter);
    });
  }

  // Initialize
  initLiveClock();
  renderProjects();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
