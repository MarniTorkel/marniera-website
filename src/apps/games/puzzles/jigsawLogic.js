
import { randomSource, shuffle } from './logic.js'
export const layouts={12:[4,3],24:[6,4],48:[8,6],96:[12,8]}
export const designs=[{id:'fox',title:'Woodland fox',image:'geometric-fox.png'},{id:'panda',title:'Bamboo panda',image:'geometric-panda.png'},{id:'puppy',title:'Mosaic puppy',image:'mosaic-puppy.png'},{id:'stars',title:'Colourburst stars'},{id:'diamonds',title:'Prism diamonds'},{id:'triangles',title:'Patchwork triangles'}]
export function artwork(design,seed){
 const animal=designs.find(item=>item.id===design&&item.image)
 if(animal)return (import.meta.env?.BASE_URL||'/')+'images/jigsaw/'+animal.image
 const random=randomSource(seed),colors=['#1768d4','#7636c4','#eb3375','#f57c22','#f6cb28','#159859','#14b8c5','#253e8f']
 let svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450"><rect width="600" height="450" fill="#f6eee3"/>'
 for(let row=0;row<6;row++)for(let col=0;col<8;col++){
  const x=col*75,y=row*75,cx=x+37.5,cy=y+37.5,offset=Math.floor(random()*8)
  const points=design==='diamonds'?[[cx,y],[x+75,cy],[cx,y+75],[x,cy]]:
   design==='triangles'?[[x,y],[x+75,y],[x+75,y+75],[x,y+75]]:
   [[x,y],[cx,y],[x+75,y],[x+75,cy],[x+75,y+75],[cx,y+75],[x,y+75],[x,cy]]
  svg+='<rect x="'+x+'" y="'+y+'" width="75" height="75" fill="'+colors[(offset+4)%8]+'"/>'
  points.forEach((p,i)=>{svg+='<polygon points="'+cx+','+cy+' '+p.join(',')+' '+points[(i+1)%points.length].join(',')+'" fill="'+colors[(offset+i)%8]+'"/>'})
 }
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg+'</svg>')
}
export function piecePath(index,count,shape='classic'){
 const [cols,rows]=layouts[count],w=600/cols,h=450/rows,x=index%cols*w,y=Math.floor(index/cols)*h
 const corners=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]]
 let path='M '+x+' '+y
 for(let side=0;side<4;side++){
  const a=corners[side],b=corners[(side+1)%4],dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy)
  const border=[y===0,x+w===600,y+h===450,x===0][side]
  if(border||shape==='square'){path+=' L '+b.join(' ');continue}
  // Every internal edge protrudes right/down; the neighbouring edge is its exact inverse.
  const sign=side===0||side===3?-1:1,depth=Math.min(w,h)*.19*sign
  const point=(t,d=0)=>[a[0]+dx*t+dy/length*d,a[1]+dy*t-dx/length*d].join(' ')
  path+=' L '+point(.35)+' C '+point(.47)+' '+point(.32,depth)+' '+point(.5,depth)
  path+=' C '+point(.68,depth)+' '+point(.53)+' '+point(.65)+' L '+b.join(' ')
 }
 return path+' Z'
}
export function freshJigsaw(count=24,design='fox',seed=Date.now()>>>0,shape='classic'){
 return {version:1,count,design,seed,shape,placed:[],order:shuffle(Array.from({length:count},(_,i)=>i),randomSource(seed))}
}
export function validSave(value){
 return value?.version===1&&Object.hasOwn(layouts,value.count)&&designs.some(d=>d.id===value.design)&&['classic','square'].includes(value.shape)&&Number.isInteger(value.seed)&&Array.isArray(value.placed)&&new Set(value.placed).size===value.placed.length&&value.placed.every(i=>Number.isInteger(i)&&i>=0&&i<value.count)&&Array.isArray(value.order)&&value.order.length===value.count&&new Set(value.order).size===value.count&&value.order.every(i=>Number.isInteger(i)&&i>=0&&i<value.count)
}
export function placePiece(game,piece,target){
 if(!Number.isInteger(piece)||piece<0||piece>=game.count||piece!==target||game.placed.includes(piece))return game
 return {...game,placed:[...game.placed,piece]}
}
export function targetAt(x,y,rect,count){
 if(x<rect.left||y<rect.top||x>=rect.left+rect.width||y>=rect.top+rect.height)return -1
 const [cols,rows]=layouts[count]
 return Math.floor((y-rect.top)/rect.height*rows)*cols+Math.floor((x-rect.left)/rect.width*cols)
}
