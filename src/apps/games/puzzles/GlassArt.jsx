
import { memo } from 'react'
import { randomSource } from './logic'

// Shared seed and coordinates keep the picture continuous across puzzle tiles.
function GlassArt({seed=1,viewBox='0 0 600 600',label}) {
 const random=randomSource(seed)
 const palettes=[
  ['#b9cbea','#d7bde2','#f0c3cf','#f6d4b6','#f2e5aa','#bcdccd','#acd9df','#c5c1e4'],
  ['#d4c5ea','#b5cce6','#bce1df','#d0e4bf','#f4dfb8','#f1c4bc','#e6bcd3','#c1d7ec'],
  ['#f0cbd5','#eddabc','#c8dfce','#b8d8e7','#cdc4e7','#e1bce0','#f4d2bb','#d7e5bb']
 ]
 const palette=palettes[Math.floor(random()*palettes.length)]
 const cells=5+Math.floor(random()*3),step=600/cells,panes=[]
 for(let row=0;row<cells;row++)for(let col=0;col<cells;col++){
  const x=col*step,y=row*step,cx=x+step/2,cy=y+step/2
  // Alternating corners and edge midpoints make eight sharp triangular facets.
  const points=[[x,y],[cx,y],[x+step,y],[x+step,cy],[x+step,y+step],[cx,y+step],[x,y+step],[x,cy]]
  const offset=Math.floor(random()*palette.length)
  for(let facet=0;facet<8;facet++){
   const a=points[facet],b=points[(facet+1)%8]
   const color=palette[(offset+facet+(row+col)%3)%palette.length]
   panes.push(<polygon key={row+':'+col+':'+facet} points={cx+','+cy+' '+a.join(',')+' '+b.join(',')} fill={color} stroke={color} strokeWidth=".5"/>)
  }
  // Four inset points create a faceted star rather than a curved motif.
  for(let ray=0;ray<4;ray++){
   const tip=points[ray*2],left=points[(ray*2+7)%8],right=points[(ray*2+1)%8]
   const innerLeft=[cx+(left[0]-cx)*.5,cy+(left[1]-cy)*.5]
   const innerRight=[cx+(right[0]-cx)*.5,cy+(right[1]-cy)*.5]
   panes.push(<polygon key={'star'+row+':'+col+':'+ray} points={cx+','+cy+' '+innerLeft.join(',')+' '+tip.join(',')+' '+innerRight.join(',')} fill={palette[(offset+ray*2+3)%palette.length]} opacity=".72"/>)
  }
 }
 return <svg viewBox={viewBox} role={label?'img':undefined} aria-label={label} aria-hidden={label?undefined:true} preserveAspectRatio="xMidYMid slice"><rect width="600" height="600" fill="#f4efe9"/>{panes}</svg>
}
export default memo(GlassArt)
