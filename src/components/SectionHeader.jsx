export default function SectionHeader({ eyebrow, title, copy, as: Heading = "h2" }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      <p>{copy}</p>
    </div>
  )
}

