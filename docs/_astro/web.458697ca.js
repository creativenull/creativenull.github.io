import{c as $,s as d,b as T,u as N,e as S}from"./solid.c7c9a678.js";function H(i,t,e){let o=e.length,s=t.length,l=o,f=0,n=0,r=t[s-1].nextSibling,c=null;for(;f<s||n<l;){if(t[f]===e[n]){f++,n++;continue}for(;t[s-1]===e[l-1];)s--,l--;if(s===f){const h=l<o?n?e[n-1].nextSibling:e[l-n]:r;for(;n<l;)i.insertBefore(e[n++],h)}else if(l===n)for(;f<s;)(!c||!c.has(t[f]))&&t[f].remove(),f++;else if(t[f]===e[l-1]&&e[n]===t[s-1]){const h=t[--s].nextSibling;i.insertBefore(e[n++],t[f++].nextSibling),i.insertBefore(e[--l],h),t[s]=e[l]}else{if(!c){c=new Map;let y=n;for(;y<l;)c.set(e[y],y++)}const h=c.get(t[f]);if(h!=null)if(n<h&&h<l){let y=f,u=1,x;for(;++y<s&&y<l&&!((x=c.get(t[y]))==null||x!==h+u);)u++;if(u>h-n){const C=t[f];for(;n<h;)i.insertBefore(e[n++],C)}else i.replaceChild(e[n++],t[f++])}else f++;else t[f++].remove()}}}const w="_$DX_DELEGATE";function m(i,t,e,o={}){let s;return T(l=>{s=l,t===document?i():B(t,i(),t.firstChild?null:void 0,e)},o.owner),()=>{s(),t.textContent=""}}function M(i,t,e){let o;const s=()=>{const f=document.createElement("template");return f.innerHTML=i,e?f.content.firstChild.firstChild:f.content.firstChild},l=t?()=>N(()=>document.importNode(o||(o=s()),!0)):()=>(o||(o=s())).cloneNode(!0);return l.cloneNode=l,l}function D(i,t=window.document){const e=t[w]||(t[w]=new Set);for(let o=0,s=i.length;o<s;o++){const l=i[o];e.has(l)||(e.add(l),t.addEventListener(l,b))}}function P(i,t,e,o){if(o)Array.isArray(e)?(i[`$$${t}`]=e[0],i[`$$${t}Data`]=e[1]):i[`$$${t}`]=e;else if(Array.isArray(e)){const s=e[0];i.addEventListener(t,e[0]=l=>s.call(i,e[1],l))}else i.addEventListener(t,e)}function B(i,t,e,o){if(e!==void 0&&!o&&(o=[]),typeof t!="function")return a(i,t,o,e);$(s=>a(i,t(),s,e),o)}function L(i,t,e={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=s=>E(t,s),d.registry=new Map,d.context={id:e.renderId||"",count:0},E(t,e.renderId);const o=m(i,t,[...t.childNodes],e);return d.context=null,o}function Y(i){let t,e;if(!d.context||!(t=d.registry.get(e=_()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",e),!i)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+e);return i()}return d.completed&&d.completed.add(t),d.registry.delete(e),t}function j(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:i,events:t}=d;for(t.queued=!1;t.length;){const[e,o]=t[0];if(!i.has(e))return;b(o),t.shift()}}),d.events.queued=!0)}function b(i){const t=`$$${i.type}`;let e=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==e&&Object.defineProperty(i,"target",{configurable:!0,value:e}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);e;){const o=e[t];if(o&&!e.disabled){const s=e[`${t}Data`];if(s!==void 0?o.call(e,s,i):o.call(e,i),i.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function a(i,t,e,o,s){if(d.context){!e&&(e=[...i.childNodes]);let n=[];for(let r=0;r<e.length;r++){const c=e[r];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():n.push(c)}e=n}for(;typeof e=="function";)e=e();if(t===e)return e;const l=typeof t,f=o!==void 0;if(i=f&&e[0]&&e[0].parentNode||i,l==="string"||l==="number"){if(d.context)return e;if(l==="number"&&(t=t.toString()),f){let n=e[0];n&&n.nodeType===3?n.data=t:n=document.createTextNode(t),e=g(i,e,o,n)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||l==="boolean"){if(d.context)return e;e=g(i,e,o)}else{if(l==="function")return $(()=>{let n=t();for(;typeof n=="function";)n=n();e=a(i,n,e,o)}),()=>e;if(Array.isArray(t)){const n=[],r=e&&Array.isArray(e);if(p(n,t,e,s))return $(()=>e=a(i,n,e,o,!0)),()=>e;if(d.context){if(!n.length)return e;for(let c=0;c<n.length;c++)if(n[c].parentNode)return e=n}if(n.length===0){if(e=g(i,e,o),f)return e}else r?e.length===0?A(i,n,o):H(i,e,n):(e&&g(i),A(i,n));e=n}else if(t.nodeType){if(d.context&&t.parentNode)return e=f?[t]:t;if(Array.isArray(e)){if(f)return e=g(i,e,o,t);g(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function p(i,t,e,o){let s=!1;for(let l=0,f=t.length;l<f;l++){let n=t[l],r=e&&e[l],c;if(!(n==null||n===!0||n===!1))if((c=typeof n)=="object"&&n.nodeType)i.push(n);else if(Array.isArray(n))s=p(i,n,r)||s;else if(c==="function")if(o){for(;typeof n=="function";)n=n();s=p(i,Array.isArray(n)?n:[n],Array.isArray(r)?r:[r])||s}else i.push(n),s=!0;else{const h=String(n);r&&r.nodeType===3&&r.data===h?i.push(r):i.push(document.createTextNode(h))}}return s}function A(i,t,e=null){for(let o=0,s=t.length;o<s;o++)i.insertBefore(t[o],e)}function g(i,t,e,o){if(e===void 0)return i.textContent="";const s=o||document.createTextNode("");if(t.length){let l=!1;for(let f=t.length-1;f>=0;f--){const n=t[f];if(s!==n){const r=n.parentNode===i;!l&&!f?r?i.replaceChild(s,n):i.insertBefore(s,e):r&&n.remove()}else l=!0}}else i.insertBefore(s,e);return[s]}function E(i,t){const e=i.querySelectorAll("*[data-hk]");for(let o=0;o<e.length;o++){const s=e[o],l=s.getAttribute("data-hk");(!t||l.startsWith(t))&&!d.registry.has(l)&&d.registry.set(l,s)}}function _(){const i=d.context;return`${i.id}${i.count++}`}const I=(...i)=>(S(),L(...i));export{P as a,m as b,D as d,Y as g,I as h,B as i,j as r,M as t};
