import{K as s,c as Q,r as h,J as p,a0 as w,B as I,U as k,a5 as y,a1 as x}from"./index-67acb5a9.js";import{R as W}from"./Row-cc16094e.js";import{C as R}from"./Col-9f6d0d1a.js";import{k as b,P as X,u as Z,F as _,I as v,n as ee}from"./App-ce653d86.js";import{I as se}from"./Input-55b2ccf9.js";import{L as re}from"./Label-f521c803.js";import{A as ae}from"./AppCard-bb24aa62.js";import{T as te}from"./Table-63808cde.js";import{D as B}from"./DealerAdminButton-7238082e.js";import{a as S}from"./ToastComponent-252645f5.js";import"./Card-4fea091a.js";import"./CardBody-73830640.js";import"./CardTitle-5ac35081.js";function ie({children:f,left:n}){return s("div",{className:Q("divider",{"divider-left":n}),children:s("div",{className:"divider-text text-left",children:f})})}const ne={title:"User Member",read:"view_user",create:"add_user",update:"update_user",delete:"delete_user"},oe={title:"User Role",read:"view_user_role",create:"add_user_role",update:"update_user_role",delete:"delete_user_role"},le=[ne,oe],de={administrator:le},ce=de;function pe({permissions:f,values:n,handleChange:d}){return s(h.Fragment,{children:s(te,{responsive:!0,className:"permission_table ",children:s("tbody",{children:f.map((r,t)=>p("tr",{children:[s("td",{className:"text-nowrap",children:r.title}),s("td",{children:s(b,{id:r.read,type:"checkbox",label:"View",disabled:!r.read,checked:n.includes(r.read),onChange:()=>d(r.read)})}),s("td",{children:s(b,{id:r.create,type:"checkbox",label:"Create",disabled:!r.create,checked:n.includes(r.create),onChange:()=>d(r.create)})}),s("td",{children:s(b,{id:r.update,type:"checkbox",label:"Update",disabled:!r.update,checked:n.includes(r.update),onChange:()=>d(r.update)})}),s("td",{children:s(b,{disabled:!r.delete,id:r.delete,type:"checkbox",label:"Delete",checked:n.includes(r.delete),onChange:()=>d(r.delete)})})]},t))})})})}function me(){const{roleType:f,id:n}=X(),d=Z(),r=ce.administrator,[t,m]=h.useState({name:"",permissions:[]}),[u,g]=h.useState(!1),[D,A]=h.useState(!1),F=e=>a=>{m({...t,[e]:a.target.value})},T=e=>{const a=t.permissions;if(a.includes(e)){const o=a.filter(l=>l!==e);m({...t,permissions:o})}else a.push(e),m({...t,permissions:a});A(!1)},L=r.map(e=>e.read?{perm:e.read}:"no"),j=r.map(e=>e.create?{perm:e.create}:"no"),E=r.map(e=>e.update?{perm:e.update}:"no"),z=r.map(e=>e.delete?{perm:e.delete}:"no"),H=[...L,...j,...E,...z],M=H.filter(e=>e.perm),O=M.map(e=>e.perm),V=()=>{m({...t,permissions:O}),A(!0)},G=()=>`${x}/api/role/`,N=()=>`${x}/api/role/${n}/`,U=()=>`${x}/api/permissions/`,J=n?"put":"post",K=n?N():G(),$=()=>{g(!0),k.get(U(),y).then(e=>{const a=[];for(let i=0;i<t.permissions.length;i++){const c=e.data.filter(C=>C.code===t.permissions[i]);a.push(c[0]?{id:c[0].id}:"perm")}const o=a.filter(i=>i.id),l=o.map(i=>i.id),P={name:t.name,permission:l};k[J](K,P,y).then(()=>{S("success",v,`Successfully ${n?"updated":"created"}`),d.push(`/${f}-roles`),g(!1)}).catch(i=>{if(console.log(i.response),i.response&&i.response.status===400)for(const[c,C]of Object.entries(i.response.data))c==="password"?(payload.setPassErrors(C),S("error",v,"Invalid password")):S("error",v,`${ee(c)}: ${C}`);g(!1)})}).then(()=>{g(!1)})},Y=e=>{k.get(N(),y).then(a=>{if(a.data.permission&&a.data.permission.length)if(console.log("res.data.permission",typeof a.data.permission[0]),typeof a.data.permission[0]=="number"){console.log("perms",e);let o=[];for(let l=0;l<a.data.permission.length;l++){console.log(e);const P=e.find(i=>i.id===a.data.permission[l]);if(o.push(P),console.log("permArray",o),o.length&&o[0]){const i={name:a.data.name,permissions:o.map(c=>c.code)};m(i)}}}else{const o={name:a.data.name,permissions:a.data.permission.map(l=>l.code)};m(o)}})},q=()=>{k.get(U(),y).then(e=>{Y(e.data)})};return h.useEffect(()=>{n&&q()},[]),p(ae,{body:!0,children:[p(W,{children:[s(R,{md:"3",children:p(_,{children:[s(re,{children:"Name"}),s(se,{placeholder:"Name",onChange:F("name"),value:t.name})]})}),s(R,{md:"9",className:"text-right",children:p(_,{children:[p(B,{onClick:()=>$(),disabled:!t.name||!t.permissions.length||u,children:["Submit ",u&&s(w,{size:"sm"})]})," ",s(I,{disabled:u,outline:!0,onClick:()=>d.goBack(),children:"Cancel"})]})})]}),s(ie,{children:"Permission"}),s(_,{children:s(b,{checked:D,type:"checkbox",label:"Select all",id:"select-all",onChange:()=>V()})}),s(pe,{permissions:r,values:t.permissions,handleChange:T}),s("br",{}),p(B,{onClick:()=>$(),disabled:!t.name||!t.permissions.length||u,children:["Submit ",u&&s(w,{size:"sm"})]})," ",s(I,{disabled:u,outline:!0,onClick:()=>d.goBack(),children:"Cancel"})]})}function Ae(){return s(h.Fragment,{children:s(me,{})})}export{Ae as default};