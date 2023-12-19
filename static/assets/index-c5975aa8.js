import{J as r,r as s,K as a,U as i,a1 as p,a5 as g}from"./index-67acb5a9.js";import{A as ue}from"./AppCard-bb24aa62.js";import{a as S}from"./ToastComponent-252645f5.js";import{C as me}from"./CardBody-73830640.js";import{F as G,P as he,k as J,n as K,C as A,Y as fe,V as ge}from"./App-ce653d86.js";import{T as Se}from"./Table-63808cde.js";import{A as be}from"./AlertComponent-a4438a5a.js";import{U as _e}from"./index-9933d28c.js";import"./react-paginate-f55c1d30.js";import{P as je}from"./PaginationComponent-c4a997ab.js";import{d as xe}from"./getCalenderData-9836b40c.js";import{M as Ne}from"./ModalForDelete-298e5394.js";import{d as W}from"./TooltipControl-9379d2bb.js";import{D as Ce}from"./DealerAdminButton-7238082e.js";import{S as Pe}from"./SingleAsyncPagination-bc669003.js";import{A as $e}from"./AppSideModal-b948d1f2.js";import{I as we}from"./Input-55b2ccf9.js";import{L as Y}from"./Label-f521c803.js";import"./Card-4fea091a.js";import"./CardTitle-5ac35081.js";import"./Alert-da2d672f.js";import"./moment-fbc5633a.js";import"./index-a489c0fd.js";/* empty css                  */function Me({open:$,setOpen:E,agreementError:w,handleCreate:b,handleUpdate:U,checkDisabled:M,dealerEmail:F,handleChange:_,setValue:v,value:u,CreateProjectHandleModal:k,UpdateProjectHandleModal:y,handleChangeSelect:j,selectProject:l,buttonName:q,err:m}){return r(s.Fragment,{children:[" ",r(G,{children:[a(Y,{children:"Project Name"}),a(we,{type:"text",value:u.name,onChange:_("name")})]})," ",r(G,{children:[a(Y,{for:"title",children:"pcd"}),a(Pe,{parentFunction:j("pcd_refsets"),value:u.pcd_refsets,name:"pcd_refsets",id:"id_type_of_claim",projectName:"db_type",selector:"id",errClass:m.includes("pcd_refsets"),isClearable:!0,isMulti:!0,isNot:!0,placeholder:"Select Type of pcd_refsets"})]})]})}function tt(){s.useState([]),he(),s.useState({content:""});const[$,E]=s.useState([]),[w,b]=s.useState([]),[U,M]=s.useState([]),[F,_]=s.useState([]),[v,u]=s.useState([]),[k,y]=s.useState([]),[j,l]=s.useState(!1);s.useState(!1);const[q,m]=s.useState(!1),[ve,D]=s.useState(!0);s.useState(!0);const[T,x]=s.useState(!1),[H,c]=s.useState(!1),[O,R]=s.useState(),[I,L]=s.useState(),[z,ke]=s.useState([]),[N,V]=s.useState(!1),[C,h]=s.useState(!1),[ye,Q]=s.useState(),[X,Z]=s.useState(!1),[ee,te]=s.useState(1),[n,f]=s.useState({name:"",project_name:" ",pcd_refsets:[]}),P=()=>{i.get(`${p}/api/pcd-projects/`).then(e=>{y(e.data.results),l(!1),b(1),u([]);for(let t=0;t<e.data.total_pages;++t)u(o=>o.concat(t+1));M(e.data.page_number+1),_(e.data.page_number-1),e.data.to===e.data.count?(m(!0),D(!1)):e.data.from===1?(m(!1),D(!0)):(m(!1),D(!1))})};s.useEffect(()=>{P()},[]);const ae=e=>{l(!0),b(e),i.get(`${p}/api/pcd-projects/?page=${e}`,{AuthHeaders:g}).then(t=>{y(t.data.results),l(!1),l(!1),b(t.data.page_number),M(t.data.page_number+1),_(t.data.page_number-1)}).catch(()=>l(!1))},se=e=>{c(!0),i.delete(`${p}/api/pcd-projects/${O}/`,g).then(t=>{c(!1),x(!1),P()}).catch(t=>{if(c(!1),t.response&&t.response.status===400)for(const[o,d]of Object.entries(t.response.data))S("error",Info,`${K(o)}: ${d}`)})},re=e=>{c(!0),i.get(`${p}/api/pcd-projects/${e}/`,g).then(t=>{f({...n,name:t.data.project_name,pcd_refsets:t.data.pcd_refsets}),c(!1),x(!1),P()}).catch(t=>{if(c(!1),t.response&&t.response.status===400)for(const[o,d]of Object.entries(t.response.data))S("error",Info,`${K(o)}: ${d}`)})};s.useEffect(()=>{},[]);const oe=e=>t=>{f({...n,[e]:t.target.value})},ne=()=>{const e={project_id:I,source:"pcd_project"};i.post(`${p}/api/exported/`,e,g).then(t=>{S("success",A,"Successfully export")}).catch(t=>{})},B=()=>{if(h(!0),!n.name)S("error",A,"Enter project name");else{const e={project_name:n.name,pcd_refsets:n.pcd_refsets.map(t=>t.id),remove:!0};i.put(`${p}/api/pcd-projects/${O}/`,e,g).then(t=>{h(!1),P(),S("success",A,"Successfully create"),f({...n,name:""})}).catch(t=>{})}},ce=(e,t,o)=>{e.target.checked?(L(t),V({...N,tester:N})):(L(),z.includes(w)&&L(),V({...N,tester:N}))},le=e=>t=>{f({...n,[e]:t});const o=$.filter(d=>d!==e);E(o)},de=()=>{c(!1),Z(!1)},ie=()=>{h(!C)},pe=e=>r(s.Fragment,{children:[a(W,{target:`delete-${e}`,Icon:fe,title:"Edit",action:()=>{R(e.id),h(!C),re(e.id),te(1)}}),a(W,{target:`delete-${e}`,Icon:ge,title:"Delete",action:()=>{R(e.id),x(!T)}})]});return r(s.Fragment,{children:[r(ue,{children:[r("div",{className:"d-flex align-items-center justify-content-between p-1",children:[a("div",{children:a("h3",{className:"m-0",children:"Project"})}),a("div",{children:a(Ce,{onClick:ne,disabled:!I,children:"Export"})})]}),a(_e,{blocking:j,children:k.length?r(Se,{responsive:!0,children:[a("thead",{children:r("tr",{children:[a("th",{className:"text-nowrap",children:a(J,{type:"checkbox",id:"invoice-select-all",label:"",disabled:!0})}),a("th",{scope:"col",className:"text-nowrap",children:"id"}),a("th",{scope:"col",className:"text-nowrap",children:"Name"})," ",a("th",{scope:"col",className:"text-nowrap",children:"total pcd"}),a("th",{scope:"col",className:"text-nowrap",children:"create Date"}),a("th",{scope:"col",className:"text-nowrap text-right",children:"action"})]})}),a("tbody",{children:k.map((e,t)=>r("tr",{children:[a("th",{children:a(J,{type:"checkbox",id:`department-${e.id}-${t}`,checked:I===e.id,onChange:o=>ce(o,e.id),disabled:""})}),a("td",{className:"text-nowrap cursor-pointer",children:e.id}),a("td",{className:"text-nowrap cursor-pointer  ",children:e?e.project_name:"---"})," ",a("td",{className:"text-nowrap cursor-pointer  ",children:e?e.total_count:"---"})," ",r("td",{className:"text-nowrap",children:[" ",xe(e.created_at)]}),a("td",{className:"text-right",onClick:()=>Q(e.id),children:pe(e)})]},t))})]}):a(me,{children:a(be,{color:"danger",msg:"No results found!"})})}),v.length>1&&a(je,{pageList:v,page:w,next:U,prev:F,paginate:ae,isLoading:j})]}),a(Ne,{isLoading:H,centeredModal:T,setCenteredModal:x,onDelete:se}),a($e,{open:C,handleModal:ie,title:"member",updateAble:X,handleSubmit:B,processing:H,handleResetInputValues:de,children:a(Me,{open:C,setOpen:h,handleChange:oe,setValue:f,value:n,CreateProjectHandleModal:B,selectProject:ee,buttonName:"Update",handleChangeSelect:le,err:$})})]})}export{tt as default};
