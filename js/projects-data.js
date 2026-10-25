/**
 * Samuel Juárez (@iamsamy99-bit) - Portfolio Projects Data
 *
 * Regla editorial: solo se listan proyectos que un visitante puede verificar
 * (sitio en producción o repositorio público) y solo con afirmaciones respaldadas
 * por el propio código/README. Sin métricas inventadas.
 */

const PROJECTS = [
  {
    id: 'atendo',
    title: 'Atendo — Agentes de voz y chat con IA',
    category: 'ai',
    categoryLabel: 'Agentes IA & Voz',
    badge: 'En producción',
    description: 'Servicio en producción de agentes de voz y chat con IA para negocios en México y Estados Unidos: recepción de llamadas, atención por WhatsApp y un panel multi-cliente con CRM y base de conocimiento (RAG).',
    vibeStory: 'Landing bilingüe estática, API en Cloudflare Pages Functions sobre D1, panel en React y workers con cron para seguimientos y llamadas salientes. Voz con ElevenLabs Conversational AI, pagos con Stripe y búsqueda semántica con Supabase (pgvector + RLS). El código es privado; el servicio está en vivo.',
    tags: ['Cloudflare Pages', 'D1', 'Workers', 'React', 'TypeScript', 'ElevenLabs', 'Stripe', 'Supabase pgvector'],
    liveUrl: 'https://atendo.lat',
    liveLabel: 'Ver sitio',
    liveBadge: 'En producción',
    githubUrl: null
  },
  {
    id: 'nomio',
    title: 'Nomio — Nómina y asistencias para constructoras',
    category: 'apps',
    categoryLabel: 'SaaS & Multiplataforma',
    badge: 'Código abierto a la vista',
    description: 'SaaS de nómina, asistencias y cotizaciones para constructoras y PYMES en México. Una sola base de código para web, app de Windows y app de Android.',
    vibeStory: 'Next.js 15 (App Router) con Supabase (auth + RLS), pagos con Stripe, asistencias offline con IndexedDB y sincronización posterior, exportación a PDF/Excel/CSV y un asistente con la API de Anthropic. Windows con Electron y Android con Capacitor, compilados por GitHub Actions. Repositorio público saneado (sin credenciales ni datos de clientes).',
    tags: ['Next.js 15', 'Supabase', 'Stripe', 'Electron', 'Capacitor', 'IndexedDB', 'GitHub Actions'],
    liveUrl: null,
    githubUrl: 'https://github.com/iamsamy99-bit/nomio'
  },
  {
    id: 'nexus-core',
    title: 'Nexus Core — Portal de operaciones y clientes',
    category: 'fintech',
    categoryLabel: 'FinTech & Operaciones',
    badge: 'Demo interactiva',
    description: 'Panel de control para clientes corporativos y operaciones financieras: acciones en un clic (transferencias SPEI, facturación CFDI 4.0, extractos), gráfico interactivo con filtros por periodo y tabla con búsqueda en vivo.',
    vibeStory: 'HTML, CSS y JavaScript sin dependencias. Modo claro/oscuro con atajo de teclado y sin parpadeo inicial, paleta de comandos (Ctrl/⌘ + K) y contenedores de doble bisel. Los datos de la demo son ficticios.',
    tags: ['Vanilla JS', 'CSS moderno', 'SPEI', 'CFDI 4.0', 'Command Palette'],
    liveUrl: 'https://iamsamy99-bit.github.io/panel-clientes/',
    liveLabel: 'Ver demo',
    liveBadge: 'Demo en vivo',
    githubUrl: 'https://github.com/iamsamy99-bit/panel-clientes'
  },
  {
    id: 'sam-voip',
    title: 'Sam VoIP — Consultoría bilingüe en VoIP y redes',
    category: 'systems',
    categoryLabel: 'Consultoría & Redes',
    badge: 'Sitio público',
    description: 'Sitio de consultoría bilingüe (ES/EN) sobre diagnóstico de SIP/RTP, agentes de voz con IA y hardware Mac.',
    vibeStory: 'Sitio estático publicado en GitHub Pages que presenta servicios de telefonía IP y redes.',
    tags: ['SIP / RTP', 'VoIP', 'Agentes de voz', 'HTML estático', 'GitHub Pages'],
    liveUrl: 'https://iamsamy99-bit.github.io/sam-voip-consulting/',
    liveLabel: 'Ver sitio',
    liveBadge: 'En vivo',
    githubUrl: 'https://github.com/iamsamy99-bit/sam-voip-consulting'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
