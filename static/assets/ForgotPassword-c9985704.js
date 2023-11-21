import{r as l,F as e,P as s,B as C,a5 as N,Y as b,a6 as v,a7 as w,ai as m,aj as d}from"./index-52a95e7f.js";import{u as y,a as F,R as k,L as u,l as B,F as E,I as L,c as S,C as p}from"./App-a255ea7a.js";import{R}from"./Row-9c9cf5c4.js";import{C as i}from"./Col-ea297bd2.js";import{C as P}from"./CardText-2604ea3e.js";import{C as j}from"./CardTitle-f2916fda.js";import{F as D}from"./Form-f455f818.js";import{L as I}from"./Label-e92a3cb1.js";/* empty css                  */const T="/static/assets/forgot-password-v2-da45274a.svg",M=()=>{y(),F();const[g,h]=l.useState(!1),[n,t]=l.useState(!1),[r,f]=l.useState(),c=a=>{const x={email:r};console.log("email",r),a.preventDefault(),t(!0),b.post(`${v}/api/reset/password/`,x,w).then(o=>{console.log("response from server",o),h(!0),t(!1),m.success(e(d,{title:o.data.opt,color:"success",icon:e(p,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})}).catch(o=>{console.log("err",o.response),t(!1),m.error(e(d,{title:"Invalid E-mail",color:"danger",icon:e(p,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})})};return e("div",{className:"auth-wrapper auth-v2",children:g?e(k,{to:"/reset-password"}):s(R,{className:"auth-inner m-0",children:[s(u,{className:"brand-logo",to:"/",onClick:a=>a.preventDefault(),children:[e("img",{src:B,alt:"",width:"40"}),e("h2",{className:"brand-text text-primary ml-1",children:"Data Collator"})]}),e(i,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:e("img",{className:"img-fluid",src:T,alt:"Login V2"})})}),e(i,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:s(i,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e(j,{tag:"h2",className:"font-weight-bold mb-1",children:"Forgot Password? 🔒"}),e(P,{className:"mb-2",children:"Enter your email and we'll send you instructions to reset your password"}),s(D,{className:"auth-forgot-password-form mt-2",onSubmit:c,children:[s(E,{children:[e(I,{className:"form-label",for:"login-email",children:"Email"}),e(L,{onChange:a=>{console.log("emailchanged "),f(a.target.value)},type:"email",value:r,id:"login-email",placeholder:"user@onlineclaimservices.com",autoFocus:!0})]}),s(C.Ripple,{disabled:n,onClick:c,color:"primary",block:!0,children:["Submit   ",n&&e(N,{size:"sm",color:"light"})]})]}),e("p",{className:"text-center mt-2",children:s(u,{to:"/login",children:[e(S,{className:"mr-25",size:14}),e("span",{className:"align-middle",children:"Back to login"})]})})]})})]})})};export{M as default};
