const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.getElementById('progress');
addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'},{passive:true});
const words=['AI-POWERED APPLICATIONS','FULL-STACK EXPERIENCES','SMART DIGITAL PRODUCTS','MEAN STACK SOLUTIONS'];let wi=0,ci=0,del=false;const typed=document.getElementById('typed');
function type(){const word=words[wi];typed.textContent=word.slice(0,ci);if(!del){ci++;if(ci>word.length){del=true;setTimeout(type,1150);return}}else{ci--;if(ci<0){del=false;wi=(wi+1)%words.length;ci=0}}setTimeout(type,del?35:72)}type();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.section-title,.about-big,.about-side,.skill,.feat,.mini-card,.service,.why,.freelance-cta,.timeline-item,.achievement,.contact-inner').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let pts=[],W=0,H=0;function resize(){W=innerWidth;H=innerHeight;const d=Math.min(devicePixelRatio||1,2);canvas.width=W*d;canvas.height=H*d;ctx.setTransform(d,0,0,d,0,0);pts=Array.from({length:Math.min(70,Math.floor(W/17))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.24,vy:(Math.random()-.5)*.24,r:Math.random()*1.4+.3}))}function draw(){ctx.clearRect(0,0,W,H);pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(45,199,255,.55)';ctx.fill();for(let j=i+1;j<pts.length;j++){const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<105){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(35,196,255,${.13*(1-d/105)})`;ctx.lineWidth=.6;ctx.stroke()}}});if(!matchMedia('(prefers-reduced-motion: reduce)').matches)requestAnimationFrame(draw)}resize();draw();addEventListener('resize',resize);
const card=document.querySelector('.portrait-card');if(card&&matchMedia('(pointer:fine)').matches){const wrap=card.parentElement;wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*5}deg)`});wrap.addEventListener('mouseleave',()=>card.style.transform='')}

/* ---------- project filters (All Projects grid) ---------- */
const minis=[...document.querySelectorAll('.mini-card')],filters=[...document.querySelectorAll('.filter')],allCount=document.getElementById('allCount');
const catOf=c=>c.dataset.category.split(' ');
filters.forEach(btn=>{const f=btn.dataset.filter,n=f==='all'?minis.length:minis.filter(c=>catOf(c).includes(f)).length;btn.querySelector('sup').textContent=String(n).padStart(2,'0')});
const pad=n=>String(n).padStart(2,'0');
if(allCount)allCount.textContent=pad(minis.length);
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;let shown=0;minis.forEach(card=>{const hide=f!=='all'&&!catOf(card).includes(f);card.classList.toggle('hidden',hide);if(!hide)shown++});if(allCount)allCount.textContent=pad(shown)}));

/* ---------- featured projects: auto-moving carousel ---------- */
(function(){
const feat=document.getElementById('feat');if(!feat)return;
const track=document.getElementById('featTrack'),slides=[...track.children],dotsBox=document.getElementById('featDots'),count=document.getElementById('featCount');
let cur=0;
const dots=slides.map((_,i)=>{const d=document.createElement('button');d.type='button';d.className='feat-dot';d.setAttribute('aria-label','Go to project '+(i+1));d.innerHTML='<i></i>';d.addEventListener('click',()=>go(i));dotsBox.appendChild(d);return d});
function go(n){
 cur=(n+slides.length)%slides.length;
 track.style.transform='translateX('+(-cur*100)+'%)';
 slides.forEach((s,i)=>s.setAttribute('aria-hidden',i===cur?'false':'true'));
 dots.forEach((d,i)=>{d.classList.remove('active','done');if(i<cur)d.classList.add('done')});
 void dotsBox.offsetWidth;
 dots[cur].classList.add('active');
 count.textContent=pad(cur+1)+' / '+pad(slides.length);
}
/* a dot's fill animation ending moves to the next project; hover/focus pauses it, reduced motion disables it */
dotsBox.addEventListener('animationend',e=>{if(e.animationName==='dotfill')go(cur+1)});
document.getElementById('featPrev').addEventListener('click',()=>go(cur-1));
document.getElementById('featNext').addEventListener('click',()=>go(cur+1));
let sx=null;
feat.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
feat.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(cur+(dx<0?1:-1));sx=null});
new IntersectionObserver(es=>es.forEach(e=>feat.classList.toggle('offscreen',!e.isIntersecting)),{threshold:.2}).observe(feat);
go(0);
})();

