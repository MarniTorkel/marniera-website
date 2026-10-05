import CopyButton from './CopyButton'
export default function CheatCard({card}) {return <article className="prompt-item"><h4>{card.title}</h4><p>{card.body}</p><CopyButton text={card.title+'\n\n'+card.body} name={card.title}/></article>}
