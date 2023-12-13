import{r as o,K as t,L as e,V as A,a6 as I,ah as j,aj as H,ak as Q,a7 as W,a2 as q}from"./index-2d311879.js";import{u as G,P as n,b as M,Q as J,A as X,L as Y,V as Z,n as U}from"./App-2483e876.js";import{R as B}from"./Row-baaf3703.js";import{C as T}from"./Col-e0c46088.js";import{A as ee}from"./Alert-95e83888.js";import{C as te}from"./Card-0873846d.js";import{C as se}from"./CardBody-4add9265.js";import{C as a}from"./CardText-daa5b609.js";import{a as P}from"./apiStarts-175698d9.js";import{M as ae}from"./ModalForDelete-e2812b3d.js";import"./DealerAdminButton-4fadf9af.js";import{A as le}from"./AppSideModal-e45929e2.js";import{a as F}from"./ToastComponent-231ab741.js";/* empty css                  */import{m as ie,u as re,a as ne}from"./index-fe8611b3.js";/* empty css                  */const de=({selectedUser:s,handleBoolean2:f,memberArrange:L,handleSubmit:_,values:g,setValues:V,checkType:d,memberOfKey:w,userType:N,modal:l,setModal:m,processing:v,id:x,handleSelectReceiveOnly:S,handleSelectFundingSource:z,customer_id:k,handleSelectRenderFundingSource:y,getDealerMemberDetail:C})=>{const R=G(),[D,b]=o.useState(!1),[$,c]=o.useState(!1),O=()=>{c(!0),A.delete(`${P+d}/member/${x}/`,I).then(()=>{F("error",M,"Successfully deleted"),R.goBack()}).catch(()=>{b(!0),c(!0)})},p=()=>{C(!0)};return t(te,{children:[e(se,{children:e(B,{children:e(T,{xl:"12",lg:"12",className:"mt-2 mt-xl-0",children:t("div",{className:"user-info-wrapper",children:[t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Cluster Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:s.service_ruleset?s.cluster_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Service Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:s.service_id?s.service_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Output Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:N==="Content_By_Output"&&s.output_id?s.output_id:""})]}),t("div",{className:"d-flex flex-wrap align-items-center",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Pcd Refset Id"]})}),e(a,{className:"mb-0",style:{width:"80%"},children:s.pcd_refset_id?s.pcd_refset_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Ruleset Id"]})}),e(a,{className:"text-capitalize mb-0 ",style:{width:"80%"},children:s.ruleset_id?s.ruleset_id:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Snomed Code"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.snomed_code?s.snomed_code:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[t("div",{className:"user-info-title",style:{width:"15%"},children:[t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Db Type"]})," "]})," ",e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.db_type?s.db_type:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Service Ruleset"]})}),e(a,{className:" mb-0 ml-500",style:{width:"80%"},children:s.service_ruleset?s.service_ruleset:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Snomed Code Description"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.snomed_code_description?s.snomed_code_description:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Output Description"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.output_description?s.output_description:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0",children:[e(n,{size:15})," Cluster Description"]})}),e(a,{className:"text-capitalize mb-0",style:{width:"80%"},children:s.cluster_description?s.cluster_description:"---"})]}),t("div",{className:"d-flex flex-wrap align-items-center my-50",children:[e("div",{className:"user-info-title",style:{width:"15%"},children:t(a,{tag:"span",className:"user-info-title font-weight-bold mb-0 ",children:[e(n,{size:15})," Type"]})}),e(a,{className:"mb-0  ",style:{width:"80%"},children:s.type?s.type:"---"})]})]})})})}),e(le,{open:l,handleModal:p,title:"member",updateAble:!0,handleSubmit:_,processing:v,handleResetInputValues:()=>null}),e(ae,{centeredModal:D,setCenteredModal:b,isLoading:$,onDelete:()=>O()})]})},ze=s=>{const{id:f,type:L}=J(),_=re(""),g=ie(""),V=ne(),d=X(V),[w,N]=o.useState(),[l,m]=o.useState(""),[v,x]=o.useState(""),[S,z]=o.useState(!1),[k,y]=o.useState(!1);o.useState([]);const[C,R]=o.useState(""),D=r=>{m({...l,businessName:r.businessName,customer_id:r.id})},b=(r,i)=>{console.log(r),m({...l,dwolla_customer_fs_id:r.customer_fs_id,dwolla_customer_id:r.customer_id})},$=(r,i)=>{m({...l,[i]:r[i]})},c=r=>{A.get(`${q}/api/pcdrefset/${f}/`,I).then(i=>{N(i.data),m({...i.data,dwolla_transfer_type:Z(i.data)}),r&&z(!S)}).catch(i=>{})},O=(r,i)=>{const u=["agency","agency_role","dealer","dealer_role","sales_representative_role","company_role","repair_facility","repair_facility_role"].filter(h=>!h.includes(r));console.log("newList",u);for(let h=0;h<u.length;h++)l[u[h]]&&delete i[u[h]];console.log("data",i)};console.log("`${memberArrange}_role`",`${d}_role`),O(d,l);const p={...l,[d]:j==="dealer"?H:j==="sales_representative"?Q:l[d]&&l[d].id,[`${d}_role`]:l[`${d}_role`]&&l[`${d}_role`].id,member_of:g,dwolla_customer_account:l.dwolla_customer_account?l.dwolla_customer_account.id:"",dwolla_funding_source:l.dwolla_funding_source?l.dwolla_funding_source.id:"",dwolla_transfer_type:l.dwolla_transfer_type?l.dwolla_transfer_type.value:"",sender_source_dwolla:l.sender_source_dwolla?l.sender_source_dwolla.id:""};W.is_super_admin||delete p.external_admin;const E=r=>{console.log("apidatat",p),y(!0),A.patch(`${P+_}/member/${f}/`,p,I).then(i=>{F("success",M,"Successfully updated"),c(i.data),y(!1)}).catch(i=>{if(y(!1),i.response&&i.response.status===400)for(const[K,u]of Object.entries(i.response.data))F("error",M,`${U(K)}: ${u}`)})};return o.useEffect(()=>{c()},[]),w!=null?e("div",{className:"app-user-view",children:t(B,{children:[e(T,{xl:"12",lg:"12",md:"12",children:e(de,{selectedUser:w,getData:c,dealerRole:v,setDealer:R,setDealerRole:x,dealer:C,memberArrange:d,handleSubmit:E,values:l,setValues:m,checkType:_,memberOf:g,memberOfKey:g,userType:L,modal:S,setModal:z,id:f,processing:k,handleSelectReceiveOnly:D,handleSelectFundingSource:b,customer_id:l.customer_id,handleSelectRenderFundingSource:$,getDealerMemberDetail:c})}),e(T,{xl:"12",lg:"8",md:"7"})]})}):t(ee,{color:"danger",children:[e("h4",{className:"alert-heading",children:"User not found"}),t("div",{className:"alert-body",children:["User with id: ",f," doesn't exist. Check list of all Users:"," ",e(Y,{to:"/apps/user/list",children:"Users List"})]})]})};export{ze as default};