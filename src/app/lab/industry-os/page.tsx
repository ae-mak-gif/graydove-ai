import type { Metadata } from "next";
import IndustryOSLab from "@/components/industry-os-lab";

export const metadata: Metadata = {
  title: "Industry OS Lab — Internal Preview",
  description: "Internal product architecture preview for GRAYDOVE.",
  robots: { index: false, follow: false }
};

export default function IndustryOSLabPage() {
  return <IndustryOSLab />;
}
