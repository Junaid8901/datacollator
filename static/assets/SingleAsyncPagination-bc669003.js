import{K as l,p as o,a5 as N}from"./index-67acb5a9.js";import{A as j}from"./index-a489c0fd.js";const c=({childUrl:P,parentFunction:d,value:g,err:J,errClass:m,setErr:i,placeholder:h,leinHolder:$,disabled:u,reload:O,noResult:S,isClearable:b,isMulti:f,vehicle_type:t,selector:e,url:x,projectName:r,isNot:y})=>{const A=async(n,q,{page:p})=>{const a=await(await fetch(`${x}?${r||"name"}=${n}&page=${p}${t?`&vehicle_type=${t}`:""}`,N)).json();return console.log("responseJSON",a),{options:S?a:a.results.map(s=>({...s,[e||"name"]:s.project_name?s.project_name:s.name})),hasMore:a.next,additional:{page:n?2:p+1}}};return console.log("responseJSON",e),l("div",{className:`${m&&"border-danger-c"} ${$&&"leinholder-height"}`,children:l(j,{value:g,loadOptions:!y&&A,isDisabled:u,onChange:n=>{i&&i([]),d(n)},classNamePrefix:"select",getOptionLabel:n=>e?n[e]:n.name,getOptionValue:n=>e?n[e]:n.name,isMulti:f,cacheUniqs:[O],isSearchable:!0,isClearable:b,placeholder:h,additional:{page:1}})})};c.propTypes={regionName:o.string.isRequired,value:o.object,onChange:o.func};const T=c;export{T as S};
