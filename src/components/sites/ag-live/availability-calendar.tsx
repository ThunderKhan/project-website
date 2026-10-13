"use client";
import {useState} from "react";
import {RevealTitle} from "./reveal-title";
import {BOOKING_PHONE} from "./content";
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
export function AvailabilityCalendar(){
 const [now]=useState(()=>new Date());
 const [view,setView]=useState(()=>new Date(now.getFullYear(),now.getMonth(),1));
 const [selected,setSelected]=useState<string|null>(null);
 const y=view.getFullYear(),m=view.getMonth(),offset=new Date(y,m,1).getDay(),total=new Date(y,m+1,0).getDate();
 const step=(n:number)=>setView(new Date(y,m+n,1));
 const dateLabel=selected?new Date(selected+"T12:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"your preferred date";
 const whatsapp="https://wa.me/"+BOOKING_PHONE.replace(/\D/g,"")+"?text="+encodeURIComponent("Hello Kabir Kollective, I would like to enquire about a live performance on "+dateLabel+". Please share availability and booking details.");
 return <section id="ag-calendar" aria-labelledby="cal-h" className="kabir-calendar">
 <p className="section-eyebrow">Plan an Event</p><RevealTitle id="cal-h" lines={["Choose a Date.","Start a Conversation."]}/>
 <p className="fusion-intro">Select a preferred event date to start an enquiry. This calendar is a demo and does not indicate confirmed availability.</p>
 <div className="cal-wrap"><div className="cal-header">
 <button type="button" className="cal-nav-btn" aria-label="Previous month" onClick={()=>step(-1)}>←</button><span className="cal-month-title">{months[m]} {y}</span>
 <button type="button" className="cal-nav-btn" aria-label="Next month" onClick={()=>step(1)}>→</button></div>
 <div className="cal-days-header">{days.map(d=><span key={d}>{d}</span>)}</div>
 <div className="cal-grid">{Array.from({length:offset+total},(_,i)=>{
 const day=i-offset+1;if(day<1)return <div className="cal-cell" key={`blank-${i}`}/>;
 const iso=`${y}-${String(m+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
 const isPast=new Date(y,m,day)<new Date(now.getFullYear(),now.getMonth(),now.getDate());
 return <div className="cal-cell" key={iso}><button type="button" disabled={isPast} aria-pressed={selected===iso} onClick={()=>setSelected(iso)} className={`cal-day kabir-cal-day ${selected===iso?"is-selected":""}`}>{day}</button></div>;
 })}</div>
 <div className="kabir-calendar-actions"><p>{selected?`Preferred date: ${dateLabel}`:"Select a date to enquire about availability."}</p><a className="btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Ask about this date ↗</a></div>
 <p className="kabir-calendar-disclaimer">Dates are not live availability. Opening WhatsApp does not confirm a booking.</p>
 </div></section>}
