import { useMemo, useState } from 'react'
import {
  agentProducts,
  capabilities,
  images,
  metrics,
  navItems,
  promptCheatsheet,
  publications,
  resources,
  roadmap,
  toolCatalog,
} from './siteContent'

const agentTypes = ['All', 'Research', 'Healthcare', 'Analytics', 'Operations', 'Knowledge', 'Studio']
const guildTabs = ['Roadmap', 'Resources', 'Tools', 'Cheatsheet', 'Case Study']

function App() {
  const [activePage, setActivePage] = useState('home')
  const [activeAgentType, setActiveAgentType] = useState('All')
  const [activeGuildTab, setActiveGuildTab] = useState('Roadmap')

  const visibleAgents = useMemo(() => {
    if (activeAgentType === 'All') return agentProducts
    return agentProducts.filter((agent) => agent.type === activeAgentType)
  }, [activeAgentType])

  const goToPage = (page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header activePage={activePage} onNavigate={goToPage} />
      <main>
        {activePage === 'home' && <Home onNavigate={goToPage} />}
        {activePage === 'agents' && (
          <AgentApps
            activeAgentType={activeAgentType}
            visibleAgents={visibleAgents}
            onAgentTypeChange={setActiveAgentType}
          />
        )}
        {activePage === 'guild' && (
          <Guild activeGuildTab={activeGuildTab} onGuildTabChange={setActiveGuildTab} />
        )}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'research' && <Research />}
      </main>
      <Footer onNavigate={goToPage} />
    </div>
  )
}

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => onNavigate('home')} aria-label="Marniera AI home">
        <span className="brand-mark">M</span>
        <span>
          <strong>Marniera AI</strong>
          <small>Applied agent systems</small>
        </span>
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activePage === item.id ? 'nav-button active' : 'nav-button'}
            type="button"
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

