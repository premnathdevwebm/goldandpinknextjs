"use client";
import { useState } from "react";
import styles from "./service.module.css"
const services = [
  { id: "1", title: "Mani Pedi", description: "View More" },
  { id: "2", title: "Nail Bar", description: "View More" },
  { id: "3", title: "Lashes", description: "View More" },
  { id: "4", title: "Hydra Facial", description: "View More" },
  { id: "5", title: "Laser Hair Removal", description: "View More" },
  { id: "6", title: "Acne Treatment", description: "View More" },
  { id: "7", title: "Botox", description: "View More" },
  { id: "8", title: "Fillers", description: "View More" },
  { id: "9", title: "Glutathione Infusion", description: "View More" },
];

export default function Page({ params }: { params: { id: string } }) {
  const data =
    services.find((service) => service.id === params.id)?.title ?? "Not Found";

  const [name, setName] = useState("");
  const [service] = useState(data);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleSubmit = (e: any) => {};

  return (
    <div className={styles.container}>
      <form className={styles.formcont} onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Service needed:</label>
          <input type="text" value={service} readOnly />
        </div>

        <div>
          <label>Choose the date of your appointment:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Preferred Timings:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}
