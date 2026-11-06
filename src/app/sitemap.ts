import type {MetadataRoute} from "next";
import {projects} from "@/data/projects";
const base="https://graydove-ai.vercel.app";
export default function sitemap():MetadataRoute.Sitemap{return ["/","/research","/studio","/contact","/privacy","/cookies","/legal",...projects.map(p=>"/project/"+p.slug)].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:path==="/"?"weekly":"monthly",priority:path==="/"?1:path.startsWith("/project/")?.65:.7}))}
