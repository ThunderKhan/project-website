import {RevealTitle} from "./reveal-title";
import {INSTAGRAM_URL,WHATSAPP_URL} from "./content";
export function Tickets(){return <section id="tickets" className="fusion-tickets" aria-labelledby="tickets-h">
<p className="section-eyebrow">Catch Us Live</p><RevealTitle id="tickets-h" lines={["The Next", "Mehfil Awaits."]}/>
<p className="fusion-intro">Kabir Kollective performs live in Mumbai and beyond. The upcoming concert schedule and official ticket links will appear here when confirmed.</p>
<div className="fusion-ticket-card"><div><span className="fusion-kicker">UPCOMING SHOWS · ANNOUNCEMENTS PENDING</span><h3>See You at the Next Show.</h3><p>Follow official updates for the next event and authorised ticket release.</p></div><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Tour updates ↗</a></div>
<div className="kabir-past-events"><p className="section-eyebrow">Selected past events</p>
<a target="_blank" rel="noopener noreferrer" href="https://in.bookmyshow.com/events/sufi-night-kabir-kollective/ET00440850"><span>APR 2025</span><strong>Sufi Night — Kabir Kollective</strong><small>BookMyShow · Event closed ↗</small></a>
<a target="_blank" rel="noopener noreferrer" href="https://in.bookmyshow.com/events/guzaarish-by-kabir-kollective/ET00450665"><span>JUN 2025</span><strong>Guzaarish by Kabir Kollective</strong><small>BookMyShow · Event closed ↗</small></a>
</div>
<div className="kabir-ticket-bottom">Planning a wedding, corporate event or festival? <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Enquire directly with the band ↗</a></div>
</section>}
