import{P as a,F as e,r as b,p as $,aa as k,a6 as G}from"./index-52a95e7f.js";import{F as P}from"./FormFeedback-32f35877.js";import{F as c,I as F,ah as L,ac as R,m as V}from"./App-a255ea7a.js";import{a as j,b as E,c as U,I as T}from"./index-2428db70.js";import{L as d}from"./Label-e92a3cb1.js";import{F as B}from"./index-6b666643.js";function M(){return a("div",{className:"inline-spinner",children:[e("span",{}),e("span",{}),e("span",{})]})}function W({values:t,setValues:S,invalid:n,setInvalid:w,valid:p,setValid:h,handleChange:s,updateAble:i,passErrors:m,setDateOfBirth:u,dateOfBirth:g}){const[f,y]=b.useState(!1);return a(b.Fragment,{children:[a(c,{children:[e(d,{children:"Email"}),a(j,{className:"input-group-merge",children:[e(F,{onChange:s("email"),valid:p,invalid:n,value:t.email,name:"email",disabled:i,autoComplete:"off"}),e(E,{addonType:"append",children:e(U,{children:f&&e(M,{})})})]}),n&&e(P,{children:"Email already exist"})]}),a(c,{children:[e(d,{children:"First Name"}),e(F,{onChange:s("first_name"),disabled:n||i,value:t.first_name})]}),a(c,{children:[e(d,{children:"Last Name"}),e(F,{onChange:s("last_name"),disabled:n||i,value:t.last_name})]}),a(c,{children:[e(d,{children:"Phone"}),e(F,{onChange:s("phone"),disabled:n||i,value:t.phone,name:"phone"})]}),a(c,{children:[e(d,{children:"Date of Birth"}),e(B,{autocomplete:!1,value:g,id:"range-picker",placeholder:"To date",className:"form-control",onChange:l=>u(l),prepend:!1,options:{dateFormat:"m/d/Y",allowInput:!0,autocomplete:!1,autoFillDefaultTime:!1,errorHandler:!0}})]}),a(c,{children:[e(d,{children:"Password"}),e(T,{onChange:s("password"),disabled:n||i,value:t.password})]}),m&&m.map((l,r)=>e(P,{children:l},r)),a(c,{children:[e(d,{children:"Confirm password"}),e(T,{onChange:s("confirmpassword"),disabled:n||i,value:t.confirmpassword})]})]})}const C=({childUrl:t,parentFunction:S,value:n,err:w,errClass:p,setErr:h,placeholder:s,leinHolder:i,disabled:m,reload:u,noResult:g,isClearable:f,isMulti:y,vehicle_type:l,selector:r,url:_})=>{const O=async(o,v,{page:x})=>{const I=await(await fetch(`${_}?name=${o}&page=${x}${l?`&vehicle_type=${l}`:""}`,k)).json();return{options:g?I:I.results.map(N=>({...N,[r||"name"]:N.name})),hasMore:I.next,additional:{page:o?2:x+1}}};return e("div",{className:`${p&&"border-danger-c"} ${i&&"leinholder-height"}`,children:e(L,{value:n,loadOptions:O,disabled:m,onChange:o=>{h&&h([]),S(o)},classNamePrefix:"select",getOptionLabel:o=>r?o[r]:o.name,getOptionValue:o=>r?o[r]:o.name,isMulti:y,cacheUniqs:[u],isSearchable:!0,isClearable:f,placeholder:s,additional:{page:1}})})};C.propTypes={regionName:$.string.isRequired,value:$.object,onChange:$.func};const q=C;function X({handleBoolean:t,handleChange:S,values:n,handleChangeSelect:w,userType:p,checkType:h,memberArrange:s,handleSelectReceiveOnly:i,customer_id:m,handleSelectFundingSource:u,handleSelectRenderFundingSource:g,handleBoolean2:f,setValues:y}){const l=R();return a(b.Fragment,{children:[p!=="repair-facility"&&e(b.Fragment,{}),a(c,{children:[a(d,{children:[V(p)," role"]}),e(q,{url:`${G}/api/role/`,reload:l.pathname,parentFunction:r=>w("user_role",r),value:n.user_role})]})]})}export{W as E,X as M};