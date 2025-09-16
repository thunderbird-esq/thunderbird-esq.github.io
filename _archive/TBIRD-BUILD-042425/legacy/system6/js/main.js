(()=>{
const boot=document.getElementById('boot');
const desktop=document.getElementById('desktop');
const bar=document.querySelector('.progress .bar');
setTimeout(()=>{bar.style.width='100%';},50);
setTimeout(()=>{boot.classList.add('hidden');desktop.classList.remove('hidden');},3050);
const icons=[...document.querySelectorAll('.icon')];
let selected=null;
icons.forEach(ic=>{
 ic.addEventListener('click',e=>{
   if(selected)selected.classList.remove('selected');
   selected=ic;ic.classList.add('selected');
 });
 ic.addEventListener('dblclick',e=>{
   const type=ic.dataset.type;
   if(type==='disk')openFinderWindow(ic);
   if(type==='trash')alert('The Trash is empty.');
 });
});
const menuBar=document.getElementById('menuBar');
menuBar.addEventListener('click',e=>{
 if(e.target.matches('.menu')) alert(e.target.innerText+' menu clicked');
});
const windowsLayer=document.getElementById('windows');
let z=1;
function openFinderWindow(ic){
 const w=document.createElement('div');w.className='window';
 w.style.left=100+Math.random()*200+'px';w.style.top=80+Math.random()*120+'px';w.style.zIndex=++z;
 w.innerHTML=`
  <div class="title-bar">
    <button class="close" title="Close"></button>
    <span class="title">Finder – ${ic.querySelector('.label').innerText}</span>
    <button class="resize" title="Resize"></button>
  </div>
  <div class="window-content">
     <p>This is a placeholder Finder window.<br>Drop real Finder list view here…</p>
  </div>`;
 windowsLayer.appendChild(w);
 w.addEventListener('mousedown',()=>w.style.zIndex=++z);
 const tb=w.querySelector('.title-bar');
 let ox,oy,drag=false;
 tb.addEventListener('mousedown',e=>{drag=true;ox=e.offsetX;oy=e.offsetY;document.body.classList.add('no-select');});
 window.addEventListener('mousemove',e=>{if(!drag)return;w.style.left=e.clientX-ox+'px';w.style.top=e.clientY-oy+'px';});
 window.addEventListener('mouseup',()=>{drag=false;document.body.classList.remove('no-select');});
 w.querySelector('.close').addEventListener('click',()=>w.remove());
}
})();