import{S as H,i as B,s as R,e as _,f as M,g as E,l as re,n as w,h as x,j as le,k as de,o as ce,c as X,p as k,q as be,m as K,r as U,u as fe,t as Q,a as Y,d as Z}from"./vendor.2acc62b5.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */const _e=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(l,u)=>{n.platforms.set(l,u)},s=l=>{n.platforms.has(l)&&(n.currentPlatform=n.platforms.get(l))};return n.addPlatform=r,n.setPlatform=s,n},he=t=>t.CapacitorPlatforms=_e(t),ue=he(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});ue.addPlatform;ue.setPlatform;var W;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(W||(W={}));class se extends Error{constructor(e,n){super(e);this.message=e,this.code=n}}const $e=t=>{var e,n;return(t==null?void 0:t.androidBridge)?"android":((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0?void 0:n.bridge)?"ios":"web"},ye=t=>{var e,n,r,s,l;const u=t.CapacitorCustomPlatform||null,o=t.Capacitor||{},O=o.Plugins=o.Plugins||{},a=t.CapacitorPlatforms,h=()=>u!==null?u.name:$e(t),D=((e=a==null?void 0:a.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||h,q=()=>D()!=="web",T=((n=a==null?void 0:a.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||q,F=d=>{const c=y.get(d);return!!((c==null?void 0:c.platforms.has(D()))||S(d))},A=((r=a==null?void 0:a.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||F,I=d=>{var c;return(c=o.PluginHeaders)===null||c===void 0?void 0:c.find(i=>i.name===d)},S=((s=a==null?void 0:a.currentPlatform)===null||s===void 0?void 0:s.getPluginHeader)||I,j=d=>t.console.error(d),$=(d,c,i)=>Promise.reject(`${i} does not have an implementation of "${c}".`),y=new Map,ee=(d,c={})=>{const i=y.get(d);if(i)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),i.proxy;const f=D(),b=S(d);let m;const ge=async()=>(!m&&f in c?m=typeof c[f]=="function"?m=await c[f]():m=c[f]:u!==null&&!m&&"web"in c&&(m=typeof c.web=="function"?m=await c.web():m=c.web),m),we=(v,p)=>{var P,L;if(b){const C=b==null?void 0:b.methods.find(g=>p===g.name);if(C)return C.rtype==="promise"?g=>o.nativePromise(d,p.toString(),g):(g,z)=>o.nativeCallback(d,p.toString(),g,z);if(v)return(P=v[p])===null||P===void 0?void 0:P.bind(v)}else{if(v)return(L=v[p])===null||L===void 0?void 0:L.bind(v);throw new se(`"${d}" plugin is not implemented on ${f}`,W.Unimplemented)}},te=v=>{let p;const P=(...L)=>{const C=ge().then(g=>{const z=we(g,v);if(z){const V=z(...L);return p=V==null?void 0:V.remove,V}else throw new se(`"${d}.${v}()" is not implemented on ${f}`,W.Unimplemented)});return v==="addListener"&&(C.remove=async()=>p()),C};return P.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:v,writable:!1,configurable:!1}),P},oe=te("addListener"),ae=te("removeListener"),Pe=(v,p)=>{const P=oe({eventName:v},p),L=async()=>{const g=await P;ae({eventName:v,callbackId:g},p)},C=new Promise(g=>P.then(()=>g({remove:L})));return C.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await L()},C},ne=new Proxy({},{get(v,p){switch(p){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return b?Pe:oe;case"removeListener":return ae;default:return te(p)}}});return O[d]=ne,y.set(d,{name:d,proxy:ne,platforms:new Set([...Object.keys(c),...b?[f]:[]])}),ne},J=((l=a==null?void 0:a.currentPlatform)===null||l===void 0?void 0:l.registerPlugin)||ee;return o.convertFileSrc||(o.convertFileSrc=d=>d),o.getPlatform=D,o.handleError=j,o.isNativePlatform=T,o.isPluginAvailable=A,o.pluginMethodNoop=$,o.registerPlugin=J,o.Exception=se,o.DEBUG=!!o.DEBUG,o.isLoggingEnabled=!!o.isLoggingEnabled,o.platform=o.getPlatform(),o.isNative=o.isNativePlatform(),o},Le=t=>t.Capacitor=ye(t),G=Le(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),ve=G.registerPlugin;G.Plugins;class je{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s);const l=async()=>this.removeListener(e,n),u=Promise.resolve({remove:l});return Object.defineProperty(u,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await l()}}),u}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n){const r=this.listeners[e];r&&r.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new G.Exception(e,W.Unimplemented)}unavailable(e="not available"){return new G.Exception(e,W.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const s=r.indexOf(n);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){!e||(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}var N;(function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"})(N||(N={}));var pe;(function(t){t.Rear="REAR",t.Front="FRONT"})(pe||(pe={}));var ie;(function(t){t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl"})(ie||(ie={}));const Ce=ve("Camera",{web:()=>import("./web.e053c09b.js").then(t=>new t.CameraWeb)}),me=ve("Device",{web:()=>import("./web.3f5bb2bd.js").then(t=>new t.DeviceWeb)});function Ee(t){let e,n,r;return{c(){e=_("p"),e.textContent="This is a camera",M(e,"class","svelte-1hvg1wk")},m(s,l){E(s,e,l),n||(r=re(e,"click",t[0]),n=!0)},p:w,i:w,o:w,d(s){s&&x(e),n=!1,r()}}}function xe(t){return G.getPlatform(),[async()=>{const n=await me.getInfo(),r={quality:90,allowEditing:!0,resultType:ie.Uri,source:N.Prompt};n.model==="iPhone"&&(r.source=N.Photos),(await Ce.getPhoto(r)).webPath}]}class Ue extends H{constructor(e){super();B(this,e,xe,Ee,R,{})}}function De(t){let e;return{c(){e=_("div"),e.textContent="my drawer",M(e,"class","svelte-1xd3uty"),le(e,"open",t[0])},m(n,r){E(n,e,r)},p(n,[r]){r&1&&le(e,"open",n[0])},i:w,o:w,d(n){n&&x(e)}}}function Me(t,e,n){let{open:r=!1}=e;return t.$$set=s=>{"open"in s&&n(0,r=s.open)},[r]}class ke extends H{constructor(e){super();B(this,e,Me,De,R,{open:0})}}function Se(t){let e,n,r;return{c(){e=_("div"),e.textContent="X",M(e,"class","svelte-e80igo")},m(s,l){E(s,e,l),n||(r=re(e,"click",t[1]),n=!0)},p:w,i:w,o:w,d(s){s&&x(e),n=!1,r()}}}function We(t,e,n){let{open:r=!1}=e;const s=()=>n(0,r=!r);return t.$$set=l=>{"open"in l&&n(0,r=l.open)},[r,s]}class Oe extends H{constructor(e){super();B(this,e,We,Se,R,{open:0})}}function Te(t){let e,n,r;return{c(){e=_("div"),e.textContent="Device?"},m(s,l){E(s,e,l),n||(r=re(e,"click",t[0]),n=!0)},p:w,i:w,o:w,d(s){s&&x(e),n=!1,r()}}}function Ae(t){async function e(){const n=await me.getInfo();alert(JSON.stringify(n))}return[e]}class He extends H{constructor(e){super();B(this,e,Ae,Te,R,{})}}function Be(t){let e,n,r,s,l,u,o,O,a,h,D,q,T,F,A,I,S,j,$,y;function ee(i){t[1](i)}let J={};t[0]!==void 0&&(J.open=t[0]),e=new ke({props:J}),de.push(()=>ce(e,"open",ee));function d(i){t[2](i)}let c={};return t[0]!==void 0&&(c.open=t[0]),s=new Oe({props:c}),de.push(()=>ce(s,"open",d)),o=new He({}),$=new Ue({}),{c(){X(e.$$.fragment),r=k(),X(s.$$.fragment),u=k(),X(o.$$.fragment),O=k(),a=_("div"),h=_("img"),q=k(),T=_("h1"),T.textContent=`Welcome to ${Re}!`,F=k(),A=_("span"),A.innerHTML='<a href="/toptens">Favorites</a>',I=k(),S=_("spane"),S.innerHTML='<a href="/pacers">Pacers</a>',j=k(),X($.$$.fragment),be(h.src,D=Ge)||M(h,"src",D),M(h,"alt","svelte and capacitor logos"),M(h,"class","svelte-1yyl7u1"),M(a,"class","main svelte-1yyl7u1")},m(i,f){K(e,i,f),E(i,r,f),K(s,i,f),E(i,u,f),K(o,i,f),E(i,O,f),E(i,a,f),U(a,h),U(a,q),U(a,T),U(a,F),U(a,A),U(a,I),U(a,S),U(a,j),K($,a,null),y=!0},p(i,[f]){const b={};!n&&f&1&&(n=!0,b.open=i[0],fe(()=>n=!1)),e.$set(b);const m={};!l&&f&1&&(l=!0,m.open=i[0],fe(()=>l=!1)),s.$set(m)},i(i){y||(Q(e.$$.fragment,i),Q(s.$$.fragment,i),Q(o.$$.fragment,i),Q($.$$.fragment,i),y=!0)},o(i){Y(e.$$.fragment,i),Y(s.$$.fragment,i),Y(o.$$.fragment,i),Y($.$$.fragment,i),y=!1},d(i){Z(e,i),i&&x(r),Z(s,i),i&&x(u),Z(o,i),i&&x(O),i&&x(a),Z($)}}}var Re="Dashbox",Ge="dashbox.png";function qe(t,e,n){let r=!1;function s(u){r=u,n(0,r)}function l(u){r=u,n(0,r)}return[r,s,l]}class Fe extends H{constructor(e){super();B(this,e,qe,Be,R,{})}}var Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fe});export{N as C,je as W,se as a,pe as b,Je as i};
