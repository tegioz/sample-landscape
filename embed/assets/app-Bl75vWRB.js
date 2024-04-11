(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const xt=(e,t)=>e===t,te=Symbol("solid-proxy"),Et=Symbol("solid-track"),ne={equals:xt};let Qe=it;const D=1,re=2,Je={owned:null,cleanups:null,context:null,owner:null};var h=null;let de=null,Tt=null,p=null,b=null,k=null,le=0;function Q(e,t){const n=p,i=h,r=e.length===0,s=t===void 0?i:t,o=r?Je:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=r?e:()=>e(()=>S(()=>oe(o)));h=o,p=null;try{return Y(l,!0)}finally{p=n,h=i}}function y(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),rt(n,r));return[nt.bind(n),i]}function z(e,t,n){const i=Pe(e,t,!1,D);W(i)}function et(e,t,n){Qe=kt;const i=Pe(e,t,!1,D);(!n||!n.render)&&(i.user=!0),k?k.push(i):W(i)}function A(e,t,n){n=n?Object.assign({},ne,n):ne;const i=Pe(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,W(i),nt.bind(i)}function Pt(e){return Y(e,!1)}function S(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function _t(e,t,n){const i=Array.isArray(e);let r,s=n&&n.defer;return o=>{let l;if(i){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(s){s=!1;return}const c=S(()=>t(l,r,o));return r=l,c}}function Lt(e){et(()=>S(e))}function It(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Ct(e,t){const n=Symbol("context");return{id:n,Provider:Ot(n),defaultValue:e}}function Nt(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function tt(e){const t=A(e),n=A(()=>Se(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function nt(){if(this.sources&&this.state)if(this.state===D)W(this);else{const e=b;b=null,Y(()=>se(this),!1),b=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function rt(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&Y(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],o=de&&de.running;o&&de.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?b.push(s):k.push(s),s.observers&&st(s)),o||(s.state=D)}if(b.length>1e6)throw b=[],new Error},!1)),t}function W(e){if(!e.fn)return;oe(e);const t=le;$t(e,e.value,t)}function $t(e,t,n){let i;const r=h,s=p;p=h=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(oe),e.owned=null),e.updatedAt=n+1,lt(o)}finally{p=s,h=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?rt(e,i):e.value=i,e.updatedAt=n)}function Pe(e,t,n,i=D,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==Je&&(h.owned?h.owned.push(s):h.owned=[s]),s}function ie(e){if(e.state===0)return;if(e.state===re)return se(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)W(e);else if(e.state===re){const i=b;b=null,Y(()=>se(e,t[0]),!1),b=i}}function Y(e,t){if(b)return e();let n=!1;t||(b=[]),k?n=!0:k=[],le++;try{const i=e();return vt(n),i}catch(i){n||(k=null),b=null,lt(i)}}function vt(e){if(b&&(it(b),b=null),e)return;const t=k;k=null,t.length&&Y(()=>Qe(t),!1)}function it(e){for(let t=0;t<e.length;t++)ie(e[t])}function kt(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:ie(i)}for(t=0;t<n;t++)ie(e[t])}function se(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===D?i!==t&&(!i.updatedAt||i.updatedAt<le)&&ie(i):r===re&&se(i,t)}}}function st(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=re,n.pure?b.push(n):k.push(n),n.observers&&st(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),o=n.observerSlots.pop();i<r.length&&(s.sourceSlots[o]=i,r[i]=s,n.observerSlots[i]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Mt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function lt(e,t=h){throw Mt(e)}function Se(e){if(typeof e=="function"&&!e.length)return Se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=Se(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Ot(e,t){return function(i){let r;return z(()=>r=S(()=>(h.context={...h.context,[e]:i.value},tt(()=>i.children))),void 0),r}}const zt=Symbol("fallback");function Ve(e){for(let t=0;t<e.length;t++)e[t]()}function Dt(e,t,n={}){let i=[],r=[],s=[],o=0,l=t.length>1?[]:null;return It(()=>Ve(s)),()=>{let c=e()||[],f,a;return c[Et],S(()=>{let g=c.length,w,P,$,B,F,x,E,_,M;if(g===0)o!==0&&(Ve(s),s=[],i=[],r=[],o=0,l&&(l=[])),n.fallback&&(i=[zt],r[0]=Q(X=>(s[0]=X,n.fallback())),o=1);else if(o===0){for(r=new Array(g),a=0;a<g;a++)i[a]=c[a],r[a]=Q(u);o=g}else{for($=new Array(g),B=new Array(g),l&&(F=new Array(g)),x=0,E=Math.min(o,g);x<E&&i[x]===c[x];x++);for(E=o-1,_=g-1;E>=x&&_>=x&&i[E]===c[_];E--,_--)$[_]=r[E],B[_]=s[E],l&&(F[_]=l[E]);for(w=new Map,P=new Array(_+1),a=_;a>=x;a--)M=c[a],f=w.get(M),P[a]=f===void 0?-1:f,w.set(M,a);for(f=x;f<=E;f++)M=i[f],a=w.get(M),a!==void 0&&a!==-1?($[a]=r[f],B[a]=s[f],l&&(F[a]=l[f]),a=P[a],w.set(M,a)):s[f]();for(a=x;a<g;a++)a in $?(r[a]=$[a],s[a]=B[a],l&&(l[a]=F[a],l[a](a))):r[a]=Q(u);r=r.slice(0,o=g),i=c.slice(0)}return r});function u(g){if(s[a]=g,l){const[w,P]=y(a);return l[a]=P,t(c[a],w)}return t(c[a])}}}function d(e,t){return S(()=>e(t||{}))}function q(){return!0}const xe={get(e,t,n){return t===te?n:e.get(t)},has(e,t){return t===te?!0:e.has(t)},set:q,deleteProperty:q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:q,deleteProperty:q}},ownKeys(e){return e.keys()}};function me(e){return(e=typeof e=="function"?e():e)?e:{}}function Bt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function he(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&te in l,e[o]=typeof l=="function"?(t=!0,A(l)):l}if(t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const c=me(e[l])[o];if(c!==void 0)return c}},has(o){for(let l=e.length-1;l>=0;l--)if(o in me(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(me(e[l])));return[...new Set(o)]}},xe);const n={},i=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const c=Object.getOwnPropertyNames(l);for(let f=c.length-1;f>=0;f--){const a=c[f];if(a==="__proto__"||a==="constructor")continue;const u=Object.getOwnPropertyDescriptor(l,a);if(!i[a])i[a]=u.get?{enumerable:!0,configurable:!0,get:Bt.bind(n[a]=[u.get.bind(l)])}:u.value!==void 0?u:void 0;else{const g=n[a];g&&(u.get?g.push(u.get.bind(l)):u.value!==void 0&&g.push(()=>u.value))}}}const r={},s=Object.keys(i);for(let o=s.length-1;o>=0;o--){const l=s[o],c=i[l];c&&c.get?Object.defineProperty(r,l,c):r[l]=c?c.value:void 0}return r}function ot(e,...t){if(te in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},xe));return s.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},xe)),s}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,c=0;for(const f of t)f.includes(r)&&(l=!0,o?i[c][r]=s.value:Object.defineProperty(i[c],r,s)),++c;l||(o?n[r]=s.value:Object.defineProperty(n,r,s))}return[...i,n]}const at=e=>`Stale read from <${e}>.`;function J(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(Dt(()=>e.each,e.children,t||void 0))}function j(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return A(()=>{const i=n();if(i){const r=e.children;return typeof r=="function"&&r.length>0?S(()=>r(t?i:()=>{if(!S(n))throw at("Show");return e.when})):r}return e.fallback},void 0,void 0)}function jt(e){let t=!1;const n=(s,o)=>(t?s[1]===o[1]:!s[1]==!o[1])&&s[2]===o[2],i=tt(()=>e.children),r=A(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let o=0;o<s.length;o++){const l=s[o].when;if(l)return t=!!s[o].keyed,[o,l,s[o]]}return[-1]},void 0,{equals:n});return A(()=>{const[s,o,l]=r();if(s<0)return e.fallback;const c=l.children;return typeof c=="function"&&c.length>0?S(()=>c(t?o:()=>{if(S(r)[0]!==s)throw at("Match");return l.when})):c},void 0,void 0)}function ye(e){return e}const Rt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ft=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Rt]),Ut=new Set(["innerHTML","textContent","innerText","children"]),Gt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Yt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Vt(e,t){const n=Yt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ht=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Wt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Kt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Xt(e,t,n){let i=n.length,r=t.length,s=i,o=0,l=0,c=t[r-1].nextSibling,f=null;for(;o<r||l<s;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===o){const a=s<i?l?n[l-1].nextSibling:n[s-l]:c;for(;l<s;)e.insertBefore(n[l++],a)}else if(s===l)for(;o<r;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[l]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--s],a),t[r]=n[s]}else{if(!f){f=new Map;let u=l;for(;u<s;)f.set(n[u],u++)}const a=f.get(t[o]);if(a!=null)if(l<a&&a<s){let u=o,g=1,w;for(;++u<r&&u<s&&!((w=f.get(t[u]))==null||w!==a+g);)g++;if(g>a-l){const P=t[o];for(;l<a;)e.insertBefore(n[l++],P)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const He="_$DX_DELEGATE";function Zt(e,t,n,i={}){let r;return Q(s=>{r=s,t===document?e():ae(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function K(e,t,n){let i;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},s=t?()=>S(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function qt(e,t=window.document){const n=t[He]||(t[He]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,sn))}}function H(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Qt(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function _e(e,t){t==null?e.removeAttribute("class"):e.className=t}function Jt(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n)}function en(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let s,o;for(s=0,o=r.length;s<o;s++){const l=r[s];!l||l==="undefined"||t[l]||(We(e,l,!1),delete n[l])}for(s=0,o=i.length;s<o;s++){const l=i[s],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(We(e,l,!0),n[l]=c)}return n}function tn(e,t,n){if(!t)return n?H(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(i.setProperty(s,r),n[s]=r);return n}function ct(e,t={},n,i){const r={};return i||z(()=>r.children=G(e,t.children,r.children)),z(()=>t.ref&&t.ref(e)),z(()=>nn(e,t,n,!0,r,!0)),r}function ae(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return G(e,t,i,n);z(r=>G(e,t(),r,n),i)}function nn(e,t,n,i,r={},s=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=Ke(e,o,null,r[o],n,s)}for(const o in t){if(o==="children"){i||G(e,t.children);continue}const l=t[o];r[o]=Ke(e,o,l,r[o],n,s)}}function rn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function We(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)e.classList.toggle(i[r],n)}function Ke(e,t,n,i,r,s){let o,l,c,f,a;if(t==="style")return tn(e,n,i);if(t==="classList")return en(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),g=Ht.has(u);if(!g&&i){const w=Array.isArray(i)?i[0]:i;e.removeEventListener(u,w)}(g||n)&&(Jt(e,u,n,g),g&&qt([u]))}else if(t.slice(0,5)==="attr:")H(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=Ut.has(t))||!r&&((f=Vt(t,e.tagName))||(l=Ft.has(t)))||(o=e.nodeName.includes("-")))a&&(t=t.slice(5),l=!0),t==="class"||t==="className"?_e(e,n):o&&!l&&!c?e[rn(t)]=n:e[f||t]=n;else{const u=r&&t.indexOf(":")>-1&&Kt[t.split(":")[0]];u?Qt(e,u,t,n):H(e,Gt[t]||t,n)}return n}function sn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function G(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=U(e,n,i,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=U(e,n,i);else{if(s==="function")return z(()=>{let l=t();for(;typeof l=="function";)l=l();n=G(e,l,n,i)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(Ee(l,t,n,r))return z(()=>n=G(e,l,n,i,!0)),()=>n;if(l.length===0){if(n=U(e,n,i),o)return n}else c?n.length===0?Xe(e,l,i):Xt(e,n,l):(n&&U(e),Xe(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=U(e,n,i,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ee(e,t,n,i){let r=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],c=n&&n[e.length],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Ee(e,l,c)||r;else if(f==="function")if(i){for(;typeof l=="function";)l=l();r=Ee(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else e.push(l),r=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return r}function Xe(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function U(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const c=l.parentNode===e;!s&&!o?c?e.replaceChild(r,l):e.insertBefore(r,n):c&&l.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const ln="http://www.w3.org/2000/svg";function on(e,t=!1){return t?document.createElementNS(ln,e):document.createElement(e)}function an(e){const[t,n]=ot(e,["component"]),i=A(()=>t.component);return A(()=>{const r=i();switch(typeof r){case"function":return S(()=>r(n));case"string":const s=Wt.has(r),o=on(r,s);return ct(o,n,s),o}})}let cn={data:""},fn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||cn,un=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,gn=/\/\*[^]*?\*\/|  +/g,Ze=/\n+/g,R=(e,t)=>{let n="",i="",r="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":i+=s[1]=="f"?R(o,s):s+"{"+R(o,s[1]=="k"?"":t)+"}":typeof o=="object"?i+=R(o,t?t.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=R.p?R.p(s,o):s+":"+o+";")}return n+(t&&r?t+"{"+r+"}":r)+i},v={},ft=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+ft(e[n]);return t}return e},dn=(e,t,n,i,r)=>{let s=ft(e),o=v[s]||(v[s]=(c=>{let f=0,a=11;for(;f<c.length;)a=101*a+c.charCodeAt(f++)>>>0;return"go"+a})(s));if(!v[o]){let c=s!==e?e:(f=>{let a,u,g=[{}];for(;a=un.exec(f.replace(gn,""));)a[4]?g.shift():a[3]?(u=a[3].replace(Ze," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][a[1]]=a[2].replace(Ze," ").trim();return g[0]})(e);v[o]=R(r?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&v.g?v.g:null;return n&&(v.g=v[o]),((c,f,a,u)=>{u?f.data=f.data.replace(u,c):f.data.indexOf(c)===-1&&(f.data=a?c+f.data:f.data+c)})(v[o],t,i,l),o},mn=(e,t,n)=>e.reduce((i,r,s)=>{let o=t[s];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":R(l,""):l===!1?"":l}return i+r+(o??"")},"");function C(e){let t=this||{},n=e.call?e(t.p):e;return dn(n.unshift?n.raw?mn(n,[].slice.call(arguments,1),t.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):n,fn(t.target),t.g,t.o,t.k)}C.bind({g:1});C.bind({k:1});const hn=Ct();function yn(e){let t=this||{};return(...n)=>{const i=r=>{const s=Nt(hn),o=he(r,{theme:s}),l=he(o,{get class(){const w=o.class,P="class"in o&&/^go[0-9]+/.test(w);let $=C.apply({target:t.target,o:P,p:o,g:t.g},n);return[w,$].filter(Boolean).join(" ")}}),[c,f]=ot(l,["as","theme"]),a=f,u=c.as||e;let g;return typeof u=="function"?g=u(a):t.g==1?(g=document.createElement(u),ct(g,a)):g=an(he({component:u},a)),g};return i.class=r=>S(()=>C.apply({target:t.target,p:r,g:t.g},n)),i}}const N=new Proxy(yn,{get(e,t){return e(t)}}),pn=N("a")`
  padding-bottom: ${e=>typeof e.paddingBottom<"u"?`${e.paddingBottom}px`:"0"};
`,wn=C`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: inherit;
  }
`,ut=e=>d(pn,{get title(){return e.title},get class(){return`${wn} ${e.class}`},get href(){return e.href},target:"_blank",rel:"noopener noreferrer",get"aria-label"(){return e.label||"Open external link"},tabIndex:-1,get paddingBottom(){return e.paddingBottom},get children(){return e.children}});var bn=K('<div class="d-flex justify-content-center">');const An=N("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  background-color: transparent;
  z-index: 100;
`,Sn=N("div")`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,xn=N("div")`
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
`,En=e=>d(An,{get children(){return d(Sn,{get children(){var t=bn();return ae(t,d(xn,{get bgColor(){return e.bgColor}})),t}})}});var Tn=K("<div role=alert><div>");const Pn=C`
  padding: 1.5rem;
  text-align: center;
  margin: 3rem auto;
  border: 1px solid #dee2e6;

  @media only screen and (min-width: 768px) {
    width: 75%;
    padding: 3rem;
  }
`,_n=e=>(()=>{var t=Tn(),n=t.firstChild;return _e(t,Pn),ae(n,()=>e.children),t})(),Ln="key",In="headers",Cn="category-header",Nn="category-in-subcategory",$n="title-uppercase",vn="title-alignment",kn="title-font-size",Mn="title-font-family",On="item-name",zn="item-name-font-size",Dn="style",Bn="size",jn="items-alignment",Rn="items-spacing",Fn="bg-color",Un="fg-color",gt="base-path";var V=(e=>(e.Basic="clean",e.BorderedBasic="bordered",e.ShadowedBasic="shadowed",e))(V||{}),T=(e=>(e.XSmall="xs",e.Small="sm",e.Medium="md",e.Large="lg",e.XLarge="xl",e))(T||{}),ee=(e=>(e.Serif="serif",e.SansSerif="sans-serif",e.Monospace="monospace",e))(ee||{});const Gn=!0,Yn=!0,Vn=!1,Hn=!1,Wn="left",Kn="sans-serif",Xn=13,Zn=!1,qn=11,Qn="shadowed",Jn="md",er="left",tr="#323437",nr="#ffffff",Te=()=>{const t=new URLSearchParams(location.search).get(gt);return`${location.origin}${t||""}`};var rr=K("<img>"),ir=K('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M21.9 21.9l-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2H5zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83z">');const sr=e=>{const[t,n]=y(!1);return d(j,{get when(){return!t()},get fallback(){return ir()},get children(){var i=rr();return i.addEventListener("error",()=>n(!0)),z(r=>{var s=`${e.name} logo`,o=e.class,l=`../${e.logo}`;return s!==r.e&&H(i,"alt",r.e=s),o!==r.t&&_e(i,r.t=o),l!==r.a&&H(i,"src",r.a=l),r},{e:void 0,t:void 0,a:void 0}),i}})},lr={[T.XSmall]:"0.25rem",[T.Small]:"0.35rem",[T.Medium]:"0.5rem",[T.Large]:"0.75rem",[T.XLarge]:"1rem"},or=N("div")`
  border: ${e=>e.borderless?"":"1px solid rgba(0, 0, 0, 0.175)"};
  box-shadow: ${e=>e.withShadow?"0 .125rem .25rem rgba(0,0,0,.075)":"none"};
  padding: ${e=>lr[e.size]};
  background-color: ${e=>e.borderless?"transparent":"#fff"};
`,ar=C`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,cr=C`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`,fr=C`
  margin: auto;
  font-size: calc(var(--card-size-height) / 1.5);
  width: 100%;
  max-height: 100%;
  height: auto;
`,ur=N("div")`
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
`,pe=e=>d(or,{get class(){return`${ar} ${e.class}`},get borderless(){return e.borderless},get withShadow(){return typeof e.withShadow<"u"&&e.withShadow},get size(){return e.size},get children(){return d(ut,{get href(){return`${Te()}?item=${e.item.id}`},get paddingBottom(){return e.withName?e.itemNameSize+8:0},class:cr,get children(){return[d(sr,{get name(){return e.item.name},class:fr,get logo(){return e.item.logo}}),d(j,{get when(){return e.withName},get children(){return d(ur,{get borderless(){return e.borderless},get itemNameSize(){return e.itemNameSize},get children(){return e.item.name}})}})]}})}}),we={[T.XSmall]:{width:"55px",height:"50px",gap:"5px"},[T.Small]:{width:"77px",height:"70px",gap:"8px"},[T.Medium]:{width:"110px",height:"100px",gap:"10px"},[T.Large]:{width:"143px",height:"130px",gap:"12px"},[T.XLarge]:{width:"220px",height:"200px",gap:"15px"}},be=N("div")`
  --card-size-width: ${e=>we[e.size].width};
  --card-size-height: ${e=>we[e.size].height};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${e=>typeof e.spacing<"u"?`${e.spacing}px`:we[e.size].gap};
  justify-content: ${e=>e.alignment};
`,Ae=C`
  width: var(--card-size-width);
  height: var(--card-size-height);
`,qe=e=>d(jt,{get children(){return[d(ye,{get when(){return e.style===V.Basic},get children(){return d(be,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(J,{get each(){return e.items},children:t=>d(pe,{item:t,get size(){return e.size},class:Ae,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!0})})}})}}),d(ye,{get when(){return e.style===V.BorderedBasic},get children(){return d(be,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(J,{get each(){return e.items},children:t=>d(pe,{item:t,get size(){return e.size},class:Ae,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1})})}})}}),d(ye,{get when(){return e.style===V.ShadowedBasic},get children(){return d(be,{get size(){return e.size},get alignment(){return e.alignment},get spacing(){return e.spacing},get children(){return d(J,{get each(){return e.items},children:t=>d(pe,{item:t,get size(){return e.size},class:Ae,get withName(){return e.displayName},get itemNameSize(){return e.itemNameSize},borderless:!1,withShadow:!0})})}})}})]}});var gr=K("<div><h4>Invalid embed url</h4><p>Please visit: ");const dr={[ee.Serif]:'Times, "Times New Roman", Georgia, Palatino, serif',[ee.SansSerif]:'"Clarity City", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, Roboto, Ubuntu, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',[ee.Monospace]:'Courier, Consolas, "Andale Mono", monospace'},mr=N("div")`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    font-family: ${e=>dr[e.fontFamily]};
    box-sizing: border-box;
  }
`,hr=N("div")`
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
`,yr=N("div")`
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
`,pr=()=>{const[e,t]=y(""),[n,i]=y(),[r,s]=y(),[o,l]=y(Gn),[c,f]=y(Qn),[a,u]=y(!1),[g,w]=y(tr),[P,$]=y(nr),[B,F]=y(Jn),[x,E]=y(Yn),[_,M]=y(Vn),[X,dt]=y(Hn),[Le,mt]=y(Wn),[ht,yt]=y(Kn),[Ie,pt]=y(Xn),[Ce,wt]=y(Zn),[Ne,bt]=y(qn),[$e,At]=y(er),[ce,St]=y();return Lt(()=>{const m=new URLSearchParams(window.location.search),L=m.get(gt),O=m.get(Ln),Z=m.get(In),fe=m.get(Dn),ue=m.get(Bn),ge=m.get(Fn),ve=m.get(Un),ke=m.get(Cn),Me=m.get(Nn),Oe=m.get(vn),ze=m.get(Mn),De=m.get(kn),Be=m.get(On),je=m.get(zn),Re=m.get(jn),Fe=m.get(Rn),Ue=m.get($n);Pt(()=>{if(O!==null){let Ge=!0,Ye=!0;if(l(Z==="true"),ke!==null&&E(ke==="true"),Me!==null&&M(Me==="true"),Ue!==null&&dt(Ue==="true"),Be!==null&&(wt(Be==="true"),je!==null)){const I=parseInt(je);I>=10&&I<=40&&bt(I)}if(fe!==null&&(Object.values(V).includes(fe)?f(fe):Ye=!1),ue!==null&&(Object.values(T).includes(ue)?F(ue):Ge=!1),ge!==null&&(w(ge),u(ge==="transparent")),ve!==null&&$(ve),ze!==null&&yt(ze),Oe!==null&&mt(Oe),De!==null){const I=parseInt(De);I>=10&&I<=60&&pt(I)}if(Re!==null&&At(Re),Fe!==null){const I=parseInt(Fe);I>=0&&St(I)}Ge&&Ye?(t(L||""),i(O)):s(null)}else s(null)})}),et(_t(n,()=>{async function m(){try{fetch(`${e()}/data/embed_${n()}.json`).then(L=>{if(L.ok)return L.json();throw new Error("Something went wrong")}).then(L=>{s(L)}).catch(()=>{s(null)})}catch{s(null)}}typeof n()<"u"&&m()})),d(mr,{get fontFamily(){return ht()},get style(){return{all:"initial",isolation:"isolate",overflow:"hidden","--bg-color":g(),"--fg-color":P()}},get children(){return d(j,{get when(){return r()!==null},get fallback(){return d(_n,{get children(){var m=gr(),L=m.firstChild,O=L.nextSibling;return O.firstChild,ae(O,d(ut,{get href(){return`${Te()}/embed-setup`},get children(){return[A(()=>Te()),"/embed-setup"]}}),null),m}})},get children(){return d(j,{get when(){return typeof r()<"u"},get fallback(){return d(En,{get bgColor(){return g()}})},get children(){return d(j,{get when(){return o()},get fallback(){return d(qe,{get items(){return r().items},get style(){return c()},get size(){return B()},get alignment(){return $e()},get spacing(){return ce()},get displayName(){return Ce()},get itemNameSize(){return Ne()}})},get children(){return[d(j,{get when(){return x()},get children(){return d(hr,{get isBgTransparent(){return a()},get size(){return Ie()},get alignment(){return Le()},get uppercase(){return X()},get children(){return r().category.name}})}}),d(J,{get each(){return r().category.subcategories},children:(m,L)=>{const O=r().items.filter(Z=>Z.category===r().category.name&&Z.subcategory===m.name);return[d(yr,{get isBgTransparent(){return a()},get size(){return Ie()},get alignment(){return Le()},get uppercase(){return X()},get firstTitle(){return L()===0},get spacing(){return ce()},get children(){return[d(j,{get when(){return _()},get children(){return[A(()=>r().category.name)," - "]}}),A(()=>m.name)," (",A(()=>O.length),")"]}}),d(qe,{items:O,get style(){return c()},get size(){return B()},get alignment(){return $e()},get spacing(){return ce()},get displayName(){return Ce()},get itemNameSize(){return Ne()}})]}})]}})}})}})}})},wr=document.getElementById("landscape-embeddable-view");Zt(()=>d(pr,{}),wr);
