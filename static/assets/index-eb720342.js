import{F as a,a3 as s,Q as r,P as n,r as o,ar as i,an as d,Y as m,a6 as h,aa as p,a8 as g}from"./index-52a95e7f.js";import{R as u}from"./Row-9c9cf5c4.js";import{C}from"./Col-ea297bd2.js";import{C as x,a as f}from"./CardBody-2b451391.js";import{C as w}from"./CardText-2604ea3e.js";const y="/static/assets/badge-2e53e2e3.svg",b=({companyDetail:e})=>a(x,{className:"card-congratulations-medal card-congratulations",style:{background:`linear-gradient(118deg,${s(r,1)},${s(r,.7)}`},children:n(f,{children:[a("h2",{style:{width:"80%",whiteSpace:"pre-wrap"},className:"text-white",children:" Welcome to Your "}),a("h4",{className:"font-weight-bold text-white my-2",style:{width:"70%",whiteSpace:"pre-wrap"},children:"Data Collator! 👋"}),a(w,{className:"font-small-3",style:{whiteSpace:"pre-wrap"},children:e.message}),a("img",{className:"congratulation-medal",src:y,alt:"Medal Pic"})]})});const D=({companyDetail:e})=>{o.useContext(i);const l=()=>{m.get(`${h}/api/department/`,p).then(t=>{const c=t.data.results;localStorage.setItem("list",JSON.stringify(c))}).catch(t=>{console.log(t)})};return o.useEffect(()=>{l()},[]),a("div",{id:"dashboard-analytics",children:a(u,{className:"match-height",children:a(C,{xl:d==="admin"?3:6,md:"6",xs:"12",children:a(b,{companyDetail:e})})})})},T=()=>(()=>a(D,{companyDetail:g}))();export{T as default};
