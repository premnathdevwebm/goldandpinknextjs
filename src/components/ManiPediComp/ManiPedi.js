import Link from "next/link";
import Image from "next/image";
import styles from "./ManiPedi.module.css";
import image1 from "./comp1.webp"
import image2 from "./comp2.webp"

const comps = [
  {
    id: "13",
    name: "Manicure",
    content:
      "A manicure provides a deep clean for your nails, as well as ensuring that they look great. This is an important part of positive nail health, as both our hands and feet go through a lot on a daily basis",
      image: image1
  },
  {
    id: "14",
    name: "Pedicure",
    content:
      "Pedicures include care not only for the toenails; dead skin cells are rubbed off the bottom of the feet using a rough stone (often a pumice stone). Skincare is often provided up to the knee, including granular exfoliation, moisturizing, and massage",
      image: image2
  }
];

const ManiPediComponent = () => {
  return (
    <div className={styles.parcontain}>
      {comps.map((ele) => (
        <div key={ele.id} className={styles.container}>
          <div className={styles.row}>
            <div className={styles.imag}>
              <Image {...ele.image} alt="" />
            </div>
            <div>
                <h2 className={styles.title}>{ele.name}</h2>
                <p>{ele.content}</p>
            </div>
          </div>
          <div className={styles.bookNowButton}>
            <Link href={`/service/${ele.id}`}>Book Now</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export {ManiPediComponent};
