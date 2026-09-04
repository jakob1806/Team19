import type { Metadata } from "next";
import PlatformPage from "@/components/PlatformPage";
import { PLATFORMS } from "@/lib/content";

export const metadata: Metadata = {
  title: PLATFORMS.linkedin.title,
  description: PLATFORMS.linkedin.lead,
};

export default function Page() {
  return <PlatformPage platform="linkedin" />;
}
