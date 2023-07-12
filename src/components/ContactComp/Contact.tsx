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
    <div className={styles.socialicons}>
      <a href="https://www.facebook.com">
        <img {...icon1} alt="Facebook" style={iconStyle} />
      </a>
      <a href="https://www.instagram.com">
        <img {...icon2} alt="Instagram" style={iconStyle} />
      </a>
      <a href="https://www.twitter.com">
        <img {...icon3} alt="Twitter" style={iconStyle} />
      </a>
    </div>
  );
};

const ContactComp = () => {
  return (
    <div className={styles.container}>
      <h2>Get in touch with us and book your appointments!</h2>
      <section className={styles.innercontainer}>
        <h3>Let's Chat</h3>
        <div className={styles.row}>
          <div className={styles.col}>
            <div>Phone</div>
            <div>123-456-7890</div>
          </div>
          <div className={styles.col}>
            <div>Email</div>
            <div>info@mysite.com</div>
          </div>
          <div className={styles.col}>
            <div>Social Media</div>
            <SocialMedia />
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
            <label htmlFor="Message">Message </label>
            <textarea id="Message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export { ContactComp};
