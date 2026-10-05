export default function IdeaCard({ idea }) {
  return <article className="idea-card">
    <div className="card-topline"><span>Research application</span><strong>{idea.status}</strong></div>
    <h2>{idea.title}</h2>
    <dl><dt>Problem</dt><dd>{idea.problem}</dd><dt>Proposed solution</dt><dd>{idea.solution}</dd><dt>Target users</dt><dd>{idea.users}</dd></dl>
  </article>
}
