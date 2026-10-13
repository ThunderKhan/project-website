"use client";
import {useEffect,useRef} from "react";
import {demoMedia,INSTAGRAM_URL} from "./content";
export function Hero(){
 const videoRef=useRef<HTMLVideoElement>(null);
 useEffect(()=>{
  const element=videoRef.current;
  if(!element)return;
  const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>{if(motion.matches){element.pause();element.style.opacity="0";}else{element.style.opacity="1";void element.play().catch(()=>{element.style.opacity="0";});}};
  update();
  motion.addEventListener("change",update);
  return()=>motion.removeEventListener("change",update);
 },[]);
 return <section id="hero" aria-label="Kabir Kollective — Live Sufi and Bollywood band" className="kabir-hero">
   <div className="kabir-hero-media" aria-hidden="true">
     <img src={demoMedia.hero} alt="" className="kabir-hero-poster" fetchPriority="high" />
     <video ref={videoRef} className="kabir-hero-video" autoPlay muted loop playsInline preload="metadata" poster={demoMedia.hero} onError={e=>{e.currentTarget.style.opacity="0";}}>
       <source src={demoMedia.heroVideo} type="video/mp4"/>
     </video>
   </div>
   <div className="kabir-hero-stage" aria-hidden="true"><span className="kabir-stage-light kabir-light-one"/><span className="kabir-stage-light kabir-light-two"/><span className="kabir-stage-arc"/></div>
   <div className="hero-overlay"/><div className="hero-overlay-top"/>
   <div className="hero-content kabir-hero-content">
     <div className="kabir-brand-kicker"><img src="/brand/kabir-kollective-logo.webp" alt="Kabir Kollective gold-on-black logo" width={88} height={88}/><div><span className="kabir-kicker-location">MUMBAI · INDIA</span><p className="hero-eyebrow">SUFI · BOLLYWOOD · LIVE BAND</p></div></div>
     <h1 className="hero-title kabir-hero-title"><span className="line"><span className="word">KABIR</span></span><span className="line"><span className="word">KOLLECTIVE</span></span></h1>
     <p className="hero-subtitle">Rooted in soul. Made for the stage.<br/>Live music for weddings, corporate events and festivals.</p>
     <div className="hero-actions"><a href="#book" className="btn-primary">Book a Performance &nbsp;→</a><a href="#music" className="btn-ghost">Discover the Sound</a></div>
     <a className="kabir-hero-instagram" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Follow @kabirkollective <span aria-hidden="true">↗</span></a>
   </div>
   <div className="hero-scroll"><span className="hero-scroll-label">Scroll to explore</span><div className="scroll-bar"/></div>
   <p className="kabir-demo-media-label">ILLUSTRATIVE CONCERT FOOTAGE · NOT THE BAND</p>
 </section>;
}
