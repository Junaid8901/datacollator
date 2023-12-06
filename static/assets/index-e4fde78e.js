import{r as o,K as t,L as e,V as I,a6 as T,af as B,ag as H,ai as q,a7 as W,a2 as Y}from"./index-3d883fcf.js";import{u as Z,Y as n,v as G,b as A,Z as J,V as Q,L as X,$ as U,q as ee}from"./App-5cbcf20f.js";import{R as j}from"./Row-5109e405.js";import{C as M}from"./Col-a2b04bb3.js";import{A as te}from"./Alert-a7a9f3c0.js";import{C as se}from"./Card-592ff91e.js";import{C as ae}from"./CardBody-936a8236.js";import{C as a}from"./CardText-1f2d0653.js";import{a as P}from"./apiStarts-aa5e83c1.js";import{A as le}from"./AppSideModal-062637d5.js";import{a as F}from"./ToastComponent-8641b054.js";/* empty css                  */import{m as ie,u as re,a as ne}from"./index-462ac6f0.js";const de=({selectedUser:s,handleBoolean2:f,memberArrange:L,handleSubmit:_,values:g,setValues:V,checkType:d,memberOfKey:w,userType:N,modal:l,setModal:m,processing:v,id:x,handleSelectReceiveOnly:S,handleSelectFundingSource:z,customer_id:K,handleSelectRenderFundingSource:y,getDealerMemberDetail:C})=>{const R=Z(),[D,b]=o.useState(!1),[$,c]=o.useState(!1),O=()=>{c(!0),I.delete(`${P+d}/member/${x}/`,T).then(()=>{F("error",A,"Successfully deleted"),R.goBack()}).catch(()=>{b(!0),c(!0)})},p=()=>{C(!0)};return t(se,{children:[e(ae,{children:e(j,{children:e(M,{xl:"12",lg:"12",className:"mt-2 mt-xl-0",children:t("div",{className:"user-info-wrapper",children:[t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Cluster Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:s.service_ruleset?s.cluster_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Service Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:s.service_id?s.service_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Output Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:N==="Content_By_Output"&&s.output_id?s.output_id:""})]}),t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Pcd Refset Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:s.pcd_refset_id?s.pcd_refset_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Ruleset Id"]})}),e(a,{className:"text-capitalize mb-0 ",style:{width:"80%"},children:s.ruleset_id?s.ruleset_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Snomed Code"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.snomed_code?s.snomed_code:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[t("div",{className:"user-info-title",style:{width:"15%"},children:[t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Db Type"]})," "]})," ",e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.db_type?s.db_type:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Service Ruleset"]})}),e(a,{className:" mb-0 ml-500",style:{width:"80%"},children:s.service_ruleset?s.service_ruleset:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Snomed Code Description"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.snomed_code_description?s.snomed_code_description:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Output Description"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.output_description?s.output_description:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Cluster Description"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.cluster_description?s.cluster_description:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Type"]})}),e(a,{className:"mb-0  ",style:{width:"80%"},children:s.type?s.type:"---"})]})]})})})}),e(le,{open:l,handleModal:p,title:"member",updateAble:!0,handleSubmit:_,processing:v,handleResetInputValues:()=>null}),e(G,{centeredModal:D,setCenteredModal:b,isLoading:$,onDelete:()=>O()})]})},ve=s=>{const{id:f,type:L}=J(),_=re(""),g=ie(""),V=ne(),d=Q(V),[w,N]=o.useState(),[l,m]=o.useState(""),[v,x]=o.useState(""),[S,z]=o.useState(!1),[K,y]=o.useState(!1);o.useState([]);const[C,R]=o.useState(""),D=r=>{m({...l,businessName:r.businessName,customer_id:r.id})},b=(r,i)=>{console.log(r),m({...l,dwolla_customer_fs_id:r.customer_fs_id,dwolla_customer_id:r.customer_id})},$=(r,i)=>{m({...l,[i]:r[i]})},c=r=>{I.get(`${Y}/api/pcdrefset/${f}/`,T).then(i=>{N(i.data),m({...i.data,dwolla_transfer_type:U(i.data)}),r&&z(!S)}).catch(i=>{})},O=(r,i)=>{const u=["agency","agency_role","dealer","dealer_role","sales_representative_role","company_role","repair_facility","repair_facility_role"].filter(h=>!h.includes(r));console.log("newList",u);for(let h=0;h<u.length;h++)l[u[h]]&&delete i[u[h]];console.log("data",i)};console.log("`${memberArrange}_role`",`${d}_role`),O(d,l);const p={...l,[d]:B==="dealer"?H:B==="sales_representative"?q:l[d]&&l[d].id,[`${d}_role`]:l[`${d}_role`]&&l[`${d}_role`].id,member_of:g,dwolla_customer_account:l.dwolla_customer_account?l.dwolla_customer_account.id:"",dwolla_funding_source:l.dwolla_funding_source?l.dwolla_funding_source.id:"",dwolla_transfer_type:l.dwolla_transfer_type?l.dwolla_transfer_type.value:"",sender_source_dwolla:l.sender_source_dwolla?l.sender_source_dwolla.id:""};W.is_super_admin||delete p.external_admin;const E=r=>{console.log("apidatat",p),y(!0),I.patch(`${P+_}/member/${f}/`,p,T).then(i=>{F("success",A,"Successfully updated"),c(i.data),y(!1)}).catch(i=>{if(y(!1),i.response&&i.response.status===400)for(const[k,u]of Object.entries(i.response.data))F("error",A,`${ee(k)}: ${u}`)})};return o.useEffect(()=>{c()},[]),w!=null?e("div",{className:"app-user-view",children:t(j,{children:[e(M,{xl:"12",lg:"12",md:"12",children:e(de,{selectedUser:w,getData:c,dealerRole:v,setDealer:R,setDealerRole:x,dealer:C,memberArrange:d,handleSubmit:E,values:l,setValues:m,checkType:_,memberOf:g,memberOfKey:g,userType:L,modal:S,setModal:z,id:f,processing:K,handleSelectReceiveOnly:D,handleSelectFundingSource:b,customer_id:l.customer_id,handleSelectRenderFundingSource:$,getDealerMemberDetail:c})}),e(M,{xl:"12",lg:"8",md:"7"})]})}):t(te,{color:"danger",children:[e("h4",{className:"alert-heading",children:"User not found"}),t("div",{className:"alert-body",children:["User with id: ",f," doesn't exist. Check list of all Users:"," ",e(X,{to:"/apps/user/list",children:"Users List"})]})]})};export{ve as default};