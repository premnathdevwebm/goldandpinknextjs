import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.gridfooter}>
      <div className={styles.griditem}>
        <h3>Address</h3>
        <p>M.S. COASTLINE, DOOR NO. 60, PLOT NO.</p>
        <p>17 KABALEESHWARAR NAGAR</p>
        <p>NEELANGARAI,</p>
        <p>EASTCOAST ROAD</p>
        <p>CHENNAI 600 041</p>
      </div>
      <div className={styles.griditem}>
        <h3>Contact</h3>
        <p><a href="tel:+91 98886 34443">+91 98886 34443</a></p>
        <p><a href="tel:+91 98882 14441">+91 98882 14441</a></p>
      </div>
      <div className={styles.griditem}>
        <h3>Opening Hours</h3>
        <p>Monday to Sunday: 11am - 7pm</p>
      </div>
    </div>
  );
};

export { Footer };
