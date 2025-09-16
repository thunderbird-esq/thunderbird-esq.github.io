
import { el } from './utils.js';
export class MenuBar{
  constructor(root,winMgr){
    this.root=root;this.winMgr=winMgr;
    this.menus={};
    this.active=null;
    this.build();
    window.addEventListener('click',()=>this.closeMenus());
  }
  build(){
    const items=[
      {label:'',items:[{lab:'About System 6',cb:()=>this.winMgr.create({title:'About',w:260,h:120,contentHTML:'<p>System 6 UI Demo<br>All JS/CSS Offline.</p>'})}]},
      {label:'File',items:[{lab:'New Window',cb:()=>this.winMgr.create({title:'Untitled'})},{sep:1},{lab:'Quit',cb:()=>alert('This is a static demo 🙂')}]},
      {label:'Edit',items:[{lab:'Cut',disabled:1},{lab:'Copy',disabled:1},{lab:'Paste',disabled:1}]},
    ];
    items.forEach(m=>{
      const li=el('div',{className:'menu'},m.label);
      const pm=el('div',{className:'pull-menu'});
      m.items.forEach(it=>{
        if(it.sep){pm.append(el('div',{className:'pull-sep'}));return;}
        const pi=el('div',{className:'pull-item'+(it.disabled?' disabled':'')},it.lab);
        if(!it.disabled) pi.onclick=ev=>{it.cb();this.closeMenus();ev.stopPropagation();};
        pm.append(pi);
      });
      li.append(pm);
      li.onclick=e=>{e.stopPropagation();this.toggleMenu(pm,li);};
      this.root.append(li);
      this.menus[ m.label ]=pm;
    });
  }
  toggleMenu(m,li){
    if(this.active && this.active!==m)this.closeMenus();
    m.classList.toggle('show');
    li.classList.toggle('active');
    this.active = m.classList.contains('show') ? m : null;
  }
  closeMenus(){if(this.active){this.active.classList.remove('show');this.active.parentElement.classList.remove('active');this.active=null;}}
}
