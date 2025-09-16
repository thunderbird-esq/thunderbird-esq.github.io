
export const $  = s=>document.querySelector(s);
export const $$ = s=>[...document.querySelectorAll(s)];
export const delay = ms=>new Promise(r=>setTimeout(r,ms));
export const snap = n => Math.round(n/8)*8;
export function el(tag,props={},...kids){
  const e=document.createElement(tag);
  Object.entries(props).forEach(([k,v])=>{ if(k in e){e[k]=v;}else{e.setAttribute(k,v);} });
  e.append(...kids);
  return e;
}
