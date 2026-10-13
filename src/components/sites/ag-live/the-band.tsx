import {RevealTitle} from "./reveal-title";
import {demoMedia,INSTAGRAM_URL} from "./content";
export function TheBand(){return <section id="the-band" aria-labelledby="band-h" className="kabir-band-section">
<p className="section-eyebrow">The Collective</p><RevealTitle id="band-h" lines={["One Name.","Many Notes."]}/>
<p className="fusion-intro">Kabir Kollective brings Sufi expression and Bollywood music together on stage. Below is a sample gallery showing how their own live photographs could be displayed.</p>
<div className="kabir-gallery-grid">
  <figure className="kabir-gallery-frame kabir-gallery-frame-main"><img src={demoMedia.band1} alt="Stock photograph of a concert crowd" loading="lazy"/><figcaption>01 · THE ENERGY</figcaption></figure>
  <figure className="kabir-gallery-frame"><img src={demoMedia.band2} alt="Stock live concert photography" loading="lazy"/><figcaption>02 · THE STAGE</figcaption></figure>
  <figure className="kabir-gallery-frame"><img src={demoMedia.band3} alt="Stock music event photography" loading="lazy"/><figcaption>03 · THE MOMENT</figcaption></figure>
</div>
<div className="kabir-gallery-footer"><span>ILLUSTRATIVE STOCK PHOTOGRAPHY · REPLACE WITH CLIENT MEDIA</span><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">See Kabir Kollective on Instagram ↗</a></div>
</section>}
