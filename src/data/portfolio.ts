export type NavItem = {
  label: string
  target: string
}

export const navigation: NavItem[] = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'humana' },
  { label: 'Research', target: 'autowisp' },
  { label: 'Projects', target: 'projects' },
  { label: 'Beyond the Code', target: 'beyond' },
  { label: 'Contact', target: 'contact' },
]

export const skills = {
  Languages: [
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'Go',
    'Swift',
    'C#',
    'C++',
    'SQL',
    'HTML/CSS',
  ],
  'Frameworks / Backend': [
    'React',
    'Node.js',
    'FastAPI',
    'Flask',
    'Flutter',
    'REST APIs',
  ],
  'AI / ML / Data': [
    'LLMs',
    'Function Calling',
    'Tool Calling',
    'Prompt Grounding',
    'Machine Learning',
    'CNNs',
    'NLP',
    'Computer Vision',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'Databricks',
    'Pandas',
    'NumPy',
    'Astropy',
    'OpenCV',
  ],
  'Cloud / Systems / Tools': [
    'AWS',
    'PostgreSQL',
    'Supabase',
    'Git',
    'GitHub',
    'GitHub Actions',
    'SonarQube',
    'CI/CD',
    'Unity',
    'DDS',
    'SSE',
    'VS Code',
    'Xcode',
    'Figma',
    'Postman',
  ],
} as const

export type Experience = {
  eyebrow: string
  title: string
  context: string
  contributions: string[]
  impact: string
}

export const moreExperience: Experience[] = [
  {
    eyebrow: 'Nebula Labs API',
    title: 'API + CLI Automation',
    context:
      'A Go-based workflow for collecting, processing, and sending data through backend services.',
    contributions: [
      'Built CLI workflows and REST API integrations in Go.',
      'Used goroutines and channels for concurrent, asynchronous processing.',
      'Added validation, structured logging, error handling, and unit tests.',
      'Supported automated delivery through GitHub Actions.',
    ],
    impact:
      'Made ingestion more reliable, failures easier to trace, and recurring engineering workflows easier to maintain.',
  },
  {
    eyebrow: 'Ride CAVs',
    title: 'Connected Autonomous Vehicle Systems',
    context:
      'A digital-twin research system synchronizing physical DonkeyCars with virtual vehicle agents in real time.',
    contributions: [
      'Built DDS middleware between physical and simulated environments.',
      'Handled serialization, queues, sensor synchronization, and heartbeat messaging.',
      'Added fault-tolerance logic and improved the communication path between agents.',
    ],
    impact:
      'Reduced communication latency by about 30% and made connected-vehicle experiments more responsive and stable.',
  },
  {
    eyebrow: 'Code Ninjas',
    title: 'Coding Tutor',
    context:
      'Project-based programming instruction for younger students learning through games and hands-on builds.',
    contributions: [
      'Taught Python, JavaScript, and C#.',
      'Helped students debug code and understand programming logic.',
      'Guided small game-development and programming projects.',
    ],
    impact:
      'Turned abstract programming ideas into working projects students could understand and continue building.',
  },
]

export const autoWispContributions = [
  {
    eyebrow: 'UI + Workflow',
    title: 'Interface Fixes',
    body: 'Improved researcher-facing screens and cleared up confusing calibration and diagnostic behavior.',
  },
  {
    eyebrow: 'Pipeline Control',
    title: 'Step Selection',
    body: 'Added flexible control over which processing steps run instead of forcing one fixed path.',
  },
  {
    eyebrow: 'Onboarding',
    title: 'Interactive Tutorial',
    body: 'Built guidance and help flows so new researchers could learn the pipeline more easily.',
  },
  {
    eyebrow: 'Data Quality',
    title: 'Cloud Screening',
    body: 'Reviewed 502 images and tested signals for identifying cloudy frames while preserving precision.',
  },
  {
    eyebrow: 'Photometry',
    title: 'Validation + Light Curves',
    body: 'Worked on calibration diagnostics, flux correction, star detection, photometry validation, and reproducible light-curve workflows.',
  },
]

export const hexDContributions = [
  {
    eyebrow: 'Temporal Tracking',
    title: 'Scene Graphs from Video',
    body: 'Built temporal scene-graph workflows and tracked people, objects, and their changing relationships over long sequences.',
  },
  {
    eyebrow: 'Memory + Retrieval',
    title: 'G-Retriever',
    body: 'Integrated retrieval over stored scene context so earlier interactions could inform reasoning in the current scene.',
  },
  {
    eyebrow: 'XR Integration',
    title: 'Unity + Python',
    body: 'Connected Unity XR environments with Python perception models for a real-time 3D spatial-reasoning loop.',
  },
]

// TODO: Replace these empty values with Diya's final public contact URLs.
export const contactLinks = {
  Email: '',
  LinkedIn: '',
  GitHub: '',
  Resume: '',
} as const

// TODO: Replace these with the project-specific publication URLs.
export const researchLinks = {
  autoWispZenodo: '',
  autoWispPoster: '',
  hexDPoster: '',
} as const
