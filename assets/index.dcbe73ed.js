const Ku=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};Ku();function wr(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const qu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gu=wr(qu);function ca(t){return!!t||t===""}function Tr(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=we(i)?Ju(i):Tr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(we(t))return t;if(ge(t))return t}}const Yu=/;(?![^(]*\))/g,Qu=/:(.+)/;function Ju(t){const e={};return t.split(Yu).forEach(n=>{if(n){const i=n.split(Qu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Sr(t){let e="";if(we(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const i=Sr(t[n]);i&&(e+=i+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ri=t=>we(t)?t:t==null?"":V(t)||ge(t)&&(t.toString===fa||!z(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:ha(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!V(e)&&!pa(e)?String(e):e,ce={},_n=[],nt=()=>{},Xu=()=>!1,Zu=/^on[^a-z]/,ns=t=>Zu.test(t),Nr=t=>t.startsWith("onUpdate:"),ke=Object.assign,Ar=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eh=Object.prototype.hasOwnProperty,Y=(t,e)=>eh.call(t,e),V=Array.isArray,gn=t=>is(t)==="[object Map]",ha=t=>is(t)==="[object Set]",z=t=>typeof t=="function",we=t=>typeof t=="string",Rr=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",da=t=>ge(t)&&z(t.then)&&z(t.catch),fa=Object.prototype.toString,is=t=>fa.call(t),th=t=>is(t).slice(8,-1),pa=t=>is(t)==="[object Object]",xr=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xi=wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nh=/-(\w)/g,wn=ss(t=>t.replace(nh,(e,n)=>n?n.toUpperCase():"")),ih=/\B([A-Z])/g,On=ss(t=>t.replace(ih,"-$1").toLowerCase()),_a=ss(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cs=ss(t=>t?`on${_a(t)}`:""),Jn=(t,e)=>!Object.is(t,e),Es=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Di=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},sh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lo;const rh=()=>Lo||(Lo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ot;class oh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ot&&(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function lh(t,e=ot){e&&e.active&&e.effects.push(t)}const kr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ga=t=>(t.w&kt)>0,ma=t=>(t.n&kt)>0,ah=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kt},ch=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];ga(s)&&!ma(s)?s.delete(t):e[n++]=s,s.w&=~kt,s.n&=~kt}e.length=n}},Ws=new WeakMap;let Vn=0,kt=1;const Vs=30;let Je;const qt=Symbol(""),js=Symbol("");class Or{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lh(this,i)}run(){if(!this.active)return this.fn();let e=Je,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Je,Je=this,St=!0,kt=1<<++Vn,Vn<=Vs?ah(this):Fo(this),this.fn()}finally{Vn<=Vs&&ch(this),kt=1<<--Vn,Je=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(Fo(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const ya=[];function Pn(){ya.push(St),St=!1}function Dn(){const t=ya.pop();St=t===void 0?!0:t}function je(t,e,n){if(St&&Je){let i=Ws.get(t);i||Ws.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=kr()),va(s)}}function va(t,e){let n=!1;Vn<=Vs?ma(t)||(t.n|=kt,n=!ga(t)):n=!t.has(Je),n&&(t.add(Je),Je.deps.push(t))}function yt(t,e,n,i,s,r){const o=Ws.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&V(t))o.forEach((a,c)=>{(c==="length"||c>=i)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":V(t)?xr(n)&&l.push(o.get("length")):(l.push(o.get(qt)),gn(t)&&l.push(o.get(js)));break;case"delete":V(t)||(l.push(o.get(qt)),gn(t)&&l.push(o.get(js)));break;case"set":gn(t)&&l.push(o.get(qt));break}if(l.length===1)l[0]&&zs(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);zs(kr(a))}}function zs(t,e){const n=V(t)?t:[...t];for(const i of n)i.computed&&Uo(i);for(const i of n)i.computed||Uo(i)}function Uo(t,e){(t!==Je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const uh=wr("__proto__,__v_isRef,__isVue"),Ca=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rr)),hh=Pr(),dh=Pr(!1,!0),fh=Pr(!0),$o=ph();function ph(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=te(this);for(let r=0,o=this.length;r<o;r++)je(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pn();const i=te(this)[e].apply(this,n);return Dn(),i}}),t}function Pr(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?xh:Ta:e?wa:Ia).get(i))return i;const o=V(i);if(!t&&o&&Y($o,s))return Reflect.get($o,s,r);const l=Reflect.get(i,s,r);return(Rr(s)?Ca.has(s):uh(s))||(t||je(i,"get",s),e)?l:xe(l)?o&&xr(s)?l:l.value:ge(l)?t?Sa(l):Lr(l):l}}const _h=Ea(),gh=Ea(!0);function Ea(t=!1){return function(n,i,s,r){let o=n[i];if(Tn(o)&&xe(o)&&!xe(s))return!1;if(!t&&(!Mi(s)&&!Tn(s)&&(o=te(o),s=te(s)),!V(n)&&xe(o)&&!xe(s)))return o.value=s,!0;const l=V(n)&&xr(i)?Number(i)<n.length:Y(n,i),a=Reflect.set(n,i,s,r);return n===te(r)&&(l?Jn(s,o)&&yt(n,"set",i,s):yt(n,"add",i,s)),a}}function mh(t,e){const n=Y(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&yt(t,"delete",e,void 0),i}function yh(t,e){const n=Reflect.has(t,e);return(!Rr(e)||!Ca.has(e))&&je(t,"has",e),n}function vh(t){return je(t,"iterate",V(t)?"length":qt),Reflect.ownKeys(t)}const ba={get:hh,set:_h,deleteProperty:mh,has:yh,ownKeys:vh},Ch={get:fh,set(t,e){return!0},deleteProperty(t,e){return!0}},Eh=ke({},ba,{get:dh,set:gh}),Dr=t=>t,rs=t=>Reflect.getPrototypeOf(t);function Ei(t,e,n=!1,i=!1){t=t.__v_raw;const s=te(t),r=te(e);n||(e!==r&&je(s,"get",e),je(s,"get",r));const{has:o}=rs(s),l=i?Dr:n?Ur:Xn;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function bi(t,e=!1){const n=this.__v_raw,i=te(n),s=te(t);return e||(t!==s&&je(i,"has",t),je(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ii(t,e=!1){return t=t.__v_raw,!e&&je(te(t),"iterate",qt),Reflect.get(t,"size",t)}function Bo(t){t=te(t);const e=te(this);return rs(e).has.call(e,t)||(e.add(t),yt(e,"add",t,t)),this}function Ho(t,e){e=te(e);const n=te(this),{has:i,get:s}=rs(n);let r=i.call(n,t);r||(t=te(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Jn(e,o)&&yt(n,"set",t,e):yt(n,"add",t,e),this}function Wo(t){const e=te(this),{has:n,get:i}=rs(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&yt(e,"delete",t,void 0),r}function Vo(){const t=te(this),e=t.size!==0,n=t.clear();return e&&yt(t,"clear",void 0,void 0),n}function wi(t,e){return function(i,s){const r=this,o=r.__v_raw,l=te(o),a=e?Dr:t?Ur:Xn;return!t&&je(l,"iterate",qt),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function Ti(t,e,n){return function(...i){const s=this.__v_raw,r=te(s),o=gn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?Dr:e?Ur:Xn;return!e&&je(r,"iterate",a?js:qt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function It(t){return function(...e){return t==="delete"?!1:this}}function bh(){const t={get(r){return Ei(this,r)},get size(){return Ii(this)},has:bi,add:Bo,set:Ho,delete:Wo,clear:Vo,forEach:wi(!1,!1)},e={get(r){return Ei(this,r,!1,!0)},get size(){return Ii(this)},has:bi,add:Bo,set:Ho,delete:Wo,clear:Vo,forEach:wi(!1,!0)},n={get(r){return Ei(this,r,!0)},get size(){return Ii(this,!0)},has(r){return bi.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:wi(!0,!1)},i={get(r){return Ei(this,r,!0,!0)},get size(){return Ii(this,!0)},has(r){return bi.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ti(r,!1,!1),n[r]=Ti(r,!0,!1),e[r]=Ti(r,!1,!0),i[r]=Ti(r,!0,!0)}),[t,n,e,i]}const[Ih,wh,Th,Sh]=bh();function Mr(t,e){const n=e?t?Sh:Th:t?wh:Ih;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Y(n,s)&&s in i?n:i,s,r)}const Nh={get:Mr(!1,!1)},Ah={get:Mr(!1,!0)},Rh={get:Mr(!0,!1)},Ia=new WeakMap,wa=new WeakMap,Ta=new WeakMap,xh=new WeakMap;function kh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oh(t){return t.__v_skip||!Object.isExtensible(t)?0:kh(th(t))}function Lr(t){return Tn(t)?t:Fr(t,!1,ba,Nh,Ia)}function Ph(t){return Fr(t,!1,Eh,Ah,wa)}function Sa(t){return Fr(t,!0,Ch,Rh,Ta)}function Fr(t,e,n,i,s){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Oh(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function mn(t){return Tn(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Mi(t){return!!(t&&t.__v_isShallow)}function Na(t){return mn(t)||Tn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Aa(t){return Di(t,"__v_skip",!0),t}const Xn=t=>ge(t)?Lr(t):t,Ur=t=>ge(t)?Sa(t):t;function Ra(t){St&&Je&&(t=te(t),va(t.dep||(t.dep=kr())))}function xa(t,e){t=te(t),t.dep&&zs(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function Dh(t){return Mh(t,!1)}function Mh(t,e){return xe(t)?t:new Lh(t,e)}class Lh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:Xn(e)}get value(){return Ra(this),this._value}set value(e){const n=this.__v_isShallow||Mi(e)||Tn(e);e=n?e:te(e),Jn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xn(e),xa(this))}}function ka(t){return xe(t)?t.value:t}const Fh={get:(t,e,n)=>ka(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Oa(t){return mn(t)?t:new Proxy(t,Fh)}var Pa;class Uh{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pa]=!1,this._dirty=!0,this.effect=new Or(e,()=>{this._dirty||(this._dirty=!0,xa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=te(this);return Ra(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pa="__v_isReadonly";function $h(t,e,n=!1){let i,s;const r=z(t);return r?(i=t,s=nt):(i=t.get,s=t.set),new Uh(i,s,r||!s,n)}function Nt(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){os(r,e,n)}return s}function Ke(t,e,n,i){if(z(t)){const r=Nt(t,e,n,i);return r&&da(r)&&r.catch(o=>{os(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Ke(t[r],e,n,i));return s}function os(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Nt(a,null,10,[t,o,l]);return}}Bh(t,n,s,i)}function Bh(t,e,n,i=!0){console.error(t)}let Zn=!1,Ks=!1;const Re=[];let at=0;const yn=[];let ht=null,Wt=0;const Da=Promise.resolve();let $r=null;function Hh(t){const e=$r||Da;return t?e.then(this?t.bind(this):t):e}function Wh(t){let e=at+1,n=Re.length;for(;e<n;){const i=e+n>>>1;ei(Re[i])<t?e=i+1:n=i}return e}function Br(t){(!Re.length||!Re.includes(t,Zn&&t.allowRecurse?at+1:at))&&(t.id==null?Re.push(t):Re.splice(Wh(t.id),0,t),Ma())}function Ma(){!Zn&&!Ks&&(Ks=!0,$r=Da.then(Fa))}function Vh(t){const e=Re.indexOf(t);e>at&&Re.splice(e,1)}function jh(t){V(t)?yn.push(...t):(!ht||!ht.includes(t,t.allowRecurse?Wt+1:Wt))&&yn.push(t),Ma()}function jo(t,e=Zn?at+1:0){for(;e<Re.length;e++){const n=Re[e];n&&n.pre&&(Re.splice(e,1),e--,n())}}function La(t){if(yn.length){const e=[...new Set(yn)];if(yn.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,i)=>ei(n)-ei(i)),Wt=0;Wt<ht.length;Wt++)ht[Wt]();ht=null,Wt=0}}const ei=t=>t.id==null?1/0:t.id,zh=(t,e)=>{const n=ei(t)-ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fa(t){Ks=!1,Zn=!0,Re.sort(zh);const e=nt;try{for(at=0;at<Re.length;at++){const n=Re[at];n&&n.active!==!1&&Nt(n,null,14)}}finally{at=0,Re.length=0,La(),Zn=!1,$r=null,(Re.length||yn.length)&&Fa()}}function Kh(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ce;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||ce;f&&(s=n.map(_=>_.trim())),h&&(s=n.map(sh))}let l,a=i[l=Cs(e)]||i[l=Cs(wn(e))];!a&&r&&(a=i[l=Cs(On(e))]),a&&Ke(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ke(c,t,6,s)}}function Ua(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!z(t)){const a=c=>{const u=Ua(c,e,!0);u&&(l=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ge(t)&&i.set(t,null),null):(V(r)?r.forEach(a=>o[a]=null):ke(o,r),ge(t)&&i.set(t,o),o)}function ls(t,e){return!t||!ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,On(e))||Y(t,e))}let ct=null,as=null;function Li(t){const e=ct;return ct=t,as=t&&t.type.__scopeId||null,e}function qh(t){as=t}function Gh(){as=null}function Yh(t,e=ct,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&el(-1);const r=Li(e),o=t(...s);return Li(r),i._d&&el(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function bs(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:E,inheritAttrs:N}=t;let C,O;const pe=Li(t);try{if(n.shapeFlag&4){const Z=s||i;C=lt(u.call(Z,Z,h,r,_,f,E)),O=a}else{const Z=e;C=lt(Z.length>1?Z(r,{attrs:a,slots:l,emit:c}):Z(r,null)),O=e.props?a:Qh(a)}}catch(Z){jn.length=0,os(Z,t,1),C=gt(_t)}let J=C;if(O&&N!==!1){const Z=Object.keys(O),{shapeFlag:_e}=J;Z.length&&_e&7&&(o&&Z.some(Nr)&&(O=Jh(O,o)),J=Ot(J,O))}return n.dirs&&(J=Ot(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),C=J,Li(pe),C}const Qh=t=>{let e;for(const n in t)(n==="class"||n==="style"||ns(n))&&((e||(e={}))[n]=t[n]);return e},Jh=(t,e)=>{const n={};for(const i in t)(!Nr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Xh(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?zo(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ls(c,f))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?zo(i,o,c):!0:!!o;return!1}function zo(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ls(n,r))return!0}return!1}function Zh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ed=t=>t.__isSuspense;function td(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):jh(t)}function nd(t,e){if(Se){let n=Se.provides;const i=Se.parent&&Se.parent.provides;i===n&&(n=Se.provides=Object.create(i)),n[t]=e}}function Is(t,e,n=!1){const i=Se||ct;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(i.proxy):e}}const Ko={};function ws(t,e,n){return $a(t,e,n)}function $a(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ce){const l=Se;let a,c=!1,u=!1;if(xe(t)?(a=()=>t.value,c=Mi(t)):mn(t)?(a=()=>t,i=!0):V(t)?(u=!0,c=t.some(O=>mn(O)||Mi(O)),a=()=>t.map(O=>{if(xe(O))return O.value;if(mn(O))return dn(O);if(z(O))return Nt(O,l,2)})):z(t)?e?a=()=>Nt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ke(t,l,3,[f])}:a=nt,e&&i){const O=a;a=()=>dn(O())}let h,f=O=>{h=C.onStop=()=>{Nt(O,l,4)}};if(ni)return f=nt,e?n&&Ke(e,l,3,[a(),u?[]:void 0,f]):a(),nt;let _=u?[]:Ko;const E=()=>{if(!!C.active)if(e){const O=C.run();(i||c||(u?O.some((pe,J)=>Jn(pe,_[J])):Jn(O,_)))&&(h&&h(),Ke(e,l,3,[O,_===Ko?void 0:_,f]),_=O)}else C.run()};E.allowRecurse=!!e;let N;s==="sync"?N=E:s==="post"?N=()=>Fe(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),N=()=>Br(E));const C=new Or(a,N);return e?n?E():_=C.run():s==="post"?Fe(C.run.bind(C),l&&l.suspense):C.run(),()=>{C.stop(),l&&l.scope&&Ar(l.scope.effects,C)}}function id(t,e,n){const i=this.proxy,s=we(t)?t.includes(".")?Ba(i,t):()=>i[t]:t.bind(i,i);let r;z(e)?r=e:(r=e.handler,n=e);const o=Se;Sn(this);const l=$a(s,r.bind(i),n);return o?Sn(o):Gt(),l}function Ba(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function dn(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))dn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)dn(t[n],e);else if(ha(t)||gn(t))t.forEach(n=>{dn(n,e)});else if(pa(t))for(const n in t)dn(t[n],e);return t}function sd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ja(()=>{t.isMounted=!0}),za(()=>{t.isUnmounting=!0}),t}const ze=[Function,Array],rd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},setup(t,{slots:e}){const n=zd(),i=sd();let s;return()=>{const r=e.default&&Wa(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const N of r)if(N.type!==_t){o=N;break}}const l=te(t),{mode:a}=l;if(i.isLeaving)return Ts(o);const c=qo(o);if(!c)return Ts(o);const u=qs(c,l,i,n);Gs(c,u);const h=n.subTree,f=h&&qo(h);let _=!1;const{getTransitionKey:E}=c.type;if(E){const N=E();s===void 0?s=N:N!==s&&(s=N,_=!0)}if(f&&f.type!==_t&&(!Vt(c,f)||_)){const N=qs(f,l,i,n);if(Gs(f,N),a==="out-in")return i.isLeaving=!0,N.afterLeave=()=>{i.isLeaving=!1,n.update()},Ts(o);a==="in-out"&&c.type!==_t&&(N.delayLeave=(C,O,pe)=>{const J=Ha(i,f);J[String(f.key)]=f,C._leaveCb=()=>{O(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=pe})}return o}}},od=rd;function Ha(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function qs(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:E,onBeforeAppear:N,onAppear:C,onAfterAppear:O,onAppearCancelled:pe}=e,J=String(t.key),Z=Ha(n,t),_e=(j,H)=>{j&&Ke(j,i,9,H)},ye=(j,H)=>{const U=H[1];_e(j,H),V(j)?j.every(ve=>ve.length<=1)&&U():j.length<=1&&U()},Me={mode:r,persisted:o,beforeEnter(j){let H=l;if(!n.isMounted)if(s)H=N||l;else return;j._leaveCb&&j._leaveCb(!0);const U=Z[J];U&&Vt(t,U)&&U.el._leaveCb&&U.el._leaveCb(),_e(H,[j])},enter(j){let H=a,U=c,ve=u;if(!n.isMounted)if(s)H=C||a,U=O||c,ve=pe||u;else return;let Le=!1;const $=j._enterCb=k=>{Le||(Le=!0,k?_e(ve,[j]):_e(U,[j]),Me.delayedLeave&&Me.delayedLeave(),j._enterCb=void 0)};H?ye(H,[j,$]):$()},leave(j,H){const U=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return H();_e(h,[j]);let ve=!1;const Le=j._leaveCb=$=>{ve||(ve=!0,H(),$?_e(E,[j]):_e(_,[j]),j._leaveCb=void 0,Z[U]===t&&delete Z[U])};Z[U]=t,f?ye(f,[j,Le]):Le()},clone(j){return qs(j,e,n,i)}};return Me}function Ts(t){if(cs(t))return t=Ot(t),t.children=null,t}function qo(t){return cs(t)?t.children?t.children[0]:void 0:t}function Gs(t,e){t.shapeFlag&6&&t.component?Gs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wa(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ue?(o.patchFlag&128&&s++,i=i.concat(Wa(o.children,e,l))):(e||o.type!==_t)&&i.push(l!=null?Ot(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Hr(t){return z(t)?{setup:t,name:t.name}:t}const ki=t=>!!t.type.__asyncLoader,cs=t=>t.type.__isKeepAlive;function ld(t,e){Va(t,"a",e)}function ad(t,e){Va(t,"da",e)}function Va(t,e,n=Se){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(us(e,i,n),n){let s=n.parent;for(;s&&s.parent;)cs(s.parent.vnode)&&cd(i,e,n,s),s=s.parent}}function cd(t,e,n,i){const s=us(e,t,i,!0);Ka(()=>{Ar(i[e],s)},n)}function us(t,e,n=Se,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pn(),Sn(n);const l=Ke(e,n,t,o);return Gt(),Dn(),l});return i?s.unshift(r):s.push(r),r}}const vt=t=>(e,n=Se)=>(!ni||t==="sp")&&us(t,e,n),ud=vt("bm"),ja=vt("m"),hd=vt("bu"),dd=vt("u"),za=vt("bum"),Ka=vt("um"),fd=vt("sp"),pd=vt("rtg"),_d=vt("rtc");function gd(t,e=Se){us("ec",t,e)}function Ft(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Pn(),Ke(a,n,8,[t.el,l,t,e]),Dn())}}const md=Symbol();function Ys(t,e,n,i){let s;const r=n&&n[i];if(V(t)||we(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ge(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}const Qs=t=>t?nc(t)?Kr(t)||t.proxy:Qs(t.parent):null,Fi=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qs(t.parent),$root:t=>Qs(t.root),$emit:t=>t.emit,$options:t=>Wr(t),$forceUpdate:t=>t.f||(t.f=()=>Br(t.update)),$nextTick:t=>t.n||(t.n=Hh.bind(t.proxy)),$watch:t=>id.bind(t)}),yd={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==ce&&Y(i,e))return o[e]=1,i[e];if(s!==ce&&Y(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Y(c,e))return o[e]=3,r[e];if(n!==ce&&Y(n,e))return o[e]=4,n[e];Js&&(o[e]=0)}}const u=Fi[e];let h,f;if(u)return e==="$attrs"&&je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&Y(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,Y(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==ce&&Y(s,e)?(s[e]=n,!0):i!==ce&&Y(i,e)?(i[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&Y(t,o)||e!==ce&&Y(e,o)||(l=r[0])&&Y(l,o)||Y(i,o)||Y(Fi,o)||Y(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Js=!0;function vd(t){const e=Wr(t),n=t.proxy,i=t.ctx;Js=!1,e.beforeCreate&&Go(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:E,activated:N,deactivated:C,beforeDestroy:O,beforeUnmount:pe,destroyed:J,unmounted:Z,render:_e,renderTracked:ye,renderTriggered:Me,errorCaptured:j,serverPrefetch:H,expose:U,inheritAttrs:ve,components:Le,directives:$,filters:k}=e;if(c&&Cd(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const b in o){const x=o[b];z(x)&&(i[b]=x.bind(n))}if(s){const b=s.call(n,n);ge(b)&&(t.data=Lr(b))}if(Js=!0,r)for(const b in r){const x=r[b],F=z(x)?x.bind(n,n):z(x.get)?x.get.bind(n,n):nt,X=!z(x)&&z(x.set)?x.set.bind(n):nt,ae=Jd({get:F,set:X});Object.defineProperty(i,b,{enumerable:!0,configurable:!0,get:()=>ae.value,set:ie=>ae.value=ie})}if(l)for(const b in l)qa(l[b],i,n,b);if(a){const b=z(a)?a.call(n):a;Reflect.ownKeys(b).forEach(x=>{nd(x,b[x])})}u&&Go(u,t,"c");function D(b,x){V(x)?x.forEach(F=>b(F.bind(n))):x&&b(x.bind(n))}if(D(ud,h),D(ja,f),D(hd,_),D(dd,E),D(ld,N),D(ad,C),D(gd,j),D(_d,ye),D(pd,Me),D(za,pe),D(Ka,Z),D(fd,H),V(U))if(U.length){const b=t.exposed||(t.exposed={});U.forEach(x=>{Object.defineProperty(b,x,{get:()=>n[x],set:F=>n[x]=F})})}else t.exposed||(t.exposed={});_e&&t.render===nt&&(t.render=_e),ve!=null&&(t.inheritAttrs=ve),Le&&(t.components=Le),$&&(t.directives=$)}function Cd(t,e,n=nt,i=!1){V(t)&&(t=Xs(t));for(const s in t){const r=t[s];let o;ge(r)?"default"in r?o=Is(r.from||s,r.default,!0):o=Is(r.from||s):o=Is(r),xe(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Go(t,e,n){Ke(V(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qa(t,e,n,i){const s=i.includes(".")?Ba(n,i):()=>n[i];if(we(t)){const r=e[t];z(r)&&ws(s,r)}else if(z(t))ws(s,t.bind(n));else if(ge(t))if(V(t))t.forEach(r=>qa(r,e,n,i));else{const r=z(t.handler)?t.handler.bind(n):e[t.handler];z(r)&&ws(s,r,t)}}function Wr(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>Ui(a,c,o,!0)),Ui(a,e,o)),ge(e)&&r.set(e,a),a}function Ui(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ui(t,r,n,!0),s&&s.forEach(o=>Ui(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=Ed[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ed={data:Yo,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:$t,directives:$t,watch:Id,provide:Yo,inject:bd};function Yo(t,e){return e?t?function(){return ke(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function bd(t,e){return $t(Xs(t),Xs(e))}function Xs(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?ke(ke(Object.create(null),t),e):e}function Id(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const i in e)n[i]=De(t[i],e[i]);return n}function wd(t,e,n,i=!1){const s={},r={};Di(r,hs,1),t.propsDefaults=Object.create(null),Ga(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Ph(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Td(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=te(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ls(t.emitsOptions,f))continue;const _=e[f];if(a)if(Y(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const E=wn(f);s[E]=Zs(a,l,E,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Ga(t,e,s,r)&&(c=!0);let u;for(const h in l)(!e||!Y(e,h)&&((u=On(h))===h||!Y(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Zs(a,l,h,void 0,t,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!Y(e,h)&&!0)&&(delete r[h],c=!0)}c&&yt(t,"set","$attrs")}function Ga(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(xi(a))continue;const c=e[a];let u;s&&Y(s,u=wn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ls(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=te(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zs(s,a,h,c[h],t,!Y(c,h))}}return o}function Zs(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=Y(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&z(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(Sn(s),i=c[n]=a.call(null,e),Gt())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===On(n))&&(i=!0))}return i}function Ya(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!z(t)){const u=h=>{a=!0;const[f,_]=Ya(h,e,!0);ke(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ge(t)&&i.set(t,_n),_n;if(V(r))for(let u=0;u<r.length;u++){const h=wn(r[u]);Qo(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=wn(u);if(Qo(h)){const f=r[u],_=o[h]=V(f)||z(f)?{type:f}:f;if(_){const E=Zo(Boolean,_.type),N=Zo(String,_.type);_[0]=E>-1,_[1]=N<0||E<N,(E>-1||Y(_,"default"))&&l.push(h)}}}const c=[o,l];return ge(t)&&i.set(t,c),c}function Qo(t){return t[0]!=="$"}function Jo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Xo(t,e){return Jo(t)===Jo(e)}function Zo(t,e){return V(e)?e.findIndex(n=>Xo(n,t)):z(e)&&Xo(e,t)?0:-1}const Qa=t=>t[0]==="_"||t==="$stable",Vr=t=>V(t)?t.map(lt):[lt(t)],Sd=(t,e,n)=>{if(e._n)return e;const i=Yh((...s)=>Vr(e(...s)),n);return i._c=!1,i},Ja=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Qa(s))continue;const r=t[s];if(z(r))e[s]=Sd(s,r,i);else if(r!=null){const o=Vr(r);e[s]=()=>o}}},Xa=(t,e)=>{const n=Vr(e);t.slots.default=()=>n},Nd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Di(e,"_",n)):Ja(e,t.slots={})}else t.slots={},e&&Xa(t,e);Di(t.slots,hs,1)},Ad=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ce;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ke(s,e),!n&&l===1&&delete s._):(r=!e.$stable,Ja(e,s)),o=e}else e&&(Xa(t,e),o={default:1});if(r)for(const l in s)!Qa(l)&&!(l in o)&&delete s[l]};function Za(){return{app:null,config:{isNativeTag:Xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function xd(t,e){return function(i,s=null){z(i)||(i=Object.assign({},i)),s!=null&&!ge(s)&&(s=null);const r=Za(),o=new Set;let l=!1;const a=r.app={_uid:Rd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(a,...u)):z(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=gt(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Kr(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function er(t,e,n,i,s=!1){if(V(t)){t.forEach((f,_)=>er(f,e&&(V(e)?e[_]:e),n,i,s));return}if(ki(i)&&!s)return;const r=i.shapeFlag&4?Kr(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(we(c)?(u[c]=null,Y(h,c)&&(h[c]=null)):xe(c)&&(c.value=null)),z(a))Nt(a,l,12,[o,u]);else{const f=we(a),_=xe(a);if(f||_){const E=()=>{if(t.f){const N=f?u[a]:a.value;s?V(N)&&Ar(N,r):V(N)?N.includes(r)||N.push(r):f?(u[a]=[r],Y(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,Y(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Fe(E,n)):E()}}}const Fe=td;function kd(t){return Od(t)}function Od(t,e){const n=rh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=nt,cloneNode:E,insertStaticContent:N}=t,C=(d,p,g,y=null,m=null,T=null,R=!1,w=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Vt(d,p)&&(y=Ye(d),he(d,m,T,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:v,ref:M,shapeFlag:P}=p;switch(v){case jr:O(d,p,g,y);break;case _t:pe(d,p,g,y);break;case Ss:d==null&&J(p,g,y,R);break;case Ue:$(d,p,g,y,m,T,R,w,S);break;default:P&1?ye(d,p,g,y,m,T,R,w,S):P&6?k(d,p,g,y,m,T,R,w,S):(P&64||P&128)&&v.process(d,p,g,y,m,T,R,w,S,Pe)}M!=null&&m&&er(M,d&&d.ref,T,p||d,!p)},O=(d,p,g,y)=>{if(d==null)i(p.el=l(p.children),g,y);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},pe=(d,p,g,y)=>{d==null?i(p.el=a(p.children||""),g,y):p.el=d.el},J=(d,p,g,y)=>{[d.el,d.anchor]=N(d.children,p,g,y,d.el,d.anchor)},Z=({el:d,anchor:p},g,y)=>{let m;for(;d&&d!==p;)m=f(d),i(d,g,y),d=m;i(p,g,y)},_e=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),s(d),d=g;s(p)},ye=(d,p,g,y,m,T,R,w,S)=>{R=R||p.type==="svg",d==null?Me(p,g,y,m,T,R,w,S):U(d,p,m,T,R,w,S)},Me=(d,p,g,y,m,T,R,w)=>{let S,v;const{type:M,props:P,shapeFlag:L,transition:W,patchFlag:Q,dirs:se}=d;if(d.el&&E!==void 0&&Q===-1)S=d.el=E(d.el);else{if(S=d.el=o(d.type,T,P&&P.is,P),L&8?u(S,d.children):L&16&&H(d.children,S,null,y,m,T&&M!=="foreignObject",R,w),se&&Ft(d,null,y,"created"),P){for(const de in P)de!=="value"&&!xi(de)&&r(S,de,null,P[de],T,d.children,y,m,Oe);"value"in P&&r(S,"value",null,P.value),(v=P.onVnodeBeforeMount)&&rt(v,y,d)}j(S,d,d.scopeId,R,y)}se&&Ft(d,null,y,"beforeMount");const re=(!m||m&&!m.pendingBranch)&&W&&!W.persisted;re&&W.beforeEnter(S),i(S,p,g),((v=P&&P.onVnodeMounted)||re||se)&&Fe(()=>{v&&rt(v,y,d),re&&W.enter(S),se&&Ft(d,null,y,"mounted")},m)},j=(d,p,g,y,m)=>{if(g&&_(d,g),y)for(let T=0;T<y.length;T++)_(d,y[T]);if(m){let T=m.subTree;if(p===T){const R=m.vnode;j(d,R,R.scopeId,R.slotScopeIds,m.parent)}}},H=(d,p,g,y,m,T,R,w,S=0)=>{for(let v=S;v<d.length;v++){const M=d[v]=w?Tt(d[v]):lt(d[v]);C(null,M,p,g,y,m,T,R,w)}},U=(d,p,g,y,m,T,R)=>{const w=p.el=d.el;let{patchFlag:S,dynamicChildren:v,dirs:M}=p;S|=d.patchFlag&16;const P=d.props||ce,L=p.props||ce;let W;g&&Ut(g,!1),(W=L.onVnodeBeforeUpdate)&&rt(W,g,p,d),M&&Ft(p,d,g,"beforeUpdate"),g&&Ut(g,!0);const Q=m&&p.type!=="foreignObject";if(v?ve(d.dynamicChildren,v,w,g,y,Q,T):R||F(d,p,w,null,g,y,Q,T,!1),S>0){if(S&16)Le(w,p,P,L,g,y,m);else if(S&2&&P.class!==L.class&&r(w,"class",null,L.class,m),S&4&&r(w,"style",P.style,L.style,m),S&8){const se=p.dynamicProps;for(let re=0;re<se.length;re++){const de=se[re],Qe=P[de],un=L[de];(un!==Qe||de==="value")&&r(w,de,Qe,un,m,d.children,g,y,Oe)}}S&1&&d.children!==p.children&&u(w,p.children)}else!R&&v==null&&Le(w,p,P,L,g,y,m);((W=L.onVnodeUpdated)||M)&&Fe(()=>{W&&rt(W,g,p,d),M&&Ft(p,d,g,"updated")},y)},ve=(d,p,g,y,m,T,R)=>{for(let w=0;w<p.length;w++){const S=d[w],v=p[w],M=S.el&&(S.type===Ue||!Vt(S,v)||S.shapeFlag&70)?h(S.el):g;C(S,v,M,null,y,m,T,R,!0)}},Le=(d,p,g,y,m,T,R)=>{if(g!==y){for(const w in y){if(xi(w))continue;const S=y[w],v=g[w];S!==v&&w!=="value"&&r(d,w,v,S,R,p.children,m,T,Oe)}if(g!==ce)for(const w in g)!xi(w)&&!(w in y)&&r(d,w,g[w],null,R,p.children,m,T,Oe);"value"in y&&r(d,"value",g.value,y.value)}},$=(d,p,g,y,m,T,R,w,S)=>{const v=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:W}=p;W&&(w=w?w.concat(W):W),d==null?(i(v,g,y),i(M,g,y),H(p.children,g,M,m,T,R,w,S)):P>0&&P&64&&L&&d.dynamicChildren?(ve(d.dynamicChildren,L,g,m,T,R,w),(p.key!=null||m&&p===m.subTree)&&ec(d,p,!0)):F(d,p,g,M,m,T,R,w,S)},k=(d,p,g,y,m,T,R,w,S)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?m.ctx.activate(p,g,y,R,S):A(p,g,y,m,T,R,S):D(d,p,S)},A=(d,p,g,y,m,T,R)=>{const w=d.component=jd(d,y,m);if(cs(d)&&(w.ctx.renderer=Pe),Kd(w),w.asyncDep){if(m&&m.registerDep(w,b),!d.el){const S=w.subTree=gt(_t);pe(null,S,p,g)}return}b(w,d,p,g,m,T,R)},D=(d,p,g)=>{const y=p.component=d.component;if(Xh(d,p,g))if(y.asyncDep&&!y.asyncResolved){x(y,p,g);return}else y.next=p,Vh(y.update),y.update();else p.el=d.el,y.vnode=p},b=(d,p,g,y,m,T,R)=>{const w=()=>{if(d.isMounted){let{next:M,bu:P,u:L,parent:W,vnode:Q}=d,se=M,re;Ut(d,!1),M?(M.el=Q.el,x(d,M,R)):M=Q,P&&Es(P),(re=M.props&&M.props.onVnodeBeforeUpdate)&&rt(re,W,M,Q),Ut(d,!0);const de=bs(d),Qe=d.subTree;d.subTree=de,C(Qe,de,h(Qe.el),Ye(Qe),d,m,T),M.el=de.el,se===null&&Zh(d,de.el),L&&Fe(L,m),(re=M.props&&M.props.onVnodeUpdated)&&Fe(()=>rt(re,W,M,Q),m)}else{let M;const{el:P,props:L}=p,{bm:W,m:Q,parent:se}=d,re=ki(p);if(Ut(d,!1),W&&Es(W),!re&&(M=L&&L.onVnodeBeforeMount)&&rt(M,se,p),Ut(d,!0),P&&bt){const de=()=>{d.subTree=bs(d),bt(P,d.subTree,d,m,null)};re?p.type.__asyncLoader().then(()=>!d.isUnmounted&&de()):de()}else{const de=d.subTree=bs(d);C(null,de,g,y,d,m,T),p.el=de.el}if(Q&&Fe(Q,m),!re&&(M=L&&L.onVnodeMounted)){const de=p;Fe(()=>rt(M,se,de),m)}(p.shapeFlag&256||se&&ki(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Fe(d.a,m),d.isMounted=!0,p=g=y=null}},S=d.effect=new Or(w,()=>Br(v),d.scope),v=d.update=()=>S.run();v.id=d.uid,Ut(d,!0),v()},x=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Td(d,p.props,y,g),Ad(d,p.children,g),Pn(),jo(),Dn()},F=(d,p,g,y,m,T,R,w,S=!1)=>{const v=d&&d.children,M=d?d.shapeFlag:0,P=p.children,{patchFlag:L,shapeFlag:W}=p;if(L>0){if(L&128){ae(v,P,g,y,m,T,R,w,S);return}else if(L&256){X(v,P,g,y,m,T,R,w,S);return}}W&8?(M&16&&Oe(v,m,T),P!==v&&u(g,P)):M&16?W&16?ae(v,P,g,y,m,T,R,w,S):Oe(v,m,T,!0):(M&8&&u(g,""),W&16&&H(P,g,y,m,T,R,w,S))},X=(d,p,g,y,m,T,R,w,S)=>{d=d||_n,p=p||_n;const v=d.length,M=p.length,P=Math.min(v,M);let L;for(L=0;L<P;L++){const W=p[L]=S?Tt(p[L]):lt(p[L]);C(d[L],W,g,null,m,T,R,w,S)}v>M?Oe(d,m,T,!0,!1,P):H(p,g,y,m,T,R,w,S,P)},ae=(d,p,g,y,m,T,R,w,S)=>{let v=0;const M=p.length;let P=d.length-1,L=M-1;for(;v<=P&&v<=L;){const W=d[v],Q=p[v]=S?Tt(p[v]):lt(p[v]);if(Vt(W,Q))C(W,Q,g,null,m,T,R,w,S);else break;v++}for(;v<=P&&v<=L;){const W=d[P],Q=p[L]=S?Tt(p[L]):lt(p[L]);if(Vt(W,Q))C(W,Q,g,null,m,T,R,w,S);else break;P--,L--}if(v>P){if(v<=L){const W=L+1,Q=W<M?p[W].el:y;for(;v<=L;)C(null,p[v]=S?Tt(p[v]):lt(p[v]),g,Q,m,T,R,w,S),v++}}else if(v>L)for(;v<=P;)he(d[v],m,T,!0),v++;else{const W=v,Q=v,se=new Map;for(v=Q;v<=L;v++){const We=p[v]=S?Tt(p[v]):lt(p[v]);We.key!=null&&se.set(We.key,v)}let re,de=0;const Qe=L-Q+1;let un=!1,Po=0;const Un=new Array(Qe);for(v=0;v<Qe;v++)Un[v]=0;for(v=W;v<=P;v++){const We=d[v];if(de>=Qe){he(We,m,T,!0);continue}let st;if(We.key!=null)st=se.get(We.key);else for(re=Q;re<=L;re++)if(Un[re-Q]===0&&Vt(We,p[re])){st=re;break}st===void 0?he(We,m,T,!0):(Un[st-Q]=v+1,st>=Po?Po=st:un=!0,C(We,p[st],g,null,m,T,R,w,S),de++)}const Do=un?Pd(Un):_n;for(re=Do.length-1,v=Qe-1;v>=0;v--){const We=Q+v,st=p[We],Mo=We+1<M?p[We+1].el:y;Un[v]===0?C(null,st,g,Mo,m,T,R,w,S):un&&(re<0||v!==Do[re]?ie(st,g,Mo,2):re--)}}},ie=(d,p,g,y,m=null)=>{const{el:T,type:R,transition:w,children:S,shapeFlag:v}=d;if(v&6){ie(d.component.subTree,p,g,y);return}if(v&128){d.suspense.move(p,g,y);return}if(v&64){R.move(d,p,g,Pe);return}if(R===Ue){i(T,p,g);for(let P=0;P<S.length;P++)ie(S[P],p,g,y);i(d.anchor,p,g);return}if(R===Ss){Z(d,p,g);return}if(y!==2&&v&1&&w)if(y===0)w.beforeEnter(T),i(T,p,g),Fe(()=>w.enter(T),m);else{const{leave:P,delayLeave:L,afterLeave:W}=w,Q=()=>i(T,p,g),se=()=>{P(T,()=>{Q(),W&&W()})};L?L(T,Q,se):se()}else i(T,p,g)},he=(d,p,g,y=!1,m=!1)=>{const{type:T,props:R,ref:w,children:S,dynamicChildren:v,shapeFlag:M,patchFlag:P,dirs:L}=d;if(w!=null&&er(w,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const W=M&1&&L,Q=!ki(d);let se;if(Q&&(se=R&&R.onVnodeBeforeUnmount)&&rt(se,p,d),M&6)Mt(d.component,g,y);else{if(M&128){d.suspense.unmount(g,y);return}W&&Ft(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,m,Pe,y):v&&(T!==Ue||P>0&&P&64)?Oe(v,p,g,!1,!0):(T===Ue&&P&384||!m&&M&16)&&Oe(S,p,g),y&&qe(d)}(Q&&(se=R&&R.onVnodeUnmounted)||W)&&Fe(()=>{se&&rt(se,p,d),W&&Ft(d,null,p,"unmounted")},g)},qe=d=>{const{type:p,el:g,anchor:y,transition:m}=d;if(p===Ue){Ge(g,y);return}if(p===Ss){_e(d);return}const T=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:R,delayLeave:w}=m,S=()=>R(g,T);w?w(d.el,T,S):S()}else T()},Ge=(d,p)=>{let g;for(;d!==p;)g=f(d),s(d),d=g;s(p)},Mt=(d,p,g)=>{const{bum:y,scope:m,update:T,subTree:R,um:w}=d;y&&Es(y),m.stop(),T&&(T.active=!1,he(R,d,p,g)),w&&Fe(w,p),Fe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Oe=(d,p,g,y=!1,m=!1,T=0)=>{for(let R=T;R<d.length;R++)he(d[R],p,g,y,m)},Ye=d=>d.shapeFlag&6?Ye(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Te=(d,p,g)=>{d==null?p._vnode&&he(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),jo(),La(),p._vnode=d},Pe={p:C,um:he,m:ie,r:qe,mt:A,mc:H,pc:F,pbc:ve,n:Ye,o:t};let Lt,bt;return e&&([Lt,bt]=e(Pe)),{render:Te,hydrate:Lt,createApp:xd(Te,Lt)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ec(t,e,n=!1){const i=t.children,s=e.children;if(V(i)&&V(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Tt(s[r]),l.el=o.el),n||ec(o,l))}}function Pd(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Dd=t=>t.__isTeleport,Ue=Symbol(void 0),jr=Symbol(void 0),_t=Symbol(void 0),Ss=Symbol(void 0),jn=[];let Ze=null;function dt(t=!1){jn.push(Ze=t?null:[])}function Md(){jn.pop(),Ze=jn[jn.length-1]||null}let ti=1;function el(t){ti+=t}function Ld(t){return t.dynamicChildren=ti>0?Ze||_n:null,Md(),ti>0&&Ze&&Ze.push(t),t}function ft(t,e,n,i,s,r){return Ld(Qt(t,e,n,i,s,r,!0))}function Fd(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const hs="__vInternal",tc=({key:t})=>t!=null?t:null,Oi=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||xe(t)||z(t)?{i:ct,r:t,k:e,f:!!n}:t:null;function Qt(t,e=null,n=null,i=0,s=null,r=t===Ue?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tc(e),ref:e&&Oi(e),scopeId:as,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(zr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=we(n)?8:16),ti>0&&!o&&Ze&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ze.push(a),a}const gt=Ud;function Ud(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===md)&&(t=_t),Fd(t)){const l=Ot(t,e,!0);return n&&zr(l,n),ti>0&&!r&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(t)]=l:Ze.push(l)),l.patchFlag|=-2,l}if(Qd(t)&&(t=t.__vccOpts),e){e=$d(e);let{class:l,style:a}=e;l&&!we(l)&&(e.class=Sr(l)),ge(a)&&(Na(a)&&!V(a)&&(a=ke({},a)),e.style=Tr(a))}const o=we(t)?1:ed(t)?128:Dd(t)?64:ge(t)?4:z(t)?2:0;return Qt(t,e,n,i,s,o,r,!0)}function $d(t){return t?Na(t)||hs in t?ke({},t):t:null}function Ot(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Hd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&tc(l),ref:e&&e.ref?n&&s?V(s)?s.concat(Oi(e)):[s,Oi(e)]:Oi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor}}function Bd(t=" ",e=0){return gt(jr,null,t,e)}function lt(t){return t==null||typeof t=="boolean"?gt(_t):V(t)?gt(Ue,null,t.slice()):typeof t=="object"?Tt(t):gt(jr,null,String(t))}function Tt(t){return t.el===null||t.memo?t:Ot(t)}function zr(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(hs in e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),i&64?(n=16,e=[Bd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hd(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Sr([e.class,i.class]));else if(s==="style")e.style=Tr([e.style,i.style]);else if(ns(s)){const r=e[s],o=i[s];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function rt(t,e,n,i=null){Ke(t,e,7,[n,i])}const Wd=Za();let Vd=0;function jd(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Wd,r={uid:Vd++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ya(i,s),emitsOptions:Ua(i,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Kh.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const zd=()=>Se||ct,Sn=t=>{Se=t,t.scope.on()},Gt=()=>{Se&&Se.scope.off(),Se=null};function nc(t){return t.vnode.shapeFlag&4}let ni=!1;function Kd(t,e=!1){ni=e;const{props:n,children:i}=t.vnode,s=nc(t);wd(t,n,s,e),Nd(t,i);const r=s?qd(t,e):void 0;return ni=!1,r}function qd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Aa(new Proxy(t.ctx,yd));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Yd(t):null;Sn(t),Pn();const r=Nt(i,t,0,[t.props,s]);if(Dn(),Gt(),da(r)){if(r.then(Gt,Gt),e)return r.then(o=>{tl(t,o,e)}).catch(o=>{os(o,t,0)});t.asyncDep=r}else tl(t,r,e)}else ic(t,e)}function tl(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Oa(e)),ic(t,n)}let nl;function ic(t,e,n){const i=t.type;if(!t.render){if(!e&&nl&&!i.render){const s=i.template||Wr(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=ke(ke({isCustomElement:r,delimiters:l},o),a);i.render=nl(s,c)}}t.render=i.render||nt}Sn(t),Pn(),vd(t),Dn(),Gt()}function Gd(t){return new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}})}function Yd(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Gd(t))},slots:t.slots,emit:t.emit,expose:e}}function Kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(Aa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)}}))}function Qd(t){return z(t)&&"__vccOpts"in t}const Jd=(t,e)=>$h(t,e,ni),Xd="3.2.39",Zd="http://www.w3.org/2000/svg",jt=typeof document!="undefined"?document:null,il=jt&&jt.createElement("template"),ef={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?jt.createElementNS(Zd,t):jt.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{il.innerHTML=i?`<svg>${t}</svg>`:t;const l=il.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tf(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function nf(t,e,n){const i=t.style,s=we(n);if(n&&!s){for(const r in n)tr(i,r,n[r]);if(e&&!we(e))for(const r in e)n[r]==null&&tr(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const sl=/\s*!important$/;function tr(t,e,n){if(V(n))n.forEach(i=>tr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sf(t,e);sl.test(n)?t.setProperty(On(i),n.replace(sl,""),"important"):t[i]=n}}const rl=["Webkit","Moz","ms"],Ns={};function sf(t,e){const n=Ns[e];if(n)return n;let i=wn(e);if(i!=="filter"&&i in t)return Ns[e]=i;i=_a(i);for(let s=0;s<rl.length;s++){const r=rl[s]+i;if(r in t)return Ns[e]=r}return e}const ol="http://www.w3.org/1999/xlink";function rf(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ol,e.slice(6,e.length)):t.setAttributeNS(ol,e,n);else{const r=Gu(e);n==null||r&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function of(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ca(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[sc,lf]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let nr=0;const af=Promise.resolve(),cf=()=>{nr=0},uf=()=>nr||(af.then(cf),nr=sc());function hf(t,e,n,i){t.addEventListener(e,n,i)}function df(t,e,n,i){t.removeEventListener(e,n,i)}function ff(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=pf(e);if(i){const c=r[e]=_f(i,s);hf(t,l,c,a)}else o&&(df(t,l,o,a),r[e]=void 0)}}const ll=/(?:Once|Passive|Capture)$/;function pf(t){let e;if(ll.test(t)){e={};let i;for(;i=t.match(ll);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}function _f(t,e){const n=i=>{const s=i.timeStamp||sc();(lf||s>=n.attached-1)&&Ke(gf(i,n.value),e,5,[i])};return n.value=t,n.attached=uf(),n}function gf(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const al=/^on[a-z]/,mf=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?tf(t,i,s):e==="style"?nf(t,n,i):ns(e)?Nr(e)||ff(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yf(t,e,i,s))?of(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rf(t,e,i,s))};function yf(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&al.test(e)&&z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||al.test(e)&&we(n)?!1:e in t}const vf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};od.props;const Cf=ke({patchProp:mf},ef);let cl;function Ef(){return cl||(cl=kd(Cf))}const bf=(...t)=>{const e=Ef().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=If(i);if(!s)return;const r=e._component;!z(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function If(t){return we(t)?document.querySelector(t):t}/**
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
 */const rc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Mn(e)},Mn=function(t){return new Error("Firebase Database ("+rc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const oc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wf=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),i.push(n[u],n[h],n[f],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(i.push(f),c!==64){const _=l<<4&240|c>>2;if(i.push(_),h!==64){const E=c<<6&192|h;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lc=function(t){const e=oc(t);return qr.encodeByteArray(e,!0)},ac=function(t){return lc(t).replace(/\./g,"")},ir=function(t){try{return qr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tf(t){return cc(void 0,t)}function cc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Sf(n)||(t[n]=cc(t[n],e[n]));return t}function Sf(t){return t!=="__proto__"}/**
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
 */class Gr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ut(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Nf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hc(){return rc.NODE_ADMIN===!0}function Af(){return typeof indexedDB=="object"}function Rf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const xf="FirebaseError";class on extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=xf,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?kf(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new on(s,l,i)}}function kf(t,e){return t.replace(Of,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Of=/\{\$([^}]+)}/g;/**
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
 */function ii(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
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
 */const dc=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ii(ir(r[0])||""),n=ii(ir(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Pf=function(t){const e=dc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Df=function(t){const e=dc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $i(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(hl(r)&&hl(o)){if(!sr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function hl(t){return t!==null&&typeof t=="object"}/**
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
 */function Qr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Mf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Lf(t,e){const n=new Ff(t,e);return n.subscribe.bind(n)}class Ff{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Uf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=As),s.error===void 0&&(s.error=As),s.complete===void 0&&(s.complete=As);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function As(){}function fc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const $f=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ds=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ln(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class Bf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Gr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wf(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hf(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hf(t){return t===Bt?void 0:t}function Wf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const jf={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},zf=oe.INFO,Kf={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},qf=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Kf[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jr{constructor(e){this.name=e,this._logLevel=zf,this._logHandler=qf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Gf=(t,e)=>e.some(n=>t instanceof n);let dl,fl;function Yf(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qf(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pc=new WeakMap,rr=new WeakMap,_c=new WeakMap,Rs=new WeakMap,Xr=new WeakMap;function Jf(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pc.set(n,t)}).catch(()=>{}),Xr.set(e,t),e}function Xf(t){if(rr.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rr.set(t,e)}let or={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zf(t){or=t(or)}function ep(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(xs(this),e,...n);return _c.set(i,e.sort?e.sort():[e]),At(i)}:Qf().includes(t)?function(...e){return t.apply(xs(this),e),At(pc.get(this))}:function(...e){return At(t.apply(xs(this),e))}}function tp(t){return typeof t=="function"?ep(t):(t instanceof IDBTransaction&&Xf(t),Gf(t,Yf())?new Proxy(t,or):t)}function At(t){if(t instanceof IDBRequest)return Jf(t);if(Rs.has(t))return Rs.get(t);const e=tp(t);return e!==t&&(Rs.set(t,e),Xr.set(e,t)),e}const xs=t=>Xr.get(t);function np(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=At(o);return i&&o.addEventListener("upgradeneeded",a=>{i(At(o.result),a.oldVersion,a.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const ip=["get","getKey","getAll","getAllKeys","count"],sp=["put","add","delete","clear"],ks=new Map;function pl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=sp.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ip.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return ks.set(e,r),r}Zf(t=>({...t,get:(e,n,i)=>pl(e,n)||t.get(e,n,i),has:(e,n)=>!!pl(e,n)||t.has(e,n)}));/**
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
 */class rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(op(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function op(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lr="@firebase/app",_l="0.7.32";/**
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
 */const Xt=new Jr("@firebase/app"),lp="@firebase/app-compat",ap="@firebase/analytics-compat",cp="@firebase/analytics",up="@firebase/app-check-compat",hp="@firebase/app-check",dp="@firebase/auth",fp="@firebase/auth-compat",pp="@firebase/database",_p="@firebase/database-compat",gp="@firebase/functions",mp="@firebase/functions-compat",yp="@firebase/installations",vp="@firebase/installations-compat",Cp="@firebase/messaging",Ep="@firebase/messaging-compat",bp="@firebase/performance",Ip="@firebase/performance-compat",wp="@firebase/remote-config",Tp="@firebase/remote-config-compat",Sp="@firebase/storage",Np="@firebase/storage-compat",Ap="@firebase/firestore",Rp="@firebase/firestore-compat",xp="firebase",kp="9.9.4";/**
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
 */const gc="[DEFAULT]",Op={[lr]:"fire-core",[lp]:"fire-core-compat",[cp]:"fire-analytics",[ap]:"fire-analytics-compat",[hp]:"fire-app-check",[up]:"fire-app-check-compat",[dp]:"fire-auth",[fp]:"fire-auth-compat",[pp]:"fire-rtdb",[_p]:"fire-rtdb-compat",[gp]:"fire-fn",[mp]:"fire-fn-compat",[yp]:"fire-iid",[vp]:"fire-iid-compat",[Cp]:"fire-fcm",[Ep]:"fire-fcm-compat",[bp]:"fire-perf",[Ip]:"fire-perf-compat",[wp]:"fire-rc",[Tp]:"fire-rc-compat",[Sp]:"fire-gcs",[Np]:"fire-gcs-compat",[Ap]:"fire-fst",[Rp]:"fire-fst-compat","fire-js":"fire-js",[xp]:"fire-js-all"};/**
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
 */const Bi=new Map,ar=new Map;function Pp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(ar.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;ar.set(e,t);for(const n of Bi.values())Pp(n,t);return!0}function Dp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new fi("app","Firebase",Mp);/**
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
 */class Lp{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=kp;function Fp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:gc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});const s=Bi.get(i);if(s){if(sr(t,s.options)&&sr(n,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const r=new Vf(i);for(const l of ar.values())r.addComponent(l);const o=new Lp(t,n,r);return Bi.set(i,o),o}function Up(t=gc){const e=Bi.get(t);if(!e)throw Zt.create("no-app",{appName:t});return e}function Rt(t,e,n){var i;let s=(i=Op[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(l.join(" "));return}An(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $p="firebase-heartbeat-database",Bp=1,si="firebase-heartbeat-store";let Os=null;function mc(){return Os||(Os=np($p,Bp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),Os}async function Hp(t){var e;try{return(await mc()).transaction(si).objectStore(si).get(yc(t))}catch(n){if(n instanceof on)Xt.warn(n.message);else{const i=Zt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Xt.warn(i.message)}}}async function gl(t,e){var n;try{const s=(await mc()).transaction(si,"readwrite");return await s.objectStore(si).put(e,yc(t)),s.done}catch(i){if(i instanceof on)Xt.warn(i.message);else{const s=Zt.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Xt.warn(s.message)}}}function yc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wp=1024,Vp=30*24*60*60*1e3;class jp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ml();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Vp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ml(),{heartbeatsToSend:n,unsentEntries:i}=zp(this._heartbeatsCache.heartbeats),s=ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ml(){return new Date().toISOString().substring(0,10)}function zp(t,e=Wp){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),yl(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Af()?Rf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yl(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qp(t){An(new Jt("platform-logger",e=>new rp(e),"PRIVATE")),An(new Jt("heartbeat",e=>new jp(e),"PRIVATE")),Rt(lr,_l,t),Rt(lr,_l,"esm2017"),Rt("fire-js","")}qp("");const vl="@firebase/database",Cl="0.13.6";/**
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
 */let vc="";function Gp(t){vc=t}/**
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
 */class Yp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ii(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Qp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Cc=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Yp(e)}}catch{}return new Qp},zt=Cc("localStorage"),cr=Cc("sessionStorage");/**
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
 */const vn=new Jr("@firebase/database"),Jp=function(){let t=1;return function(){return t++}}(),Ec=function(t){const e=$f(t),n=new Mf;n.update(e);const i=n.digest();return qr.encodeByteArray(i)},pi=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=pi.apply(null,i):typeof i=="object"?e+=Ie(i):e+=i,e+=" "}return e};let Yt=null,El=!0;const Xp=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vn.logLevel=oe.VERBOSE,Yt=vn.log.bind(vn),e&&cr.set("logging_enabled",!0)):typeof t=="function"?Yt=t:(Yt=null,cr.remove("logging_enabled"))},Ne=function(...t){if(El===!0&&(El=!1,Yt===null&&cr.get("logging_enabled")===!0&&Xp(!0)),Yt){const e=pi.apply(null,t);Yt(e)}},_i=function(t){return function(...e){Ne(t,...e)}},ur=function(...t){const e="FIREBASE INTERNAL ERROR: "+pi(...t);vn.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${pi(...t)}`;throw vn.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+pi(...t);vn.warn(e)},Zp=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},e_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",tn="[MAX_NAME]",Ln=function(t,e){if(t===e)return 0;if(t===Rn||e===tn)return-1;if(e===Rn||t===tn)return 1;{const n=bl(t),i=bl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},t_=function(t,e){return t===e?0:t<e?-1:1},$n=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},eo=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ie(e[i]),n+=":",n+=eo(t[e[i]]);return n+="}",n},Ic=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wc=function(t){I(!bc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},n_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function s_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const r_=new RegExp("^-?(0*)\\d{1,10}$"),o_=-2147483648,l_=2147483647,bl=function(t){if(r_.test(t)){const e=Number(t);if(e>=o_&&e<=l_)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},a_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class c_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class u_{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class hr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hr.OWNER="owner";/**
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
 */const to="5",Tc="v",Sc="s",Nc="r",Ac="f",Rc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xc="ls",kc="p",dr="ac",Oc="websocket",Pc="long_polling";/**
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
 */class h_{constructor(e,n,i,s,r=!1,o="",l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function d_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dc(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let i;if(e===Oc)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pc)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);d_(t)&&(n.ns=t.namespace);const s=[];return He(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class f_{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Tf(this.counters_)}}/**
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
 */const Ps={},Ds={};function no(t){const e=t.toString();return Ps[e]||(Ps[e]=new f_),Ps[e]}function p_(t,e){const n=t.toString();return Ds[n]||(Ds[n]=e()),Ds[n]}/**
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
 */class __{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&gi(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Il="start",g_="close",m_="pLPCommand",y_="pRTLPCB",Mc="id",Lc="pw",Fc="ser",v_="cb",C_="seg",E_="ts",b_="d",I_="dframe",Uc=1870,$c=30,w_=Uc-$c,T_=25e3,S_=3e4;class fn{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_i(e),this.stats_=no(n),this.urlFn=a=>(this.appCheckToken&&(a[dr]=this.appCheckToken),Dc(n,Pc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new __(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(S_)),e_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new io((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Il)this.id=l,this.password=a;else if(o===g_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Il]="t",i[Fc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[v_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Tc]=to,this.transportSessionId&&(i[Sc]=this.transportSessionId),this.lastSessionId&&(i[xc]=this.lastSessionId),this.applicationId&&(i[kc]=this.applicationId),this.appCheckToken&&(i[dr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Rc.test(location.hostname)&&(i[Nc]=Ac);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!n_()&&!i_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=lc(n),s=Ic(i,w_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[I_]="t",i[Mc]=e,i[Lc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class io{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jp(),window[m_+this.uniqueCallbackIdentifier]=e,window[y_+this.uniqueCallbackIdentifier]=n,this.myIFrame=io.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mc]=this.myID,e[Lc]=this.myPW,e[Fc]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$c+i.length<=Uc;){const o=this.pendingSegs.shift();i=i+"&"+C_+s+"="+o.seg+"&"+E_+s+"="+o.ts+"&"+b_+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(T_)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const N_=16384,A_=45e3;let Hi=null;typeof MozWebSocket!="undefined"?Hi=MozWebSocket:typeof WebSocket!="undefined"&&(Hi=WebSocket);class Xe{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_i(this.connId),this.stats_=no(n),this.connURL=Xe.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Tc]=to,typeof location!="undefined"&&location.hostname&&Rc.test(location.hostname)&&(o[Nc]=Ac),n&&(o[Sc]=n),i&&(o[xc]=i),s&&(o[dr]=s),r&&(o[kc]=r),Dc(e,Oc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let i;hc(),this.mySock=new Hi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!Xe.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ii(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ic(n,N_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(A_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xe.responsesRequiredToBeHealthy=2;Xe.healthyTimeout=3e4;/**
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
 */class ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fn,Xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xe&&Xe.isAvailable();let i=n&&!Xe.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Xe];else{const s=this.transports_=[];for(const r of ri.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ri.globalTransportInitialized_=!1;/**
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
 */const R_=6e4,x_=5e3,k_=10*1024,O_=100*1024,Ms="t",wl="d",P_="s",Tl="r",D_="e",Sl="o",Nl="a",Al="n",Rl="p",M_="h";class L_{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_i("c:"+this.id+":"),this.transportManager_=new ri(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>O_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>k_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ms in e){const n=e[Ms];n===Nl?this.upgradeIfSecondaryHealthy_():n===Tl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$n("t",e),i=$n("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Al,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$n("t",e),i=$n("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$n(Ms,e);if(wl in e){const i=e[wl];if(n===M_)this.onHandshake_(i);else if(n===Al){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===P_?this.onConnectionShutdown_(i):n===Tl?this.onReset_(i):n===D_?ur("Server Error: "+i):n===Sl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ur("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),to!==i&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(x_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Bc{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Hc{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wi extends Hc{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Yr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wi}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xl=32,kl=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new le("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pt(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function Wc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function Ce(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof le)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new le(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=q(t),i=q(e);if(n===null)return e;if(n===i)return $e(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function so(t,e){if(Pt(t)!==Pt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function et(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Pt(t)>Pt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class U_{constructor(e,n){this.errorPrefix_=n,this.parts_=Vc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ds(this.parts_[i]);zc(this)}}function $_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ds(e),zc(t)}function B_(t){const e=t.parts_.pop();t.byteLength_-=ds(e),t.parts_.length>0&&(t.byteLength_-=1)}function zc(t){if(t.byteLength_>kl)throw new Error(t.errorPrefix_+"has a key path longer than "+kl+" bytes ("+t.byteLength_+").");if(t.parts_.length>xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xl+") or object contains a cycle "+Ht(t))}function Ht(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ro extends Hc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ro}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bn=1e3,H_=60*5*1e3,Ol=30*1e3,W_=1.3,V_=3e4,j_="server_kill",Pl=3;class mt extends Bc{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=mt.nextPersistentConnectionId_++,this.log_=_i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bn,this.maxReconnectDelay_=H_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ie(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Gr,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;mt.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const i=Nn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Df(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ol)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Pf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ur("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>V_&&(this.reconnectDelay_=Bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*W_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new L_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{Ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(j_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ve(h),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ul(this.interruptReasons_)&&(this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>eo(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new le(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pl&&(this.reconnectDelay_=Ol,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vc.replace(/\./g,"-")]=1,Yr()?e["framework.cordova"]=1:uc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wi.getInstance().currentlyOnline();return ul(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class fs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new K(Rn,e),s=new K(Rn,n);return this.compare(i,s)!==0}minPost(){return K.MIN}}/**
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
 */let Si;class Kc extends fs{static get __EMPTY_NODE(){return Si}static set __EMPTY_NODE(e){Si=e}compare(e,n){return Ln(e.name,n.name)}isDefinedOn(e){throw Mn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(tn,Si)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Si)}toString(){return".key"}}const Cn=new Kc;/**
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
 */class Ni{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:be.RED,this.left=s!=null?s:Be.EMPTY_NODE,this.right=r!=null?r:Be.EMPTY_NODE}copy(e,n,i,s,r){return new be(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class z_{copy(e,n,i,s,r){return this}insert(e,n,i){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ni(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new z_;/**
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
 */function K_(t,e){return Ln(t.name,e.name)}function oo(t,e){return Ln(t,e)}/**
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
 */let fr;function q_(t){fr=t}const qc=function(t){return typeof t=="number"?"number:"+wc(t):"string:"+t},Gc=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else I(t===fr||t.isEmpty(),"priority of unexpected type.");I(t===fr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Dl;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gc(this.priorityNode_)}static set __childrenNodeConstructor(e){Dl=e}static get __childrenNodeConstructor(){return Dl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:q(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=q(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wc(this.value_):e+=this.value_,this.lazyHash_=Ec(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Yc,Qc;function G_(t){Yc=t}function Y_(t){Qc=t}class Q_ extends fs{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ln(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(tn,new Ee("[PRIORITY-POST]",Qc))}makePost(e,n){const i=Yc(e);return new K(n,new Ee("[PRIORITY-POST]",i))}toString(){return".priority"}}const me=new Q_;/**
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
 */const J_=Math.log(2);class X_{constructor(e){const n=r=>parseInt(Math.log(r)/J_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vi=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new be(f,h.node,be.BLACK,null,null);{const _=parseInt(u/2,10)+a,E=s(a,_),N=s(_+1,c);return h=t[_],f=n?n(h):h,new be(f,h.node,be.BLACK,E,N)}},r=function(a){let c=null,u=null,h=t.length;const f=function(E,N){const C=h-E,O=h;h-=E;const pe=s(C+1,O),J=t[C],Z=n?n(J):J;_(new be(Z,J.node,N,null,pe))},_=function(E){c?(c.left=E,c=E):(u=E,c=E)};for(let E=0;E<a.count;++E){const N=a.nextBitIsOne(),C=Math.pow(2,a.count-(E+1));N?f(C,be.BLACK):(f(C,be.BLACK),f(C,be.RED))}return u},o=new X_(t.length),l=r(o);return new Be(i||e,l)};/**
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
 */let Ls;const hn={};class pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(hn&&me,"ChildrenNode.ts has not been loaded"),Ls=Ls||new pt({".priority":hn},{".priority":me}),Ls}get(e){const n=Nn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Vi(i,e.getCompare()):l=hn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new pt(u,c)}addToIndexes(e,n){const i=$i(this.indexes_,(s,r)=>{const o=Nn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===hn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Vi(l,o.getCompare())}else return hn;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new pt(i,this.indexSet_)}removeFromIndexes(e,n){const i=$i(this.indexes_,s=>{if(s===hn)return s;{const r=n.get(e.name);return r?s.remove(new K(e.name,r)):s}});return new pt(i,this.indexSet_)}}/**
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
 */let Hn;class B{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Gc(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hn||(Hn=new B(new Be(oo),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new K(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Hn:this.priorityNode_;return new B(s,o,r)}}updateChild(e,n){const i=q(e);if(i===null)return n;{I(q(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ue(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),i++,r&&B.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qc(this.getPriority().val())+":"),this.forEachChild(me,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ec(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,K.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mi?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(me),s=n.getIterator(me);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Z_ extends B{constructor(){super(new Be(oo),B.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const mi=new Z_;Object.defineProperties(K,{MIN:{value:new K(Rn,B.EMPTY_NODE)},MAX:{value:new K(tn,mi)}});Kc.__EMPTY_NODE=B.EMPTY_NODE;Ee.__childrenNodeConstructor=B;q_(mi);Y_(mi);/**
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
 */const eg=!0;function Ae(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Ae(e))}if(!(t instanceof Array)&&eg){const n=[];let i=!1;if(He(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ae(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=Vi(n,K_,o=>o.name,oo);if(i){const o=Vi(n,me.getCompare());return new B(r,Ae(e),new pt({".priority":o},{".priority":me}))}else return new B(r,Ae(e),pt.Default)}else{let n=B.EMPTY_NODE;return He(t,(i,s)=>{if(Ct(t,i)&&i.substring(0,1)!=="."){const r=Ae(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ae(e))}}G_(Ae);/**
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
 */class tg extends fs{constructor(e){super(),this.indexPath_=e,I(!G(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ln(e.name,n.name):r}makePost(e,n){const i=Ae(e),s=B.EMPTY_NODE.updateChild(this.indexPath_,i);return new K(n,s)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,mi);return new K(tn,e)}toString(){return Vc(this.indexPath_,0).join("/")}}/**
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
 */class ng extends fs{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ln(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const i=Ae(e);return new K(n,i)}toString(){return".value"}}const ig=new ng;/**
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
 */function Jc(t){return{type:"value",snapshotNode:t}}function xn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function oi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function li(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lo{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(oi(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(xn(n,i)):o.trackChildChange(li(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(me,(s,r)=>{n.hasChild(s)||i.trackChildChange(oi(s,r))}),n.isLeafNode()||n.forEachChild(me,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(li(s,r,o))}else i.trackChildChange(xn(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ai{constructor(e){this.indexedFilter_=new lo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ai.getStartPost_(e),this.endPost_=ai.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new K(n,i))||(i=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=B.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,l)=>{r.matches(new K(o,l))||(s=s.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class rg{constructor(e){this.rangedFilter_=new ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new K(n,i))||(i=B.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)s=s.updateImmediateChild(l.name,l.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(B.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:s=s.updateImmediateChild(h.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new K(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(li(n,i,h)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(oi(n,h));const N=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(xn(f.name,f.node)),N.updateImmediateChild(f.name,f.node)):N}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(oi(c.name,c.node)),r.trackChildChange(xn(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
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
 */class ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function og(t){return t.loadsAllData()?new lo(t.getIndex()):t.hasLimit()?new rg(t):new ai(t)}function Ml(t){const e={};if(t.isDefault())return e;let n;return t.index_===me?n="$priority":t.index_===ig?n="$value":t.index_===Cn?n="$key":(I(t.index_ instanceof tg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_&&(e.startAt=Ie(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ie(t.indexStartName_))),t.endSet_&&(e.endAt=Ie(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ie(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ll(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class ji extends Bc{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ji.getListenId_(e,i),l={};this.listens_[o]=l;const a=Ml(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Nn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=ji.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ml(e._queryParams),i=e._path.toString(),s=new Gr;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ii(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class lg{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zi(){return{value:null,children:new Map}}function Xc(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=q(e);t.children.has(i)||t.children.set(i,zi());const s=t.children.get(i);e=ue(e),Xc(s,e,n)}}function pr(t,e,n){t.value!==null?n(e,t.value):ag(t,(i,s)=>{const r=new le(e.toString()+"/"+i);pr(s,r,n)})}function ag(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class cg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Fl=10*1e3,ug=30*1e3,hg=5*60*1e3;class dg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cg(e);const i=Fl+(ug-Fl)*Math.random();zn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;He(e,(s,r)=>{r>0&&Ct(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*hg))}}/**
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
 */var tt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function Zc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ki{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=tt.ACK_USER_WRITE,this.source=Zc()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new Ki(ee(),n,this.revert)}}else return I(q(this.path)===e,"operationForChild called for unrelated child."),new Ki(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class ci{constructor(e,n){this.source=e,this.path=n,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new ci(this.source,ee()):new ci(this.source,ue(this.path))}}/**
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
 */class nn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=tt.OVERWRITE}operationForChild(e){return G(this.path)?new nn(this.source,ee(),this.snap.getImmediateChild(e)):new nn(this.source,ue(this.path),this.snap)}}/**
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
 */class ui{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=tt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new nn(this.source,ee(),n.value):new ui(this.source,ee(),n)}else return I(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class sn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class fg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(sg(o.childName,o.snapshotNode))}),Wn(t,s,"child_removed",e,i,n),Wn(t,s,"child_added",e,i,n),Wn(t,s,"child_moved",r,i,n),Wn(t,s,"child_changed",e,i,n),Wn(t,s,"value",e,i,n),s}function Wn(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>gg(t,l,a)),o.forEach(l=>{const a=_g(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function _g(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gg(t,e,n){if(e.childName==null||n.childName==null)throw Mn("Should only compare child_ events.");const i=new K(e.childName,e.snapshotNode),s=new K(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function ps(t,e){return{eventCache:t,serverCache:e}}function Kn(t,e,n,i){return ps(new sn(e,n,i),t.serverCache)}function eu(t,e,n,i){return ps(t.eventCache,new sn(e,n,i))}function _r(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Fs;const mg=()=>(Fs||(Fs=new Be(t_)),Fs);class fe{constructor(e,n=mg()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return He(e,(i,s)=>{n=n.set(new le(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(G(e))return null;{const i=q(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:Ce(new le(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=q(e),i=this.children.get(n);return i!==null?i.subtree(ue(e)):new fe(null)}}set(e,n){if(G(e))return new fe(n,this.children);{const i=q(e),r=(this.children.get(i)||new fe(null)).set(ue(e),n),o=this.children.insert(i,r);return new fe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=q(e),i=this.children.get(n);if(i){const s=i.remove(ue(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=q(e),i=this.children.get(n);return i?i.get(ue(e)):null}}setTree(e,n){if(G(e))return n;{const i=q(e),r=(this.children.get(i)||new fe(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new fe(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ce(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(G(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),Ce(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,i){if(G(e))return this;{this.value&&i(n,this.value);const s=q(e),r=this.children.get(s);return r?r.foreachOnPath_(ue(e),Ce(n,s),i):new fe(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ce(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new fe(null))}}function qn(t,e,n){if(G(e))return new it(new fe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=$e(s,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(s,r))}else{const s=new fe(n),r=t.writeTree_.setTree(e,s);return new it(r)}}}function Ul(t,e,n){let i=t;return He(n,(s,r)=>{i=qn(i,Ce(e,s),r)}),i}function $l(t,e){if(G(e))return it.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new it(n)}}function gr(t,e){return an(t,e)!=null}function an(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Bl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(i,s)=>{e.push(new K(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new K(i,s.value))}),e}function xt(t,e){if(G(e))return t;{const n=an(t,e);return n!=null?new it(new fe(n)):new it(t.writeTree_.subtree(e))}}function mr(t){return t.writeTree_.isEmpty()}function kn(t,e){return tu(ee(),t.writeTree_,e)}function tu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=tu(Ce(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ce(t,".priority"),i)),n}}/**
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
 */function ho(t,e){return ru(e,t)}function yg(t,e,n,i,s){I(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=qn(t.visibleWrites,e,n)),t.lastWriteId=i}function vg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Cg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Eg(l,i.path)?s=!1:et(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return bg(t),!0;if(i.snap)t.visibleWrites=$l(t.visibleWrites,i.path);else{const l=i.children;He(l,a=>{t.visibleWrites=$l(t.visibleWrites,Ce(i.path,a))})}return!0}else return!1}function Eg(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(Ce(t.path,n),e))return!0;return!1}function bg(t){t.visibleWrites=nu(t.allWrites,Ig,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ig(t){return t.visible}function nu(t,e,n){let i=it.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)et(n,o)?(l=$e(n,o),i=qn(i,l,r.snap)):et(o,n)&&(l=$e(o,n),i=qn(i,ee(),r.snap.getChild(l)));else if(r.children){if(et(n,o))l=$e(n,o),i=Ul(i,l,r.children);else if(et(o,n))if(l=$e(o,n),G(l))i=Ul(i,ee(),r.children);else{const a=Nn(r.children,q(l));if(a){const c=a.getChild(ue(l));i=qn(i,ee(),c)}}}else throw Mn("WriteRecord should have .snap or .children")}}return i}function iu(t,e,n,i,s){if(!i&&!s){const r=an(t.visibleWrites,e);if(r!=null)return r;{const o=xt(t.visibleWrites,e);if(mr(o))return n;if(n==null&&!gr(o,ee()))return null;{const l=n||B.EMPTY_NODE;return kn(o,l)}}}else{const r=xt(t.visibleWrites,e);if(!s&&mr(r))return n;if(!s&&n==null&&!gr(r,ee()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(et(c.path,e)||et(e,c.path))},l=nu(t.allWrites,o,e),a=n||B.EMPTY_NODE;return kn(l,a)}}}function wg(t,e,n){let i=B.EMPTY_NODE;const s=an(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(me,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=xt(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=kn(xt(r,new le(o)),l);i=i.updateImmediateChild(o,a)}),Bl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=xt(t.visibleWrites,e);return Bl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Tg(t,e,n,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(gr(t.visibleWrites,r))return null;{const o=xt(t.visibleWrites,r);return mr(o)?s.getChild(n):kn(o,s.getChild(n))}}function Sg(t,e,n,i){const s=Ce(e,n),r=an(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=xt(t.visibleWrites,s);return kn(o,i.getNode().getImmediateChild(n))}else return null}function Ng(t,e){return an(t.visibleWrites,e)}function Ag(t,e,n,i,s,r,o){let l;const a=xt(t.visibleWrites,e),c=an(a,ee());if(c!=null)l=c;else if(n!=null)l=kn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let _=f.getNext();for(;_&&u.length<s;)h(_,i)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Rg(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function qi(t,e,n,i){return iu(t.writeTree,t.treePath,e,n,i)}function fo(t,e){return wg(t.writeTree,t.treePath,e)}function Hl(t,e,n,i){return Tg(t.writeTree,t.treePath,e,n,i)}function Gi(t,e){return Ng(t.writeTree,Ce(t.treePath,e))}function xg(t,e,n,i,s,r){return Ag(t.writeTree,t.treePath,e,n,i,s,r)}function po(t,e,n){return Sg(t.writeTree,t.treePath,e,n)}function su(t,e){return ru(Ce(t.treePath,e),t.writeTree)}function ru(t,e){return{treePath:t,writeTree:e}}/**
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
 */class kg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,li(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,oi(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,xn(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,li(i,e.snapshotNode,s.oldSnap));else throw Mn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Og{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const ou=new Og;class _o{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return po(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),r=xg(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Pg(t){return{filter:t}}function Dg(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Mg(t,e,n,i,s){const r=new kg;let o,l;if(n.type===tt.OVERWRITE){const c=n;c.source.fromUser?o=yr(t,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=Yi(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===tt.MERGE){const c=n;c.source.fromUser?o=Fg(t,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=vr(t,e,c.path,c.children,i,s,l,r))}else if(n.type===tt.ACK_USER_WRITE){const c=n;c.revert?o=Bg(t,e,c.path,i,s,r):o=Ug(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===tt.LISTEN_COMPLETE)o=$g(t,e,n.path,i,r);else throw Mn("Unknown operation type: "+n.type);const a=r.getChanges();return Lg(e,o,a),{viewCache:o,changes:a}}function Lg(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_r(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Jc(_r(e)))}}function lu(t,e,n,i,s,r){const o=e.eventCache;if(Gi(i,n)!=null)return e;{let l,a;if(G(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rn(e),u=c instanceof B?c:B.EMPTY_NODE,h=fo(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=qi(i,rn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){I(Pt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Hl(i,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Hl(i,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=po(i,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return Kn(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Yi(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),_,null)}else{const _=q(n);if(!a.isCompleteForPath(n)&&Pt(n)>1)return e;const E=ue(n),C=a.getNode().getImmediateChild(_).updateChild(E,i);_===".priority"?c=u.updatePriority(a.getNode(),C):c=u.updateChild(a.getNode(),_,C,E,ou,null)}const h=eu(e,c,a.isFullyInitialized()||G(n),u.filtersNodes()),f=new _o(s,h,r);return lu(t,h,n,s,f,l)}function yr(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new _o(s,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Kn(e,c,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=Kn(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ue(n),_=l.getNode().getImmediateChild(h);let E;if(G(f))E=i;else{const N=u.getCompleteChild(h);N!=null?Wc(f)===".priority"&&N.getChild(jc(f)).isEmpty()?E=N:E=N.updateChild(f,i):E=B.EMPTY_NODE}if(_.equals(E))a=e;else{const N=t.filter.updateChild(l.getNode(),h,E,f,u,o);a=Kn(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Wl(t,e){return t.eventCache.isCompleteForChild(e)}function Fg(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Ce(n,a);Wl(e,q(u))&&(l=yr(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Ce(n,a);Wl(e,q(u))||(l=yr(t,l,u,c,s,r,o))}),l}function Vl(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function vr(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;G(n)?c=i:c=new fe(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),E=Vl(t,_,f);a=Yi(t,a,new le(h),E,s,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const E=e.serverCache.getNode().getImmediateChild(h),N=Vl(t,E,f);a=Yi(t,a,new le(h),N,s,r,o,l)}}),a}function Ug(t,e,n,i,s,r,o){if(Gi(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Yi(t,e,n,a.getNode().getChild(n),s,r,l,o);if(G(n)){let c=new fe(null);return a.getNode().forEachChild(Cn,(u,h)=>{c=c.set(new le(u),h)}),vr(t,e,n,c,s,r,l,o)}else return e}else{let c=new fe(null);return i.foreach((u,h)=>{const f=Ce(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),vr(t,e,n,c,s,r,l,o)}}function $g(t,e,n,i,s){const r=e.serverCache,o=eu(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return lu(t,o,n,i,ou,s)}function Bg(t,e,n,i,s,r){let o;if(Gi(i,n)!=null)return e;{const l=new _o(i,e,s),a=e.eventCache.getNode();let c;if(G(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=qi(i,rn(e));else{const h=e.serverCache.getNode();I(h instanceof B,"serverChildren would be complete if leaf node"),u=fo(i,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=q(n);let h=po(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ue(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,ue(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qi(i,rn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Gi(i,ee())!=null,Kn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Hg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new lo(i.getIndex()),r=og(i);this.processor_=Pg(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new sn(a,o.isFullyInitialized(),s.filtersNodes()),h=new sn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ps(h,u),this.eventGenerator_=new fg(this.query_)}get query(){return this.query_}}function Wg(t){return t.viewCache_.serverCache.getNode()}function Vg(t,e){const n=rn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function jl(t){return t.eventRegistrations_.length===0}function jg(t,e){t.eventRegistrations_.push(e)}function zl(t,e,n){const i=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Kl(t,e,n,i){e.type===tt.MERGE&&e.source.queryId!==null&&(I(rn(t.viewCache_),"We should always have a full cache before handling merges"),I(_r(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Mg(t.processor_,s,e,n,i);return Dg(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,au(t,r.changes,r.viewCache.eventCache.getNode(),null)}function zg(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{i.push(xn(r,o))}),n.isFullyInitialized()&&i.push(Jc(n.getNode())),au(t,i,n.getNode(),e)}function au(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return pg(t.eventGenerator_,e,n,s)}/**
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
 */let Qi;class Kg{constructor(){this.views=new Map}}function qg(t){I(!Qi,"__referenceConstructor has already been defined"),Qi=t}function Gg(){return I(Qi,"Reference.ts has not been loaded"),Qi}function Yg(t){return t.views.size===0}function go(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),Kl(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Kl(o,e,n,i));return r}}function Qg(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=qi(n,s?i:null),a=!1;l?a=!0:i instanceof B?(l=fo(n,i),a=!1):(l=B.EMPTY_NODE,a=!1);const c=ps(new sn(l,a,!1),new sn(i,s,!1));return new Hg(e,c)}return o}function Jg(t,e,n,i,s,r){const o=Qg(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jg(o,n),zg(o,n)}function Xg(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Dt(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(zl(c,n,i)),jl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(zl(a,n,i)),jl(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Dt(t)&&r.push(new(Gg())(e._repo,e._path)),{removed:r,events:o}}function cu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function En(t,e){let n=null;for(const i of t.views.values())n=n||Vg(i,e);return n}function uu(t,e){if(e._queryParams.loadsAllData())return _s(t);{const i=e._queryIdentifier;return t.views.get(i)}}function hu(t,e){return uu(t,e)!=null}function Dt(t){return _s(t)!=null}function _s(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ji;function Zg(t){I(!Ji,"__referenceConstructor has already been defined"),Ji=t}function em(){return I(Ji,"Reference.ts has not been loaded"),Ji}let tm=1;class ql{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Rg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nm(t,e,n,i,s){return yg(t.pendingWriteTree_,e,n,i,s),s?yi(t,new nn(Zc(),e,n)):[]}function pn(t,e,n=!1){const i=vg(t.pendingWriteTree_,e);if(Cg(t.pendingWriteTree_,e)){let r=new fe(null);return i.snap!=null?r=r.set(ee(),!0):He(i.children,o=>{r=r.set(new le(o),!0)}),yi(t,new Ki(i.path,r,n))}else return[]}function gs(t,e,n){return yi(t,new nn(co(),e,n))}function im(t,e,n){const i=fe.fromObject(n);return yi(t,new ui(co(),e,i))}function sm(t,e){return yi(t,new ci(co(),e))}function rm(t,e,n){const i=mo(t,n);if(i){const s=yo(i),r=s.path,o=s.queryId,l=$e(r,e),a=new ci(uo(o),l);return vo(t,r,a)}else return[]}function Cr(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||hu(o,e))){const a=Xg(o,e,n,i);Yg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Dt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=am(f);for(let E=0;E<_.length;++E){const N=_[E],C=N.query,O=_u(t,N);t.listenProvider_.startListening(Gn(C),Xi(t,C),O.hashFn,O.onComplete)}}}!h&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Gn(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(ms(f));t.listenProvider_.stopListening(Gn(f),_)}))}cm(t,c)}return l}function om(t,e,n,i){const s=mo(t,i);if(s!=null){const r=yo(s),o=r.path,l=r.queryId,a=$e(o,e),c=new nn(uo(l),a,n);return vo(t,o,c)}else return[]}function lm(t,e,n,i){const s=mo(t,i);if(s){const r=yo(s),o=r.path,l=r.queryId,a=$e(o,e),c=fe.fromObject(n),u=new ui(uo(l),a,c);return vo(t,o,u)}else return[]}function Gl(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,_)=>{const E=$e(f,s);r=r||En(_,E),o=o||Dt(_)});let l=t.syncPointTree_.get(s);l?(o=o||Dt(l),r=r||En(l,ee())):(l=new Kg,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,E)=>{const N=En(E,ee());N&&(r=r.updateImmediateChild(_,N))}));const c=hu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=ms(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=um();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=ho(t.pendingWriteTree_,s);let h=Jg(l,e,n,u,r,a);if(!c&&!o&&!i){const f=uu(l,e);h=h.concat(hm(t,e,f))}return h}function du(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=$e(o,e),c=En(l,a);if(c)return c});return iu(s,e,r,n,!0)}function yi(t,e){return fu(e,t.syncPointTree_,null,ho(t.pendingWriteTree_,ee()))}function fu(t,e,n,i){if(G(t.path))return pu(t,e,n,i);{const s=e.get(ee());n==null&&s!=null&&(n=En(s,ee()));let r=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=su(i,o);r=r.concat(fu(l,a,c,u))}return s&&(r=r.concat(go(s,t,i,n))),r}}function pu(t,e,n,i){const s=e.get(ee());n==null&&s!=null&&(n=En(s,ee()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=su(i,o),u=t.operationForChild(o);u&&(r=r.concat(pu(u,l,a,c)))}),s&&(r=r.concat(go(s,t,i,n))),r}function _u(t,e){const n=e.query,i=Xi(t,n);return{hashFn:()=>(Wg(e)||B.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?rm(t,n._path,i):sm(t,n._path);{const r=s_(s,n);return Cr(t,n,null,r)}}}}function Xi(t,e){const n=ms(e);return t.queryToTagMap.get(n)}function ms(t){return t._path.toString()+"$"+t._queryIdentifier}function mo(t,e){return t.tagToQueryMap.get(e)}function yo(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function vo(t,e,n){const i=t.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=ho(t.pendingWriteTree_,e);return go(i,n,s,null)}function am(t){return t.fold((e,n,i)=>{if(n&&Dt(n))return[_s(n)];{let s=[];return n&&(s=cu(n)),He(i,(r,o)=>{s=s.concat(o)}),s}})}function Gn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(em())(t._repo,t._path):t}function cm(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ms(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function um(){return tm++}function hm(t,e,n){const i=e._path,s=Xi(t,e),r=_u(t,n),o=t.listenProvider_.startListening(Gn(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)I(!Dt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!G(c)&&u&&Dt(u))return[_s(u).query];{let f=[];return u&&(f=f.concat(cu(u).map(_=>_.query))),He(h,(_,E)=>{f=f.concat(E)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Gn(u),Xi(t,u))}}return o}/**
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
 */class Co{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Co(n)}node(){return this.node_}}class Eo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Eo(this.syncTree_,n)}node(){return du(this.syncTree_,this.path_)}}const dm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yl=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pm(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},pm=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},_m=function(t,e,n,i){return bo(e,new Eo(n,t),i)},gm=function(t,e,n){return bo(t,new Co(e),n)};function bo(t,e,n){const i=t.getPriority().val(),s=Yl(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Yl(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ee(l,Ae(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ee(s))),o.forEachChild(me,(l,a)=>{const c=bo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Io{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function wo(t,e){let n=e instanceof le?e:new le(e),i=t,s=q(n);for(;s!==null;){const r=Nn(i.node.children,s)||{children:{},childCount:0};i=new Io(s,i,r),n=ue(n),s=q(n)}return i}function Fn(t){return t.node.value}function gu(t,e){t.node.value=e,Er(t)}function mu(t){return t.node.childCount>0}function mm(t){return Fn(t)===void 0&&!mu(t)}function ys(t,e){He(t.node.children,(n,i)=>{e(new Io(n,t,i))})}function yu(t,e,n,i){n&&!i&&e(t),ys(t,s=>{yu(s,e,!0,i)}),n&&i&&e(t)}function ym(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function vi(t){return new le(t.parent===null?t.name:vi(t.parent)+"/"+t.name)}function Er(t){t.parent!==null&&vm(t.parent,t.name,t)}function vm(t,e,n){const i=mm(n),s=Ct(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Er(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Er(t))}/**
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
 */const Cm=/[\[\].#$\/\u0000-\u001F\u007F]/,Em=/[\[\].#$\u0000-\u001F\u007F]/,Us=10*1024*1024,vu=function(t){return typeof t=="string"&&t.length!==0&&!Cm.test(t)},Cu=function(t){return typeof t=="string"&&t.length!==0&&!Em.test(t)},bm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cu(t)},Eu=function(t,e,n){const i=n instanceof le?new U_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ht(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ht(i)+" with contents = "+e.toString());if(bc(e))throw new Error(t+"contains "+e.toString()+" "+Ht(i));if(typeof e=="string"&&e.length>Us/3&&ds(e)>Us)throw new Error(t+"contains a string greater than "+Us+" utf8 bytes "+Ht(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(He(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ht(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$_(i,o),Eu(t,l,i),B_(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ht(i)+" in addition to actual children.")}},bu=function(t,e,n,i){if(!(i&&n===void 0)&&!Cu(n))throw new Error(fc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Im=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bu(t,e,n,i)},wm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bm(n))throw new Error(fc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Tm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Iu(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!so(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function wu(t,e,n){Iu(t,n),Tu(t,i=>so(i,e))}function cn(t,e,n){Iu(t,n),Tu(t,i=>et(i,e)||et(e,i))}function Tu(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Sm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Sm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Yt&&Ne("event: "+n.toString()),gi(i)}}}/**
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
 */const Nm="repo_interrupt",Am=25;class Rm{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zi(),this.transactionQueueTree_=new Io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xm(t,e,n){if(t.stats_=no(t.repoInfo_),t.forceRestClient_||a_())t.server_=new ji(t.repoInfo_,(i,s,r,o)=>{Ql(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jl(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new mt(t.repoInfo_,e,(i,s,r,o)=>{Ql(t,i,s,r,o)},i=>{Jl(t,i)},i=>{Om(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=p_(t.repoInfo_,()=>new dg(t.stats_,t.server_)),t.infoData_=new lg,t.infoSyncTree_=new ql({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=gs(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),To(t,"connected",!1),t.serverSyncTree_=new ql({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);cn(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function km(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Su(t){return dm({timestamp:km(t)})}function Ql(t,e,n,i,s){t.dataUpdateCount++;const r=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=$i(n,c=>Ae(c));o=lm(t.serverSyncTree_,r,a,s)}else{const a=Ae(n);o=om(t.serverSyncTree_,r,a,s)}else if(i){const a=$i(n,c=>Ae(c));o=im(t.serverSyncTree_,r,a)}else{const a=Ae(n);o=gs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=No(t,r)),cn(t.eventQueue_,l,o)}function Jl(t,e){To(t,"connected",e),e===!1&&Dm(t)}function Om(t,e){He(e,(n,i)=>{To(t,n,i)})}function To(t,e,n){const i=new le("/.info/"+e),s=Ae(n);t.infoData_.updateSnapshot(i,s);const r=gs(t.infoSyncTree_,i,s);cn(t.eventQueue_,i,r)}function Pm(t){return t.nextWriteId_++}function Dm(t){Nu(t,"onDisconnectEvents");const e=Su(t),n=zi();pr(t.onDisconnect_,ee(),(s,r)=>{const o=_m(s,r,t.serverSyncTree_,e);Xc(n,s,o)});let i=[];pr(n,ee(),(s,r)=>{i=i.concat(gs(t.serverSyncTree_,s,r));const o=$m(t,s);No(t,o)}),t.onDisconnect_=zi(),cn(t.eventQueue_,ee(),i)}function Mm(t,e,n){let i;q(e._path)===".info"?i=Gl(t.infoSyncTree_,e,n):i=Gl(t.serverSyncTree_,e,n),wu(t.eventQueue_,e._path,i)}function Xl(t,e,n){let i;q(e._path)===".info"?i=Cr(t.infoSyncTree_,e,n):i=Cr(t.serverSyncTree_,e,n),wu(t.eventQueue_,e._path,i)}function Lm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Nm)}function Nu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function Au(t,e,n){return du(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function So(t,e=t.transactionQueueTree_){if(e||vs(t,e),Fn(e)){const n=xu(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Fm(t,vi(e),n)}else mu(e)&&ys(e,n=>{So(t,n)})}function Fm(t,e,n){const i=n.map(c=>c.currentWriteId),s=Au(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$e(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Nu(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(pn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();vs(t,wo(t.transactionQueueTree_,e)),So(t,t.transactionQueueTree_),cn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)gi(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ve("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}No(t,e)}},o)}function No(t,e){const n=Ru(t,e),i=vi(n),s=xu(t,n);return Um(t,s,i),i}function Um(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=$e(n,a.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(pn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Am)u=!0,h="maxretry",s=s.concat(pn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Au(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Eu("transaction failed: Data returned ",_,a.path);let E=Ae(_);typeof _=="object"&&_!=null&&Ct(_,".priority")||(E=E.updatePriority(f.getPriority()));const C=a.currentWriteId,O=Su(t),pe=gm(E,f,O);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=pe,a.currentWriteId=Pm(t),o.splice(o.indexOf(C),1),s=s.concat(nm(t.serverSyncTree_,a.path,pe,a.currentWriteId,a.applyLocally)),s=s.concat(pn(t.serverSyncTree_,C,!0))}else u=!0,h="nodata",s=s.concat(pn(t.serverSyncTree_,a.currentWriteId,!0))}cn(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}vs(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)gi(i[l]);So(t,t.transactionQueueTree_)}function Ru(t,e){let n,i=t.transactionQueueTree_;for(n=q(e);n!==null&&Fn(i)===void 0;)i=wo(i,n),e=ue(e),n=q(e);return i}function xu(t,e){const n=[];return ku(t,e,n),n.sort((i,s)=>i.order-s.order),n}function ku(t,e,n){const i=Fn(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ys(e,s=>{ku(t,s,n)})}function vs(t,e){const n=Fn(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,gu(e,n.length>0?n:void 0)}ys(e,i=>{vs(t,i)})}function $m(t,e){const n=vi(Ru(t,e)),i=wo(t.transactionQueueTree_,e);return ym(i,s=>{$s(t,s)}),$s(t,i),yu(i,s=>{$s(t,s)}),n}function $s(t,e){const n=Fn(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(pn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?gu(e,void 0):n.length=r+1,cn(t.eventQueue_,vi(e),s);for(let o=0;o<i.length;o++)gi(i[o])}}/**
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
 */function Bm(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Hm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zl=function(t,e){const n=Wm(t),i=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Zp();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new h_(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new le(n.pathString)}},Wm=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=Bm(t.substring(u,h)));const f=Hm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */class Ou{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class Pu{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Vm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ao{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return G(this._path)?null:Wc(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Ll(this._queryParams),n=eo(e);return n==="{}"?"default":n}get _queryObject(){return Ll(this._queryParams)}isEqual(e){if(e=ln(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,i=so(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+F_(this._path)}}class Et extends Ao{constructor(e,n){super(e,n,new ao,!1)}get parent(){const e=jc(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),i=Zi(this.ref,e);return new hi(this._node.getChild(n),i,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new hi(s,Zi(this.ref,i),me)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jm(t,e){return t=ln(t),t._checkNotDeleted("ref"),e!==void 0?Zi(t._root,e):t._root}function Zi(t,e){return t=ln(t),q(t._path)===null?Im("child","path",e,!1):bu("child","path",e,!1),new Et(t._repo,Ce(t._path,e))}class Ro{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Ou("value",this,new hi(e.snapshotNode,new Et(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pu(this,e,n):null}matches(e){return e instanceof Ro?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pu(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const i=Zi(new Et(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Ou(e.type,this,new hi(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function zm(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const a=n,c=(u,h)=>{Xl(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Vm(n,r||void 0),l=e==="value"?new Ro(o):new xo(e,o);return Mm(t._repo,t,l),()=>Xl(t._repo,t,l)}function Km(t,e,n,i){return zm(t,"child_added",e,n,i)}qg(Et);Zg(Et);/**
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
 */const qm="FIREBASE_DATABASE_EMULATOR_HOST",br={};let Gm=!1;function Ym(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zl(r,s),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[qm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Zl(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new hr(hr.OWNER):new u_(t.name,t.options,e);wm("Invalid Firebase Database URL",o),G(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Jm(l,t,u,new c_(t.name,n));return new Xm(h,t)}function Qm(t,e){const n=br[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Lm(t),delete n[t.key]}function Jm(t,e,n,i){let s=br[e.name];s||(s={},br[e.name]=s);let r=s[t.toURLString()];return r&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Rm(t,Gm,n,i),s[t.toURLString()]=r,r}class Xm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function Zm(t=Up(),e){return Dp(t,"database").getImmediate({identifier:e})}/**
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
 */function ey(t){Gp(Zr),An(new Jt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ym(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Rt(vl,Cl,t),Rt(vl,Cl,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ey();var ko=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};const ty={class:"box"},ny=Hr({__name:"checkCom",props:{placeName:null,checkIn:null,checkOut:null},setup(t){return(e,n)=>(dt(),ft("div",ty,[(dt(!0),ft(Ue,null,Ys(t.placeName.split(" "),(i,s,r)=>(dt(),ft("h2",null,Ri(i),1))),256)),Qt("h3",null,"\u7C3D\u5230\u4EBA\u6578\uFF1A"+Ri(t.checkIn),1),Qt("h3",null,"\u7C3D\u9000\u4EBA\u6578\uFF1A"+Ri(t.checkOut),1)]))}});var iy=ko(ny,[["__scopeId","data-v-83619124"]]),sy=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ry={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(sy,function(){var n=1e3,i=6e4,s=36e5,r="millisecond",o="second",l="minute",a="hour",c="day",u="week",h="month",f="quarter",_="year",E="date",N="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,pe={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},J=function($,k,A){var D=String($);return!D||D.length>=k?$:""+Array(k+1-D.length).join(A)+$},Z={s:J,z:function($){var k=-$.utcOffset(),A=Math.abs(k),D=Math.floor(A/60),b=A%60;return(k<=0?"+":"-")+J(D,2,"0")+":"+J(b,2,"0")},m:function $(k,A){if(k.date()<A.date())return-$(A,k);var D=12*(A.year()-k.year())+(A.month()-k.month()),b=k.clone().add(D,h),x=A-b<0,F=k.clone().add(D+(x?-1:1),h);return+(-(D+(A-b)/(x?b-F:F-b))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:h,y:_,w:u,d:c,D:E,h:a,m:l,s:o,ms:r,Q:f}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},_e="en",ye={};ye[_e]=pe;var Me=function($){return $ instanceof ve},j=function $(k,A,D){var b;if(!k)return _e;if(typeof k=="string"){var x=k.toLowerCase();ye[x]&&(b=x),A&&(ye[x]=A,b=x);var F=k.split("-");if(!b&&F.length>1)return $(F[0])}else{var X=k.name;ye[X]=k,b=X}return!D&&b&&(_e=b),b||!D&&_e},H=function($,k){if(Me($))return $.clone();var A=typeof k=="object"?k:{};return A.date=$,A.args=arguments,new ve(A)},U=Z;U.l=j,U.i=Me,U.w=function($,k){return H($,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var ve=function(){function $(A){this.$L=j(A.locale,null,!0),this.parse(A)}var k=$.prototype;return k.parse=function(A){this.$d=function(D){var b=D.date,x=D.utc;if(b===null)return new Date(NaN);if(U.u(b))return new Date;if(b instanceof Date)return new Date(b);if(typeof b=="string"&&!/Z$/i.test(b)){var F=b.match(C);if(F){var X=F[2]-1||0,ae=(F[7]||"0").substring(0,3);return x?new Date(Date.UTC(F[1],X,F[3]||1,F[4]||0,F[5]||0,F[6]||0,ae)):new Date(F[1],X,F[3]||1,F[4]||0,F[5]||0,F[6]||0,ae)}}return new Date(b)}(A),this.$x=A.x||{},this.init()},k.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},k.$utils=function(){return U},k.isValid=function(){return this.$d.toString()!==N},k.isSame=function(A,D){var b=H(A);return this.startOf(D)<=b&&b<=this.endOf(D)},k.isAfter=function(A,D){return H(A)<this.startOf(D)},k.isBefore=function(A,D){return this.endOf(D)<H(A)},k.$g=function(A,D,b){return U.u(A)?this[D]:this.set(b,A)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(A,D){var b=this,x=!!U.u(D)||D,F=U.p(A),X=function(Ye,Te){var Pe=U.w(b.$u?Date.UTC(b.$y,Te,Ye):new Date(b.$y,Te,Ye),b);return x?Pe:Pe.endOf(c)},ae=function(Ye,Te){return U.w(b.toDate()[Ye].apply(b.toDate("s"),(x?[0,0,0,0]:[23,59,59,999]).slice(Te)),b)},ie=this.$W,he=this.$M,qe=this.$D,Ge="set"+(this.$u?"UTC":"");switch(F){case _:return x?X(1,0):X(31,11);case h:return x?X(1,he):X(0,he+1);case u:var Mt=this.$locale().weekStart||0,Oe=(ie<Mt?ie+7:ie)-Mt;return X(x?qe-Oe:qe+(6-Oe),he);case c:case E:return ae(Ge+"Hours",0);case a:return ae(Ge+"Minutes",1);case l:return ae(Ge+"Seconds",2);case o:return ae(Ge+"Milliseconds",3);default:return this.clone()}},k.endOf=function(A){return this.startOf(A,!1)},k.$set=function(A,D){var b,x=U.p(A),F="set"+(this.$u?"UTC":""),X=(b={},b[c]=F+"Date",b[E]=F+"Date",b[h]=F+"Month",b[_]=F+"FullYear",b[a]=F+"Hours",b[l]=F+"Minutes",b[o]=F+"Seconds",b[r]=F+"Milliseconds",b)[x],ae=x===c?this.$D+(D-this.$W):D;if(x===h||x===_){var ie=this.clone().set(E,1);ie.$d[X](ae),ie.init(),this.$d=ie.set(E,Math.min(this.$D,ie.daysInMonth())).$d}else X&&this.$d[X](ae);return this.init(),this},k.set=function(A,D){return this.clone().$set(A,D)},k.get=function(A){return this[U.p(A)]()},k.add=function(A,D){var b,x=this;A=Number(A);var F=U.p(D),X=function(he){var qe=H(x);return U.w(qe.date(qe.date()+Math.round(he*A)),x)};if(F===h)return this.set(h,this.$M+A);if(F===_)return this.set(_,this.$y+A);if(F===c)return X(1);if(F===u)return X(7);var ae=(b={},b[l]=i,b[a]=s,b[o]=n,b)[F]||1,ie=this.$d.getTime()+A*ae;return U.w(ie,this)},k.subtract=function(A,D){return this.add(-1*A,D)},k.format=function(A){var D=this,b=this.$locale();if(!this.isValid())return b.invalidDate||N;var x=A||"YYYY-MM-DDTHH:mm:ssZ",F=U.z(this),X=this.$H,ae=this.$m,ie=this.$M,he=b.weekdays,qe=b.months,Ge=function(Te,Pe,Lt,bt){return Te&&(Te[Pe]||Te(D,x))||Lt[Pe].slice(0,bt)},Mt=function(Te){return U.s(X%12||12,Te,"0")},Oe=b.meridiem||function(Te,Pe,Lt){var bt=Te<12?"AM":"PM";return Lt?bt.toLowerCase():bt},Ye={YY:String(this.$y).slice(-2),YYYY:this.$y,M:ie+1,MM:U.s(ie+1,2,"0"),MMM:Ge(b.monthsShort,ie,qe,3),MMMM:Ge(qe,ie),D:this.$D,DD:U.s(this.$D,2,"0"),d:String(this.$W),dd:Ge(b.weekdaysMin,this.$W,he,2),ddd:Ge(b.weekdaysShort,this.$W,he,3),dddd:he[this.$W],H:String(X),HH:U.s(X,2,"0"),h:Mt(1),hh:Mt(2),a:Oe(X,ae,!0),A:Oe(X,ae,!1),m:String(ae),mm:U.s(ae,2,"0"),s:String(this.$s),ss:U.s(this.$s,2,"0"),SSS:U.s(this.$ms,3,"0"),Z:F};return x.replace(O,function(Te,Pe){return Pe||Ye[Te]||F.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(A,D,b){var x,F=U.p(D),X=H(A),ae=(X.utcOffset()-this.utcOffset())*i,ie=this-X,he=U.m(this,X);return he=(x={},x[_]=he/12,x[h]=he,x[f]=he/3,x[u]=(ie-ae)/6048e5,x[c]=(ie-ae)/864e5,x[a]=ie/s,x[l]=ie/i,x[o]=ie/n,x)[F]||ie,b?he:U.a(he)},k.daysInMonth=function(){return this.endOf(h).$D},k.$locale=function(){return ye[this.$L]},k.locale=function(A,D){if(!A)return this.$L;var b=this.clone(),x=j(A,D,!0);return x&&(b.$L=x),b},k.clone=function(){return U.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},$}(),Le=ve.prototype;return H.prototype=Le,[["$ms",r],["$s",o],["$m",l],["$H",a],["$W",c],["$M",h],["$y",_],["$D",E]].forEach(function($){Le[$[1]]=function(k){return this.$g(k,$[0],$[1])}}),H.extend=function($,k){return $.$i||($(k,ve,H),$.$i=!0),H},H.locale=j,H.isDayjs=Me,H.unix=function($){return H(1e3*$)},H.en=ye[_e],H.Ls=ye,H.p={},H})})(ry);const oy={class:"row"},ly={class:"col-sm-3 place",style:{padding:"5px"}},ay={class:"row",style:{margin:"5px"}},cy=Hr({__name:"MainPage",setup(t){const e={\u5831\u5230:["\u5065\u6AA2\u6AC3\u53F0"],\u9AD4\u6AA2\u5927\u6A13:["\u57FA\u790E\u6AA2\u67E5","\u5FC3\u96FB\u6AA2\u67E5","\u5BB6\u91AB\u8A3A\u65B7","\u62BD\u8840\u6AA2\u67E5"],\u91AB\u7642\u5927\u6A13:["X\u5149\u6AA2\u67E5","\u773C\u79D1\u6AA2\u67E5"],\u7259\u79D1:["\u7259\u91AB\u6AA2\u67E5"]},n="NFC",i=Zm(),s=jm(i,n),r=Dh({}),o=["\u5065\u6AA2\u6AC3\u53F0"];Object.keys(e).forEach(N=>{e[N].forEach(C=>{r.value[C]={checkIn:0,checkOut:0}})});let l={},a={},c=new URLSearchParams(window.location.search);console.log("If you want to set the time range, you can set params like '?start=2022-09-22T13:15:00'");const u=new Date(c.get("start")||"NaN"),h=u.valueOf(),f=new Date(c.get("end")||"NaN"),_=f.valueOf();console.log("startTimestamp = "+h),console.log("startDate = "+(isNaN(h)?"noDate":u.toLocaleString())),console.log("endTimestamp = "+_),console.log("endDate = "+(isNaN(_)?"noDate":f.toLocaleString())),Km(s,N=>{const C=N.val();h!=NaN&&C.timestamp<h||_!=NaN&&C.timestamp>_||E(C)});function E(N){const C=N.serialNumber,O=N.placeName;console.log(N),C in l||(l[C]={}),O in l[C]||(l[C][O]=0),O in r.value&&(l[C][O]+=1,a[C]&&a[C]!=O&&l[C][a[C]]<=2&&(r.value[a[C]].checkOut+=1,l[C][a[C]]=3,o.includes(a[C])&&(r.value[a[C]].checkOut-=1,l[C][a[C]]=2),a[C]=""),l[C][O]==1?(r.value[O].checkIn+=1,a[C]=O):l[C][O]==2?a[C]=O:l[C][O]==3&&(r.value[O].checkOut+=1,a[C]="",o.includes(O)&&(l[C]={})))}return(N,C)=>(dt(),ft("div",oy,[(dt(!0),ft(Ue,null,Ys(ka(e),(O,pe,J)=>(dt(),ft("div",ly,[Qt("h1",null,Ri(pe),1),(dt(!0),ft(Ue,null,Ys(O,(Z,_e,ye)=>(dt(),ft("div",ay,[gt(iy,{placeName:Z,"check-in":r.value[Z].checkIn,"check-out":r.value[Z].checkOut},null,8,["placeName","check-in","check-out"])]))),256))]))),256))]))}});var uy=ko(cy,[["__scopeId","data-v-485e091e"]]),hy="firebase",dy="9.9.4";/**
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
 */Rt(hy,dy,"app");function Du(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Mu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fy=Mu,Lu=new fi("auth","Firebase",Mu());/**
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
 */const ea=new Jr("@firebase/auth");function Pi(t,...e){ea.logLevel<=oe.ERROR&&ea.error(`Auth (${Zr}): ${t}`,...e)}/**
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
 */function ta(t,...e){throw Oo(t,...e)}function Fu(t,...e){return Oo(t,...e)}function py(t,e,n){const i=Object.assign(Object.assign({},fy()),{[e]:n});return new fi("auth","Firebase",i).create(e,{appName:t.name})}function Oo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Lu.create(t,...e)}function ne(t,e,...n){if(!t)throw Oo(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function es(t,e){t||Yn(e)}/**
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
 */const na=new Map;function Kt(t){es(t instanceof Function,"Expected a class definition");let e=na.get(t);return e?(es(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,na.set(t,e),e)}function _y(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gy(){return ia()==="http:"||ia()==="https:"}function ia(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function my(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gy()||Nf()||"connection"in navigator)?navigator.onLine:!0}function yy(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,es(n>e,"Short delay should be less than long delay!"),this.isMobile=Yr()||uc()}get(){return my()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vy(t,e){es(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Uu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ey=new Ci(3e4,6e4);async function $u(t,e,n,i,s={}){return Bu(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Uu.fetch()(Hu(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Bu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Cy),e);try{const s=new by(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ai(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ai(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ai(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ai(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw py(t,u,c);ta(t,u)}}catch(s){if(s instanceof on)throw s;ta(t,"network-request-failed")}}function Hu(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?vy(t.config,s):`${t.config.apiScheme}://${s}`}class by{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Fu(this.auth,"network-request-failed")),Ey.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ai(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Fu(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Iy(t,e){return $u(t,"POST","/v1/accounts:delete",e)}async function wy(t,e){return $u(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ty(t,e=!1){const n=ln(t),i=await n.getIdToken(e),s=Wu(i);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Qn(Bs(s.auth_time)),issuedAtTime:Qn(Bs(s.iat)),expirationTime:Qn(Bs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bs(t){return Number(t)*1e3}function Wu(t){var e;const[n,i,s]=t.split(".");if(n===void 0||i===void 0||s===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=ir(i);return r?JSON.parse(r):(Pi("Failed to decode base64 JWT payload"),null)}catch(r){return Pi("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Sy(t){const e=Wu(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof on&&Ny(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ny({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ay{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Ir(t,wy(n,{idToken:i}));ne(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ky(r.providerUserInfo):[],l=xy(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Vu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Ry(t){const e=ln(t);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xy(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ky(t){return t.map(e=>{var{providerId:n}=e,i=Du(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Oy(t,e){const n=await Bu(t,{},async()=>{const i=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Hu(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uu.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Oy(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new di;return i&&(ne(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function wt(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ay(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ty(this,e)}reload(){return Ry(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ir(this,Iy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,pe=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:J,emailVerified:Z,isAnonymous:_e,providerData:ye,stsTokenManager:Me}=n;ne(J&&Me,e,"internal-error");const j=di.fromJSON(this.name,Me);ne(typeof J=="string",e,"internal-error"),wt(h,e.name),wt(f,e.name),ne(typeof Z=="boolean",e,"internal-error"),ne(typeof _e=="boolean",e,"internal-error"),wt(_,e.name),wt(E,e.name),wt(N,e.name),wt(C,e.name),wt(O,e.name),wt(pe,e.name);const H=new bn({uid:J,auth:e,email:f,emailVerified:Z,displayName:h,isAnonymous:_e,photoURL:E,phoneNumber:_,tenantId:N,stsTokenManager:j,createdAt:O,lastLoginAt:pe});return ye&&Array.isArray(ye)&&(H.providerData=ye.map(U=>Object.assign({},U))),C&&(H._redirectEventId=C),H}static async _fromIdTokenResponse(e,n,i=!1){const s=new di;s.updateFromServerResponse(n);const r=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ts(r),r}}/**
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
 */class ju{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ju.type="NONE";const sa=ju;/**
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
 */function Hs(t,e,n){return`firebase:${t}:${e}:${n}`}class In{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Hs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Hs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new In(Kt(sa),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Kt(sa);const o=Hs(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=bn._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new In(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new In(r,e,i))}}/**
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
 */function ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Py(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uy(e))return"Blackberry";if($y(e))return"Webos";if(Dy(e))return"Safari";if((e.includes("chrome/")||My(e))&&!e.includes("edge/"))return"Chrome";if(Fy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Py(t=ut()){return/firefox\//i.test(t)}function Dy(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function My(t=ut()){return/crios\//i.test(t)}function Ly(t=ut()){return/iemobile/i.test(t)}function Fy(t=ut()){return/android/i.test(t)}function Uy(t=ut()){return/blackberry/i.test(t)}function $y(t=ut()){return/webos/i.test(t)}/**
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
 */function zu(t,e=[]){let n;switch(t){case"Browser":n=ra(ut());break;case"Worker":n=`${ra(ut())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${i}`}/**
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
 */class By{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Hy{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oa(this),this.idTokenSubscription=new oa(this),this.beforeStateQueue=new By(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ts(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ln(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Wy(t){return ln(t)}class oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lf(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Ci(3e4,6e4);/**
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
 */new Ci(2e3,1e4);/**
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
 */new Ci(3e4,6e4);/**
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
 */new Ci(5e3,15e3);var la="@firebase/auth",aa="0.20.6";/**
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
 */class Vy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zy(t){An(new Jt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((l,a)=>{ne(r&&!r.includes(":"),"invalid-api-key",{appName:l.name}),ne(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zu(t)},u=new Hy(l,a,c);return _y(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),An(new Jt("auth-internal",e=>{const n=Wy(e.getProvider("auth").getImmediate());return(i=>new Vy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(la,aa,jy(t)),Rt(la,aa,"esm2017")}zy("Browser");const Ky={apiKey:"AIzaSyAjr53uHeIDxD1uzRcnzKJyFAE6WVUlfn0",authDomain:"physical-examination.firebaseapp.com",databaseURL:"https://physical-examination-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"physical-examination",storageBucket:"physical-examination.appspot.com",messagingSenderId:"204950821656",appId:"1:204950821656:web:638bdba7e304b20c409c6d",measurementId:"G-SWY69F2NCT"};function qy(){return Fp(Ky)}const Gy=t=>(qh("data-v-f4f518fc"),t=t(),Gh(),t),Yy=Gy(()=>Qt("main",null,null,-1)),Qy=Hr({__name:"App",setup(t){return qy(),(e,n)=>(dt(),ft(Ue,null,[Qt("header",null,[gt(uy)]),Yy],64))}});var Jy=ko(Qy,[["__scopeId","data-v-f4f518fc"]]);bf(Jy).mount("#app");
