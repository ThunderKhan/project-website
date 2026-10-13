import {RevealTitle} from "./reveal-title";
import {actBio,INSTAGRAM_URL} from "./content";
export function TheAct(){return <section id="the-act" aria-labelledby="act-h">
  <div className="act-photo-wrap kabir-act-art">
    <div className="kabir-act-poster"><span className="kabir-poster-overline">MUMBAI · LIVE MUSIC</span>
      <img src="/brand/kabir-kollective-logo.webp" alt="Kabir Kollective logo" width={290} height={290}/>
      <span className="kabir-poster-bottom">SUFI / BOLLYWOOD / LIVE</span>
    </div>
    <div className="act-photo-cap">Kabir Kollective · Official logo from the band's profile</div>
  </div>
  <div className="act-copy">
    <p className="section-eyebrow">Meet the Band</p>
    <RevealTitle id="act-h" lines={["Music That", "Connects."]}/>
    <p className="act-bio">{actBio}</p>
    <div className="kabir-facts">
      <div><strong>MUMBAI</strong><span>Home city</span></div><div><strong>SUFI & BOLLYWOOD</strong><span>Signature genres</span></div><div><strong>LIVE</strong><span>Weddings · Corporate · Festivals</span></div>
    </div>
    <div className="genre-row"><span className="genre-pill">Sufi</span><span className="genre-pill">Bollywood</span><span className="genre-pill">Live Band</span></div>
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="kabir-inline-link">Meet Kabir Kollective on Instagram ↗</a>
  </div>
 </section>}
