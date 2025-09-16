
const SFX={click:"assets/audio/click.mp3",open:"assets/audio/window-open.mp3",close:"assets/audio/window-close.mp3",error:"assets/audio/error-beep.mp3"};
const audioCache=new Map();
function play(n){let a=audioCache.get(n);if(!a){a=new Audio(SFX[n]);audioCache.set(n,a);}a.currentTime=0;a.play().catch(()=>{});}
const boot=document.getElementById("boot");const fill=boot.querySelector(".fill");let p=0,bootInt=setInterval(()=>{p+=2;fill.style.width=`${p}%`;if(p>=100){clearInterval(bootInt);boot.remove();startDesktop();}},40);
function startDesktop(){const d=document.getElementById("desktop");d.classList.remove("hidden");d.addEventListener("dblclick",desktopDblClick);d.addEventListener("click",e=>{const ic=e.target.closest(".icon");if(ic)selectIcon(ic);});play("open");initMenubar();}
function selectIcon(i){document.querySelectorAll(".icon.selected").forEach(n=>n.classList.remove("selected"));i.classList.add("selected");}
function desktopDblClick(e){const ic=e.target.closest(".icon");if(!ic)return;launch(ic.dataset.launch);}
function launch(tid){const tpl=document.querySelector(tid);const w=tpl.content.firstElementChild.cloneNode(true);document.getElementById("desktop").appendChild(w);makeWindow(w);play("open");}
function makeWindow(w){const bar=w.querySelector(".title-bar");let ox,oy;bar.addEventListener("mousedown",e=>{const r=w.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;const mv=ev=>{w.style.left=(ev.clientX-ox)+"px";w.style.top=(ev.clientY-oy)+"px";};const up=()=>{document.removeEventListener("mousemove",mv);};document.addEventListener("mousemove",mv);document.addEventListener("mouseup",up,{once:true});});w.addEventListener("mousedown",()=>setActive(w));setActive(w);w.querySelector(".close").addEventListener("click",()=>{play("close");w.remove();});}
function setActive(w){document.querySelectorAll(".window").forEach(n=>n.classList.remove("active"));w.classList.add("active");}
function initMenubar(){document.querySelectorAll(".menu-root").forEach(r=>{r.addEventListener("mousedown",()=>{play("click");r.classList.add("active");setTimeout(()=>r.classList.remove("active"),120);});});}
