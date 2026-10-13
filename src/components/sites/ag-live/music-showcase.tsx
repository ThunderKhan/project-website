import {RevealTitle} from "./reveal-title";
import {demoMedia,INSTAGRAM_URL} from "./content";
export function MusicShowcase(){return <section id="music" className="fusion-music kabir-music-section" aria-labelledby="music-h">
 <p className="section-eyebrow">Listen / Watch</p><RevealTitle id="music-h" lines={["A Voice. A Song.","A Collective."]}/>
 <p className="fusion-intro">Sufi soul, Bollywood melodies and the joy of live music. Explore the look of a music-first gallery below, and find the band's actual performances on their official Instagram.</p>
 <div className="kabir-media-grid">
   <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="kabir-media-card kabir-media-card--sufi">
     <img className="kabir-media-photo" src={demoMedia.sufi} loading="lazy" alt="Illustrative stage lighting and live performance scene"/>
     <span className="kabir-media-index">01 / THE SOUND</span><div><span className="kabir-media-script">Feel every note</span><h3>SUFI<br/>NIGHTS</h3><p>Discover performances ↗</p></div>
   </a>
   <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="kabir-media-card kabir-media-card--bollywood">
     <img className="kabir-media-photo" src={demoMedia.bollywood} loading="lazy" alt="Illustrative concert crowd and live music atmosphere"/>
     <span className="kabir-media-index">02 / LIVE ON STAGE</span><div><span className="kabir-media-script">The music we grew up with</span><h3>BOLLYWOOD<br/>LIVE</h3><p>Watch latest reels ↗</p></div>
   </a>
 </div><p className="kabir-media-note">Photography is royalty-free demonstration imagery, not actual footage of Kabir Kollective. Both cards open the band's official Instagram.</p>
 </section>}
