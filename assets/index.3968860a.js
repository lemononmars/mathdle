var it=Object.defineProperty,ct=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var Ee=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var Ne=(n,e,l)=>e in n?it(n,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[e]=l,Me=(n,e)=>{for(var l in e||(e={}))ut.call(e,l)&&Ne(n,l,e[l]);if(Ee)for(var l of Ee(e))ft.call(e,l)&&Ne(n,l,e[l]);return n},Oe=(n,e)=>ct(n,at(e));var ce=(n,e,l)=>(Ne(n,typeof e!="symbol"?e+"":e,l),l);import{S as _e,i as ve,s as we,e as d,a as v,b as Te,c as a,d as A,f as p,g as Ce,h as u,n as $,t as B,j as ye,k as re,l as he,m as ge,o as J,p as ee,q as be,r as Ae,u as Le,F as dt,T as mt,v as se,w as ht,x as gt,y as te,z as Pe,A as Ie,B as bt,C as xe,D as pt,E as _t}from"./vendor.35443c13.js";const vt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}};vt();function ze(n){let e,l,t,r;return{c(){e=d("script"),t=v(),r=d("script"),r.textContent=`window.dataLayer = window.dataLayer || []\r
      function gtag() {\r
        dataLayer.push(arguments)\r
      }\r
      gtag("js", new Date())\r
      gtag("config", "G-YTV7TZ3EMC")`,e.async=!0,Te(e.src,l="https://www.googletagmanager.com/gtag/js?id="+n[4])||a(e,"src",l)},m(o,s){A(o,e,s),A(o,t,s),A(o,r,s)},p(o,s){s&16&&!Te(e.src,l="https://www.googletagmanager.com/gtag/js?id="+o[4])&&a(e,"src",l)},d(o){o&&p(e),o&&p(t),o&&p(r)}}}function wt(n){let e,l,t,r,o,s,c,f,y,x,P,k,E;document.title=e=n[0];let z=n[4]&&ze(n);return{c(){l=d("meta"),t=d("meta"),r=d("meta"),o=d("meta"),s=d("meta"),c=d("meta"),f=d("meta"),y=d("meta"),x=d("meta"),P=d("meta"),k=d("meta"),z&&z.c(),E=Ce(),a(l,"name","title"),a(l,"content",n[0]),a(t,"name","description"),a(t,"content",n[1]),a(r,"name","viewport"),a(r,"content","width=device-width, initial-scale=1"),a(o,"property","og:url"),a(o,"content",n[2]),a(s,"property","og:type"),a(s,"content","website"),a(c,"property","og:title"),a(c,"content",n[0]),a(f,"property","og:description"),a(f,"content",n[1]),a(y,"property","og:image"),a(y,"content",n[3]),a(x,"name","twitter:title"),a(x,"content",n[0]),a(P,"name","twitter:card"),a(P,"content","summary_large_image"),a(k,"name","twitter:image"),a(k,"content",n[3])},m(T,C){u(document.head,l),u(document.head,t),u(document.head,r),u(document.head,o),u(document.head,s),u(document.head,c),u(document.head,f),u(document.head,y),u(document.head,x),u(document.head,P),u(document.head,k),z&&z.m(document.head,null),u(document.head,E)},p(T,[C]){C&1&&e!==(e=T[0])&&(document.title=e),C&1&&a(l,"content",T[0]),C&2&&a(t,"content",T[1]),C&4&&a(o,"content",T[2]),C&1&&a(c,"content",T[0]),C&2&&a(f,"content",T[1]),C&8&&a(y,"content",T[3]),C&1&&a(x,"content",T[0]),C&8&&a(k,"content",T[3]),T[4]?z?z.p(T,C):(z=ze(T),z.c(),z.m(E.parentNode,E)):z&&(z.d(1),z=null)},i:$,o:$,d(T){p(l),p(t),p(r),p(o),p(s),p(c),p(f),p(y),p(x),p(P),p(k),z&&z.d(T),p(E)}}}function yt(n,e,l){let{title:t}=e,{description:r}=e,{url:o}=e,{imageUrl:s}=e,{gtagId:c}=e;return n.$$set=f=>{"title"in f&&l(0,t=f.title),"description"in f&&l(1,r=f.description),"url"in f&&l(2,o=f.url),"imageUrl"in f&&l(3,s=f.imageUrl),"gtagId"in f&&l(4,c=f.gtagId)},[t,r,o,s,c]}class xt extends _e{constructor(e){super();ve(this,e,yt,wt,we,{title:0,description:1,url:2,imageUrl:3,gtagId:4})}}function qe(n,e,l){const t=n.slice();return t[1]=e[l].name,t[2]=e[l].url,t}function We(n){let e,l=n[1]+"",t,r;return{c(){e=d("a"),t=B(l),a(e,"href",r=n[2]),a(e,"class","p-1 bg-white rounded"),a(e,"target","_blank"),a(e,"rel","noreferrer")},m(o,s){A(o,e,s),u(e,t)},p(o,s){s&1&&l!==(l=o[1]+"")&&ye(t,l),s&1&&r!==(r=o[2])&&a(e,"href",r)},d(o){o&&p(e)}}}function kt(n){let e,l=n[0],t=[];for(let r=0;r<l.length;r+=1)t[r]=We(qe(n,l,r));return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();a(e,"class","text-xs fixed sm:text-base bottom-4 right-4 text-right z-10")},m(r,o){A(r,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(r,[o]){if(o&1){l=r[0];let s;for(s=0;s<l.length;s+=1){const c=qe(r,l,s);t[s]?t[s].p(c,o):(t[s]=We(c),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},i:$,o:$,d(r){r&&p(e),re(t,r)}}}function Nt(n,e,l){let{items:t=[]}=e;return n.$$set=r=>{"items"in r&&l(0,t=r.items)},[t]}class It extends _e{constructor(e){super();ve(this,e,Nt,kt,we,{items:0})}}function Re(n){let e,l,t,r,o;return l=new dt({props:{class:"h-10 w-10",url:n[0]}}),r=new mt({props:{class:"h-10 w-10",text:n[1],url:n[0]}}),{c(){e=d("div"),he(l.$$.fragment),t=v(),he(r.$$.fragment),a(e,"class","flex gap-2 pr-4 sm:pr-0 justify-end sm:justify-center w-full fixed top-4 sm:top-auto sm:bottom-4 center")},m(s,c){A(s,e,c),ge(l,e,null),u(e,t),ge(r,e,null),o=!0},p(s,c){const f={};c&1&&(f.url=s[0]),l.$set(f);const y={};c&2&&(y.text=s[1]),c&1&&(y.url=s[0]),r.$set(y)},i(s){o||(J(l.$$.fragment,s),J(r.$$.fragment,s),o=!0)},o(s){ee(l.$$.fragment,s),ee(r.$$.fragment,s),o=!1},d(s){s&&p(e),be(l),be(r)}}}function jt(n){let e,l,t=n[0]&&Re(n);return{c(){t&&t.c(),e=Ce()},m(r,o){t&&t.m(r,o),A(r,e,o),l=!0},p(r,[o]){r[0]?t?(t.p(r,o),o&1&&J(t,1)):(t=Re(r),t.c(),J(t,1),t.m(e.parentNode,e)):t&&(Ae(),ee(t,1,1,()=>{t=null}),Le())},i(r){l||(J(t),l=!0)},o(r){ee(t),l=!1},d(r){t&&t.d(r),r&&p(e)}}}function Ut(n,e,l){let{url:t}=e,{title:r}=e;return n.$$set=o=>{"url"in o&&l(0,t=o.url),"title"in o&&l(1,r=o.title)},[t,r]}class Et extends _e{constructor(e){super();ve(this,e,Ut,jt,we,{url:0,title:1})}}var de;(function(n){n[n.Correct=0]="Correct",n[n.OutOfPlace=1]="OutOfPlace",n[n.Wrong=2]="Wrong",n[n.NotUsed=3]="NotUsed"})(de||(de={}));const Mt={[0]:"\u{1F7E9}",[1]:"\u{1F7E8}",[2]:"\u2B1C"};function ke(n,e){const l=n.split(""),t=e.split(""),r=l.map(o=>({correct:2,char:o}));return t.forEach((o,s)=>{l[s]===o&&(t[s]=null,l[s]=null,r[s]={correct:0,char:o})}),t.forEach((o,s)=>{const c=l[s];if(c&&t.includes(c)){const f=t.indexOf(c);let y;f!==-1&&(y=t[f],t[f]=null,l[s]=null),r[s]={correct:1,char:y}}}),r}function Ot(n,e=[]){const l=[];return n.forEach(t=>{const r={};t.split("").forEach((o,s)=>{r[o]=3}),e.forEach(({correct:o,char:s})=>{s.split("").forEach(c=>{o<r[c]&&(r[c]=o)})}),l.push(r)}),l}function Tt(n){return n.map(e=>e.map(({correct:l})=>Mt[l]).join(""))}const L=class{constructor(e=null){ce(this,"mt",new Array(L.N));ce(this,"mti",L.N+1);e==null&&(e=new Date().getTime()),this.init_genrand(e)}init_genrand(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<L.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((e&4294901760)>>>16)*1812433253<<16)+(e&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}}_nextInt32(){var e,l=new Array(0,L.MATRIX_A);if(this.mti>=L.N){var t;for(this.mti==L.N+1&&this.init_genrand(5489),t=0;t<L.N-L.M;t++)e=this.mt[t]&L.UPPER_MASK|this.mt[t+1]&L.LOWER_MASK,this.mt[t]=this.mt[t+L.M]^e>>>1^l[e&1];for(;t<L.N-1;t++)e=this.mt[t]&L.UPPER_MASK|this.mt[t+1]&L.LOWER_MASK,this.mt[t]=this.mt[t+(L.M-L.N)]^e>>>1^l[e&1];e=this.mt[L.N-1]&L.UPPER_MASK|this.mt[0]&L.LOWER_MASK,this.mt[L.N-1]=this.mt[L.M-1]^e>>>1^l[e&1],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,e^=e>>>18,e>>>0}nextInt32(e=null){var l=this._nextInt32();return e==null?l:l%(e[1]-e[0])+e[0]}nextInt31(){return this._nextInt32()>>>1}nextNumber(){return this._nextInt32()*(1/4294967295)}nextNumber53(){var e=this._nextInt32()>>>5,l=this._nextInt32()>>>6;return(e*67108864+l)*(1/9007199254740992)}};let me=L;ce(me,"N",624),ce(me,"M",397),ce(me,"MATRIX_A",2567483615),ce(me,"UPPER_MASK",2147483648),ce(me,"LOWER_MASK",2147483647);var I;(function(n){n[n.Correct=0]="Correct",n[n.OutOfPlace=1]="OutOfPlace",n[n.Wrong=2]="Wrong",n[n.NotUsed=3]="NotUsed"})(I||(I={}));function Ke(n,e,l){const t=n.slice();return t[5]=e[l].correct,t[6]=e[l].char,t}function Se(n,e,l){const t=n.slice();return t[5]=e[l].correct,t[6]=e[l].char,t}function De(n,e,l){const t=n.slice();return t[5]=e[l].correct,t[6]=e[l].char,t}function He(n){var s;let e,l=((s=n[6])!=null?s:"")+"",t,r,o;return{c(){e=d("div"),t=B(l),r=v(),a(e,"class",o=`${n[4][n[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(c,f){A(c,e,f),u(e,t),u(e,r)},p:$,d(c){c&&p(e)}}}function Fe(n){var s;let e,l=((s=n[6])!=null?s:"")+"",t,r,o;return{c(){e=d("div"),t=B(l),r=v(),a(e,"class",o=`${n[4][n[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(c,f){A(c,e,f),u(e,t),u(e,r)},p:$,d(c){c&&p(e)}}}function Ye(n){var s;let e,l=((s=n[6])!=null?s:"")+"",t,r,o;return{c(){e=d("div"),t=B(l),r=v(),a(e,"class",o=`${n[4][n[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(c,f){A(c,e,f),u(e,t),u(e,r)},p:$,d(c){c&&p(e)}}}function Ct(n){let e,l,t,r,o,s,c,f,y,x,P,k,E,z,T,C,R,S,F,X,Q,V,q,Z,ae,K,oe,le,ie,Y,ue,G,fe,D,ne,w,W,M,g=n[1],h=[];for(let m=0;m<g.length;m+=1)h[m]=He(De(n,g,m));let j=n[2],b=[];for(let m=0;m<j.length;m+=1)b[m]=Fe(Se(n,j,m));let H=n[3],U=[];for(let m=0;m<H.length;m+=1)U[m]=Ye(Ke(n,H,m));return{c(){e=d("div"),l=d("div"),t=d("div"),r=v(),o=d("span"),o.textContent="\u200B",s=v(),c=d("div"),f=d("div"),y=d("div"),x=d("div"),P=d("h3"),P.textContent="Mathdle",k=v(),E=d("div"),E.innerHTML=`<p class="text-sm text-gray-500">Find the equation.<br/>
                (Just like
                <a target="_blank" href="https://www.powerlanguage.co.uk/wordle" class="underline">Wordle</a> , but it&#39;s math.)</p>`,z=v(),T=d("hr"),C=v(),R=d("h3"),R.textContent="Rules",S=v(),F=d("div"),F.innerHTML=`<p class="text-sm text-gray-500"></p><ul class="list-decimal text-sm text-gray-500"><li>Each guess must be a valid equation (both sides of the equation must be equal.)</li> 
                  <li>When necessary, the <a target="_blank" href="https://en.wikipedia.org/wiki/Order_of_operations" class="underline">order of operation</a> is applied.</li> 
                  <li>There are 10 modes:
                    <ul class="list-disc text-sm text-gray-500"><li><strong>Easy</strong>: the solution has one operation (+,-,*,/), and all numbers are positive integers.</li> 
                      <li><strong>Medium</strong>: the solution has two operations (possiblty identical), and all numbers are integers (possibly zero or negative). It is always in the form <strong>a Y b = c Z d</strong> where a,b,c, and d are numbers and Y and Z are operations.</li></ul></li></ul>`,X=v(),Q=d("hr"),V=v(),q=d("div"),Z=d("h3"),Z.textContent="Examples",ae=v(),K=d("div");for(let m=0;m<h.length;m+=1)h[m].c();oe=v(),le=d("p"),le.innerHTML="The digit <strong>2</strong> is in the equation, and in the correct position.",ie=v(),Y=d("div");for(let m=0;m<b.length;m+=1)b[m].c();ue=v(),G=d("p"),G.innerHTML="The division symbol <strong>/</strong> is in the equation, but in another position.",fe=v(),D=d("div");for(let m=0;m<U.length;m+=1)U[m].c();ne=v(),w=d("p"),w.innerHTML="The addition symbol <strong>+</strong> is not in the equation.",a(t,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),a(t,"aria-hidden","true"),a(o,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),a(o,"aria-hidden","true"),a(P,"class","text-base leading-6 font-medium text-gray-900"),a(P,"id","modal-title"),a(E,"class","mt-2"),a(T,"class","my-2"),a(R,"class","text-base leading-6 font-medium text-gray-900"),a(R,"id","modal-title"),a(F,"class","mt-2"),a(Q,"class","my-2"),a(Z,"class","text-base font-medium"),a(K,"class","flex justify-center my-1"),a(le,"class","text-sm text-gray-500 mb-4"),a(Y,"class","flex justify-center my-1"),a(G,"class","text-sm text-gray-500 mb-4"),a(D,"class","flex justify-center my-1"),a(w,"class","text-sm text-gray-500 mb-4"),a(q,"class","mt-2"),a(x,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"),a(y,"class","sm:flex sm:items-start"),a(f,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),a(c,"class","inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"),a(l,"class","flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"),a(e,"class","fixed z-10 inset-0 overflow-y-auto"),a(e,"aria-labelledby","modal-title"),a(e,"role","dialog"),a(e,"aria-modal","true")},m(m,N){A(m,e,N),u(e,l),u(l,t),u(l,r),u(l,o),u(l,s),u(l,c),u(c,f),u(f,y),u(y,x),u(x,P),u(x,k),u(x,E),u(x,z),u(x,T),u(x,C),u(x,R),u(x,S),u(x,F),u(x,X),u(x,Q),u(x,V),u(x,q),u(q,Z),u(q,ae),u(q,K);for(let i=0;i<h.length;i+=1)h[i].m(K,null);u(q,oe),u(q,le),u(q,ie),u(q,Y);for(let i=0;i<b.length;i+=1)b[i].m(Y,null);u(q,ue),u(q,G),u(q,fe),u(q,D);for(let i=0;i<U.length;i+=1)U[i].m(D,null);u(q,ne),u(q,w),W||(M=se(e,"click",function(){ht(n[0])&&n[0].apply(this,arguments)}),W=!0)},p(m,[N]){if(n=m,N&18){g=n[1];let i;for(i=0;i<g.length;i+=1){const O=De(n,g,i);h[i]?h[i].p(O,N):(h[i]=He(O),h[i].c(),h[i].m(K,null))}for(;i<h.length;i+=1)h[i].d(1);h.length=g.length}if(N&20){j=n[2];let i;for(i=0;i<j.length;i+=1){const O=Se(n,j,i);b[i]?b[i].p(O,N):(b[i]=Fe(O),b[i].c(),b[i].m(Y,null))}for(;i<b.length;i+=1)b[i].d(1);b.length=j.length}if(N&24){H=n[3];let i;for(i=0;i<H.length;i+=1){const O=Ke(n,H,i);U[i]?U[i].p(O,N):(U[i]=Ye(O),U[i].c(),U[i].m(D,null))}for(;i<U.length;i+=1)U[i].d(1);U.length=H.length}},i:$,o:$,d(m){m&&p(e),re(h,m),re(b,m),re(U,m),W=!1,M()}}}function At(n,e,l){const t=[{correct:I.Correct,char:"2"},{correct:I.NotUsed,char:"*"},{correct:I.NotUsed,char:"3"},{correct:I.NotUsed,char:"="},{correct:I.NotUsed,char:"7"},{correct:I.NotUsed,char:"-"},{correct:I.NotUsed,char:"1"}],r=[{correct:I.NotUsed,char:"1"},{correct:I.NotUsed,char:"8"},{correct:I.OutOfPlace,char:"/"},{correct:I.NotUsed,char:"2"},{correct:I.NotUsed,char:"="},{correct:I.NotUsed,char:"3"},{correct:I.NotUsed,char:"*"},{correct:I.NotUsed,char:"3"}],o=[{correct:I.NotUsed,char:"-"},{correct:I.NotUsed,char:"4"},{correct:I.Wrong,char:"+"},{correct:I.NotUsed,char:"5"},{correct:I.NotUsed,char:"="},{correct:I.NotUsed,char:"9"},{correct:I.NotUsed,char:"-"},{correct:I.NotUsed,char:"8"}],s={[I.Correct]:"bg-green-500 border-green-500",[I.OutOfPlace]:"bg-yellow-500 border-yellow-500",[I.Wrong]:"bg-gray-500 border-gray-500",[I.NotUsed]:"bg-white"};let{onClose:c=()=>{}}=e;return n.$$set=f=>{"onClose"in f&&l(0,c=f.onClose)},[c,t,r,o,s]}class Lt extends _e{constructor(e){super();ve(this,e,At,Ct,we,{onClose:0})}}const Be="mathdle-attempts",je=gt(JSON.parse(window.localStorage.getItem(Be)||'{"data": {}}'));je.subscribe(n=>{window.localStorage[Be]=JSON.stringify(n)});function Ze(n,e,l){const t=n.slice();return t[31]=e[l],t}function Ge(n,e,l){const t=n.slice();return t[34]=e[l][0],t[35]=e[l][1],t}function Je(n,e,l){const t=n.slice();return t[38]=e[l],t[40]=l,t}function Ve(n,e,l){const t=n.slice();return t[4]=e[l],t}function Xe(n,e,l){const t=n.slice();return t[43]=e[l].correct,t[44]=e[l].char,t}function Qe(n){var o;let e,l=((o=n[44])!=null?o:"")+"",t,r;return{c(){e=d("div"),t=B(l),a(e,"class",r=""+(te(`${n[13][n[43]]||"bg-white"} ${n[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-14zdftc"))},m(s,c){A(s,e,c),u(e,t)},p(s,c){var f;c[0]&11&&l!==(l=((f=s[44])!=null?f:"")+"")&&ye(t,l),c[0]&267&&r!==(r=""+(te(`${s[13][s[43]]||"bg-white"} ${s[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-14zdftc"))&&a(e,"class",r)},d(s){s&&p(e)}}}function $e(n){let e,l=ke(n[4],n[3]),t=[];for(let r=0;r<l.length;r+=1)t[r]=Qe(Xe(n,l,r));return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();a(e,"class","flex justify-center my-1")},m(r,o){A(r,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(r,o){if(o[0]&8459){l=ke(r[4],r[3]);let s;for(s=0;s<l.length;s+=1){const c=Xe(r,l,s);t[s]?t[s].p(c,o):(t[s]=Qe(c),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(r){r&&p(e),re(t,r)}}}function et(n){let e,l=new Array(n[8]).fill(0),t=[];for(let r=0;r<l.length;r+=1)t[r]=tt(Je(n,l,r));return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();a(e,"class","flex justify-center my-1")},m(r,o){A(r,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(r,o){if(o[0]&768){l=new Array(r[8]).fill(0);let s;for(s=0;s<l.length;s+=1){const c=Je(r,l,s);t[s]?t[s].p(c,o):(t[s]=tt(c),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(r){r&&p(e),re(t,r)}}}function tt(n){let e,l=(n[9][n[40]]||"")+"",t,r,o;return{c(){e=d("div"),t=B(l),r=v(),a(e,"class",o=""+(te(`bg-white ${n[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`)+" svelte-14zdftc"))},m(s,c){A(s,e,c),u(e,t),u(e,r)},p(s,c){c[0]&512&&l!==(l=(s[9][s[40]]||"")+"")&&ye(t,l),c[0]&256&&o!==(o=""+(te(`bg-white ${s[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`)+" svelte-14zdftc"))&&a(e,"class",o)},d(s){s&&p(e)}}}function lt(n){let e,l,t;return{c(){e=d("input"),a(e,"type","text"),a(e,"class","border px-4 py-2 text-center w-64"),a(e,"placeholder","Click here to use keyboard input"),e.autofocus=!0},m(r,o){A(r,e,o),Pe(e,n[4]),e.focus(),l||(t=[se(e,"keypress",n[14]),se(e,"input",n[22])],l=!0)},p(r,o){o[0]&16&&e.value!==r[4]&&Pe(e,r[4])},d(r){r&&p(e),l=!1,Ie(t)}}}function nt(n){let e,l=n[34]+"",t,r,o,s;function c(){return n[23](n[34])}return{c(){e=d("button"),t=B(l),a(e,"class",r=""+(te(n[13][n[35]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-14zdftc"))},m(f,y){A(f,e,y),u(e,t),o||(s=se(e,"click",c),o=!0)},p(f,y){n=f,y[0]&1024&&l!==(l=n[34]+"")&&ye(t,l),y[0]&1024&&r!==(r=""+(te(n[13][n[35]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-14zdftc"))&&a(e,"class",r)},d(f){f&&p(e),o=!1,s()}}}function rt(n){let e,l,t=Object.entries(n[31]),r=[];for(let o=0;o<t.length;o+=1)r[o]=nt(Ge(n,t,o));return{c(){e=d("div");for(let o=0;o<r.length;o+=1)r[o].c();l=v(),a(e,"class","w-full flex flex-row justify-center")},m(o,s){A(o,e,s);for(let c=0;c<r.length;c+=1)r[c].m(e,null);u(e,l)},p(o,s){if(s[0]&9232){t=Object.entries(o[31]);let c;for(c=0;c<t.length;c+=1){const f=Ge(o,t,c);r[c]?r[c].p(f,s):(r[c]=nt(f),r[c].c(),r[c].m(e,l))}for(;c<r.length;c+=1)r[c].d(1);r.length=t.length}},d(o){o&&p(e),re(r,o)}}}function Pt(n){let e,l,t,r,o,s;return{c(){e=d("div"),l=d("button"),l.textContent="Enter",t=v(),r=d("button"),r.textContent="Clear",a(l,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),a(r,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),a(e,"class","flex flex-row justify-center")},m(c,f){A(c,e,f),u(e,l),u(e,t),u(e,r),o||(s=[se(l,"click",n[15]),se(r,"click",n[24])],o=!0)},p:$,d(c){c&&p(e),o=!1,Ie(s)}}}function zt(n){let e,l=(n[7]?"Copied":"Share")+"",t,r,o;return{c(){e=d("button"),t=B(l),a(e,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400")},m(s,c){A(s,e,c),u(e,t),r||(o=se(e,"click",n[16]),r=!0)},p(s,c){c[0]&128&&l!==(l=(s[7]?"Copied":"Share")+"")&&ye(t,l)},d(s){s&&p(e),r=!1,o()}}}function st(n){let e,l;return e=new Lt({props:{onClose:n[25]}}),{c(){he(e.$$.fragment)},m(t,r){ge(e,t,r),l=!0},p(t,r){const o={};r[0]&64&&(o.onClose=t[25]),e.$set(o)},i(t){l||(J(e.$$.fragment,t),l=!0)},o(t){ee(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function qt(n){let e,l,t,r,o,s,c,f,y,x,P,k,E,z=n[12]+1+"",T,C,R,S,F,X,Q,V,q,Z,ae,K,oe,le,ie,Y,ue,G,fe,D,ne,w;l=new It({props:{items:n[11]}}),r=new Et({props:{url:ot,title:Ue}}),s=new xt({props:{title:Ue,description:Wt,url:ot,imageUrl:Rt,gtagId:Kt}});let W=n[1][n[0]],M=[];for(let i=0;i<W.length;i+=1)M[i]=$e(Ve(n,W,i));let g=!n[2][n[0]]&&et(n),h=!n[2][n[0]]&&lt(n),j=n[10],b=[];for(let i=0;i<j.length;i+=1)b[i]=rt(Ze(n,j,i));function H(i,O){return i[2][i[0]]?zt:Pt}let U=H(n),m=U(n),N=n[6]&&st(n);return{c(){e=d("div"),he(l.$$.fragment),t=v(),he(r.$$.fragment),o=v(),he(s.$$.fragment),c=v(),f=d("main"),y=d("h1"),x=d("span"),P=B(Ue),k=d("span"),k.textContent="Beta",E=B(`\r
\r
  Day `),T=B(z),C=v(),R=d("div"),S=d("button"),F=B("Easy"),Q=v(),V=d("button"),q=B("Medium"),ae=v(),K=d("div");for(let i=0;i<M.length;i+=1)M[i].c();oe=v(),g&&g.c(),le=v(),h&&h.c(),ie=v(),Y=d("div");for(let i=0;i<b.length;i+=1)b[i].c();ue=v(),G=d("div"),m.c(),fe=v(),N&&N.c(),a(e,"class","footer-wrapper svelte-14zdftc"),a(k,"class","text-sm text-gray-400 ml-2"),a(y,"class","text-6xl text-green-400 flex flex-col mb-4"),a(S,"class",X=""+(te(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${n[0]==0?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-14zdftc")),a(V,"class",Z=""+(te(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${n[0]==1?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-14zdftc")),a(R,"class","flex flex-row justify-center"),a(K,"class","attempts grow overflow-y-auto svelte-14zdftc"),a(Y,"class","layout my-4 w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"),a(G,"class","mb-16 text-center"),a(f,"class","w-full h-screen py-4 flex flex-col items-center")},m(i,O){A(i,e,O),ge(l,e,null),u(e,t),ge(r,e,null),A(i,o,O),ge(s,i,O),A(i,c,O),A(i,f,O),u(f,y),u(y,x),u(x,P),u(x,k),u(f,E),u(f,T),u(f,C),u(f,R),u(R,S),u(S,F),u(R,Q),u(R,V),u(V,q),u(f,ae),u(f,K);for(let _=0;_<M.length;_+=1)M[_].m(K,null);u(K,oe),g&&g.m(K,null),n[21](K),u(f,le),h&&h.m(f,null),u(f,ie),u(f,Y);for(let _=0;_<b.length;_+=1)b[_].m(Y,null);u(f,ue),u(f,G),m.m(G,null),u(f,fe),N&&N.m(f,null),D=!0,ne||(w=[se(S,"click",n[19]),se(V,"click",n[20])],ne=!0)},p(i,O){if((!D||O[0]&1&&X!==(X=""+(te(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${i[0]==0?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-14zdftc")))&&a(S,"class",X),(!D||O[0]&1&&Z!==(Z=""+(te(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${i[0]==1?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-14zdftc")))&&a(V,"class",Z),O[0]&8459){W=i[1][i[0]];let _;for(_=0;_<W.length;_+=1){const pe=Ve(i,W,_);M[_]?M[_].p(pe,O):(M[_]=$e(pe),M[_].c(),M[_].m(K,oe))}for(;_<M.length;_+=1)M[_].d(1);M.length=W.length}if(i[2][i[0]]?g&&(g.d(1),g=null):g?g.p(i,O):(g=et(i),g.c(),g.m(K,null)),i[2][i[0]]?h&&(h.d(1),h=null):h?h.p(i,O):(h=lt(i),h.c(),h.m(f,ie)),O[0]&9232){j=i[10];let _;for(_=0;_<j.length;_+=1){const pe=Ze(i,j,_);b[_]?b[_].p(pe,O):(b[_]=rt(pe),b[_].c(),b[_].m(Y,null))}for(;_<b.length;_+=1)b[_].d(1);b.length=j.length}U===(U=H(i))&&m?m.p(i,O):(m.d(1),m=U(i),m&&(m.c(),m.m(G,null))),i[6]?N?(N.p(i,O),O[0]&64&&J(N,1)):(N=st(i),N.c(),J(N,1),N.m(f,null)):N&&(Ae(),ee(N,1,1,()=>{N=null}),Le())},i(i){D||(J(l.$$.fragment,i),J(r.$$.fragment,i),J(s.$$.fragment,i),J(N),D=!0)},o(i){ee(l.$$.fragment,i),ee(r.$$.fragment,i),ee(s.$$.fragment,i),ee(N),D=!1},d(i){i&&p(e),be(l),be(r),i&&p(o),be(s,i),i&&p(c),i&&p(f),re(M,i),g&&g.d(),n[21](null),h&&h.d(),re(b,i),m.d(),N&&N.d(),ne=!1,Ie(w)}}}const ot="https://lemononmars.github.io/mathdle",Ue="Mathdle",Wt="Wordle clone, but it's math.",Rt="",Kt="G-YTV7TZ3EMC",St=16429572e5,Dt=864e5;function Ht(n,e){for(var l=[],t=0,r=0;t<n.length;t++)t>=e&&t%e==0&&r++,l[r]=l[r]||[],l[r].push(n[t]);return l}function Ft(n,e,l){var D,ne;let t,r,o,s,c;bt(n,je,w=>l(18,c=w));const f=[{name:"Report a bug?",url:"https://m.me/sakulbuth"},{name:"Original (Thwordle)",url:"https://github.com/narze/thwordle"},{name:"Github",url:"https://github.com/lemononmars/mathdle"}],y=Ht("1234506789+-*/=".split(""),5).map(w=>w.join("")),x=Date.now(),P=Math.floor((x-St)/Dt);let k="",E=0;const z=["easy","medium","hard"];let T=ae(P),C=((D=c.data[P])==null?void 0:D.attempts)||[[],[],[]],R=C.map((w,W)=>w.map(M=>ke(M,T[W]))),S=((ne=c.data[P])==null?void 0:ne.win)||[!1,!1,!1],F,X=!0,Q=!1;const V={[de.Correct]:"bg-green-500 border-green-500",[de.OutOfPlace]:"bg-yellow-500 border-yellow-500",[de.Wrong]:"bg-gray-500 border-gray-500",[de.NotUsed]:"bg-white"};function q(w){if(w.key==="Enter"&&(w.preventDefault(),Z()),o.length>=r+1){w.preventDefault();return}}async function Z(){if(S[E])return;if(k.length!=r){alert("Please match the input length");return}let w=k.split("=");if(w.length==1){alert("Equals sign missing (=)");return}if(w.length>2){alert("Too many equals signs!");return}let W,M;try{W=xe(w[0]),M=xe(w[1])}catch{alert("Invalid expression");return}if(W!=M){alert("Invalid equation: "+W+"\u2260"+M);return}l(1,C[E]=[...C[E],k],C);const g=ke(k,t);l(17,R[E]=[...R[E],g],R);let h=!0;g.forEach(j=>{j.correct!==de.Correct&&(h=!1)}),h&&(alert("You won!"),l(2,S[E]=!0,S)),l(4,k=""),await pt(),l(5,F.scrollTop=F.scrollHeight,F)}function ae(w){let W=["","",""];const M="+-/*".split("");let g=new me(w),h=0,j=0,b=0,H=0,U=M[g.nextInt32([0,3])];switch(j=g.nextInt32([1,10]),U){case"/":h=j*g.nextInt32([2,9]);break;case"-":h=j+g.nextInt32([1,10]);break;case"*":h=g.nextInt32([2,9]);break;case"+":h=g.nextInt32([1,10]);break}switch(b=xe(h+U+j),g.nextInt32([0,1])?W[0]=""+h+U+j+"="+b:W[0]=""+b+"="+h+U+j,U=M[g.nextInt32([0,3])],j=g.nextInt32([1,10]),U){case"/":h=j*g.nextInt32([2,9]);break;case"-":h=j+g.nextInt32([1,10]);break;case"*":h=g.nextInt32([2,9]);break;case"+":h=g.nextInt32([1,10]);break}const m=xe(h+U+j);let N=M[g.nextInt32([0,2])];switch(H=g.nextInt32([1,10]),N){case"+":b=m-H;break;case"-":b=m+H;break;case"/":b=m*H;break}return W[1]=""+h+U+j+"="+b+N+H,W}function K(){const w=Tt(R[E]);navigator.clipboard.writeText(`#Mathdle Day ${P+1} ${z[E]} (${w.length} attempts)

${w.join(`
`)}`),l(7,Q=!0),setTimeout(()=>{l(7,Q=!1)},2e3)}const oe=()=>{l(0,E=0),l(4,k="")},le=()=>{l(0,E=1),l(4,k="")};function ie(w){_t[w?"unshift":"push"](()=>{F=w,l(5,F)})}function Y(){k=this.value,l(4,k)}const ue=w=>l(4,k+=w),G=()=>{l(4,k="")},fe=()=>{l(6,X=!1)};return n.$$.update=()=>{n.$$.dirty[0]&1&&l(3,t=T[E]),n.$$.dirty[0]&8&&l(8,r=t.length),n.$$.dirty[0]&16&&l(4,k=k.replace(/[^0-9\+\-\*\/\=]/g,"")),n.$$.dirty[0]&16&&l(9,o=k.split("")),n.$$.dirty[0]&131073&&l(10,s=Ot(y,R[E].flat())),n.$$.dirty[0]&262150&&je.set({data:Oe(Me({},c.data),{[`${P}`]:{attempts:C,win:S}})})},[E,C,S,t,k,F,X,Q,r,o,s,f,P,V,q,Z,K,R,c,oe,le,ie,Y,ue,G,fe]}class Yt extends _e{constructor(e){super();ve(this,e,Ft,qt,we,{},null,[-1,-1])}}new Yt({target:document.getElementById("app")});