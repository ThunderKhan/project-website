import {RevealTitle} from "./reveal-title";
import {INSTAGRAM_URL} from "./content";
export function Clients(){return <section id="clients" aria-labelledby="clients-h" className="kabir-credibility">
<p className="section-eyebrow">Our Journey</p><RevealTitle id="clients-h" lines={["Made to Be", "Experienced."]}/>
<p className="clients-intro">Kabir Kollective brings live music to weddings, corporate celebrations and festivals. The brand's approved photographs, collaborations and testimonials will be featured here as the final site takes shape.</p>
<div className="concept-credentials">
<div><strong>SUFI NIGHT</strong><span>Past Kabir Kollective event · 2025</span><a href="https://in.bookmyshow.com/events/sufi-night-kabir-kollective/ET00440850" target="_blank" rel="noopener noreferrer">See event listing ↗</a></div>
<div><strong>GUZAARISH</strong><span>Past Kabir Kollective event · 2025</span><a href="https://in.bookmyshow.com/events/guzaarish-by-kabir-kollective/ET00450665" target="_blank" rel="noopener noreferrer">See event listing ↗</a></div>
<div><strong>STAY CONNECTED</strong><span>Performance clips, updates and latest band moments</span><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Follow on Instagram ↗</a></div>
</div></section>}
