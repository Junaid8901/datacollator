import{p as e,t as w,b as M,ad as O,m as c,c as i,d as j,e as E}from"./index-2d311879.js";var N=["xs","sm","md","lg","xl"],v=e.oneOfType([e.number,e.string]),n=e.oneOfType([e.bool,e.number,e.string,e.shape({size:e.oneOfType([e.bool,e.number,e.string]),order:v,offset:v})]),z={tag:w,xs:n,sm:n,md:n,lg:n,xl:n,className:e.string,cssModule:e.object,widths:e.array},L={tag:"div",widths:N},g=function(r,o,a){return a===!0||a===""?r?"col":"col-"+o:a==="auto"?r?"col-auto":"col-"+o+"-auto":r?"col-"+a:"col-"+o+"-"+a},d=function(r){var o=r.className,a=r.cssModule,C=r.widths,T=r.tag,m=M(r,["className","cssModule","widths","tag"]),t=[];C.forEach(function(u,h){var s=r[u];if(delete m[u],!(!s&&s!=="")){var f=!h;if(O(s)){var l,p=f?"-":"-"+u+"-",P=g(f,u,s.size);t.push(c(i((l={},l[P]=s.size||s.size==="",l["order"+p+s.order]=s.order||s.order===0,l["offset"+p+s.offset]=s.offset||s.offset===0,l)),a))}else{var x=g(f,u,s);t.push(x)}}}),t.length||t.push("col");var y=c(i(o,t),a);return j.createElement(T,E({},m,{className:y}))};d.propTypes=z;d.defaultProps=L;const $=d;export{$ as C};