/**
 * Samuel Juárez (@iamsamy99-bit) - Portfolio Projects Data
 * Curated projects showcasing AI engineering, Vibe Coding, and robust software craftsmanship.
 */

const PROJECTS = [
  {
    id: 'nexus-core',
    title: 'Nexus Core — Portal de Operaciones y Clientes',
    category: 'fintech',
    categoryLabel: 'FinTech & Operaciones',
    badge: 'Producción & Demo',
    featured: true,
    description: 'Panel de control corporativo para gestión financiera y operaciones de clientes. Diseñado bajo directivas anti-slop con arquitectura Double-Bezel de alta precisión, conmutador claro/oscuro instantáneo y Command Palette (⌘K).',
    vibeStory: 'Prototipado e implementado a máxima velocidad mediante Vibe Coding con Claude Code. Todo el código fue auditado para garantizar cero FOUC, atajos por teclado nativos y procesamiento instantáneo 100% en el cliente.',
    tags: ['Vanilla JS', 'Modern CSS', 'SPEI', 'SAT CFDI 4.0', 'Double-Bezel UI', 'Command Palette'],
    metrics: [
      { label: 'Rendimiento', value: '100 / 100' },
      { label: 'Tiempo de Carga', value: '< 250ms' },
      { label: 'Estado', value: 'En Vivo' }
    ],
    liveUrl: 'https://iamsamy99-bit.github.io/panel-clientes/',
    githubUrl: 'https://github.com/iamsamy99-bit/panel-clientes'
  },
  {
    id: 'atendo',
    title: 'Atendo — Agentes Autónomos de Voz y Chat con IA',
    category: 'ai',
    categoryLabel: 'Agentes IA & Voz',
    badge: 'Ecosistema Cloudflare',
    featured: true,
    description: 'Plataforma empresarial de atención automatizada mediante agentes conversacionales por voz en tiempo real y bots de WhatsApp integrados a un panel de control con base de datos distribuida en el edge.',
    vibeStory: 'Diseño integral de prompts de inferencia de audio y orquestación de agentes con Cloudflare Workers, Pages y D1 SQL para lograr respuestas telefónicas humanizadas con latencia menor a 800ms.',
    tags: ['Cloudflare Pages', 'D1 SQL', 'VoIP / SIP', 'WebSockets', 'Voice Agents', 'Workers AI'],
    metrics: [
      { label: 'Latencia Voz', value: '< 800ms' },
      { label: 'Arquitectura', value: 'Serverless Edge' },
      { label: 'Canales', value: 'Voz + WhatsApp' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/atendo-web'
  },
  {
    id: 'ai-home-agent',
    title: 'AI Home Agent — Orquestador de Agentes Locales',
    category: 'systems',
    categoryLabel: 'Sistemas & Automatización',
    badge: 'Local First & Linux',
    featured: true,
    description: 'Agente nativo de sistema para Linux Mint / XFCE que automatiza y orquesta herramientas de IA (Claude Code, Antigravity, Codex), sincronización sin cloud lock-in mediante rclone y organización inteligente de Google Photos.',
    vibeStory: 'Construido para solucionar la fricción de arrancar entornos de IA y respaldar archivos personales respetando la soberanía de datos (tokens con permisos 0600 locales y cero telemetría externa).',
    tags: ['Python 3', 'Linux Mint / XFCE', 'rclone', 'Claude Code', 'Antigravity', 'Local-First'],
    metrics: [
      { label: 'Privacidad', value: '100% Local' },
      { label: 'Dependencias Cloud', value: 'Cero' },
      { label: 'S.O.', value: 'Linux XFCE' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/ai-home-agent'
  },
  {
    id: 'trading-bot',
    title: 'Alpaca Trading Bot — Swing Trading Asistido por LLMs',
    category: 'fintech',
    categoryLabel: 'FinTech & IA',
    badge: 'Paper Trading',
    featured: false,
    description: 'Sistema autónomo de swing trading que interactúa con la API de Alpaca Markets. Emplea razonamiento de Claude para evaluar el sentimiento de noticias financieras y correlacionarlo con indicadores técnicos de volatilidad.',
    vibeStory: 'Desarrollado para probar la toma de decisiones probabilísticas de modelos de lenguaje en finanzas, aplicando límites estrictos de stop-loss matemáticos que la IA no puede vulnerar.',
    tags: ['Python', 'Claude API', 'Alpaca Markets', 'Algorithmic Trading', 'Risk Management'],
    metrics: [
      { label: 'Motor', value: 'Claude 3.5' },
      { label: 'Gestión Riesgo', value: 'Guardarraíles Hard' },
      { label: 'Ejecución', value: 'Paper Trading' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/trading-bot'
  },
  {
    id: 'bakery-pwa',
    title: 'BakeryOS — Sistema de Gestión para Panaderías',
    category: 'apps',
    categoryLabel: 'PWA & Web Apps',
    badge: 'Offline-First',
    featured: false,
    description: 'Aplicación web progresiva (PWA) de alta velocidad para la operación diaria de panaderías y obradores. Monitoreo de recetas, cálculo automático de costos e insumos y control de mermas.',
    vibeStory: 'Diseñada pensando en la realidad operativa: cocinas con conexión inestable. Utiliza Service Workers avanzados y almacenamiento IndexedDB para operar con total fluidez sin internet.',
    tags: ['PWA', 'IndexedDB', 'Service Workers', 'Vanilla JS', 'Offline-First'],
    metrics: [
      { label: 'Conectividad', value: '100% Offline' },
      { label: 'Instalable', value: 'PWA Nativa' },
      { label: 'Foco', value: 'Costos & Mermas' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/bakery-pwa'
  },
  {
    id: 'crappy-email-removal',
    title: 'Crappy Email Removal — Daemon de Privacidad & Purga',
    category: 'systems',
    categoryLabel: 'Seguridad & Edge',
    badge: 'Privacidad Legal',
    featured: false,
    description: 'Daemon de limpieza masiva de bandejas de entrada de Gmail, desuscripción automática con un clic y envío automatizado de solicitudes de eliminación de datos bajo normativas LFPDPPP y GDPR a data brokers.',
    vibeStory: 'Automatización de defensa de privacidad digital creada para eliminar el ruido comercial recurrente, respaldada en Cloudflare D1 para rastrear el cumplimiento legal de cada remitente.',
    tags: ['Cloudflare Workers', 'D1 Database', 'Gmail API', 'LFPDPPP / GDPR', 'Automation'],
    metrics: [
      { label: 'Propósito', value: 'Zero Spam' },
      { label: 'Legal Tech', value: 'GDPR / LFPDPPP' },
      { label: 'Base de Datos', value: 'Cloudflare D1' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/crappy-email-removal'
  },
  {
    id: 'nomio-releases',
    title: 'Nomio — Software de Nómina para Construcción',
    category: 'apps',
    categoryLabel: 'Software de Escritorio',
    badge: 'Industria MX',
    featured: false,
    description: 'Plataforma de cálculo de nómina especializada para la industria de la construcción en México, adaptada a pagos semanales por destajo, horas extra y control de personal en obra.',
    vibeStory: 'Resolviendo una necesidad no atendida por los ERPs genéricos con una herramienta ligera y directa para contratistas e ingenieros civiles.',
    tags: ['Windows App', 'Fiscal MX', 'Destajos', 'Release Management'],
    metrics: [
      { label: 'Sector', value: 'Construcción' },
      { label: 'Región', value: 'México (SAT/IMSS)' },
      { label: 'Distribución', value: 'Releases Oficiales' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/nomio-releases'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
