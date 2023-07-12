import styles from "./Nail.module.css";
import image1 from "./comp1.webp"
import image2 from "./comp2.webp"
import image3 from "./comp3.webp"
import image4 from "./comp4.webp"

const comps = [
  {
    id: 1,
    name: "Acrylic extensions",
    content:
      "Acrylic nails consist of a polish and powder or liquid monomer combination that is spread over the natural nail as an extension to give it an appropriate shape and length. The procedure involves, Cutting and filing your natural nails.",
      image: image1
  },
  {
    id: 2,
    name: "Gel extensions",
    content:
      "Gel nail extension is a process that involves hard gel built on a natural nail and cured with UV light. Our manicurist will be using a nail form, which is a sticker that goes under the free edge (the tip) of the nail to extend the length of the nail.",
      image: image2
  },
  {
    id: 3,
    name: "Poly Gel extensions ",
    content:
      "Polygel nail extensions are a nail enhancement that is more flexible and lightweight compared to acrylic but is harder than regular gel or Gel-X nails",
      image: image3
  },
  {
    id: 4,
    name: "Nail art",
    content:
      "We offer the most creative, trendy & stylish nail art designs including customised art designs",
      image: image4
  },
];

const NailComponent = () => {
  return (
    <div className={styles.parcontain}>
      {comps.map((ele) => (
        <div key={ele.id} className={styles.container}>
          <div className={styles.row}>
            <div className={styles.imag}>
              <img {...ele.image} alt="lash" />
            </div>
            <div>
                <h2 className={styles.title}>{ele.name}</h2>
                <p>{ele.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {NailComponent};
