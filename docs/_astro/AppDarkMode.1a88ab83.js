import{d as l,g as i,a as d,r as c,t as f}from"./web.0917beec.js";import{useDarkMode as u}from"./darkmode.6cb4fac0.js";import{e as v}from"./solid.f3c1f918.js";const g=f('<button class="p-2 text-light-50 text-xl hover:text-sky-500"><i class="fa-solid"></i></button>');function $(){const[s,{toggleDarkMode:o}]=u();return(()=>{const e=i(g),r=e.firstChild;return d(e,"click",o,!0),v(t=>{const a=!!s(),n=!s();return a!==t._v$&&r.classList.toggle("fa-sun",t._v$=a),n!==t._v$2&&r.classList.toggle("fa-moon",t._v$2=n),t},{_v$:void 0,_v$2:void 0}),c(),e})()}l(["click"]);export{$ as default};
