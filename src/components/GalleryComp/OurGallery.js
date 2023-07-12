import styles from "./OurGallery.module.css"
import imag1 from "./comp1.webp"
import imag2 from "./comp2.webp"
import imag3 from "./comp3.webp"
const OurGallery = () => {
  return (
    <div className={styles.gallery}>
    <h2>Gallery Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className={styles.imagegrid}>
      <div className="column1">
        <img className="img0" {...imag1} alt="Ime 1" />
      </div>
      <div className="column2">
        <img className="img1" {...imag2} alt="Ime 2" />
        <img className="img1" {...imag3} alt="Ime 3" />
      </div>
    </div>
  </div>
  )
}

export { OurGallery}