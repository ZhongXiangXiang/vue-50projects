import{d as D,H as _,o as t,c as n,F as p,m as i,I as h,g as w,L as m,a as E,_ as L}from"./index-B_aWdXqq.js";const $={class:"bg"},k=["onDragover","onDragenter","onDragleave","onDrop"],B=["onDragstart","onDragend"],b=D({__name:"index",setup(C){const o=_([{show:!0,hold:!1,hovered:!1},{show:!1,hold:!1,hovered:!1},{show:!1,hold:!1,hovered:!1},{show:!1,hold:!1,hovered:!1},{show:!1,hold:!1,hovered:!1}]);function c(e){console.log("start",e),o[e].hold=!0,setTimeout(()=>o[e].show=!1,0)}function f(e){o[e].hold=!1;const a=o.find(s=>s.show);console.log("end",e,a),a||(o[e].show=!0)}function d(e,a){console.log("enter",e),a.preventDefault(),o.forEach(s=>s.hovered=!1),o[e].hovered=!0}function v(e,a){console.log("over",e),a.preventDefault()}function g(e){console.log("leave,,",e),o[e].hovered=!1}function u(e){console.log("drop,,",e),o[e].hovered=!1,o.forEach(a=>a.show=!1),o[e].show=!0}return(e,a)=>(t(),n("div",$,[(t(!0),n(p,null,i(o,(s,r)=>(t(),n("div",{key:r,class:h(["box",{hovered:s.hovered}]),onDragover:l=>v(r,l),onDragenter:l=>d(r,l),onDragleave:l=>g(r),onDrop:l=>u(r)},[w(E("div",{class:h(["img",{hold:s.hold}]),draggable:"true",onDragstart:l=>c(r),onDragend:l=>f(r)},null,42,B),[[m,s.show]])],42,k))),128))]))}}),I=L(b,[["__scopeId","data-v-4a7a9173"]]);export{I as default};
