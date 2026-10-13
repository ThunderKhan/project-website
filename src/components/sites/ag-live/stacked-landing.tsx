"use client";
import {useCallback,useEffect,useRef,useState,type ReactNode,type MouseEvent as ReactMouseEvent} from "react";
import {FusionNav} from "./fusion-nav";
import {Hero} from "./hero";
import {Ticker} from "./ticker";
import {TheAct} from "./the-act";
import {Lineups} from "./lineups";
import {MusicShowcase} from "./music-showcase";
import {UpcomingShows} from "./upcoming-shows";
import {Tickets} from "./tickets";
import {AvailabilityCalendar} from "./availability-calendar";
import {TheBand} from "./the-band";
import {Clients} from "./clients";
import {Book} from "./book";
import {SiteFooter} from "./site-footer";
import {PageShell} from "./page-shell";
import "./deck.css";

const SLIDES:{id:string;name:string;content:ReactNode}[]=[
{id:"hero",name:"Home",content:<Hero/>},
{id:"the-act",name:"The Act",content:<><Ticker/><TheAct/></>},
{id:"music",name:"Music",content:<MusicShowcase/>},
{id:"lineups",name:"Lineups",content:<Lineups/>},
{id:"upcoming",name:"Tour",content:<UpcomingShows/>},
{id:"tickets",name:"Tickets",content:<Tickets/>},
{id:"ag-calendar",name:"Availability",content:<AvailabilityCalendar/>},
{id:"the-band",name:"The Band",content:<TheBand/>},
{id:"clients",name:"Collaborations",content:<Clients/>},
{id:"book",name:"Contact",content:<Book/>},
{id:"footer",name:"Footer",content:<SiteFooter/>}
];
const DURATION=800,THRESHOLD=42;
function isEditable(t:EventTarget|null){return t instanceof HTMLElement && Boolean(t.closest('input,textarea,select,[contenteditable="true"]'))}
function nestedCanScroll(t:EventTarget|null,dir:number){
let el=t instanceof HTMLElement?t:null;
while(el && !el.classList.contains("fusion-slide")){
 const style=getComputedStyle(el);
 if(/auto|scroll/.test(style.overflowY)&&el.scrollHeight>el.clientHeight+2)
  if(dir<0?el.scrollTop>1:el.scrollTop+el.clientHeight<el.scrollHeight-1)return true;
 el=el.parentElement;
}
if(el&&el.classList.contains("fusion-slide")&&el.scrollHeight>el.clientHeight+2)
 return dir<0?el.scrollTop>1:el.scrollTop+el.clientHeight<el.scrollHeight-1;
return false;
}
export function StackedLanding(){
const [active,setActive]=useState(0),[reduced,setReduced]=useState(false);
const stage=useRef<HTMLDivElement>(null),current=useRef(0),lock=useRef(false),timer=useRef<ReturnType<typeof setTimeout>|null>(null),sum=useRef(0),touch=useRef<{x:number;y:number}|null>(null);
const duration=reduced?0:DURATION;
const go=useCallback((index:number)=>{
 const next=Math.max(0,Math.min(index,SLIDES.length-1));
 if(next===current.current||lock.current)return;
 lock.current=true;current.current=next;sum.current=0;setActive(next);
 if(timer.current)clearTimeout(timer.current);
 timer.current=setTimeout(()=>{lock.current=false;timer.current=null},duration+50);
},[duration]);
const goId=useCallback((id:string)=>{
 const ix=SLIDES.findIndex(s=>s.id===id);
 if(ix<0)return;
 if(lock.current){if(timer.current)clearTimeout(timer.current);lock.current=false}
 go(ix);
},[go]);
useEffect(()=>{const q=matchMedia("(prefers-reduced-motion: reduce)");const fn=()=>setReduced(q.matches);fn();q.addEventListener("change",fn);return()=>q.removeEventListener("change",fn)},[]);
useEffect(()=>{const before=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=before;if(timer.current)clearTimeout(timer.current)}},[]);
useEffect(()=>{const el=stage.current;if(!el)return;
 function wheel(e:WheelEvent){if(e.ctrlKey)return;const d=Math.abs(e.deltaY)>=Math.abs(e.deltaX)?e.deltaY:e.deltaX;if(!d)return;
 if(nestedCanScroll(e.target,d)){sum.current=0;return}
 e.preventDefault();if(lock.current)return;
 sum.current+=d;if(Math.abs(sum.current)>=THRESHOLD){const dir=sum.current>0?1:-1;sum.current=0;go(current.current+dir)}
 }
 el.addEventListener("wheel",wheel,{passive:false});return()=>el.removeEventListener("wheel",wheel);
},[go]);
useEffect(()=>{const el=stage.current;if(!el)return;
 const start=(e:TouchEvent)=>{if(!e.touches[0])return;touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY}};
 const end=(e:TouchEvent)=>{const p=touch.current;touch.current=null;const t=e.changedTouches[0];if(!p||!t||lock.current)return;
 const dx=t.clientX-p.x,dy=t.clientY-p.y;if(Math.abs(dy)<56||Math.abs(dy)<Math.abs(dx)*1.2)return;
 const dir=dy<0?1:-1;if(nestedCanScroll(e.target,dir))return;go(current.current+dir);
 };
 el.addEventListener("touchstart",start,{passive:true});el.addEventListener("touchend",end,{passive:true});
 return()=>{el.removeEventListener("touchstart",start);el.removeEventListener("touchend",end)};
},[go]);
useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.ctrlKey||e.metaKey||e.altKey||isEditable(e.target))return;
 let dir=0;if(e.key==="ArrowDown"||e.key==="PageDown")dir=1;else if(e.key==="ArrowUp"||e.key==="PageUp")dir=-1;else return;
 if(nestedCanScroll(e.target,dir))return;e.preventDefault();go(current.current+dir);
};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[go]);
const onLink=(e:ReactMouseEvent<HTMLDivElement>)=>{const t=e.target;if(!(t instanceof HTMLElement))return;
 const a=t.closest<HTMLAnchorElement>('a[href^="#"]');if(!a)return;
 const id=decodeURIComponent(a.getAttribute("href")?.slice(1)??"");const target=document.getElementById(id);
 const slide=target?.closest(".fusion-slide") as HTMLElement|null;
 const ix=slide?Number(slide.dataset.index):-1;if(ix<0)return;
 e.preventDefault();goId(SLIDES[ix].id);
 if(target&&target!==slide){requestAnimationFrame(()=>{slide?.scrollTo({top:Math.max(0,target.offsetTop-120),behavior:"smooth"})})}
};
return <PageShell><FusionNav active={SLIDES[active].id} onGo={goId}/>
<main ref={stage} className="fusion-stage" aria-label="Band portfolio slides" onClickCapture={onLink}>
 {SLIDES.map((s,i)=><div key={s.id} data-index={i} className={`fusion-slide ${i===active?"is-current":""}`}
 style={{zIndex:i+1,transform:`translate3d(0,${i<=active?0:100}%,0)`,transitionDuration:`${duration}ms`}}
 aria-hidden={i!==active} inert={i!==active} tabIndex={-1}>{s.content}</div>)}
 <nav className="fusion-pagination" aria-label="Page sections">{SLIDES.map((s,i)=><button type="button" key={s.id} title={s.name} aria-label={`Go to ${s.name}`} aria-current={i===active?"step":undefined} className={i===active?"active":""} onClick={()=>goId(s.id)}/>)}</nav>
 <div className="fusion-counter" aria-hidden="true">{String(active+1).padStart(2,"0")}<span>/</span>{String(SLIDES.length).padStart(2,"0")}</div>
</main></PageShell>
}
