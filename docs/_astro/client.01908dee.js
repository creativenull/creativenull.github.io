import{a as u,s as h}from"./solid.c7c9a678.js";import{b as m,h as b}from"./web.458697ca.js";var y=r=>(s,a,o,{client:n})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=n==="only"?m:b;let t={};if(Object.keys(o).length>0)if(h.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,c]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=c;const{default:i,...l}=t,f=r.dataset.solidRenderId;d(()=>u(s,{...a,...l,children:i}),r,{renderId:f})};export{y as default};