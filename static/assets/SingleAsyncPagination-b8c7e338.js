import{L as p,p as s,a6 as b}from"./index-3d883fcf.js";import{ai as A}from"./App-5cbcf20f.js";const c=({childUrl:N,parentFunction:d,value:g,err:P,errClass:l,setErr:i,placeholder:m,leinHolder:h,disabled:u,reload:$,noResult:f,isClearable:x,isMulti:y,vehicle_type:o,selector:n,url:O})=>{const S=async(a,j,{page:t})=>{const e=await(await fetch(`${O}?name=${a}&page=${t}${o?`&vehicle_type=${o}`:""}`,b)).json();return{options:f?e:e.results.map(r=>({...r,[n||"name"]:r.name})),hasMore:e.next,additional:{page:a?2:t+1}}};return p("div",{className:`${l&&"border-danger-c"} ${h&&"leinholder-height"}`,children:p(A,{value:g,loadOptions:S,disabled:u,onChange:a=>{i&&i([]),d(a)},classNamePrefix:"select",getOptionLabel:a=>n?a[n]:a.name,getOptionValue:a=>n?a[n]:a.name,isMulti:y,cacheUniqs:[$],isSearchable:!0,isClearable:x,placeholder:m,additional:{page:1}})})};c.propTypes={regionName:s.string.isRequired,value:s.object,onChange:s.func};const C=c;export{C as S};
