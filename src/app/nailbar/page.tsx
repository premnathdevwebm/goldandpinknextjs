import { NailComponent } from "@/components/NailBarComp";
import styles from "./Nailbar.module.css";
export default function NailBarPage() {
  return (
    <div className={styles.container}>
      <NailComponent />
    </div>
  );
}
