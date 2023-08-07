import { HeartPump } from "@/components/HeartPump/heartpump";
import { MainContent } from "@/components/MainContent";
import { VerticalSocialSide } from "@/components/VerticalSocialSide";
import { OurService } from "@/components/OurService";
import { InstagramGrid } from "@/components/InstagramPost";

export default function Home() {
  return (
    <>
      <HeartPump />
      <MainContent />
      <OurService />
      <InstagramGrid />
      <VerticalSocialSide />
    </>
  );
}
