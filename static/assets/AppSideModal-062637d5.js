import{K as t,L as a,M as p,a1 as u,B as b}from"./index-3d883fcf.js";import{M as C,p as x,o as N,X as f}from"./App-5cbcf20f.js";const h=({title:e,handleModal:l,updateAble:s})=>a(N,{className:"mb-1",tag:"div",close:a(f,{size:15,onClick:l}),children:a("h5",{className:"modal-title",children:`${s?"Update":"Add"} `+e})}),_=({title:e,open:l,handleModal:s,children:d,handleSubmit:c,handleResetInputValues:i,updateAble:n,processing:r,detail:o,disabled:m})=>t(C,{isOpen:l,onClosed:i,toggle:s,className:"sidebar-lg",modalClassName:"modal-slide-in",contentClassName:"pt-0",children:[a(h,{title:e,handleModal:s,updateAble:n}),t(x,{className:"flex-grow-1",children:[d,t("button",{id:"create-update-btn",className:"mr-1 btn ",style:{backgroundColor:p,color:"#fff"},disabled:r||(o&&o.tax_on_parts)>100||(o&&o.tax_on_labour)>100||(o&&o.tax_on_total)>100||m,onClick:c,children:[n?"Update":"Submit"," ",r&&a(u,{color:"light",size:"sm"})]}),a(b,{color:"secondary",onClick:s,outline:!0,disabled:r,children:"Cancel"})]})]}),k=_;export{k as A};