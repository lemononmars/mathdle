var bt=Object.defineProperty,pt=Object.defineProperties;var _t=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var Ce=(r,e,n)=>e in r?bt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,Ke=(r,e)=>{for(var n in e||(e={}))vt.call(e,n)&&Ce(r,n,e[n]);if(Fe)for(var n of Fe(e))yt.call(e,n)&&Ce(r,n,e[n]);return r},Re=(r,e)=>pt(r,_t(e));var de=(r,e,n)=>(Ce(r,typeof e!="symbol"?e+"":e,n),n);import{S as ke,i as Ie,s as Ne,e as m,a as p,b as Se,c,d as N,f as b,g as De,h as u,n as ue,t as G,j as je,k as fe,l as ve,m as ye,o as K,p as J,q as we,r as Me,u as qe,F as wt,T as xt,v as Ee,w as se,x as kt,y as It,z as X,A as Nt,B as jt,C as He,D as Te,E as Et,G as Ut,H as Mt,I as qt,J as Ot,K as Ct}from"./vendor.6a2fca60.js";const Tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};Tt();function Be(r){let e,n,t,l;return{c(){e=m("script"),t=p(),l=m("script"),l.textContent=`window.dataLayer = window.dataLayer || []\r
      function gtag() {\r
        dataLayer.push(arguments)\r
      }\r
      gtag("js", new Date())\r
      gtag("config", "G-YTV7TZ3EMC")`,e.async=!0,Se(e.src,n="https://www.googletagmanager.com/gtag/js?id="+r[4])||c(e,"src",n)},m(o,s){N(o,e,s),N(o,t,s),N(o,l,s)},p(o,s){s&16&&!Se(e.src,n="https://www.googletagmanager.com/gtag/js?id="+o[4])&&c(e,"src",n)},d(o){o&&b(e),o&&b(t),o&&b(l)}}}function At(r){let e,n,t,l,o,s,i,a,f,g,U,x,I;document.title=e=r[0];let T=r[4]&&Be(r);return{c(){n=m("meta"),t=m("meta"),l=m("meta"),o=m("meta"),s=m("meta"),i=m("meta"),a=m("meta"),f=m("meta"),g=m("meta"),U=m("meta"),x=m("meta"),T&&T.c(),I=De(),c(n,"name","title"),c(n,"content",r[0]),c(t,"name","description"),c(t,"content",r[1]),c(l,"name","viewport"),c(l,"content","width=device-width, initial-scale=1"),c(o,"property","og:url"),c(o,"content",r[2]),c(s,"property","og:type"),c(s,"content","website"),c(i,"property","og:title"),c(i,"content",r[0]),c(a,"property","og:description"),c(a,"content",r[1]),c(f,"property","og:image"),c(f,"content",r[3]),c(g,"name","twitter:title"),c(g,"content",r[0]),c(U,"name","twitter:card"),c(U,"content","summary_large_image"),c(x,"name","twitter:image"),c(x,"content",r[3])},m(M,q){u(document.head,n),u(document.head,t),u(document.head,l),u(document.head,o),u(document.head,s),u(document.head,i),u(document.head,a),u(document.head,f),u(document.head,g),u(document.head,U),u(document.head,x),T&&T.m(document.head,null),u(document.head,I)},p(M,[q]){q&1&&e!==(e=M[0])&&(document.title=e),q&1&&c(n,"content",M[0]),q&2&&c(t,"content",M[1]),q&4&&c(o,"content",M[2]),q&1&&c(i,"content",M[0]),q&2&&c(a,"content",M[1]),q&8&&c(f,"content",M[3]),q&1&&c(g,"content",M[0]),q&8&&c(x,"content",M[3]),M[4]?T?T.p(M,q):(T=Be(M),T.c(),T.m(I.parentNode,I)):T&&(T.d(1),T=null)},i:ue,o:ue,d(M){b(n),b(t),b(l),b(o),b(s),b(i),b(a),b(f),b(g),b(U),b(x),T&&T.d(M),b(I)}}}function Lt(r,e,n){let{title:t}=e,{description:l}=e,{url:o}=e,{imageUrl:s}=e,{gtagId:i}=e;return r.$$set=a=>{"title"in a&&n(0,t=a.title),"description"in a&&n(1,l=a.description),"url"in a&&n(2,o=a.url),"imageUrl"in a&&n(3,s=a.imageUrl),"gtagId"in a&&n(4,i=a.gtagId)},[t,l,o,s,i]}class Pt extends ke{constructor(e){super();Ie(this,e,Lt,At,Ne,{title:0,description:1,url:2,imageUrl:3,gtagId:4})}}function ze(r,e,n){const t=r.slice();return t[1]=e[n].name,t[2]=e[n].url,t}function Ye(r){let e,n=r[1]+"",t,l;return{c(){e=m("a"),t=G(n),c(e,"href",l=r[2]),c(e,"class","p-1 bg-gray-200 mx-1 rounded"),c(e,"target","_blank"),c(e,"rel","noreferrer")},m(o,s){N(o,e,s),u(e,t)},p(o,s){s&1&&n!==(n=o[1]+"")&&je(t,n),s&1&&l!==(l=o[2])&&c(e,"href",l)},d(o){o&&b(e)}}}function Wt(r){let e,n=r[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=Ye(ze(r,n,l));return{c(){e=m("div");for(let l=0;l<t.length;l+=1)t[l].c();c(e,"class","text-xs fixed sm:text-base bottom-4 right-4 text-right z-10")},m(l,o){N(l,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(l,[o]){if(o&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const i=ze(l,n,s);t[s]?t[s].p(i,o):(t[s]=Ye(i),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:ue,o:ue,d(l){l&&b(e),fe(t,l)}}}function Ft(r,e,n){let{items:t=[]}=e;return r.$$set=l=>{"items"in l&&n(0,t=l.items)},[t]}class Kt extends ke{constructor(e){super();Ie(this,e,Ft,Wt,Ne,{items:0})}}function Ge(r){let e,n,t,l,o;return n=new wt({props:{class:"h-10 w-10",url:r[0]}}),l=new xt({props:{class:"h-10 w-10",text:r[1],url:r[0]}}),{c(){e=m("div"),ve(n.$$.fragment),t=p(),ve(l.$$.fragment),c(e,"class","flex gap-2 pr-4 sm:pr-0 justify-end sm:justify-center w-full fixed top-4 sm:top-auto sm:bottom-4 center")},m(s,i){N(s,e,i),ye(n,e,null),u(e,t),ye(l,e,null),o=!0},p(s,i){const a={};i&1&&(a.url=s[0]),n.$set(a);const f={};i&2&&(f.text=s[1]),i&1&&(f.url=s[0]),l.$set(f)},i(s){o||(K(n.$$.fragment,s),K(l.$$.fragment,s),o=!0)},o(s){J(n.$$.fragment,s),J(l.$$.fragment,s),o=!1},d(s){s&&b(e),we(n),we(l)}}}function Rt(r){let e,n,t=r[0]&&Ge(r);return{c(){t&&t.c(),e=De()},m(l,o){t&&t.m(l,o),N(l,e,o),n=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&K(t,1)):(t=Ge(l),t.c(),K(t,1),t.m(e.parentNode,e)):t&&(Me(),J(t,1,1,()=>{t=null}),qe())},i(l){n||(K(t),n=!0)},o(l){J(t),n=!1},d(l){t&&t.d(l),l&&b(e)}}}function St(r,e,n){let{url:t}=e,{title:l}=e;return r.$$set=o=>{"url"in o&&n(0,t=o.url),"title"in o&&n(1,l=o.title)},[t,l]}class Dt extends ke{constructor(e){super();Ie(this,e,St,Rt,Ne,{url:0,title:1})}}const C=class{constructor(e=null){de(this,"mt",new Array(C.N));de(this,"mti",C.N+1);e==null&&(e=new Date().getTime()),this.init_genrand(e)}init_genrand(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<C.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((e&4294901760)>>>16)*1812433253<<16)+(e&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}}_nextInt32(){var e,n=new Array(0,C.MATRIX_A);if(this.mti>=C.N){var t;for(this.mti==C.N+1&&this.init_genrand(5489),t=0;t<C.N-C.M;t++)e=this.mt[t]&C.UPPER_MASK|this.mt[t+1]&C.LOWER_MASK,this.mt[t]=this.mt[t+C.M]^e>>>1^n[e&1];for(;t<C.N-1;t++)e=this.mt[t]&C.UPPER_MASK|this.mt[t+1]&C.LOWER_MASK,this.mt[t]=this.mt[t+(C.M-C.N)]^e>>>1^n[e&1];e=this.mt[C.N-1]&C.UPPER_MASK|this.mt[0]&C.LOWER_MASK,this.mt[C.N-1]=this.mt[C.M-1]^e>>>1^n[e&1],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,e^=e>>>18,e>>>0}nextInt32(e=null){var n=this._nextInt32();return e==null?n:n%(e[1]-e[0])+e[0]}nextInt31(){return this._nextInt32()>>>1}nextNumber(){return this._nextInt32()*(1/4294967295)}nextNumber53(){var e=this._nextInt32()>>>5,n=this._nextInt32()>>>6;return(e*67108864+n)*(1/9007199254740992)}};let pe=C;de(pe,"N",624),de(pe,"M",397),de(pe,"MATRIX_A",2567483615),de(pe,"UPPER_MASK",2147483648),de(pe,"LOWER_MASK",2147483647);var _e;(function(r){r[r.Correct=0]="Correct",r[r.OutOfPlace=1]="OutOfPlace",r[r.Wrong=2]="Wrong",r[r.NotUsed=3]="NotUsed"})(_e||(_e={}));const Ht={[0]:"\u{1F7E9}",[1]:"\u{1F7E8}",[2]:"\u2B1B",[3]:"\u2B1C"},Ae=2;function Oe(r,e,n){const t=r.split(""),l=r.replace(/[\+\-\*\/\=]/g,"").split("").map(a=>parseInt(a)-1),o=e.split("");let s=t.map(a=>({correct:2,char:a}));n===Ae&&s.forEach((a,f)=>a.correct=t.includes(""+(f+1))?3:2);let i=!0;return o.forEach((a,f)=>{a!==t[f]&&(i=!1)}),i?(s.forEach(a=>a.correct=0),s):(o.forEach((a,f)=>{if(n===Ae&&l.includes(f))return;t[f]===a&&(o[f]=null,t[f]=null,s[f].correct=0)}),o.forEach((a,f)=>{if(n===Ae&&l.includes(f))return;const g=t[f];if(!g||!o.includes(g))return;const U=o.indexOf(g);o[U]=null,t[f]=null,s[f].correct=1}),s)}function Bt(r,e=[]){const n=[];return r.forEach(t=>{const l={};t.split("").forEach((o,s)=>{l[o]=3}),e.forEach(({correct:o,char:s})=>{s.split("").forEach(i=>{o<l[i]&&(l[i]=o)})}),n.push(l)}),n}function zt(r){return r.map(e=>e.map(({correct:n})=>Ht[n]).join(""))}function Yt(r){let e=["","",""];const n="+-/*".split("");let t=new pe(r),l=0,o=0,s=0,i=0,a=n[t.nextInt32([0,3])];switch(o=t.nextInt32([1,10]),a){case"/":l=o*t.nextInt32([2,9]);break;case"-":l=o+t.nextInt32([1,10]);break;case"*":l=t.nextInt32([2,9]);break;case"+":l=t.nextInt32([1,10]);break}switch(s=Ee(l+a+o),t.nextInt32([0,1])?e[0]=""+l+a+o+"="+s:e[0]=""+s+"="+l+a+o,a=n[t.nextInt32([0,3])],o=t.nextInt32([1,10]),a){case"/":l=o*t.nextInt32([2,9]);break;case"-":l=o+t.nextInt32([1,10]);break;case"*":l=t.nextInt32([2,9]);break;case"+":l=t.nextInt32([1,10]);break}let f=Ee(l+a+o),g=n[t.nextInt32([0,2])];switch(i=t.nextInt32([1,10]),g){case"+":s=f-i;break;case"-":s=f+i;break;case"/":s=f*i;break}switch(e[1]=""+l+a+o+"="+s+g+i,a=n[t.nextInt32([0,3])],o=t.nextInt32([1,10]),a){case"/":l=o*t.nextInt32([2,9]);break;case"-":l=o+t.nextInt32([1,10]);break;case"*":l=t.nextInt32([2,9]);break;case"+":l=t.nextInt32([1,10]);break}switch(f=Ee(l+a+o),g=n[t.nextInt32([0,2])],i=t.nextInt32([1,10]),g){case"+":s=f-i;break;case"-":s=f+i;break;case"/":s=f*i;break}return e[2]=""+l+a+o+"="+s+g+i,e}var j;(function(r){r[r.Correct=0]="Correct",r[r.OutOfPlace=1]="OutOfPlace",r[r.Wrong=2]="Wrong",r[r.NotUsed=3]="NotUsed"})(j||(j={}));function Je(r,e,n){const t=r.slice();return t[5]=e[n].correct,t[6]=e[n].char,t}function Ze(r,e,n){const t=r.slice();return t[5]=e[n].correct,t[6]=e[n].char,t}function Ve(r,e,n){const t=r.slice();return t[5]=e[n].correct,t[6]=e[n].char,t}function Xe(r){var s;let e,n=((s=r[6])!=null?s:"")+"",t,l,o;return{c(){e=m("div"),t=G(n),l=p(),c(e,"class",o=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,a){N(i,e,a),u(e,t),u(e,l)},p:ue,d(i){i&&b(e)}}}function Qe(r){var s;let e,n=((s=r[6])!=null?s:"")+"",t,l,o;return{c(){e=m("div"),t=G(n),l=p(),c(e,"class",o=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,a){N(i,e,a),u(e,t),u(e,l)},p:ue,d(i){i&&b(e)}}}function $e(r){var s;let e,n=((s=r[6])!=null?s:"")+"",t,l,o;return{c(){e=m("div"),t=G(n),l=p(),c(e,"class",o=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,a){N(i,e,a),u(e,t),u(e,l)},p:ue,d(i){i&&b(e)}}}function Gt(r){let e,n,t,l,o,s,i,a,f,g,U,x,I,T,M,q,A,R,D,Q,oe,$,L,Z,me,H,he,ee,ge,te,B,ie,be,le,ne,ae,w,re,W=r[1],P=[];for(let _=0;_<W.length;_+=1)P[_]=Xe(Ve(r,W,_));let V=r[2],k=[];for(let _=0;_<V.length;_+=1)k[_]=Qe(Ze(r,V,_));let z=r[3],v=[];for(let _=0;_<z.length;_+=1)v[_]=$e(Je(r,z,_));return{c(){e=m("div"),n=m("div"),t=m("div"),l=p(),o=m("span"),o.textContent="\u200B",s=p(),i=m("div"),a=m("div"),f=m("div"),g=m("div"),U=m("h3"),U.textContent="Mathdle",x=p(),I=m("div"),I.innerHTML=`<p class="text-sm text-gray-500">Find the equation.<br/>
                (Just like
                <a target="_blank" href="https://www.powerlanguage.co.uk/wordle" class="underline">Wordle</a> , but it&#39;s math.)</p>`,T=p(),M=m("hr"),q=p(),A=m("h3"),A.textContent="Rules",R=p(),D=m("div"),D.innerHTML=`<p class="text-sm text-gray-500"></p><ul class="list-decimal text-sm text-gray-500"><li>Each guess must be a valid equation (i.e. both sides of the equation must be equal.)</li> 
                  <li>When necessary, the <a target="_blank" href="https://en.wikipedia.org/wiki/Order_of_operations" class="underline">order of operation</a> is applied.</li> 
                  <li>There are 3 difficulty levels:
                    <ul class="list-disc text-sm text-gray-500"><li><strong>Easy</strong>: the solution has one operation (+,-,*,/), and all numbers are positive integers.</li> 
                      <li><strong>Medium</strong>: the solution has two operations (possiblty identical), and all numbers are integers (possibly zero or negative). It is always in the form <strong>a Y b = c Z d</strong> where a,b,c, and d are numbers and Y and Z are operations.</li> 
                      <li><strong>Hard</strong>: Medium, plus the additional rule: For each digit N in your guess, the N-th position will not be checked. For example, if your guess is 1+2=3, then the first, second, and third position (1, + and 2) will not be checked.</li></ul></li></ul>`,Q=p(),oe=m("hr"),$=p(),L=m("div"),Z=m("h3"),Z.textContent="Examples",me=p(),H=m("div");for(let _=0;_<P.length;_+=1)P[_].c();he=p(),ee=m("p"),ee.innerHTML="The digit <strong>2</strong> is in the equation, and in the correct position.",ge=p(),te=m("div");for(let _=0;_<k.length;_+=1)k[_].c();B=p(),ie=m("p"),ie.innerHTML="The division symbol <strong>/</strong> is in the equation, but in another position.",be=p(),le=m("div");for(let _=0;_<v.length;_+=1)v[_].c();ne=p(),ae=m("p"),ae.innerHTML="The addition symbol <strong>+</strong> is not in the equation.",c(t,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),c(t,"aria-hidden","true"),c(o,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),c(o,"aria-hidden","true"),c(U,"class","text-base leading-6 font-medium text-gray-900"),c(U,"id","modal-title"),c(I,"class","mt-2"),c(M,"class","my-2"),c(A,"class","text-base leading-6 font-medium text-gray-900"),c(A,"id","modal-title"),c(D,"class","mt-2"),c(oe,"class","my-2"),c(Z,"class","text-base font-medium"),c(H,"class","flex justify-center my-1"),c(ee,"class","text-sm text-gray-500 mb-4"),c(te,"class","flex justify-center my-1"),c(ie,"class","text-sm text-gray-500 mb-4"),c(le,"class","flex justify-center my-1"),c(ae,"class","text-sm text-gray-500 mb-4"),c(L,"class","mt-2"),c(g,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"),c(f,"class","sm:flex sm:items-start"),c(a,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),c(i,"class","inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"),c(n,"class","flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"),c(e,"class","fixed z-10 inset-0 overflow-y-auto"),c(e,"aria-labelledby","modal-title"),c(e,"role","dialog"),c(e,"aria-modal","true")},m(_,O){N(_,e,O),u(e,n),u(n,t),u(n,l),u(n,o),u(n,s),u(n,i),u(i,a),u(a,f),u(f,g),u(g,U),u(g,x),u(g,I),u(g,T),u(g,M),u(g,q),u(g,A),u(g,R),u(g,D),u(g,Q),u(g,oe),u(g,$),u(g,L),u(L,Z),u(L,me),u(L,H);for(let h=0;h<P.length;h+=1)P[h].m(H,null);u(L,he),u(L,ee),u(L,ge),u(L,te);for(let h=0;h<k.length;h+=1)k[h].m(te,null);u(L,B),u(L,ie),u(L,be),u(L,le);for(let h=0;h<v.length;h+=1)v[h].m(le,null);u(L,ne),u(L,ae),w||(re=se(e,"click",function(){kt(r[0])&&r[0].apply(this,arguments)}),w=!0)},p(_,[O]){if(r=_,O&18){W=r[1];let h;for(h=0;h<W.length;h+=1){const S=Ve(r,W,h);P[h]?P[h].p(S,O):(P[h]=Xe(S),P[h].c(),P[h].m(H,null))}for(;h<P.length;h+=1)P[h].d(1);P.length=W.length}if(O&20){V=r[2];let h;for(h=0;h<V.length;h+=1){const S=Ze(r,V,h);k[h]?k[h].p(S,O):(k[h]=Qe(S),k[h].c(),k[h].m(te,null))}for(;h<k.length;h+=1)k[h].d(1);k.length=V.length}if(O&24){z=r[3];let h;for(h=0;h<z.length;h+=1){const S=Je(r,z,h);v[h]?v[h].p(S,O):(v[h]=$e(S),v[h].c(),v[h].m(le,null))}for(;h<v.length;h+=1)v[h].d(1);v.length=z.length}},i:ue,o:ue,d(_){_&&b(e),fe(P,_),fe(k,_),fe(v,_),w=!1,re()}}}function Jt(r,e,n){const t=[{correct:j.Correct,char:"2"},{correct:j.NotUsed,char:"*"},{correct:j.NotUsed,char:"3"},{correct:j.NotUsed,char:"="},{correct:j.NotUsed,char:"7"},{correct:j.NotUsed,char:"-"},{correct:j.NotUsed,char:"1"}],l=[{correct:j.NotUsed,char:"1"},{correct:j.NotUsed,char:"8"},{correct:j.OutOfPlace,char:"/"},{correct:j.NotUsed,char:"2"},{correct:j.NotUsed,char:"="},{correct:j.NotUsed,char:"3"},{correct:j.NotUsed,char:"*"},{correct:j.NotUsed,char:"3"}],o=[{correct:j.NotUsed,char:"-"},{correct:j.NotUsed,char:"4"},{correct:j.Wrong,char:"+"},{correct:j.NotUsed,char:"5"},{correct:j.NotUsed,char:"="},{correct:j.NotUsed,char:"9"},{correct:j.NotUsed,char:"-"},{correct:j.NotUsed,char:"8"}],s={[j.Correct]:"bg-green-500 border-green-500",[j.OutOfPlace]:"bg-yellow-500 border-yellow-500",[j.Wrong]:"bg-gray-500 border-gray-500",[j.NotUsed]:"bg-white"};let{onClose:i=()=>{}}=e;return r.$$set=a=>{"onClose"in a&&n(0,i=a.onClose)},[i,t,l,o,s]}class Zt extends ke{constructor(e){super();Ie(this,e,Jt,Gt,Ne,{onClose:0})}}const et="mathdle-attempts",Le=It(JSON.parse(window.localStorage.getItem(et)||'{"data": {}}'));Le.subscribe(r=>{window.localStorage[et]=JSON.stringify(r)});function tt(r,e,n){const t=r.slice();return t[32]=e[n],t}function lt(r,e,n){const t=r.slice();return t[35]=e[n][0],t[36]=e[n][1],t}function nt(r,e,n){const t=r.slice();return t[39]=e[n],t[41]=n,t}function rt(r,e,n){const t=r.slice();return t[4]=e[n],t}function st(r,e,n){const t=r.slice();return t[44]=e[n].correct,t[45]=e[n].char,t}function ot(r){let e,n,t,l,o;return{c(){e=m("span"),e.textContent="Additional rule:",n=p(),t=m("span"),t.textContent="For each digit N in your guess, the N-th position will not be checked.",l=p(),o=m("span"),o.textContent="For example, if your guess is 1+2=3, then the first, second, and third position (1, + and 2) will not be checked.",c(e,"class","text-sm text-red-400 ml-3"),c(t,"class","text-sm text-black-400 ml-3"),c(o,"class","text-sm text-gray-400 ml-3")},m(s,i){N(s,e,i),N(s,n,i),N(s,t,i),N(s,l,i),N(s,o,i)},d(s){s&&b(e),s&&b(n),s&&b(t),s&&b(l),s&&b(o)}}}function it(r){var a;let e,n=((a=r[45])!=null?a:"")+"",t,l,o,s,i;return{c(){e=m("div"),t=G(n),c(e,"class",l=""+(X(`${r[13][r[44]]||"bg-white"} ${r[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-1vyweqh"))},m(f,g){N(f,e,g),u(e,t),i=!0},p(f,g){var U;(!i||g[0]&11)&&n!==(n=((U=f[45])!=null?U:"")+"")&&je(t,n),(!i||g[0]&267&&l!==(l=""+(X(`${f[13][f[44]]||"bg-white"} ${f[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-1vyweqh")))&&c(e,"class",l)},i(f){i||(Nt(()=>{s&&s.end(1),o=Ut(e,Ct,{duration:1e3}),o.start()}),i=!0)},o(f){o&&o.invalidate(),s=jt(e,Mt,{}),i=!1},d(f){f&&b(e),f&&s&&s.end()}}}function at(r){let e,n,t=Oe(r[4],r[3],r[0]),l=[];for(let s=0;s<t.length;s+=1)l[s]=it(st(r,t,s));const o=s=>J(l[s],1,1,()=>{l[s]=null});return{c(){e=m("div");for(let s=0;s<l.length;s+=1)l[s].c();c(e,"class","flex justify-center my-1")},m(s,i){N(s,e,i);for(let a=0;a<l.length;a+=1)l[a].m(e,null);n=!0},p(s,i){if(i[0]&8459){t=Oe(s[4],s[3],s[0]);let a;for(a=0;a<t.length;a+=1){const f=st(s,t,a);l[a]?(l[a].p(f,i),K(l[a],1)):(l[a]=it(f),l[a].c(),K(l[a],1),l[a].m(e,null))}for(Me(),a=t.length;a<l.length;a+=1)o(a);qe()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)K(l[i]);n=!0}},o(s){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)J(l[i]);n=!1},d(s){s&&b(e),fe(l,s)}}}function ct(r){let e,n=new Array(r[8]).fill(0),t=[];for(let l=0;l<n.length;l+=1)t[l]=ut(nt(r,n,l));return{c(){e=m("div");for(let l=0;l<t.length;l+=1)t[l].c();c(e,"class","flex justify-center my-1")},m(l,o){N(l,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(l,o){if(o[0]&768){n=new Array(l[8]).fill(0);let s;for(s=0;s<n.length;s+=1){const i=nt(l,n,s);t[s]?t[s].p(i,o):(t[s]=ut(i),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&b(e),fe(t,l)}}}function ut(r){let e,n=(r[9][r[41]]||"")+"",t,l,o;return{c(){e=m("div"),t=G(n),l=p(),c(e,"class",o=""+(X(`animate-pulse bg-gray-200 ${r[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`)+" svelte-1vyweqh"))},m(s,i){N(s,e,i),u(e,t),u(e,l)},p(s,i){i[0]&512&&n!==(n=(s[9][s[41]]||"")+"")&&je(t,n),i[0]&256&&o!==(o=""+(X(`animate-pulse bg-gray-200 ${s[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`)+" svelte-1vyweqh"))&&c(e,"class",o)},d(s){s&&b(e)}}}function ft(r){let e,n,t;return{c(){e=m("input"),c(e,"type","text"),c(e,"class","border px-4 py-2 text-center w-64"),c(e,"placeholder","Click here to use keyboard input"),e.autofocus=!0},m(l,o){N(l,e,o),He(e,r[4]),e.focus(),n||(t=[se(e,"keypress",r[14]),se(e,"input",r[23])],n=!0)},p(l,o){o[0]&16&&e.value!==l[4]&&He(e,l[4])},d(l){l&&b(e),n=!1,Te(t)}}}function dt(r){let e,n=r[35]+"",t,l,o,s;function i(){return r[24](r[35])}return{c(){e=m("button"),t=G(n),c(e,"class",l=""+(X(r[13][r[36]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-1vyweqh"))},m(a,f){N(a,e,f),u(e,t),o||(s=se(e,"click",i),o=!0)},p(a,f){r=a,f[0]&1024&&n!==(n=r[35]+"")&&je(t,n),f[0]&1024&&l!==(l=""+(X(r[13][r[36]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-1vyweqh"))&&c(e,"class",l)},d(a){a&&b(e),o=!1,s()}}}function mt(r){let e,n,t=Object.entries(r[32]),l=[];for(let o=0;o<t.length;o+=1)l[o]=dt(lt(r,t,o));return{c(){e=m("div");for(let o=0;o<l.length;o+=1)l[o].c();n=p(),c(e,"class","w-full flex flex-row justify-center")},m(o,s){N(o,e,s);for(let i=0;i<l.length;i+=1)l[i].m(e,null);u(e,n)},p(o,s){if(s[0]&9232){t=Object.entries(o[32]);let i;for(i=0;i<t.length;i+=1){const a=lt(o,t,i);l[i]?l[i].p(a,s):(l[i]=dt(a),l[i].c(),l[i].m(e,n))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(o){o&&b(e),fe(l,o)}}}function Vt(r){let e,n,t,l,o,s,i,a;return{c(){e=m("div"),n=m("button"),n.textContent="Submit",t=p(),l=m("button"),l.textContent="Clear",o=p(),s=m("button"),s.textContent="Rules",c(n,"class","flex items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),c(l,"class","flex items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),c(s,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-pink-300 border-pink-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-100 active:bg-slate-400"),c(e,"class","flex flex-row justify-center")},m(f,g){N(f,e,g),u(e,n),u(e,t),u(e,l),u(e,o),u(e,s),i||(a=[se(n,"click",r[15]),se(l,"click",r[25]),se(s,"click",r[26])],i=!0)},p:ue,d(f){f&&b(e),i=!1,Te(a)}}}function Xt(r){let e,n=(r[7]?"Copied":"Share")+"",t,l,o;return{c(){e=m("button"),t=G(n),c(e,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400")},m(s,i){N(s,e,i),u(e,t),l||(o=se(e,"click",r[16]),l=!0)},p(s,i){i[0]&128&&n!==(n=(s[7]?"Copied":"Share")+"")&&je(t,n)},d(s){s&&b(e),l=!1,o()}}}function ht(r){let e,n;return e=new Zt({props:{onClose:r[27]}}),{c(){ve(e.$$.fragment)},m(t,l){ye(e,t,l),n=!0},p(t,l){const o={};l[0]&64&&(o.onClose=t[27]),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){we(e,t)}}}function Qt(r){let e,n,t,l,o,s,i,a,f,g,U,x,I,T=r[12]+1+"",M,q,A,R,D,Q,oe,$,L,Z,me,H,he,ee,ge,te,B,ie,be,le,ne,ae,w,re,W,P,V;n=new Kt({props:{items:r[11]}}),l=new Dt({props:{url:gt,title:Pe}}),s=new Pt({props:{title:Pe,description:$t,url:gt,imageUrl:el,gtagId:tl}});let k=r[0]===2&&ot(),z=r[1][r[0]],v=[];for(let d=0;d<z.length;d+=1)v[d]=at(rt(r,z,d));const _=d=>J(v[d],1,1,()=>{v[d]=null});let O=!r[2][r[0]]&&ct(r),h=!r[2][r[0]]&&ft(r),S=r[10],Y=[];for(let d=0;d<S.length;d+=1)Y[d]=mt(tt(r,S,d));function We(d,E){return d[2][d[0]]?Xt:Vt}let Ue=We(r),ce=Ue(r),F=r[6]&&ht(r);return{c(){e=m("div"),ve(n.$$.fragment),t=p(),ve(l.$$.fragment),o=p(),ve(s.$$.fragment),i=p(),a=m("main"),f=m("h1"),g=m("span"),U=G(Pe),x=m("span"),x.textContent="Beta",I=G(`\r
\r
  Day `),M=G(T),q=p(),A=m("div"),R=m("button"),D=G("Easy"),oe=p(),$=m("button"),L=G("Medium"),me=p(),H=m("button"),he=G("Hard"),ge=p(),k&&k.c(),te=p(),B=m("div");for(let d=0;d<v.length;d+=1)v[d].c();ie=p(),O&&O.c(),be=p(),h&&h.c(),le=p(),ne=m("div");for(let d=0;d<Y.length;d+=1)Y[d].c();ae=p(),w=m("div"),ce.c(),re=p(),F&&F.c(),c(e,"class","footer-wrapper svelte-1vyweqh"),c(x,"class","text-sm text-gray-400 ml-2"),c(f,"class","text-6xl text-green-400 flex flex-col mb-4"),c(R,"class",Q=""+(X(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${r[0]==0?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")),c($,"class",Z=""+(X(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${r[0]==1?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")),c(H,"class",ee=""+(X(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${r[0]==2?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")),c(A,"class","flex flex-row justify-center"),c(B,"class","attempts grow overflow-y-auto svelte-1vyweqh"),c(ne,"class","layout my-4 w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"),c(w,"class","mb-16 text-center"),c(a,"class","w-full h-screen py-4 flex flex-col items-center")},m(d,E){N(d,e,E),ye(n,e,null),u(e,t),ye(l,e,null),N(d,o,E),ye(s,d,E),N(d,i,E),N(d,a,E),u(a,f),u(f,g),u(g,U),u(g,x),u(a,I),u(a,M),u(a,q),u(a,A),u(A,R),u(R,D),u(A,oe),u(A,$),u($,L),u(A,me),u(A,H),u(H,he),u(a,ge),k&&k.m(a,null),u(a,te),u(a,B);for(let y=0;y<v.length;y+=1)v[y].m(B,null);u(B,ie),O&&O.m(B,null),r[22](B),u(a,be),h&&h.m(a,null),u(a,le),u(a,ne);for(let y=0;y<Y.length;y+=1)Y[y].m(ne,null);u(a,ae),u(a,w),ce.m(w,null),u(a,re),F&&F.m(a,null),W=!0,P||(V=[se(R,"click",r[19]),se($,"click",r[20]),se(H,"click",r[21])],P=!0)},p(d,E){if((!W||E[0]&1&&Q!==(Q=""+(X(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${d[0]==0?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")))&&c(R,"class",Q),(!W||E[0]&1&&Z!==(Z=""+(X(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${d[0]==1?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")))&&c($,"class",Z),(!W||E[0]&1&&ee!==(ee=""+(X(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${d[0]==2?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")))&&c(H,"class",ee),d[0]===2?k||(k=ot(),k.c(),k.m(a,te)):k&&(k.d(1),k=null),E[0]&8459){z=d[1][d[0]];let y;for(y=0;y<z.length;y+=1){const xe=rt(d,z,y);v[y]?(v[y].p(xe,E),K(v[y],1)):(v[y]=at(xe),v[y].c(),K(v[y],1),v[y].m(B,ie))}for(Me(),y=z.length;y<v.length;y+=1)_(y);qe()}if(d[2][d[0]]?O&&(O.d(1),O=null):O?O.p(d,E):(O=ct(d),O.c(),O.m(B,null)),d[2][d[0]]?h&&(h.d(1),h=null):h?h.p(d,E):(h=ft(d),h.c(),h.m(a,le)),E[0]&9232){S=d[10];let y;for(y=0;y<S.length;y+=1){const xe=tt(d,S,y);Y[y]?Y[y].p(xe,E):(Y[y]=mt(xe),Y[y].c(),Y[y].m(ne,null))}for(;y<Y.length;y+=1)Y[y].d(1);Y.length=S.length}Ue===(Ue=We(d))&&ce?ce.p(d,E):(ce.d(1),ce=Ue(d),ce&&(ce.c(),ce.m(w,null))),d[6]?F?(F.p(d,E),E[0]&64&&K(F,1)):(F=ht(d),F.c(),K(F,1),F.m(a,null)):F&&(Me(),J(F,1,1,()=>{F=null}),qe())},i(d){if(!W){K(n.$$.fragment,d),K(l.$$.fragment,d),K(s.$$.fragment,d);for(let E=0;E<z.length;E+=1)K(v[E]);K(F),W=!0}},o(d){J(n.$$.fragment,d),J(l.$$.fragment,d),J(s.$$.fragment,d),v=v.filter(Boolean);for(let E=0;E<v.length;E+=1)J(v[E]);J(F),W=!1},d(d){d&&b(e),we(n),we(l),d&&b(o),we(s,d),d&&b(i),d&&b(a),k&&k.d(),fe(v,d),O&&O.d(),r[22](null),h&&h.d(),fe(Y,d),ce.d(),F&&F.d(),P=!1,Te(V)}}}const gt="https://lemononmars.github.io/mathdle",Pe="Mathdle",$t="Wordle clone, but it's math.",el="https://i.imgur.com/z8BlEoK.png",tl="G-YTV7TZ3EMC",ll=16429572e5,nl=864e5;function rl(r,e){for(var n=[],t=0,l=0;t<r.length;t++)t>=e&&t%e==0&&l++,n[l]=n[l]||[],n[l].push(r[t]);return n}function sl(r,e,n){var ne,ae;let t,l,o,s,i;Et(r,Le,w=>n(18,i=w));const a=[{name:"Found a bug?",url:"https://twitter.com/SakulbuthE/status/1485679790627880960"},{name:"Try Boardle",url:"https://lemononmars.github.io/boardle/"},{name:"Original (Thwordle)",url:"https://github.com/narze/thwordle"},{name:"Github",url:"https://github.com/lemononmars/mathdle"}],f=rl("1234506789+-*/=".split(""),5).map(w=>w.join("")),g=Date.now(),U=Math.floor((g-ll)/nl);let x="",I=0;const T=["easy","medium","hard"];let M=Yt(U),q=((ne=i.data[U])==null?void 0:ne.attempts)||[[],[],[]],A=q.map((w,re)=>w.map(W=>Oe(W,M[re],I))),R=((ae=i.data[U])==null?void 0:ae.win)||[!1,!1,!1],D,Q=!0,oe=!1;const $={[_e.Correct]:"bg-green-500 border-green-500",[_e.OutOfPlace]:"bg-yellow-500 border-yellow-500",[_e.Wrong]:"bg-gray-500 border-gray-500",[_e.NotUsed]:"bg-white"};function L(w){if(w.key==="Enter"&&(w.preventDefault(),Z()),o.length>=l+1){w.preventDefault();return}}async function Z(){if(R[I])return;if(x.length!=l){alert("Please match the input length");return}let w=x.split("=");if(w.length==1){alert("Equals sign missing (=)");return}if(w.length>2){alert("Too many equals signs!");return}let re,W;try{re=Ee(w[0]),W=Ee(w[1])}catch{alert("Invalid expression");return}if(re!=W){alert("Invalid equation: "+re+"\u2260"+W);return}n(1,q[I]=[...q[I],x],q);const P=Oe(x,t,I);n(17,A[I]=[...A[I],P],A);let V=!0;P.forEach(k=>{k.correct!==_e.Correct&&(V=!1)}),V&&(alert("You won!"),n(2,R[I]=!0,R)),n(4,x=""),await qt(),n(5,D.scrollTop=D.scrollHeight,D)}function me(){const w=zt(A[I]);navigator.clipboard.writeText(`#Mathdle Day ${U+1} ${T[I]} (${w.length} attempts)

${w.join(`
`)}`),n(7,oe=!0),setTimeout(()=>{n(7,oe=!1)},2e3)}const H=()=>{n(0,I=0),n(4,x="")},he=()=>{n(0,I=1),n(4,x="")},ee=()=>{n(0,I=2),n(4,x="")};function ge(w){Ot[w?"unshift":"push"](()=>{D=w,n(5,D)})}function te(){x=this.value,n(4,x)}const B=w=>n(4,x+=w),ie=()=>{n(4,x="")},be=()=>{n(6,Q=!0)},le=()=>{n(6,Q=!1)};return r.$$.update=()=>{r.$$.dirty[0]&1&&n(3,t=M[I]),r.$$.dirty[0]&8&&n(8,l=t.length),r.$$.dirty[0]&16&&n(4,x=x.replace(/[^0-9\+\-\*\/\=]/g,"")),r.$$.dirty[0]&16&&n(9,o=x.split("")),r.$$.dirty[0]&131073&&n(10,s=Bt(f,A[I].flat())),r.$$.dirty[0]&262150&&Le.set({data:Re(Ke({},i.data),{[`${U}`]:{attempts:q,win:R}})})},[I,q,R,t,x,D,Q,oe,l,o,s,a,U,$,L,Z,me,A,i,H,he,ee,ge,te,B,ie,be,le]}class ol extends ke{constructor(e){super();Ie(this,e,sl,Qt,Ne,{},null,[-1,-1])}}new ol({target:document.getElementById("app")});
