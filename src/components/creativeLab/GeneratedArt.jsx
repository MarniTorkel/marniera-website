import { useMemo } from 'react'
const TAU=Math.PI*2
export function generateMarks(kind,seed=1,amount=50) {
 let state=seed>>>0; const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296}
 const marks=[], colors=['#65b9ac','#d9b96f','#cc7e69','#b5c5b1'];const add=(tag,props)=>marks.push({tag,props});const line=(points,color=colors[0],opacity=.6)=>add('polyline',{points:points.map(p=>p.join(',')).join(' '),fill:'none',stroke:color,strokeWidth:1.2,opacity});const dot=(x,y,r,color=colors[0],opacity=.8)=>add('circle',{cx:x,cy:y,r,fill:color,opacity});const phase=random()*TAU
 if(['flow','waves','threads','distribution'].includes(kind)) {
  for(let j=0;j<40;j++){let v=0;const points=[];for(let i=0;i<=100;i++){const x=i*6;let y;
   if(kind==='distribution'){const t=i/100+(phase/TAU-.5)*.15;const normal=Math.exp(-((t-.5)**2)/.025);const bimodal=.7*Math.exp(-((t-.28)**2)/.012)+.6*Math.exp(-((t-.72)**2)/.025);const skew= t>0?Math.pow(t,1.4)*Math.exp(-t*7)*28:0;y=365-j*4-(j%3===0?normal:j%3===1?bimodal:skew)*(40+amount+j*2)}
   else if(kind==='threads'){v=v*.84+(random()-.5)*9;y=80+j*6+v+Math.sin(i*.06+phase)*amount}
   else y=65+j*7+Math.sin(i*.05+phase+j*.07)*(amount*.7)+Math.sin(i*.11-j*.09)*(kind==='flow'?30:amount*.45)
   points.push([x,y])}line(points,colors[j%4],.55)}
 } else if(kind==='orbit'){for(let i=0;i<25;i++)add('ellipse',{cx:300,cy:200,rx:40+i*7,ry:20+amount+i*2,fill:'none',stroke:colors[i%4],opacity:.5,transform:'rotate('+(i*7+phase*20)+' 300 200)'})}
 else if(kind==='fibonacci'){for(let i=0;i<320;i++){const a=i*Math.PI*(3-Math.sqrt(5))+phase,r=Math.sqrt(i)*(8+amount/25);dot(300+Math.cos(a)*r,200+Math.sin(a)*r,2+i/150,colors[i%4])}}
 else if(kind==='bloom'||kind==='garden'){
  const branch=(x,y,a,len,depth)=>{if(!depth)return;const nx=x+Math.cos(a)*len,ny=y+Math.sin(a)*len;line([[x,y],[nx,ny]],colors[depth%4],.8);if(depth===1)dot(nx,ny,2+random()*3,colors[1]);const spread=.25+amount/160;for(const sign of [-1,1])if(kind==='bloom'||random()>.12)branch(nx,ny,a+sign*spread+(kind==='garden'?(random()-.5)*.5:0),len*(.6+random()*.16),depth-1)}
  if(kind==='garden')for(let i=0;i<9;i++)branch(55+i*60,370,-Math.PI/2+(random()-.5)*.3,45+random()*30,5)
  else for(let i=0;i<10;i++)branch(300,200,i*TAU/10+phase,45,4)
 }else if(kind==='particles'||kind==='network'){
  const points=Array.from({length:Math.round(45+amount)},()=>{const a=random()*TAU,r=Math.sqrt(random())*180;return kind==='particles'?[300+Math.cos(a)*r,200+Math.sin(a)*r,random()]:[40+random()*520,40+random()*320,random()]});points.forEach((p,i)=>{for(let j=i+1;j<points.length;j++){const q=points[j];if(Math.hypot(p[0]-q[0],p[1]-q[1])<55+amount/4)line([p.slice(0,2),q.slice(0,2)],colors[0],.15)}dot(p[0],p[1],2+p[2]*5,colors[Math.floor(p[2]*4)])})
 }else if(kind==='grid'||kind==='tiles'||kind==='pulse'){
  for(let r=0;r<9;r++)for(let c=0;c<14;c++){const x=28+c*42,y=32+r*42,n=random();if(kind==='pulse')dot(x,y,3+n*amount/6,colors[(r+c)%4],.7);else add('rect',{x:x-14,y:y-14,width:kind==='tiles'?28:8+n*25,height:kind==='tiles'?28:8+n*25,rx:kind==='tiles'?2:5,fill:colors[Math.floor(n*4)],opacity:.8,transform:'rotate('+(kind==='tiles'?(r+c)%2*45+amount/4+phase*15:n*amount)+' '+x+' '+y+')'})}
 }else if(kind==='walk'){let x=300,y=200;const points=[[x,y]];for(let i=0;i<1000;i++){const a=random()*TAU;x=Math.max(15,Math.min(585,x+Math.cos(a)*(5+amount/10)));y=Math.max(15,Math.min(385,y+Math.sin(a)*(5+amount/10)));points.push([x,y])}line(points,colors[0],.8)}
 else {for(let j=0;j<6;j++){const points=[];for(let i=0;i<=500;i++){const t=i/500*TAU;points.push([300+Math.sin(t*(2+Math.floor(amount/25))) *(130+j*8),200+Math.sin(t*3+phase+j*.08)*150])}line(points,colors[j%4],.6)}}
 return marks
}
export default function GeneratedArt({kind,seed=1,amount=50,title='Generated visual study'}){const marks=useMemo(()=>generateMarks(kind,seed,amount),[kind,seed,amount]);return <svg className="creative-visual" viewBox="0 0 600 400" role="img" aria-label={title}><rect width="600" height="400" fill="#122e30"/>{marks.map(({tag:Tag,props},i)=><Tag key={i} {...props}/>)}</svg>}
