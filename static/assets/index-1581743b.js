import{P as a,F as e,af as G,r as m,ag as J,B as V,aE as X,Y as j,au as E,aa as H,ap as I,I as K,W as Z,an as L,av as U,aw as ee,ab as ae,as as le}from"./index-52a95e7f.js";import{u as ie,D as te,U as Y,ai as se,m as ne,a9 as re,aj as T,ak as oe,al as P,am as de,p as ce,K as me,O as ue,L as he,d as fe,P as pe,Q as _e}from"./App-a255ea7a.js";import{R as W}from"./Row-9c9cf5c4.js";import{C as S}from"./Col-ea297bd2.js";import{A as ge}from"./Alert-9a31d8ac.js";import{C as Q,a as q}from"./CardBody-2b451391.js";import{C as Ne}from"./CardHeader-79643d0f.js";import{C as i}from"./CardText-2604ea3e.js";import{A as we}from"./AppSideModal-ae4d95c9.js";import{E as be,M as ye}from"./MemberForm-25f68fe8.js";/* empty css                  */import"./FormFeedback-32f35877.js";import"./index-2428db70.js";import"./Label-e92a3cb1.js";import"./index-6b666643.js";const xe=({selectedUser:l})=>a(Q,{className:"plan-card border-primary",children:[e(Ne,{className:"d-flex justify-content-between align-items-center pt-75 pb-1",children:e("h5",{className:"mb-0",children:"Contact details"})}),a(q,{children:[e(G,{className:"text-capitalize",color:"light-primary",children:l!==null?l.currentPlan:"Basic"}),a("ul",{className:"list-unstyled my-1",children:[a("li",{children:[e("small",{children:"Phone"}),e("h5",{className:"align-middle",children:l.phone?l.phone:"---"})]}),a("li",{className:"my-25",children:[e("small",{children:"Email"}),e("h5",{className:"align-middle",children:l.email?l.email:"---"})]})]})]})]}),ve=({selectedUser:l,handleBoolean2:_,memberArrange:u,handleSubmit:b,values:o,setValues:h,checkType:r,memberOfKey:y,userType:f,modal:t,setModal:g,processing:R,id:$,handleSelectReceiveOnly:z,handleSelectFundingSource:C,customer_id:M,handleSelectRenderFundingSource:x,getDealerMemberDetail:A})=>{const k=ie(),[D,v]=m.useState(!1),[B,p]=m.useState(!1),F=()=>{p(!0),j.delete(`${E+r}/member/${$}/`,H).then(()=>{I("error",K,"Successfully deleted"),k.goBack()}).catch(()=>{v(!0),p(!0)})},N=d=>c=>{h({...o,[d]:c.target.value})},O=(d,c)=>{h(d==="dwolla_account_type"?{...o,[d]:c.value,dwolla_customer_fs_id:"",dwolla_customer_id:"",dwolla_customer_account:"",dwolla_funding_source:""}:{...o,[d]:c})},n=d=>{h({...o,[d]:!o[d]})},s=()=>{A(!0)};return a(Q,{children:[e(q,{children:a(W,{children:[e(S,{xl:"4",lg:"12",className:"d-flex flex-column justify-content-between border-container-lg",children:e("div",{className:"user-avatar-section",children:e("div",{className:"d-flex justify-content-start",children:a("div",{className:"d-flex flex-column ml-1",children:[a("div",{className:"user-info mb-1",children:[e("h4",{className:"mb-0 text-capitalize",children:l!==null?l.name:""}),e(i,{tag:"span"})]}),a("div",{className:"d-flex flex-wrap align-items-center",children:[J.includes("change_dealer_member")&&e(te,{onClick:()=>{s()},color:"primary",children:"Edit"}),e(V.Ripple,{onClick:()=>v(!D),className:"ml-1",color:"danger",outline:!0,children:"Delete"})]})]})})})}),e(S,{xl:"8",lg:"12",className:"mt-2 mt-xl-0",children:a("div",{className:"user-info-wrapper",children:[a("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(Y,{size:15})," Full Name"]})}),e(i,{className:"mb-0",children:l!==null?l.name:""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(se,{size:15})," Status"]})}),e(i,{className:"text-capitalize mb-0 mr-1",children:l!==null&&l.is_approved?"Approve":"Unapprove"})]}),f!=="administrator"&&f!=="sales-representative"&&a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(Y,{size:15})," ",ne(f)]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l[u].name:""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(re,{size:15})," Role"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l[`${u}_role`].name:""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(T,{size:15})," Notify claim"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l.notify_claim?"Yes":"No":""})]}),(f==="dealer"||f==="admin")&&a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(T,{size:15})," Notify cancellation"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l.notify_cancellation?"Yes":"No":""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(oe,{size:15})," Payment enabled"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l.enable_payment?"Yes":"No":""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(P,{size:15})," Dwolla customer account"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l.dwolla_customer_account.businessName?l.dwolla_customer_account.businessName:"---":""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(P,{size:15})," Dwolla funding source"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l.dwolla_funding_source.name?l.dwolla_funding_source.name:"---":""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(P,{size:15})," Dwolla Sender Source"]})}),e(i,{className:"text-capitalize mb-0",children:l!==null?l.sender_source_dwolla.name?l.sender_source_dwolla.name:"---":""})]}),a("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"40%"},children:a(i,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(de,{size:15})," ACH Fee"]})}),e(i,{className:"text-capitalize mb-0",children:X(l.ach_fee)})]})]})})]})}),a(we,{open:t,handleModal:s,title:"member",updateAble:!0,handleSubmit:b,processing:R,handleResetInputValues:()=>null,children:[e(be,{handleChange:N,values:o,setValues:h,invalid:!1,valid:!1,updateAble:!0}),e(ye,{handleBoolean:n,handleChange:N,values:o,setValues:h,handleChangeSelect:O,userType:f,checkType:r,memberArrange:u,handleSelectReceiveOnly:z,handleSelectFundingSource:C,customer_id:M,handleBoolean2:_,handleSelectRenderFundingSource:x})]}),e(ce,{centeredModal:D,setCenteredModal:v,isLoading:B,onDelete:()=>F()})]})},He=l=>{const{id:_,userType:u}=me(),b=fe(u),o=ue(u),h=_e(u),r=Z(h),[y,f]=m.useState(),[t,g]=m.useState(""),[R,$]=m.useState(""),[z,C]=m.useState(!1),[M,x]=m.useState(!1);m.useState([]);const[A,k]=m.useState(""),D=n=>{g({...t,businessName:n.businessName,customer_id:n.id})},v=(n,s)=>{console.log(n),g({...t,dwolla_customer_fs_id:n.customer_fs_id,dwolla_customer_id:n.customer_id})},B=(n,s)=>{g({...t,[s]:n[s]})},p=n=>{j.get(`${E+b}/member/${_}/`,H).then(s=>{f(s.data),g({...s.data,dwolla_transfer_type:pe(s.data)}),n&&C(!z)}).catch(s=>{})},F=(n,s)=>{const c=["agency","agency_role","dealer","dealer_role","sales_representative_role","company_role","repair_facility","repair_facility_role"].filter(w=>!w.includes(n));console.log("newList",c);for(let w=0;w<c.length;w++)t[c[w]]&&delete s[c[w]];console.log("data",s)};console.log("`${memberArrange}_role`",`${r}_role`),F(r,t);const N={...t,[r]:L==="dealer"?U:L==="sales_representative"?ee:t[r]&&t[r].id,[`${r}_role`]:t[`${r}_role`]&&t[`${r}_role`].id,member_of:o,dwolla_customer_account:t.dwolla_customer_account?t.dwolla_customer_account.id:"",dwolla_funding_source:t.dwolla_funding_source?t.dwolla_funding_source.id:"",dwolla_transfer_type:t.dwolla_transfer_type?t.dwolla_transfer_type.value:"",sender_source_dwolla:t.sender_source_dwolla?t.sender_source_dwolla.id:""};ae.is_super_admin||delete N.external_admin;const O=n=>{console.log("apidatat",N),x(!0),j.patch(`${E+b}/member/${_}/`,N,H).then(s=>{I("success",K,"Successfully updated"),p(s.data),x(!1)}).catch(s=>{if(x(!1),s.response&&s.response.status===400)for(const[d,c]of Object.entries(s.response.data))I("error",K,`${le(d)}: ${c}`)})};return m.useEffect(()=>{p()},[]),y!=null?e("div",{className:"app-user-view",children:a(W,{children:[e(S,{xl:"9",lg:"9",md:"9",children:e(ve,{selectedUser:y,getData:p,dealerRole:R,setDealer:k,setDealerRole:$,dealer:A,memberArrange:r,handleSubmit:O,values:t,setValues:g,checkType:b,memberOf:o,memberOfKey:o,userType:u,modal:z,setModal:C,id:_,processing:M,handleSelectReceiveOnly:D,handleSelectFundingSource:v,customer_id:t.customer_id,handleSelectRenderFundingSource:B,getDealerMemberDetail:p})}),e(S,{xl:"3",lg:"4",md:"5",children:e(xe,{selectedUser:y})}),e(S,{xl:"12",lg:"8",md:"7"})]})}):a(ge,{color:"danger",children:[e("h4",{className:"alert-heading",children:"User not found"}),a("div",{className:"alert-body",children:["User with id: ",_," doesn't exist. Check list of all Users:"," ",e(he,{to:"/apps/user/list",children:"Users List"})]})]})};export{He as default};