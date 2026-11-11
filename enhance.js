/* ===== ENHANCE LAYER JS ===== */
(function(){
const fine=matchMedia('(pointer:fine)').matches,calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* spotlight that follows the pointer on cards */
document.querySelectorAll('.skill,.service,.mini-card,.project-card,.step').forEach(c=>{
 if(!c.querySelector('.spot')){const s=document.createElement('i');s.className='spot';c.appendChild(s)}
 c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});
});
/* animated counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
 const el=e.target,to=+el.dataset.to,suf=el.dataset.suf||'';if(calm){el.textContent=to+suf;return}
 const t0=performance.now(),d=1400;(function f(t){const p=Math.min((t-t0)/d,1),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=v+suf;if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
document.querySelectorAll('[data-to]').forEach(n=>io.observe(n));
if(!fine||calm)return;
/* neon cursor + glow */
const g=document.createElement('div'),d=document.createElement('div');g.className='cursor-glow';d.className='cursor-dot';document.body.append(g,d);
let x=0,y=0,gx=0,gy=0;
addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;d.style.transform='translate('+x+'px,'+y+'px)';g.style.opacity=1},{passive:true});
(function loop(){gx+=(x-gx)*.12;gy+=(y-gy)*.12;g.style.transform='translate('+gx+'px,'+gy+'px)';requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,.skill,.filter,.feat-btn').forEach(el=>{el.addEventListener('pointerenter',()=>d.classList.add('big'));el.addEventListener('pointerleave',()=>d.classList.remove('big'))});
/* magnetic buttons */
document.querySelectorAll('.btn,.nav-contact').forEach(b=>{
 b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)'});
 b.addEventListener('pointerleave',()=>b.style.transform='');
});
})();
