
import { el,snap } from './utils.js';
export class WindowMgr{
  constructor(root){this.root=root;this.z=50;}
  create({title='Window',w=320,h=240,contentHTML=''}){const win=el('div',{className:'window'});
    win.style.left=snap(80)+'px';win.style.top=snap(80)+'px';
    win.style.width=w+'px';win.style.height=h+'px';
    win.style.zIndex=++this.z;
    const bar=el('div',{className:'title-bar'},title);
    const close=el('button',{},'×');
    bar.append(close);
    const body=el('div',{className:'window-body'});
    body.innerHTML=contentHTML;
    win.append(bar,body);
    close.onclick=()=>win.remove();
    bar.onmousedown=e=>{
      const ox=e.offsetX,oy=e.offsetY;
      const move=ev=>{
        win.style.left=snap(ev.pageX-ox)+'px';
        win.style.top =snap(ev.pageY-oy)+'px';
      };
      const up=()=>{window.removeEventListener('mousemove',move);};
      window.addEventListener('mousemove',move);
      window.addEventListener('mouseup',up,{once:true});
    };
    win.addEventListener('mousedown',()=>this.focus(win));
    this.root.append(win);this.focus(win);
  }
  focus(w){$$('.window').forEach(a=>a.classList.remove('focus'));w.classList.add('focus');w.style.zIndex=++this.z;}
}
