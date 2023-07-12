import Link from "next/link";
import styles from "./Insta.module.css";

const InstagramGrid = () => {
  const posts = [
    {
      id: 1,
      imageUrl: "icecreamhand.webp",
      caption: "Follow Us On",
      subcaption: "INSTA-GRAM!",
    },
    { id: 2, imageUrl: "post2.jpg", caption: "", subcaption: "" },
    { id: 3, imageUrl: "post3.jpg", caption: "", subcaption: "" },
    { id: 4, imageUrl: "post4.jpg", caption: "", subcaption: "" },
    { id: 5, imageUrl: "post5.jpg", caption: "", subcaption: "" },
    { id: 6, imageUrl: "", caption: "/ Get In Touch", subcaption: "" },
  ];

  return (
    <div className={styles.instagramgrid}>
      <div className={styles.column1}>
        {posts.slice(0, 1).map((post) => (
          <div key={post.id} className={styles.postitem1}>
            <Link href="https://www.instagram.com">
              <p className={styles.post1title}>{post.caption}</p>
              <p className={styles.post1subtitle}>{post.subcaption}</p>
              {post.imageUrl && (
                <img
                  width={500}
                  src={`./${post.imageUrl}`}
                  alt={post.caption}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.column2}>
        {posts.slice(1, 6).map((post) => (
          <div key={post.id} className={styles.postitem}>
            {post.imageUrl && (
              <img width={500} src={post.imageUrl} alt={post.caption} />
            )}
            {!post.imageUrl && (
              <Link href="https://www.instagram.com">
                <div className={styles.full}>
                    <p className={styles.fullcontent}>{post.caption}</p></div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { InstagramGrid };
