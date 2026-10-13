import {RevealTitle} from "./reveal-title";
import {INSTAGRAM_URL} from "./content";
export function MusicShowcase(){return <section id="music" className="fusion-music kabir-music-section" aria-labelledby="music-h">
 <p className="section-eyebrow">Listen / Watch</p><RevealTitle id="music-h" lines={["A Voice. A Song.","A Collective."]}/>
 <p className="fusion-intro">Sufi soul, Bollywood melodies and the joy of live music. Watch Kabir Kollective's latest performances on their official Instagram profile.</p>
 <div className="kabir-media-grid">
  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="kabir-media-card kabir-media-card--sufi">
   <span className="kabir-media-index">01 / THE SOUND</span><div><span className="kabir-media-script">Feel every note</span><h3>SUFI<br/>NIGHTS</h3><p>Discover performances ↗</p></div>
  </a>
  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="kabir-media-card kabir-media-card--bollywood">
   <span className="kabir-media-index">02 / LIVE ON STAGE</span><div><span className="kabir-media-script">The music we grew up with</span><h3>BOLLYWOOD<br/>LIVE</h3><p>Watch latest reels ↗</p></div>
  </a>
 </div>
 <p className="kabir-media-note">The preview links to Kabir Kollective's actual social performances; embedded videos can be added when the client provides approved files.</p>
 </section>}
