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
        <p>+91 98886 34443</p>
        <p>+91 98882 14441</p>
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

export { Footer };
