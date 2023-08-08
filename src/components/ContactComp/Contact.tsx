import Image from "next/image";
import styles from "./Contact.module.css";

import icon1 from "./iconfa1.png";
import icon2 from "./iconfa2.png";
import icon3 from "./iconfa3.png";

const SocialMedia = () => {
  const iconStyle = {
    margin: "10px",
    width: "30px",
    height: "30px",
  };

  return (
    <div className={styles["social-media"]}>
      <a href="https://www.facebook.com">
        <Image {...icon1} alt="Facebook" style={iconStyle} />
      </a>
      <a href="https://www.instagram.com">
        <Image {...icon2} alt="Instagram" style={iconStyle} />
      </a>
      <a href="https://www.twitter.com">
        <Image {...icon3} alt="Twitter" style={iconStyle} />
      </a>
    </div>
  );
};

const ContactComp = () => {
  return (
    <div className={styles.container}>
      <h2>Get in touch with us and book your appointments!</h2>
      <section className={styles.innercontainer}>
        <h3>Let&lsquo;s Chat</h3>
        <div className={styles.row}>
          <div className={styles.col}>
            <div>Phone</div>
            <p>+91 98886 34443</p>
            <p>+91 98882 14441</p>
          </div>
          <div className={styles.col}>
            <div>Email</div>
            <div>goldandpinkneelankarai@gmail.com</div>
          </div>
        </div>
        <div>
          <form>
            <div className={styles.inputgroup}>
              <div className={styles.inputfield}>
                <label htmlFor="firstname">First Name </label>
                <input type="text" id="firstname" required />
              </div>
              <div className={styles.inputfield}>
                <label htmlFor="lastname">Last Name </label>
                <input type="text" id="lastname" required />
              </div>
              <div className={styles.inputfield}>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" required />
              </div>
            </div>
            <label className={styles.messagelabel} htmlFor="Message">
              Message{" "}
            </label>
            <textarea className={styles.message} id="Message" required />
            <button className={styles.sendbutton} type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export { ContactComp };
