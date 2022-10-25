const Xu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};Xu();function Tr(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Zu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eh=Tr(Zu);function ca(t){return!!t||t===""}function Sr(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Te(i)?ih(i):Sr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Te(t))return t;if(ye(t))return t}}const th=/;(?![^(]*\))/g,nh=/:(.+)/;function ih(t){const e={};return t.split(th).forEach(n=>{if(n){const i=n.split(nh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Nr(t){let e="";if(Te(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const i=Nr(t[n]);i&&(e+=i+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bt=t=>Te(t)?t:t==null?"":q(t)||ye(t)&&(t.toString===fa||!G(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:ha(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!q(e)&&!pa(e)?String(e):e,fe={},gn=[],st=()=>{},sh=()=>!1,rh=/^on[^a-z]/,is=t=>rh.test(t),Ar=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Rr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oh=Object.prototype.hasOwnProperty,ee=(t,e)=>oh.call(t,e),q=Array.isArray,mn=t=>ss(t)==="[object Map]",ha=t=>ss(t)==="[object Set]",G=t=>typeof t=="function",Te=t=>typeof t=="string",xr=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",da=t=>ye(t)&&G(t.then)&&G(t.catch),fa=Object.prototype.toString,ss=t=>fa.call(t),lh=t=>ss(t).slice(8,-1),pa=t=>ss(t)==="[object Object]",kr=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ki=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ah=/-(\w)/g,Tn=rs(t=>t.replace(ah,(e,n)=>n?n.toUpperCase():"")),ch=/\B([A-Z])/g,Pn=rs(t=>t.replace(ch,"-$1").toLowerCase()),_a=rs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Es=rs(t=>t?`on${_a(t)}`:""),Xn=(t,e)=>!Object.is(t,e),bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},uh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mo;const hh=()=>Mo||(Mo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ct;class dh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ct&&(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function fh(t,e=ct){e&&e.active&&e.effects.push(t)}const Or=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ga=t=>(t.w&Ot)>0,ma=t=>(t.n&Ot)>0,ph=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},_h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];ga(s)&&!ma(s)?s.delete(t):e[n++]=s,s.w&=~Ot,s.n&=~Ot}e.length=n}},js=new WeakMap;let jn=0,Ot=1;const zs=30;let Ze;const Yt=Symbol(""),Ks=Symbol("");class Pr{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fh(this,i)}run(){if(!this.active)return this.fn();let e=Ze,n=Nt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,Nt=!0,Ot=1<<++jn,jn<=zs?ph(this):Fo(this),this.fn()}finally{jn<=zs&&_h(this),Ot=1<<--jn,Ze=this.parent,Nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(Fo(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nt=!0;const ya=[];function Dn(){ya.push(Nt),Nt=!1}function Mn(){const t=ya.pop();Nt=t===void 0?!0:t}function je(t,e,n){if(Nt&&Ze){let i=js.get(t);i||js.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Or()),va(s)}}function va(t,e){let n=!1;jn<=zs?ma(t)||(t.n|=Ot,n=!ga(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t))}function vt(t,e,n,i,s,r){const o=js.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&q(t))o.forEach((a,c)=>{(c==="length"||c>=i)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":q(t)?kr(n)&&l.push(o.get("length")):(l.push(o.get(Yt)),mn(t)&&l.push(o.get(Ks)));break;case"delete":q(t)||(l.push(o.get(Yt)),mn(t)&&l.push(o.get(Ks)));break;case"set":mn(t)&&l.push(o.get(Yt));break}if(l.length===1)l[0]&&qs(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);qs(Or(a))}}function qs(t,e){const n=q(t)?t:[...t];for(const i of n)i.computed&&Lo(i);for(const i of n)i.computed||Lo(i)}function Lo(t,e){(t!==Ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gh=Tr("__proto__,__v_isRef,__isVue"),Ca=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xr)),mh=Dr(),yh=Dr(!1,!0),vh=Dr(!0),Uo=Ch();function Ch(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=se(this);for(let r=0,o=this.length;r<o;r++)je(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dn();const i=se(this)[e].apply(this,n);return Mn(),i}}),t}function Dr(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Fh:Ta:e?wa:Ia).get(i))return i;const o=q(i);if(!t&&o&&ee(Uo,s))return Reflect.get(Uo,s,r);const l=Reflect.get(i,s,r);return(xr(s)?Ca.has(s):gh(s))||(t||je(i,"get",s),e)?l:ke(l)?o&&kr(s)?l:l.value:ye(l)?t?Sa(l):Lr(l):l}}const Eh=Ea(),bh=Ea(!0);function Ea(t=!1){return function(n,i,s,r){let o=n[i];if(Sn(o)&&ke(o)&&!ke(s))return!1;if(!t&&(!Fi(s)&&!Sn(s)&&(o=se(o),s=se(s)),!q(n)&&ke(o)&&!ke(s)))return o.value=s,!0;const l=q(n)&&kr(i)?Number(i)<n.length:ee(n,i),a=Reflect.set(n,i,s,r);return n===se(r)&&(l?Xn(s,o)&&vt(n,"set",i,s):vt(n,"add",i,s)),a}}function Ih(t,e){const n=ee(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&vt(t,"delete",e,void 0),i}function wh(t,e){const n=Reflect.has(t,e);return(!xr(e)||!Ca.has(e))&&je(t,"has",e),n}function Th(t){return je(t,"iterate",q(t)?"length":Yt),Reflect.ownKeys(t)}const ba={get:mh,set:Eh,deleteProperty:Ih,has:wh,ownKeys:Th},Sh={get:vh,set(t,e){return!0},deleteProperty(t,e){return!0}},Nh=Oe({},ba,{get:yh,set:bh}),Mr=t=>t,os=t=>Reflect.getPrototypeOf(t);function bi(t,e,n=!1,i=!1){t=t.__v_raw;const s=se(t),r=se(e);n||(e!==r&&je(s,"get",e),je(s,"get",r));const{has:o}=os(s),l=i?Mr:n?$r:Zn;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function Ii(t,e=!1){const n=this.__v_raw,i=se(n),s=se(t);return e||(t!==s&&je(i,"has",t),je(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function wi(t,e=!1){return t=t.__v_raw,!e&&je(se(t),"iterate",Yt),Reflect.get(t,"size",t)}function $o(t){t=se(t);const e=se(this);return os(e).has.call(e,t)||(e.add(t),vt(e,"add",t,t)),this}function Bo(t,e){e=se(e);const n=se(this),{has:i,get:s}=os(n);let r=i.call(n,t);r||(t=se(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Xn(e,o)&&vt(n,"set",t,e):vt(n,"add",t,e),this}function Wo(t){const e=se(this),{has:n,get:i}=os(e);let s=n.call(e,t);s||(t=se(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&vt(e,"delete",t,void 0),r}function Ho(){const t=se(this),e=t.size!==0,n=t.clear();return e&&vt(t,"clear",void 0,void 0),n}function Ti(t,e){return function(i,s){const r=this,o=r.__v_raw,l=se(o),a=e?Mr:t?$r:Zn;return!t&&je(l,"iterate",Yt),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function Si(t,e,n){return function(...i){const s=this.__v_raw,r=se(s),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?Mr:e?$r:Zn;return!e&&je(r,"iterate",a?Ks:Yt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wt(t){return function(...e){return t==="delete"?!1:this}}function Ah(){const t={get(r){return bi(this,r)},get size(){return wi(this)},has:Ii,add:$o,set:Bo,delete:Wo,clear:Ho,forEach:Ti(!1,!1)},e={get(r){return bi(this,r,!1,!0)},get size(){return wi(this)},has:Ii,add:$o,set:Bo,delete:Wo,clear:Ho,forEach:Ti(!1,!0)},n={get(r){return bi(this,r,!0)},get size(){return wi(this,!0)},has(r){return Ii.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Ti(!0,!1)},i={get(r){return bi(this,r,!0,!0)},get size(){return wi(this,!0)},has(r){return Ii.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Si(r,!1,!1),n[r]=Si(r,!0,!1),e[r]=Si(r,!1,!0),i[r]=Si(r,!0,!0)}),[t,n,e,i]}const[Rh,xh,kh,Oh]=Ah();function Fr(t,e){const n=e?t?Oh:kh:t?xh:Rh;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ee(n,s)&&s in i?n:i,s,r)}const Ph={get:Fr(!1,!1)},Dh={get:Fr(!1,!0)},Mh={get:Fr(!0,!1)},Ia=new WeakMap,wa=new WeakMap,Ta=new WeakMap,Fh=new WeakMap;function Lh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uh(t){return t.__v_skip||!Object.isExtensible(t)?0:Lh(lh(t))}function Lr(t){return Sn(t)?t:Ur(t,!1,ba,Ph,Ia)}function $h(t){return Ur(t,!1,Nh,Dh,wa)}function Sa(t){return Ur(t,!0,Sh,Mh,Ta)}function Ur(t,e,n,i,s){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Uh(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function yn(t){return Sn(t)?yn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function Fi(t){return!!(t&&t.__v_isShallow)}function Na(t){return yn(t)||Sn(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function Aa(t){return Mi(t,"__v_skip",!0),t}const Zn=t=>ye(t)?Lr(t):t,$r=t=>ye(t)?Sa(t):t;function Ra(t){Nt&&Ze&&(t=se(t),va(t.dep||(t.dep=Or())))}function xa(t,e){t=se(t),t.dep&&qs(t.dep)}function ke(t){return!!(t&&t.__v_isRef===!0)}function Bh(t){return Wh(t,!1)}function Wh(t,e){return ke(t)?t:new Hh(t,e)}class Hh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:Zn(e)}get value(){return Ra(this),this._value}set value(e){const n=this.__v_isShallow||Fi(e)||Sn(e);e=n?e:se(e),Xn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zn(e),xa(this))}}function ka(t){return ke(t)?t.value:t}const Vh={get:(t,e,n)=>ka(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Oa(t){return yn(t)?t:new Proxy(t,Vh)}var Pa;class jh{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pa]=!1,this._dirty=!0,this.effect=new Pr(e,()=>{this._dirty||(this._dirty=!0,xa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=se(this);return Ra(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pa="__v_isReadonly";function zh(t,e,n=!1){let i,s;const r=G(t);return r?(i=t,s=st):(i=t.get,s=t.set),new jh(i,s,r||!s,n)}function At(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){ls(r,e,n)}return s}function qe(t,e,n,i){if(G(t)){const r=At(t,e,n,i);return r&&da(r)&&r.catch(o=>{ls(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(qe(t[r],e,n,i));return s}function ls(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){At(a,null,10,[t,o,l]);return}}Kh(t,n,s,i)}function Kh(t,e,n,i=!0){console.error(t)}let ei=!1,Gs=!1;const xe=[];let ht=0;const vn=[];let gt=null,jt=0;const Da=Promise.resolve();let Br=null;function qh(t){const e=Br||Da;return t?e.then(this?t.bind(this):t):e}function Gh(t){let e=ht+1,n=xe.length;for(;e<n;){const i=e+n>>>1;ti(xe[i])<t?e=i+1:n=i}return e}function Wr(t){(!xe.length||!xe.includes(t,ei&&t.allowRecurse?ht+1:ht))&&(t.id==null?xe.push(t):xe.splice(Gh(t.id),0,t),Ma())}function Ma(){!ei&&!Gs&&(Gs=!0,Br=Da.then(La))}function Yh(t){const e=xe.indexOf(t);e>ht&&xe.splice(e,1)}function Qh(t){q(t)?vn.push(...t):(!gt||!gt.includes(t,t.allowRecurse?jt+1:jt))&&vn.push(t),Ma()}function Vo(t,e=ei?ht+1:0){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function Fa(t){if(vn.length){const e=[...new Set(vn)];if(vn.length=0,gt){gt.push(...e);return}for(gt=e,gt.sort((n,i)=>ti(n)-ti(i)),jt=0;jt<gt.length;jt++)gt[jt]();gt=null,jt=0}}const ti=t=>t.id==null?1/0:t.id,Jh=(t,e)=>{const n=ti(t)-ti(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function La(t){Gs=!1,ei=!0,xe.sort(Jh);const e=st;try{for(ht=0;ht<xe.length;ht++){const n=xe[ht];n&&n.active!==!1&&At(n,null,14)}}finally{ht=0,xe.length=0,Fa(),ei=!1,Br=null,(xe.length||vn.length)&&La()}}function Xh(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||fe;f&&(s=n.map(_=>_.trim())),h&&(s=n.map(uh))}let l,a=i[l=Es(e)]||i[l=Es(Tn(e))];!a&&r&&(a=i[l=Es(Pn(e))]),a&&qe(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(c,t,6,s)}}function Ua(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!G(t)){const a=c=>{const u=Ua(c,e,!0);u&&(l=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ye(t)&&i.set(t,null),null):(q(r)?r.forEach(a=>o[a]=null):Oe(o,r),ye(t)&&i.set(t,o),o)}function as(t,e){return!t||!is(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Pn(e))||ee(t,e))}let ft=null,cs=null;function Li(t){const e=ft;return ft=t,cs=t&&t.type.__scopeId||null,e}function $a(t){cs=t}function Ba(){cs=null}function Zh(t,e=ft,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&el(-1);const r=Li(e),o=t(...s);return Li(r),i._d&&el(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Is(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:C,inheritAttrs:A}=t;let R,z;const Z=Li(t);try{if(n.shapeFlag&4){const L=s||i;R=ut(u.call(L,L,h,r,_,f,C)),z=a}else{const L=e;R=ut(L.length>1?L(r,{attrs:a,slots:l,emit:c}):L(r,null)),z=e.props?a:ed(a)}}catch(L){zn.length=0,ls(L,t,1),R=pt(rt)}let x=R;if(z&&A!==!1){const L=Object.keys(z),{shapeFlag:Y}=x;L.length&&Y&7&&(o&&L.some(Ar)&&(z=td(z,o)),x=Pt(x,z))}return n.dirs&&(x=Pt(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),R=x,Li(Z),R}const ed=t=>{let e;for(const n in t)(n==="class"||n==="style"||is(n))&&((e||(e={}))[n]=t[n]);return e},td=(t,e)=>{const n={};for(const i in t)(!Ar(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function nd(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?jo(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!as(c,f))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?jo(i,o,c):!0:!!o;return!1}function jo(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!as(n,r))return!0}return!1}function id({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sd=t=>t.__isSuspense;function rd(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Qh(t)}function od(t,e){if(Ne){let n=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===n&&(n=Ne.provides=Object.create(i)),n[t]=e}}function ws(t,e,n=!1){const i=Ne||ft;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&G(e)?e.call(i.proxy):e}}const zo={};function Ts(t,e,n){return Wa(t,e,n)}function Wa(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=fe){const l=Ne;let a,c=!1,u=!1;if(ke(t)?(a=()=>t.value,c=Fi(t)):yn(t)?(a=()=>t,i=!0):q(t)?(u=!0,c=t.some(z=>yn(z)||Fi(z)),a=()=>t.map(z=>{if(ke(z))return z.value;if(yn(z))return fn(z);if(G(z))return At(z,l,2)})):G(t)?e?a=()=>At(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),qe(t,l,3,[f])}:a=st,e&&i){const z=a;a=()=>fn(z())}let h,f=z=>{h=R.onStop=()=>{At(z,l,4)}};if(ii)return f=st,e?n&&qe(e,l,3,[a(),u?[]:void 0,f]):a(),st;let _=u?[]:zo;const C=()=>{if(!!R.active)if(e){const z=R.run();(i||c||(u?z.some((Z,x)=>Xn(Z,_[x])):Xn(z,_)))&&(h&&h(),qe(e,l,3,[z,_===zo?void 0:_,f]),_=z)}else R.run()};C.allowRecurse=!!e;let A;s==="sync"?A=C:s==="post"?A=()=>Le(C,l&&l.suspense):(C.pre=!0,l&&(C.id=l.uid),A=()=>Wr(C));const R=new Pr(a,A);return e?n?C():_=R.run():s==="post"?Le(R.run.bind(R),l&&l.suspense):R.run(),()=>{R.stop(),l&&l.scope&&Rr(l.scope.effects,R)}}function ld(t,e,n){const i=this.proxy,s=Te(t)?t.includes(".")?Ha(i,t):()=>i[t]:t.bind(i,i);let r;G(e)?r=e:(r=e.handler,n=e);const o=Ne;Nn(this);const l=Wa(s,r.bind(i),n);return o?Nn(o):Qt(),l}function Ha(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function fn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))fn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)fn(t[n],e);else if(ha(t)||mn(t))t.forEach(n=>{fn(n,e)});else if(pa(t))for(const n in t)fn(t[n],e);return t}function ad(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qa(()=>{t.isMounted=!0}),Ga(()=>{t.isUnmounting=!0}),t}const ze=[Function,Array],cd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},setup(t,{slots:e}){const n=Yd(),i=ad();let s;return()=>{const r=e.default&&ja(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const A of r)if(A.type!==rt){o=A;break}}const l=se(t),{mode:a}=l;if(i.isLeaving)return Ss(o);const c=Ko(o);if(!c)return Ss(o);const u=Ys(c,l,i,n);Qs(c,u);const h=n.subTree,f=h&&Ko(h);let _=!1;const{getTransitionKey:C}=c.type;if(C){const A=C();s===void 0?s=A:A!==s&&(s=A,_=!0)}if(f&&f.type!==rt&&(!zt(c,f)||_)){const A=Ys(f,l,i,n);if(Qs(f,A),a==="out-in")return i.isLeaving=!0,A.afterLeave=()=>{i.isLeaving=!1,n.update()},Ss(o);a==="in-out"&&c.type!==rt&&(A.delayLeave=(R,z,Z)=>{const x=Va(i,f);x[String(f.key)]=f,R._leaveCb=()=>{z(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=Z})}return o}}},ud=cd;function Va(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ys(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:C,onBeforeAppear:A,onAppear:R,onAfterAppear:z,onAppearCancelled:Z}=e,x=String(t.key),L=Va(n,t),Y=($,W)=>{$&&qe($,i,9,W)},le=($,W)=>{const H=W[1];Y($,W),q($)?$.every(Ce=>Ce.length<=1)&&H():$.length<=1&&H()},U={mode:r,persisted:o,beforeEnter($){let W=l;if(!n.isMounted)if(s)W=A||l;else return;$._leaveCb&&$._leaveCb(!0);const H=L[x];H&&zt(t,H)&&H.el._leaveCb&&H.el._leaveCb(),Y(W,[$])},enter($){let W=a,H=c,Ce=u;if(!n.isMounted)if(s)W=R||a,H=z||c,Ce=Z||u;else return;let Fe=!1;const V=$._enterCb=O=>{Fe||(Fe=!0,O?Y(Ce,[$]):Y(H,[$]),U.delayedLeave&&U.delayedLeave(),$._enterCb=void 0)};W?le(W,[$,V]):V()},leave($,W){const H=String(t.key);if($._enterCb&&$._enterCb(!0),n.isUnmounting)return W();Y(h,[$]);let Ce=!1;const Fe=$._leaveCb=V=>{Ce||(Ce=!0,W(),V?Y(C,[$]):Y(_,[$]),$._leaveCb=void 0,L[H]===t&&delete L[H])};L[H]=t,f?le(f,[$,Fe]):Fe()},clone($){return Ys($,e,n,i)}};return U}function Ss(t){if(us(t))return t=Pt(t),t.children=null,t}function Ko(t){return us(t)?t.children?t.children[0]:void 0:t}function Qs(t,e){t.shapeFlag&6&&t.component?Qs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ja(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===He?(o.patchFlag&128&&s++,i=i.concat(ja(o.children,e,l))):(e||o.type!==rt)&&i.push(l!=null?Pt(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function za(t){return G(t)?{setup:t,name:t.name}:t}const Oi=t=>!!t.type.__asyncLoader,us=t=>t.type.__isKeepAlive;function hd(t,e){Ka(t,"a",e)}function dd(t,e){Ka(t,"da",e)}function Ka(t,e,n=Ne){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(hs(e,i,n),n){let s=n.parent;for(;s&&s.parent;)us(s.parent.vnode)&&fd(i,e,n,s),s=s.parent}}function fd(t,e,n,i){const s=hs(e,t,i,!0);Ya(()=>{Rr(i[e],s)},n)}function hs(t,e,n=Ne,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),Nn(n);const l=qe(e,n,t,o);return Qt(),Mn(),l});return i?s.unshift(r):s.push(r),r}}const Ct=t=>(e,n=Ne)=>(!ii||t==="sp")&&hs(t,e,n),pd=Ct("bm"),qa=Ct("m"),_d=Ct("bu"),gd=Ct("u"),Ga=Ct("bum"),Ya=Ct("um"),md=Ct("sp"),yd=Ct("rtg"),vd=Ct("rtc");function Cd(t,e=Ne){hs("ec",t,e)}function Ut(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Dn(),qe(a,n,8,[t.el,l,t,e]),Mn())}}const Ed=Symbol();function qo(t,e,n,i){let s;const r=n&&n[i];if(q(t)||Te(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}const Js=t=>t?oc(t)?Kr(t)||t.proxy:Js(t.parent):null,Ui=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Js(t.parent),$root:t=>Js(t.root),$emit:t=>t.emit,$options:t=>Hr(t),$forceUpdate:t=>t.f||(t.f=()=>Wr(t.update)),$nextTick:t=>t.n||(t.n=qh.bind(t.proxy)),$watch:t=>ld.bind(t)}),bd={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==fe&&ee(i,e))return o[e]=1,i[e];if(s!==fe&&ee(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,r[e];if(n!==fe&&ee(n,e))return o[e]=4,n[e];Xs&&(o[e]=0)}}const u=Ui[e];let h,f;if(u)return e==="$attrs"&&je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==fe&&ee(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,ee(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==fe&&ee(s,e)?(s[e]=n,!0):i!==fe&&ee(i,e)?(i[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==fe&&ee(t,o)||e!==fe&&ee(e,o)||(l=r[0])&&ee(l,o)||ee(i,o)||ee(Ui,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xs=!0;function Id(t){const e=Hr(t),n=t.proxy,i=t.ctx;Xs=!1,e.beforeCreate&&Go(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:C,activated:A,deactivated:R,beforeDestroy:z,beforeUnmount:Z,destroyed:x,unmounted:L,render:Y,renderTracked:le,renderTriggered:U,errorCaptured:$,serverPrefetch:W,expose:H,inheritAttrs:Ce,components:Fe,directives:V,filters:O}=e;if(c&&wd(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const E in o){const k=o[E];G(k)&&(i[E]=k.bind(n))}if(s){const E=s.call(n,n);ye(E)&&(t.data=Lr(E))}if(Xs=!0,r)for(const E in r){const k=r[E],B=G(k)?k.bind(n,n):G(k.get)?k.get.bind(n,n):st,ne=!G(k)&&G(k.set)?k.set.bind(n):st,de=tf({get:B,set:ne});Object.defineProperty(i,E,{enumerable:!0,configurable:!0,get:()=>de.value,set:oe=>de.value=oe})}if(l)for(const E in l)Qa(l[E],i,n,E);if(a){const E=G(a)?a.call(n):a;Reflect.ownKeys(E).forEach(k=>{od(k,E[k])})}u&&Go(u,t,"c");function D(E,k){q(k)?k.forEach(B=>E(B.bind(n))):k&&E(k.bind(n))}if(D(pd,h),D(qa,f),D(_d,_),D(gd,C),D(hd,A),D(dd,R),D(Cd,$),D(vd,le),D(yd,U),D(Ga,Z),D(Ya,L),D(md,W),q(H))if(H.length){const E=t.exposed||(t.exposed={});H.forEach(k=>{Object.defineProperty(E,k,{get:()=>n[k],set:B=>n[k]=B})})}else t.exposed||(t.exposed={});Y&&t.render===st&&(t.render=Y),Ce!=null&&(t.inheritAttrs=Ce),Fe&&(t.components=Fe),V&&(t.directives=V)}function wd(t,e,n=st,i=!1){q(t)&&(t=Zs(t));for(const s in t){const r=t[s];let o;ye(r)?"default"in r?o=ws(r.from||s,r.default,!0):o=ws(r.from||s):o=ws(r),ke(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Go(t,e,n){qe(q(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qa(t,e,n,i){const s=i.includes(".")?Ha(n,i):()=>n[i];if(Te(t)){const r=e[t];G(r)&&Ts(s,r)}else if(G(t))Ts(s,t.bind(n));else if(ye(t))if(q(t))t.forEach(r=>Qa(r,e,n,i));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Ts(s,r,t)}}function Hr(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>$i(a,c,o,!0)),$i(a,e,o)),ye(e)&&r.set(e,a),a}function $i(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&$i(t,r,n,!0),s&&s.forEach(o=>$i(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=Td[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Td={data:Yo,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:Wt,directives:Wt,watch:Nd,provide:Yo,inject:Sd};function Yo(t,e){return e?t?function(){return Oe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Sd(t,e){return Wt(Zs(t),Zs(e))}function Zs(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function Wt(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function Nd(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const i in e)n[i]=Me(t[i],e[i]);return n}function Ad(t,e,n,i=!1){const s={},r={};Mi(r,ds,1),t.propsDefaults=Object.create(null),Ja(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:$h(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Rd(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=se(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(as(t.emitsOptions,f))continue;const _=e[f];if(a)if(ee(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const C=Tn(f);s[C]=er(a,l,C,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Ja(t,e,s,r)&&(c=!0);let u;for(const h in l)(!e||!ee(e,h)&&((u=Pn(h))===h||!ee(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=er(a,l,h,void 0,t,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!ee(e,h)&&!0)&&(delete r[h],c=!0)}c&&vt(t,"set","$attrs")}function Ja(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ki(a))continue;const c=e[a];let u;s&&ee(s,u=Tn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:as(t.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=se(n),c=l||fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=er(s,a,h,c[h],t,!ee(c,h))}}return o}function er(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=ee(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&G(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(Nn(s),i=c[n]=a.call(null,e),Qt())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Pn(n))&&(i=!0))}return i}function Xa(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!G(t)){const u=h=>{a=!0;const[f,_]=Xa(h,e,!0);Oe(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ye(t)&&i.set(t,gn),gn;if(q(r))for(let u=0;u<r.length;u++){const h=Tn(r[u]);Qo(h)&&(o[h]=fe)}else if(r)for(const u in r){const h=Tn(u);if(Qo(h)){const f=r[u],_=o[h]=q(f)||G(f)?{type:f}:f;if(_){const C=Zo(Boolean,_.type),A=Zo(String,_.type);_[0]=C>-1,_[1]=A<0||C<A,(C>-1||ee(_,"default"))&&l.push(h)}}}const c=[o,l];return ye(t)&&i.set(t,c),c}function Qo(t){return t[0]!=="$"}function Jo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Xo(t,e){return Jo(t)===Jo(e)}function Zo(t,e){return q(e)?e.findIndex(n=>Xo(n,t)):G(e)&&Xo(e,t)?0:-1}const Za=t=>t[0]==="_"||t==="$stable",Vr=t=>q(t)?t.map(ut):[ut(t)],xd=(t,e,n)=>{if(e._n)return e;const i=Zh((...s)=>Vr(e(...s)),n);return i._c=!1,i},ec=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Za(s))continue;const r=t[s];if(G(r))e[s]=xd(s,r,i);else if(r!=null){const o=Vr(r);e[s]=()=>o}}},tc=(t,e)=>{const n=Vr(e);t.slots.default=()=>n},kd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),Mi(e,"_",n)):ec(e,t.slots={})}else t.slots={},e&&tc(t,e);Mi(t.slots,ds,1)},Od=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=fe;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Oe(s,e),!n&&l===1&&delete s._):(r=!e.$stable,ec(e,s)),o=e}else e&&(tc(t,e),o={default:1});if(r)for(const l in s)!Za(l)&&!(l in o)&&delete s[l]};function nc(){return{app:null,config:{isNativeTag:sh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pd=0;function Dd(t,e){return function(i,s=null){G(i)||(i=Object.assign({},i)),s!=null&&!ye(s)&&(s=null);const r=nc(),o=new Set;let l=!1;const a=r.app={_uid:Pd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:nf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(a,...u)):G(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=pt(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Kr(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function tr(t,e,n,i,s=!1){if(q(t)){t.forEach((f,_)=>tr(f,e&&(q(e)?e[_]:e),n,i,s));return}if(Oi(i)&&!s)return;const r=i.shapeFlag&4?Kr(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===fe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Te(c)?(u[c]=null,ee(h,c)&&(h[c]=null)):ke(c)&&(c.value=null)),G(a))At(a,l,12,[o,u]);else{const f=Te(a),_=ke(a);if(f||_){const C=()=>{if(t.f){const A=f?u[a]:a.value;s?q(A)&&Rr(A,r):q(A)?A.includes(r)||A.push(r):f?(u[a]=[r],ee(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,ee(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Le(C,n)):C()}}}const Le=rd;function Md(t){return Fd(t)}function Fd(t,e){const n=hh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=st,cloneNode:C,insertStaticContent:A}=t,R=(d,p,g,y=null,m=null,w=null,N=!1,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!zt(d,p)&&(y=Qe(d),_e(d,m,w,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:v,ref:M,shapeFlag:P}=p;switch(v){case jr:z(d,p,g,y);break;case rt:Z(d,p,g,y);break;case Ns:d==null&&x(p,g,y,N);break;case He:V(d,p,g,y,m,w,N,I,T);break;default:P&1?le(d,p,g,y,m,w,N,I,T):P&6?O(d,p,g,y,m,w,N,I,T):(P&64||P&128)&&v.process(d,p,g,y,m,w,N,I,T,De)}M!=null&&m&&tr(M,d&&d.ref,w,p||d,!p)},z=(d,p,g,y)=>{if(d==null)i(p.el=l(p.children),g,y);else{const m=p.el=d.el;p.children!==d.children&&c(m,p.children)}},Z=(d,p,g,y)=>{d==null?i(p.el=a(p.children||""),g,y):p.el=d.el},x=(d,p,g,y)=>{[d.el,d.anchor]=A(d.children,p,g,y,d.el,d.anchor)},L=({el:d,anchor:p},g,y)=>{let m;for(;d&&d!==p;)m=f(d),i(d,g,y),d=m;i(p,g,y)},Y=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),s(d),d=g;s(p)},le=(d,p,g,y,m,w,N,I,T)=>{N=N||p.type==="svg",d==null?U(p,g,y,m,w,N,I,T):H(d,p,m,w,N,I,T)},U=(d,p,g,y,m,w,N,I)=>{let T,v;const{type:M,props:P,shapeFlag:F,transition:K,patchFlag:te,dirs:ae}=d;if(d.el&&C!==void 0&&te===-1)T=d.el=C(d.el);else{if(T=d.el=o(d.type,w,P&&P.is,P),F&8?u(T,d.children):F&16&&W(d.children,T,null,y,m,w&&M!=="foreignObject",N,I),ae&&Ut(d,null,y,"created"),P){for(const ge in P)ge!=="value"&&!ki(ge)&&r(T,ge,null,P[ge],w,d.children,y,m,Pe);"value"in P&&r(T,"value",null,P.value),(v=P.onVnodeBeforeMount)&&at(v,y,d)}$(T,d,d.scopeId,N,y)}ae&&Ut(d,null,y,"beforeMount");const ce=(!m||m&&!m.pendingBranch)&&K&&!K.persisted;ce&&K.beforeEnter(T),i(T,p,g),((v=P&&P.onVnodeMounted)||ce||ae)&&Le(()=>{v&&at(v,y,d),ce&&K.enter(T),ae&&Ut(d,null,y,"mounted")},m)},$=(d,p,g,y,m)=>{if(g&&_(d,g),y)for(let w=0;w<y.length;w++)_(d,y[w]);if(m){let w=m.subTree;if(p===w){const N=m.vnode;$(d,N,N.scopeId,N.slotScopeIds,m.parent)}}},W=(d,p,g,y,m,w,N,I,T=0)=>{for(let v=T;v<d.length;v++){const M=d[v]=I?St(d[v]):ut(d[v]);R(null,M,p,g,y,m,w,N,I)}},H=(d,p,g,y,m,w,N)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:v,dirs:M}=p;T|=d.patchFlag&16;const P=d.props||fe,F=p.props||fe;let K;g&&$t(g,!1),(K=F.onVnodeBeforeUpdate)&&at(K,g,p,d),M&&Ut(p,d,g,"beforeUpdate"),g&&$t(g,!0);const te=m&&p.type!=="foreignObject";if(v?Ce(d.dynamicChildren,v,I,g,y,te,w):N||B(d,p,I,null,g,y,te,w,!1),T>0){if(T&16)Fe(I,p,P,F,g,y,m);else if(T&2&&P.class!==F.class&&r(I,"class",null,F.class,m),T&4&&r(I,"style",P.style,F.style,m),T&8){const ae=p.dynamicProps;for(let ce=0;ce<ae.length;ce++){const ge=ae[ce],Je=P[ge],hn=F[ge];(hn!==Je||ge==="value")&&r(I,ge,Je,hn,m,d.children,g,y,Pe)}}T&1&&d.children!==p.children&&u(I,p.children)}else!N&&v==null&&Fe(I,p,P,F,g,y,m);((K=F.onVnodeUpdated)||M)&&Le(()=>{K&&at(K,g,p,d),M&&Ut(p,d,g,"updated")},y)},Ce=(d,p,g,y,m,w,N)=>{for(let I=0;I<p.length;I++){const T=d[I],v=p[I],M=T.el&&(T.type===He||!zt(T,v)||T.shapeFlag&70)?h(T.el):g;R(T,v,M,null,y,m,w,N,!0)}},Fe=(d,p,g,y,m,w,N)=>{if(g!==y){for(const I in y){if(ki(I))continue;const T=y[I],v=g[I];T!==v&&I!=="value"&&r(d,I,v,T,N,p.children,m,w,Pe)}if(g!==fe)for(const I in g)!ki(I)&&!(I in y)&&r(d,I,g[I],null,N,p.children,m,w,Pe);"value"in y&&r(d,"value",g.value,y.value)}},V=(d,p,g,y,m,w,N,I,T)=>{const v=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:K}=p;K&&(I=I?I.concat(K):K),d==null?(i(v,g,y),i(M,g,y),W(p.children,g,M,m,w,N,I,T)):P>0&&P&64&&F&&d.dynamicChildren?(Ce(d.dynamicChildren,F,g,m,w,N,I),(p.key!=null||m&&p===m.subTree)&&ic(d,p,!0)):B(d,p,g,M,m,w,N,I,T)},O=(d,p,g,y,m,w,N,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?m.ctx.activate(p,g,y,N,T):S(p,g,y,m,w,N,T):D(d,p,T)},S=(d,p,g,y,m,w,N)=>{const I=d.component=Gd(d,y,m);if(us(d)&&(I.ctx.renderer=De),Qd(I),I.asyncDep){if(m&&m.registerDep(I,E),!d.el){const T=I.subTree=pt(rt);Z(null,T,p,g)}return}E(I,d,p,g,m,w,N)},D=(d,p,g)=>{const y=p.component=d.component;if(nd(d,p,g))if(y.asyncDep&&!y.asyncResolved){k(y,p,g);return}else y.next=p,Yh(y.update),y.update();else p.el=d.el,y.vnode=p},E=(d,p,g,y,m,w,N)=>{const I=()=>{if(d.isMounted){let{next:M,bu:P,u:F,parent:K,vnode:te}=d,ae=M,ce;$t(d,!1),M?(M.el=te.el,k(d,M,N)):M=te,P&&bs(P),(ce=M.props&&M.props.onVnodeBeforeUpdate)&&at(ce,K,M,te),$t(d,!0);const ge=Is(d),Je=d.subTree;d.subTree=ge,R(Je,ge,h(Je.el),Qe(Je),d,m,w),M.el=ge.el,ae===null&&id(d,ge.el),F&&Le(F,m),(ce=M.props&&M.props.onVnodeUpdated)&&Le(()=>at(ce,K,M,te),m)}else{let M;const{el:P,props:F}=p,{bm:K,m:te,parent:ae}=d,ce=Oi(p);if($t(d,!1),K&&bs(K),!ce&&(M=F&&F.onVnodeBeforeMount)&&at(M,ae,p),$t(d,!0),P&&It){const ge=()=>{d.subTree=Is(d),It(P,d.subTree,d,m,null)};ce?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ge()):ge()}else{const ge=d.subTree=Is(d);R(null,ge,g,y,d,m,w),p.el=ge.el}if(te&&Le(te,m),!ce&&(M=F&&F.onVnodeMounted)){const ge=p;Le(()=>at(M,ae,ge),m)}(p.shapeFlag&256||ae&&Oi(ae.vnode)&&ae.vnode.shapeFlag&256)&&d.a&&Le(d.a,m),d.isMounted=!0,p=g=y=null}},T=d.effect=new Pr(I,()=>Wr(v),d.scope),v=d.update=()=>T.run();v.id=d.uid,$t(d,!0),v()},k=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Rd(d,p.props,y,g),Od(d,p.children,g),Dn(),Vo(),Mn()},B=(d,p,g,y,m,w,N,I,T=!1)=>{const v=d&&d.children,M=d?d.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:K}=p;if(F>0){if(F&128){de(v,P,g,y,m,w,N,I,T);return}else if(F&256){ne(v,P,g,y,m,w,N,I,T);return}}K&8?(M&16&&Pe(v,m,w),P!==v&&u(g,P)):M&16?K&16?de(v,P,g,y,m,w,N,I,T):Pe(v,m,w,!0):(M&8&&u(g,""),K&16&&W(P,g,y,m,w,N,I,T))},ne=(d,p,g,y,m,w,N,I,T)=>{d=d||gn,p=p||gn;const v=d.length,M=p.length,P=Math.min(v,M);let F;for(F=0;F<P;F++){const K=p[F]=T?St(p[F]):ut(p[F]);R(d[F],K,g,null,m,w,N,I,T)}v>M?Pe(d,m,w,!0,!1,P):W(p,g,y,m,w,N,I,T,P)},de=(d,p,g,y,m,w,N,I,T)=>{let v=0;const M=p.length;let P=d.length-1,F=M-1;for(;v<=P&&v<=F;){const K=d[v],te=p[v]=T?St(p[v]):ut(p[v]);if(zt(K,te))R(K,te,g,null,m,w,N,I,T);else break;v++}for(;v<=P&&v<=F;){const K=d[P],te=p[F]=T?St(p[F]):ut(p[F]);if(zt(K,te))R(K,te,g,null,m,w,N,I,T);else break;P--,F--}if(v>P){if(v<=F){const K=F+1,te=K<M?p[K].el:y;for(;v<=F;)R(null,p[v]=T?St(p[v]):ut(p[v]),g,te,m,w,N,I,T),v++}}else if(v>F)for(;v<=P;)_e(d[v],m,w,!0),v++;else{const K=v,te=v,ae=new Map;for(v=te;v<=F;v++){const We=p[v]=T?St(p[v]):ut(p[v]);We.key!=null&&ae.set(We.key,v)}let ce,ge=0;const Je=F-te+1;let hn=!1,Oo=0;const $n=new Array(Je);for(v=0;v<Je;v++)$n[v]=0;for(v=K;v<=P;v++){const We=d[v];if(ge>=Je){_e(We,m,w,!0);continue}let lt;if(We.key!=null)lt=ae.get(We.key);else for(ce=te;ce<=F;ce++)if($n[ce-te]===0&&zt(We,p[ce])){lt=ce;break}lt===void 0?_e(We,m,w,!0):($n[lt-te]=v+1,lt>=Oo?Oo=lt:hn=!0,R(We,p[lt],g,null,m,w,N,I,T),ge++)}const Po=hn?Ld($n):gn;for(ce=Po.length-1,v=Je-1;v>=0;v--){const We=te+v,lt=p[We],Do=We+1<M?p[We+1].el:y;$n[v]===0?R(null,lt,g,Do,m,w,N,I,T):hn&&(ce<0||v!==Po[ce]?oe(lt,g,Do,2):ce--)}}},oe=(d,p,g,y,m=null)=>{const{el:w,type:N,transition:I,children:T,shapeFlag:v}=d;if(v&6){oe(d.component.subTree,p,g,y);return}if(v&128){d.suspense.move(p,g,y);return}if(v&64){N.move(d,p,g,De);return}if(N===He){i(w,p,g);for(let P=0;P<T.length;P++)oe(T[P],p,g,y);i(d.anchor,p,g);return}if(N===Ns){L(d,p,g);return}if(y!==2&&v&1&&I)if(y===0)I.beforeEnter(w),i(w,p,g),Le(()=>I.enter(w),m);else{const{leave:P,delayLeave:F,afterLeave:K}=I,te=()=>i(w,p,g),ae=()=>{P(w,()=>{te(),K&&K()})};F?F(w,te,ae):ae()}else i(w,p,g)},_e=(d,p,g,y=!1,m=!1)=>{const{type:w,props:N,ref:I,children:T,dynamicChildren:v,shapeFlag:M,patchFlag:P,dirs:F}=d;if(I!=null&&tr(I,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const K=M&1&&F,te=!Oi(d);let ae;if(te&&(ae=N&&N.onVnodeBeforeUnmount)&&at(ae,p,d),M&6)Ft(d.component,g,y);else{if(M&128){d.suspense.unmount(g,y);return}K&&Ut(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,m,De,y):v&&(w!==He||P>0&&P&64)?Pe(v,p,g,!1,!0):(w===He&&P&384||!m&&M&16)&&Pe(T,p,g),y&&Ge(d)}(te&&(ae=N&&N.onVnodeUnmounted)||K)&&Le(()=>{ae&&at(ae,p,d),K&&Ut(d,null,p,"unmounted")},g)},Ge=d=>{const{type:p,el:g,anchor:y,transition:m}=d;if(p===He){Ye(g,y);return}if(p===Ns){Y(d);return}const w=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:N,delayLeave:I}=m,T=()=>N(g,w);I?I(d.el,w,T):T()}else w()},Ye=(d,p)=>{let g;for(;d!==p;)g=f(d),s(d),d=g;s(p)},Ft=(d,p,g)=>{const{bum:y,scope:m,update:w,subTree:N,um:I}=d;y&&bs(y),m.stop(),w&&(w.active=!1,_e(N,d,p,g)),I&&Le(I,p),Le(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Pe=(d,p,g,y=!1,m=!1,w=0)=>{for(let N=w;N<d.length;N++)_e(d[N],p,g,y,m)},Qe=d=>d.shapeFlag&6?Qe(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Se=(d,p,g)=>{d==null?p._vnode&&_e(p._vnode,null,null,!0):R(p._vnode||null,d,p,null,null,null,g),Vo(),Fa(),p._vnode=d},De={p:R,um:_e,m:oe,r:Ge,mt:S,mc:W,pc:B,pbc:Ce,n:Qe,o:t};let Lt,It;return e&&([Lt,It]=e(De)),{render:Se,hydrate:Lt,createApp:Dd(Se,Lt)}}function $t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ic(t,e,n=!1){const i=t.children,s=e.children;if(q(i)&&q(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=St(s[r]),l.el=o.el),n||ic(o,l))}}function Ld(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ud=t=>t.__isTeleport,He=Symbol(void 0),jr=Symbol(void 0),rt=Symbol(void 0),Ns=Symbol(void 0),zn=[];let tt=null;function Ke(t=!1){zn.push(tt=t?null:[])}function $d(){zn.pop(),tt=zn[zn.length-1]||null}let ni=1;function el(t){ni+=t}function sc(t){return t.dynamicChildren=ni>0?tt||gn:null,$d(),ni>0&&tt&&tt.push(t),t}function Xe(t,e,n,i,s,r){return sc(dt(t,e,n,i,s,r,!0))}function Bd(t,e,n,i,s){return sc(pt(t,e,n,i,s,!0))}function Wd(t){return t?t.__v_isVNode===!0:!1}function zt(t,e){return t.type===e.type&&t.key===e.key}const ds="__vInternal",rc=({key:t})=>t!=null?t:null,Pi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||ke(t)||G(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function dt(t,e=null,n=null,i=0,s=null,r=t===He?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rc(e),ref:e&&Pi(e),scopeId:cs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(zr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Te(n)?8:16),ni>0&&!o&&tt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&tt.push(a),a}const pt=Hd;function Hd(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Ed)&&(t=rt),Wd(t)){const l=Pt(t,e,!0);return n&&zr(l,n),ni>0&&!r&&tt&&(l.shapeFlag&6?tt[tt.indexOf(t)]=l:tt.push(l)),l.patchFlag|=-2,l}if(ef(t)&&(t=t.__vccOpts),e){e=Vd(e);let{class:l,style:a}=e;l&&!Te(l)&&(e.class=Nr(l)),ye(a)&&(Na(a)&&!q(a)&&(a=Oe({},a)),e.style=Sr(a))}const o=Te(t)?1:sd(t)?128:Ud(t)?64:ye(t)?4:G(t)?2:0;return dt(t,e,n,i,s,o,r,!0)}function Vd(t){return t?Na(t)||ds in t?Oe({},t):t:null}function Pt(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?zd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&rc(l),ref:e&&e.ref?n&&s?q(s)?s.concat(Pi(e)):[s,Pi(e)]:Pi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor}}function jd(t=" ",e=0){return pt(jr,null,t,e)}function As(t="",e=!1){return e?(Ke(),Bd(rt,null,t)):pt(rt,null,t)}function ut(t){return t==null||typeof t=="boolean"?pt(rt):q(t)?pt(He,null,t.slice()):typeof t=="object"?St(t):pt(jr,null,String(t))}function St(t){return t.el===null||t.memo?t:Pt(t)}function zr(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ds in e)?e._ctx=ft:s===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),i&64?(n=16,e=[jd(e)]):n=8);t.children=e,t.shapeFlag|=n}function zd(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Nr([e.class,i.class]));else if(s==="style")e.style=Sr([e.style,i.style]);else if(is(s)){const r=e[s],o=i[s];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function at(t,e,n,i=null){qe(t,e,7,[n,i])}const Kd=nc();let qd=0;function Gd(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Kd,r={uid:qd++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xa(i,s),emitsOptions:Ua(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xh.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const Yd=()=>Ne||ft,Nn=t=>{Ne=t,t.scope.on()},Qt=()=>{Ne&&Ne.scope.off(),Ne=null};function oc(t){return t.vnode.shapeFlag&4}let ii=!1;function Qd(t,e=!1){ii=e;const{props:n,children:i}=t.vnode,s=oc(t);Ad(t,n,s,e),kd(t,i);const r=s?Jd(t,e):void 0;return ii=!1,r}function Jd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Aa(new Proxy(t.ctx,bd));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Zd(t):null;Nn(t),Dn();const r=At(i,t,0,[t.props,s]);if(Mn(),Qt(),da(r)){if(r.then(Qt,Qt),e)return r.then(o=>{tl(t,o,e)}).catch(o=>{ls(o,t,0)});t.asyncDep=r}else tl(t,r,e)}else lc(t,e)}function tl(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=Oa(e)),lc(t,n)}let nl;function lc(t,e,n){const i=t.type;if(!t.render){if(!e&&nl&&!i.render){const s=i.template||Hr(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=Oe(Oe({isCustomElement:r,delimiters:l},o),a);i.render=nl(s,c)}}t.render=i.render||st}Nn(t),Dn(),Id(t),Mn(),Qt()}function Xd(t){return new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}})}function Zd(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Xd(t))},slots:t.slots,emit:t.emit,expose:e}}function Kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(Aa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)}}))}function ef(t){return G(t)&&"__vccOpts"in t}const tf=(t,e)=>zh(t,e,ii),nf="3.2.39",sf="http://www.w3.org/2000/svg",Kt=typeof document!="undefined"?document:null,il=Kt&&Kt.createElement("template"),rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?Kt.createElementNS(sf,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{il.innerHTML=i?`<svg>${t}</svg>`:t;const l=il.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function of(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lf(t,e,n){const i=t.style,s=Te(n);if(n&&!s){for(const r in n)nr(i,r,n[r]);if(e&&!Te(e))for(const r in e)n[r]==null&&nr(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const sl=/\s*!important$/;function nr(t,e,n){if(q(n))n.forEach(i=>nr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=af(t,e);sl.test(n)?t.setProperty(Pn(i),n.replace(sl,""),"important"):t[i]=n}}const rl=["Webkit","Moz","ms"],Rs={};function af(t,e){const n=Rs[e];if(n)return n;let i=Tn(e);if(i!=="filter"&&i in t)return Rs[e]=i;i=_a(i);for(let s=0;s<rl.length;s++){const r=rl[s]+i;if(r in t)return Rs[e]=r}return e}const ol="http://www.w3.org/1999/xlink";function cf(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ol,e.slice(6,e.length)):t.setAttributeNS(ol,e,n);else{const r=eh(e);n==null||r&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function uf(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ca(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[ac,hf]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ir=0;const df=Promise.resolve(),ff=()=>{ir=0},pf=()=>ir||(df.then(ff),ir=ac());function _f(t,e,n,i){t.addEventListener(e,n,i)}function gf(t,e,n,i){t.removeEventListener(e,n,i)}function mf(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=yf(e);if(i){const c=r[e]=vf(i,s);_f(t,l,c,a)}else o&&(gf(t,l,o,a),r[e]=void 0)}}const ll=/(?:Once|Passive|Capture)$/;function yf(t){let e;if(ll.test(t)){e={};let i;for(;i=t.match(ll);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),e]}function vf(t,e){const n=i=>{const s=i.timeStamp||ac();(hf||s>=n.attached-1)&&qe(Cf(i,n.value),e,5,[i])};return n.value=t,n.attached=pf(),n}function Cf(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const al=/^on[a-z]/,Ef=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?of(t,i,s):e==="style"?lf(t,n,i):is(e)?Ar(e)||mf(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bf(t,e,i,s))?uf(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),cf(t,e,i,s))};function bf(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&al.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||al.test(e)&&Te(n)?!1:e in t}const If={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ud.props;const wf=Oe({patchProp:Ef},rf);let cl;function Tf(){return cl||(cl=Md(wf))}const Sf=(...t)=>{const e=Tf().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Nf(i);if(!s)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nf(t){return Te(t)?document.querySelector(t):t}/**
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
 */const cc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw Fn(e)},Fn=function(t){return new Error("Firebase Database ("+cc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Af=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),i.push(n[u],n[h],n[f],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Af(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(i.push(f),c!==64){const _=l<<4&240|c>>2;if(i.push(_),h!==64){const C=c<<6&192|h;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hc=function(t){const e=uc(t);return qr.encodeByteArray(e,!0)},dc=function(t){return hc(t).replace(/\./g,"")},sr=function(t){try{return qr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rf(t){return fc(void 0,t)}function fc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xf(n)||(t[n]=fc(t[n],e[n]));return t}function xf(t){return t!=="__proto__"}/**
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
 */function _t(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function kf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _c(){return cc.NODE_ADMIN===!0}function Of(){return typeof indexedDB=="object"}function Pf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Df="FirebaseError";class ln extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Df,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Mf(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ln(s,l,i)}}function Mf(t,e){return t.replace(Ff,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ff=/\{\$([^}]+)}/g;/**
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
 */function si(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const gc=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=si(sr(r[0])||""),n=si(sr(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Lf=function(t){const e=gc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Uf=function(t){const e=gc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function An(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(hl(r)&&hl(o)){if(!rr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function hl(t){return t!==null&&typeof t=="object"}/**
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
 */class $f{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(s<<5|s>>>27)+c+a+u+i[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Bf(t,e){const n=new Wf(t,e);return n.subscribe.bind(n)}class Wf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Hf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=xs),s.error===void 0&&(s.error=xs),s.complete===void 0&&(s.complete=xs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xs(){}function mc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Vf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,b(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fs=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class jf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Gr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kf(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zf(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zf(t){return t===Ht?void 0:t}function Kf(t){return t.instantiationMode==="EAGER"}/**
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
 */class qf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Gf={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Yf=ue.INFO,Qf={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Jf=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Qf[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jr{constructor(e){this.name=e,this._logLevel=Yf,this._logHandler=Jf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Xf=(t,e)=>e.some(n=>t instanceof n);let dl,fl;function Zf(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yc=new WeakMap,or=new WeakMap,vc=new WeakMap,ks=new WeakMap,Xr=new WeakMap;function tp(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yc.set(n,t)}).catch(()=>{}),Xr.set(e,t),e}function np(t){if(or.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});or.set(t,e)}let lr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ip(t){lr=t(lr)}function sp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Os(this),e,...n);return vc.set(i,e.sort?e.sort():[e]),Rt(i)}:ep().includes(t)?function(...e){return t.apply(Os(this),e),Rt(yc.get(this))}:function(...e){return Rt(t.apply(Os(this),e))}}function rp(t){return typeof t=="function"?sp(t):(t instanceof IDBTransaction&&np(t),Xf(t,Zf())?new Proxy(t,lr):t)}function Rt(t){if(t instanceof IDBRequest)return tp(t);if(ks.has(t))return ks.get(t);const e=rp(t);return e!==t&&(ks.set(t,e),Xr.set(e,t)),e}const Os=t=>Xr.get(t);function op(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=Rt(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Rt(o.result),a.oldVersion,a.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const lp=["get","getKey","getAll","getAllKeys","count"],ap=["put","add","delete","clear"],Ps=new Map;function pl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ps.get(e))return Ps.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ap.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||lp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Ps.set(e,r),r}ip(t=>({...t,get:(e,n,i)=>pl(e,n)||t.get(e,n,i),has:(e,n)=>!!pl(e,n)||t.has(e,n)}));/**
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
 */class cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(up(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function up(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ar="@firebase/app",_l="0.7.32";/**
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
 */const Zt=new Jr("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",pp="@firebase/app-check-compat",_p="@firebase/app-check",gp="@firebase/auth",mp="@firebase/auth-compat",yp="@firebase/database",vp="@firebase/database-compat",Cp="@firebase/functions",Ep="@firebase/functions-compat",bp="@firebase/installations",Ip="@firebase/installations-compat",wp="@firebase/messaging",Tp="@firebase/messaging-compat",Sp="@firebase/performance",Np="@firebase/performance-compat",Ap="@firebase/remote-config",Rp="@firebase/remote-config-compat",xp="@firebase/storage",kp="@firebase/storage-compat",Op="@firebase/firestore",Pp="@firebase/firestore-compat",Dp="firebase",Mp="9.9.4";/**
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
 */const Cc="[DEFAULT]",Fp={[ar]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[_p]:"fire-app-check",[pp]:"fire-app-check-compat",[gp]:"fire-auth",[mp]:"fire-auth-compat",[yp]:"fire-rtdb",[vp]:"fire-rtdb-compat",[Cp]:"fire-fn",[Ep]:"fire-fn-compat",[bp]:"fire-iid",[Ip]:"fire-iid-compat",[wp]:"fire-fcm",[Tp]:"fire-fcm-compat",[Sp]:"fire-perf",[Np]:"fire-perf-compat",[Ap]:"fire-rc",[Rp]:"fire-rc-compat",[xp]:"fire-gcs",[kp]:"fire-gcs-compat",[Op]:"fire-fst",[Pp]:"fire-fst-compat","fire-js":"fire-js",[Dp]:"fire-js-all"};/**
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
 */const Wi=new Map,cr=new Map;function Lp(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(cr.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;cr.set(e,t);for(const n of Wi.values())Lp(n,t);return!0}function Up(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $p={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},en=new pi("app","Firebase",$p);/**
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
 */class Bp{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=Mp;function Wp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw en.create("bad-app-name",{appName:String(i)});const s=Wi.get(i);if(s){if(rr(t,s.options)&&rr(n,s.config))return s;throw en.create("duplicate-app",{appName:i})}const r=new qf(i);for(const l of cr.values())r.addComponent(l);const o=new Bp(t,n,r);return Wi.set(i,o),o}function Hp(t=Cc){const e=Wi.get(t);if(!e)throw en.create("no-app",{appName:t});return e}function xt(t,e,n){var i;let s=(i=Fp[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}Rn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vp="firebase-heartbeat-database",jp=1,ri="firebase-heartbeat-store";let Ds=null;function Ec(){return Ds||(Ds=op(Vp,jp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ri)}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),Ds}async function zp(t){var e;try{return(await Ec()).transaction(ri).objectStore(ri).get(bc(t))}catch(n){if(n instanceof ln)Zt.warn(n.message);else{const i=en.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Zt.warn(i.message)}}}async function gl(t,e){var n;try{const s=(await Ec()).transaction(ri,"readwrite");return await s.objectStore(ri).put(e,bc(t)),s.done}catch(i){if(i instanceof ln)Zt.warn(i.message);else{const s=en.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Zt.warn(s.message)}}}function bc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kp=1024,qp=30*24*60*60*1e3;class Gp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ml();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=qp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ml(),{heartbeatsToSend:n,unsentEntries:i}=Yp(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ml(){return new Date().toISOString().substring(0,10)}function Yp(t,e=Kp){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),yl(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Qp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Of()?Pf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yl(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Jp(t){Rn(new Xt("platform-logger",e=>new cp(e),"PRIVATE")),Rn(new Xt("heartbeat",e=>new Gp(e),"PRIVATE")),xt(ar,_l,t),xt(ar,_l,"esm2017"),xt("fire-js","")}Jp("");const vl="@firebase/database",Cl="0.13.6";/**
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
 */let Ic="";function Xp(t){Ic=t}/**
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
 */class Zp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:si(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class e_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const wc=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zp(e)}}catch{}return new e_},qt=wc("localStorage"),ur=wc("sessionStorage");/**
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
 */const Cn=new Jr("@firebase/database"),t_=function(){let t=1;return function(){return t++}}(),Tc=function(t){const e=Vf(t),n=new $f;n.update(e);const i=n.digest();return qr.encodeByteArray(i)},_i=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=_i.apply(null,i):typeof i=="object"?e+=we(i):e+=i,e+=" "}return e};let Jt=null,El=!0;const n_=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cn.logLevel=ue.VERBOSE,Jt=Cn.log.bind(Cn),e&&ur.set("logging_enabled",!0)):typeof t=="function"?Jt=t:(Jt=null,ur.remove("logging_enabled"))},Ae=function(...t){if(El===!0&&(El=!1,Jt===null&&ur.get("logging_enabled")===!0&&n_(!0)),Jt){const e=_i.apply(null,t);Jt(e)}},gi=function(t){return function(...e){Ae(t,...e)}},hr=function(...t){const e="FIREBASE INTERNAL ERROR: "+_i(...t);Cn.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${_i(...t)}`;throw Cn.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+_i(...t);Cn.warn(e)},i_=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},s_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xn="[MIN_NAME]",nn="[MAX_NAME]",Ln=function(t,e){if(t===e)return 0;if(t===xn||e===nn)return-1;if(e===xn||t===nn)return 1;{const n=bl(t),i=bl(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},r_=function(t,e){return t===e?0:t<e?-1:1},Bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},eo=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=we(e[i]),n+=":",n+=eo(t[e[i]]);return n+="}",n},Nc=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ac=function(t){b(!Sc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},o_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},l_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function a_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const c_=new RegExp("^-?(0*)\\d{1,10}$"),u_=-2147483648,h_=2147483647,bl=function(t){if(c_.test(t)){const e=Number(t);if(e>=u_&&e<=h_)return e}return null},mi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},d_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class f_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class p_{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class dr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dr.OWNER="owner";/**
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
 */const to="5",Rc="v",xc="s",kc="r",Oc="f",Pc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dc="ls",Mc="p",fr="ac",Fc="websocket",Lc="long_polling";/**
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
 */class __{constructor(e,n,i,s,r=!1,o="",l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function g_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Uc(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let i;if(e===Fc)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lc)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);g_(t)&&(n.ns=t.namespace);const s=[];return Be(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class m_{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rf(this.counters_)}}/**
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
 */const Ms={},Fs={};function no(t){const e=t.toString();return Ms[e]||(Ms[e]=new m_),Ms[e]}function y_(t,e){const n=t.toString();return Fs[n]||(Fs[n]=e()),Fs[n]}/**
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
 */class v_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&mi(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Il="start",C_="close",E_="pLPCommand",b_="pRTLPCB",$c="id",Bc="pw",Wc="ser",I_="cb",w_="seg",T_="ts",S_="d",N_="dframe",Hc=1870,Vc=30,A_=Hc-Vc,R_=25e3,x_=3e4;class pn{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gi(e),this.stats_=no(n),this.urlFn=a=>(this.appCheckToken&&(a[fr]=this.appCheckToken),Uc(n,Lc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new v_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(x_)),s_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new io((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Il)this.id=l,this.password=a;else if(o===C_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Il]="t",i[Wc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[I_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Rc]=to,this.transportSessionId&&(i[xc]=this.transportSessionId),this.lastSessionId&&(i[Dc]=this.lastSessionId),this.applicationId&&(i[Mc]=this.applicationId),this.appCheckToken&&(i[fr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Pc.test(location.hostname)&&(i[kc]=Oc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pn.forceAllow_=!0}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){return pn.forceAllow_?!0:!pn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!o_()&&!l_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=hc(n),s=Nc(i,A_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[N_]="t",i[$c]=e,i[Bc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class io{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=t_(),window[E_+this.uniqueCallbackIdentifier]=e,window[b_+this.uniqueCallbackIdentifier]=n,this.myIFrame=io.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$c]=this.myID,e[Bc]=this.myPW,e[Wc]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vc+i.length<=Hc;){const o=this.pendingSegs.shift();i=i+"&"+w_+s+"="+o.seg+"&"+T_+s+"="+o.ts+"&"+S_+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(R_)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const k_=16384,O_=45e3;let Hi=null;typeof MozWebSocket!="undefined"?Hi=MozWebSocket:typeof WebSocket!="undefined"&&(Hi=WebSocket);class et{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gi(this.connId),this.stats_=no(n),this.connURL=et.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Rc]=to,typeof location!="undefined"&&location.hostname&&Pc.test(location.hostname)&&(o[kc]=Oc),n&&(o[xc]=n),i&&(o[Dc]=i),s&&(o[fr]=s),r&&(o[Mc]=r),Uc(e,Fc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let i;_c(),this.mySock=new Hi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!et.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=si(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Nc(n,k_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(O_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
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
 */class oi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pn,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let i=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[et];else{const s=this.transports_=[];for(const r of oi.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);oi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oi.globalTransportInitialized_=!1;/**
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
 */const P_=6e4,D_=5e3,M_=10*1024,F_=100*1024,Ls="t",wl="d",L_="s",Tl="r",U_="e",Sl="o",Nl="a",Al="n",Rl="p",$_="h";class B_{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gi("c:"+this.id+":"),this.transportManager_=new oi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Kn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>F_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>M_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ls in e){const n=e[Ls];n===Nl?this.upgradeIfSecondaryHealthy_():n===Tl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bn("t",e),i=Bn("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Al,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bn("t",e),i=Bn("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bn(Ls,e);if(wl in e){const i=e[wl];if(n===$_)this.onHandshake_(i);else if(n===Al){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===L_?this.onConnectionShutdown_(i):n===Tl?this.onReset_(i):n===U_?hr("Server Error: "+i):n===Sl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),to!==i&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Kn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(P_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(D_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jc{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class zc{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vi extends zc{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Yr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xl=32,kl=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new he("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function Kc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function W_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Ee(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof he)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new he(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=J(t),i=J(e);if(n===null)return e;if(n===i)return Ue(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function so(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function nt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class H_{constructor(e,n){this.errorPrefix_=n,this.parts_=qc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fs(this.parts_[i]);Yc(this)}}function V_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fs(e),Yc(t)}function j_(t){const e=t.parts_.pop();t.byteLength_-=fs(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yc(t){if(t.byteLength_>kl)throw new Error(t.errorPrefix_+"has a key path longer than "+kl+" bytes ("+t.byteLength_+").");if(t.parts_.length>xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xl+") or object contains a cycle "+Vt(t))}function Vt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ro extends zc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ro}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wn=1e3,z_=60*5*1e3,Ol=30*1e3,K_=1.3,q_=3e4,G_="server_kill",Pl=3;class yt extends jc{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=yt.nextPersistentConnectionId_++,this.log_=gi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=z_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!_c())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(we(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Gr,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;yt.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const i=An(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ol)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Lf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hr("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>q_&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*K_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new B_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{Ve(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(G_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ve(h),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ul(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>eo(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new he(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pl&&(this.reconnectDelay_=Ol,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ic.replace(/\./g,"-")]=1,Yr()?e["framework.cordova"]=1:pc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vi.getInstance().currentlyOnline();return ul(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
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
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
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
 */class ps{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Q(xn,e),s=new Q(xn,n);return this.compare(i,s)!==0}minPost(){return Q.MIN}}/**
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
 */let Ni;class Qc extends ps{static get __EMPTY_NODE(){return Ni}static set __EMPTY_NODE(e){Ni=e}compare(e,n){return Ln(e.name,n.name)}isDefinedOn(e){throw Fn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(nn,Ni)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Ni)}toString(){return".key"}}const En=new Qc;/**
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
 */class Ai{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Ie.RED,this.left=s!=null?s:$e.EMPTY_NODE,this.right=r!=null?r:$e.EMPTY_NODE}copy(e,n,i,s,r){return new Ie(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class Y_{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ai(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ai(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ai(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new Y_;/**
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
 */function Q_(t,e){return Ln(t.name,e.name)}function oo(t,e){return Ln(t,e)}/**
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
 */let pr;function J_(t){pr=t}const Jc=function(t){return typeof t=="number"?"number:"+Ac(t):"string:"+t},Xc=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else b(t===pr||t.isEmpty(),"priority of unexpected type.");b(t===pr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Dl;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xc(this.priorityNode_)}static set __childrenNodeConstructor(e){Dl=e}static get __childrenNodeConstructor(){return Dl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:J(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=J(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(b(i!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ac(this.value_):e+=this.value_,this.lazyHash_=Tc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(i);return b(s>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zc,eu;function X_(t){Zc=t}function Z_(t){eu=t}class eg extends ps{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ln(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(nn,new be("[PRIORITY-POST]",eu))}makePost(e,n){const i=Zc(e);return new Q(n,new be("[PRIORITY-POST]",i))}toString(){return".priority"}}const ve=new eg;/**
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
 */const tg=Math.log(2);class ng{constructor(e){const n=r=>parseInt(Math.log(r)/tg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ji=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ie(f,h.node,Ie.BLACK,null,null);{const _=parseInt(u/2,10)+a,C=s(a,_),A=s(_+1,c);return h=t[_],f=n?n(h):h,new Ie(f,h.node,Ie.BLACK,C,A)}},r=function(a){let c=null,u=null,h=t.length;const f=function(C,A){const R=h-C,z=h;h-=C;const Z=s(R+1,z),x=t[R],L=n?n(x):x;_(new Ie(L,x.node,A,null,Z))},_=function(C){c?(c.left=C,c=C):(u=C,c=C)};for(let C=0;C<a.count;++C){const A=a.nextBitIsOne(),R=Math.pow(2,a.count-(C+1));A?f(R,Ie.BLACK):(f(R,Ie.BLACK),f(R,Ie.RED))}return u},o=new ng(t.length),l=r(o);return new $e(i||e,l)};/**
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
 */let Us;const dn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(dn&&ve,"ChildrenNode.ts has not been loaded"),Us=Us||new mt({".priority":dn},{".priority":ve}),Us}get(e){const n=An(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){b(e!==En,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Q.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=ji(i,e.getCompare()):l=dn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new mt(u,c)}addToIndexes(e,n){const i=Bi(this.indexes_,(s,r)=>{const o=An(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),s===dn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ji(l,o.getCompare())}else return dn;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new Q(e.name,l))),a.insert(e,e.node)}});return new mt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Bi(this.indexes_,s=>{if(s===dn)return s;{const r=n.get(e.name);return r?s.remove(new Q(e.name,r)):s}});return new mt(i,this.indexSet_)}}/**
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
 */let Hn;class j{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Xc(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hn||(Hn=new j(new $e(oo),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Q(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Hn:this.priorityNode_;return new j(s,o,r)}}updateChild(e,n){const i=J(e);if(i===null)return n;{b(J(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(pe(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),i++,r&&j.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jc(this.getPriority().val())+":"),this.forEachChild(ve,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Tc(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yi?-1:0}withIndex(e){if(e===En||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===En||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ve),s=n.getIterator(ve);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===En?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ig extends j{constructor(){super(new $e(oo),j.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const yi=new ig;Object.defineProperties(Q,{MIN:{value:new Q(xn,j.EMPTY_NODE)},MAX:{value:new Q(nn,yi)}});Qc.__EMPTY_NODE=j.EMPTY_NODE;be.__childrenNodeConstructor=j;J_(yi);Z_(yi);/**
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
 */const sg=!0;function Re(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Re(e))}if(!(t instanceof Array)&&sg){const n=[];let i=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new Q(o,a)))}}),n.length===0)return j.EMPTY_NODE;const r=ji(n,Q_,o=>o.name,oo);if(i){const o=ji(n,ve.getCompare());return new j(r,Re(e),new mt({".priority":o},{".priority":ve}))}else return new j(r,Re(e),mt.Default)}else{let n=j.EMPTY_NODE;return Be(t,(i,s)=>{if(Et(t,i)&&i.substring(0,1)!=="."){const r=Re(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Re(e))}}X_(Re);/**
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
 */class rg extends ps{constructor(e){super(),this.indexPath_=e,b(!X(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ln(e.name,n.name):r}makePost(e,n){const i=Re(e),s=j.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(n,s)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,yi);return new Q(nn,e)}toString(){return qc(this.indexPath_,0).join("/")}}/**
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
 */class og extends ps{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ln(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const i=Re(e);return new Q(n,i)}toString(){return".value"}}const lg=new og;/**
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
 */function tu(t){return{type:"value",snapshotNode:t}}function kn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function li(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ag(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class lo{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(li(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(kn(n,i)):o.trackChildChange(ai(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ve,(s,r)=>{n.hasChild(s)||i.trackChildChange(li(s,r))}),n.isLeafNode()||n.forEachChild(ve,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ai(s,r,o))}else i.trackChildChange(kn(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ci{constructor(e){this.indexedFilter_=new lo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ci.getStartPost_(e),this.endPost_=ci.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new Q(n,i))||(i=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=j.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(ve,(o,l)=>{r.matches(new Q(o,l))||(s=s.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class cg{constructor(e){this.rangedFilter_=new ci(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new Q(n,i))||(i=j.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)s=s.updateImmediateChild(l.name,l.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(j.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:s=s.updateImmediateChild(h.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new Q(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ai(n,i,h)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(li(n,h));const A=l.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(kn(f.name,f.node)),A.updateImmediateChild(f.name,f.node)):A}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(li(c.name,c.node)),r.trackChildChange(kn(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class ao{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new ao;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ug(t){return t.loadsAllData()?new lo(t.getIndex()):t.hasLimit()?new cg(t):new ci(t)}function Ml(t){const e={};if(t.isDefault())return e;let n;return t.index_===ve?n="$priority":t.index_===lg?n="$value":t.index_===En?n="$key":(b(t.index_ instanceof rg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_&&(e.startAt=we(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+we(t.indexStartName_))),t.endSet_&&(e.endAt=we(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+we(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class zi extends jc{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=gi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=zi.getListenId_(e,i),l={};this.listens_[o]=l;const a=Ml(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),An(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=zi.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ml(e._queryParams),i=e._path.toString(),s=new Gr;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=si(l.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class hg{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ki(){return{value:null,children:new Map}}function nu(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=J(e);t.children.has(i)||t.children.set(i,Ki());const s=t.children.get(i);e=pe(e),nu(s,e,n)}}function _r(t,e,n){t.value!==null?n(e,t.value):dg(t,(i,s)=>{const r=new he(e.toString()+"/"+i);_r(s,r,n)})}function dg(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class fg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Ll=10*1e3,pg=30*1e3,_g=5*60*1e3;class gg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fg(e);const i=Ll+(pg-Ll)*Math.random();Kn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Be(e,(s,r)=>{r>0&&Et(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Kn(this.reportStats_.bind(this),Math.floor(Math.random()*2*_g))}}/**
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
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function iu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function co(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class qi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=it.ACK_USER_WRITE,this.source=iu()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new qi(ie(),n,this.revert)}}else return b(J(this.path)===e,"operationForChild called for unrelated child."),new qi(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ui{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new ui(this.source,ie()):new ui(this.source,pe(this.path))}}/**
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
 */class sn{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=it.OVERWRITE}operationForChild(e){return X(this.path)?new sn(this.source,ie(),this.snap.getImmediateChild(e)):new sn(this.source,pe(this.path),this.snap)}}/**
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
 */class hi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=it.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new sn(this.source,ie(),n.value):new hi(this.source,ie(),n)}else return b(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ag(o.childName,o.snapshotNode))}),Vn(t,s,"child_removed",e,i,n),Vn(t,s,"child_added",e,i,n),Vn(t,s,"child_moved",r,i,n),Vn(t,s,"child_changed",e,i,n),Vn(t,s,"value",e,i,n),s}function Vn(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>Cg(t,l,a)),o.forEach(l=>{const a=vg(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function vg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cg(t,e,n){if(e.childName==null||n.childName==null)throw Fn("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),s=new Q(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function _s(t,e){return{eventCache:t,serverCache:e}}function qn(t,e,n,i){return _s(new rn(e,n,i),t.serverCache)}function su(t,e,n,i){return _s(t.eventCache,new rn(e,n,i))}function gr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function on(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let $s;const Eg=()=>($s||($s=new $e(r_)),$s);class me{constructor(e,n=Eg()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Be(e,(i,s)=>{n=n.set(new he(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(X(e))return null;{const i=J(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(pe(e),n);return r!=null?{path:Ee(new he(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=J(e),i=this.children.get(n);return i!==null?i.subtree(pe(e)):new me(null)}}set(e,n){if(X(e))return new me(n,this.children);{const i=J(e),r=(this.children.get(i)||new me(null)).set(pe(e),n),o=this.children.insert(i,r);return new me(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=J(e),i=this.children.get(n);if(i){const s=i.remove(pe(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new me(null):new me(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=J(e),i=this.children.get(n);return i?i.get(pe(e)):null}}setTree(e,n){if(X(e))return n;{const i=J(e),r=(this.children.get(i)||new me(null)).setTree(pe(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new me(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ee(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(X(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),Ee(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,i){if(X(e))return this;{this.value&&i(n,this.value);const s=J(e),r=this.children.get(s);return r?r.foreachOnPath_(pe(e),Ee(n,s),i):new me(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ee(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class ot{constructor(e){this.writeTree_=e}static empty(){return new ot(new me(null))}}function Gn(t,e,n){if(X(e))return new ot(new me(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Ue(s,e);return r=r.updateChild(o,n),new ot(t.writeTree_.set(s,r))}else{const s=new me(n),r=t.writeTree_.setTree(e,s);return new ot(r)}}}function Ul(t,e,n){let i=t;return Be(n,(s,r)=>{i=Gn(i,Ee(e,s),r)}),i}function $l(t,e){if(X(e))return ot.empty();{const n=t.writeTree_.setTree(e,new me(null));return new ot(n)}}function mr(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function Bl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(i,s)=>{e.push(new Q(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Q(i,s.value))}),e}function kt(t,e){if(X(e))return t;{const n=cn(t,e);return n!=null?new ot(new me(n)):new ot(t.writeTree_.subtree(e))}}function yr(t){return t.writeTree_.isEmpty()}function On(t,e){return ru(ie(),t.writeTree_,e)}function ru(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=ru(Ee(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ee(t,".priority"),i)),n}}/**
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
 */function ho(t,e){return cu(e,t)}function bg(t,e,n,i,s){b(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Gn(t.visibleWrites,e,n)),t.lastWriteId=i}function Ig(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function wg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Tg(l,i.path)?s=!1:nt(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Sg(t),!0;if(i.snap)t.visibleWrites=$l(t.visibleWrites,i.path);else{const l=i.children;Be(l,a=>{t.visibleWrites=$l(t.visibleWrites,Ee(i.path,a))})}return!0}else return!1}function Tg(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(Ee(t.path,n),e))return!0;return!1}function Sg(t){t.visibleWrites=ou(t.allWrites,Ng,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ng(t){return t.visible}function ou(t,e,n){let i=ot.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)nt(n,o)?(l=Ue(n,o),i=Gn(i,l,r.snap)):nt(o,n)&&(l=Ue(o,n),i=Gn(i,ie(),r.snap.getChild(l)));else if(r.children){if(nt(n,o))l=Ue(n,o),i=Ul(i,l,r.children);else if(nt(o,n))if(l=Ue(o,n),X(l))i=Ul(i,ie(),r.children);else{const a=An(r.children,J(l));if(a){const c=a.getChild(pe(l));i=Gn(i,ie(),c)}}}else throw Fn("WriteRecord should have .snap or .children")}}return i}function lu(t,e,n,i,s){if(!i&&!s){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=kt(t.visibleWrites,e);if(yr(o))return n;if(n==null&&!mr(o,ie()))return null;{const l=n||j.EMPTY_NODE;return On(o,l)}}}else{const r=kt(t.visibleWrites,e);if(!s&&yr(r))return n;if(!s&&n==null&&!mr(r,ie()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(nt(c.path,e)||nt(e,c.path))},l=ou(t.allWrites,o,e),a=n||j.EMPTY_NODE;return On(l,a)}}}function Ag(t,e,n){let i=j.EMPTY_NODE;const s=cn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ve,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=kt(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const a=On(kt(r,new he(o)),l);i=i.updateImmediateChild(o,a)}),Bl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=kt(t.visibleWrites,e);return Bl(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Rg(t,e,n,i,s){b(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(mr(t.visibleWrites,r))return null;{const o=kt(t.visibleWrites,r);return yr(o)?s.getChild(n):On(o,s.getChild(n))}}function xg(t,e,n,i){const s=Ee(e,n),r=cn(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=kt(t.visibleWrites,s);return On(o,i.getNode().getImmediateChild(n))}else return null}function kg(t,e){return cn(t.visibleWrites,e)}function Og(t,e,n,i,s,r,o){let l;const a=kt(t.visibleWrites,e),c=cn(a,ie());if(c!=null)l=c;else if(n!=null)l=On(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let _=f.getNext();for(;_&&u.length<s;)h(_,i)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Pg(){return{visibleWrites:ot.empty(),allWrites:[],lastWriteId:-1}}function Gi(t,e,n,i){return lu(t.writeTree,t.treePath,e,n,i)}function fo(t,e){return Ag(t.writeTree,t.treePath,e)}function Wl(t,e,n,i){return Rg(t.writeTree,t.treePath,e,n,i)}function Yi(t,e){return kg(t.writeTree,Ee(t.treePath,e))}function Dg(t,e,n,i,s,r){return Og(t.writeTree,t.treePath,e,n,i,s,r)}function po(t,e,n){return xg(t.writeTree,t.treePath,e,n)}function au(t,e){return cu(Ee(t.treePath,e),t.writeTree)}function cu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Mg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,ai(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,li(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,kn(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,ai(i,e.snapshotNode,s.oldSnap));else throw Fn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Fg{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const uu=new Fg;class _o{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return po(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:on(this.viewCache_),r=Dg(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Lg(t){return{filter:t}}function Ug(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $g(t,e,n,i,s){const r=new Mg;let o,l;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=vr(t,e,c.path,c.snap,i,s,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=Qi(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=Wg(t,e,c.path,c.children,i,s,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Cr(t,e,c.path,c.children,i,s,l,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=jg(t,e,c.path,i,s,r):o=Hg(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===it.LISTEN_COMPLETE)o=Vg(t,e,n.path,i,r);else throw Fn("Unknown operation type: "+n.type);const a=r.getChanges();return Bg(e,o,a),{viewCache:o,changes:a}}function Bg(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=gr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tu(gr(e)))}}function hu(t,e,n,i,s,r){const o=e.eventCache;if(Yi(i,n)!=null)return e;{let l,a;if(X(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=on(e),u=c instanceof j?c:j.EMPTY_NODE,h=fo(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Gi(i,on(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=J(n);if(c===".priority"){b(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Wl(i,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Wl(i,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=po(i,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,s,r):l=o.getNode()}}return qn(e,l,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function Qi(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),_,null)}else{const _=J(n);if(!a.isCompleteForPath(n)&&Dt(n)>1)return e;const C=pe(n),R=a.getNode().getImmediateChild(_).updateChild(C,i);_===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),_,R,C,uu,null)}const h=su(e,c,a.isFullyInitialized()||X(n),u.filtersNodes()),f=new _o(s,h,r);return hu(t,h,n,s,f,l)}function vr(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new _o(s,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=qn(e,c,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=qn(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=pe(n),_=l.getNode().getImmediateChild(h);let C;if(X(f))C=i;else{const A=u.getCompleteChild(h);A!=null?Kc(f)===".priority"&&A.getChild(Gc(f)).isEmpty()?C=A:C=A.updateChild(f,i):C=j.EMPTY_NODE}if(_.equals(C))a=e;else{const A=t.filter.updateChild(l.getNode(),h,C,f,u,o);a=qn(e,A,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Hl(t,e){return t.eventCache.isCompleteForChild(e)}function Wg(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Ee(n,a);Hl(e,J(u))&&(l=vr(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Ee(n,a);Hl(e,J(u))||(l=vr(t,l,u,c,s,r,o))}),l}function Vl(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Cr(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;X(n)?c=i:c=new me(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),C=Vl(t,_,f);a=Qi(t,a,new he(h),C,s,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const C=e.serverCache.getNode().getImmediateChild(h),A=Vl(t,C,f);a=Qi(t,a,new he(h),A,s,r,o,l)}}),a}function Hg(t,e,n,i,s,r,o){if(Yi(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(X(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Qi(t,e,n,a.getNode().getChild(n),s,r,l,o);if(X(n)){let c=new me(null);return a.getNode().forEachChild(En,(u,h)=>{c=c.set(new he(u),h)}),Cr(t,e,n,c,s,r,l,o)}else return e}else{let c=new me(null);return i.foreach((u,h)=>{const f=Ee(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Cr(t,e,n,c,s,r,l,o)}}function Vg(t,e,n,i,s){const r=e.serverCache,o=su(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return hu(t,o,n,i,uu,s)}function jg(t,e,n,i,s,r){let o;if(Yi(i,n)!=null)return e;{const l=new _o(i,e,s),a=e.eventCache.getNode();let c;if(X(n)||J(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gi(i,on(e));else{const h=e.serverCache.getNode();b(h instanceof j,"serverChildren would be complete if leaf node"),u=fo(i,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=J(n);let h=po(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,pe(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,j.EMPTY_NODE,pe(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gi(i,on(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Yi(i,ie())!=null,qn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class zg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new lo(i.getIndex()),r=ug(i);this.processor_=Lg(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,l.getNode(),null),u=new rn(a,o.isFullyInitialized(),s.filtersNodes()),h=new rn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=_s(h,u),this.eventGenerator_=new mg(this.query_)}get query(){return this.query_}}function Kg(t){return t.viewCache_.serverCache.getNode()}function qg(t,e){const n=on(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function jl(t){return t.eventRegistrations_.length===0}function Gg(t,e){t.eventRegistrations_.push(e)}function zl(t,e,n){const i=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Kl(t,e,n,i){e.type===it.MERGE&&e.source.queryId!==null&&(b(on(t.viewCache_),"We should always have a full cache before handling merges"),b(gr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=$g(t.processor_,s,e,n,i);return Ug(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,du(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Yg(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(r,o)=>{i.push(kn(r,o))}),n.isFullyInitialized()&&i.push(tu(n.getNode())),du(t,i,n.getNode(),e)}function du(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return yg(t.eventGenerator_,e,n,s)}/**
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
 */let Ji;class Qg{constructor(){this.views=new Map}}function Jg(t){b(!Ji,"__referenceConstructor has already been defined"),Ji=t}function Xg(){return b(Ji,"Reference.ts has not been loaded"),Ji}function Zg(t){return t.views.size===0}function go(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return b(r!=null,"SyncTree gave us an op for an invalid query."),Kl(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Kl(o,e,n,i));return r}}function em(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Gi(n,s?i:null),a=!1;l?a=!0:i instanceof j?(l=fo(n,i),a=!1):(l=j.EMPTY_NODE,a=!1);const c=_s(new rn(l,a,!1),new rn(i,s,!1));return new zg(e,c)}return o}function tm(t,e,n,i,s,r){const o=em(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Gg(o,n),Yg(o,n)}function nm(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(s==="default")for(const[a,c]of t.views.entries())o=o.concat(zl(c,n,i)),jl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(s);a&&(o=o.concat(zl(a,n,i)),jl(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Mt(t)&&r.push(new(Xg())(e._repo,e._path)),{removed:r,events:o}}function fu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bn(t,e){let n=null;for(const i of t.views.values())n=n||qg(i,e);return n}function pu(t,e){if(e._queryParams.loadsAllData())return gs(t);{const i=e._queryIdentifier;return t.views.get(i)}}function _u(t,e){return pu(t,e)!=null}function Mt(t){return gs(t)!=null}function gs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xi;function im(t){b(!Xi,"__referenceConstructor has already been defined"),Xi=t}function sm(){return b(Xi,"Reference.ts has not been loaded"),Xi}let rm=1;class ql{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=Pg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function om(t,e,n,i,s){return bg(t.pendingWriteTree_,e,n,i,s),s?vi(t,new sn(iu(),e,n)):[]}function _n(t,e,n=!1){const i=Ig(t.pendingWriteTree_,e);if(wg(t.pendingWriteTree_,e)){let r=new me(null);return i.snap!=null?r=r.set(ie(),!0):Be(i.children,o=>{r=r.set(new he(o),!0)}),vi(t,new qi(i.path,r,n))}else return[]}function ms(t,e,n){return vi(t,new sn(co(),e,n))}function lm(t,e,n){const i=me.fromObject(n);return vi(t,new hi(co(),e,i))}function am(t,e){return vi(t,new ui(co(),e))}function cm(t,e,n){const i=mo(t,n);if(i){const s=yo(i),r=s.path,o=s.queryId,l=Ue(r,e),a=new ui(uo(o),l);return vo(t,r,a)}else return[]}function Er(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||_u(o,e))){const a=nm(o,e,n,i);Zg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Mt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=dm(f);for(let C=0;C<_.length;++C){const A=_[C],R=A.query,z=vu(t,A);t.listenProvider_.startListening(Yn(R),Zi(t,R),z.hashFn,z.onComplete)}}}!h&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Yn(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(ys(f));t.listenProvider_.stopListening(Yn(f),_)}))}fm(t,c)}return l}function um(t,e,n,i){const s=mo(t,i);if(s!=null){const r=yo(s),o=r.path,l=r.queryId,a=Ue(o,e),c=new sn(uo(l),a,n);return vo(t,o,c)}else return[]}function hm(t,e,n,i){const s=mo(t,i);if(s){const r=yo(s),o=r.path,l=r.queryId,a=Ue(o,e),c=me.fromObject(n),u=new hi(uo(l),a,c);return vo(t,o,u)}else return[]}function Gl(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,_)=>{const C=Ue(f,s);r=r||bn(_,C),o=o||Mt(_)});let l=t.syncPointTree_.get(s);l?(o=o||Mt(l),r=r||bn(l,ie())):(l=new Qg,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,C)=>{const A=bn(C,ie());A&&(r=r.updateImmediateChild(_,A))}));const c=_u(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=ys(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=pm();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=ho(t.pendingWriteTree_,s);let h=tm(l,e,n,u,r,a);if(!c&&!o&&!i){const f=pu(l,e);h=h.concat(_m(t,e,f))}return h}function gu(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ue(o,e),c=bn(l,a);if(c)return c});return lu(s,e,r,n,!0)}function vi(t,e){return mu(e,t.syncPointTree_,null,ho(t.pendingWriteTree_,ie()))}function mu(t,e,n,i){if(X(t.path))return yu(t,e,n,i);{const s=e.get(ie());n==null&&s!=null&&(n=bn(s,ie()));let r=[];const o=J(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=au(i,o);r=r.concat(mu(l,a,c,u))}return s&&(r=r.concat(go(s,t,i,n))),r}}function yu(t,e,n,i){const s=e.get(ie());n==null&&s!=null&&(n=bn(s,ie()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=au(i,o),u=t.operationForChild(o);u&&(r=r.concat(yu(u,l,a,c)))}),s&&(r=r.concat(go(s,t,i,n))),r}function vu(t,e){const n=e.query,i=Zi(t,n);return{hashFn:()=>(Kg(e)||j.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?cm(t,n._path,i):am(t,n._path);{const r=a_(s,n);return Er(t,n,null,r)}}}}function Zi(t,e){const n=ys(e);return t.queryToTagMap.get(n)}function ys(t){return t._path.toString()+"$"+t._queryIdentifier}function mo(t,e){return t.tagToQueryMap.get(e)}function yo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function vo(t,e,n){const i=t.syncPointTree_.get(e);b(i,"Missing sync point for query tag that we're tracking");const s=ho(t.pendingWriteTree_,e);return go(i,n,s,null)}function dm(t){return t.fold((e,n,i)=>{if(n&&Mt(n))return[gs(n)];{let s=[];return n&&(s=fu(n)),Be(i,(r,o)=>{s=s.concat(o)}),s}})}function Yn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sm())(t._repo,t._path):t}function fm(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ys(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function pm(){return rm++}function _m(t,e,n){const i=e._path,s=Zi(t,e),r=vu(t,n),o=t.listenProvider_.startListening(Yn(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)b(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!X(c)&&u&&Mt(u))return[gs(u).query];{let f=[];return u&&(f=f.concat(fu(u).map(_=>_.query))),Be(h,(_,C)=>{f=f.concat(C)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Yn(u),Zi(t,u))}}return o}/**
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
 */class Co{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Co(n)}node(){return this.node_}}class Eo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Eo(this.syncTree_,n)}node(){return gu(this.syncTree_,this.path_)}}const gm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yl=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ym(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},ym=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&b(!1,"Unexpected increment value: "+i);const s=e.node();if(b(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},vm=function(t,e,n,i){return bo(e,new Eo(n,t),i)},Cm=function(t,e,n){return bo(t,new Co(e),n)};function bo(t,e,n){const i=t.getPriority().val(),s=Yl(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Yl(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new be(l,Re(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new be(s))),o.forEachChild(ve,(l,a)=>{const c=bo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Io{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function wo(t,e){let n=e instanceof he?e:new he(e),i=t,s=J(n);for(;s!==null;){const r=An(i.node.children,s)||{children:{},childCount:0};i=new Io(s,i,r),n=pe(n),s=J(n)}return i}function Un(t){return t.node.value}function Cu(t,e){t.node.value=e,br(t)}function Eu(t){return t.node.childCount>0}function Em(t){return Un(t)===void 0&&!Eu(t)}function vs(t,e){Be(t.node.children,(n,i)=>{e(new Io(n,t,i))})}function bu(t,e,n,i){n&&!i&&e(t),vs(t,s=>{bu(s,e,!0,i)}),n&&i&&e(t)}function bm(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ci(t){return new he(t.parent===null?t.name:Ci(t.parent)+"/"+t.name)}function br(t){t.parent!==null&&Im(t.parent,t.name,t)}function Im(t,e,n){const i=Em(n),s=Et(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,br(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,br(t))}/**
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
 */const wm=/[\[\].#$\/\u0000-\u001F\u007F]/,Tm=/[\[\].#$\u0000-\u001F\u007F]/,Bs=10*1024*1024,Iu=function(t){return typeof t=="string"&&t.length!==0&&!wm.test(t)},wu=function(t){return typeof t=="string"&&t.length!==0&&!Tm.test(t)},Sm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wu(t)},Tu=function(t,e,n){const i=n instanceof he?new H_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vt(i));if(typeof e=="function")throw new Error(t+"contains a function "+Vt(i)+" with contents = "+e.toString());if(Sc(e))throw new Error(t+"contains "+e.toString()+" "+Vt(i));if(typeof e=="string"&&e.length>Bs/3&&fs(e)>Bs)throw new Error(t+"contains a string greater than "+Bs+" utf8 bytes "+Vt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Be(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Iu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);V_(i,o),Tu(t,l,i),j_(i)}),s&&r)throw new Error(t+' contains ".value" child '+Vt(i)+" in addition to actual children.")}},Su=function(t,e,n,i){if(!(i&&n===void 0)&&!wu(n))throw new Error(mc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nm=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Su(t,e,n,i)},Am=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Iu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sm(n))throw new Error(mc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Rm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nu(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!so(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Au(t,e,n){Nu(t,n),Ru(t,i=>so(i,e))}function un(t,e,n){Nu(t,n),Ru(t,i=>nt(i,e)||nt(e,i))}function Ru(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(xm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Jt&&Ae("event: "+n.toString()),mi(i)}}}/**
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
 */const km="repo_interrupt",Om=25;class Pm{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ki(),this.transactionQueueTree_=new Io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dm(t,e,n){if(t.stats_=no(t.repoInfo_),t.forceRestClient_||d_())t.server_=new zi(t.repoInfo_,(i,s,r,o)=>{Ql(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jl(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new yt(t.repoInfo_,e,(i,s,r,o)=>{Ql(t,i,s,r,o)},i=>{Jl(t,i)},i=>{Fm(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=y_(t.repoInfo_,()=>new gg(t.stats_,t.server_)),t.infoData_=new hg,t.infoSyncTree_=new ql({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=ms(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),To(t,"connected",!1),t.serverSyncTree_=new ql({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);un(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Mm(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xu(t){return gm({timestamp:Mm(t)})}function Ql(t,e,n,i,s){t.dataUpdateCount++;const r=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=Bi(n,c=>Re(c));o=hm(t.serverSyncTree_,r,a,s)}else{const a=Re(n);o=um(t.serverSyncTree_,r,a,s)}else if(i){const a=Bi(n,c=>Re(c));o=lm(t.serverSyncTree_,r,a)}else{const a=Re(n);o=ms(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=No(t,r)),un(t.eventQueue_,l,o)}function Jl(t,e){To(t,"connected",e),e===!1&&Um(t)}function Fm(t,e){Be(e,(n,i)=>{To(t,n,i)})}function To(t,e,n){const i=new he("/.info/"+e),s=Re(n);t.infoData_.updateSnapshot(i,s);const r=ms(t.infoSyncTree_,i,s);un(t.eventQueue_,i,r)}function Lm(t){return t.nextWriteId_++}function Um(t){ku(t,"onDisconnectEvents");const e=xu(t),n=Ki();_r(t.onDisconnect_,ie(),(s,r)=>{const o=vm(s,r,t.serverSyncTree_,e);nu(n,s,o)});let i=[];_r(n,ie(),(s,r)=>{i=i.concat(ms(t.serverSyncTree_,s,r));const o=Vm(t,s);No(t,o)}),t.onDisconnect_=Ki(),un(t.eventQueue_,ie(),i)}function $m(t,e,n){let i;J(e._path)===".info"?i=Gl(t.infoSyncTree_,e,n):i=Gl(t.serverSyncTree_,e,n),Au(t.eventQueue_,e._path,i)}function Xl(t,e,n){let i;J(e._path)===".info"?i=Er(t.infoSyncTree_,e,n):i=Er(t.serverSyncTree_,e,n),Au(t.eventQueue_,e._path,i)}function Bm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(km)}function ku(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Ou(t,e,n){return gu(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function So(t,e=t.transactionQueueTree_){if(e||Cs(t,e),Un(e)){const n=Du(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Wm(t,Ci(e),n)}else Eu(e)&&vs(e,n=>{So(t,n)})}function Wm(t,e,n){const i=n.map(c=>c.currentWriteId),s=Ou(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ue(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ku(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(_n(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Cs(t,wo(t.transactionQueueTree_,e)),So(t,t.transactionQueueTree_),un(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)mi(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ve("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}No(t,e)}},o)}function No(t,e){const n=Pu(t,e),i=Ci(n),s=Du(t,n);return Hm(t,s,i),i}function Hm(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ue(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Om)u=!0,h="maxretry",s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Ou(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Tu("transaction failed: Data returned ",_,a.path);let C=Re(_);typeof _=="object"&&_!=null&&Et(_,".priority")||(C=C.updatePriority(f.getPriority()));const R=a.currentWriteId,z=xu(t),Z=Cm(C,f,z);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=Z,a.currentWriteId=Lm(t),o.splice(o.indexOf(R),1),s=s.concat(om(t.serverSyncTree_,a.path,Z,a.currentWriteId,a.applyLocally)),s=s.concat(_n(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",s=s.concat(_n(t.serverSyncTree_,a.currentWriteId,!0))}un(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(h),!1,null))))}Cs(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)mi(i[l]);So(t,t.transactionQueueTree_)}function Pu(t,e){let n,i=t.transactionQueueTree_;for(n=J(e);n!==null&&Un(i)===void 0;)i=wo(i,n),e=pe(e),n=J(e);return i}function Du(t,e){const n=[];return Mu(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Mu(t,e,n){const i=Un(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);vs(e,s=>{Mu(t,s,n)})}function Cs(t,e){const n=Un(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Cu(e,n.length>0?n:void 0)}vs(e,i=>{Cs(t,i)})}function Vm(t,e){const n=Ci(Pu(t,e)),i=wo(t.transactionQueueTree_,e);return bm(i,s=>{Ws(t,s)}),Ws(t,i),bu(i,s=>{Ws(t,s)}),n}function Ws(t,e){const n=Un(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cu(e,void 0):n.length=r+1,un(t.eventQueue_,Ci(e),s);for(let o=0;o<i.length;o++)mi(i[o])}}/**
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
 */function jm(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zl=function(t,e){const n=Km(t),i=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||i_();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new __(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new he(n.pathString)}},Km=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=jm(t.substring(u,h)));const f=zm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
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
 */class Fu{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class Lu{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class qm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ao{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return X(this._path)?null:Kc(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=Fl(this._queryParams),n=eo(e);return n==="{}"?"default":n}get _queryObject(){return Fl(this._queryParams)}isEqual(e){if(e=an(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,i=so(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+W_(this._path)}}class bt extends Ao{constructor(e,n){super(e,n,new ao,!1)}get parent(){const e=Gc(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class di{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),i=es(this.ref,e);return new di(this._node.getChild(n),i,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new di(s,es(this.ref,i),ve)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gm(t,e){return t=an(t),t._checkNotDeleted("ref"),e!==void 0?es(t._root,e):t._root}function es(t,e){return t=an(t),J(t._path)===null?Nm("child","path",e,!1):Su("child","path",e,!1),new bt(t._repo,Ee(t._path,e))}class Ro{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Fu("value",this,new di(e.snapshotNode,new bt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lu(this,e,n):null}matches(e){return e instanceof Ro?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lu(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const i=es(new bt(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new Fu(e.type,this,new di(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ym(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const a=n,c=(u,h)=>{Xl(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new qm(n,r||void 0),l=e==="value"?new Ro(o):new xo(e,o);return $m(t._repo,t,l),()=>Xl(t._repo,t,l)}function Qm(t,e,n,i){return Ym(t,"child_added",e,n,i)}Jg(bt);im(bt);/**
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
 */const Jm="FIREBASE_DATABASE_EMULATOR_HOST",Ir={};let Xm=!1;function Zm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zl(r,s),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[Jm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Zl(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new dr(dr.OWNER):new p_(t.name,t.options,e);Am("Invalid Firebase Database URL",o),X(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ty(l,t,u,new f_(t.name,n));return new ny(h,t)}function ey(t,e){const n=Ir[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Bm(t),delete n[t.key]}function ty(t,e,n,i){let s=Ir[e.name];s||(s={},Ir[e.name]=s);let r=s[t.toURLString()];return r&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Pm(t,Xm,n,i),s[t.toURLString()]=r,r}class ny{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ey(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function iy(t=Hp(),e){return Up(t,"database").getImmediate({identifier:e})}/**
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
 */function sy(t){Xp(Zr),Rn(new Xt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),xt(vl,Cl,t),xt(vl,Cl,"esm2017")}yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sy();var Uu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ry=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$u={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ry,function(){var n=1e3,i=6e4,s=36e5,r="millisecond",o="second",l="minute",a="hour",c="day",u="week",h="month",f="quarter",_="year",C="date",A="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},x=function(V,O,S){var D=String(V);return!D||D.length>=O?V:""+Array(O+1-D.length).join(S)+V},L={s:x,z:function(V){var O=-V.utcOffset(),S=Math.abs(O),D=Math.floor(S/60),E=S%60;return(O<=0?"+":"-")+x(D,2,"0")+":"+x(E,2,"0")},m:function V(O,S){if(O.date()<S.date())return-V(S,O);var D=12*(S.year()-O.year())+(S.month()-O.month()),E=O.clone().add(D,h),k=S-E<0,B=O.clone().add(D+(k?-1:1),h);return+(-(D+(S-E)/(k?E-B:B-E))||0)},a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:h,y:_,w:u,d:c,D:C,h:a,m:l,s:o,ms:r,Q:f}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},Y="en",le={};le[Y]=Z;var U=function(V){return V instanceof Ce},$=function V(O,S,D){var E;if(!O)return Y;if(typeof O=="string"){var k=O.toLowerCase();le[k]&&(E=k),S&&(le[k]=S,E=k);var B=O.split("-");if(!E&&B.length>1)return V(B[0])}else{var ne=O.name;le[ne]=O,E=ne}return!D&&E&&(Y=E),E||!D&&Y},W=function(V,O){if(U(V))return V.clone();var S=typeof O=="object"?O:{};return S.date=V,S.args=arguments,new Ce(S)},H=L;H.l=$,H.i=U,H.w=function(V,O){return W(V,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var Ce=function(){function V(S){this.$L=$(S.locale,null,!0),this.parse(S)}var O=V.prototype;return O.parse=function(S){this.$d=function(D){var E=D.date,k=D.utc;if(E===null)return new Date(NaN);if(H.u(E))return new Date;if(E instanceof Date)return new Date(E);if(typeof E=="string"&&!/Z$/i.test(E)){var B=E.match(R);if(B){var ne=B[2]-1||0,de=(B[7]||"0").substring(0,3);return k?new Date(Date.UTC(B[1],ne,B[3]||1,B[4]||0,B[5]||0,B[6]||0,de)):new Date(B[1],ne,B[3]||1,B[4]||0,B[5]||0,B[6]||0,de)}}return new Date(E)}(S),this.$x=S.x||{},this.init()},O.init=function(){var S=this.$d;this.$y=S.getFullYear(),this.$M=S.getMonth(),this.$D=S.getDate(),this.$W=S.getDay(),this.$H=S.getHours(),this.$m=S.getMinutes(),this.$s=S.getSeconds(),this.$ms=S.getMilliseconds()},O.$utils=function(){return H},O.isValid=function(){return this.$d.toString()!==A},O.isSame=function(S,D){var E=W(S);return this.startOf(D)<=E&&E<=this.endOf(D)},O.isAfter=function(S,D){return W(S)<this.startOf(D)},O.isBefore=function(S,D){return this.endOf(D)<W(S)},O.$g=function(S,D,E){return H.u(S)?this[D]:this.set(E,S)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(S,D){var E=this,k=!!H.u(D)||D,B=H.p(S),ne=function(Qe,Se){var De=H.w(E.$u?Date.UTC(E.$y,Se,Qe):new Date(E.$y,Se,Qe),E);return k?De:De.endOf(c)},de=function(Qe,Se){return H.w(E.toDate()[Qe].apply(E.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(Se)),E)},oe=this.$W,_e=this.$M,Ge=this.$D,Ye="set"+(this.$u?"UTC":"");switch(B){case _:return k?ne(1,0):ne(31,11);case h:return k?ne(1,_e):ne(0,_e+1);case u:var Ft=this.$locale().weekStart||0,Pe=(oe<Ft?oe+7:oe)-Ft;return ne(k?Ge-Pe:Ge+(6-Pe),_e);case c:case C:return de(Ye+"Hours",0);case a:return de(Ye+"Minutes",1);case l:return de(Ye+"Seconds",2);case o:return de(Ye+"Milliseconds",3);default:return this.clone()}},O.endOf=function(S){return this.startOf(S,!1)},O.$set=function(S,D){var E,k=H.p(S),B="set"+(this.$u?"UTC":""),ne=(E={},E[c]=B+"Date",E[C]=B+"Date",E[h]=B+"Month",E[_]=B+"FullYear",E[a]=B+"Hours",E[l]=B+"Minutes",E[o]=B+"Seconds",E[r]=B+"Milliseconds",E)[k],de=k===c?this.$D+(D-this.$W):D;if(k===h||k===_){var oe=this.clone().set(C,1);oe.$d[ne](de),oe.init(),this.$d=oe.set(C,Math.min(this.$D,oe.daysInMonth())).$d}else ne&&this.$d[ne](de);return this.init(),this},O.set=function(S,D){return this.clone().$set(S,D)},O.get=function(S){return this[H.p(S)]()},O.add=function(S,D){var E,k=this;S=Number(S);var B=H.p(D),ne=function(_e){var Ge=W(k);return H.w(Ge.date(Ge.date()+Math.round(_e*S)),k)};if(B===h)return this.set(h,this.$M+S);if(B===_)return this.set(_,this.$y+S);if(B===c)return ne(1);if(B===u)return ne(7);var de=(E={},E[l]=i,E[a]=s,E[o]=n,E)[B]||1,oe=this.$d.getTime()+S*de;return H.w(oe,this)},O.subtract=function(S,D){return this.add(-1*S,D)},O.format=function(S){var D=this,E=this.$locale();if(!this.isValid())return E.invalidDate||A;var k=S||"YYYY-MM-DDTHH:mm:ssZ",B=H.z(this),ne=this.$H,de=this.$m,oe=this.$M,_e=E.weekdays,Ge=E.months,Ye=function(Se,De,Lt,It){return Se&&(Se[De]||Se(D,k))||Lt[De].slice(0,It)},Ft=function(Se){return H.s(ne%12||12,Se,"0")},Pe=E.meridiem||function(Se,De,Lt){var It=Se<12?"AM":"PM";return Lt?It.toLowerCase():It},Qe={YY:String(this.$y).slice(-2),YYYY:this.$y,M:oe+1,MM:H.s(oe+1,2,"0"),MMM:Ye(E.monthsShort,oe,Ge,3),MMMM:Ye(Ge,oe),D:this.$D,DD:H.s(this.$D,2,"0"),d:String(this.$W),dd:Ye(E.weekdaysMin,this.$W,_e,2),ddd:Ye(E.weekdaysShort,this.$W,_e,3),dddd:_e[this.$W],H:String(ne),HH:H.s(ne,2,"0"),h:Ft(1),hh:Ft(2),a:Pe(ne,de,!0),A:Pe(ne,de,!1),m:String(de),mm:H.s(de,2,"0"),s:String(this.$s),ss:H.s(this.$s,2,"0"),SSS:H.s(this.$ms,3,"0"),Z:B};return k.replace(z,function(Se,De){return De||Qe[Se]||B.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(S,D,E){var k,B=H.p(D),ne=W(S),de=(ne.utcOffset()-this.utcOffset())*i,oe=this-ne,_e=H.m(this,ne);return _e=(k={},k[_]=_e/12,k[h]=_e,k[f]=_e/3,k[u]=(oe-de)/6048e5,k[c]=(oe-de)/864e5,k[a]=oe/s,k[l]=oe/i,k[o]=oe/n,k)[B]||oe,E?_e:H.a(_e)},O.daysInMonth=function(){return this.endOf(h).$D},O.$locale=function(){return le[this.$L]},O.locale=function(S,D){if(!S)return this.$L;var E=this.clone(),k=$(S,D,!0);return k&&(E.$L=k),E},O.clone=function(){return H.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},V}(),Fe=Ce.prototype;return W.prototype=Fe,[["$ms",r],["$s",o],["$m",l],["$H",a],["$W",c],["$M",h],["$y",_],["$D",C]].forEach(function(V){Fe[V[1]]=function(O){return this.$g(O,V[0],V[1])}}),W.extend=function(V,O){return V.$i||(V(O,Ce,W),V.$i=!0),W},W.locale=$,W.isDayjs=U,W.unix=function(V){return W(1e3*V)},W.en=le[Y],W.Ls=le,W.p={},W})})($u);var Ri=$u.exports;const oy=t=>($a("data-v-5f00bbd8"),t=t(),Ba(),t),ly={class:"row"},ay={class:"col-sm-3 place",style:{padding:"5px"}},cy={class:"row",style:{margin:"5px"}},uy={key:0,class:"box"},hy={key:1,class:"box"},dy={key:2,class:"box"},fy=oy(()=>dt("h2",null,Bt("\u5FC3\u96FB\u6AA2\u67E5"),-1)),py={key:0},_y={key:1},gy=za({__name:"MainPage",setup(t){const e={\u5831\u5230:["\u5065\u6AA2\u6AC3\u53F0"],\u9AD4\u6AA2\u5927\u6A13:["\u57FA\u790E\u6AA2\u67E5","\u5FC3\u96FB\u6AA2\u67E5_\u7537","\u5FC3\u96FB\u6AA2\u67E5_\u5973","\u5BB6\u91AB\u8A3A\u65B7","\u62BD\u8840\u6AA2\u67E5","\u7CBE\u795E\u79D1\u6AA2\u67E5"],\u91AB\u7642\u5927\u6A13:["X\u5149\u6AA2\u67E5","\u773C\u79D1\u6AA2\u67E5"],\u7259\u79D1:["\u7259\u91AB\u6AA2\u67E5"]},n="NFC",i=iy(),s=Gm(i,n),r=Bh({});Object.keys(e).forEach(Z=>{e[Z].forEach(x=>{r.value[x]={num:0,avgWorkTime:0}})});let o={},l={},a={},c={};Object.keys(e).forEach(Z=>{e[Z].forEach(x=>{c[x]=[]})});let u=new URLSearchParams(window.location.search);console.log("If you want to set the time range, you can set params like '?start=2022-09-22T13:15:00'");let h=Ri(u.get("start")||"NaN"),f=h.valueOf(),_=Ri(u.get("end")||"NaN"),C=_.valueOf();const A=Ri();isNaN(f)&&(h=A.set("hour",0).set("second",0),f=h.valueOf()),isNaN(C)&&(_=A.set("hour",23).set("second",59),C=_.valueOf()),console.log(h.toJSON()),console.log(_.toJSON()),Qm(s,Z=>{const x=Z.val();x.timestamp<f||x.timestamp>C||z(x)});function R(Z){return Ri(Z).format("mm:ss")}function z(Z){const x=Z.serialNumber,L=Z.placeName,Y=Z.timestamp;if(console.log(Z),x in o||(o[x]={}),L in o[x]||(o[x][L]={intime:-1,outtime:-1}),!(L in r.value))return;const le="\u7B49\u5019\u5340";if(l[x]||(l[x]=le),!a[x])a[x]=Y;else if(Y-a[x]<1e3){console.log(`${R(Y)} ${x} \u592A\u5FEB\uFF0Cskip`);return}a[x]=Y;const U=l[x];if(U!=le&&U!=L){o[x][L].intime=Y;const $=Y-o[x][U].intime;c[U].push($),console.log(`${R(Y)}\uFF1A${x} \u82B1 ${Math.floor($/1e3)} \u79D2\uFF0C \u5F9E ${U} \u77AC\u9593\u79FB\u52D5\u5230 ${L}`),o[x][U].intime=-1,l[x]=L}else if(U!=le&&U==L){const $=Y-o[x][U].intime;c[L].push($),console.log(`${R(Y)}\uFF1A${x} \u82B1 ${Math.floor($/1e3)} \u79D2\uFF0C\u5728 ${U}\uFF0C\u5237\u7B2C2\u6B21\uFF0C\u5230\u7B49\u5019\u5340`),o[x][U].intime=-1,l[x]=le}else U==le?(console.log(`${R(Y)}\uFF1A${x} \u5F9E ${U} \u9032\u5165 ${L}`),o[x][L].intime=Y,l[x]=L):console.log(`${R(Y)}\uFF1A\u9019\u4E8B\u4E0D\u8A72\u767C\u751F ${x} , ${U} , ${L}`);U!=le&&c[U].length>0&&(r.value[U].num=c[U].length,r.value[U].avgWorkTime=c[U].reduce(($,W)=>$+W)/c[U].length,r.value[U].avgWorkTime=Math.round(r.value[U].avgWorkTime/1e3)),L!=le&&c[L].length>0&&(r.value[L].num=c[L].length,r.value[L].avgWorkTime=c[L].reduce(($,W)=>$+W)/c[L].length,r.value[L].avgWorkTime=Math.round(r.value[L].avgWorkTime/1e3))}return(Z,x)=>(Ke(),Xe("div",ly,[(Ke(!0),Xe(He,null,qo(ka(e),(L,Y,le)=>(Ke(),Xe("div",ay,[dt("h1",null,Bt(Y),1),(Ke(!0),Xe(He,null,qo(L,(U,$,W)=>(Ke(),Xe("div",cy,[!U.includes("\u5FC3\u96FB\u6AA2\u67E5")&&!U.includes("\u5065\u6AA2\u6AC3\u53F0")?(Ke(),Xe("div",uy,[dt("h2",null,Bt(U),1),dt("h3",null,"\u5E73\u5747\u8655\u7406\u6642\u9593\uFF1A"+Bt(r.value[U].avgWorkTime)+" \u79D2",1)])):As("",!0),U=="\u5065\u6AA2\u6AC3\u53F0"?(Ke(),Xe("div",hy,[dt("h2",null,Bt(U),1),dt("h3",null,"\u5E73\u5747\u5B8C\u6210\u9AD4\u6AA2\u6642\u9593\uFF1A"+Bt(r.value[U].avgWorkTime)+" \u79D2",1)])):As("",!0),U=="\u5FC3\u96FB\u6AA2\u67E5_\u7537"?(Ke(),Xe("div",dy,[fy,r.value[U].num+r.value.\u5FC3\u96FB\u6AA2\u67E5_\u5973.num?(Ke(),Xe("h3",py,"\u5E73\u5747\u8655\u7406\u6642\u9593\uFF1A"+Bt(((r.value[U].avgWorkTime*r.value[U].num+r.value.\u5FC3\u96FB\u6AA2\u67E5_\u5973.avgWorkTime*r.value.\u5FC3\u96FB\u6AA2\u67E5_\u5973.num)/(r.value[U].num+r.value.\u5FC3\u96FB\u6AA2\u67E5_\u5973.num)).toFixed(0))+" \u79D2",1)):(Ke(),Xe("h3",_y,"\u5E73\u5747\u8655\u7406\u6642\u9593\uFF1A0 \u79D2"))])):As("",!0)]))),256))]))),256))]))}});var my=Uu(gy,[["__scopeId","data-v-5f00bbd8"]]),yy="firebase",vy="9.9.4";/**
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
 */xt(yy,vy,"app");function Bu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Wu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cy=Wu,Hu=new pi("auth","Firebase",Wu());/**
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
 */const ea=new Jr("@firebase/auth");function Di(t,...e){ea.logLevel<=ue.ERROR&&ea.error(`Auth (${Zr}): ${t}`,...e)}/**
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
 */function ta(t,...e){throw ko(t,...e)}function Vu(t,...e){return ko(t,...e)}function Ey(t,e,n){const i=Object.assign(Object.assign({},Cy()),{[e]:n});return new pi("auth","Firebase",i).create(e,{appName:t.name})}function ko(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Hu.create(t,...e)}function re(t,e,...n){if(!t)throw ko(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Di(e),new Error(e)}function ts(t,e){t||Qn(e)}/**
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
 */const na=new Map;function Gt(t){ts(t instanceof Function,"Expected a class definition");let e=na.get(t);return e?(ts(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,na.set(t,e),e)}function by(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Iy(){return ia()==="http:"||ia()==="https:"}function ia(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wy(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Iy()||kf()||"connection"in navigator)?navigator.onLine:!0}function Ty(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,ts(n>e,"Short delay should be less than long delay!"),this.isMobile=Yr()||pc()}get(){return wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sy(t,e){ts(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ju{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ay=new Ei(3e4,6e4);async function zu(t,e,n,i,s={}){return Ku(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Qr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ju.fetch()(qu(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Ku(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ny),e);try{const s=new Ry(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw xi(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ey(t,u,c);ta(t,u)}}catch(s){if(s instanceof ln)throw s;ta(t,"network-request-failed")}}function qu(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Sy(t.config,s):`${t.config.apiScheme}://${s}`}class Ry{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Vu(this.auth,"network-request-failed")),Ay.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xi(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Vu(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function xy(t,e){return zu(t,"POST","/v1/accounts:delete",e)}async function ky(t,e){return zu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Oy(t,e=!1){const n=an(t),i=await n.getIdToken(e),s=Gu(i);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Jn(Hs(s.auth_time)),issuedAtTime:Jn(Hs(s.iat)),expirationTime:Jn(Hs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Hs(t){return Number(t)*1e3}function Gu(t){var e;const[n,i,s]=t.split(".");if(n===void 0||i===void 0||s===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const r=sr(i);return r?JSON.parse(r):(Di("Failed to decode base64 JWT payload"),null)}catch(r){return Di("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Py(t){const e=Gu(t);return re(e,"internal-error"),re(typeof e.exp!="undefined","internal-error"),re(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ln&&Dy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Dy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class My{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ns(t){var e;const n=t.auth,i=await t.getIdToken(),s=await wr(t,ky(n,{idToken:i}));re(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Uy(r.providerUserInfo):[],l=Ly(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Yu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Fy(t){const e=an(t);await ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ly(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Uy(t){return t.map(e=>{var{providerId:n}=e,i=Bu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function $y(t,e){const n=await Ku(t,{},async()=>{const i=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=qu(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ju.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken!="undefined","internal-error"),re(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await $y(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new fi;return i&&(re(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(re(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function Tt(t,e){re(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new My(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await wr(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Oy(this,e)}reload(){return Fy(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ns(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wr(this,xy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,z=(c=n.createdAt)!==null&&c!==void 0?c:void 0,Z=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:L,isAnonymous:Y,providerData:le,stsTokenManager:U}=n;re(x&&U,e,"internal-error");const $=fi.fromJSON(this.name,U);re(typeof x=="string",e,"internal-error"),Tt(h,e.name),Tt(f,e.name),re(typeof L=="boolean",e,"internal-error"),re(typeof Y=="boolean",e,"internal-error"),Tt(_,e.name),Tt(C,e.name),Tt(A,e.name),Tt(R,e.name),Tt(z,e.name),Tt(Z,e.name);const W=new In({uid:x,auth:e,email:f,emailVerified:L,displayName:h,isAnonymous:Y,photoURL:C,phoneNumber:_,tenantId:A,stsTokenManager:$,createdAt:z,lastLoginAt:Z});return le&&Array.isArray(le)&&(W.providerData=le.map(H=>Object.assign({},H))),R&&(W._redirectEventId=R),W}static async _fromIdTokenResponse(e,n,i=!1){const s=new fi;s.updateFromServerResponse(n);const r=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ns(r),r}}/**
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
 */class Qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qu.type="NONE";const sa=Qu;/**
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
 */function Vs(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Vs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Vs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new wn(Gt(sa),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Gt(sa);const o=Vs(i,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const h=In._fromJSON(e,u);c!==r&&(l=h),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new wn(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new wn(r,e,i))}}/**
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
 */function ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(By(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zy(e))return"Blackberry";if(Ky(e))return"Webos";if(Wy(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function By(t=_t()){return/firefox\//i.test(t)}function Wy(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(t=_t()){return/crios\//i.test(t)}function Vy(t=_t()){return/iemobile/i.test(t)}function jy(t=_t()){return/android/i.test(t)}function zy(t=_t()){return/blackberry/i.test(t)}function Ky(t=_t()){return/webos/i.test(t)}/**
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
 */function Ju(t,e=[]){let n;switch(t){case"Browser":n=ra(_t());break;case"Worker":n=`${ra(_t())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${i}`}/**
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
 */class qy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Gy{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oa(this),this.idTokenSubscription=new oa(this),this.beforeStateQueue=new qy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ns(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?an(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ju(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Yy(t){return an(t)}class oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bf(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Ei(3e4,6e4);/**
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
 */new Ei(2e3,1e4);/**
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
 */new Ei(3e4,6e4);/**
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
 */new Ei(5e3,15e3);var la="@firebase/auth",aa="0.20.6";/**
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
 */class Qy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xy(t){Rn(new Xt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((l,a)=>{re(r&&!r.includes(":"),"invalid-api-key",{appName:l.name}),re(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ju(t)},u=new Gy(l,a,c);return by(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Rn(new Xt("auth-internal",e=>{const n=Yy(e.getProvider("auth").getImmediate());return(i=>new Qy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(la,aa,Jy(t)),xt(la,aa,"esm2017")}Xy("Browser");const Zy={apiKey:"AIzaSyAjr53uHeIDxD1uzRcnzKJyFAE6WVUlfn0",authDomain:"physical-examination.firebaseapp.com",databaseURL:"https://physical-examination-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"physical-examination",storageBucket:"physical-examination.appspot.com",messagingSenderId:"204950821656",appId:"1:204950821656:web:638bdba7e304b20c409c6d",measurementId:"G-SWY69F2NCT"};function ev(){return Wp(Zy)}const tv=t=>($a("data-v-f4f518fc"),t=t(),Ba(),t),nv=tv(()=>dt("main",null,null,-1)),iv=za({__name:"App",setup(t){return ev(),(e,n)=>(Ke(),Xe(He,null,[dt("header",null,[pt(my)]),nv],64))}});var sv=Uu(iv,[["__scopeId","data-v-f4f518fc"]]);Sf(sv).mount("#app");