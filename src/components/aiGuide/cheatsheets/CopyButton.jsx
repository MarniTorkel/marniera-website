import { useRef, useState } from 'react'
export default function CopyButton({text,label='Copy',name='prompt'}) {
 const [feedback,setFeedback]=useState('');const fallback=useRef(null)
 const copy=async()=>{try {if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(text);setFeedback('Copied!')}catch{setFeedback('Select and copy the text below.');requestAnimationFrame(()=>{fallback.current?.focus();fallback.current?.select()})}}
 return <div className="prompt-copy"><button className="button secondary" disabled={!text.trim()} onClick={copy} aria-label={label+' '+name}>{label}</button><span role="status">{feedback}</span>{feedback.startsWith('Select')&&<textarea ref={fallback} aria-label={'Copy '+name+' manually'} readOnly value={text}/>}</div>
}
