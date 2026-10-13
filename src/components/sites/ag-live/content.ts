export const SITE_URL = "https://www.instagram.com/kabirkollective/";
export const BAND_NAME = "Kabir Kollective";
/** Demo-only stock media; these do not depict Kabir Kollective. */
export const demoMedia = {
  "hero": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1800&q=82",
  "act": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1100&q=83",
  "sufi": "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=82",
  "bollywood": "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=82",
  "band1": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
  "band2": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
  "band3": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1100&q=80",
  "heroVideo": "https://assets.mixkit.co/videos/preview/mixkit-mic-on-stage-in-the-dark-41551-large.mp4"
} as const;
export const INSTAGRAM_URL = "https://www.instagram.com/kabirkollective/";
export const BOOKING_PHONE = "+918692898694";
export const WHATSAPP_URL = "https://wa.me/918692898694?text=Hello%20Kabir%20Kollective%2C%20I%27d%20like%20to%20enquire%20about%20a%20live%20performance.";

export const assets = {
  navLogo: "/brand/kabir-kollective-logo.webp",
  footerLogo: "/brand/kabir-kollective-logo.webp",
  heroPhoto: "/brand/kabir-kollective-logo.webp",
  band: [] as {src:string;alt:string}[],
} as const;

export type NavLink = { label: string; href: string; external?: boolean };

export const navLinks: NavLink[] = [{label:"Home",href:"#hero"},{label:"Music",href:"#music"},{label:"Tour",href:"#upcoming"},{label:"Tickets",href:"#tickets"},{label:"Contact",href:"#book"}];

export const tickerItems = ["KABIR KOLLECTIVE", "SUFI", "BOLLYWOOD", "LIVE BAND", "MUMBAI", "WEDDINGS", "CORPORATE EVENTS", "FESTIVALS"] as const;

export type Stat = { target: number; suffix: string; label: string };

export const stats: Stat[] = [];

export const genres = ["Sufi","Bollywood","Live Fusion"] as const;

export const actBio = "Kabir Kollective is a Mumbai-based live band bringing together the soul of Sufi music and the melodies of Bollywood. From intimate musical evenings to weddings, corporate gatherings and festivals, the band performs music that connects people and occasions.";

export type LineupId = "trio" | "four" | "five" | "six";

/**
 * Exact code points used by the source document. Written as escapes so no editor
 * or console can silently swap the glyph or add a variation selector.
 */
const ICON_MIC = "\uD83C\uDFA4";
const ICON_STUDIO_MIC = "\uD83C\uDF99";
const ICON_GUITAR = "\uD83C\uDFB8";
const ICON_VIOLIN = "\uD83C\uDFB7";
const ICON_KEYS = "\uD83C\uDFB9";
const ICON_DRUM = "\uD83E\uDD41";
const ICON_ENVELOPE = "\u2709";
const ICON_PIN = "\uD83D\uDCCD";
const ICON_CAMERA = "\uD83D\uDCF8";

export type LineupMember = { icon: string; name: string; role: string };

export type Lineup = {
  id: LineupId;
  tab: string;
  title: string;
  desc: string;
  idealFor: string;
  members: LineupMember[];
};

export const lineups: Lineup[] = [
  {id:"trio",tab:"Sufi Nights",title:"The Sufi Experience",desc:"An evening shaped around Sufi melodies, poetic expression and a more intimate connection with the audience.",idealFor:"Sufi evenings · Intimate celebrations · Cultural events",members:[{icon:ICON_MIC,name:"The repertoire",role:"Sufi songs, ghazal-inspired selections and soulful arrangements"},{icon:ICON_GUITAR,name:"The mood",role:"Immersive, reflective and warm"}]},
  {id:"four",tab:"Bollywood",title:"Bollywood, Live",desc:"Familiar Bollywood favourites brought to a live stage, from heartfelt melodies to songs everyone knows.",idealFor:"Private parties · Social gatherings · Music nights",members:[{icon:ICON_MIC,name:"The repertoire",role:"Hindi film music and audience favourites"},{icon:ICON_DRUM,name:"The mood",role:"Energetic, celebratory and sing-along friendly"}]},
  {id:"five",tab:"Weddings",title:"Made for Celebrations",desc:"A live musical atmosphere for wedding celebrations and special occasions, with the final performance brief tailored directly with the band.",idealFor:"Weddings · Sangeet nights · Receptions",members:[{icon:ICON_MIC,name:"The occasion",role:"Personal celebrations and wedding gatherings"},{icon:ICON_KEYS,name:"The experience",role:"Sufi and Bollywood live sets"}]},
  {id:"six",tab:"Events",title:"For Bigger Stages",desc:"Music for corporate celebrations, festivals and community stages. Production details and availability are confirmed directly with the band.",idealFor:"Corporate events · Festivals · Public shows",members:[{icon:ICON_GUITAR,name:"The stage",role:"Festivals and professional events"},{icon:ICON_DRUM,name:"Planning",role:"Contact the team for technical and performance requirements"}]},
];

export type LogoCell = { src: string; alt: string; logoBg?: string };

export const clientLogos: LogoCell[] = [];

export type PressCell = LogoCell & { href: string };

export const pressLinks: PressCell[] = [];

export type Review = {
  id: string;
  name: string;
  stars: number;
  review: string;
  role?: string;
};

export const seedReviews: Review[] = [];

export type ContactItem = {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export const contactItems: ContactItem[] = [
  {icon:"☎",label:"Call for bookings",value:"+91 86928 98694",href:"tel:+918692898694"},
  {icon:"✆",label:"WhatsApp",value:"Chat with Kabir Kollective",href:WHATSAPP_URL,external:true},
  {icon:ICON_CAMERA,label:"Instagram",value:"@kabirkollective",href:INSTAGRAM_URL,external:true},
  {icon:ICON_PIN,label:"Based in",value:"Mumbai, India"},
];

export const bandFormats = ["Sufi Evening","Bollywood Live","Wedding / Sangeet","Corporate Event","Festival / Concert","Discuss with the band"] as const;

export const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Brand Activation",
  "Award Night",
  "Private Party",
  "Festival / Concert",
  "Other",
] as const;

export const footerNav: NavLink[] = [...navLinks,{label:"Instagram",href:INSTAGRAM_URL,external:true}];

export const footerLegal: NavLink[] = [];

export const copyrightLine = "© 2026 Kabir Kollective · Website concept preview. Official content and media subject to approval.";

export const toastMessage = "Preview only — no enquiry was sent. Booking integration will be added after approval.";