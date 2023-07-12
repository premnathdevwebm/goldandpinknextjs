"use client";
import Image from 'next/image'
import { useState, useEffect } from "react";
import styles from "@/components/HeartPump/heartpump.module.css";

const HeartPump = () => {
    const [isPumping, setIsPumping] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsPumping(() => true);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className={styles.gridcontainer}>
      <div className={styles.fullwidthColumn}>
          <div className={`${styles.heart} ${isPumping ? styles.pumping : ""}`}>
            <Image src="/heart.png" width={350} height={350} alt="company" />
          </div>
      </div>
    </div>
  );
};

export { HeartPump};
