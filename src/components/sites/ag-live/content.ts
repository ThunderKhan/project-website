export const SITE_URL = "https://example.com";

export const assets = {
  navLogo: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/ag-live-logo.png",
  footerLogo: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/ag-logo-gold.png",
  heroPhoto: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/amit-hero.jpg",
  heroVideo: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/video/ag-live-hero.mp4",
  band: [
    {
      src: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/band-stage-solo.jpg",
      alt: "Lead Vocalist performing live on stage",
    },
    { src: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/band-casual-bw.jpg", alt: "the band Band candid" },
    {
      src: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/band-pastel-suits.jpg",
      alt: "the band Band backstage",
    },
    {
      src: "https://raw.githubusercontent.com/hardik0924/music-portfolio/main/public/sites/ag-live/img/band-conrad-nye.jpg",
      alt: "the band Band at Conrad Pune New Year's Eve",
    },
  ],
} as const;

export type NavLink = { label: string; href: string; external?: boolean };

export const navLinks: NavLink[] = [{label:"Home",href:"#hero"},{label:"Music",href:"#music"},{label:"Tour",href:"#upcoming"},{label:"Tickets",href:"#tickets"},{label:"Contact",href:"#book"}];

export const tickerItems = ["Sufi Soul", "Bollywood Heart", "Live Fusion", "Concert Nights", "Unplugged Evenings", "Private Celebrations"] as const;

export type Stat = { target: number; suffix: string; label: string };

export const stats: Stat[] = [{target:4,suffix:"",label:"Band Configurations"},{target:3,suffix:"",label:"Music Styles"},{target:1,suffix:"",label:"Your Musical Story"},{target:0,suffix:"",label:"Confirmed Shows — TBA"}];

export const genres = ["Sufi","Bollywood","Live Fusion"] as const;

export const actBio = "A stage for Sufi poetry, Bollywood melodies and the joy of live performance. This concept website showcases the band's future story, videos, concerts and event-booking experience. Final artist details and credentials will be added after client approval.";

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
  {
    id: "trio",
    tab: "Trio",
    title: "The Intimate Trio",
    desc: "An acoustic-electric trio that fits any lounge, supper club, or private dining event without overwhelming the room. Warm, personal, and effortlessly sophisticated.",
    idealFor:
      "Lobby lounges · Private dinners · Boutique weddings · Brand launches under 150 guests",
    members: [
      { icon: ICON_MIC, name: "Lead Vocalist", role: "Lead Vocals & Acoustic Guitar" },
      { icon: ICON_GUITAR, name: "Lead Guitarist", role: "Electric Guitar" },
      { icon: ICON_DRUM, name: "Percussionist", role: "Cajon & Hand Percussion" },
    ],
  },
  {
    id: "four",
    tab: "4-Piece",
    title: "The 4-Piece Band",
    desc: "The signature the band format — a tight, punchy quartet that delivers the full band experience. Corporate events and mid-scale weddings love this format.",
    idealFor:
      "Corporate gala · Wedding sangeet · Cocktail event · Hotel ballroom up to 400 guests",
    members: [
      { icon: ICON_MIC, name: "Lead Vocalist", role: "Lead Vocals & Guitar" },
      { icon: ICON_GUITAR, name: "Lead Guitarist", role: "Electric Guitar" },
      { icon: ICON_KEYS, name: "Keyboardist", role: "Keys & Synth" },
      { icon: ICON_DRUM, name: "Drummer", role: "Full Kit" },
    ],
  },
  {
    id: "five",
    tab: "5-Piece",
    title: "The 5-Piece Band",
    desc: "Adding a bassist transforms the groove entirely. Built for larger rooms and audiences who want to feel the music as much as hear it — full, warm, and driving.",
    idealFor:
      "Large corporate events · Wedding receptions · Brand activations 400–800 guests",
    members: [
      { icon: ICON_MIC, name: "Lead Vocalist", role: "Lead Vocals & Guitar" },
      { icon: ICON_GUITAR, name: "Lead Guitarist", role: "Electric Guitar" },
      { icon: ICON_KEYS, name: "Keyboardist", role: "Keys & Synth" },
      { icon: ICON_VIOLIN, name: "Bassist", role: "Electric Bass" },
      { icon: ICON_DRUM, name: "Drummer", role: "Full Kit" },
    ],
  },
  {
    id: "six",
    tab: "6-Piece",
    title: "The Full 6-Piece",
    desc: "The complete the band experience — six musicians delivering a concert-level performance. A dedicated female vocalist adds harmony, range, and visual presence. For events where only the best will do.",
    idealFor:
      "Grand weddings · Award nights · Outdoor festivals · Premium brand events 800+ guests",
    members: [
      { icon: ICON_MIC, name: "Lead Vocalist", role: "Lead Vocals & Guitar" },
      { icon: ICON_STUDIO_MIC, name: "Female Vocalist", role: "Co-Lead & Harmonies" },
      { icon: ICON_GUITAR, name: "Lead Guitarist", role: "Electric Guitar" },
      { icon: ICON_KEYS, name: "Keyboardist", role: "Keys & Synth" },
      { icon: ICON_VIOLIN, name: "Bassist", role: "Electric Bass" },
      { icon: ICON_DRUM, name: "Drummer", role: "Full Kit" },
    ],
  },
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

export const contactItems: ContactItem[] = [{icon:ICON_ENVELOPE,label:"Email",value:"Booking contact • to be confirmed"},{icon:ICON_PIN,label:"Location",value:"India · Available for live events"},{icon:ICON_CAMERA,label:"Socials",value:"Official links coming soon"}];

export const bandFormats = [
  "Trio",
  "4-Piece Band",
  "5-Piece Band",
  "6-Piece Full Band",
  "Not sure -- advise me",
] as const;

export const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Brand Activation",
  "Award Night",
  "Private Party",
  "Festival / Concert",
  "Other",
] as const;

export const footerNav: NavLink[] = navLinks;

export const footerLegal: NavLink[] = [];

export const copyrightLine = "MEHFIL — Client concept. Media adapted from the reference portfolio; not an official band website.";

export const toastMessage = "Preview only — no enquiry was sent. Booking integration will be added after approval.";