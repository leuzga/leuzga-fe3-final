import{r as i,T as p,j as s,g as F}from"./index-BskJNlQ1.js";import{u as f}from"./Api-C_tf4VWv.js";import{C as g}from"./Card-CSQnmucW.js";const A=()=>{const{users:m,loading:n,error:r}=f(),[a,c]=i.useState([]),[d,l]=i.useState({}),{theme:v}=i.useContext(p),{detailContent:x}=F(v);i.useEffect(()=>{const e=JSON.parse(localStorage.getItem("favorites"))||[];c(e);const o={};e.forEach(t=>{o[t.id]=!0}),l(o)},[]);const h=i.useCallback(e=>{if(!a.some(t=>t.id===e.id)){const t=[...a,e];c(t),l({...d,[e.id]:!0}),localStorage.setItem("favorites",JSON.stringify(t))}},[a,d]);return s.jsx("main",{style:{marginTop:"70px"},children:s.jsxs("div",{className:x,children:[s.jsx("h1",{children:"Home"}),s.jsx("h2",{children:"Odontologos Disponibles para Citas"}),s.jsxs("div",{className:"card-grid",children:[n&&s.jsx("div",{children:"Loading..."}),r&&s.jsxs("div",{children:["Error: ",r]}),!n&&!r&&m.map(e=>s.jsx("div",{children:s.jsx(g,{id:e.id,name:e.name,username:e.username,website:e.website,onAddToFavorites:h,isFavorite:a.some(o=>o.id===e.id),disabled:d[e.id],messageBtn:d[e.id]?"Added to Favorites":"Add to Favorites"},e.id)},e.id))]})]})})};export{A as default};
