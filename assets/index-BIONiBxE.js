import{d as _,r as a,J as c,o as v,c as g,a as u,t as x,u as b,_ as m}from"./index-CHGlN5Fw.js";const y={class:"container"},R=100,k=_({__name:"index",setup(h){a(R),a(0);const r=c(null),t=c(null);let e=a(0),f=setInterval(i,30);function i(){e.value++,e.value>99&&clearInterval(f),t.value.style.opacity=String(l(e.value,0,100,1,0)),r.value.style.filter=`blur(${l(e.value,0,100,30,0)}px)`}const l=(n,s,d,o,p)=>(n-s)*(p-o)/(d-s)+o;return(n,s)=>(v(),g("div",y,[u("div",{class:"bg",ref_key:"bgRef",ref:r},null,512),u("div",{class:"progress",ref_key:"progressRef",ref:t},x(b(e))+"%",513)]))}}),I=m(k,[["__scopeId","data-v-de59d37c"]]);export{I as default};
