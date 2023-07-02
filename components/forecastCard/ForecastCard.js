import styles from "./ForecastCard.module.css";
import Image from "next/image";

export default function ForecastCard() {
  return (
    <div className={styles.card}>
      <h2>Tomorrow</h2>
      <Image
        src='/Shower.png'
        width={50}
        height={50}
        alt="weather pronostic icon"
      />
      <div>
        <p className={styles.max}>16 °C</p>
        <p className={styles.min}>11 °C</p>
      </div>
    </div>
  );
}
