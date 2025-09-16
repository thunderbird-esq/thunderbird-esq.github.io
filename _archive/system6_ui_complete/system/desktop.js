
import { snap, el } from './utils.js';
export class Desktop{
  constructor(root){this.root=root;this.icons=[];this.z=1;
    window.addEventListener('contextmenu',e=>e.preventDefault());}
  addIcon({name,src,onOpen,locked=false,x=24,y=24}){
    const ico=el('div',{className:'icon'});
    ico.innerHTML=`<img src="${src}" draggable="false"><span>${name}</span>`;
    ico.style.left=snap(x)+'px';ico.style.top=snap(y)+'px';
    let ox,oy,dragGhost=null;
    ico.addEventListener('mousedown',e=>{
      if(e.detail===2&&!dragGhost){onOpen?.();return;}
      if(locked)return;
      ox=e.offsetX;oy=e.offsetY;
      dragGhost=ico.cloneNode(true);
      dragGhost.classList.add('drag-ghost');
      this.root.append(dragGhost);
      const move=ev=>{
        dragGhost.style.left=snap(ev.pageX-ox)+'px';
        dragGhost.style.top=snap(ev.pageY-oy)+'px';
      };
      const up=()=>{
        ico.style.left=dragGhost.style.left;
        ico.style.top =dragGhost.style.top;
        dragGhost.remove();dragGhost=null;
        window.removeEventListener('mousemove',move);
        window.removeEventListener('mouseup',up);
      };
      window.addEventListener('mousemove',move);
      window.addEventListener('mouseup',up);
    });
    ico.addEventListener('click',e=>{
      if(e.shiftKey) ico.classList.toggle('selected');
      else {this.icons.forEach(i=>i.classList.remove('selected'));ico.classList.add('selected');}
    });
    this.icons.push(ico);
    this.root.append(ico);
  }
}
