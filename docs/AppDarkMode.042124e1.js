import{d as l,g as i,a as c,r as d,t as v}from"./chunks/web.6f4759d9.js";import{useDarkMode as f}from"./darkmode.165258fa.js";import{e as u}from"./chunks/solid.a63df483.js";const g=v('<button class="p-2 text-light-50 text-xl hover:text-sky-500"><i class="fa-solid"></i></button>');function $(){const[s,{toggleDarkMode:n}]=f();return(()=>{const e=i(g),o=e.firstChild;return c(e,"click",n,!0),u(t=>{const r=!!s(),a=!s();return r!==t._v$&&o.classList.toggle("fa-sun",t._v$=r),a!==t._v$2&&o.classList.toggle("fa-moon",t._v$2=a),t},{_v$:void 0,_v$2:void 0}),d(),e})()}l(["click"]);export{$ as default};