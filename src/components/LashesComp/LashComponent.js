import Link from 'next/link';
import styles from "./LashComp.module.css";
import image1 from "./comp1.webp";
import image2 from "./comp2.webp";
import Image from 'next/image';
const comps = [
  {
    id: 10,
    name: "Lash extensions",
    content:
      "Eyelash extensions are a cosmetic enhancement that involves attaching synthetic or natural hair fibers to the natural eyelashes to create a fuller, more dramatic look. They are applied by a professional using a specialized adhesive and can last for several weeks",
      image: image1
  },
  {
    id: 11,
    name: "Lash lift",
    content:
      "Lash Lift is a semi-permanent method in which the eyelashes gets glued over the natural lashes. It is a quick method to get beautiful semi-permanent eyelashes as it gives the illusion of longer, fuller and shinier lashes to the natural ones.",
      image: image2
  },
];

const LashComponent = () => {
  return (
    <div className={styles.parcontain}>
      {comps.map((ele) => (
        <div key={ele.id} className={styles.container}>
          <div className={styles.row}>
            <div className={styles.imag}>
              <Image
                {...ele.image}
                alt="lash"
              />
            </div>
            <div>
              <h2 className={styles.title}>{ele.name}</h2>
              <p>{ele.content}</p>
            </div>
          </div>
          <Link href={`/service/${comps.id}`}>Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export { LashComponent };
