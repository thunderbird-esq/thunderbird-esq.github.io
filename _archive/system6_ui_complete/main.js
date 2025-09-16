
import { Desktop } from './system/desktop.js';
import { WindowMgr } from './system/window.js';
import { MenuBar } from './system/menubar.js';

const menubarEl = document.getElementById('menubar');
const desktopEl = document.getElementById('desktop');

const desktop = new Desktop(desktopEl);
const winMgr  = new WindowMgr(document.body);
new MenuBar(menubarEl, winMgr);

// sample icons
desktop.addIcon({name:'System Disk',src:'./assets/icons/disk.png',onOpen:()=>winMgr.create({title:'System Disk'})});
desktop.addIcon({name:'Trash',src:'./assets/icons/trash.png',locked:true,x:24,y:200});
