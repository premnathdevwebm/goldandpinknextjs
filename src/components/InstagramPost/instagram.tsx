import Link from "next/link";
import styles from "./Insta.module.css";
import Image from "next/image";

type InstagramData = {
  id: string;
  media_type: string;
  media_url: string;
  username: string;
  timestamp: string;
}[];

async function getInstagramData() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption&access_token=${process.env.NEXT_INSTA_ACCESS}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let res = await response.json();
    res = res.data.map((ele: { id: any }) => ele.id);

    res = res.map(async (data: any) => {
      try {
        const inter = await fetch(
          `https://graph.instagram.com/${data}?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_INSTA_ACCESS}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return await inter.json();
      } catch (err) {
        console.error("Error:", err);
      }
    });
   return Promise.all(res)
      .then((res1) => {
        return res1;
      })
      .catch((err) => {
        return [];
      });
  } catch (error) {
    console.error("Error:", error);
  }
}

const InstagramGrid = async () => {
  const data: InstagramData = await getInstagramData() ?? [];
  const posts = [
    {
      id: 1,
      imageUrl: "icecreamhand.webp",
      caption: "Follow Us On",
      subcaption: "INSTA-GRAM!",
    },
    { id: 2, imageUrl: data[0]?.media_url ?? "", caption: "", subcaption: "" },
    { id: 3, imageUrl: data[1]?.media_url ?? "", caption: "", subcaption: "" },
    { id: 4, imageUrl: data[2]?.media_url ?? "", caption: "", subcaption: "" },
    { id: 5, imageUrl: data[0]?.media_url ?? "", caption: "", subcaption: "" },
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
                <Image
                  width={550}
                  height={500}
                  src={`/${post.imageUrl}`}
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
              <Image
                width={200}
                height={150}
                src={`${post.imageUrl}`}
                alt={post.caption}
              />
            )}
            {!post.imageUrl && (
              <Link href="https://www.instagram.com">
                <div className={styles.full}>
                  <p className={styles.fullcontent}>{post.caption}</p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { InstagramGrid };
