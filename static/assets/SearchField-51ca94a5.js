import{K as g,c as q,J as r,p as c,a5 as y}from"./index-67acb5a9.js";import{A as J}from"./index-a489c0fd.js";const $=({childUrl:i,parentFunction:h,value:l,err:T,errClass:u,setErr:t,placeholder:b,name:m,warningClass:x,selector:e,emailGet:F,multi:n,className:O,noResults:N,id:S,reload:f,findingSource:o,underwriter:p,reinsurance:j,underwriterId:v,reinsuranceId:A,isClearable:w})=>{const C=async(a,G,{page:s})=>{const M=p?`${i}?name=${a}&underwriter=${v}&page=${s}`:`${i}?name=${a}&reinsurance=${A}&page=${s}`,P=j||p?M:`${i}?name=${a}&page=${s}`,d=await(await fetch(P,y)).json();return{options:N?d:d.results,hasMore:d.next,additional:{page:a?2:s+1}}};return g("div",{className:q(O,{"border-danger-c":u,"border-warning-c":x}),children:g(J,{value:l||"",isMulti:n,loadOptions:C,name:m,id:S,onChange:a=>{t&&t([]),h(a,m)},cacheUniqs:[f],classNamePrefix:"select",getOptionLabel:a=>n?e?a[e]:a.name:r("div",{children:[e?a[e]:a.name," ",o&&r("small",{children:["(",a.name,")"]})]}),getOptionValue:a=>n?e?a[e]:a.name:r("div",{children:[e?a[e]:a.name," ",o&&r("small",{children:["(",a.name,")"]})]}),closeMenuOnSelect:!n,isSearchable:!0,isClearable:!w,placeholder:b,additional:{page:1}})})};$.propTypes={regionName:c.string.isRequired,value:c.object,onChange:c.func};const R=$;export{R as S};