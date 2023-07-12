import Image from "next/image";
import hand from "./hand.jpg";
import nailwithrose from "./nailwithrose.jpg";
import styles from "./MainContent.module.css";
const MainContent = () => {
  return (
    <div className={styles.rowcontainer1}>
      <div className={styles.col01}>
        <Image className={styles.imag1} src={hand} alt="hand" />
      </div>
      <div className={styles.col01}>
        <div className={styles.col0101}>
          <h2>The Nail Lab</h2>
          <p>
            We at Gold & Pink have a relaxing atmosphere with comfortable
            seating and a pleasant ambiance. Our nail technicians are
            well-trained and knowledgeable about the latest trends and
            techniques in nail care. We also use high-quality products that will
            be gentle on your nails and we provide long-lasting results. Our
            nail bar has a wide range of colours and designs to choose from and
            specialises in custom designs.
          </p>
        </div>
        <div className={styles.col0102}>
          <Image className={styles.imag2} src={nailwithrose} alt="nailwithrose" />
        </div>
      </div>
    </div>
  );
};

export { MainContent};
