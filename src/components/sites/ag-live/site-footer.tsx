import {copyrightLine,footerNav} from "./content";
export function SiteFooter(){return <footer id="footer">
<div className="concept-footer-mark">MEHFIL<span>LIVE MUSIC / DESIGN CONCEPT</span></div>
<ul className="footer-nav">{footerNav.map(link=><li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul>
<div className="footer-rule"/><p className="footer-copy">{copyrightLine}</p></footer>}
