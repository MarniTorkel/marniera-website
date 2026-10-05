export default function AgentAppCard({ agent }) {
  return <article className="agent-card" id={agent.id}>
    <div className="card-topline"><span>{agent.type}</span><strong>{agent.status}</strong></div>
    <h2>{agent.title}</h2>
    {agent.subtitle && <p className="card-subtitle">{agent.subtitle}</p>}
    <p>{agent.summary}</p>
    <ul className="tag-list" aria-label={agent.title + ' topics'}>{agent.stack.map(item => <li key={item}>{item}</li>)}</ul>
    {agent.href ? <a className="text-link" href={agent.href}>{agent.action} →</a> : <span className="planned-action">{agent.action} · Under development</span>}
  </article>
}
