import {RevealTitle} from "./reveal-title";
import {INSTAGRAM_URL} from "./content";
export function TheBand(){return <section id="the-band" aria-labelledby="band-h" className="kabir-band-section">
<p className="section-eyebrow">The Collective</p><RevealTitle id="band-h" lines={["One Name.","Many Notes."]}/>
<p className="fusion-intro">Kabir Kollective brings Sufi expression and Bollywood music together on stage. The band's official performance photographs and musician profiles can be added here for the final client-approved website.</p>
<div className="kabir-band-editorial">
 <div className="kabir-band-signature"><img src="/brand/kabir-kollective-logo.webp" alt="Kabir Kollective official profile logo" width={220} height={220}/><span>THE PEOPLE · THE SOUND · THE STAGE</span></div>
 <div className="kabir-band-details"><div><span>01</span><strong>SUFI</strong><p>Poetic melodies and soul-stirring music.</p></div><div><span>02</span><strong>BOLLYWOOD</strong><p>Beloved film songs in a live-band setting.</p></div><div><span>03</span><strong>LIVE EXPERIENCES</strong><p>Weddings, corporate events and festivals.</p></div><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">See the band in action ↗</a></div>
</div></section>}