function Home({ onNavigate }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">AI company and product lab</p>
          <h1>Marniera AI</h1>
          <p className="hero-copy">
            Building full stack AI products, research decision systems, and multi-agent workspaces
            for teams that need reliable intelligence in real workflows.
          </p>
          <div className="hero-actions" aria-label="Homepage actions">
            <button className="button primary" type="button" onClick={() => onNavigate('agents')}>
              Explore agent apps
            </button>
            <button className="button secondary" type="button" onClick={() => onNavigate('portfolio')}>
              View proof of work
            </button>
          </div>
        </div>
        <div className="hero-dashboard" aria-label="Marniera AI operating model">
          <div className="dashboard-row">
            <span>System focus</span>
            <strong>Agents + data apps + decision UX</strong>
          </div>
          <div className="dashboard-grid">
            <span>Research</span>
            <span>Healthcare</span>
            <span>Analytics</span>
            <span>Operations</span>
          </div>
          <div className="pipeline">
            <span>Discover</span>
            <span>Build</span>
            <span>Evaluate</span>
            <span>Deploy</span>
          </div>
        </div>
      </section>

      <section className="metric-band" aria-label="Company metrics">
        {metrics.map((metric) => (
          <div className="metric-item" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="What this website becomes"
          title="A launchpad for multi-agent web apps"
          copy="The homepage is now structured as a company site and application hub, so each future AI agent can become its own tab, link, product page, or full stack app entry."
        />
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Product architecture</p>
          <h2>Designed for more apps, not just more pages</h2>
          <p>
            Each agent card is driven from structured React data. Add a new full stack app by adding
            one object, giving it a status, and linking it to a deployed route when it is ready.
          </p>
          <button className="button compact" type="button" onClick={() => onNavigate('agents')}>
            Open app hub
          </button>
        </div>
        <figure className="feature-figure">
          <img src={images.aiFramework} alt="AI framework reference diagram" />
          <figcaption>Reference material for agent framework planning.</figcaption>
        </figure>
      </section>
    </>
  )
}

function AgentApps({ activeAgentType, visibleAgents, onAgentTypeChange }) {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="Agent app hub"
        title="Multi-agent products and future links"
        copy="Use this area as the website index for every full stack AI app you build next. Cards can point to internal routes, subdomains, GitHub projects, demos, or hosted apps."
      />
      <div className="segmented-control" role="tablist" aria-label="Filter agent apps">
        {agentTypes.map((type) => (
          <button
            key={type}
            className={activeAgentType === type ? 'segment active' : 'segment'}
            type="button"
            role="tab"
            aria-selected={activeAgentType === type}
            onClick={() => onAgentTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="agent-grid">
        {visibleAgents.map((agent) => (
          <article className="agent-card" id={agent.id} key={agent.id}>
            <div className="card-topline">
              <span>{agent.type}</span>
              <strong>{agent.status}</strong>
            </div>
            <h2>{agent.title}</h2>
            <p>{agent.summary}</p>
            <ul className="tag-list" aria-label={`${agent.title} stack`}>
              {agent.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="text-link" href={`#${agent.id}`}>
              {agent.action}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Guild({ activeGuildTab, onGuildTabChange }) {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="AI Guide"
        title="2026 applied AI engineering guide"
        copy="Updated for the current agent stack: Responses-style APIs, managed agents, context engineering, MCP, evaluations, and production deployment."
      />
      <div className="segmented-control guild-tabs" role="tablist" aria-label="AI Guide sections">
        {guildTabs.map((tab) => (
          <button
            key={tab}
            className={activeGuildTab === tab ? 'segment active' : 'segment'}
            type="button"
            role="tab"
            aria-selected={activeGuildTab === tab}
            onClick={() => onGuildTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeGuildTab === 'Roadmap' && (
        <div className="roadmap-list">
          {roadmap.map((item) => (
            <article className="roadmap-item" key={item.stage}>
              <span>{item.stage}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeGuildTab === 'Resources' && (
        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.group}>
              <h3>{resource.group}</h3>
              <ul>
                {resource.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}

      {activeGuildTab === 'Tools' && (
        <div className="resource-grid">
          {toolCatalog.map((group) => (
            <article className="resource-card" key={group.group}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}

      {activeGuildTab === 'Case Study' && (
        <div className="case-study-panel">
          <p className="eyebrow">Coming next</p>
          <h2>From research prototype to trusted AI product</h2>
          <p>
            This case study area is ready for a detailed build story: problem framing, data flow,
            agent responsibilities, evaluation method, deployment model, and user outcomes.
          </p>
        </div>
      )}

      {activeGuildTab === 'Cheatsheet' && (
        <div className="cheatsheet-grid">
          {promptCheatsheet.map((section) => (
            <article className="cheatsheet-card" key={section.group}>
              <h3>{section.group}</h3>
              <p>{section.copy}</p>
              {section.items && (
                <div className="modifier-list">
                  {section.items.map((item) => (
                    <div className="modifier-item" key={item.code}>
                      <code>{item.code}</code>
                      <span>{item.use}</span>
                    </div>
                  ))}
                </div>
              )}
              {section.template && (
                <pre>
                  <code>{section.template}</code>
                </pre>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

function Portfolio() {
  return <section className="page-section" aria-label="Portfolio" />
}

function Research() {
  return (
    <section className="page-section">
      <SectionHeader
        eyebrow="Research background"
        title="Data science, visualisation, and computational methods"
        copy="The research base behind the company: healthcare decision support, single-cell benchmarking, spatial omics, and complex graph visualisation."
      />
      <div className="research-layout">
        <aside className="education-panel">
          <h2>Education</h2>
          <ul>
            <li>Master of Data Science, University of Sydney</li>
            <li>Graduate Diploma in Digital Media, University of Sydney</li>
            <li>Bachelor of Computer Science, University of New South Wales</li>
          </ul>
        </aside>
        <div className="publication-list">
          {publications.map((group) => (
            <section className="publication-year" key={group.year}>
              <h2>{group.year}</h2>
              <ul>
                {group.items.map((publication) => (
                  <li key={publication.title}>
                    <a href={publication.href} target="_blank" rel="noreferrer">
                      {publication.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>Marniera AI</strong>
        <p>Applied AI company for full stack agent products and research-grade decision systems.</p>
      </div>
      <button className="button compact" type="button" onClick={() => onNavigate('agents')}>
        Build the next agent
      </button>
    </footer>
  )
}

export default App
