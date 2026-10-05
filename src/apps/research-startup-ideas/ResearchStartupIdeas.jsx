import SectionHeader from '../../components/SectionHeader'
import IdeaCard from './components/IdeaCard'
import { researchStartupIdeas } from './data/researchStartupIdeas'
export default function ResearchStartupIdeas() {
  return <section className="page-section">
    <a className="text-link back-link" href="#/agents">← Agent Apps</a>
    <SectionHeader as="h1" eyebrow="Research ideas → prototypes → applications" title="AI Research Startup Ideas" copy="Exploring practical AI-enabled tools for health research, data science, scientific visualisation and research workflows." />
    <p className="feature-note">These are early ideas and experiments, not finished products. Some may develop into independent applications or subscription services as their usefulness is tested.</p>
    <div className="idea-grid">{researchStartupIdeas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}</div>
  </section>
}
