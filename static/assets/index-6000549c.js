import{r as a,J as o,K as t,U as u,a1 as m,a5 as I}from"./index-a78e1d6d.js";import{A as B}from"./AppCard-5dd622ab.js";import{a as P}from"./ToastComponent-995c97dd.js";import{C as L}from"./CardBody-d3a746c0.js";import{T as E}from"./Table-425d6904.js";import{P as H,n as J,V as K}from"./App-efc1b7be.js";import{S as O,A as R}from"./SkeletonComponent-fa92aef4.js";import{U as V}from"./index-bfeadac6.js";import"./react-paginate-533e7335.js";import{P as W}from"./PaginationComponent-725cecce.js";import{d as q}from"./getCalenderData-9836b40c.js";import{M as z}from"./ModalForDelete-2d2637c0.js";import{a as G}from"./TooltipControl-f0c53da5.js";import"./Card-d18638bb.js";import"./CardTitle-4fff166c.js";import"./AdminButton-84e07a20.js";import"./Alert-123a8cd6.js";import"./moment-fbc5633a.js";function Q(){a.useState([]),H(),a.useState({content:""}),a.useState([]);const[_,n]=a.useState([]),[v,h]=a.useState([]),[$,f]=a.useState([]),[g,x]=a.useState([]),[N,w]=a.useState([]),[S,r]=a.useState(!1);a.useState(!1);const[X,l]=a.useState(!1),[Y,c]=a.useState(!0);a.useState(!0);const[D,d]=a.useState(!1),[F,i]=a.useState(!1),[M,y]=a.useState(!1),[A,b]=a.useState(!1),C=()=>{u.get(`${m}/api/exported/`).then(e=>{console.log(e),w(e.data.results),r(!1),n(1),b(!0),x([]);for(let s=0;s<e.data.total_pages;++s)x(p=>p.concat(s+1));h(e.data.page_number+1),f(e.data.page_number-1),e.data.to===e.data.count?(l(!0),c(!1)):e.data.from===1?(l(!1),c(!0)):(l(!1),c(!1))}).catch(e=>{b(!0)})};a.useEffect(()=>{C()},[]);const T=e=>{r(!0),n(e),u.get(`${m}/api/exported/?page=${e}`,{AuthHeaders:I}).then(s=>{w(s.data.results),r(!1),r(!1),n(s.data.page_number),h(s.data.page_number+1),f(s.data.page_number-1)}).catch(()=>r(!1))},j=e=>{i(!0),u.delete(`${m}/api/exported/${M}/`,I).then(s=>{P("error",Info,"Successfully Deleted"),i(!1),d(!1),C()}).catch(s=>{if(i(!1),s.response&&s.response.status===400)for(const[p,U]of Object.entries(s.response.data))P("error",Info,`${J(p)}: ${U}`)})},k=e=>t(a.Fragment,{children:t(G,{target:`delete-${e}`,Icon:K,title:"Delete",action:()=>{y(e.id),d(!D)}})});return o(a.Fragment,{children:[o(B,{children:[t("div",{className:"d-flex align-items-center justify-content-between p-1",children:t("div",{children:t("h3",{className:"m-0",children:"Download File"})})}),A?t(V,{blocking:S,children:N.length?o(E,{responsive:!0,children:[t("thead",{children:o("tr",{children:[t("th",{scope:"col",className:"text-nowrap",children:"id"}),t("th",{scope:"col",className:"text-nowrap",children:"Name"})," ",t("th",{scope:"col",className:"text-nowrap",children:"source"}),t("th",{scope:"col",className:"text-nowrap",children:"status"}),t("th",{scope:"col",className:"text-nowrap ",children:"File"})," ",t("th",{scope:"col",className:"text-nowrap",children:"create Date"}),t("th",{scope:"col",className:"text-nowrap text-right",children:"action"})]})}),t("tbody",{children:N.map((e,s)=>o("tr",{children:[t("td",{className:"text-nowrap cursor-pointer",children:e.id}),t("td",{className:"text-nowrap cursor-pointer  ",children:e.user_detail.name?e.user_detail.name:"---"})," ",t("td",{className:"text-nowrap",children:e.source?e.source:"---"}),t("td",{className:"text-nowrap",children:(e.status==="In progress",e.status)}),t("td",{className:"text-nowrap cursor-pointer costume-class ",children:t("a",{href:e.file,className:"file-list a",children:"Download"})})," ",o("td",{className:"text-nowrap",children:[" ",q(e.created_at)]}),t("td",{className:"text-right",onClick:()=>setDid(e.id),children:k(e)})]},s))})]}):t(L,{children:t(R,{color:"danger",msg:"No results found!"})})}):t(L,{children:t(O,{})}),g.length>1&&t(W,{pageList:g,page:_,next:v,prev:$,paginate:T,isLoading:S})]}),t(z,{isLoading:F,centeredModal:D,setCenteredModal:d,onDelete:j})]})}function xe(){return t(Q,{})}export{xe as default};
