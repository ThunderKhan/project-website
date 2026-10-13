import {copyrightLine,footerNav,WHATSAPP_URL,INSTAGRAM_URL} from "./content";
export function SiteFooter(){return <footer id="footer" className="kabir-footer">
<img className="kabir-footer-emblem" src="/brand/kabir-kollective-logo.webp" alt="Kabir Kollective logo" width={130} height={130}/>
<div className="concept-footer-mark">KABIR<span>KOLLECTIVE</span></div>
<p className="kabir-footer-tag">SUFI · BOLLYWOOD · LIVE BAND &nbsp;—&nbsp; MUMBAI</p>
<ul className="footer-nav">{footerNav.map(link=><li key={link.label}><a href={link.href} target={link.external?"_blank":undefined} rel={link.external?"noopener noreferrer":undefined}>{link.label}</a></li>)}</ul>
<div className="kabir-footer-actions"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp for bookings ↗</a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@kabirkollective ↗</a></div>
<div className="footer-rule"/><p className="footer-copy">{copyrightLine}</p></footer>}
