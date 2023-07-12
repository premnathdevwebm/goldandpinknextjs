import { HeartPump } from "@/components/HeartPump/heartpump";
import { MainContent } from "@/components/MainContent";
import { TestimonialCarousel } from "@/components/TestimonialCarosul"
import { VerticalSocialSide } from "@/components/VerticalSocialSide";
import { OurService } from "@/components/OurService";
import { InstagramGrid } from "@/components/InstagramPost";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <HeartPump />
      </div>
      <MainContent />
      <TestimonialCarousel />
      <OurService />
      <InstagramGrid />
      <VerticalSocialSide />
    </main>
  );
}
