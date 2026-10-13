import type {Metadata} from "next";
import "./globals.css";import "./ag-live.css";
export const metadata:Metadata={title:"MEHFIL | Sufi–Bollywood Live Band · Design Concept",description:"Sufi Bollywood band website concept, combining performance-led layout with immersive stacked slides.",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
