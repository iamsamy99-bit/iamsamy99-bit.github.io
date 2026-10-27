/**
 * Samuel Juárez (@iamsamy99-bit) - Perpetual Vibe Terminal
 * Simulates real agentic engineering workflows, terminal executions,
 * and live proof-of-work in an infinite, interactive loop.
 */

(function initVibeTerminal() {
  const terminalElement = document.getElementById('vibe-terminal-body');
  const chipContainer = document.getElementById('terminal-scenarios');
  if (!terminalElement) return;

  const SCENARIOS = [
    {
      id: 'atendo',
      title: 'Atendo / Voice RAG',
      command: 'claude-code "deploy atendo voice agent over cloudflare d1"',
      logs: [
        { type: 'info', text: '⠋ Analizando esquemas multi-inquilino y protocolo SIP/VoIP...' },
        { type: 'ok',   text: '✓ D1 SQLite schema y migraciones sincronizadas en el Edge.' },
        { type: 'ok',   text: '✓ Motor conversacional ElevenLabs vinculado (<800ms latencia).' },
        { type: 'ok',   text: '✓ Firma criptográfica de webhooks Stripe verificada.' },
        { type: 'live', text: '→ Desplegado en producción: https://atendo.lat [HTTP 200]' }
      ]
    },
    {
      id: 'nomio',
      title: 'Nomio / Multiplataforma',
      command: 'npm run test:all && npx tsc --noEmit && gh workflow run',
      logs: [
        { type: 'info', text: '⠋ Compilando Next.js 15 App Router y reglas de Supabase RLS...' },
        { type: 'ok',   text: '✓ Cero fugas de credenciales. 316 módulos saneados.' },
        { type: 'ok',   text: '✓ Target Electron (Windows) y Capacitor (Android) validados.' },
        { type: 'ok',   text: '✓ Cálculo de nómina IMSS/ISR y modo offline con IndexedDB listos.' },
        { type: 'live', text: '→ Código público verificado en: github.com/iamsamy99-bit/nomio' }
      ]
    },
    {
      id: 'nexus',
      title: 'Nexus Core / FinTech',
      command: 'python3 -m http.server 3000 && npx lighthouse --view',
      logs: [
        { type: 'info', text: '⠋ Inicializando portal bancario con arquitectura Double-Bezel...' },
        { type: 'ok',   text: '✓ Paleta de comandos (⌘K) y conmutador de tema sin FOUC.' },
        { type: 'ok',   text: '✓ Generación de recibos SAT CFDI 4.0 y SPEI 100% cliente.' },
        { type: 'ok',   text: '✓ Puntuación de rendimiento Google Lighthouse: 100/100.' },
        { type: 'live', text: '→ Demo interactiva en vivo: iamsamy99-bit.github.io/panel-clientes' }
      ]
    }
  ];

  let currentScenarioIndex = 0;
  let isTyping = false;
  let scenarioTimer = null;

  // Render clickable scenario tabs
  if (chipContainer) {
    chipContainer.innerHTML = SCENARIOS.map((s, idx) => `
      <button type="button" class="term-chip ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
        ${s.title}
      </button>
    `).join('');

    chipContainer.querySelectorAll('.term-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (idx !== currentScenarioIndex) {
          clearTimeout(scenarioTimer);
          currentScenarioIndex = idx;
          updateActiveChip();
          runScenario(SCENARIOS[currentScenarioIndex]);
        }
      });
    });
  }

  function updateActiveChip() {
    if (!chipContainer) return;
    chipContainer.querySelectorAll('.term-chip').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentScenarioIndex);
    });
  }

  function typeText(element, text, speed = 28) {
    return new Promise(resolve => {
      let i = 0;
      function tick() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(tick, speed);
        } else {
          resolve();
        }
      }
      tick();
    });
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function runScenario(scenario) {
    isTyping = true;
    terminalElement.innerHTML = '';

    // Command line prompt
    const promptLine = document.createElement('div');
    promptLine.className = 'term-line prompt-line';
    promptLine.innerHTML = `<span class="term-prompt">samuel@vibe-box:~$</span> <span class="term-cmd"></span><span class="term-cursor"></span>`;
    terminalElement.appendChild(promptLine);

    const cmdSpan = promptLine.querySelector('.term-cmd');
    const cursorSpan = promptLine.querySelector('.term-cursor');

    // Type the command
    await typeText(cmdSpan, scenario.command, 24);
    await sleep(200);
    cursorSpan.classList.add('cursor-idle');

    // Stream the output logs one by one
    for (const log of scenario.logs) {
      await sleep(220);
      const logLine = document.createElement('div');
      logLine.className = `term-line log-line log-${log.type}`;
      
      let badgeClass = 'log-badge-info';
      if (log.type === 'ok') badgeClass = 'log-badge-ok';
      if (log.type === 'live') badgeClass = 'log-badge-live';

      logLine.innerHTML = `<span class="${badgeClass}">${log.text}</span>`;
      terminalElement.appendChild(logLine);
      terminalElement.scrollTop = terminalElement.scrollHeight;
    }

    isTyping = false;

    // Schedule next scenario after reading pause
    scenarioTimer = setTimeout(() => {
      currentScenarioIndex = (currentScenarioIndex + 1) % SCENARIOS.length;
      updateActiveChip();
      runScenario(SCENARIOS[currentScenarioIndex]);
    }, 5500);
  }

  // Start immediately on load
  runScenario(SCENARIOS[currentScenarioIndex]);
})();