/* ---------- skills: click a box to see everything inside ---------- */
const SKILLS={
languages:{icon:'⌘',title:'LANGUAGES',intro:'The languages I write code in.',items:[
 ['Python','JARVIS · Fake Review Detection · Disaster Impact Mapping'],
 ['JavaScript','Project Infinity · AI Skin & Body Care · Fake Review Detection · Gift Management'],
 ['HTML','Project Infinity · AI Skin & Body Care · IP Radar Tracker'],
 ['CSS','Project Infinity · AI Skin & Body Care · IP Radar Tracker'],
 ['Java',''],['C','']]},
fullstack:{icon:'◈',title:'FULL STACK',intro:'Frameworks and stacks I use to build complete web applications.',items:[
 ['Node.js','AutoSphere · Gift Management · WeatherWise · BookHive · Disaster Impact Mapping · AI Skin & Body Care · Project Infinity'],
 ['Express.js','AutoSphere · Gift Management · WeatherWise · BookHive · Disaster Impact Mapping · AI Skin & Body Care'],
 ['MEAN Stack','AutoSphere (MongoDB, Express, Angular, Node)'],
 ['MERN Stack','BookHive · Gift Management'],
 ['React.js','Gift Management · BookHive · Disaster Impact Mapping'],
 ['Angular','AutoSphere'],
 ['Flask','Fake Review Detection'],
 ['FastAPI','Disaster Impact Mapping'],
 ['REST APIs','WeatherWise API · FitTrack AI'],
 ['Tailwind CSS','Disaster Impact Mapping']]},
database:{icon:'▤',title:'DATABASE',intro:'Where my applications store and retrieve their data.',items:[
 ['MongoDB','AutoSphere · Gift Management (Mongoose) · WeatherWise · BookHive · Disaster Impact Mapping · AI Skin & Body Care'],
 ['MySQL','Fake Review Detection'],
 ['SQLite','JARVIS'],
 ['Firebase',''],['Supabase','']]},
tools:{icon:'✳',title:'TOOLS & PLATFORMS',intro:'Editors, platforms, and AI services I build and ship with.',items:[
 ['VS Code',''],['Eclipse',''],['Git & GitHub',''],['Google Cloud Platform',''],['Android Studio',''],
 ['Gemini API','JARVIS · Project Infinity · AI Skin & Body Care · WeatherWise'],
 ['Ollama','JARVIS (offline mode)'],
 ['Scikit-learn','Fake Review Detection · Disaster Impact Mapping'],
 ['Leaflet.js & Chart.js','Disaster Impact Mapping'],
 ['Open-Meteo API','WeatherWise API'],
 ['PySide6, Vosk & Piper TTS','JARVIS'],
 ['PyInstaller','JARVIS (EXE packaging)']]}
};
const modal=document.getElementById('skillModal'),mList=document.getElementById('skillModalList');let lastCard=null;
function esc(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function openSkill(card){
 const d=SKILLS[card.dataset.skill];if(!d)return;lastCard=card;
 document.getElementById('skillModalIcon').textContent=d.icon;
 document.getElementById('skillModalTitle').textContent=d.title;
 document.getElementById('skillModalIntro').textContent=d.intro;
 mList.innerHTML=d.items.map(([n,u])=>'<div class="sm-item"><b>'+esc(n)+'</b>'+(u?'<span><em>Used in:</em> '+esc(u)+'</span>':'')+'</div>').join('');
 modal.hidden=false;document.body.classList.add('modal-open');modal.querySelector('.skill-close').focus();
}
function closeSkill(){modal.hidden=true;document.body.classList.remove('modal-open');if(lastCard)lastCard.focus()}
document.querySelectorAll('.skill[data-skill]').forEach(c=>{c.addEventListener('click',()=>openSkill(c));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSkill(c)}})});
modal.addEventListener('click',e=>{if(e.target.hasAttribute('data-close'))closeSkill()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeSkill()});
