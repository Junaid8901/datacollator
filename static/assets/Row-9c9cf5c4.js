import{p as e,t as p,_ as T,m as b,c as x,a as h,b as y}from"./index-52a95e7f.js";var N=["xs","sm","md","lg","xl"],o=e.oneOfType([e.number,e.string]),M={tag:p,noGutters:e.bool,className:e.string,cssModule:e.object,form:e.bool,xs:o,sm:o,md:o,lg:o,xl:o},P={tag:"div",widths:N},r=function(s){var m=s.className,u=s.cssModule,n=s.noGutters,d=s.tag,i=s.form,f=s.widths,l=T(s,["className","cssModule","noGutters","tag","form","widths"]),c=[];f.forEach(function(a,g){var t=s[a];if(delete l[a],!!t){var v=!g;c.push(v?"row-cols-"+t:"row-cols-"+a+"-"+t)}});var w=b(x(m,n?"no-gutters":null,i?"form-row":"row",c),u);return h.createElement(d,y({},l,{className:w}))};r.propTypes=M;r.defaultProps=P;const G=r;export{G as R};
