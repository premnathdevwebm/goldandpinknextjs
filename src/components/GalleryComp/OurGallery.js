import Image from "next/image"
import styles from "./OurGallery.module.css"
import imag1 from "./comp1.webp"
import imag2 from "./comp2.webp"
import imag3 from "./comp3.webp"
const OurGallery = () => {
  return (
    <div className={styles.gallery}>
    <div className={styles.imagegrid}>
      <div className="column1">
        <Image className="img0" {...imag1} alt="Ime 1" />
      </div>
      <div className="column2">
        <Image className="img1" {...imag2} alt="Ime 2" />
        <Image className="img1" {...imag3} alt="Ime 3" />
      </div>
    </div>
  </div>
  )
}

export { OurGallery}