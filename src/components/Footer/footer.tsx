import styles from "./Footer.module.css"
const Footer = () => {
    return (
      <div className={styles.gridfooter}>
        <div className={styles.griditem}>
          <h3>Address</h3>
          <p>123 Street, City, Country</p>
        </div>
        <div className={styles.griditem}>
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className={styles.griditem}>
          <h3>Opening Hours</h3>
          <p>Monday-Friday: 9am-6pm</p>
          <p>Saturday: 10am-4pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    );
  };
  
  export  {Footer};