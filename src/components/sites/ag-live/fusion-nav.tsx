"use client";
import {useState} from "react";
const LINKS=[{label:"Home",id:"hero"},{label:"Music",id:"music"},{label:"Tour",id:"upcoming"},{label:"Tickets",id:"tickets"},{label:"Contact",id:"book"}];
export function FusionNav({active,onGo}:{active:string;onGo:(id:string)=>void}){
const [open,setOpen]=useState(false);const go=(id:string)=>{onGo(id);setOpen(false)};
return <header className="fusion-header"><nav aria-label="Main navigation" className="fusion-nav">
<button type="button" className="fusion-wordmark" onClick={()=>go("hero")} aria-label="Go to home">MEHFIL<small>CONCEPT</small></button>
<div id="fusion-nav-menu" className={`fusion-links ${open?"is-open":""}`}>{LINKS.map(l=><button type="button" key={l.id} onClick={()=>go(l.id)} aria-current={active===l.id?"page":undefined} className={active===l.id?"is-active":""}>{l.label}</button>)}</div>
<button type="button" className="fusion-menu-toggle" onClick={()=>setOpen(v=>!v)} aria-controls="fusion-nav-menu" aria-expanded={open} aria-label={open?"Close menu":"Open menu"}>{open?"Close":"Menu"}<span aria-hidden="true">{open?"×":"☰"}</span></button>
</nav></header>}
