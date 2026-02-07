const projects = [
  {
    title: 'AgroSmart – AI-Powered Agriculture Platform',
    live: 'https://agrosmart-demo.onrender.com/',
    overview:
      'AI-powered assistance for farmers with data-driven crop recommendations and real-time guidance.',
    problem: [
      'Limited access to expert agricultural guidance',
      'Difficulty interpreting crop-related data',
      'Delayed decisions affecting yield and productivity'
    ],
    solution: [
      'AI-driven crop recommendations',
      'ML and DL models analyzing agricultural inputs',
      'AI chatbot for real-time interaction',
      'Secure and reliable API-based backend'
    ],
    features: [
      'AI-based crop recommendations',
      'AI chatbot integration',
      'Secure backend processing with validation',
      'RESTful APIs for scalable communication',
      'Lightweight frontend'
    ],
    architecture: {
      frontend: 'HTML, CSS, JavaScript',
      backend: 'Flask (Python)',
      ai: 'Machine Learning & Deep Learning models',
      integration: 'REST APIs',
      deployment: 'Render'
    },
    impact: [
      'Improved recommendation accuracy by ~25%',
      'Reduced manual query effort via chatbot',
      'Enhanced reliability through structured API responses'
    ],
    learned: [
      'Integrating ML/DL models into production',
      'Designing secure and reliable REST APIs',
      'Validating real-world user input and handling edge cases'
    ]
  },
  {
    title: 'AI Medical Report Analyzer',
    live: 'https://ai-medical-report-analyzer-psi.vercel.app',
    overview:
      'Full-stack healthcare app analyzing medical reports with interpretable insights and dietary recommendations using NLP.',
    problem: [
      'Medical reports are difficult for non-medical users',
      'Manual interpretation is time-consuming',
      'Lack of actionable guidance like diet suggestions'
    ],
    solution: [
      'Automated report analysis',
      'NLP-based extraction of key health info',
      'Personalized dietary recommendations',
      'Secure backend processing'
    ],
    features: [
      'Medical report processing',
      'NLP-based information extraction',
      'AI-generated dietary recommendations',
      'Secure backend with validation and error handling',
      'Responsive frontend UI'
    ],
    architecture: {
      frontend: 'React.js',
      backend: 'Spring Boot (Java)',
      ai: 'NLP for text analysis',
      integration: 'RESTful APIs with validation',
      deployment: 'Vercel (Frontend)'
    },
    impact: [
      'Reduced manual interpretation effort by ~30%',
      'Improved accessibility of medical information',
      'Reliable and consistent backend behavior'
    ],
    learned: [
      'Applying NLP in real-world healthcare',
      'Building secure backend systems with Spring Boot',
      'Designing APIs with validation and error handling',
      'Translating AI outputs into understandable insights'
    ]
  }
]

function Badge({ children }) {
  return <span className="px-2.5 py-1 text-xs rounded bg-gray-100">{children}</span>
}

function Section({ title, children }) {
  return (
    <div className="mt-6">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-gray-700">{children}</div>
    </div>
  )
}

function ProjectDetail({ p }) {
  return (
    <div className="p-6 rounded-xl border bg-white">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{p.title}</div>
        <a
          href={p.live}
          className="px-3 py-1 rounded bg-primary-600 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
      <Section title="Overview">{p.overview}</Section>
      <Section title="Problem Statement">
        <ul className="list-disc pl-6 space-y-1">
          {p.problem.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </Section>
      <Section title="Solution">
        <ul className="list-disc pl-6 space-y-1">
          {p.solution.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </Section>
      <Section title="Key Features">
        <div className="flex flex-wrap gap-2">
          {p.features.map((f) => (
            <Badge key={f}>{f}</Badge>
          ))}
        </div>
      </Section>
      <Section title="Technical Architecture">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-3 rounded border">
            <div className="text-sm">Frontend</div>
            <div className="font-medium">{p.architecture.frontend}</div>
          </div>
          <div className="p-3 rounded border">
            <div className="text-sm">Backend</div>
            <div className="font-medium">{p.architecture.backend}</div>
          </div>
          <div className="p-3 rounded border">
            <div className="text-sm">AI</div>
            <div className="font-medium">{p.architecture.ai}</div>
          </div>
          <div className="p-3 rounded border">
            <div className="text-sm">Integration</div>
            <div className="font-medium">{p.architecture.integration}</div>
          </div>
          <div className="p-3 rounded border">
            <div className="text-sm">Deployment</div>
            <div className="font-medium">{p.architecture.deployment}</div>
          </div>
        </div>
      </Section>
      <Section title="Impact & Results">
        <ul className="list-disc pl-6 space-y-1">
          {p.impact.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </Section>
      <Section title="What I Learned">
        <ul className="list-disc pl-6 space-y-1">
          {p.learned.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </Section>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="mt-6 grid gap-6">
          {projects.map((p) => (
            <ProjectDetail key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
