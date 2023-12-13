import{L as e,K as c,a2 as D,ak as Q,a1 as be,r as l,aa as ne,V as re,a6 as te,ab as V}from"./index-2d311879.js";import{R as ge}from"./Row-baaf3703.js";import{C as o}from"./Col-e0c46088.js";import{C as _e}from"./Card-0873846d.js";import{C as q}from"./CardBody-4add9265.js";import{F as ve}from"./Form-214e9b0e.js";import{A as Se,F as i,I as _,O as $,$ as le,a0 as x,a1 as F,a2 as Ce,a3 as G,a4 as we,a5 as Ne,a6 as $e,S as xe,Q as ce,u as Fe,a7 as ae,U as Me,a8 as De,Z as Ue,W as Be,b as Ie,R as Oe}from"./App-2483e876.js";import{S as M}from"./SearchField-14e7ba37.js";import{D as Ae}from"./DealerAdminButton-4fadf9af.js";/* empty css                  */import{F as oe}from"./index-9047f434.js";import{f as ie,d as Re}from"./getCalenderData-9836b40c.js";import{a as se}from"./apiStarts-175698d9.js";import{A as Le}from"./AppCard-487527ab.js";import{T as ke}from"./Table-424cb917.js";import{S as Te,P as ze}from"./Pagination-0da0c60d.js";import{A as Ee}from"./react-paginate-21a7ab7f.js";import{d as de}from"./TooltipControl-6ccc75fc.js";import{M as He}from"./ModalForDelete-e2812b3d.js";import{a as je}from"./ToastComponent-231ab741.js";import{U as Ke}from"./index-bcb40917.js";import"./index-ff7c4dc5.js";import"./moment-fbc5633a.js";import"./CardTitle-7e91e84e.js";import"./Alert-95e83888.js";function Qe({searchParam:n,setSearchParam:d,handleList:m,isLoading:U,searchByName:h,searchByDealerNumber:O,searchByDealer:A,searchByModelGroup:W,searchByUnderwritter:R,searchByVehicleType:Z,searchByReinsurance:v,isDataLoaded:y,showWarning:S,searchBySR:L,searchByAgent:B,searchByMemberType:b,searchBymemberOf:J,searchByAdmin:k,remitType:p,searchByDealerMember:I,disabled:T,searchByStartDate:z,searchByEndDate:E,searchByMinPaid:g,searchByMaxPaid:H,searchByRecieptNumber:j,searchByCustomerType:a,searchByMember:u,mem:C,children:me,namePlaceholder:X,searchByDealerUnderwriter:pe,searchByModel:Ge,isClearable:K,payable:We,memberOf:ue,searchByMoneyMovemenet:he,searchByClipType:fe}){const t=Se(p),ye=r=>{r.preventDefault(),m(!0,1)},f=r=>s=>{d({...n,[r]:s.target.value})},w=(r,s)=>{d({...n,[s]:r})},Y=(r,s)=>{d(s==="underwriter"||s==="reinsurance"?{...n,[s]:r,dealer:""}:{...n,[s]:r})},P=r=>s=>{const ee=s[0];console.log("date",ee),n[r]=Re(ee)},N=(r,s)=>{console.log("searchParam.member_type",n.member_type),console.log("e",r,"name",s),d({...n,[s]:r||"",overfund:"",misc_overfund:""})};return e(_e,{children:e(q,{children:e(ve,{onSubmit:r=>ye(r),children:c(ge,{children:[h&&e(o,{md:"3",children:e(i,{children:e(_,{type:"search",value:n.name,onChange:f("name"),placeholder:`Search by ${X||"name"}`,id:"search-by-name"})})}),O&&e(o,{md:"3",children:e(i,{children:e(_,{type:"search",value:n.dealer_number,onChange:f("dealer_number"),placeholder:"Search by dealer number",id:"search-by-dealer-number"})})}),z&&e(o,{md:"3",children:e(i,{children:e(oe,{onBlur:f("date_start"),placeholder:"From date",className:"form-control",value:n.date_start,onChange:P("date_start"),options:ie})})}),E&&e(o,{md:"3",children:e(i,{children:e(oe,{onBlur:f("date_end"),value:n.date_end,placeholder:"To date",className:"form-control",onChange:P("date_end"),options:ie})})}),g&&e(o,{md:"3",children:e(i,{children:e(_,{type:"search",id:"search-by-min-paid",placeholder:"Min paid",onChange:f("min_paid_amount"),value:n.min_paid_amount})})}),H&&e(o,{md:"3",children:e(i,{children:e(_,{type:"search",id:"search-by-max-paid",placeholder:"Max paid",onChange:f("max_paid_amount"),value:n.max_paid_amount})})}),j&&e(o,{md:"3",children:e(i,{children:e(_,{type:"search",id:"search-by-receipt-number",placeholder:"Receipt number",onChange:f("id"),value:n.od})})}),b&&e(o,{md:"3",children:e(i,{children:e($,{placeholder:"Member type",id:"search-by-member-type",value:{label:n.member_type==="Dealer"?"Policy Holder":n.member_type&&n.member_type==="Underwriter"?"Insurance company":n.member_type},options:p==="misc-overfund"?[...le,"Underwriter","Reinsurance"]:le,theme:x,className:"react-select",classNamePrefix:"select",isClearable:!1,isSearchable:!1,onChange:r=>N(r,"member_type"),components:{Option:F}})})}),a&&e(o,{md:"3",children:e(i,{children:e($,{placeholder:"Member type",id:"search-by-member-type",value:{label:n.customer_of},options:Ce,theme:x,className:"react-select",classNamePrefix:"select",isClearable:!1,isSearchable:!1,onChange:r=>N(r,"customer_of"),components:{Option:F}})})}),A&&e(o,{md:"3",children:e(i,{children:e(M,{getEmail:!0,value:n[t||"dealer"],childUrl:`${se}dealer/`,parentFunction:w,placeholder:"Policy holder",name:t||"dealer",isClearable:!K})})}),ue&&e(o,{md:"3",children:e(_,{disabled:!0,placeholder:"Select memeber of"})}),W&&e(o,{md:"3",children:e(i,{children:e(M,{value:n.model_group,childUrl:`${D}/api/company/${Q}/model/group/`,parentFunction:w,placeholder:"Model group",name:"model_group"})})}),R&&e(o,{md:"3",children:e(i,{children:e(M,{value:n[t==="misc_overfund"||t==="admin_fee"||t==="overfund"?t:"underwriter"],childUrl:`${D}/api/company/${Q}/underwriter/`,parentFunction:p==="underwriter"?Y:w,isClearable:p&&!K,placeholder:t==="misc_overfund"?"Select Insurance company":"Insurance company",warningClass:S&&!y,name:t==="misc_overfund"||t==="admin_fee"||t==="overfund"?t:"underwriter"})})}),v&&e(o,{md:"3",children:e(i,{children:e(M,{value:n[t==="misc_overfund"||t==="admin_fee"||t==="overfund"?t:"reinsurance"],childUrl:`${D}/api/company/${Q}/reinsurance/`,parentFunction:p==="reinsurance"?Y:w,isClearable:p&&!K,placeholder:t==="misc_overfund"?"Select reinsurance":"Reinsurance",name:t==="misc_overfund"||t==="admin_fee"||t==="overfund"?t:"reinsurance",warningClass:S&&!y})})}),pe&&e(o,{md:"6",children:e(i,{children:e(M,{reload:n.underwriter||n.reinsurance,value:n.dealer,childUrl:`${se}dealer/`,parentFunction:w,placeholder:G("Dealer"),showWarning:S,name:"dealer",multi:!0,underwriter:t==="underwriter",reinsurance:t==="reinsurance",reinsuranceId:n.reinsurance?n.reinsurance.id:"",underwriterId:n.underwriter?n.underwriter.id:""})})}),Z&&e(o,{md:"3",children:e(i,{children:e($,{placeholder:"Vehicle type",id:"search-by-vehicle-type",value:{label:n.vehicle_type?n.vehicle_type:"Select vehicle type"},options:we,theme:x,className:"react-select",classNamePrefix:"select",isClearable:!0,isSearchable:!1,onChange:r=>N(r,"vehicle_type"),components:{Option:F}})})}),he&&e(o,{md:"3",children:e(i,{children:e($,{placeholder:"Money movement enabled",id:"search-by-enable-money-movement",value:{label:n.enable_money_movement?n.enable_money_movement:"Select money movement enabled"},options:Ne,theme:x,className:"react-select",classNamePrefix:"select",isClearable:!0,isSearchable:!1,onChange:r=>N(r,"enable_money_movement"),components:{Option:F}})})}),fe&&e(o,{md:"3",children:e(i,{children:e($,{placeholder:"Clip type",id:"search-by-clip-type",value:{label:n.clip_type?n.clip_type:"Select clip type"},options:$e,theme:x,className:"react-select",classNamePrefix:"select",isClearable:!0,isSearchable:!1,onChange:r=>N(r,"clip_type"),components:{Option:F}})})}),c(o,{md:"3",children:[c(Ae,{type:"submit",id:"search-btn",outline:!0,disabled:U||T,children:[U?e(be,{size:"sm"}):e(xe,{size:15})," ","Search"]}),me]})]})})})})}function Ve(){const{roleType:n}=ce(),d=Fe(),[m,U]=l.useState({page:1,name:""}),[h,O]=l.useState("");l.useState(!1);const[A,W]=l.useState(!1),[R,Z]=l.useState(!1),[v,y]=l.useState(!1),[S,L]=l.useState(!1);l.useState(""),l.useState([]),l.useState(""),l.useState(!1),l.useState(!1);const[B,b]=l.useState(!1),[J,k]=l.useState(!1);l.useState([]);const[p,I]=l.useState(!1),T=()=>{d.push(`/${n}-roles/add`)},z=()=>`${D}/api/role/`,E=a=>`?page=${a||m.page}${m.name&&`&name=${m.name}`}`,g=(a,u)=>{a?b(!0):a&&u?(b(!0),setQueryParams({...queryParams,page:u})):!a&&!u&&I(!1),re.get(z()+E(u),te).then(C=>{console.log("res",C),O(C.data),b(!1),I(!0)}).catch(C=>{console.log("e",C),b(!1),I(!0)})},H=a=>c(l.Fragment,{children:[e(l.Fragment,{children:A&&R.id===a?e(Spinner,{size:"sm",color:"primary",className:"ml-1"}):e(de,{target:`edit-${a}`,Icon:Ue,title:"Edit",action:()=>{d.push(`/${n}-roles/edit/${a}`)}})}),e(de,{target:`delete-${a}`,Icon:Be,title:"Delete",action:()=>{L(a),y(!v)}})]}),j=a=>{k(!0),re.delete(`${D}/api/role/${S}/`,te).then(u=>{je("error",Ie,"Successfully deleted"),y(!v),g(),k(!1)})};return l.useEffect(()=>{g()},[window.location.href]),c(l.Fragment,{children:[e(Qe,{searchByName:!0,searchParam:m,setSearchParam:U,handleList:g,isLoading:B}),e(Le,{title:`${G(n)} roles`,button:`${G(n)} roles`,onClick:()=>T(),children:p?e(l.Fragment,{children:h&&h.results.length?c(l.Fragment,{children:[e(Ke,{blocking:B,children:c(ke,{responsive:!0,children:[e("thead",{children:c("tr",{children:[e("th",{scope:"col",className:"text-nowrap",children:"id"}),e("th",{scope:"col",className:"text-nowrap",children:"Name"}),e("th",{scope:"col",className:"text-nowrap",children:"Permissions"}),e("th",{scope:"col",className:"text-nowrap text-right",children:"Actions"})]})}),e("tbody",{children:h.results.map((a,u)=>c("tr",{children:[e("td",{className:"text-nowrap",children:ae(a.id)}),c("td",{className:"text-nowrap",children:[e(ne,{pill:!0,color:"light-primary",children:e(Me,{size:20})})," ",ae(a.name)]}),c("td",{className:"text-nowrap",children:[e(ne,{pill:!0,color:"light-success",children:e(De,{size:20})})," ",a.permissions]}),e("td",{className:"text-right",onClick:()=>L(a.id),children:H(a.id)})]},u))})]})}),h.total_pages>1&&e(ze,{action:g,pages:h,disabled:B})]}):e(q,{children:e(Ee,{color:"danger",msg:"No results found!"})})}):e(q,{children:e(Te,{})})}),e(He,{isLoading:J,centeredModal:v,setCenteredModal:y,onDelete:()=>j()})]})}function qe({children:n,permission:d}){const m=()=>V?V&&V.includes(d)?n:e(Oe,{to:"/misc/not-authorized"}):n;return e(l.Fragment,{children:m()})}function Sn(){const{roleType:n}=ce(),d=()=>{if(n==="administrator")return"view_companyrole"};return e(l.Fragment,{children:e(qe,{permission:d(),children:e(Ve,{})})})}export{Sn as default};
