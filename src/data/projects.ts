export type Project = {
  slug: string
  title: string
  subtitle: string
  summary: string
  tech: string[]
  overview: string
  contributions: string
  technical: string
  impact: string
  github?: string
  demo?: string
  video?: string
}

export const projects: Project[] = [
  {
    slug: 'kids-u',
    title: 'Kids-U',
    subtitle: 'Nonprofit Full-Stack Platform',
    summary:
      'A full-stack platform for a nonprofit to manage donors, volunteers, events, and administrative workflows.',
    tech: ['React', 'APIs', 'Full-Stack Development'],
    overview:
      'Kids-U needed a practical web platform for recurring nonprofit operations. The goal was to give staff one clear place to manage donors, volunteers, events, and administration instead of treating every workflow as a separate tool.',
    contributions:
      'I built reusable React interfaces for donor, volunteer, event, and admin workflows. I connected those flows to backend APIs and application data while keeping shared UI patterns consistent and approachable for nontechnical staff.',
    technical:
      'React component architecture, API integration, state and form handling, reusable admin patterns, and data-backed workflows.',
    impact:
      'The project turned real nonprofit operations into a working software product and gave Kids-U a foundation for managing core administrative work more cleanly.',
  },
  {
    slug: 'on-the-grid',
    title: 'On the Grid',
    subtitle: 'Renewable-Energy Forecasting + Valuation',
    summary:
      'A renewable-energy analytics project using machine learning and simulation to compare energy-market strategies.',
    tech: ['Python', 'Machine Learning', 'Monte Carlo'],
    overview:
      'On the Grid explored how future power prices could affect renewable-energy project value under different contract structures.',
    contributions:
      'I worked on the data and modeling pipeline, processed market history, trained the forecasting model, and connected forecasts to scenario analysis so the team could compare outcomes instead of stopping at a prediction.',
    technical:
      'Time-series preparation, gradient-boosting forecasting, scenario simulation, Monte Carlo analysis, and financial comparison logic.',
    impact:
      'The project connected machine-learning output to a real investment decision and earned 2nd Place at the Avangrid Hackathon.',
  },
  {
    slug: 'opticnet',
    title: 'OpticNet',
    subtitle: 'AI-Assisted Retinal Screening',
    summary:
      'A computer-vision system for diabetic-retinopathy detection using retinal images.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask'],
    overview:
      'OpticNet explored whether a lightweight computer-vision workflow could identify diabetic-retinopathy patterns in retinal images while making the model’s reasoning easier to inspect.',
    contributions:
      'I built the image pipeline, trained and evaluated the CNN, connected inference to a simple application flow, and added Grad-CAM views to show which regions influenced each prediction.',
    technical:
      'Image preprocessing, CNN training, TensorFlow/Keras, an inference pipeline, Grad-CAM explainability, and Flask serving.',
    impact:
      'The result paired predictions with visual evidence, making its output easier to inspect and discuss. OpticNet won 1st Place at UTD AIMD.',
  },
  {
    slug: 'breakpoint',
    title: 'BreakPoint',
    subtitle: 'LLM-Powered Mental-Health App',
    summary:
      'An AI-powered journaling app focused on private reflection, emotion, and tone understanding.',
    tech: ['Swift', 'TypeScript', 'Supabase', 'SQL', 'LLMs'],
    overview:
      'BreakPoint was designed as a private reflection tool that helps users understand emotional patterns in their writing instead of behaving like a generic chatbot.',
    contributions:
      'I helped build the end-to-end flow around emotion and tone analysis, secure journaling, offline storage, authentication, backend persistence, and AI-generated reflection features.',
    technical:
      'Swift client, TypeScript services, Supabase authentication and data, SQL persistence, LLM analysis, and encrypted local-storage patterns.',
    impact:
      'The app combined AI with a product experience centered on privacy and self-reflection. It won HackAI 2025.',
  },
  {
    slug: 'curio',
    title: 'Curio',
    subtitle: 'Voice Healthcare Agent',
    summary:
      'A voice-enabled healthcare agent for symptom triage, summaries, and follow-up workflows.',
    tech: ['TypeScript', 'React', 'Twilio', 'LLMs'],
    overview:
      'Curio explored how a voice-first assistant could gather symptom information before a clinician interaction and turn that conversation into useful follow-up context.',
    contributions:
      'I worked on the voice and application flow, connected Twilio calling with LLM-driven triage, generated conversation summaries, supported secure delivery, and built React interfaces around the healthcare workflow.',
    technical:
      'Twilio voice, React, TypeScript, LLM orchestration, summary generation, and secure workflow integration.',
    impact:
      'The project showed how voice AI could collect context before human follow-up and reduce repetitive information gathering in healthcare interactions.',
  },
]

export const findProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug)
