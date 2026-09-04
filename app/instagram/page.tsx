import type { Metadata } from "next";
import PlatformPage from "@/components/PlatformPage";
import { PLATFORMS } from "@/lib/content";

export const metadata: Metadata = {
  title: PLATFORMS.instagram.title,
  description: PLATFORMS.instagram.lead,
};

export default function Page() {
  return <PlatformPage platform="instagram" />;
}
