const Ku=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};Ku();function vr(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const qu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gu=vr(qu);function oa(t){return!!t||t===""}function Cr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=de(i)?Ju(i):Cr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(de(t))return t;if(ie(t))return t}}const Yu=/;(?![^(]*\))/g,Qu=/:(.+)/;function Ju(t){const e={};return t.split(Yu).forEach(n=>{if(n){const i=n.split(Qu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Er(t){let e="";if(de(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const i=Er(t[n]);i&&(e+=i+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _s=t=>de(t)?t:t==null?"":D(t)||ie(t)&&(t.toString===ua||!M(t.toString))?JSON.stringify(t,la,2):String(t),la=(t,e)=>e&&e.__v_isRef?la(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:aa(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!D(e)&&!ha(e)?String(e):e,J={},tn=[],He=()=>{},Xu=()=>!1,Zu=/^on[^a-z]/,qi=t=>Zu.test(t),br=t=>t.startsWith("onUpdate:"),ve=Object.assign,Ir=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eh=Object.prototype.hasOwnProperty,H=(t,e)=>eh.call(t,e),D=Array.isArray,nn=t=>Gi(t)==="[object Map]",aa=t=>Gi(t)==="[object Set]",M=t=>typeof t=="function",de=t=>typeof t=="string",wr=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",ca=t=>ie(t)&&M(t.then)&&M(t.catch),ua=Object.prototype.toString,Gi=t=>ua.call(t),th=t=>Gi(t).slice(8,-1),ha=t=>Gi(t)==="[object Object]",Tr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nh=/-(\w)/g,hn=Yi(t=>t.replace(nh,(e,n)=>n?n.toUpperCase():"")),ih=/\B([A-Z])/g,vn=Yi(t=>t.replace(ih,"-$1").toLowerCase()),da=Yi(t=>t.charAt(0).toUpperCase()+t.slice(1)),gs=Yi(t=>t?`on${da(t)}`:""),Wn=(t,e)=>!Object.is(t,e),ms=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ti=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},sh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oo;const rh=()=>Oo||(Oo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ke;class oh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ke&&(this.parent=Ke,this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function lh(t,e=Ke){e&&e.active&&e.effects.push(t)}const Sr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},fa=t=>(t.w&yt)>0,pa=t=>(t.n&yt)>0,ah=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yt},ch=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];fa(s)&&!pa(s)?s.delete(t):e[n++]=s,s.w&=~yt,s.n&=~yt}e.length=n}},Us=new WeakMap;let kn=0,yt=1;const Bs=30;let Me;const Ot=Symbol(""),Hs=Symbol("");class Nr{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lh(this,i)}run(){if(!this.active)return this.fn();let e=Me,n=ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Me,Me=this,ft=!0,yt=1<<++kn,kn<=Bs?ah(this):Po(this),this.fn()}finally{kn<=Bs&&ch(this),yt=1<<--kn,Me=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(Po(this),this.onStop&&this.onStop(),this.active=!1)}}function Po(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ft=!0;const _a=[];function Cn(){_a.push(ft),ft=!1}function En(){const t=_a.pop();ft=t===void 0?!0:t}function Ae(t,e,n){if(ft&&Me){let i=Us.get(t);i||Us.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Sr()),ga(s)}}function ga(t,e){let n=!1;kn<=Bs?pa(t)||(t.n|=yt,n=!fa(t)):n=!t.has(Me),n&&(t.add(Me),Me.deps.push(t))}function rt(t,e,n,i,s,r){const o=Us.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t))o.forEach((a,c)=>{(c==="length"||c>=i)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?Tr(n)&&l.push(o.get("length")):(l.push(o.get(Ot)),nn(t)&&l.push(o.get(Hs)));break;case"delete":D(t)||(l.push(o.get(Ot)),nn(t)&&l.push(o.get(Hs)));break;case"set":nn(t)&&l.push(o.get(Ot));break}if(l.length===1)l[0]&&Ws(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ws(Sr(a))}}function Ws(t,e){const n=D(t)?t:[...t];for(const i of n)i.computed&&Do(i);for(const i of n)i.computed||Do(i)}function Do(t,e){(t!==Me||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const uh=vr("__proto__,__v_isRef,__isVue"),ma=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wr)),hh=Rr(),dh=Rr(!1,!0),fh=Rr(!0),Mo=ph();function ph(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=V(this);for(let r=0,o=this.length;r<o;r++)Ae(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cn();const i=V(this)[e].apply(this,n);return En(),i}}),t}function Rr(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?xh:ba:e?Ea:Ca).get(i))return i;const o=D(i);if(!t&&o&&H(Mo,s))return Reflect.get(Mo,s,r);const l=Reflect.get(i,s,r);return(wr(s)?ma.has(s):uh(s))||(t||Ae(i,"get",s),e)?l:ye(l)?o&&Tr(s)?l:l.value:ie(l)?t?Ia(l):kr(l):l}}const _h=ya(),gh=ya(!0);function ya(t=!1){return function(n,i,s,r){let o=n[i];if(dn(o)&&ye(o)&&!ye(s))return!1;if(!t&&(!Si(s)&&!dn(s)&&(o=V(o),s=V(s)),!D(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const l=D(n)&&Tr(i)?Number(i)<n.length:H(n,i),a=Reflect.set(n,i,s,r);return n===V(r)&&(l?Wn(s,o)&&rt(n,"set",i,s):rt(n,"add",i,s)),a}}function mh(t,e){const n=H(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&rt(t,"delete",e,void 0),i}function yh(t,e){const n=Reflect.has(t,e);return(!wr(e)||!ma.has(e))&&Ae(t,"has",e),n}function vh(t){return Ae(t,"iterate",D(t)?"length":Ot),Reflect.ownKeys(t)}const va={get:hh,set:_h,deleteProperty:mh,has:yh,ownKeys:vh},Ch={get:fh,set(t,e){return!0},deleteProperty(t,e){return!0}},Eh=ve({},va,{get:dh,set:gh}),Ar=t=>t,Qi=t=>Reflect.getPrototypeOf(t);function fi(t,e,n=!1,i=!1){t=t.__v_raw;const s=V(t),r=V(e);n||(e!==r&&Ae(s,"get",e),Ae(s,"get",r));const{has:o}=Qi(s),l=i?Ar:n?Pr:$n;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function pi(t,e=!1){const n=this.__v_raw,i=V(n),s=V(t);return e||(t!==s&&Ae(i,"has",t),Ae(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function _i(t,e=!1){return t=t.__v_raw,!e&&Ae(V(t),"iterate",Ot),Reflect.get(t,"size",t)}function Lo(t){t=V(t);const e=V(this);return Qi(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Fo(t,e){e=V(e);const n=V(this),{has:i,get:s}=Qi(n);let r=i.call(n,t);r||(t=V(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Wn(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function Uo(t){const e=V(this),{has:n,get:i}=Qi(e);let s=n.call(e,t);s||(t=V(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&rt(e,"delete",t,void 0),r}function Bo(){const t=V(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function gi(t,e){return function(i,s){const r=this,o=r.__v_raw,l=V(o),a=e?Ar:t?Pr:$n;return!t&&Ae(l,"iterate",Ot),o.forEach((c,h)=>i.call(s,a(c),a(h),r))}}function mi(t,e,n){return function(...i){const s=this.__v_raw,r=V(s),o=nn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),h=n?Ar:e?Pr:$n;return!e&&Ae(r,"iterate",a?Hs:Ot),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function bh(){const t={get(r){return fi(this,r)},get size(){return _i(this)},has:pi,add:Lo,set:Fo,delete:Uo,clear:Bo,forEach:gi(!1,!1)},e={get(r){return fi(this,r,!1,!0)},get size(){return _i(this)},has:pi,add:Lo,set:Fo,delete:Uo,clear:Bo,forEach:gi(!1,!0)},n={get(r){return fi(this,r,!0)},get size(){return _i(this,!0)},has(r){return pi.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:gi(!0,!1)},i={get(r){return fi(this,r,!0,!0)},get size(){return _i(this,!0)},has(r){return pi.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=mi(r,!1,!1),n[r]=mi(r,!0,!1),e[r]=mi(r,!1,!0),i[r]=mi(r,!0,!0)}),[t,n,e,i]}const[Ih,wh,Th,Sh]=bh();function xr(t,e){const n=e?t?Sh:Th:t?wh:Ih;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(H(n,s)&&s in i?n:i,s,r)}const Nh={get:xr(!1,!1)},Rh={get:xr(!1,!0)},Ah={get:xr(!0,!1)},Ca=new WeakMap,Ea=new WeakMap,ba=new WeakMap,xh=new WeakMap;function kh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oh(t){return t.__v_skip||!Object.isExtensible(t)?0:kh(th(t))}function kr(t){return dn(t)?t:Or(t,!1,va,Nh,Ca)}function Ph(t){return Or(t,!1,Eh,Rh,Ea)}function Ia(t){return Or(t,!0,Ch,Ah,ba)}function Or(t,e,n,i,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Oh(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function sn(t){return dn(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function Si(t){return!!(t&&t.__v_isShallow)}function wa(t){return sn(t)||dn(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Ta(t){return Ti(t,"__v_skip",!0),t}const $n=t=>ie(t)?kr(t):t,Pr=t=>ie(t)?Ia(t):t;function Sa(t){ft&&Me&&(t=V(t),ga(t.dep||(t.dep=Sr())))}function Na(t,e){t=V(t),t.dep&&Ws(t.dep)}function ye(t){return!!(t&&t.__v_isRef===!0)}function Dh(t){return Mh(t,!1)}function Mh(t,e){return ye(t)?t:new Lh(t,e)}class Lh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:$n(e)}get value(){return Sa(this),this._value}set value(e){const n=this.__v_isShallow||Si(e)||dn(e);e=n?e:V(e),Wn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$n(e),Na(this))}}function Fh(t){return ye(t)?t.value:t}const Uh={get:(t,e,n)=>Fh(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Ra(t){return sn(t)?t:new Proxy(t,Uh)}var Aa;class Bh{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Aa]=!1,this._dirty=!0,this.effect=new Nr(e,()=>{this._dirty||(this._dirty=!0,Na(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=V(this);return Sa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Aa="__v_isReadonly";function Hh(t,e,n=!1){let i,s;const r=M(t);return r?(i=t,s=He):(i=t.get,s=t.set),new Bh(i,s,r||!s,n)}function pt(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Ji(r,e,n)}return s}function Oe(t,e,n,i){if(M(t)){const r=pt(t,e,n,i);return r&&ca(r)&&r.catch(o=>{Ji(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Oe(t[r],e,n,i));return s}function Ji(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){pt(a,null,10,[t,o,l]);return}}Wh(t,n,s,i)}function Wh(t,e,n,i=!0){console.error(t)}let Vn=!1,$s=!1;const me=[];let Ge=0;const rn=[];let et=null,Nt=0;const xa=Promise.resolve();let Dr=null;function $h(t){const e=Dr||xa;return t?e.then(this?t.bind(this):t):e}function Vh(t){let e=Ge+1,n=me.length;for(;e<n;){const i=e+n>>>1;zn(me[i])<t?e=i+1:n=i}return e}function Mr(t){(!me.length||!me.includes(t,Vn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?me.push(t):me.splice(Vh(t.id),0,t),ka())}function ka(){!Vn&&!$s&&($s=!0,Dr=xa.then(Pa))}function zh(t){const e=me.indexOf(t);e>Ge&&me.splice(e,1)}function jh(t){D(t)?rn.push(...t):(!et||!et.includes(t,t.allowRecurse?Nt+1:Nt))&&rn.push(t),ka()}function Ho(t,e=Vn?Ge+1:0){for(;e<me.length;e++){const n=me[e];n&&n.pre&&(me.splice(e,1),e--,n())}}function Oa(t){if(rn.length){const e=[...new Set(rn)];if(rn.length=0,et){et.push(...e);return}for(et=e,et.sort((n,i)=>zn(n)-zn(i)),Nt=0;Nt<et.length;Nt++)et[Nt]();et=null,Nt=0}}const zn=t=>t.id==null?1/0:t.id,Kh=(t,e)=>{const n=zn(t)-zn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pa(t){$s=!1,Vn=!0,me.sort(Kh);const e=He;try{for(Ge=0;Ge<me.length;Ge++){const n=me[Ge];n&&n.active!==!1&&pt(n,null,14)}}finally{Ge=0,me.length=0,Oa(),Vn=!1,Dr=null,(me.length||rn.length)&&Pa()}}function qh(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||J;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:f}=i[h]||J;f&&(s=n.map(g=>g.trim())),u&&(s=n.map(sh))}let l,a=i[l=gs(e)]||i[l=gs(hn(e))];!a&&r&&(a=i[l=gs(vn(e))]),a&&Oe(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Oe(c,t,6,s)}}function Da(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!M(t)){const a=c=>{const h=Da(c,e,!0);h&&(l=!0,ve(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ie(t)&&i.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):ve(o,r),ie(t)&&i.set(t,o),o)}function Xi(t,e){return!t||!qi(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,vn(e))||H(t,e))}let Ye=null,Zi=null;function Ni(t){const e=Ye;return Ye=t,Zi=t&&t.type.__scopeId||null,e}function Gh(t){Zi=t}function Yh(){Zi=null}function Qh(t,e=Ye,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Qo(-1);const r=Ni(e),o=t(...s);return Ni(r),i._d&&Qo(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function ys(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:f,setupState:g,ctx:b,inheritAttrs:S}=t;let R,P;const le=Ni(t);try{if(n.shapeFlag&4){const Z=s||i;R=qe(h.call(Z,Z,u,r,g,f,b)),P=a}else{const Z=e;R=qe(Z.length>1?Z(r,{attrs:a,slots:l,emit:c}):Z(r,null)),P=e.props?a:Jh(a)}}catch(Z){On.length=0,Ji(Z,t,1),R=it(nt)}let j=R;if(P&&S!==!1){const Z=Object.keys(P),{shapeFlag:fe}=j;Z.length&&fe&7&&(o&&Z.some(br)&&(P=Xh(P,o)),j=vt(j,P))}return n.dirs&&(j=vt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),R=j,Ni(le),R}const Jh=t=>{let e;for(const n in t)(n==="class"||n==="style"||qi(n))&&((e||(e={}))[n]=t[n]);return e},Xh=(t,e)=>{const n={};for(const i in t)(!br(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Zh(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Wo(i,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==i[f]&&!Xi(c,f))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Wo(i,o,c):!0:!!o;return!1}function Wo(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Xi(n,r))return!0}return!1}function ed({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const td=t=>t.__isSuspense;function nd(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):jh(t)}function id(t,e){if(pe){let n=pe.provides;const i=pe.parent&&pe.parent.provides;i===n&&(n=pe.provides=Object.create(i)),n[t]=e}}function vs(t,e,n=!1){const i=pe||Ye;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&M(e)?e.call(i.proxy):e}}const $o={};function Cs(t,e,n){return Ma(t,e,n)}function Ma(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=J){const l=pe;let a,c=!1,h=!1;if(ye(t)?(a=()=>t.value,c=Si(t)):sn(t)?(a=()=>t,i=!0):D(t)?(h=!0,c=t.some(P=>sn(P)||Si(P)),a=()=>t.map(P=>{if(ye(P))return P.value;if(sn(P))return Xt(P);if(M(P))return pt(P,l,2)})):M(t)?e?a=()=>pt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Oe(t,l,3,[f])}:a=He,e&&i){const P=a;a=()=>Xt(P())}let u,f=P=>{u=R.onStop=()=>{pt(P,l,4)}};if(Kn)return f=He,e?n&&Oe(e,l,3,[a(),h?[]:void 0,f]):a(),He;let g=h?[]:$o;const b=()=>{if(!!R.active)if(e){const P=R.run();(i||c||(h?P.some((le,j)=>Wn(le,g[j])):Wn(P,g)))&&(u&&u(),Oe(e,l,3,[P,g===$o?void 0:g,f]),g=P)}else R.run()};b.allowRecurse=!!e;let S;s==="sync"?S=b:s==="post"?S=()=>Ie(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),S=()=>Mr(b));const R=new Nr(a,S);return e?n?b():g=R.run():s==="post"?Ie(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&Ir(l.scope.effects,R)}}function sd(t,e,n){const i=this.proxy,s=de(t)?t.includes(".")?La(i,t):()=>i[t]:t.bind(i,i);let r;M(e)?r=e:(r=e.handler,n=e);const o=pe;fn(this);const l=Ma(s,r.bind(i),n);return o?fn(o):Dt(),l}function La(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Xt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))Xt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Xt(t[n],e);else if(aa(t)||nn(t))t.forEach(n=>{Xt(n,e)});else if(ha(t))for(const n in t)Xt(t[n],e);return t}function rd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{t.isMounted=!0}),Wa(()=>{t.isUnmounting=!0}),t}const xe=[Function,Array],od={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xe,onEnter:xe,onAfterEnter:xe,onEnterCancelled:xe,onBeforeLeave:xe,onLeave:xe,onAfterLeave:xe,onLeaveCancelled:xe,onBeforeAppear:xe,onAppear:xe,onAfterAppear:xe,onAppearCancelled:xe},setup(t,{slots:e}){const n=qd(),i=rd();let s;return()=>{const r=e.default&&Ua(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==nt){o=S;break}}const l=V(t),{mode:a}=l;if(i.isLeaving)return Es(o);const c=Vo(o);if(!c)return Es(o);const h=Vs(c,l,i,n);zs(c,h);const u=n.subTree,f=u&&Vo(u);let g=!1;const{getTransitionKey:b}=c.type;if(b){const S=b();s===void 0?s=S:S!==s&&(s=S,g=!0)}if(f&&f.type!==nt&&(!Rt(c,f)||g)){const S=Vs(f,l,i,n);if(zs(f,S),a==="out-in")return i.isLeaving=!0,S.afterLeave=()=>{i.isLeaving=!1,n.update()},Es(o);a==="in-out"&&c.type!==nt&&(S.delayLeave=(R,P,le)=>{const j=Fa(i,f);j[String(f.key)]=f,R._leaveCb=()=>{P(),R._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=le})}return o}}},ld=od;function Fa(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Vs(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:S,onAppear:R,onAfterAppear:P,onAppearCancelled:le}=e,j=String(t.key),Z=Fa(n,t),fe=(B,Q)=>{B&&Oe(B,i,9,Q)},$e=(B,Q)=>{const se=Q[1];fe(B,Q),D(B)?B.every(Ee=>Ee.length<=1)&&se():B.length<=1&&se()},Ve={mode:r,persisted:o,beforeEnter(B){let Q=l;if(!n.isMounted)if(s)Q=S||l;else return;B._leaveCb&&B._leaveCb(!0);const se=Z[j];se&&Rt(t,se)&&se.el._leaveCb&&se.el._leaveCb(),fe(Q,[B])},enter(B){let Q=a,se=c,Ee=h;if(!n.isMounted)if(s)Q=R||a,se=P||c,Ee=le||h;else return;let Pe=!1;const Je=B._enterCb=hi=>{Pe||(Pe=!0,hi?fe(Ee,[B]):fe(se,[B]),Ve.delayedLeave&&Ve.delayedLeave(),B._enterCb=void 0)};Q?$e(Q,[B,Je]):Je()},leave(B,Q){const se=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Q();fe(u,[B]);let Ee=!1;const Pe=B._leaveCb=Je=>{Ee||(Ee=!0,Q(),Je?fe(b,[B]):fe(g,[B]),B._leaveCb=void 0,Z[se]===t&&delete Z[se])};Z[se]=t,f?$e(f,[B,Pe]):Pe()},clone(B){return Vs(B,e,n,i)}};return Ve}function Es(t){if(es(t))return t=vt(t),t.children=null,t}function Vo(t){return es(t)?t.children?t.children[0]:void 0:t}function zs(t,e){t.shapeFlag&6&&t.component?zs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ua(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ke?(o.patchFlag&128&&s++,i=i.concat(Ua(o.children,e,l))):(e||o.type!==nt)&&i.push(l!=null?vt(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Lr(t){return M(t)?{setup:t,name:t.name}:t}const bi=t=>!!t.type.__asyncLoader,es=t=>t.type.__isKeepAlive;function ad(t,e){Ba(t,"a",e)}function cd(t,e){Ba(t,"da",e)}function Ba(t,e,n=pe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ts(e,i,n),n){let s=n.parent;for(;s&&s.parent;)es(s.parent.vnode)&&ud(i,e,n,s),s=s.parent}}function ud(t,e,n,i){const s=ts(e,t,i,!0);$a(()=>{Ir(i[e],s)},n)}function ts(t,e,n=pe,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cn(),fn(n);const l=Oe(e,n,t,o);return Dt(),En(),l});return i?s.unshift(r):s.push(r),r}}const ot=t=>(e,n=pe)=>(!Kn||t==="sp")&&ts(t,e,n),hd=ot("bm"),Ha=ot("m"),dd=ot("bu"),fd=ot("u"),Wa=ot("bum"),$a=ot("um"),pd=ot("sp"),_d=ot("rtg"),gd=ot("rtc");function md(t,e=pe){ts("ec",t,e)}function bt(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Cn(),Oe(a,n,8,[t.el,l,t,e]),En())}}const yd=Symbol();function vd(t,e,n,i){let s;const r=n&&n[i];if(D(t)||de(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}const js=t=>t?Xa(t)?Wr(t)||t.proxy:js(t.parent):null,Ri=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>js(t.parent),$root:t=>js(t.root),$emit:t=>t.emit,$options:t=>Fr(t),$forceUpdate:t=>t.f||(t.f=()=>Mr(t.update)),$nextTick:t=>t.n||(t.n=$h.bind(t.proxy)),$watch:t=>sd.bind(t)}),Cd={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==J&&H(i,e))return o[e]=1,i[e];if(s!==J&&H(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==J&&H(n,e))return o[e]=4,n[e];Ks&&(o[e]=0)}}const h=Ri[e];let u,f;if(h)return e==="$attrs"&&Ae(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==J&&H(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,H(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==J&&H(s,e)?(s[e]=n,!0):i!==J&&H(i,e)?(i[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==J&&H(t,o)||e!==J&&H(e,o)||(l=r[0])&&H(l,o)||H(i,o)||H(Ri,o)||H(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ks=!0;function Ed(t){const e=Fr(t),n=t.proxy,i=t.ctx;Ks=!1,e.beforeCreate&&zo(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:g,updated:b,activated:S,deactivated:R,beforeDestroy:P,beforeUnmount:le,destroyed:j,unmounted:Z,render:fe,renderTracked:$e,renderTriggered:Ve,errorCaptured:B,serverPrefetch:Q,expose:se,inheritAttrs:Ee,components:Pe,directives:Je,filters:hi}=e;if(c&&bd(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const ee=o[re];M(ee)&&(i[re]=ee.bind(n))}if(s){const re=s.call(n,n);ie(re)&&(t.data=kr(re))}if(Ks=!0,r)for(const re in r){const ee=r[re],Xe=M(ee)?ee.bind(n,n):M(ee.get)?ee.get.bind(n,n):He,ds=!M(ee)&&M(ee.set)?ee.set.bind(n):He,Tn=Zd({get:Xe,set:ds});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Tn.value,set:Gt=>Tn.value=Gt})}if(l)for(const re in l)Va(l[re],i,n,re);if(a){const re=M(a)?a.call(n):a;Reflect.ownKeys(re).forEach(ee=>{id(ee,re[ee])})}h&&zo(h,t,"c");function be(re,ee){D(ee)?ee.forEach(Xe=>re(Xe.bind(n))):ee&&re(ee.bind(n))}if(be(hd,u),be(Ha,f),be(dd,g),be(fd,b),be(ad,S),be(cd,R),be(md,B),be(gd,$e),be(_d,Ve),be(Wa,le),be($a,Z),be(pd,Q),D(se))if(se.length){const re=t.exposed||(t.exposed={});se.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:Xe=>n[ee]=Xe})})}else t.exposed||(t.exposed={});fe&&t.render===He&&(t.render=fe),Ee!=null&&(t.inheritAttrs=Ee),Pe&&(t.components=Pe),Je&&(t.directives=Je)}function bd(t,e,n=He,i=!1){D(t)&&(t=qs(t));for(const s in t){const r=t[s];let o;ie(r)?"default"in r?o=vs(r.from||s,r.default,!0):o=vs(r.from||s):o=vs(r),ye(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function zo(t,e,n){Oe(D(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Va(t,e,n,i){const s=i.includes(".")?La(n,i):()=>n[i];if(de(t)){const r=e[t];M(r)&&Cs(s,r)}else if(M(t))Cs(s,t.bind(n));else if(ie(t))if(D(t))t.forEach(r=>Va(r,e,n,i));else{const r=M(t.handler)?t.handler.bind(n):e[t.handler];M(r)&&Cs(s,r,t)}}function Fr(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>Ai(a,c,o,!0)),Ai(a,e,o)),ie(e)&&r.set(e,a),a}function Ai(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ai(t,r,n,!0),s&&s.forEach(o=>Ai(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=Id[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Id={data:jo,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:wt,directives:wt,watch:Td,provide:jo,inject:wd};function jo(t,e){return e?t?function(){return ve(M(t)?t.call(this,this):t,M(e)?e.call(this,this):e)}:e:t}function wd(t,e){return wt(qs(t),qs(e))}function qs(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function wt(t,e){return t?ve(ve(Object.create(null),t),e):e}function Td(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const i in e)n[i]=Ce(t[i],e[i]);return n}function Sd(t,e,n,i=!1){const s={},r={};Ti(r,ns,1),t.propsDefaults=Object.create(null),za(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Ph(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Nd(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=V(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Xi(t.emitsOptions,f))continue;const g=e[f];if(a)if(H(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const b=hn(f);s[b]=Gs(a,l,b,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{za(t,e,s,r)&&(c=!0);let h;for(const u in l)(!e||!H(e,u)&&((h=vn(u))===u||!H(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(s[u]=Gs(a,l,u,void 0,t,!0)):delete s[u]);if(r!==l)for(const u in r)(!e||!H(e,u)&&!0)&&(delete r[u],c=!0)}c&&rt(t,"set","$attrs")}function za(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ei(a))continue;const c=e[a];let h;s&&H(s,h=hn(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:Xi(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=V(n),c=l||J;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Gs(s,a,u,c[u],t,!H(c,u))}}return o}function Gs(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=H(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&M(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(fn(s),i=c[n]=a.call(null,e),Dt())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===vn(n))&&(i=!0))}return i}function ja(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!M(t)){const h=u=>{a=!0;const[f,g]=ja(u,e,!0);ve(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return ie(t)&&i.set(t,tn),tn;if(D(r))for(let h=0;h<r.length;h++){const u=hn(r[h]);Ko(u)&&(o[u]=J)}else if(r)for(const h in r){const u=hn(h);if(Ko(u)){const f=r[h],g=o[u]=D(f)||M(f)?{type:f}:f;if(g){const b=Yo(Boolean,g.type),S=Yo(String,g.type);g[0]=b>-1,g[1]=S<0||b<S,(b>-1||H(g,"default"))&&l.push(u)}}}const c=[o,l];return ie(t)&&i.set(t,c),c}function Ko(t){return t[0]!=="$"}function qo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Go(t,e){return qo(t)===qo(e)}function Yo(t,e){return D(e)?e.findIndex(n=>Go(n,t)):M(e)&&Go(e,t)?0:-1}const Ka=t=>t[0]==="_"||t==="$stable",Ur=t=>D(t)?t.map(qe):[qe(t)],Rd=(t,e,n)=>{if(e._n)return e;const i=Qh((...s)=>Ur(e(...s)),n);return i._c=!1,i},qa=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ka(s))continue;const r=t[s];if(M(r))e[s]=Rd(s,r,i);else if(r!=null){const o=Ur(r);e[s]=()=>o}}},Ga=(t,e)=>{const n=Ur(e);t.slots.default=()=>n},Ad=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),Ti(e,"_",n)):qa(e,t.slots={})}else t.slots={},e&&Ga(t,e);Ti(t.slots,ns,1)},xd=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=J;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ve(s,e),!n&&l===1&&delete s._):(r=!e.$stable,qa(e,s)),o=e}else e&&(Ga(t,e),o={default:1});if(r)for(const l in s)!Ka(l)&&!(l in o)&&delete s[l]};function Ya(){return{app:null,config:{isNativeTag:Xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kd=0;function Od(t,e){return function(i,s=null){M(i)||(i=Object.assign({},i)),s!=null&&!ie(s)&&(s=null);const r=Ya(),o=new Set;let l=!1;const a=r.app={_uid:kd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ef,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&M(c.install)?(o.add(c),c.install(a,...h)):M(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const f=it(i,s);return f.appContext=r,h&&e?e(f,c):t(f,c,u),l=!0,a._container=c,c.__vue_app__=a,Wr(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Ys(t,e,n,i,s=!1){if(D(t)){t.forEach((f,g)=>Ys(f,e&&(D(e)?e[g]:e),n,i,s));return}if(bi(i)&&!s)return;const r=i.shapeFlag&4?Wr(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===J?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(de(c)?(h[c]=null,H(u,c)&&(u[c]=null)):ye(c)&&(c.value=null)),M(a))pt(a,l,12,[o,h]);else{const f=de(a),g=ye(a);if(f||g){const b=()=>{if(t.f){const S=f?h[a]:a.value;s?D(S)&&Ir(S,r):D(S)?S.includes(r)||S.push(r):f?(h[a]=[r],H(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else f?(h[a]=o,H(u,a)&&(u[a]=o)):g&&(a.value=o,t.k&&(h[t.k]=o))};o?(b.id=-1,Ie(b,n)):b()}}}const Ie=nd;function Pd(t){return Dd(t)}function Dd(t,e){const n=rh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:g=He,cloneNode:b,insertStaticContent:S}=t,R=(d,p,_,y=null,m=null,I=null,T=!1,E=null,w=!!p.dynamicChildren)=>{if(d===p)return;d&&!Rt(d,p)&&(y=di(d),ct(d,m,I,!0),d=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:v,ref:A,shapeFlag:N}=p;switch(v){case Br:P(d,p,_,y);break;case nt:le(d,p,_,y);break;case bs:d==null&&j(p,_,y,T);break;case ke:Je(d,p,_,y,m,I,T,E,w);break;default:N&1?$e(d,p,_,y,m,I,T,E,w):N&6?hi(d,p,_,y,m,I,T,E,w):(N&64||N&128)&&v.process(d,p,_,y,m,I,T,E,w,Yt)}A!=null&&m&&Ys(A,d&&d.ref,I,p||d,!p)},P=(d,p,_,y)=>{if(d==null)i(p.el=l(p.children),_,y);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},le=(d,p,_,y)=>{d==null?i(p.el=a(p.children||""),_,y):p.el=d.el},j=(d,p,_,y)=>{[d.el,d.anchor]=S(d.children,p,_,y,d.el,d.anchor)},Z=({el:d,anchor:p},_,y)=>{let m;for(;d&&d!==p;)m=f(d),i(d,_,y),d=m;i(p,_,y)},fe=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),s(d),d=_;s(p)},$e=(d,p,_,y,m,I,T,E,w)=>{T=T||p.type==="svg",d==null?Ve(p,_,y,m,I,T,E,w):se(d,p,m,I,T,E,w)},Ve=(d,p,_,y,m,I,T,E)=>{let w,v;const{type:A,props:N,shapeFlag:x,transition:O,patchFlag:W,dirs:K}=d;if(d.el&&b!==void 0&&W===-1)w=d.el=b(d.el);else{if(w=d.el=o(d.type,I,N&&N.is,N),x&8?h(w,d.children):x&16&&Q(d.children,w,null,y,m,I&&A!=="foreignObject",T,E),K&&bt(d,null,y,"created"),N){for(const te in N)te!=="value"&&!Ei(te)&&r(w,te,null,N[te],I,d.children,y,m,Ze);"value"in N&&r(w,"value",null,N.value),(v=N.onVnodeBeforeMount)&&je(v,y,d)}B(w,d,d.scopeId,T,y)}K&&bt(d,null,y,"beforeMount");const q=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;q&&O.beforeEnter(w),i(w,p,_),((v=N&&N.onVnodeMounted)||q||K)&&Ie(()=>{v&&je(v,y,d),q&&O.enter(w),K&&bt(d,null,y,"mounted")},m)},B=(d,p,_,y,m)=>{if(_&&g(d,_),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(m){let I=m.subTree;if(p===I){const T=m.vnode;B(d,T,T.scopeId,T.slotScopeIds,m.parent)}}},Q=(d,p,_,y,m,I,T,E,w=0)=>{for(let v=w;v<d.length;v++){const A=d[v]=E?dt(d[v]):qe(d[v]);R(null,A,p,_,y,m,I,T,E)}},se=(d,p,_,y,m,I,T)=>{const E=p.el=d.el;let{patchFlag:w,dynamicChildren:v,dirs:A}=p;w|=d.patchFlag&16;const N=d.props||J,x=p.props||J;let O;_&&It(_,!1),(O=x.onVnodeBeforeUpdate)&&je(O,_,p,d),A&&bt(p,d,_,"beforeUpdate"),_&&It(_,!0);const W=m&&p.type!=="foreignObject";if(v?Ee(d.dynamicChildren,v,E,_,y,W,I):T||Xe(d,p,E,null,_,y,W,I,!1),w>0){if(w&16)Pe(E,p,N,x,_,y,m);else if(w&2&&N.class!==x.class&&r(E,"class",null,x.class,m),w&4&&r(E,"style",N.style,x.style,m),w&8){const K=p.dynamicProps;for(let q=0;q<K.length;q++){const te=K[q],De=N[te],Qt=x[te];(Qt!==De||te==="value")&&r(E,te,De,Qt,m,d.children,_,y,Ze)}}w&1&&d.children!==p.children&&h(E,p.children)}else!T&&v==null&&Pe(E,p,N,x,_,y,m);((O=x.onVnodeUpdated)||A)&&Ie(()=>{O&&je(O,_,p,d),A&&bt(p,d,_,"updated")},y)},Ee=(d,p,_,y,m,I,T)=>{for(let E=0;E<p.length;E++){const w=d[E],v=p[E],A=w.el&&(w.type===ke||!Rt(w,v)||w.shapeFlag&70)?u(w.el):_;R(w,v,A,null,y,m,I,T,!0)}},Pe=(d,p,_,y,m,I,T)=>{if(_!==y){for(const E in y){if(Ei(E))continue;const w=y[E],v=_[E];w!==v&&E!=="value"&&r(d,E,v,w,T,p.children,m,I,Ze)}if(_!==J)for(const E in _)!Ei(E)&&!(E in y)&&r(d,E,_[E],null,T,p.children,m,I,Ze);"value"in y&&r(d,"value",_.value,y.value)}},Je=(d,p,_,y,m,I,T,E,w)=>{const v=p.el=d?d.el:l(""),A=p.anchor=d?d.anchor:l("");let{patchFlag:N,dynamicChildren:x,slotScopeIds:O}=p;O&&(E=E?E.concat(O):O),d==null?(i(v,_,y),i(A,_,y),Q(p.children,_,A,m,I,T,E,w)):N>0&&N&64&&x&&d.dynamicChildren?(Ee(d.dynamicChildren,x,_,m,I,T,E),(p.key!=null||m&&p===m.subTree)&&Qa(d,p,!0)):Xe(d,p,_,A,m,I,T,E,w)},hi=(d,p,_,y,m,I,T,E,w)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,w):hs(p,_,y,m,I,T,w):be(d,p,w)},hs=(d,p,_,y,m,I,T)=>{const E=d.component=Kd(d,y,m);if(es(d)&&(E.ctx.renderer=Yt),Gd(E),E.asyncDep){if(m&&m.registerDep(E,re),!d.el){const w=E.subTree=it(nt);le(null,w,p,_)}return}re(E,d,p,_,m,I,T)},be=(d,p,_)=>{const y=p.component=d.component;if(Zh(d,p,_))if(y.asyncDep&&!y.asyncResolved){ee(y,p,_);return}else y.next=p,zh(y.update),y.update();else p.el=d.el,y.vnode=p},re=(d,p,_,y,m,I,T)=>{const E=()=>{if(d.isMounted){let{next:A,bu:N,u:x,parent:O,vnode:W}=d,K=A,q;It(d,!1),A?(A.el=W.el,ee(d,A,T)):A=W,N&&ms(N),(q=A.props&&A.props.onVnodeBeforeUpdate)&&je(q,O,A,W),It(d,!0);const te=ys(d),De=d.subTree;d.subTree=te,R(De,te,u(De.el),di(De),d,m,I),A.el=te.el,K===null&&ed(d,te.el),x&&Ie(x,m),(q=A.props&&A.props.onVnodeUpdated)&&Ie(()=>je(q,O,A,W),m)}else{let A;const{el:N,props:x}=p,{bm:O,m:W,parent:K}=d,q=bi(p);if(It(d,!1),O&&ms(O),!q&&(A=x&&x.onVnodeBeforeMount)&&je(A,K,p),It(d,!0),N&&ps){const te=()=>{d.subTree=ys(d),ps(N,d.subTree,d,m,null)};q?p.type.__asyncLoader().then(()=>!d.isUnmounted&&te()):te()}else{const te=d.subTree=ys(d);R(null,te,_,y,d,m,I),p.el=te.el}if(W&&Ie(W,m),!q&&(A=x&&x.onVnodeMounted)){const te=p;Ie(()=>je(A,K,te),m)}(p.shapeFlag&256||K&&bi(K.vnode)&&K.vnode.shapeFlag&256)&&d.a&&Ie(d.a,m),d.isMounted=!0,p=_=y=null}},w=d.effect=new Nr(E,()=>Mr(v),d.scope),v=d.update=()=>w.run();v.id=d.uid,It(d,!0),v()},ee=(d,p,_)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Nd(d,p.props,y,_),xd(d,p.children,_),Cn(),Ho(),En()},Xe=(d,p,_,y,m,I,T,E,w=!1)=>{const v=d&&d.children,A=d?d.shapeFlag:0,N=p.children,{patchFlag:x,shapeFlag:O}=p;if(x>0){if(x&128){Tn(v,N,_,y,m,I,T,E,w);return}else if(x&256){ds(v,N,_,y,m,I,T,E,w);return}}O&8?(A&16&&Ze(v,m,I),N!==v&&h(_,N)):A&16?O&16?Tn(v,N,_,y,m,I,T,E,w):Ze(v,m,I,!0):(A&8&&h(_,""),O&16&&Q(N,_,y,m,I,T,E,w))},ds=(d,p,_,y,m,I,T,E,w)=>{d=d||tn,p=p||tn;const v=d.length,A=p.length,N=Math.min(v,A);let x;for(x=0;x<N;x++){const O=p[x]=w?dt(p[x]):qe(p[x]);R(d[x],O,_,null,m,I,T,E,w)}v>A?Ze(d,m,I,!0,!1,N):Q(p,_,y,m,I,T,E,w,N)},Tn=(d,p,_,y,m,I,T,E,w)=>{let v=0;const A=p.length;let N=d.length-1,x=A-1;for(;v<=N&&v<=x;){const O=d[v],W=p[v]=w?dt(p[v]):qe(p[v]);if(Rt(O,W))R(O,W,_,null,m,I,T,E,w);else break;v++}for(;v<=N&&v<=x;){const O=d[N],W=p[x]=w?dt(p[x]):qe(p[x]);if(Rt(O,W))R(O,W,_,null,m,I,T,E,w);else break;N--,x--}if(v>N){if(v<=x){const O=x+1,W=O<A?p[O].el:y;for(;v<=x;)R(null,p[v]=w?dt(p[v]):qe(p[v]),_,W,m,I,T,E,w),v++}}else if(v>x)for(;v<=N;)ct(d[v],m,I,!0),v++;else{const O=v,W=v,K=new Map;for(v=W;v<=x;v++){const Ne=p[v]=w?dt(p[v]):qe(p[v]);Ne.key!=null&&K.set(Ne.key,v)}let q,te=0;const De=x-W+1;let Qt=!1,Ao=0;const Sn=new Array(De);for(v=0;v<De;v++)Sn[v]=0;for(v=O;v<=N;v++){const Ne=d[v];if(te>=De){ct(Ne,m,I,!0);continue}let ze;if(Ne.key!=null)ze=K.get(Ne.key);else for(q=W;q<=x;q++)if(Sn[q-W]===0&&Rt(Ne,p[q])){ze=q;break}ze===void 0?ct(Ne,m,I,!0):(Sn[ze-W]=v+1,ze>=Ao?Ao=ze:Qt=!0,R(Ne,p[ze],_,null,m,I,T,E,w),te++)}const xo=Qt?Md(Sn):tn;for(q=xo.length-1,v=De-1;v>=0;v--){const Ne=W+v,ze=p[Ne],ko=Ne+1<A?p[Ne+1].el:y;Sn[v]===0?R(null,ze,_,ko,m,I,T,E,w):Qt&&(q<0||v!==xo[q]?Gt(ze,_,ko,2):q--)}}},Gt=(d,p,_,y,m=null)=>{const{el:I,type:T,transition:E,children:w,shapeFlag:v}=d;if(v&6){Gt(d.component.subTree,p,_,y);return}if(v&128){d.suspense.move(p,_,y);return}if(v&64){T.move(d,p,_,Yt);return}if(T===ke){i(I,p,_);for(let N=0;N<w.length;N++)Gt(w[N],p,_,y);i(d.anchor,p,_);return}if(T===bs){Z(d,p,_);return}if(y!==2&&v&1&&E)if(y===0)E.beforeEnter(I),i(I,p,_),Ie(()=>E.enter(I),m);else{const{leave:N,delayLeave:x,afterLeave:O}=E,W=()=>i(I,p,_),K=()=>{N(I,()=>{W(),O&&O()})};x?x(I,W,K):K()}else i(I,p,_)},ct=(d,p,_,y=!1,m=!1)=>{const{type:I,props:T,ref:E,children:w,dynamicChildren:v,shapeFlag:A,patchFlag:N,dirs:x}=d;if(E!=null&&Ys(E,null,_,d,!0),A&256){p.ctx.deactivate(d);return}const O=A&1&&x,W=!bi(d);let K;if(W&&(K=T&&T.onVnodeBeforeUnmount)&&je(K,p,d),A&6)ju(d.component,_,y);else{if(A&128){d.suspense.unmount(_,y);return}O&&bt(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,_,m,Yt,y):v&&(I!==ke||N>0&&N&64)?Ze(v,p,_,!1,!0):(I===ke&&N&384||!m&&A&16)&&Ze(w,p,_),y&&No(d)}(W&&(K=T&&T.onVnodeUnmounted)||O)&&Ie(()=>{K&&je(K,p,d),O&&bt(d,null,p,"unmounted")},_)},No=d=>{const{type:p,el:_,anchor:y,transition:m}=d;if(p===ke){zu(_,y);return}if(p===bs){fe(d);return}const I=()=>{s(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,w=()=>T(_,I);E?E(d.el,I,w):w()}else I()},zu=(d,p)=>{let _;for(;d!==p;)_=f(d),s(d),d=_;s(p)},ju=(d,p,_)=>{const{bum:y,scope:m,update:I,subTree:T,um:E}=d;y&&ms(y),m.stop(),I&&(I.active=!1,ct(T,d,p,_)),E&&Ie(E,p),Ie(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ze=(d,p,_,y=!1,m=!1,I=0)=>{for(let T=I;T<d.length;T++)ct(d[T],p,_,y,m)},di=d=>d.shapeFlag&6?di(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Ro=(d,p,_)=>{d==null?p._vnode&&ct(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,_),Ho(),Oa(),p._vnode=d},Yt={p:R,um:ct,m:Gt,r:No,mt:hs,mc:Q,pc:Xe,pbc:Ee,n:di,o:t};let fs,ps;return e&&([fs,ps]=e(Yt)),{render:Ro,hydrate:fs,createApp:Od(Ro,fs)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qa(t,e,n=!1){const i=t.children,s=e.children;if(D(i)&&D(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=dt(s[r]),l.el=o.el),n||Qa(o,l))}}function Md(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ld=t=>t.__isTeleport,ke=Symbol(void 0),Br=Symbol(void 0),nt=Symbol(void 0),bs=Symbol(void 0),On=[];let Fe=null;function Pn(t=!1){On.push(Fe=t?null:[])}function Fd(){On.pop(),Fe=On[On.length-1]||null}let jn=1;function Qo(t){jn+=t}function Ud(t){return t.dynamicChildren=jn>0?Fe||tn:null,Fd(),jn>0&&Fe&&Fe.push(t),t}function Dn(t,e,n,i,s,r){return Ud(Pt(t,e,n,i,s,r,!0))}function Bd(t){return t?t.__v_isVNode===!0:!1}function Rt(t,e){return t.type===e.type&&t.key===e.key}const ns="__vInternal",Ja=({key:t})=>t!=null?t:null,Ii=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||ye(t)||M(t)?{i:Ye,r:t,k:e,f:!!n}:t:null;function Pt(t,e=null,n=null,i=0,s=null,r=t===ke?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ja(e),ref:e&&Ii(e),scopeId:Zi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(Hr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),jn>0&&!o&&Fe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Fe.push(a),a}const it=Hd;function Hd(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===yd)&&(t=nt),Bd(t)){const l=vt(t,e,!0);return n&&Hr(l,n),jn>0&&!r&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(t)]=l:Fe.push(l)),l.patchFlag|=-2,l}if(Xd(t)&&(t=t.__vccOpts),e){e=Wd(e);let{class:l,style:a}=e;l&&!de(l)&&(e.class=Er(l)),ie(a)&&(wa(a)&&!D(a)&&(a=ve({},a)),e.style=Cr(a))}const o=de(t)?1:td(t)?128:Ld(t)?64:ie(t)?4:M(t)?2:0;return Pt(t,e,n,i,s,o,r,!0)}function Wd(t){return t?wa(t)||ns in t?ve({},t):t:null}function vt(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Vd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ja(l),ref:e&&e.ref?n&&s?D(s)?s.concat(Ii(e)):[s,Ii(e)]:Ii(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vt(t.ssContent),ssFallback:t.ssFallback&&vt(t.ssFallback),el:t.el,anchor:t.anchor}}function $d(t=" ",e=0){return it(Br,null,t,e)}function qe(t){return t==null||typeof t=="boolean"?it(nt):D(t)?it(ke,null,t.slice()):typeof t=="object"?dt(t):it(Br,null,String(t))}function dt(t){return t.el===null||t.memo?t:vt(t)}function Hr(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Hr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ns in e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else M(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),i&64?(n=16,e=[$d(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vd(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Er([e.class,i.class]));else if(s==="style")e.style=Cr([e.style,i.style]);else if(qi(s)){const r=e[s],o=i[s];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function je(t,e,n,i=null){Oe(t,e,7,[n,i])}const zd=Ya();let jd=0;function Kd(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||zd,r={uid:jd++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(i,s),emitsOptions:Da(i,s),emit:null,emitted:null,propsDefaults:J,inheritAttrs:i.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=qh.bind(null,r),t.ce&&t.ce(r),r}let pe=null;const qd=()=>pe||Ye,fn=t=>{pe=t,t.scope.on()},Dt=()=>{pe&&pe.scope.off(),pe=null};function Xa(t){return t.vnode.shapeFlag&4}let Kn=!1;function Gd(t,e=!1){Kn=e;const{props:n,children:i}=t.vnode,s=Xa(t);Sd(t,n,s,e),Ad(t,i);const r=s?Yd(t,e):void 0;return Kn=!1,r}function Yd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ta(new Proxy(t.ctx,Cd));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Jd(t):null;fn(t),Cn();const r=pt(i,t,0,[t.props,s]);if(En(),Dt(),ca(r)){if(r.then(Dt,Dt),e)return r.then(o=>{Jo(t,o,e)}).catch(o=>{Ji(o,t,0)});t.asyncDep=r}else Jo(t,r,e)}else Za(t,e)}function Jo(t,e,n){M(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Ra(e)),Za(t,n)}let Xo;function Za(t,e,n){const i=t.type;if(!t.render){if(!e&&Xo&&!i.render){const s=i.template||Fr(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=ve(ve({isCustomElement:r,delimiters:l},o),a);i.render=Xo(s,c)}}t.render=i.render||He}fn(t),Cn(),Ed(t),En(),Dt()}function Qd(t){return new Proxy(t.attrs,{get(e,n){return Ae(t,"get","$attrs"),e[n]}})}function Jd(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Qd(t))},slots:t.slots,emit:t.emit,expose:e}}function Wr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ra(Ta(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ri)return Ri[n](t)}}))}function Xd(t){return M(t)&&"__vccOpts"in t}const Zd=(t,e)=>Hh(t,e,Kn),ef="3.2.39",tf="http://www.w3.org/2000/svg",At=typeof document!="undefined"?document:null,Zo=At&&At.createElement("template"),nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?At.createElementNS(tf,t):At.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Zo.innerHTML=i?`<svg>${t}</svg>`:t;const l=Zo.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function sf(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rf(t,e,n){const i=t.style,s=de(n);if(n&&!s){for(const r in n)Qs(i,r,n[r]);if(e&&!de(e))for(const r in e)n[r]==null&&Qs(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const el=/\s*!important$/;function Qs(t,e,n){if(D(n))n.forEach(i=>Qs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=of(t,e);el.test(n)?t.setProperty(vn(i),n.replace(el,""),"important"):t[i]=n}}const tl=["Webkit","Moz","ms"],Is={};function of(t,e){const n=Is[e];if(n)return n;let i=hn(e);if(i!=="filter"&&i in t)return Is[e]=i;i=da(i);for(let s=0;s<tl.length;s++){const r=tl[s]+i;if(r in t)return Is[e]=r}return e}const nl="http://www.w3.org/1999/xlink";function lf(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nl,e.slice(6,e.length)):t.setAttributeNS(nl,e,n);else{const r=Gu(e);n==null||r&&!oa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function af(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=oa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[ec,cf]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Js=0;const uf=Promise.resolve(),hf=()=>{Js=0},df=()=>Js||(uf.then(hf),Js=ec());function ff(t,e,n,i){t.addEventListener(e,n,i)}function pf(t,e,n,i){t.removeEventListener(e,n,i)}function _f(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=gf(e);if(i){const c=r[e]=mf(i,s);ff(t,l,c,a)}else o&&(pf(t,l,o,a),r[e]=void 0)}}const il=/(?:Once|Passive|Capture)$/;function gf(t){let e;if(il.test(t)){e={};let i;for(;i=t.match(il);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}function mf(t,e){const n=i=>{const s=i.timeStamp||ec();(cf||s>=n.attached-1)&&Oe(yf(i,n.value),e,5,[i])};return n.value=t,n.attached=df(),n}function yf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const sl=/^on[a-z]/,vf=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?sf(t,i,s):e==="style"?rf(t,n,i):qi(e)?br(e)||_f(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cf(t,e,i,s))?af(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),lf(t,e,i,s))};function Cf(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&sl.test(e)&&M(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sl.test(e)&&de(n)?!1:e in t}const Ef={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ld.props;const bf=ve({patchProp:vf},nf);let rl;function If(){return rl||(rl=Pd(bf))}const wf=(...t)=>{const e=If().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Tf(i);if(!s)return;const r=e._component;!M(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Tf(t){return de(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw bn(e)},bn=function(t){return new Error("Firebase Database ("+tc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sf=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),i.push(n[h],n[u],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||u==null)throw Error();const f=r<<2|l>>4;if(i.push(f),c!==64){const g=l<<4&240|c>>2;if(i.push(g),u!==64){const b=c<<6&192|u;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ic=function(t){const e=nc(t);return $r.encodeByteArray(e,!0)},sc=function(t){return ic(t).replace(/\./g,"")},Xs=function(t){try{return $r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){return rc(void 0,t)}function rc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rf(n)||(t[n]=rc(t[n],e[n]));return t}function Rf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function Af(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lc(){return tc.NODE_ADMIN===!0}function xf(){return typeof indexedDB=="object"}function kf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="FirebaseError";class zt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Of,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Pf(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new zt(s,l,i)}}function Pf(t,e){return t.replace(Df,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Df=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=qn(Xs(r[0])||""),n=qn(Xs(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Mf=function(t){const e=ac(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lf=function(t){const e=ac(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xi(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ll(r)&&ll(o)){if(!Zs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ll(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const f=(s<<5|s>>>27)+c+a+h+i[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Uf(t,e){const n=new Bf(t,e);return n.subscribe.bind(n)}class Bf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Hf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ws),s.error===void 0&&(s.error=ws),s.complete===void 0&&(s.complete=ws);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ws(){}function cc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,C(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},is=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){return t&&t._delegate?t._delegate:t}class Lt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zf(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vf(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vf(t){return t===Tt?void 0:t}function zf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $f(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Kf={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},qf=G.INFO,Gf={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Yf=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Gf[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kr{constructor(e){this.name=e,this._logLevel=qf,this._logHandler=Yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Qf=(t,e)=>e.some(n=>t instanceof n);let al,cl;function Jf(){return al||(al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xf(){return cl||(cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uc=new WeakMap,er=new WeakMap,hc=new WeakMap,Ts=new WeakMap,qr=new WeakMap;function Zf(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_t(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uc.set(n,t)}).catch(()=>{}),qr.set(e,t),e}function ep(t){if(er.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});er.set(t,e)}let tr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return er.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tp(t){tr=t(tr)}function np(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ss(this),e,...n);return hc.set(i,e.sort?e.sort():[e]),_t(i)}:Xf().includes(t)?function(...e){return t.apply(Ss(this),e),_t(uc.get(this))}:function(...e){return _t(t.apply(Ss(this),e))}}function ip(t){return typeof t=="function"?np(t):(t instanceof IDBTransaction&&ep(t),Qf(t,Jf())?new Proxy(t,tr):t)}function _t(t){if(t instanceof IDBRequest)return Zf(t);if(Ts.has(t))return Ts.get(t);const e=ip(t);return e!==t&&(Ts.set(t,e),qr.set(e,t)),e}const Ss=t=>qr.get(t);function sp(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=_t(o);return i&&o.addEventListener("upgradeneeded",a=>{i(_t(o.result),a.oldVersion,a.newVersion,_t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const rp=["get","getKey","getAll","getAllKeys","count"],op=["put","add","delete","clear"],Ns=new Map;function ul(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ns.get(e))return Ns.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=op.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||rp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Ns.set(e,r),r}tp(t=>({...t,get:(e,n,i)=>ul(e,n)||t.get(e,n,i),has:(e,n)=>!!ul(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ap(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ap(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nr="@firebase/app",hl="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Kr("@firebase/app"),cp="@firebase/app-compat",up="@firebase/analytics-compat",hp="@firebase/analytics",dp="@firebase/app-check-compat",fp="@firebase/app-check",pp="@firebase/auth",_p="@firebase/auth-compat",gp="@firebase/database",mp="@firebase/database-compat",yp="@firebase/functions",vp="@firebase/functions-compat",Cp="@firebase/installations",Ep="@firebase/installations-compat",bp="@firebase/messaging",Ip="@firebase/messaging-compat",wp="@firebase/performance",Tp="@firebase/performance-compat",Sp="@firebase/remote-config",Np="@firebase/remote-config-compat",Rp="@firebase/storage",Ap="@firebase/storage-compat",xp="@firebase/firestore",kp="@firebase/firestore-compat",Op="firebase",Pp="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="[DEFAULT]",Dp={[nr]:"fire-core",[cp]:"fire-core-compat",[hp]:"fire-analytics",[up]:"fire-analytics-compat",[fp]:"fire-app-check",[dp]:"fire-app-check-compat",[pp]:"fire-auth",[_p]:"fire-auth-compat",[gp]:"fire-rtdb",[mp]:"fire-rtdb-compat",[yp]:"fire-fn",[vp]:"fire-fn-compat",[Cp]:"fire-iid",[Ep]:"fire-iid-compat",[bp]:"fire-fcm",[Ip]:"fire-fcm-compat",[wp]:"fire-perf",[Tp]:"fire-perf-compat",[Sp]:"fire-rc",[Np]:"fire-rc-compat",[Rp]:"fire-gcs",[Ap]:"fire-gcs-compat",[xp]:"fire-fst",[kp]:"fire-fst-compat","fire-js":"fire-js",[Op]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,ir=new Map;function Mp(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(ir.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;ir.set(e,t);for(const n of ki.values())Mp(n,t);return!0}function Lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new ii("app","Firebase",Fp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=Pp;function Bp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:dc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});const s=ki.get(i);if(s){if(Zs(t,s.options)&&Zs(n,s.config))return s;throw Ut.create("duplicate-app",{appName:i})}const r=new jf(i);for(const l of ir.values())r.addComponent(l);const o=new Up(t,n,r);return ki.set(i,o),o}function Hp(t=dc){const e=ki.get(t);if(!e)throw Ut.create("no-app",{appName:t});return e}function gt(t,e,n){var i;let s=(i=Dp[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}_n(new Lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="firebase-heartbeat-database",$p=1,Gn="firebase-heartbeat-store";let Rs=null;function fc(){return Rs||(Rs=sp(Wp,$p,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gn)}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),Rs}async function Vp(t){var e;try{return(await fc()).transaction(Gn).objectStore(Gn).get(pc(t))}catch(n){if(n instanceof zt)Ft.warn(n.message);else{const i=Ut.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ft.warn(i.message)}}}async function dl(t,e){var n;try{const s=(await fc()).transaction(Gn,"readwrite");return await s.objectStore(Gn).put(e,pc(t)),s.done}catch(i){if(i instanceof zt)Ft.warn(i.message);else{const s=Ut.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Ft.warn(s.message)}}}function pc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=1024,jp=30*24*60*60*1e3;class Kp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fl(),{heartbeatsToSend:n,unsentEntries:i}=qp(this._heartbeatsCache.heartbeats),s=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fl(){return new Date().toISOString().substring(0,10)}function qp(t,e=zp){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),pl(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xf()?kf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pl(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){_n(new Lt("platform-logger",e=>new lp(e),"PRIVATE")),_n(new Lt("heartbeat",e=>new Kp(e),"PRIVATE")),gt(nr,hl,t),gt(nr,hl,"esm2017"),gt("fire-js","")}Yp("");const _l="@firebase/database",gl="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c="";function Qp(t){_c=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jp(e)}}catch{}return new Xp},xt=gc("localStorage"),sr=gc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Kr("@firebase/database"),Zp=function(){let t=1;return function(){return t++}}(),mc=function(t){const e=Wf(t),n=new Ff;n.update(e);const i=n.digest();return $r.encodeByteArray(i)},si=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=si.apply(null,i):typeof i=="object"?e+=he(i):e+=i,e+=" "}return e};let Mt=null,ml=!0;const e_=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(on.logLevel=G.VERBOSE,Mt=on.log.bind(on),e&&sr.set("logging_enabled",!0)):typeof t=="function"?Mt=t:(Mt=null,sr.remove("logging_enabled"))},_e=function(...t){if(ml===!0&&(ml=!1,Mt===null&&sr.get("logging_enabled")===!0&&e_(!0)),Mt){const e=si.apply(null,t);Mt(e)}},ri=function(t){return function(...e){_e(t,...e)}},rr=function(...t){const e="FIREBASE INTERNAL ERROR: "+si(...t);on.error(e)},Bt=function(...t){const e=`FIREBASE FATAL ERROR: ${si(...t)}`;throw on.error(e),new Error(e)},Re=function(...t){const e="FIREBASE WARNING: "+si(...t);on.warn(e)},t_=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},n_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gn="[MIN_NAME]",Ht="[MAX_NAME]",In=function(t,e){if(t===e)return 0;if(t===gn||e===Ht)return-1;if(e===gn||t===Ht)return 1;{const n=yl(t),i=yl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},i_=function(t,e){return t===e?0:t<e?-1:1},Nn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Yr=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=he(e[i]),n+=":",n+=Yr(t[e[i]]);return n+="}",n},vc=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cc=function(t){C(!yc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},s_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},r_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function o_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const l_=new RegExp("^-?(0*)\\d{1,10}$"),a_=-2147483648,c_=2147483647,yl=function(t){if(l_.test(t)){const e=Number(t);if(e>=a_&&e<=c_)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Re("Exception was thrown by user callback.",n),e},Math.floor(0))}},u_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class or{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}or.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="5",Ec="v",bc="s",Ic="r",wc="f",Tc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sc="ls",Nc="p",lr="ac",Rc="websocket",Ac="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,i,s,r=!1,o="",l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function p_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xc(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let i;if(e===Rc)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ac)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);p_(t)&&(n.ns=t.namespace);const s=[];return Se(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.counters_={}}incrementCounter(e,n=1){lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As={},xs={};function Jr(t){const e=t.toString();return As[e]||(As[e]=new __),As[e]}function g_(t,e){const n=t.toString();return xs[n]||(xs[n]=e()),xs[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&oi(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="start",y_="close",v_="pLPCommand",C_="pRTLPCB",kc="id",Oc="pw",Pc="ser",E_="cb",b_="seg",I_="ts",w_="d",T_="dframe",Dc=1870,Mc=30,S_=Dc-Mc,N_=25e3,R_=3e4;class Zt{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ri(e),this.stats_=Jr(n),this.urlFn=a=>(this.appCheckToken&&(a[lr]=this.appCheckToken),xc(n,Ac,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new m_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R_)),n_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xr((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vl)this.id=l,this.password=a;else if(o===y_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[vl]="t",i[Pc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[E_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ec]=Qr,this.transportSessionId&&(i[bc]=this.transportSessionId),this.lastSessionId&&(i[Sc]=this.lastSessionId),this.applicationId&&(i[Nc]=this.applicationId),this.appCheckToken&&(i[lr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Tc.test(location.hostname)&&(i[Ic]=wc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zt.forceAllow_=!0}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){return Zt.forceAllow_?!0:!Zt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!s_()&&!r_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ic(n),s=vc(i,S_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[T_]="t",i[kc]=e,i[Oc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xr{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zp(),window[v_+this.uniqueCallbackIdentifier]=e,window[C_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_e("frame writing exception"),l.stack&&_e(l.stack),_e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_e("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kc]=this.myID,e[Oc]=this.myPW,e[Pc]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mc+i.length<=Dc;){const o=this.pendingSegs.shift();i=i+"&"+b_+s+"="+o.seg+"&"+I_+s+"="+o.ts+"&"+w_+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(N_)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{_e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=16384,x_=45e3;let Oi=null;typeof MozWebSocket!="undefined"?Oi=MozWebSocket:typeof WebSocket!="undefined"&&(Oi=WebSocket);class Le{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ri(this.connId),this.stats_=Jr(n),this.connURL=Le.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ec]=Qr,typeof location!="undefined"&&location.hostname&&Tc.test(location.hostname)&&(o[Ic]=wc),n&&(o[bc]=n),i&&(o[Sc]=i),s&&(o[lr]=s),r&&(o[Nc]=r),xc(e,Rc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xt.set("previous_websocket_failure",!0);try{let i;lc(),this.mySock=new Oi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Oi!==null&&!Le.forceDisallow_}static previouslyFailed(){return xt.isInMemoryStorage||xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=qn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=vc(n,A_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(x_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Le&&Le.isAvailable();let i=n&&!Le.previouslyFailed();if(e.webSocketOnly&&(n||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Le];else{const s=this.transports_=[];for(const r of Yn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=6e4,O_=5e3,P_=10*1024,D_=100*1024,ks="t",Cl="d",M_="s",El="r",L_="e",bl="o",Il="a",wl="n",Tl="p",F_="h";class U_{constructor(e,n,i,s,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ri("c:"+this.id+":"),this.transportManager_=new Yn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Mn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>D_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ks in e){const n=e[ks];n===Il?this.upgradeIfSecondaryHealthy_():n===El?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nn("t",e),i=Nn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Il,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nn("t",e),i=Nn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nn(ks,e);if(Cl in e){const i=e[Cl];if(n===F_)this.onHandshake_(i);else if(n===wl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===M_?this.onConnectionShutdown_(i):n===El?this.onReset_(i):n===L_?rr("Server Error: "+i):n===bl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qr!==i&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Mn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(k_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Fc{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!zr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pi}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=32,Nl=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new Y("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ct(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function Uc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function B_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function ae(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Y)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Y(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=F(t),i=F(e);if(n===null)return e;if(n===i)return we(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zr(t,e){if(Ct(t)!==Ct(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ct(t)>Ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class H_{constructor(e,n){this.errorPrefix_=n,this.parts_=Bc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=is(this.parts_[i]);Wc(this)}}function W_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=is(e),Wc(t)}function $_(t){const e=t.parts_.pop();t.byteLength_-=is(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wc(t){if(t.byteLength_>Nl)throw new Error(t.errorPrefix_+"has a key path longer than "+Nl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sl+") or object contains a cycle "+St(t))}function St(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Fc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new eo}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=1e3,V_=60*5*1e3,Rl=30*1e3,z_=1.3,j_=3e4,K_="server_kill",Al=3;class st extends Lc{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=st.nextPersistentConnectionId_++,this.log_=ri("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rn,this.maxReconnectDelay_=V_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!lc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");eo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(he(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Vr,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;st.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&lt(e,"w")){const i=pn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rr("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>j_&&(this.reconnectDelay_=Rn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*z_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+st.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(u){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?_e("getToken() completed but was canceled"):(_e("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new U_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{Re(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(K_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Re(u),a())}}}interrupt(e){_e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ol(this.interruptReasons_)&&(this.reconnectDelay_=Rn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Yr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Y(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){_e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Al&&(this.reconnectDelay_=Rl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Al&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_c.replace(/\./g,"-")]=1,zr()?e["framework.cordova"]=1:oc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pi.getInstance().currentlyOnline();return ol(this.interruptReasons_)&&e}}st.nextPersistentConnectionId_=0;st.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new L(gn,e),s=new L(gn,n);return this.compare(i,s)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class $c extends ss{static get __EMPTY_NODE(){return yi}static set __EMPTY_NODE(e){yi=e}compare(e,n){return In(e.name,n.name)}isDefinedOn(e){throw bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Ht,yi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,yi)}toString(){return".key"}}const ln=new $c;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ue{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:ue.RED,this.left=s!=null?s:Te.EMPTY_NODE,this.right=r!=null?r:Te.EMPTY_NODE}copy(e,n,i,s,r){return new ue(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Te.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ue.RED=!0;ue.BLACK=!1;class q_{copy(e,n,i,s,r){return this}insert(e,n,i){return new ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Te{constructor(e,n=Te.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Te(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ue.BLACK,null,null))}remove(e){return new Te(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ue.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vi(this.root_,null,this.comparator_,!0,e)}}Te.EMPTY_NODE=new q_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e){return In(t.name,e.name)}function to(t,e){return In(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar;function Y_(t){ar=t}const Vc=function(t){return typeof t=="number"?"number:"+Cc(t):"string:"+t},zc=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&lt(e,".sv"),"Priority must be a string or number.")}else C(t===ar||t.isEmpty(),"priority of unexpected type.");C(t===ar||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zc(this.priorityNode_)}static set __childrenNodeConstructor(e){xl=e}static get __childrenNodeConstructor(){return xl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=F(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||Ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cc(this.value_):e+=this.value_,this.lazyHash_=mc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ce.VALUE_TYPE_ORDER.indexOf(n),r=ce.VALUE_TYPE_ORDER.indexOf(i);return C(s>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc,Kc;function Q_(t){jc=t}function J_(t){Kc=t}class X_ extends ss{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?In(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Ht,new ce("[PRIORITY-POST]",Kc))}makePost(e,n){const i=jc(e);return new L(n,new ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const oe=new X_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=Math.log(2);class eg{constructor(e){const n=r=>parseInt(Math.log(r)/Z_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Di=function(t,e,n,i){t.sort(e);const s=function(a,c){const h=c-a;let u,f;if(h===0)return null;if(h===1)return u=t[a],f=n?n(u):u,new ue(f,u.node,ue.BLACK,null,null);{const g=parseInt(h/2,10)+a,b=s(a,g),S=s(g+1,c);return u=t[g],f=n?n(u):u,new ue(f,u.node,ue.BLACK,b,S)}},r=function(a){let c=null,h=null,u=t.length;const f=function(b,S){const R=u-b,P=u;u-=b;const le=s(R+1,P),j=t[R],Z=n?n(j):j;g(new ue(Z,j.node,S,null,le))},g=function(b){c?(c.left=b,c=b):(h=b,c=b)};for(let b=0;b<a.count;++b){const S=a.nextBitIsOne(),R=Math.pow(2,a.count-(b+1));S?f(R,ue.BLACK):(f(R,ue.BLACK),f(R,ue.RED))}return h},o=new eg(t.length),l=r(o);return new Te(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;const Jt={};class tt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Jt&&oe,"ChildrenNode.ts has not been loaded"),Os=Os||new tt({".priority":Jt},{".priority":oe}),Os}get(e){const n=pn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Te?n:null}hasIndex(e){return lt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Di(i,e.getCompare()):l=Jt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new tt(h,c)}addToIndexes(e,n){const i=xi(this.indexes_,(s,r)=>{const o=pn(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),s===Jt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Di(l,o.getCompare())}else return Jt;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new tt(i,this.indexSet_)}removeFromIndexes(e,n){const i=xi(this.indexes_,s=>{if(s===Jt)return s;{const r=n.get(e.name);return r?s.remove(new L(e.name,r)):s}});return new tt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An;class k{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&zc(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return An||(An=new k(new Te(to),null,tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||An}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?An:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new L(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?An:this.priorityNode_;return new k(s,o,r)}}updateChild(e,n){const i=F(e);if(i===null)return n;{C(F(e)!==".priority"||Ct(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(X(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),i++,r&&k.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vc(this.getPriority().val())+":"),this.forEachChild(oe,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":mc(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===li?-1:0}withIndex(e){if(e===ln||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(oe),s=n.getIterator(oe);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ln?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tg extends k{constructor(){super(new Te(to),k.EMPTY_NODE,tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const li=new tg;Object.defineProperties(L,{MIN:{value:new L(gn,k.EMPTY_NODE)},MAX:{value:new L(Ht,li)}});$c.__EMPTY_NODE=k.EMPTY_NODE;ce.__childrenNodeConstructor=k;Y_(li);J_(li);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=!0;function ge(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,ge(e))}if(!(t instanceof Array)&&ng){const n=[];let i=!1;if(Se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return k.EMPTY_NODE;const r=Di(n,G_,o=>o.name,to);if(i){const o=Di(n,oe.getCompare());return new k(r,ge(e),new tt({".priority":o},{".priority":oe}))}else return new k(r,ge(e),tt.Default)}else{let n=k.EMPTY_NODE;return Se(t,(i,s)=>{if(lt(t,i)&&i.substring(0,1)!=="."){const r=ge(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(ge(e))}}Q_(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends ss{constructor(e){super(),this.indexPath_=e,C(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?In(e.name,n.name):r}makePost(e,n){const i=ge(e),s=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new L(n,s)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,li);return new L(Ht,e)}toString(){return Bc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends ss{compare(e,n){const i=e.node.compareTo(n.node);return i===0?In(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const i=ge(e);return new L(n,i)}toString(){return".value"}}const rg=new sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return{type:"value",snapshotNode:t}}function mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function og(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Qn(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(mn(n,i)):o.trackChildChange(Jn(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,r)=>{n.hasChild(s)||i.trackChildChange(Qn(s,r))}),n.isLeafNode()||n.forEachChild(oe,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Jn(s,r,o))}else i.trackChildChange(mn(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.indexedFilter_=new no(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xn.getStartPost_(e),this.endPost_=Xn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new L(n,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=k.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(k.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new L(o,l))||(s=s.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.rangedFilter_=new Xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new L(n,i))||(i=k.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)s=s.updateImmediateChild(l.name,l.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(k.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();l=(f,g)=>u(g,f)}else a=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,h=!1;for(;a.hasNext();){const u=a.getNext();!h&&l(r,u)<=0&&(h=!0),h&&c<this.limit_&&l(u,o)<=0?c++:s=s.updateImmediateChild(u.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,g)=>u(g,f)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new L(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(h&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Jn(n,i,u)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Qn(n,u));const S=l.updateImmediateChild(n,k.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(mn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return i.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Qn(c.name,c.node)),r.trackChildChange(mn(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new io;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ag(t){return t.loadsAllData()?new no(t.getIndex()):t.hasLimit()?new lg(t):new Xn(t)}function kl(t){const e={};if(t.isDefault())return e;let n;return t.index_===oe?n="$priority":t.index_===rg?n="$value":t.index_===ln?n="$key":(C(t.index_ instanceof ig,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_&&(e.startAt=he(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+he(t.indexStartName_))),t.endSet_&&(e.endAt=he(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+he(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ol(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Lc{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ri("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mi.getListenId_(e,i),l={};this.listens_[o]=l;const a=kl(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),pn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=Mi.getListenId_(e,n);delete this.listens_[i]}get(e){const n=kl(e._queryParams),i=e._path.toString(),s=new Vr;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=qn(l.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return{value:null,children:new Map}}function Gc(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=F(e);t.children.has(i)||t.children.set(i,Li());const s=t.children.get(i);e=X(e),Gc(s,e,n)}}function cr(t,e,n){t.value!==null?n(e,t.value):ug(t,(i,s)=>{const r=new Y(e.toString()+"/"+i);cr(s,r,n)})}function ug(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=10*1e3,dg=30*1e3,fg=5*60*1e3;class pg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hg(e);const i=Pl+(dg-Pl)*Math.random();Mn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Se(e,(s,r)=>{r>0&&lt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Mn(this.reportStats_.bind(this),Math.floor(Math.random()*2*fg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Be||(Be={}));function Yc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function so(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ro(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Be.ACK_USER_WRITE,this.source=Yc()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new Fi($(),n,this.revert)}}else return C(F(this.path)===e,"operationForChild called for unrelated child."),new Fi(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.source=e,this.path=n,this.type=Be.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Zn(this.source,$()):new Zn(this.source,X(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Be.OVERWRITE}operationForChild(e){return U(this.path)?new Wt(this.source,$(),this.snap.getImmediateChild(e)):new Wt(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Be.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new Wt(this.source,$(),n.value):new ei(this.source,$(),n)}else return C(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(og(o.childName,o.snapshotNode))}),xn(t,s,"child_removed",e,i,n),xn(t,s,"child_added",e,i,n),xn(t,s,"child_moved",r,i,n),xn(t,s,"child_changed",e,i,n),xn(t,s,"value",e,i,n),s}function xn(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>yg(t,l,a)),o.forEach(l=>{const a=mg(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function mg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yg(t,e,n){if(e.childName==null||n.childName==null)throw bn("Should only compare child_ events.");const i=new L(e.childName,e.snapshotNode),s=new L(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e){return{eventCache:t,serverCache:e}}function Ln(t,e,n,i){return rs(new $t(e,n,i),t.serverCache)}function Qc(t,e,n,i){return rs(t.eventCache,new $t(e,n,i))}function ur(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;const vg=()=>(Ps||(Ps=new Te(i_)),Ps);class ne{constructor(e,n=vg()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Se(e,(i,s)=>{n=n.set(new Y(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(U(e))return null;{const i=F(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(X(e),n);return r!=null?{path:ae(new Y(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),i=this.children.get(n);return i!==null?i.subtree(X(e)):new ne(null)}}set(e,n){if(U(e))return new ne(n,this.children);{const i=F(e),r=(this.children.get(i)||new ne(null)).set(X(e),n),o=this.children.insert(i,r);return new ne(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=F(e),i=this.children.get(n);if(i){const s=i.remove(X(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),i=this.children.get(n);return i?i.get(X(e)):null}}setTree(e,n){if(U(e))return n;{const i=F(e),r=(this.children.get(i)||new ne(null)).setTree(X(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ne(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ae(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(U(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_(X(e),ae(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,i){if(U(e))return this;{this.value&&i(n,this.value);const s=F(e),r=this.children.get(s);return r?r.foreachOnPath_(X(e),ae(n,s),i):new ne(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ae(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.writeTree_=e}static empty(){return new We(new ne(null))}}function Fn(t,e,n){if(U(e))return new We(new ne(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=we(s,e);return r=r.updateChild(o,n),new We(t.writeTree_.set(s,r))}else{const s=new ne(n),r=t.writeTree_.setTree(e,s);return new We(r)}}}function Dl(t,e,n){let i=t;return Se(n,(s,r)=>{i=Fn(i,ae(e,s),r)}),i}function Ml(t,e){if(U(e))return We.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new We(n)}}function hr(t,e){return Kt(t,e)!=null}function Kt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function Ll(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(i,s)=>{e.push(new L(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new L(i,s.value))}),e}function mt(t,e){if(U(e))return t;{const n=Kt(t,e);return n!=null?new We(new ne(n)):new We(t.writeTree_.subtree(e))}}function dr(t){return t.writeTree_.isEmpty()}function yn(t,e){return Jc($(),t.writeTree_,e)}function Jc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Jc(ae(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ae(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,e){return tu(e,t)}function Cg(t,e,n,i,s){C(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Fn(t.visibleWrites,e,n)),t.lastWriteId=i}function Eg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function bg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ig(l,i.path)?s=!1:Ue(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return wg(t),!0;if(i.snap)t.visibleWrites=Ml(t.visibleWrites,i.path);else{const l=i.children;Se(l,a=>{t.visibleWrites=Ml(t.visibleWrites,ae(i.path,a))})}return!0}else return!1}function Ig(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(ae(t.path,n),e))return!0;return!1}function wg(t){t.visibleWrites=Xc(t.allWrites,Tg,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Tg(t){return t.visible}function Xc(t,e,n){let i=We.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)Ue(n,o)?(l=we(n,o),i=Fn(i,l,r.snap)):Ue(o,n)&&(l=we(o,n),i=Fn(i,$(),r.snap.getChild(l)));else if(r.children){if(Ue(n,o))l=we(n,o),i=Dl(i,l,r.children);else if(Ue(o,n))if(l=we(o,n),U(l))i=Dl(i,$(),r.children);else{const a=pn(r.children,F(l));if(a){const c=a.getChild(X(l));i=Fn(i,$(),c)}}}else throw bn("WriteRecord should have .snap or .children")}}return i}function Zc(t,e,n,i,s){if(!i&&!s){const r=Kt(t.visibleWrites,e);if(r!=null)return r;{const o=mt(t.visibleWrites,e);if(dr(o))return n;if(n==null&&!hr(o,$()))return null;{const l=n||k.EMPTY_NODE;return yn(o,l)}}}else{const r=mt(t.visibleWrites,e);if(!s&&dr(r))return n;if(!s&&n==null&&!hr(r,$()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},l=Xc(t.allWrites,o,e),a=n||k.EMPTY_NODE;return yn(l,a)}}}function Sg(t,e,n){let i=k.EMPTY_NODE;const s=Kt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=mt(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=yn(mt(r,new Y(o)),l);i=i.updateImmediateChild(o,a)}),Ll(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=mt(t.visibleWrites,e);return Ll(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ng(t,e,n,i,s){C(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,n);if(hr(t.visibleWrites,r))return null;{const o=mt(t.visibleWrites,r);return dr(o)?s.getChild(n):yn(o,s.getChild(n))}}function Rg(t,e,n,i){const s=ae(e,n),r=Kt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=mt(t.visibleWrites,s);return yn(o,i.getNode().getImmediateChild(n))}else return null}function Ag(t,e){return Kt(t.visibleWrites,e)}function xg(t,e,n,i,s,r,o){let l;const a=mt(t.visibleWrites,e),c=Kt(a,$());if(c!=null)l=c;else if(n!=null)l=yn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let g=f.getNext();for(;g&&h.length<s;)u(g,i)!==0&&h.push(g),g=f.getNext();return h}else return[]}function kg(){return{visibleWrites:We.empty(),allWrites:[],lastWriteId:-1}}function Ui(t,e,n,i){return Zc(t.writeTree,t.treePath,e,n,i)}function lo(t,e){return Sg(t.writeTree,t.treePath,e)}function Fl(t,e,n,i){return Ng(t.writeTree,t.treePath,e,n,i)}function Bi(t,e){return Ag(t.writeTree,ae(t.treePath,e))}function Og(t,e,n,i,s,r){return xg(t.writeTree,t.treePath,e,n,i,s,r)}function ao(t,e,n){return Rg(t.writeTree,t.treePath,e,n)}function eu(t,e){return tu(ae(t.treePath,e),t.writeTree)}function tu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Jn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Qn(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,mn(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Jn(i,e.snapshotNode,s.oldSnap));else throw bn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const nu=new Dg;class co{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new $t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ao(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vt(this.viewCache_),r=Og(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return{filter:t}}function Lg(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fg(t,e,n,i,s){const r=new Pg;let o,l;if(n.type===Be.OVERWRITE){const c=n;c.source.fromUser?o=fr(t,e,c.path,c.snap,i,s,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=Hi(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===Be.MERGE){const c=n;c.source.fromUser?o=Bg(t,e,c.path,c.children,i,s,r):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=pr(t,e,c.path,c.children,i,s,l,r))}else if(n.type===Be.ACK_USER_WRITE){const c=n;c.revert?o=$g(t,e,c.path,i,s,r):o=Hg(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Be.LISTEN_COMPLETE)o=Wg(t,e,n.path,i,r);else throw bn("Unknown operation type: "+n.type);const a=r.getChanges();return Ug(e,o,a),{viewCache:o,changes:a}}function Ug(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ur(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(qc(ur(e)))}}function iu(t,e,n,i,s,r){const o=e.eventCache;if(Bi(i,n)!=null)return e;{let l,a;if(U(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Vt(e),h=c instanceof k?c:k.EMPTY_NODE,u=lo(i,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Ui(i,Vt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(n);if(c===".priority"){C(Ct(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=Fl(i,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=X(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Fl(i,n,o.getNode(),a);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=ao(i,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,s,r):l=o.getNode()}}return Ln(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Hi(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=h.updateFullNode(a.getNode(),i,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,i);c=h.updateFullNode(a.getNode(),g,null)}else{const g=F(n);if(!a.isCompleteForPath(n)&&Ct(n)>1)return e;const b=X(n),R=a.getNode().getImmediateChild(g).updateChild(b,i);g===".priority"?c=h.updatePriority(a.getNode(),R):c=h.updateChild(a.getNode(),g,R,b,nu,null)}const u=Qc(e,c,a.isFullyInitialized()||U(n),h.filtersNodes()),f=new co(s,u,r);return iu(t,u,n,s,f,l)}function fr(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const h=new co(s,e,r);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Ln(e,c,!0,t.filter.filtersNodes());else{const u=F(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Ln(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=X(n),g=l.getNode().getImmediateChild(u);let b;if(U(f))b=i;else{const S=h.getCompleteChild(u);S!=null?Uc(f)===".priority"&&S.getChild(Hc(f)).isEmpty()?b=S:b=S.updateChild(f,i):b=k.EMPTY_NODE}if(g.equals(b))a=e;else{const S=t.filter.updateChild(l.getNode(),u,b,f,h,o);a=Ln(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ul(t,e){return t.eventCache.isCompleteForChild(e)}function Bg(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const h=ae(n,a);Ul(e,F(h))&&(l=fr(t,l,h,c,s,r,o))}),i.foreach((a,c)=>{const h=ae(n,a);Ul(e,F(h))||(l=fr(t,l,h,c,s,r,o))}),l}function Bl(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function pr(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;U(n)?c=i:c=new ne(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),b=Bl(t,g,f);a=Hi(t,a,new Y(u),b,s,r,o,l)}}),c.children.inorderTraversal((u,f)=>{const g=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!g){const b=e.serverCache.getNode().getImmediateChild(u),S=Bl(t,b,f);a=Hi(t,a,new Y(u),S,s,r,o,l)}}),a}function Hg(t,e,n,i,s,r,o){if(Bi(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Hi(t,e,n,a.getNode().getChild(n),s,r,l,o);if(U(n)){let c=new ne(null);return a.getNode().forEachChild(ln,(h,u)=>{c=c.set(new Y(h),u)}),pr(t,e,n,c,s,r,l,o)}else return e}else{let c=new ne(null);return i.foreach((h,u)=>{const f=ae(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),pr(t,e,n,c,s,r,l,o)}}function Wg(t,e,n,i,s){const r=e.serverCache,o=Qc(e,r.getNode(),r.isFullyInitialized()||U(n),r.isFiltered());return iu(t,o,n,i,nu,s)}function $g(t,e,n,i,s,r){let o;if(Bi(i,n)!=null)return e;{const l=new co(i,e,s),a=e.eventCache.getNode();let c;if(U(n)||F(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ui(i,Vt(e));else{const u=e.serverCache.getNode();C(u instanceof k,"serverChildren would be complete if leaf node"),h=lo(i,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=F(n);let u=ao(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,X(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,k.EMPTY_NODE,X(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ui(i,Vt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Bi(i,$())!=null,Ln(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new no(i.getIndex()),r=ag(i);this.processor_=Mg(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,l.getNode(),null),h=new $t(a,o.isFullyInitialized(),s.filtersNodes()),u=new $t(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=rs(u,h),this.eventGenerator_=new _g(this.query_)}get query(){return this.query_}}function zg(t){return t.viewCache_.serverCache.getNode()}function jg(t,e){const n=Vt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Hl(t){return t.eventRegistrations_.length===0}function Kg(t,e){t.eventRegistrations_.push(e)}function Wl(t,e,n){const i=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function $l(t,e,n,i){e.type===Be.MERGE&&e.source.queryId!==null&&(C(Vt(t.viewCache_),"We should always have a full cache before handling merges"),C(ur(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Fg(t.processor_,s,e,n,i);return Lg(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,su(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qg(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{i.push(mn(r,o))}),n.isFullyInitialized()&&i.push(qc(n.getNode())),su(t,i,n.getNode(),e)}function su(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return gg(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;class Gg{constructor(){this.views=new Map}}function Yg(t){C(!Wi,"__referenceConstructor has already been defined"),Wi=t}function Qg(){return C(Wi,"Reference.ts has not been loaded"),Wi}function Jg(t){return t.views.size===0}function uo(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return C(r!=null,"SyncTree gave us an op for an invalid query."),$l(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat($l(o,e,n,i));return r}}function Xg(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ui(n,s?i:null),a=!1;l?a=!0:i instanceof k?(l=lo(n,i),a=!1):(l=k.EMPTY_NODE,a=!1);const c=rs(new $t(l,a,!1),new $t(i,s,!1));return new Vg(e,c)}return o}function Zg(t,e,n,i,s,r){const o=Xg(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Kg(o,n),qg(o,n)}function em(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Et(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(Wl(c,n,i)),Hl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(Wl(a,n,i)),Hl(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Et(t)&&r.push(new(Qg())(e._repo,e._path)),{removed:r,events:o}}function ru(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function an(t,e){let n=null;for(const i of t.views.values())n=n||jg(i,e);return n}function ou(t,e){if(e._queryParams.loadsAllData())return os(t);{const i=e._queryIdentifier;return t.views.get(i)}}function lu(t,e){return ou(t,e)!=null}function Et(t){return os(t)!=null}function os(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;function tm(t){C(!$i,"__referenceConstructor has already been defined"),$i=t}function nm(){return C($i,"Reference.ts has not been loaded"),$i}let im=1;class Vl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=kg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sm(t,e,n,i,s){return Cg(t.pendingWriteTree_,e,n,i,s),s?ai(t,new Wt(Yc(),e,n)):[]}function en(t,e,n=!1){const i=Eg(t.pendingWriteTree_,e);if(bg(t.pendingWriteTree_,e)){let r=new ne(null);return i.snap!=null?r=r.set($(),!0):Se(i.children,o=>{r=r.set(new Y(o),!0)}),ai(t,new Fi(i.path,r,n))}else return[]}function ls(t,e,n){return ai(t,new Wt(so(),e,n))}function rm(t,e,n){const i=ne.fromObject(n);return ai(t,new ei(so(),e,i))}function om(t,e){return ai(t,new Zn(so(),e))}function lm(t,e,n){const i=ho(t,n);if(i){const s=fo(i),r=s.path,o=s.queryId,l=we(r,e),a=new Zn(ro(o),l);return po(t,r,a)}else return[]}function _r(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||lu(o,e))){const a=em(o,e,n,i);Jg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(f,g)=>Et(g));if(h&&!u){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=um(f);for(let b=0;b<g.length;++b){const S=g[b],R=S.query,P=hu(t,S);t.listenProvider_.startListening(Un(R),Vi(t,R),P.hashFn,P.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(Un(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(as(f));t.listenProvider_.stopListening(Un(f),g)}))}hm(t,c)}return l}function am(t,e,n,i){const s=ho(t,i);if(s!=null){const r=fo(s),o=r.path,l=r.queryId,a=we(o,e),c=new Wt(ro(l),a,n);return po(t,o,c)}else return[]}function cm(t,e,n,i){const s=ho(t,i);if(s){const r=fo(s),o=r.path,l=r.queryId,a=we(o,e),c=ne.fromObject(n),h=new ei(ro(l),a,c);return po(t,o,h)}else return[]}function zl(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,g)=>{const b=we(f,s);r=r||an(g,b),o=o||Et(g)});let l=t.syncPointTree_.get(s);l?(o=o||Et(l),r=r||an(l,$())):(l=new Gg,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=k.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,b)=>{const S=an(b,$());S&&(r=r.updateImmediateChild(g,S))}));const c=lu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=as(e);C(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=dm();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=oo(t.pendingWriteTree_,s);let u=Zg(l,e,n,h,r,a);if(!c&&!o&&!i){const f=ou(l,e);u=u.concat(fm(t,e,f))}return u}function au(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=we(o,e),c=an(l,a);if(c)return c});return Zc(s,e,r,n,!0)}function ai(t,e){return cu(e,t.syncPointTree_,null,oo(t.pendingWriteTree_,$()))}function cu(t,e,n,i){if(U(t.path))return uu(t,e,n,i);{const s=e.get($());n==null&&s!=null&&(n=an(s,$()));let r=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=eu(i,o);r=r.concat(cu(l,a,c,h))}return s&&(r=r.concat(uo(s,t,i,n))),r}}function uu(t,e,n,i){const s=e.get($());n==null&&s!=null&&(n=an(s,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=eu(i,o),h=t.operationForChild(o);h&&(r=r.concat(uu(h,l,a,c)))}),s&&(r=r.concat(uo(s,t,i,n))),r}function hu(t,e){const n=e.query,i=Vi(t,n);return{hashFn:()=>(zg(e)||k.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?lm(t,n._path,i):om(t,n._path);{const r=o_(s,n);return _r(t,n,null,r)}}}}function Vi(t,e){const n=as(e);return t.queryToTagMap.get(n)}function as(t){return t._path.toString()+"$"+t._queryIdentifier}function ho(t,e){return t.tagToQueryMap.get(e)}function fo(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function po(t,e,n){const i=t.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const s=oo(t.pendingWriteTree_,e);return uo(i,n,s,null)}function um(t){return t.fold((e,n,i)=>{if(n&&Et(n))return[os(n)];{let s=[];return n&&(s=ru(n)),Se(i,(r,o)=>{s=s.concat(o)}),s}})}function Un(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nm())(t._repo,t._path):t}function hm(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=as(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function dm(){return im++}function fm(t,e,n){const i=e._path,s=Vi(t,e),r=hu(t,n),o=t.listenProvider_.startListening(Un(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)C(!Et(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!U(c)&&h&&Et(h))return[os(h).query];{let f=[];return h&&(f=f.concat(ru(h).map(g=>g.query))),Se(u,(g,b)=>{f=f.concat(b)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(Un(h),Vi(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _o(n)}node(){return this.node_}}class go{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new go(this.syncTree_,n)}node(){return au(this.syncTree_,this.path_)}}const pm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jl=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _m(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gm(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_m=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},gm=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const s=e.node();if(C(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},mm=function(t,e,n,i){return mo(e,new go(n,t),i)},ym=function(t,e,n){return mo(t,new _o(e),n)};function mo(t,e,n){const i=t.getPriority().val(),s=jl(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=jl(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new ce(l,ge(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ce(s))),o.forEachChild(oe,(l,a)=>{const c=mo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function vo(t,e){let n=e instanceof Y?e:new Y(e),i=t,s=F(n);for(;s!==null;){const r=pn(i.node.children,s)||{children:{},childCount:0};i=new yo(s,i,r),n=X(n),s=F(n)}return i}function wn(t){return t.node.value}function du(t,e){t.node.value=e,gr(t)}function fu(t){return t.node.childCount>0}function vm(t){return wn(t)===void 0&&!fu(t)}function cs(t,e){Se(t.node.children,(n,i)=>{e(new yo(n,t,i))})}function pu(t,e,n,i){n&&!i&&e(t),cs(t,s=>{pu(s,e,!0,i)}),n&&i&&e(t)}function Cm(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ci(t){return new Y(t.parent===null?t.name:ci(t.parent)+"/"+t.name)}function gr(t){t.parent!==null&&Em(t.parent,t.name,t)}function Em(t,e,n){const i=vm(n),s=lt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,gr(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,gr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=/[\[\].#$\/\u0000-\u001F\u007F]/,Im=/[\[\].#$\u0000-\u001F\u007F]/,Ds=10*1024*1024,_u=function(t){return typeof t=="string"&&t.length!==0&&!bm.test(t)},gu=function(t){return typeof t=="string"&&t.length!==0&&!Im.test(t)},wm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gu(t)},mu=function(t,e,n){const i=n instanceof Y?new H_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+St(i));if(typeof e=="function")throw new Error(t+"contains a function "+St(i)+" with contents = "+e.toString());if(yc(e))throw new Error(t+"contains "+e.toString()+" "+St(i));if(typeof e=="string"&&e.length>Ds/3&&is(e)>Ds)throw new Error(t+"contains a string greater than "+Ds+" utf8 bytes "+St(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Se(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!_u(o)))throw new Error(t+" contains an invalid key ("+o+") "+St(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);W_(i,o),mu(t,l,i),$_(i)}),s&&r)throw new Error(t+' contains ".value" child '+St(i)+" in addition to actual children.")}},yu=function(t,e,n,i){if(!(i&&n===void 0)&&!gu(n))throw new Error(cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Tm=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yu(t,e,n,i)},Sm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_u(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wm(n))throw new Error(cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vu(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Zr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Cu(t,e,n){vu(t,n),Eu(t,i=>Zr(i,e))}function qt(t,e,n){vu(t,n),Eu(t,i=>Ue(i,e)||Ue(e,i))}function Eu(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Rm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Rm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Mt&&_e("event: "+n.toString()),oi(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="repo_interrupt",xm=25;class km{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Nm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Li(),this.transactionQueueTree_=new yo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Om(t,e,n){if(t.stats_=Jr(t.repoInfo_),t.forceRestClient_||u_())t.server_=new Mi(t.repoInfo_,(i,s,r,o)=>{Kl(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ql(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new st(t.repoInfo_,e,(i,s,r,o)=>{Kl(t,i,s,r,o)},i=>{ql(t,i)},i=>{Dm(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=g_(t.repoInfo_,()=>new pg(t.stats_,t.server_)),t.infoData_=new cg,t.infoSyncTree_=new Vl({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=ls(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Co(t,"connected",!1),t.serverSyncTree_=new Vl({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);qt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Pm(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bu(t){return pm({timestamp:Pm(t)})}function Kl(t,e,n,i,s){t.dataUpdateCount++;const r=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=xi(n,c=>ge(c));o=cm(t.serverSyncTree_,r,a,s)}else{const a=ge(n);o=am(t.serverSyncTree_,r,a,s)}else if(i){const a=xi(n,c=>ge(c));o=rm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=ls(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=bo(t,r)),qt(t.eventQueue_,l,o)}function ql(t,e){Co(t,"connected",e),e===!1&&Lm(t)}function Dm(t,e){Se(e,(n,i)=>{Co(t,n,i)})}function Co(t,e,n){const i=new Y("/.info/"+e),s=ge(n);t.infoData_.updateSnapshot(i,s);const r=ls(t.infoSyncTree_,i,s);qt(t.eventQueue_,i,r)}function Mm(t){return t.nextWriteId_++}function Lm(t){Iu(t,"onDisconnectEvents");const e=bu(t),n=Li();cr(t.onDisconnect_,$(),(s,r)=>{const o=mm(s,r,t.serverSyncTree_,e);Gc(n,s,o)});let i=[];cr(n,$(),(s,r)=>{i=i.concat(ls(t.serverSyncTree_,s,r));const o=Wm(t,s);bo(t,o)}),t.onDisconnect_=Li(),qt(t.eventQueue_,$(),i)}function Fm(t,e,n){let i;F(e._path)===".info"?i=zl(t.infoSyncTree_,e,n):i=zl(t.serverSyncTree_,e,n),Cu(t.eventQueue_,e._path,i)}function Gl(t,e,n){let i;F(e._path)===".info"?i=_r(t.infoSyncTree_,e,n):i=_r(t.serverSyncTree_,e,n),Cu(t.eventQueue_,e._path,i)}function Um(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Am)}function Iu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_e(n,...e)}function wu(t,e,n){return au(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function Eo(t,e=t.transactionQueueTree_){if(e||us(t,e),wn(e)){const n=Su(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Bm(t,ci(e),n)}else fu(e)&&cs(e,n=>{Eo(t,n)})}function Bm(t,e,n){const i=n.map(c=>c.currentWriteId),s=wu(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];C(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=we(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Iu(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(en(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();us(t,vo(t.transactionQueueTree_,e)),Eo(t,t.transactionQueueTree_),qt(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)oi(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Re("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}bo(t,e)}},o)}function bo(t,e){const n=Tu(t,e),i=ci(n),s=Su(t,n);return Hm(t,s,i),i}function Hm(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=we(n,a.path);let h=!1,u;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,s=s.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=xm)h=!0,u="maxretry",s=s.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else{const f=wu(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){mu("transaction failed: Data returned ",g,a.path);let b=ge(g);typeof g=="object"&&g!=null&&lt(g,".priority")||(b=b.updatePriority(f.getPriority()));const R=a.currentWriteId,P=bu(t),le=ym(b,f,P);a.currentOutputSnapshotRaw=b,a.currentOutputSnapshotResolved=le,a.currentWriteId=Mm(t),o.splice(o.indexOf(R),1),s=s.concat(sm(t.serverSyncTree_,a.path,le,a.currentWriteId,a.applyLocally)),s=s.concat(en(t.serverSyncTree_,R,!0))}else h=!0,u="nodata",s=s.concat(en(t.serverSyncTree_,a.currentWriteId,!0))}qt(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(u),!1,null))))}us(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)oi(i[l]);Eo(t,t.transactionQueueTree_)}function Tu(t,e){let n,i=t.transactionQueueTree_;for(n=F(e);n!==null&&wn(i)===void 0;)i=vo(i,n),e=X(e),n=F(e);return i}function Su(t,e){const n=[];return Nu(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Nu(t,e,n){const i=wn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);cs(e,s=>{Nu(t,s,n)})}function us(t,e){const n=wn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,du(e,n.length>0?n:void 0)}cs(e,i=>{us(t,i)})}function Wm(t,e){const n=ci(Tu(t,e)),i=vo(t.transactionQueueTree_,e);return Cm(i,s=>{Ms(t,s)}),Ms(t,i),pu(i,s=>{Ms(t,s)}),n}function Ms(t,e){const n=wn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(en(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?du(e,void 0):n.length=r+1,qt(t.eventQueue_,ci(e),s);for(let o=0;o<i.length;o++)oi(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Vm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Re(`Invalid query segment '${n}' in query '${t}'`)}return e}const Yl=function(t,e){const n=zm(t),i=n.namespace;n.domain==="firebase.com"&&Bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||t_();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new f_(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Y(n.pathString)}},zm=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=$m(t.substring(h,u)));const f=Vm(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class Au{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return U(this._path)?null:Uc(this._path)}get ref(){return new at(this._repo,this._path)}get _queryIdentifier(){const e=Ol(this._queryParams),n=Yr(e);return n==="{}"?"default":n}get _queryObject(){return Ol(this._queryParams)}isEqual(e){if(e=jt(e),!(e instanceof Io))return!1;const n=this._repo===e._repo,i=Zr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+B_(this._path)}}class at extends Io{constructor(e,n){super(e,n,new io,!1)}get parent(){const e=Hc(this._path);return e===null?null:new at(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ti{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),i=zi(this.ref,e);return new ti(this._node.getChild(n),i,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ti(s,zi(this.ref,i),oe)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ql(t,e){return t=jt(t),t._checkNotDeleted("ref"),e!==void 0?zi(t._root,e):t._root}function zi(t,e){return t=jt(t),F(t._path)===null?Tm("child","path",e,!1):yu("child","path",e,!1),new at(t._repo,ae(t._path,e))}class wo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Ru("value",this,new ti(e.snapshotNode,new at(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Au(this,e,n):null}matches(e){return e instanceof wo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class To{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Au(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const i=zi(new at(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Ru(e.type,this,new ti(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof To?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xu(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const a=n,c=(h,u)=>{Gl(t._repo,t,l),a(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new jm(n,r||void 0),l=e==="value"?new wo(o):new To(e,o);return Fm(t._repo,t,l),()=>Gl(t._repo,t,l)}function Km(t,e,n,i){return xu(t,"value",e,n,i)}function qm(t,e,n,i){return xu(t,"child_added",e,n,i)}Yg(at);tm(at);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="FIREBASE_DATABASE_EMULATOR_HOST",mr={};let Ym=!1;function Qm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_e("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Yl(r,s),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[Gm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Yl(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const h=s&&a?new or(or.OWNER):new d_(t.name,t.options,e);Sm("Invalid Firebase Database URL",o),U(o.path)||Bt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Xm(l,t,h,new h_(t.name,n));return new Zm(u,t)}function Jm(t,e){const n=mr[e];(!n||n[t.key]!==t)&&Bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Um(t),delete n[t.key]}function Xm(t,e,n,i){let s=mr[e.name];s||(s={},mr[e.name]=s);let r=s[t.toURLString()];return r&&Bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new km(t,Ym,n,i),s[t.toURLString()]=r,r}class Zm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Om(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new at(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Jm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bt("Cannot call "+e+" on a deleted database.")}}function ey(t=Hp(),e){return Lp(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){Qp(Gr),_n(new Lt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Qm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),gt(_l,gl,t),gt(_l,gl,"esm2017")}st.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};st.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ty();var ku=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const ny={class:"box"},iy=Lr({__name:"checkCom",props:{placeName:null,checkIn:null,checkOut:null},setup(t){return(e,n)=>(Pn(),Dn("div",ny,[Pt("h1",null,_s(t.placeName),1),Pt("h2",null,"\u7C3D\u5230\u4EBA\u6578\uFF1A"+_s(t.checkIn),1),Pt("h2",null,"\u7C3D\u9000\u4EBA\u6578\uFF1A"+_s(t.checkOut),1)]))}});var sy=ku(iy,[["__scopeId","data-v-f083322c"]]);const ry={class:"row"},oy={class:"col-sm-4",style:{padding:"5px"}},ly=Lr({__name:"MainPage",setup(t){const e="NFC",n=ey(),i=Ql(n,e),s=Dh({});let r=[],o=[];Km(Ql(n,"setting"),h=>{const u=h.val();console.log(u),r=u.places,r.forEach(f=>{f.length>0&&(s.value[f]={checkIn:0,checkOut:0})}),o=u.specials.filter(f=>f.length>0)},{onlyOnce:!0});let l={},a={};qm(i,h=>{c(h.val())});function c(h){const u=h.serialNumber,f=h.placeName;console.log(h),u in l||(l[u]={}),f in l[u]||(l[u][f]=0),f in s.value&&(l[u][f]+=1,a[u]&&a[u]!=f&&l[u][a[u]]<=2&&(s.value[a[u]].checkOut+=1,l[u][a[u]]=3,a[u]=""),l[u][f]==1?(s.value[f].checkIn+=1,a[u]=f):l[u][f]==2?(a[u]=f,o.includes(f)&&(s.value[f].checkOut+=1,l[u][f]=3)):l[u][f]==3&&(s.value[f].checkOut+=1,a[u]=""))}return(h,u)=>(Pn(),Dn("div",ry,[(Pn(!0),Dn(ke,null,vd(s.value,(f,g,b)=>(Pn(),Dn("div",oy,[it(sy,{placeName:g,"check-in":f.checkIn,"check-out":f.checkOut},null,8,["placeName","check-in","check-out"])]))),256))]))}});var ay="firebase",cy="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt(ay,cy,"app");function Ou(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Pu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uy=Pu,Du=new ii("auth","Firebase",Pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Kr("@firebase/auth");function wi(t,...e){Jl.logLevel<=G.ERROR&&Jl.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,...e){throw So(t,...e)}function Mu(t,...e){return So(t,...e)}function hy(t,e,n){const i=Object.assign(Object.assign({},uy()),{[e]:n});return new ii("auth","Firebase",i).create(e,{appName:t.name})}function So(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Du.create(t,...e)}function z(t,e,...n){if(!t)throw So(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wi(e),new Error(e)}function ji(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Map;function kt(t){ji(t instanceof Function,"Expected a class definition");let e=Zl.get(t);return e?(ji(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zl.set(t,e),e)}function dy(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function fy(){return ea()==="http:"||ea()==="https:"}function ea(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||Af()||"connection"in navigator)?navigator.onLine:!0}function _y(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,ji(n>e,"Short delay should be less than long delay!"),this.isMobile=zr()||oc()}get(){return py()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t,e){ji(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new ui(3e4,6e4);async function Fu(t,e,n,i,s={}){return Uu(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=jr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Lu.fetch()(Bu(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Uu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},my),e);try{const s=new vy(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ci(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ci(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ci(t,"user-disabled",o);const h=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hy(t,h,c);Xl(t,h)}}catch(s){if(s instanceof zt)throw s;Xl(t,"network-request-failed")}}function Bu(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?gy(t.config,s):`${t.config.apiScheme}://${s}`}class vy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Mu(this.auth,"network-request-failed")),yy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ci(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Mu(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(t,e){return Fu(t,"POST","/v1/accounts:delete",e)}async function Ey(t,e){return Fu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function by(t,e=!1){const n=jt(t),i=await n.getIdToken(e),s=Hu(i);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Hn(Ls(s.auth_time)),issuedAtTime:Hn(Ls(s.iat)),expirationTime:Hn(Ls(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ls(t){return Number(t)*1e3}function Hu(t){var e;const[n,i,s]=t.split(".");if(n===void 0||i===void 0||s===void 0)return wi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xs(i);return r?JSON.parse(r):(wi("Failed to decode base64 JWT payload"),null)}catch(r){return wi("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Iy(t){const e=Hu(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof zt&&wy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function wy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){var e;const n=t.auth,i=await t.getIdToken(),s=await yr(t,Ey(n,{idToken:i}));z(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ry(r.providerUserInfo):[],l=Ny(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),h=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Wu(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Sy(t){const e=jt(t);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ny(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ry(t){return t.map(e=>{var{providerId:n}=e,i=Ou(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(t,e){const n=await Uu(t,{},async()=>{const i=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Bu(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Lu.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ay(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ni;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Ou(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return by(this,e)}reload(){return Sy(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ki(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,Cy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,h;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,le=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:j,emailVerified:Z,isAnonymous:fe,providerData:$e,stsTokenManager:Ve}=n;z(j&&Ve,e,"internal-error");const B=ni.fromJSON(this.name,Ve);z(typeof j=="string",e,"internal-error"),ht(u,e.name),ht(f,e.name),z(typeof Z=="boolean",e,"internal-error"),z(typeof fe=="boolean",e,"internal-error"),ht(g,e.name),ht(b,e.name),ht(S,e.name),ht(R,e.name),ht(P,e.name),ht(le,e.name);const Q=new cn({uid:j,auth:e,email:f,emailVerified:Z,displayName:u,isAnonymous:fe,photoURL:b,phoneNumber:g,tenantId:S,stsTokenManager:B,createdAt:P,lastLoginAt:le});return $e&&Array.isArray($e)&&(Q.providerData=$e.map(se=>Object.assign({},se))),R&&(Q._redirectEventId=R),Q}static async _fromIdTokenResponse(e,n,i=!1){const s=new ni;s.updateFromServerResponse(n);const r=new cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ki(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$u.type="NONE";const ta=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Fs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Fs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new un(kt(ta),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||kt(ta);const o=Fs(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){const u=cn._fromJSON(e,h);c!==r&&(l=u),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new un(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new un(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(Ly(e))return"Webos";if(ky(e))return"Safari";if((e.includes("chrome/")||Oy(e))&&!e.includes("edge/"))return"Chrome";if(Dy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xy(t=Qe()){return/firefox\//i.test(t)}function ky(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oy(t=Qe()){return/crios\//i.test(t)}function Py(t=Qe()){return/iemobile/i.test(t)}function Dy(t=Qe()){return/android/i.test(t)}function My(t=Qe()){return/blackberry/i.test(t)}function Ly(t=Qe()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e=[]){let n;switch(t){case"Browser":n=na(Qe());break;case"Worker":n=`${na(Qe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ia(this),this.idTokenSubscription=new ia(this),this.beforeStateQueue=new Fy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Du,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ki(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function By(t){return jt(t)}class ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uf(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new ui(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ui(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ui(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ui(5e3,15e3);var sa="@firebase/auth",ra="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $y(t){_n(new Lt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((l,a)=>{z(r&&!r.includes(":"),"invalid-api-key",{appName:l.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vu(t)},h=new Uy(l,a,c);return dy(h,n),h})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_n(new Lt("auth-internal",e=>{const n=By(e.getProvider("auth").getImmediate());return(i=>new Hy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(sa,ra,Wy(t)),gt(sa,ra,"esm2017")}$y("Browser");const Vy={apiKey:"AIzaSyAjr53uHeIDxD1uzRcnzKJyFAE6WVUlfn0",authDomain:"physical-examination.firebaseapp.com",databaseURL:"https://physical-examination-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"physical-examination",storageBucket:"physical-examination.appspot.com",messagingSenderId:"204950821656",appId:"1:204950821656:web:638bdba7e304b20c409c6d",measurementId:"G-SWY69F2NCT"};function zy(){return Bp(Vy)}const jy=t=>(Gh("data-v-f4f518fc"),t=t(),Yh(),t),Ky=jy(()=>Pt("main",null,null,-1)),qy=Lr({__name:"App",setup(t){return zy(),(e,n)=>(Pn(),Dn(ke,null,[Pt("header",null,[it(ly)]),Ky],64))}});var Gy=ku(qy,[["__scopeId","data-v-f4f518fc"]]);wf(Gy).mount("#app");
