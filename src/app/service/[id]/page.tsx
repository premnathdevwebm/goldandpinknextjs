"use client";
import { useState } from "react";
import styles from "./service.module.css"
const services = [
  { id: "1", title: "Mani Pedi"},
  { id: "2", title: "Nail Bar" },
  { id: "3", title: "Lashes" },
  { id: "4", title: "Hydra Facial" },
  { id: "5", title: "Laser Hair Removal" },
  { id: "6", title: "Acne Treatment" },
  { id: "7", title: "Botox"},
  { id: "8", title: "Fillers" },
  { id: "9", title: "Glutathione Infusion" },
  { id: "10", title: "Lash extensions"},
  { id: "11", title: "Lash lift"},
  { id: "12", title: "Lash lift"},
  { id: "13", title: "Lash lift"},
  { id: "14", title: "Lash lift"},
  { id: "15", title: "Lash lift"},
  { id: "16", title: "Lash lift"},
  { id: "17", title: "Lash lift"},
  { id: "18", title: "Lash lift"},
];

export default function Page({ params }: { params: { id: string } }) {
  const data =
    services.find((service) => service.id === params.id)?.title ?? "Not Found";

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
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
          <label>Contact:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
