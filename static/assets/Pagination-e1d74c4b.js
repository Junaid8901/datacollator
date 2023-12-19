import{e as l,r as b,b as R,K as i,ai as P,J as S,c as o}from"./index-67acb5a9.js";import{g as $,a as j,s as M,b as U,u as A,c as D}from"./TooltipControl-9379d2bb.js";import{p as x,q as d}from"./App-ce653d86.js";import{M as X,R as f}from"./react-paginate-f55c1d30.js";function F(a){return String(a).match(/[\d.\-+]*\s*(.*)/)[1]||""}function K(a){return parseFloat(a)}function q(a){return $("MuiSkeleton",a)}j("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=["animation","className","component","height","style","variant","width"];let p=a=>a,C,v,k,y;const T=a=>{const{classes:t,variant:e,animation:n,hasChildren:s,width:c,height:r}=a;return D({root:["root",e,n,s&&"withChildren",s&&!c&&"fitContent",s&&!r&&"heightAuto"]},q,t)},W=x(C||(C=p`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),E=x(v||(v=p`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),J=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant],e.animation!==!1&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})(({theme:a,ownerState:t})=>{const e=F(a.shape.borderRadius)||"px",n=K(a.shape.borderRadius);return l({display:"block",backgroundColor:a.vars?a.vars.palette.Skeleton.bg:U(a.palette.text.primary,a.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:a})=>a.animation==="pulse"&&d(k||(k=p`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),W),({ownerState:a,theme:t})=>a.animation==="wave"&&d(y||(y=p`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),E,(t.vars||t).palette.action.hover)),O=b.forwardRef(function(t,e){const n=A({props:t,name:"MuiSkeleton"}),{animation:s="pulse",className:c,component:r="span",height:m,style:N,variant:w="text",width:_}=n,h=R(n,B),u=l({},n,{animation:s,component:r,variant:w,hasChildren:Boolean(h.children)}),L=T(u);return i(J,l({as:r,ref:e,className:P(L.root,c),ownerState:u},h,{style:l({width:_,height:m},N)}))}),g=O;function I(){return S("div",{children:[i(g,{variant:"rectangular",animation:"wave",height:30,className:"mb-1"}),i(g,{animation:"wave",variant:"rectangular",height:30,className:"mb-1"}),i(g,{animation:"wave",variant:"rectangular",height:30,className:"mb-1"})]})}function Q({pages:a,action:t,disabled:e}){return i(b.Fragment,{children:i(X,{query:"(min-width: 767px)",children:n=>n?i("div",{className:"d-flex justify-content-end",style:{paddingRight:"10px",paddingLeft:"10px"},children:i(f,{previousLabel:" Prev",nextLabel:"Next ",forcePage:a.page_number-1,onPageChange:s=>!e&&t(s.selected+1,!0),pageCount:a.total_pages,breakLabel:"...",pageRangeDisplayed:4,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:o("page-link ",{opacity_low:e}),nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:o("page-link ",{opacity_low:e}),pageLinkClassName:o("page-link ",{opacity_low:e}),breakClassName:"page-item",breakLinkClassName:o("page-link ",{opacity_low:e}),containerClassName:"pagination react-paginate separated-pagination justify-content-end pr-1 mt-1"})}):i("div",{className:"d-flex justify-content-end",style:{paddingRight:"10px",paddingLeft:"10px"},children:i(f,{previousLabel:" Prev",nextLabel:"Next ",forcePage:a.page_number-1,onPageChange:s=>!e&&t(!0,s.selected+1),pageCount:a.total_pages,breakLabel:"",pageRangeDisplayed:0,marginPagesDisplayed:0,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:o("page-link ",{opacity_low:e}),nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:o("page-link ",{opacity_low:e}),pageLinkClassName:o("page-link ",{opacity_low:e}),breakClassName:"page-item",breakLinkClassName:o("page-link ",{opacity_low:e}),containerClassName:"pagination react-paginate separated-pagination justify-content-end pr-1 mt-1"})})})})}export{Q as P,I as S};
