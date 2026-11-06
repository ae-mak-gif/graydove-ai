import type {Metadata} from "next";
import "./globals.css";
import {SiteShell} from "@/components/site-shell";
import {SmoothScroll} from "@/components/smooth-scroll";
export const metadata:Metadata={metadataBase:new URL("https://graydove-ai.vercel.app"),title:{default:"GRAYDOVE — Independent AI Agency",template:"%s — GRAYDOVE"},description:"GRAYDOVE is an independent AI agency designing intelligent systems, autonomous agents, generative AI experiences and connected workflows.",applicationName:"GRAYDOVE",openGraph:{type:"website",siteName:"GRAYDOVE",title:"GRAYDOVE — Independent AI Agency",description:"Intelligence, designed into the work.",images:["/og.svg"]},twitter:{card:"summary_large_image",title:"GRAYDOVE — Independent AI Agency",description:"Intelligence, designed into the work."},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SmoothScroll/><SiteShell>{children}</SiteShell></body></html>}
