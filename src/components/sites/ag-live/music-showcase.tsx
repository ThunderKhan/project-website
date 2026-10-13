import {assets} from "./content";
import {RevealTitle} from "./reveal-title";
export function MusicShowcase(){return <section id="music" className="fusion-music" aria-labelledby="music-h">
<p className="section-eyebrow">Listen / Watch</p><RevealTitle id="music-h" lines={["Songs To Feel.","Stories To Tell."]}/>
<p className="fusion-intro">Sufi · Bollywood · Live fusion. A dedicated showcase for the band's original tracks, covers and live films. The photography below is reference material for layout review.</p>
<div className="fusion-media-grid">
<div className="fusion-media"><img src={assets.band[0].src} alt="Reference concert performance" loading="lazy"/><div><span>01 / FEATURED PERFORMANCE</span><h3>On Stage</h3><p>Official concert film coming soon</p></div></div>
<div className="fusion-media"><img src={assets.band[2].src} alt="Reference band photography" loading="lazy"/><div><span>02 / THE SOUND</span><h3>Sufi & Bollywood</h3><p>Streaming links and releases to be added</p></div></div>
</div></section>}
