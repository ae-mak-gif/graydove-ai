import type {Metadata} from "next";
import {ArrowUpRight,Mail} from "lucide-react";
import {PageTransition} from "@/components/transition";
export const metadata:Metadata={title:"Contact",description:"Start a conversation with GRAYDOVE."};
export default function ContactPage(){return <PageTransition><section className="contact-page"><div className="eyebrow">CONTACT / OPEN CHANNEL</div><h1>Have a good<br/><em>question?</em></h1><div className="contact-lower"><p>Tell us what you are exploring, what is not working, or what you think could be possible. We would like to hear about it.</p><a className="contact-email" href="mailto:hello@graydove.ai"><Mail size={17}/> hello@graydove.ai <ArrowUpRight size={17}/></a></div><div className="contact-meta"><span>INDEPENDENT AI AGENCY</span><span>AVAILABLE WORLDWIDE</span><span>RESPONSE WINDOW / 2 BUSINESS DAYS</span></div></section></PageTransition>}
