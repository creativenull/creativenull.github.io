const c={context:void 0,registry:void 0};function R(e){c.context=e}function j(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}let K=U;const E=1,b=2,m={owned:null,cleanups:null,context:null,owner:null};var d=null;let _=null,g=null,h=null,x=null,C=0;function q(e,n){const t=g,i=d,l=e.length===0,o=n===void 0?i:n,f=l?m:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=l?e:()=>e(()=>T(()=>I(f)));d=f,g=null;try{return N(s,!0)}finally{g=t,d=i}}function H(e,n,t){const i=Q(e,n,!1,E);B(i)}function T(e){if(g===null)return e();const n=g;g=null;try{return e()}finally{g=n}}function G(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&N(()=>{for(let l=0;l<e.observers.length;l+=1){const o=e.observers[l],f=_&&_.running;f&&_.disposed.has(o),(f?!o.tState:!o.state)&&(o.pure?h.push(o):x.push(o),o.observers&&Y(o)),f||(o.state=E)}if(h.length>1e6)throw h=[],new Error},!1)),n}function B(e){if(!e.fn)return;I(e);const n=C;J(e,e.value,n)}function J(e,n,t){let i;const l=d,o=g;g=d=e;try{i=e.fn(n)}catch(f){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=t+1,P(f)}finally{g=o,d=l}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?G(e,i):e.value=i,e.updatedAt=t)}function Q(e,n,t,i=E,l){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return d===null||d!==m&&(d.owned?d.owned.push(o):d.owned=[o]),o}function O(e){if(e.state===0)return;if(e.state===b)return L(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<C);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===E)B(e);else if(e.state===b){const i=h;h=null,N(()=>L(e,n[0]),!1),h=i}}function N(e,n){if(h)return e();let t=!1;n||(h=[]),x?t=!0:x=[],C++;try{const i=e();return V(t),i}catch(i){t||(x=null),h=null,P(i)}}function V(e){if(h&&(U(h),h=null),e)return;const n=x;x=null,n.length&&N(()=>K(n),!1)}function U(e){for(let n=0;n<e.length;n++)O(e[n])}function L(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const i=e.sources[t];if(i.sources){const l=i.state;l===E?i!==n&&(!i.updatedAt||i.updatedAt<C)&&O(i):l===b&&L(i,n)}}}function Y(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=b,t.pure?h.push(t):x.push(t),t.observers&&Y(t))}}function I(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const o=l.pop(),f=t.observerSlots.pop();i<l.length&&(o.sourceSlots[f]=i,l[i]=o,t.observerSlots[i]=f)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)I(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function k(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function P(e,n=d){throw k(e)}let W=!1;function X(){W=!0}function Z(e,n){if(W&&c.context){const t=c.context;R(j());const i=T(()=>e(n||{}));return R(t),i}return T(()=>e(n||{}))}function z(e,n,t){let i=t.length,l=n.length,o=i,f=0,s=0,u=n[l-1].nextSibling,r=null;for(;f<l||s<o;){if(n[f]===t[s]){f++,s++;continue}for(;n[l-1]===t[o-1];)l--,o--;if(l===f){const a=o<i?s?t[s-1].nextSibling:t[o-s]:u;for(;s<o;)e.insertBefore(t[s++],a)}else if(o===s)for(;f<l;)(!r||!r.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[o-1]&&t[s]===n[l-1]){const a=n[--l].nextSibling;e.insertBefore(t[s++],n[f++].nextSibling),e.insertBefore(t[--o],a),n[l]=t[o]}else{if(!r){r=new Map;let y=s;for(;y<o;)r.set(t[y],y++)}const a=r.get(n[f]);if(a!=null)if(s<a&&a<o){let y=f,p=1,w;for(;++y<l&&y<o&&!((w=r.get(n[y]))==null||w!==a+p);)p++;if(p>a-s){const M=n[f];for(;s<a;)e.insertBefore(t[s++],M)}else e.replaceChild(t[s++],n[f++])}else f++;else n[f++].remove()}}}function D(e,n,t,i={}){let l;return q(o=>{l=o,n===document?e():ee(n,e(),n.firstChild?null:void 0,t)},i.owner),()=>{l(),n.textContent=""}}function ee(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return S(e,n,i,t);H(l=>S(e,n(),l,t),i)}function te(e,n,t={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=l=>globalThis._$HY.r[l],c.has=l=>l in globalThis._$HY.r,c.gather=l=>v(n,l),c.registry=new Map,c.context={id:t.renderId||"",count:0},v(n,t.renderId);const i=D(e,n,[...n.childNodes],t);return c.context=null,i}function S(e,n,t,i,l){if(c.context){!t&&(t=[...e.childNodes]);let s=[];for(let u=0;u<t.length;u++){const r=t[u];r.nodeType===8&&r.data.slice(0,2)==="!$"?r.remove():s.push(r)}t=s}for(;typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,f=i!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(c.context)return t;if(o==="number"&&(n=n.toString()),f){let s=t[0];s&&s.nodeType===3?s.data=n:s=document.createTextNode(n),t=A(e,t,i,s)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(c.context)return t;t=A(e,t,i)}else{if(o==="function")return H(()=>{let s=n();for(;typeof s=="function";)s=s();t=S(e,s,t,i)}),()=>t;if(Array.isArray(n)){const s=[],u=t&&Array.isArray(t);if(F(s,n,t,l))return H(()=>t=S(e,s,t,i,!0)),()=>t;if(c.context){if(!s.length)return t;if(i===void 0)return[...e.childNodes];let r=s[0],a=[r];for(;(r=r.nextSibling)!==i;)a.push(r);return t=a}if(s.length===0){if(t=A(e,t,i),f)return t}else u?t.length===0?$(e,s,i):z(e,t,s):(t&&A(e),$(e,s));t=s}else if(n.nodeType){if(c.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=A(e,t,i,n);A(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function F(e,n,t,i){let l=!1;for(let o=0,f=n.length;o<f;o++){let s=n[o],u=t&&t[o],r;if(!(s==null||s===!0||s===!1))if((r=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))l=F(e,s,u)||l;else if(r==="function")if(i){for(;typeof s=="function";)s=s();l=F(e,Array.isArray(s)?s:[s],Array.isArray(u)?u:[u])||l}else e.push(s),l=!0;else{const a=String(s);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return l}function $(e,n,t=null){for(let i=0,l=n.length;i<l;i++)e.insertBefore(n[i],t)}function A(e,n,t,i){if(t===void 0)return e.textContent="";const l=i||document.createTextNode("");if(n.length){let o=!1;for(let f=n.length-1;f>=0;f--){const s=n[f];if(l!==s){const u=s.parentNode===e;!o&&!f?u?e.replaceChild(l,s):e.insertBefore(l,t):u&&s.remove()}else o=!0}}else e.insertBefore(l,t);return[l]}function v(e,n){const t=e.querySelectorAll("*[data-hk]");for(let i=0;i<t.length;i++){const l=t[i],o=l.getAttribute("data-hk");(!n||o.startsWith(n))&&!c.registry.has(o)&&c.registry.set(o,l)}}const ne=(...e)=>(X(),te(...e));var se=e=>(n,t,i,{client:l})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!e.hasAttribute("ssr"))return;const o=l==="only"?D:ne;let f,s={};if(Object.keys(i).length>0){if(l!=="only"){const p=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,w=>w===e?NodeFilter.FILTER_SKIP:w.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:w.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;f=p.nextNode();)s[f.getAttribute("name")||"default"]=f}for(const[p,w]of Object.entries(i))s[p]||(s[p]=document.createElement("astro-slot"),p!=="default"&&s[p].setAttribute("name",p),s[p].innerHTML=w)}const{default:u,...r}=s,a=e.dataset.solidRenderId,y=o(()=>Z(n,{...t,...r,children:u}),e,{renderId:a});e.addEventListener("astro:unmount",()=>y(),{once:!0})};export{se as default};