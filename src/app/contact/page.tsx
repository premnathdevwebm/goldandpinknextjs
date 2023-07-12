import { ContactComp } from "@/components/ContactComp/Contact";
import styles from "./Contact.module.css";
export default function ContactPage() {
  return (
    <div className={styles.container}>
      <ContactComp />
    </div>
  );
}
