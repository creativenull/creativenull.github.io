import{s as d,b as u}from"./chunks/solid.a63df483.js";import{b as m,h as b}from"./chunks/web.6f4759d9.js";const w=o=>(n,s,r,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!o.hasAttribute("ssr"))return;const i=a==="only"?m:b;let t={};if(Object.keys(r).length>0)if(d.context)o.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,f]of Object.entries(r))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=f;const{default:l,...c}=t;i(()=>u(n,{...s,...c,children:l}),o)};export{w as default};