import{r as i,T as x,j as s,g as F}from"./index-DNt-Zun7.js";import{u as g,C as f}from"./Card-BIoQZOaP.js";const u=()=>{const{users:m,loading:n,error:d}=g(),[a,c]=i.useState([]),[r,l]=i.useState({}),{theme:v}=i.useContext(x),{cardContainer:p}=F(v);i.useEffect(()=>{const e=JSON.parse(localStorage.getItem("favorites"))||[];c(e);const t={};e.forEach(o=>{t[o.id]=!0}),l(t)},[]);const h=i.useCallback(e=>{if(!a.some(o=>o.id===e.id)){const o=[...a,e];c(o),l({...r,[e.id]:!0}),localStorage.setItem("favorites",JSON.stringify(o))}},[a]);return i.useCallback(e=>a.some(t=>t.id===e.id),[a]),s.jsxs("main",{className:"content-page-home",style:{marginTop:"70px"},children:[s.jsx("h1",{children:"Home"}),s.jsx("h2",{children:"Odontologos Disponibles para Citas"}),s.jsx("div",{className:"content-page-home",children:s.jsxs("div",{className:p,children:[n&&s.jsx("div",{children:"Loading..."}),d&&s.jsxs("div",{children:["Error: ",d]}),!n&&!d&&m.map(e=>s.jsx("div",{className:"card-wrapper",children:s.jsx(f,{id:e.id,name:e.name,username:e.username,website:e.website,onAddToFavorites:h,isFavorite:a.some(t=>t.id===e.id),disabled:r[e.id],messageBtn:r[e.id]?"Added to Favorites":"Add to Favorites"},e.id)},e.id))]})})]})};export{u as default};