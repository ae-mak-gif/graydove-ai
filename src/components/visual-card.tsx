import Image from "next/image";
export function VisualCard({src,alt,className=""}:{src:string;alt:string;className?:string}){return <div className={"visual-card "+className}><Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 80vw"/></div>}
