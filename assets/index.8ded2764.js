var bt=Object.defineProperty,pt=Object.defineProperties;var _t=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var Te=(r,e,n)=>e in r?bt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,Fe=(r,e)=>{for(var n in e||(e={}))vt.call(e,n)&&Te(r,n,e[n]);if(Se)for(var n of Se(e))yt.call(e,n)&&Te(r,n,e[n]);return r},Ke=(r,e)=>pt(r,_t(e));var he=(r,e,n)=>(Te(r,typeof e!="symbol"?e+"":e,n),n);import{S as Ne,i as je,s as Ee,e as d,a as b,b as Re,c,d as I,f as p,g as De,h as u,n as ue,t as G,j as Me,k as fe,l as we,m as xe,o as K,p as J,q as ke,r as Oe,u as Ce,F as wt,T as xt,v as qe,w as oe,x as kt,y as It,z as Q,A as Nt,B as jt,C as He,D as Ae,E as Et,G as Mt,H as qt,I as Ot,J as Ct,K as Ut}from"./vendor.6a2fca60.js";const Tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};Tt();function Be(r){let e,n,t,l;return{c(){e=d("script"),t=b(),l=d("script"),l.textContent=`window.dataLayer = window.dataLayer || []\r
      function gtag() {\r
        dataLayer.push(arguments)\r
      }\r
      gtag("js", new Date())\r
      gtag("config", "G-YTV7TZ3EMC")`,e.async=!0,Re(e.src,n="https://www.googletagmanager.com/gtag/js?id="+r[4])||c(e,"src",n)},m(o,s){I(o,e,s),I(o,t,s),I(o,l,s)},p(o,s){s&16&&!Re(e.src,n="https://www.googletagmanager.com/gtag/js?id="+o[4])&&c(e,"src",n)},d(o){o&&p(e),o&&p(t),o&&p(l)}}}function At(r){let e,n,t,l,o,s,i,a,m,g,M,y,x;document.title=e=r[0];let T=r[4]&&Be(r);return{c(){n=d("meta"),t=d("meta"),l=d("meta"),o=d("meta"),s=d("meta"),i=d("meta"),a=d("meta"),m=d("meta"),g=d("meta"),M=d("meta"),y=d("meta"),T&&T.c(),x=De(),c(n,"name","title"),c(n,"content",r[0]),c(t,"name","description"),c(t,"content",r[1]),c(l,"name","viewport"),c(l,"content","width=device-width, initial-scale=1"),c(o,"property","og:url"),c(o,"content",r[2]),c(s,"property","og:type"),c(s,"content","website"),c(i,"property","og:title"),c(i,"content",r[0]),c(a,"property","og:description"),c(a,"content",r[1]),c(m,"property","og:image"),c(m,"content",r[3]),c(g,"name","twitter:title"),c(g,"content",r[0]),c(M,"name","twitter:card"),c(M,"content","summary_large_image"),c(y,"name","twitter:image"),c(y,"content",r[3])},m(q,O){u(document.head,n),u(document.head,t),u(document.head,l),u(document.head,o),u(document.head,s),u(document.head,i),u(document.head,a),u(document.head,m),u(document.head,g),u(document.head,M),u(document.head,y),T&&T.m(document.head,null),u(document.head,x)},p(q,[O]){O&1&&e!==(e=q[0])&&(document.title=e),O&1&&c(n,"content",q[0]),O&2&&c(t,"content",q[1]),O&4&&c(o,"content",q[2]),O&1&&c(i,"content",q[0]),O&2&&c(a,"content",q[1]),O&8&&c(m,"content",q[3]),O&1&&c(g,"content",q[0]),O&8&&c(y,"content",q[3]),q[4]?T?T.p(q,O):(T=Be(q),T.c(),T.m(x.parentNode,x)):T&&(T.d(1),T=null)},i:ue,o:ue,d(q){p(n),p(t),p(l),p(o),p(s),p(i),p(a),p(m),p(g),p(M),p(y),T&&T.d(q),p(x)}}}function Lt(r,e,n){let{title:t}=e,{description:l}=e,{url:o}=e,{imageUrl:s}=e,{gtagId:i}=e;return r.$$set=a=>{"title"in a&&n(0,t=a.title),"description"in a&&n(1,l=a.description),"url"in a&&n(2,o=a.url),"imageUrl"in a&&n(3,s=a.imageUrl),"gtagId"in a&&n(4,i=a.gtagId)},[t,l,o,s,i]}class Pt extends Ne{constructor(e){super();je(this,e,Lt,At,Ee,{title:0,description:1,url:2,imageUrl:3,gtagId:4})}}function ze(r,e,n){const t=r.slice();return t[1]=e[n].name,t[2]=e[n].url,t}function Ye(r){let e,n=r[1]+"",t,l;return{c(){e=d("a"),t=G(n),c(e,"href",l=r[2]),c(e,"class","p-1 bg-gray-200 mx-1 rounded"),c(e,"target","_blank"),c(e,"rel","noreferrer")},m(o,s){I(o,e,s),u(e,t)},p(o,s){s&1&&n!==(n=o[1]+"")&&Me(t,n),s&1&&l!==(l=o[2])&&c(e,"href",l)},d(o){o&&p(e)}}}function Wt(r){let e,n=r[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=Ye(ze(r,n,l));return{c(){e=d("div");for(let l=0;l<t.length;l+=1)t[l].c();c(e,"class","text-xs fixed sm:text-base bottom-4 right-4 text-right z-10")},m(l,o){I(l,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(l,[o]){if(o&1){n=l[0];let s;for(s=0;s<n.length;s+=1){const i=ze(l,n,s);t[s]?t[s].p(i,o):(t[s]=Ye(i),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},i:ue,o:ue,d(l){l&&p(e),fe(t,l)}}}function St(r,e,n){let{items:t=[]}=e;return r.$$set=l=>{"items"in l&&n(0,t=l.items)},[t]}class Ft extends Ne{constructor(e){super();je(this,e,St,Wt,Ee,{items:0})}}function Ge(r){let e,n,t,l,o;return n=new wt({props:{class:"h-10 w-10",url:r[0]}}),l=new xt({props:{class:"h-10 w-10",text:r[1],url:r[0]}}),{c(){e=d("div"),we(n.$$.fragment),t=b(),we(l.$$.fragment),c(e,"class","flex gap-2 pr-4 sm:pr-0 justify-end sm:justify-center w-full fixed top-4 sm:top-auto sm:bottom-4 center")},m(s,i){I(s,e,i),xe(n,e,null),u(e,t),xe(l,e,null),o=!0},p(s,i){const a={};i&1&&(a.url=s[0]),n.$set(a);const m={};i&2&&(m.text=s[1]),i&1&&(m.url=s[0]),l.$set(m)},i(s){o||(K(n.$$.fragment,s),K(l.$$.fragment,s),o=!0)},o(s){J(n.$$.fragment,s),J(l.$$.fragment,s),o=!1},d(s){s&&p(e),ke(n),ke(l)}}}function Kt(r){let e,n,t=r[0]&&Ge(r);return{c(){t&&t.c(),e=De()},m(l,o){t&&t.m(l,o),I(l,e,o),n=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&K(t,1)):(t=Ge(l),t.c(),K(t,1),t.m(e.parentNode,e)):t&&(Oe(),J(t,1,1,()=>{t=null}),Ce())},i(l){n||(K(t),n=!0)},o(l){J(t),n=!1},d(l){t&&t.d(l),l&&p(e)}}}function Rt(r,e,n){let{url:t}=e,{title:l}=e;return r.$$set=o=>{"url"in o&&n(0,t=o.url),"title"in o&&n(1,l=o.title)},[t,l]}class Dt extends Ne{constructor(e){super();je(this,e,Rt,Kt,Ee,{url:0,title:1})}}const U=class{constructor(e=null){he(this,"mt",new Array(U.N));he(this,"mti",U.N+1);e==null&&(e=new Date().getTime()),this.init_genrand(e)}init_genrand(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<U.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((e&4294901760)>>>16)*1812433253<<16)+(e&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}}_nextInt32(){var e,n=new Array(0,U.MATRIX_A);if(this.mti>=U.N){var t;for(this.mti==U.N+1&&this.init_genrand(5489),t=0;t<U.N-U.M;t++)e=this.mt[t]&U.UPPER_MASK|this.mt[t+1]&U.LOWER_MASK,this.mt[t]=this.mt[t+U.M]^e>>>1^n[e&1];for(;t<U.N-1;t++)e=this.mt[t]&U.UPPER_MASK|this.mt[t+1]&U.LOWER_MASK,this.mt[t]=this.mt[t+(U.M-U.N)]^e>>>1^n[e&1];e=this.mt[U.N-1]&U.UPPER_MASK|this.mt[0]&U.LOWER_MASK,this.mt[U.N-1]=this.mt[U.M-1]^e>>>1^n[e&1],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,e^=e>>>18,e>>>0}nextInt32(e=null){var n=this._nextInt32();return e==null?n:n%(e[1]-e[0])+e[0]}nextInt31(){return this._nextInt32()>>>1}nextNumber(){return this._nextInt32()*(1/4294967295)}nextNumber53(){var e=this._nextInt32()>>>5,n=this._nextInt32()>>>6;return(e*67108864+n)*(1/9007199254740992)}};let ve=U;he(ve,"N",624),he(ve,"M",397),he(ve,"MATRIX_A",2567483615),he(ve,"UPPER_MASK",2147483648),he(ve,"LOWER_MASK",2147483647);var ye;(function(r){r[r.Correct=0]="Correct",r[r.OutOfPlace=1]="OutOfPlace",r[r.Wrong=2]="Wrong",r[r.NotUsed=3]="NotUsed"})(ye||(ye={}));const Ht={[0]:"\u{1F7E9}",[1]:"\u{1F7E8}",[2]:"\u2B1B",[3]:"\u2B1C"},Le=2;function Ue(r,e,n){const t=r.split(""),l=r.replace(/[\+\-\*\/\=]/g,"").split("").map(a=>parseInt(a)-1),o=e.split("");let s=t.map(a=>({correct:2,char:a}));n===Le&&s.forEach((a,m)=>a.correct=t.includes(""+(m+1))?3:2);let i=!0;return o.forEach((a,m)=>{a!==t[m]&&(i=!1)}),i?(s.forEach(a=>a.correct=0),s):(o.forEach((a,m)=>{if(n===Le&&l.includes(m))return;t[m]===a&&(o[m]=null,t[m]=null,s[m].correct=0)}),o.forEach((a,m)=>{if(n===Le&&l.includes(m))return;const g=t[m];if(!g||!o.includes(g))return;const M=o.indexOf(g);o[M]=null,t[m]=null,s[m].correct=1}),s)}function Bt(r,e=[]){const n=[];return r.forEach(t=>{const l={};t.split("").forEach((o,s)=>{l[o]=3}),e.forEach(({correct:o,char:s})=>{s.split("").forEach(i=>{o<l[i]&&(l[i]=o)})}),n.push(l)}),n}function zt(r){return r.map(e=>e.map(({correct:n})=>Ht[n]).join(""))}function Yt(r){let e=["","",""];const n="+-/*".split("");let t=new ve(r),l=0,o=0,s=0,i=0,a=n[t.nextInt32([0,3])];switch(o=t.nextInt32([1,10]),a){case"/":l=o*t.nextInt32([2,9]);break;case"-":l=o+t.nextInt32([1,10]);break;case"*":l=t.nextInt32([2,9]);break;case"+":l=t.nextInt32([1,10]);break}switch(s=qe(l+a+o),t.nextInt32([0,1])?e[0]=""+l+a+o+"="+s:e[0]=""+s+"="+l+a+o,a=n[t.nextInt32([0,3])],o=t.nextInt32([1,10]),a){case"/":l=o*t.nextInt32([2,9]);break;case"-":l=o+t.nextInt32([1,10]);break;case"*":l=t.nextInt32([2,9]);break;case"+":l=t.nextInt32([1,10]);break}let m=qe(l+a+o),g=n[t.nextInt32([0,2])];switch(i=t.nextInt32([1,10]),g){case"+":s=m-i;break;case"-":s=m+i;break;case"/":s=m*i;break}switch(e[1]=""+l+a+o+"="+s+g+i,a=n[t.nextInt32([0,3])],o=t.nextInt32([1,10]),a){case"/":l=o*t.nextInt32([2,9]);break;case"-":l=o+t.nextInt32([1,10]);break;case"*":l=t.nextInt32([2,9]);break;case"+":l=t.nextInt32([1,10]);break}switch(m=qe(l+a+o),g=n[t.nextInt32([0,2])],i=t.nextInt32([1,10]),g){case"+":s=m-i;break;case"-":s=m+i;break;case"/":s=m*i;break}return e[2]=""+l+a+o+"="+s+g+i,e}var E;(function(r){r[r.Correct=0]="Correct",r[r.OutOfPlace=1]="OutOfPlace",r[r.Wrong=2]="Wrong",r[r.NotUsed=3]="NotUsed"})(E||(E={}));function Je(r,e,n){const t=r.slice();return t[5]=e[n].correct,t[6]=e[n].char,t}function Ze(r,e,n){const t=r.slice();return t[5]=e[n].correct,t[6]=e[n].char,t}function Ve(r,e,n){const t=r.slice();return t[5]=e[n].correct,t[6]=e[n].char,t}function Xe(r){var s;let e,n=((s=r[6])!=null?s:"")+"",t,l,o;return{c(){e=d("div"),t=G(n),l=b(),c(e,"class",o=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,a){I(i,e,a),u(e,t),u(e,l)},p:ue,d(i){i&&p(e)}}}function Qe(r){var s;let e,n=((s=r[6])!=null?s:"")+"",t,l,o;return{c(){e=d("div"),t=G(n),l=b(),c(e,"class",o=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,a){I(i,e,a),u(e,t),u(e,l)},p:ue,d(i){i&&p(e)}}}function $e(r){var s;let e,n=((s=r[6])!=null?s:"")+"",t,l,o;return{c(){e=d("div"),t=G(n),l=b(),c(e,"class",o=`${r[4][r[5]]||"bg-white"} w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`)},m(i,a){I(i,e,a),u(e,t),u(e,l)},p:ue,d(i){i&&p(e)}}}function Gt(r){let e,n,t,l,o,s,i,a,m,g,M,y,x,T,q,O,A,H,B,$,ie,ee,N,Z,ge,z,be,te,pe,le,Y,ae,_e,ne,re,ce,w,V,D,X,de,L,se,C,me=r[1],k=[];for(let _=0;_<me.length;_+=1)k[_]=Xe(Ve(r,me,_));let P=r[2],W=[];for(let _=0;_<P.length;_+=1)W[_]=Qe(Ze(r,P,_));let S=r[3],R=[];for(let _=0;_<S.length;_+=1)R[_]=$e(Je(r,S,_));return{c(){e=d("div"),n=d("div"),t=d("div"),l=b(),o=d("span"),o.textContent="\u200B",s=b(),i=d("div"),a=d("div"),m=d("div"),g=d("div"),M=d("h3"),M.textContent="Mathdle",y=b(),x=d("div"),x.innerHTML=`<p class="text-sm text-gray-500">Find the equation.<br/>
                (Just like
                <a target="_blank" href="https://www.powerlanguage.co.uk/wordle" class="underline">Wordle</a> , but it&#39;s math.)</p>`,T=b(),q=d("hr"),O=b(),A=d("h3"),A.textContent="Rules",H=b(),B=d("div"),B.innerHTML=`<p class="text-sm text-gray-500"></p><ul class="list-decimal text-sm text-gray-500"><li>Each guess must be a valid equation (i.e. both sides of the equation must be equal.)</li> 
                  <li>When necessary, the <a target="_blank" href="https://en.wikipedia.org/wiki/Order_of_operations" class="underline">order of operation</a> is applied.</li></ul>`,$=b(),ie=d("hr"),ee=b(),N=d("div"),Z=d("h3"),Z.textContent="Examples",ge=b(),z=d("div");for(let _=0;_<k.length;_+=1)k[_].c();be=b(),te=d("p"),te.innerHTML=`The digit <strong>2</strong> is in the equation, and in the correct position.<br/>
                The digit <strong>3</strong> is in the equation, but in another position.<br/>
                The minus symbol <strong>-</strong> is not in the equation.`,pe=b(),le=d("div");for(let _=0;_<W.length;_+=1)W[_].c();Y=b(),ae=d("p"),ae.innerHTML=`The first minus symbol <strong>-</strong> is in the correct position.<br/>
                The second minus symbol is gray, implying that the first one is the only minus symbol in the equation.`,_e=b(),ne=d("div");for(let _=0;_<R.length;_+=1)R[_].c();re=b(),ce=d("p"),ce.innerHTML=`The first digit <strong>2</strong> is in the correct position.<br/>
                The second digit <strong>2</strong> is orange, implying that there is another digit 2 in a different position.<br/>
                Note that it is still possible to have three (or even more) digit 2s!`,w=b(),V=d("hr"),D=b(),X=d("h3"),X.textContent="Difficulty levels",de=b(),L=d("div"),L.innerHTML=`<p class="text-sm text-gray-500"></p><ul class="list-disc text-sm text-gray-500"><li><strong>Easy</strong>: the solution has one operation (+,-,*,/), and all numbers are positive integers.</li> 
                    <li><strong>Medium</strong>: the solution has two operations (possiblty identical), and all numbers are integers (possibly zero or negative). It is always in the form <strong>a Y b = c Z d</strong> where a,b,c, and d are numbers and Y and Z are operations.</li> 
                    <li><strong>Hard</strong>: Same retrictions as Medium, plus the additional rule: For each digit N in your guess, the N-th position will not be checked. For example, if your guess is 1+2=3, then the first, second, and third position (1, + and 2) will not be checked.</li></ul>`,c(t,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),c(t,"aria-hidden","true"),c(o,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),c(o,"aria-hidden","true"),c(M,"class","text-base leading-6 font-medium text-gray-900"),c(M,"id","modal-title"),c(x,"class","mt-2"),c(q,"class","my-2"),c(A,"class","text-base leading-6 font-medium text-gray-900"),c(A,"id","modal-title"),c(B,"class","mt-2"),c(ie,"class","my-2"),c(Z,"class","text-base font-medium"),c(z,"class","flex justify-center my-1"),c(te,"class","text-sm text-gray-500 mb-4"),c(le,"class","flex justify-center my-1"),c(ae,"class","text-sm text-gray-500 mb-4"),c(ne,"class","flex justify-center my-1"),c(ce,"class","text-sm text-gray-500 mb-4"),c(V,"class","my-2"),c(X,"class","text-base leading-6 font-medium text-gray-900"),c(X,"id","modal-title"),c(L,"class","mt-2"),c(N,"class","mt-2"),c(g,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"),c(m,"class","sm:flex sm:items-start"),c(a,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),c(i,"class","inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"),c(n,"class","flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"),c(e,"class","fixed z-10 inset-0 overflow-y-auto"),c(e,"aria-labelledby","modal-title"),c(e,"role","dialog"),c(e,"aria-modal","true")},m(_,F){I(_,e,F),u(e,n),u(n,t),u(n,l),u(n,o),u(n,s),u(n,i),u(i,a),u(a,m),u(m,g),u(g,M),u(g,y),u(g,x),u(g,T),u(g,q),u(g,O),u(g,A),u(g,H),u(g,B),u(g,$),u(g,ie),u(g,ee),u(g,N),u(N,Z),u(N,ge),u(N,z);for(let h=0;h<k.length;h+=1)k[h].m(z,null);u(N,be),u(N,te),u(N,pe),u(N,le);for(let h=0;h<W.length;h+=1)W[h].m(le,null);u(N,Y),u(N,ae),u(N,_e),u(N,ne);for(let h=0;h<R.length;h+=1)R[h].m(ne,null);u(N,re),u(N,ce),u(N,w),u(N,V),u(N,D),u(N,X),u(N,de),u(N,L),se||(C=oe(e,"click",function(){kt(r[0])&&r[0].apply(this,arguments)}),se=!0)},p(_,[F]){if(r=_,F&18){me=r[1];let h;for(h=0;h<me.length;h+=1){const f=Ve(r,me,h);k[h]?k[h].p(f,F):(k[h]=Xe(f),k[h].c(),k[h].m(z,null))}for(;h<k.length;h+=1)k[h].d(1);k.length=me.length}if(F&20){P=r[2];let h;for(h=0;h<P.length;h+=1){const f=Ze(r,P,h);W[h]?W[h].p(f,F):(W[h]=Qe(f),W[h].c(),W[h].m(le,null))}for(;h<W.length;h+=1)W[h].d(1);W.length=P.length}if(F&24){S=r[3];let h;for(h=0;h<S.length;h+=1){const f=Je(r,S,h);R[h]?R[h].p(f,F):(R[h]=$e(f),R[h].c(),R[h].m(ne,null))}for(;h<R.length;h+=1)R[h].d(1);R.length=S.length}},i:ue,o:ue,d(_){_&&p(e),fe(k,_),fe(W,_),fe(R,_),se=!1,C()}}}function Jt(r,e,n){const t=[{correct:E.Correct,char:"2"},{correct:E.NotUsed,char:"+"},{correct:E.OutOfPlace,char:"3"},{correct:E.NotUsed,char:"="},{correct:E.NotUsed,char:"7"},{correct:E.Wrong,char:"-"},{correct:E.NotUsed,char:"1"}],l=[{correct:E.NotUsed,char:"9"},{correct:E.Correct,char:"-"},{correct:E.NotUsed,char:"4"},{correct:E.NotUsed,char:"="},{correct:E.NotUsed,char:"8"},{correct:E.Wrong,char:"-"},{correct:E.NotUsed,char:"3"}],o=[{correct:E.Correct,char:"2"},{correct:E.NotUsed,char:"="},{correct:E.NotUsed,char:"4"},{correct:E.NotUsed,char:"8"},{correct:E.NotUsed,char:"/"},{correct:E.OutOfPlace,char:"2"},{correct:E.NotUsed,char:"4"}],s={[E.Correct]:"bg-green-500 border-green-500",[E.OutOfPlace]:"bg-yellow-500 border-yellow-500",[E.Wrong]:"bg-gray-500 border-gray-500",[E.NotUsed]:"bg-white"};let{onClose:i=()=>{}}=e;return r.$$set=a=>{"onClose"in a&&n(0,i=a.onClose)},[i,t,l,o,s]}class Zt extends Ne{constructor(e){super();je(this,e,Jt,Gt,Ee,{onClose:0})}}const et="mathdle-attempts",Pe=It(JSON.parse(window.localStorage.getItem(et)||'{"data": {}}'));Pe.subscribe(r=>{window.localStorage[et]=JSON.stringify(r)});function tt(r,e,n){const t=r.slice();return t[32]=e[n],t}function lt(r,e,n){const t=r.slice();return t[35]=e[n][0],t[36]=e[n][1],t}function nt(r,e,n){const t=r.slice();return t[39]=e[n],t[41]=n,t}function rt(r,e,n){const t=r.slice();return t[4]=e[n],t}function st(r,e,n){const t=r.slice();return t[44]=e[n].correct,t[45]=e[n].char,t}function ot(r){let e,n,t,l,o;return{c(){e=d("span"),e.textContent="Additional rule:",n=b(),t=d("span"),t.textContent="For each digit N in your guess, the N-th position will not be checked.",l=b(),o=d("span"),o.textContent="For example, if your guess is 1+2=3, then the first, second, and third position (1, + and 2) will not be checked.",c(e,"class","text-sm text-red-400 ml-3"),c(t,"class","text-sm text-black-400 ml-3"),c(o,"class","text-sm text-gray-400 ml-3")},m(s,i){I(s,e,i),I(s,n,i),I(s,t,i),I(s,l,i),I(s,o,i)},d(s){s&&p(e),s&&p(n),s&&p(t),s&&p(l),s&&p(o)}}}function it(r){var a;let e,n=((a=r[45])!=null?a:"")+"",t,l,o,s,i;return{c(){e=d("div"),t=G(n),c(e,"class",l=""+(Q(`${r[13][r[44]]||"bg-white"} ${r[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-1vyweqh"))},m(m,g){I(m,e,g),u(e,t),i=!0},p(m,g){var M;(!i||g[0]&11)&&n!==(n=((M=m[45])!=null?M:"")+"")&&Me(t,n),(!i||g[0]&267&&l!==(l=""+(Q(`${m[13][m[44]]||"bg-white"} ${m[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`)+" svelte-1vyweqh")))&&c(e,"class",l)},i(m){i||(Nt(()=>{s&&s.end(1),o=Mt(e,Ut,{duration:1e3}),o.start()}),i=!0)},o(m){o&&o.invalidate(),s=jt(e,qt,{}),i=!1},d(m){m&&p(e),m&&s&&s.end()}}}function at(r){let e,n,t=Ue(r[4],r[3],r[0]),l=[];for(let s=0;s<t.length;s+=1)l[s]=it(st(r,t,s));const o=s=>J(l[s],1,1,()=>{l[s]=null});return{c(){e=d("div");for(let s=0;s<l.length;s+=1)l[s].c();c(e,"class","flex justify-center my-1")},m(s,i){I(s,e,i);for(let a=0;a<l.length;a+=1)l[a].m(e,null);n=!0},p(s,i){if(i[0]&8459){t=Ue(s[4],s[3],s[0]);let a;for(a=0;a<t.length;a+=1){const m=st(s,t,a);l[a]?(l[a].p(m,i),K(l[a],1)):(l[a]=it(m),l[a].c(),K(l[a],1),l[a].m(e,null))}for(Oe(),a=t.length;a<l.length;a+=1)o(a);Ce()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)K(l[i]);n=!0}},o(s){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)J(l[i]);n=!1},d(s){s&&p(e),fe(l,s)}}}function ct(r){let e,n=new Array(r[8]).fill(0),t=[];for(let l=0;l<n.length;l+=1)t[l]=ut(nt(r,n,l));return{c(){e=d("div");for(let l=0;l<t.length;l+=1)t[l].c();c(e,"class","flex justify-center my-1")},m(l,o){I(l,e,o);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(l,o){if(o[0]&768){n=new Array(l[8]).fill(0);let s;for(s=0;s<n.length;s+=1){const i=nt(l,n,s);t[s]?t[s].p(i,o):(t[s]=ut(i),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&p(e),fe(t,l)}}}function ut(r){let e,n=(r[9][r[41]]||"")+"",t,l,o;return{c(){e=d("div"),t=G(n),l=b(),c(e,"class",o=""+(Q(`animate-pulse bg-gray-200 ${r[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`)+" svelte-1vyweqh"))},m(s,i){I(s,e,i),u(e,t),u(e,l)},p(s,i){i[0]&512&&n!==(n=(s[9][s[41]]||"")+"")&&Me(t,n),i[0]&256&&o!==(o=""+(Q(`animate-pulse bg-gray-200 ${s[8]>6?"attempt-box-sm":"attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`)+" svelte-1vyweqh"))&&c(e,"class",o)},d(s){s&&p(e)}}}function ft(r){let e,n,t;return{c(){e=d("input"),c(e,"type","text"),c(e,"class","border px-4 py-2 text-center w-64"),c(e,"placeholder","Click here to use keyboard input"),e.autofocus=!0},m(l,o){I(l,e,o),He(e,r[4]),e.focus(),n||(t=[oe(e,"keypress",r[14]),oe(e,"input",r[23])],n=!0)},p(l,o){o[0]&16&&e.value!==l[4]&&He(e,l[4])},d(l){l&&p(e),n=!1,Ae(t)}}}function dt(r){let e,n=r[35]+"",t,l,o,s;function i(){return r[24](r[35])}return{c(){e=d("button"),t=G(n),c(e,"class",l=""+(Q(r[13][r[36]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-1vyweqh"))},m(a,m){I(a,e,m),u(e,t),o||(s=oe(e,"click",i),o=!0)},p(a,m){r=a,m[0]&1024&&n!==(n=r[35]+"")&&Me(t,n),m[0]&1024&&l!==(l=""+(Q(r[13][r[36]]+" flex-grow h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black")+" svelte-1vyweqh"))&&c(e,"class",l)},d(a){a&&p(e),o=!1,s()}}}function mt(r){let e,n,t=Object.entries(r[32]),l=[];for(let o=0;o<t.length;o+=1)l[o]=dt(lt(r,t,o));return{c(){e=d("div");for(let o=0;o<l.length;o+=1)l[o].c();n=b(),c(e,"class","w-full flex flex-row justify-center")},m(o,s){I(o,e,s);for(let i=0;i<l.length;i+=1)l[i].m(e,null);u(e,n)},p(o,s){if(s[0]&9232){t=Object.entries(o[32]);let i;for(i=0;i<t.length;i+=1){const a=lt(o,t,i);l[i]?l[i].p(a,s):(l[i]=dt(a),l[i].c(),l[i].m(e,n))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(o){o&&p(e),fe(l,o)}}}function Vt(r){let e,n,t,l,o,s,i,a;return{c(){e=d("div"),n=d("button"),n.textContent="Submit",t=b(),l=d("button"),l.textContent="Clear",o=b(),s=d("button"),s.textContent="Rules",c(n,"class","flex items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),c(l,"class","flex items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"),c(s,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-pink-300 border-pink-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-100 active:bg-slate-400"),c(e,"class","flex flex-row justify-center")},m(m,g){I(m,e,g),u(e,n),u(e,t),u(e,l),u(e,o),u(e,s),i||(a=[oe(n,"click",r[15]),oe(l,"click",r[25]),oe(s,"click",r[26])],i=!0)},p:ue,d(m){m&&p(e),i=!1,Ae(a)}}}function Xt(r){let e,n=(r[7]?"Copied":"Share")+"",t,l,o;return{c(){e=d("button"),t=G(n),c(e,"class","flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400")},m(s,i){I(s,e,i),u(e,t),l||(o=oe(e,"click",r[16]),l=!0)},p(s,i){i[0]&128&&n!==(n=(s[7]?"Copied":"Share")+"")&&Me(t,n)},d(s){s&&p(e),l=!1,o()}}}function ht(r){let e,n;return e=new Zt({props:{onClose:r[27]}}),{c(){we(e.$$.fragment)},m(t,l){xe(e,t,l),n=!0},p(t,l){const o={};l[0]&64&&(o.onClose=t[27]),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){ke(e,t)}}}function Qt(r){let e,n,t,l,o,s,i,a,m,g,M,y,x,T=r[12]+1+"",q,O,A,H,B,$,ie,ee,N,Z,ge,z,be,te,pe,le,Y,ae,_e,ne,re,ce,w,V,D,X,de;n=new Ft({props:{items:r[11]}}),l=new Dt({props:{url:gt,title:We}}),s=new Pt({props:{title:We,description:$t,url:gt,imageUrl:el,gtagId:tl}});let L=r[0]===2&&ot(),se=r[1][r[0]],C=[];for(let f=0;f<se.length;f+=1)C[f]=at(rt(r,se,f));const me=f=>J(C[f],1,1,()=>{C[f]=null});let k=!r[2][r[0]]&&ct(r),P=!r[2][r[0]]&&ft(r),W=r[10],S=[];for(let f=0;f<W.length;f+=1)S[f]=mt(tt(r,W,f));function R(f,j){return f[2][f[0]]?Xt:Vt}let _=R(r),F=_(r),h=r[6]&&ht(r);return{c(){e=d("div"),we(n.$$.fragment),t=b(),we(l.$$.fragment),o=b(),we(s.$$.fragment),i=b(),a=d("main"),m=d("h1"),g=d("span"),M=G(We),y=d("span"),y.textContent="Beta",x=G(`\r
\r
  Day `),q=G(T),O=b(),A=d("div"),H=d("button"),B=G("Easy"),ie=b(),ee=d("button"),N=G("Medium"),ge=b(),z=d("button"),be=G("Hard"),pe=b(),L&&L.c(),le=b(),Y=d("div");for(let f=0;f<C.length;f+=1)C[f].c();ae=b(),k&&k.c(),_e=b(),P&&P.c(),ne=b(),re=d("div");for(let f=0;f<S.length;f+=1)S[f].c();ce=b(),w=d("div"),F.c(),V=b(),h&&h.c(),c(e,"class","footer-wrapper svelte-1vyweqh"),c(y,"class","text-sm text-gray-400 ml-2"),c(m,"class","text-6xl text-green-400 flex flex-col mb-4"),c(H,"class",$=""+(Q(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${r[0]==0?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")),c(ee,"class",Z=""+(Q(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${r[0]==1?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")),c(z,"class",te=""+(Q(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${r[0]==2?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")),c(A,"class","flex flex-row justify-center"),c(Y,"class","attempts grow overflow-y-auto svelte-1vyweqh"),c(re,"class","layout my-4 w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4"),c(w,"class","mb-16 text-center"),c(a,"class","w-full h-screen py-4 flex flex-col items-center")},m(f,j){I(f,e,j),xe(n,e,null),u(e,t),xe(l,e,null),I(f,o,j),xe(s,f,j),I(f,i,j),I(f,a,j),u(a,m),u(m,g),u(g,M),u(g,y),u(a,x),u(a,q),u(a,O),u(a,A),u(A,H),u(H,B),u(A,ie),u(A,ee),u(ee,N),u(A,ge),u(A,z),u(z,be),u(a,pe),L&&L.m(a,null),u(a,le),u(a,Y);for(let v=0;v<C.length;v+=1)C[v].m(Y,null);u(Y,ae),k&&k.m(Y,null),r[22](Y),u(a,_e),P&&P.m(a,null),u(a,ne),u(a,re);for(let v=0;v<S.length;v+=1)S[v].m(re,null);u(a,ce),u(a,w),F.m(w,null),u(a,V),h&&h.m(a,null),D=!0,X||(de=[oe(H,"click",r[19]),oe(ee,"click",r[20]),oe(z,"click",r[21])],X=!0)},p(f,j){if((!D||j[0]&1&&$!==($=""+(Q(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${f[0]==0?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")))&&c(H,"class",$),(!D||j[0]&1&&Z!==(Z=""+(Q(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${f[0]==1?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")))&&c(ee,"class",Z),(!D||j[0]&1&&te!==(te=""+(Q(`flex text-lg items-center justify-center rounded border mx-2 p-3 ${f[0]==2?"bg-blue-300 border-blue-300":"bg-grey-300 border-grey-300"} text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400`)+" svelte-1vyweqh")))&&c(z,"class",te),f[0]===2?L||(L=ot(),L.c(),L.m(a,le)):L&&(L.d(1),L=null),j[0]&8459){se=f[1][f[0]];let v;for(v=0;v<se.length;v+=1){const Ie=rt(f,se,v);C[v]?(C[v].p(Ie,j),K(C[v],1)):(C[v]=at(Ie),C[v].c(),K(C[v],1),C[v].m(Y,ae))}for(Oe(),v=se.length;v<C.length;v+=1)me(v);Ce()}if(f[2][f[0]]?k&&(k.d(1),k=null):k?k.p(f,j):(k=ct(f),k.c(),k.m(Y,null)),f[2][f[0]]?P&&(P.d(1),P=null):P?P.p(f,j):(P=ft(f),P.c(),P.m(a,ne)),j[0]&9232){W=f[10];let v;for(v=0;v<W.length;v+=1){const Ie=tt(f,W,v);S[v]?S[v].p(Ie,j):(S[v]=mt(Ie),S[v].c(),S[v].m(re,null))}for(;v<S.length;v+=1)S[v].d(1);S.length=W.length}_===(_=R(f))&&F?F.p(f,j):(F.d(1),F=_(f),F&&(F.c(),F.m(w,null))),f[6]?h?(h.p(f,j),j[0]&64&&K(h,1)):(h=ht(f),h.c(),K(h,1),h.m(a,null)):h&&(Oe(),J(h,1,1,()=>{h=null}),Ce())},i(f){if(!D){K(n.$$.fragment,f),K(l.$$.fragment,f),K(s.$$.fragment,f);for(let j=0;j<se.length;j+=1)K(C[j]);K(h),D=!0}},o(f){J(n.$$.fragment,f),J(l.$$.fragment,f),J(s.$$.fragment,f),C=C.filter(Boolean);for(let j=0;j<C.length;j+=1)J(C[j]);J(h),D=!1},d(f){f&&p(e),ke(n),ke(l),f&&p(o),ke(s,f),f&&p(i),f&&p(a),L&&L.d(),fe(C,f),k&&k.d(),r[22](null),P&&P.d(),fe(S,f),F.d(),h&&h.d(),X=!1,Ae(de)}}}const gt="https://lemononmars.github.io/mathdle",We="Mathdle",$t="Wordle clone, but it's math.",el="https://i.imgur.com/z8BlEoK.png",tl="G-YTV7TZ3EMC",ll=16429572e5,nl=864e5;function rl(r,e){for(var n=[],t=0,l=0;t<r.length;t++)t>=e&&t%e==0&&l++,n[l]=n[l]||[],n[l].push(r[t]);return n}function sl(r,e,n){var re,ce;let t,l,o,s,i;Et(r,Pe,w=>n(18,i=w));const a=[{name:"Found a bug?",url:"https://twitter.com/SakulbuthE/status/1485679790627880960"},{name:"Try Boardle",url:"https://lemononmars.github.io/boardle/"},{name:"Original (Thwordle)",url:"https://github.com/narze/thwordle"},{name:"Github",url:"https://github.com/lemononmars/mathdle"}],m=rl("1234506789+-*/=".split(""),5).map(w=>w.join("")),g=Date.now(),M=Math.floor((g-ll)/nl);let y="",x=0;const T=["easy","medium","hard"];let q=Yt(M),O=((re=i.data[M])==null?void 0:re.attempts)||[[],[],[]],A=O.map((w,V)=>w.map(D=>Ue(D,q[V],x))),H=((ce=i.data[M])==null?void 0:ce.win)||[!1,!1,!1],B,$=!0,ie=!1;const ee={[ye.Correct]:"bg-green-500 border-green-500",[ye.OutOfPlace]:"bg-yellow-500 border-yellow-500",[ye.Wrong]:"bg-gray-500 border-gray-500",[ye.NotUsed]:"bg-white"};function N(w){if(w.key==="Enter"&&(w.preventDefault(),Z()),o.length>=l+1){w.preventDefault();return}}async function Z(){if(H[x])return;if(y.length!=l){alert("Please match the input length");return}let w=y.split("=");if(w.length==1){alert("Equals sign missing (=)");return}if(w.length>2){alert("Too many equals signs!");return}let V,D;try{V=qe(w[0]),D=qe(w[1])}catch{alert("Invalid expression");return}if(V!=D){alert("Invalid equation: "+V+"\u2260"+D);return}n(1,O[x]=[...O[x],y],O);const X=Ue(y,t,x);n(17,A[x]=[...A[x],X],A);let de=!0;X.forEach(L=>{L.correct!==ye.Correct&&(de=!1)}),de&&(alert("You won!"),n(2,H[x]=!0,H)),n(4,y=""),await Ot(),n(5,B.scrollTop=B.scrollHeight,B)}function ge(){const w=zt(A[x]);navigator.clipboard.writeText(`#Mathdle Day ${M+1} ${T[x]} (${w.length} attempts)

${w.join(`
`)}`),n(7,ie=!0),setTimeout(()=>{n(7,ie=!1)},2e3)}const z=()=>{n(0,x=0),n(4,y="")},be=()=>{n(0,x=1),n(4,y="")},te=()=>{n(0,x=2),n(4,y="")};function pe(w){Ct[w?"unshift":"push"](()=>{B=w,n(5,B)})}function le(){y=this.value,n(4,y)}const Y=w=>n(4,y+=w),ae=()=>{n(4,y="")},_e=()=>{n(6,$=!0)},ne=()=>{n(6,$=!1)};return r.$$.update=()=>{r.$$.dirty[0]&1&&n(3,t=q[x]),r.$$.dirty[0]&8&&n(8,l=t.length),r.$$.dirty[0]&16&&n(4,y=y.replace(/[^0-9\+\-\*\/\=]/g,"")),r.$$.dirty[0]&16&&n(9,o=y.split("")),r.$$.dirty[0]&131073&&n(10,s=Bt(m,A[x].flat())),r.$$.dirty[0]&262150&&Pe.set({data:Ke(Fe({},i.data),{[`${M}`]:{attempts:O,win:H}})})},[x,O,H,t,y,B,$,ie,l,o,s,a,M,ee,N,Z,ge,A,i,z,be,te,pe,le,Y,ae,_e,ne]}class ol extends Ne{constructor(e){super();je(this,e,sl,Qt,Ee,{},null,[-1,-1])}}new ol({target:document.getElementById("app")});