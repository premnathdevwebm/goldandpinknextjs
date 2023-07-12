import { OurGallery } from "@/components/GalleryComp";
import styles from "./Gallery.module.css";
export default function GalleryPage() {
  return (
    <div className={styles.container}>
      <OurGallery />
    </div>
  );
}
