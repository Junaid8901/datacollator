import{y as t,z as d}from"./App-efc1b7be.js";const g=e=>{const r=new URLSearchParams(window.location.search).get(e);return e==="page"?r||1:r&&r!==null?r:""},S=(e,n)=>{const a=new URLSearchParams(window.location.search).get(e);if(a){const i=a.replace(/ /g,"+"),m="encrypted-name",p=t.AES.decrypt(i,m).toString(t.enc.Utf8),c=JSON.parse(p).split("="),o={[n||"name"]:c[1],id:parseInt(c[3])};return console.log("dict",o),o}else return""},f=(e,n)=>{const r="encrypted-name";if(e){const a=`name=${e[n||"name"]}=id=${e.id}`;return t.AES.encrypt(JSON.stringify(a),r).toString()}else return""},s={admin:"administrator",sr:"sales-representative",dealer:"dealer",rf:"repair-facility",agency:"agency"},h=e=>e===s.admin||e==="admin"?"company":e===s.sr?"sr":e,P=e=>e===s.admin?"company":e,w=e=>e===s.admin?"admin":d(e);export{P as a,S as d,f as e,w as m,g as q,h as u};