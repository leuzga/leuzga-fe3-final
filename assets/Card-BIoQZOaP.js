import{r as o,a as v,T as x,j as a,L as F,g as j}from"./index-DNt-Zun7.js";const h=(e,r)=>{switch(r.type){case"FETCH_SUCCESS":return{...e,loading:!1,users:r.payload};case"FETCH_ERROR":return{...e,loading:!1,error:r.payload};default:return e}},U=()=>{const e={users:[],loading:!0,error:null},[r,s]=o.useReducer(h,e);return o.useEffect(()=>{(async()=>{try{const t=await fetch("https://jsonplaceholder.typicode.com/users");if(!t.ok)throw new Error("Failed to fetch users");const i=await t.json();s({type:"FETCH_SUCCESS",payload:i})}catch(t){s({type:"FETCH_ERROR",payload:t.message})}})()},[]),o.useMemo(()=>r,[r])},H=()=>{localStorage.removeItem("favorites"),window.dispatchEvent(new Event("favoritesCleared"))},L=()=>{const e={users:[],loading:!0,error:null},[r,s]=o.useReducer(h,e),n=o.useCallback(()=>{try{const t=localStorage.getItem("favorites");if(t){const i=JSON.parse(t);s({type:"FETCH_SUCCESS",payload:i})}}catch(t){s({type:"FETCH_ERROR",payload:t.message})}},[]);return o.useEffect(()=>{n()},[n]),o.useMemo(()=>r,[r])};var m={exports:{}},_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=_,N=b;function y(){}function f(){}f.resetWarningCache=y;var O=function(){function e(n,t,i,u,p,d){if(d!==N){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function r(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:f,resetWarningCache:y};return s.PropTypes=s,s};m.exports=O();var P=m.exports;const c=v(P),k=({id:e,name:r,username:s,website:n,onAddToFavorites:t,onDeleteFromFavorites:i,isFavorite:u,disabled:p,messageBtn:d})=>{const{theme:l}=o.useContext(x),{cardTheme:g,h2Theme:T,pTheme:R,disabledButton:C}=j(l),E=o.useCallback(()=>{t({id:e,name:r,username:s,website:n})},[e,r,s,n,t]),S=o.useCallback(()=>{p||i(e)},[e,i,p]);return a.jsxs("div",{className:g,children:[a.jsx(F,{to:"/detail",children:a.jsxs("div",{className:"card-content",children:[a.jsx("div",{className:"card-left",children:a.jsx("img",{src:`https://i.pravatar.cc/150?u=${s}`,alt:r})}),a.jsxs("div",{className:"card-right",children:[a.jsx("h2",{className:T,children:r.trim()}),a.jsx("p",{className:R,children:s}),a.jsx("p",{children:n})]})]})}),a.jsx("div",{className:"card-actions",children:a.jsxs("button",{onClick:u?S:E,className:u?"":C,disabled:p,children:[d," "]})})]})};k.propTypes={id:c.number.isRequired,name:c.string.isRequired,username:c.string.isRequired,website:c.string.isRequired,onAddToFavorites:c.func,onDeleteFromFavorites:c.func,isFavorite:c.bool,disabled:c.bool,messageBtn:c.string.isRequired};export{k as C,L as a,H as c,U as u};