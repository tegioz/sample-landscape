(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const wt=(e,t)=>e===t,te=Symbol("solid-proxy"),bt=Symbol("solid-track"),ne={equals:wt};let Ze=nt;const z=1,re=2,qe={owned:null,cleanups:null,context:null,owner:null};var m=null;let ge=null,At=null,p=null,b=null,k=null,le=0;function Q(e,t){const n=p,r=m,i=e.length===0,s=t===void 0?r:t,o=i?qe:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=i?e:()=>e(()=>S(()=>oe(o)));m=o,p=null;try{return V(l,!0)}finally{p=n,m=r}}function y(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),tt(n,i));return[et.bind(n),r]}function O(e,t,n){const r=Te(e,t,!1,z);K(r)}function Qe(e,t,n){Ze=Pt;const r=Te(e,t,!1,z);(!n||!n.render)&&(r.user=!0),k?k.push(r):K(r)}function A(e,t,n){n=n?Object.assign({},ne,n):ne;const r=Te(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,K(r),et.bind(r)}function St(e){return V(e,!1)}function S(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function xt(e,t,n){const r=Array.isArray(e);let i,s=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(s){s=!1;return}const c=S(()=>t(l,i,o));return i=l,c}}function Et(e){Qe(()=>S(e))}function Tt(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function _t(e,t){const n=Symbol("context");return{id:n,Provider:$t(n),defaultValue:e}}function Lt(e){return m&&m.context&&m.context[e.id]!==void 0?m.context[e.id]:e.defaultValue}function Je(e){const t=A(e),n=A(()=>Ae(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function et(){if(this.sources&&this.state)if(this.state===z)K(this);else{const e=b;b=null,V(()=>se(this),!1),b=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function tt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=ge&&ge.running;o&&ge.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?b.push(s):k.push(s),s.observers&&rt(s)),o||(s.state=z)}if(b.length>1e6)throw b=[],new Error},!1)),t}function K(e){if(!e.fn)return;oe(e);const t=le;It(e,e.value,t)}function It(e,t,n){let r;const i=m,s=p;p=m=e;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=z,e.owned&&e.owned.forEach(oe),e.owned=null),e.updatedAt=n+1,it(o)}finally{p=s,m=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?tt(e,r):e.value=r,e.updatedAt=n)}function Te(e,t,n,r=z,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==qe&&(m.owned?m.owned.push(s):m.owned=[s]),s}function ie(e){if(e.state===0)return;if(e.state===re)return se(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===z)K(e);else if(e.state===re){const r=b;b=null,V(()=>se(e,t[0]),!1),b=r}}function V(e,t){if(b)return e();let n=!1;t||(b=[]),k?n=!0:k=[],le++;try{const r=e();return Ct(n),r}catch(r){n||(k=null),b=null,it(r)}}function Ct(e){if(b&&(nt(b),b=null),e)return;const t=k;k=null,t.length&&V(()=>Ze(t),!1)}function nt(e){for(let t=0;t<e.length;t++)ie(e[t])}function Pt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ie(r)}for(t=0;t<n;t++)ie(e[t])}function se(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const i=r.state;i===z?r!==t&&(!r.updatedAt||r.updatedAt<le)&&ie(r):i===re&&se(r,t)}}}function rt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=re,n.pure?b.push(n):k.push(n),n.observers&&rt(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),o=n.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Nt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function it(e,t=m){throw Nt(e)}function Ae(e){if(typeof e=="function"&&!e.length)return Ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ae(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function $t(e,t){return function(r){let i;return O(()=>i=S(()=>(m.context={...m.context,[e]:r.value},Je(()=>r.children))),void 0),i}}const vt=Symbol("fallback");function Ge(e){for(let t=0;t<e.length;t++)e[t]()}function kt(e,t,n={}){let r=[],i=[],s=[],o=0,l=t.length>1?[]:null;return Tt(()=>Ge(s)),()=>{let c=e()||[],f,a;return c[bt],S(()=>{let g=c.length,w,x,$,F,R,E,T,_,M;if(g===0)o!==0&&(Ge(s),s=[],r=[],i=[],o=0,l&&(l=[])),n.fallback&&(r=[vt],i[0]=Q(Z=>(s[0]=Z,n.fallback())),o=1);else if(o===0){for(i=new Array(g),a=0;a<g;a++)r[a]=c[a],i[a]=Q(u);o=g}else{for($=new Array(g),F=new Array(g),l&&(R=new Array(g)),E=0,T=Math.min(o,g);E<T&&r[E]===c[E];E++);for(T=o-1,_=g-1;T>=E&&_>=E&&r[T]===c[_];T--,_--)$[_]=i[T],F[_]=s[T],l&&(R[_]=l[T]);for(w=new Map,x=new Array(_+1),a=_;a>=E;a--)M=c[a],f=w.get(M),x[a]=f===void 0?-1:f,w.set(M,a);for(f=E;f<=T;f++)M=r[f],a=w.get(M),a!==void 0&&a!==-1?($[a]=i[f],F[a]=s[f],l&&(R[a]=l[f]),a=x[a],w.set(M,a)):s[f]();for(a=E;a<g;a++)a in $?(i[a]=$[a],s[a]=F[a],l&&(l[a]=R[a],l[a](a))):i[a]=Q(u);i=i.slice(0,o=g),r=c.slice(0)}return i});function u(g){if(s[a]=g,l){const[w,x]=y(a);return l[a]=x,t(c[a],w)}return t(c[a])}}}function d(e,t){return S(()=>e(t||{}))}function q(){return!0}const Se={get(e,t,n){return t===te?n:e.get(t)},has(e,t){return t===te?!0:e.has(t)},set:q,deleteProperty:q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:q,deleteProperty:q}},ownKeys(e){return e.keys()}};function de(e){return(e=typeof e=="function"?e():e)?e:{}}function Mt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function me(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&te in l,e[o]=typeof l=="function"?(t=!0,A(l)):l}if(t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const c=de(e[l])[o];if(c!==void 0)return c}},has(o){for(let l=e.length-1;l>=0;l--)if(o in de(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(de(e[l])));return[...new Set(o)]}},Se);const n={},r=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const c=Object.getOwnPropertyNames(l);for(let f=c.length-1;f>=0;f--){const a=c[f];if(a==="__proto__"||a==="constructor")continue;const u=Object.getOwnPropertyDescriptor(l,a);if(!r[a])r[a]=u.get?{enumerable:!0,configurable:!0,get:Mt.bind(n[a]=[u.get.bind(l)])}:u.value!==void 0?u:void 0;else{const g=n[a];g&&(u.get?g.push(u.get.bind(l)):u.value!==void 0&&g.push(()=>u.value))}}}const i={},s=Object.keys(r);for(let o=s.length-1;o>=0;o--){const l=s[o],c=r[l];c&&c.get?Object.defineProperty(i,l,c):i[l]=c?c.value:void 0}return i}function st(e,...t){if(te in e){const i=new Set(t.length>1?t.flat():t[0]),s=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},Se));return s.push(new Proxy({get(o){return i.has(o)?void 0:e[o]},has(o){return i.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!i.has(o))}},Se)),s}const n={},r=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,i),o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,c=0;for(const f of t)f.includes(i)&&(l=!0,o?r[c][i]=s.value:Object.defineProperty(r[c],i,s)),++c;l||(o?n[i]=s.value:Object.defineProperty(n,i,s))}return[...r,n]}const lt=e=>`Stale read from <${e}>.`;function J(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(kt(()=>e.each,e.children,t||void 0))}function j(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return A(()=>{const r=n();if(r){const i=e.children;return typeof i=="function"&&i.length>0?S(()=>i(t?r:()=>{if(!S(n))throw lt("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Ot(e){let t=!1;const n=(s,o)=>(t?s[1]===o[1]:!s[1]==!o[1])&&s[2]===o[2],r=Je(()=>e.children),i=A(()=>{let s=r();Array.isArray(s)||(s=[s]);for(let o=0;o<s.length;o++){const l=s[o].when;if(l)return t=!!s[o].keyed,[o,l,s[o]]}return[-1]},void 0,{equals:n});return A(()=>{const[s,o,l]=i();if(s<0)return e.fallback;const c=l.children;return typeof c=="function"&&c.length>0?S(()=>c(t?o:()=>{if(S(i)[0]!==s)throw lt("Match");return l.when})):c},void 0,void 0)}function he(e){return e}const zt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Dt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...zt]),jt=new Set(["innerHTML","textContent","innerText","children"]),Bt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ft=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Rt(e,t){const n=Ft[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ut=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Gt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Yt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Vt(e,t,n){let r=n.length,i=t.length,s=r,o=0,l=0,c=t[i-1].nextSibling,f=null;for(;o<i||l<s;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===o){const a=s<r?l?n[l-1].nextSibling:n[s-l]:c;for(;l<s;)e.insertBefore(n[l++],a)}else if(s===l)for(;o<i;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[l]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--s],a),t[i]=n[s]}else{if(!f){f=new Map;let u=l;for(;u<s;)f.set(n[u],u++)}const a=f.get(t[o]);if(a!=null)if(l<a&&a<s){let u=o,g=1,w;for(;++u<i&&u<s&&!((w=f.get(t[u]))==null||w!==a+g);)g++;if(g>a-l){const x=t[o];for(;l<a;)e.insertBefore(n[l++],x)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Ye="_$DX_DELEGATE";function Ht(e,t,n,r={}){let i;return Q(s=>{i=s,t===document?e():ae(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function X(e,t,n){let r;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},s=t?()=>S(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function Wt(e,t=window.document){const n=t[Ye]||(t[Ye]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,en))}}function W(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Kt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function _e(e,t){t==null?e.removeAttribute("class"):e.className=t}function Xt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function Zt(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,o;for(s=0,o=i.length;s<o;s++){const l=i[s];!l||l==="undefined"||t[l]||(Ve(e,l,!1),delete n[l])}for(s=0,o=r.length;s<o;s++){const l=r[s],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(Ve(e,l,!0),n[l]=c)}return n}function qt(e,t,n){if(!t)return n?W(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(r.setProperty(s,i),n[s]=i);return n}function ot(e,t={},n,r){const i={};return r||O(()=>i.children=Y(e,t.children,i.children)),O(()=>t.ref&&t.ref(e)),O(()=>Qt(e,t,n,!0,i,!0)),i}function ae(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Y(e,t,r,n);O(i=>Y(e,t(),i,n),r)}function Qt(e,t,n,r,i={},s=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=He(e,o,null,i[o],n,s)}for(const o in t){if(o==="children"){r||Y(e,t.children);continue}const l=t[o];i[o]=He(e,o,l,i[o],n,s)}}function Jt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ve(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function He(e,t,n,r,i,s){let o,l,c,f,a;if(t==="style")return qt(e,n,r);if(t==="classList")return Zt(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),g=Ut.has(u);if(!g&&r){const w=Array.isArray(r)?r[0]:r;e.removeEventListener(u,w)}(g||n)&&(Xt(e,u,n,g),g&&Wt([u]))}else if(t.slice(0,5)==="attr:")W(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=jt.has(t))||!i&&((f=Rt(t,e.tagName))||(l=Dt.has(t)))||(o=e.nodeName.includes("-")))a&&(t=t.slice(5),l=!0),t==="class"||t==="className"?_e(e,n):o&&!l&&!c?e[Jt(t)]=n:e[f||t]=n;else{const u=i&&t.indexOf(":")>-1&&Yt[t.split(":")[0]];u?Kt(e,u,t,n):W(e,Bt[t]||t,n)}return n}function en(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,r,i){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=G(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=G(e,n,r);else{if(s==="function")return O(()=>{let l=t();for(;typeof l=="function";)l=l();n=Y(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(xe(l,t,n,i))return O(()=>n=Y(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=G(e,n,r),o)return n}else c?n.length===0?We(e,l,r):Vt(e,n,l):(n&&G(e),We(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=G(e,n,r,t);G(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function xe(e,t,n,r){let i=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],c=n&&n[e.length],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=xe(e,l,c)||i;else if(f==="function")if(r){for(;typeof l=="function";)l=l();i=xe(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return i}function We(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function G(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const c=l.parentNode===e;!s&&!o?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&l.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const tn="http://www.w3.org/2000/svg";function nn(e,t=!1){return t?document.createElementNS(tn,e):document.createElement(e)}function rn(e){const[t,n]=st(e,["component"]),r=A(()=>t.component);return A(()=>{const i=r();switch(typeof i){case"function":return S(()=>i(n));case"string":const s=Gt.has(i),o=nn(i,s);return ot(o,n,s),o}})}let sn={data:""},ln=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||sn,on=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,an=/\/\*[^]*?\*\/|  +/g,Ke=/\n+/g,B=(e,t)=>{let n="",r="",i="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?B(o,s):s+"{"+B(o,s[1]=="k"?"":t)+"}":typeof o=="object"?r+=B(o,t?t.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=B.p?B.p(s,o):s+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},v={},at=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+at(e[n]);return t}return e},cn=(e,t,n,r,i)=>{let s=at(e),o=v[s]||(v[s]=(c=>{let f=0,a=11;for(;f<c.length;)a=101*a+c.charCodeAt(f++)>>>0;return"go"+a})(s));if(!v[o]){let c=s!==e?e:(f=>{let a,u,g=[{}];for(;a=on.exec(f.replace(an,""));)a[4]?g.shift():a[3]?(u=a[3].replace(Ke," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][a[1]]=a[2].replace(Ke," ").trim();return g[0]})(e);v[o]=B(i?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&v.g?v.g:null;return n&&(v.g=v[o]),((c,f,a,u)=>{u?f.data=f.data.replace(u,c):f.data.indexOf(c)===-1&&(f.data=a?c+f.data:f.data+c)})(v[o],t,r,l),o},fn=(e,t,n)=>e.reduce((r,i,s)=>{let o=t[s];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":B(l,""):l===!1?"":l}return r+i+(o??"")},"");function P(e){let t=this||{},n=e.call?e(t.p):e;return cn(n.unshift?n.raw?fn(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,ln(t.target),t.g,t.o,t.k)}P.bind({g:1});P.bind({k:1});const un=_t();function gn(e){let t=this||{};return(...n)=>{const r=i=>{const s=Lt(un),o=me(i,{theme:s}),l=me(o,{get class(){const w=o.class,x="class"in o&&/^go[0-9]+/.test(w);let $=P.apply({target:t.target,o:x,p:o,g:t.g},n);return[w,$].filter(Boolean).join(" ")}}),[c,f]=st(l,["as","theme"]),a=f,u=c.as||e;let g;return typeof u=="function"?g=u(a):t.g==1?(g=document.createElement(u),ot(g,a)):g=rn(me({component:u},a)),g};return r.class=i=>S(()=>P.apply({target:t.target,p:i,g:t.g},n)),r}}const N=new Proxy(gn,{get(e,t){return e(t)}}),dn=N("a")`
  padding-bottom: ${e=>typeof e.paddingBottom<"u"?`${e.paddingBottom}px`:"0"};
`,mn=P`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: inherit;
  }
`,ct=e=>d(dn,{get title(){return e.title},get class(){return`${mn} ${e.class}`},get href(){return e.href},target:"_blank",rel:"noopener noreferrer",get"aria-label"(){return e.label||"Open external link"},tabIndex:-1,get paddingBottom(){return e.paddingBottom},get children(){return e.children}});var hn=X('<div class="d-flex justify-content-center">');const yn=N("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background-color: transparent;
  z-index: 100;
`,pn=N("div")`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,wn=N("div")`
  height: 50px;
  width: 50px;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    content: '';
    border: 2px solid var(--color2);
    border: ${e=>e.bgColor==="transparent"?"2px solid rgba(0,0,0,0.25)":`2px solid ${e.bgColor}`};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    right: 0px;
  }

  &::before {
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    -webkit-animation: spWaveBe 0.6s infinite linear;
    animation: spWaveBe 0.6s infinite linear;
  }

  &::after {
    -webkit-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    transform: scale(0, 0);
    opacity: 0;
    -webkit-animation: spWaveAf 0.6s infinite linear;
    animation: spWaveAf 0.6s infinite linear;
  }

  @-webkit-keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes spWaveAf {
    from {
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @-webkit-keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @keyframes spWaveBe {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 1;
    }
    to {
      -webkit-transform: scale(1.5, 1.5);
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
`,bn=e=>d(yn,{get children(){return d(pn,{get children(){var t=hn();return ae(t,d(wn,{get bgColor(){return e.bgColor}})),t}})}});var An=X("<div role=alert><div>");const Sn=P`
  padding: 1.5rem;
  text-align: center;
  margin: 3rem auto;
  border: 1px solid #dee2e6;

  @media only screen and (min-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`,xn=e=>(()=>{var t=An(),n=t.firstChild;return _e(t,Sn),ae(n,()=>e.children),t})(),En="key",Tn="headers",_n="category-header",Ln="category-in-subcategory",In="title-uppercase",Cn="title-alignment",Pn="title-font-size",Nn="title-font-family",$n="item-name",vn="item-name-font-size",kn="style",Mn="size",On="items-alignment",zn="items-spacing",Dn="bg-color",jn="fg-color";var H=(e=>(e.Basic="clean",e.BorderedBasic="bordered",e.ShadowedBasic="shadowed",e))(H||{}),L=(e=>(e.XSmall="xs",e.Small="sm",e.Medium="md",e.Large="lg",e.XLarge="xl",e))(L||{}),ee=(e=>(e.Serif="serif",e.SansSerif="sans-serif",e.Monospace="monospace",e))(ee||{});const Bn=!0,Fn=!0,Rn=!1,Un=!1,Gn="left",Yn="sans-serif",Vn=13,Hn=!1,Wn=11,Kn="shadowed",Xn="md",Zn="left",qn="#323437",Qn="#ffffff",Ee=()=>new URL(document.location.href).origin;var Jn=X("<img>"),er=X('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M21.9 21.9l-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z">');const tr=e=>{const[t,n]=y(!1);return d(j,{get when(){return!t()},get fallback(){return er()},get children(){var r=Jn();return r.addEventListener("error",()=>n(!0)),O(i=>{var s=`${e.name} logo`,o=e.class,l=`../${e.logo}`;return s!==i.e&&W(r,"alt",i.e=s),o!==i.t&&_e(r,i.t=o),l!==i.a&&W(r,"src",i.a=l),i},{e:void 0,t:void 0,a:void 0}),r}})},nr={[L.XSmall]:"0.25rem",[L.Small]:"0.35rem",[L.Medium]:"0.5rem",[L.Large]:"0.75rem",[L.XLarge]:"1rem"},rr=N("div")`
  border: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
  box-shadow: ${e=>e.withShadow?"0 .125rem .25rem rgba(0,0,0,.075)":"none"};
  padding: ${e=>nr[e.size]};
  background-color: ${e=>e.borderless?"transparent":"#fff"};
`,ir=P`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,sr=P`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,lr=P`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,or=N("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: ${e=>e.itemNameSize<40?`${e.itemNameSize}px`:"40px"};
  line-height: ${e=>e.itemNameSize<40?`${e.itemNameSize-2}px`:"38px"};
  padding: ${e=>e.borderless?"0.35rem 0":"0.35rem 0.25rem"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-top: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
`,ye=e=>d(rr,{get class(){return`${ir} ${e.class}`},get borderless(){return e.borderless},get withShadow(){return typeof e.withShadow<"u"&&e.withShadow},get size(){return e.size},get children(){return d(ct,{get href(){return`${Ee()}?item=${e.item.id}`},get paddingBottom(){return e.withName?e.itemNameSize+8:0},class:sr,get children(){return[d(tr,{get name(){return e.item.name},class:lr,get logo(){return e.item.logo}}),d(j,{get when(){return e.withName},get children(){return d(or,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}})]}})}}),pe={[L.XSmall]:{width:"55px",height:"50px",gap:"5px"},[L.Small]:{width:"77px",height:"70px",gap:"8px"},[L.Medium]:{width:"110px",height:"100px",gap:"10px"},[L.Large]:{width:"143px",height:"130px",gap:"12px"},[L.XLarge]:{width:"220px",height:"200px",gap:"15px"}},we=N("div")`
  --card-size-width: ${e=>pe[e.size].width};
  --card-size-height: ${e=>pe[e.size].height};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:pe[e.size].gap};
  justify-content: ${e=>e.alignment};
`,be=P`
  width: var(--card-size-width);
  height: var(--card-size-height);
`,Xe=e=>d(Ot,{get children(){return[d(he,{get when(){return e.style===H.Basic},get children(){return d(we,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(J,{get each(){return e.items},children:t=>d(ye,{item:t,get size(){return e.size},class:be,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!0})})}})}}),d(he,{get when(){return e.style===H.BorderedBasic},get children(){return d(we,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(J,{get each(){return e.items},children:t=>d(ye,{item:t,get size(){return e.size},class:be,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1})})}})}}),d(he,{get when(){return e.style===H.ShadowedBasic},get children(){return d(we,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(J,{get each(){return e.items},children:t=>d(ye,{item:t,get size(){return e.size},class:be,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1,withShadow:!0})})}})}})]}});var ar=X("<div><h4>Invalid embed url</h4><p>Please visit: ");const cr={[ee.Serif]:'Times, "Times New Roman", Georgia, Palatino, serif',[ee.SansSerif]:'"Clarity City", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, Roboto, Ubuntu, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',[ee.Monospace]:'Courier, Consolas, "Andale Mono", monospace'},fr=N("div")`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    font-family: ${e=>cr[e.fontFamily]};
    box-sizing: border-box;
  }
`,ur=N("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: ${e=>e.size?`${e.size}px`:"0.8rem"};
  text-align: ${e=>e.alignment};
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  font-weight: 500;
  line-height: 1.5;
  overflow: hidden;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,gr=N("div")`
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: ${e=>e.isBgTransparent?"0.5rem 0":"0.5rem 0.75rem"};
  font-size: ${e=>e.size?`${e.size}px`:"0.8rem"};
  text-align: ${e=>e.alignment};
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  font-weight: 500;
  line-height: 1.5;
  margin: ${e=>{const t=typeof e.spacing<"u"&&e.spacing>16?`${e.spacing}px`:"16px";return typeof e.firstTitle<"u"&&e.firstTitle?`0 0 ${t} 0`:`${t} 0 ${t} 0`}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dr=()=>{const[e,t]=y(),[n,r]=y(),[i,s]=y(Bn),[o,l]=y(Kn),[c,f]=y(!1),[a,u]=y(qn),[g,w]=y(Qn),[x,$]=y(Xn),[F,R]=y(Fn),[E,T]=y(Rn),[_,M]=y(Un),[Z,ft]=y(Gn),[ut,gt]=y(Yn),[Le,dt]=y(Vn),[Ie,mt]=y(Hn),[Ce,ht]=y(Wn),[Pe,yt]=y(Zn),[ce,pt]=y();return Et(()=>{const h=new URLSearchParams(window.location.search),I=h.get(En),D=h.get(Tn),U=h.get(kn),fe=h.get(Mn),ue=h.get(Dn),Ne=h.get(jn),$e=h.get(_n),ve=h.get(Ln),ke=h.get(Cn),Me=h.get(Nn),Oe=h.get(Pn),ze=h.get($n),De=h.get(vn),je=h.get(On),Be=h.get(zn),Fe=h.get(In);St(()=>{if(I!==null){let Re=!0,Ue=!0;if(s(D==="true"),$e!==null&&R($e==="true"),ve!==null&&T(ve==="true"),Fe!==null&&M(Fe==="true"),ze!==null&&(mt(ze==="true"),De!==null)){const C=parseInt(De);C>=10&&C<=40&&ht(C)}if(U!==null&&(Object.values(H).includes(U)?l(U):Ue=!1),fe!==null&&(Object.values(L).includes(fe)?$(fe):Re=!1),ue!==null&&(u(ue),f(ue==="transparent")),Ne!==null&&w(Ne),Me!==null&&gt(Me),ke!==null&&ft(ke),Oe!==null){const C=parseInt(Oe);C>=10&&C<=60&&dt(C)}if(je!==null&&yt(je),Be!==null){const C=parseInt(Be);C>=0&&pt(C)}Re&&Ue?t(I):r(null)}else r(null)})}),Qe(xt(e,()=>{async function h(){try{fetch(`../data/embed_${e()}.json`).then(I=>{if(I.ok)return I.json();throw new Error("Something went wrong")}).then(I=>{r(I)}).catch(()=>{r(null)})}catch{r(null)}}typeof e()<"u"&&h()})),d(fr,{get fontFamily(){return ut()},get style(){return{all:"initial",isolation:"isolate",overflow:"hidden","--bg-color":a(),"--fg-color":g()}},get children(){return d(j,{get when(){return n()!==null},get fallback(){return d(xn,{get children(){var h=ar(),I=h.firstChild,D=I.nextSibling;return D.firstChild,ae(D,d(ct,{get href(){return`${Ee()}/embed-setup`},get children(){return[A(()=>Ee()),"/embed-setup"]}}),null),h}})},get children(){return d(j,{get when(){return typeof n()<"u"},get fallback(){return d(bn,{get bgColor(){return a()}})},get children(){return d(j,{get when(){return i()},get fallback(){return d(Xe,{get items(){return n().items},get style(){return o()},get size(){return x()},get alignment(){return Pe()},get spacing(){return ce()},get displayName(){return Ie()},get itemNameSize(){return Ce()}})},get children(){return[d(j,{get when(){return F()},get children(){return d(ur,{get isBgTransparent(){return c()},get size(){return Le()},get alignment(){return Z()},get uppercase(){return _()},get children(){return n().category.name}})}}),d(J,{get each(){return n().category.subcategories},children:(h,I)=>{const D=n().items.filter(U=>U.category===n().category.name&&U.subcategory===h.name);return[d(gr,{get isBgTransparent(){return c()},get size(){return Le()},get alignment(){return Z()},get uppercase(){return _()},get firstTitle(){return I()===0},get spacing(){return ce()},get children(){return[d(j,{get when(){return E()},get children(){return[A(()=>n().category.name)," - "]}}),A(()=>h.name)," (",A(()=>D.length),")"]}}),d(Xe,{items:D,get style(){return o()},get size(){return x()},get alignment(){return Pe()},get spacing(){return ce()},get displayName(){return Ie()},get itemNameSize(){return Ce()}})]}})]}})}})}})}})},mr=document.getElementById("landscape-embeddable-view");Ht(()=>d(dr,{}),mr);
