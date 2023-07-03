import styles from "./ForecastCard.module.css";
import Image from "next/image";

export default function ForecastCard({item, fecha}) {
  let textoDia="texto";
  let imagenClima = "/LightCloud.png";
  const fechaPronostico = new Date(item.dt_txt);
  const nombresDias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const nombresMeses = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  //let diaPronostico = fechaPronostico.getDay();
  let nombreDia= nombresDias[fechaPronostico.getDay()];

  textoDia = `${nombreDia}, ${fechaPronostico.getDate()} ${nombresMeses[fechaPronostico.getMonth()]}`

  if (fecha.getDate()+1 == fechaPronostico.getDate()) textoDia = "Tomorrow"

  let descripcionClima = item.weather[0].main;

  if (descripcionClima == "Clear") imagenClima = "/Clear.png";
  if (descripcionClima == "Clouds") imagenClima = "/HeavyCloud.png";
  if (descripcionClima == "Rain") imagenClima = "/LightRain.png";
  if (descripcionClima == "Drizzle") imagenClima = "/Shower.png";
  if (descripcionClima == "Thunderstorm") imagenClima = "/Thunderstorm.png";
  if (descripcionClima == "Snow") imagenClima = "/Snow.png";
  if (descripcionClima == "Mist") imagenClima = "/Mist.png";
  if (descripcionClima == "Smoke") imagenClima = "/Smoke1.png";
  if (descripcionClima == "Haze") imagenClima = "/Haze.png";
  if (descripcionClima == "Dust") imagenClima = "/Dust1.png";
  return (
    <div className={styles.card}>
      <h2>{textoDia}</h2>
      <Image
        src={imagenClima}
        width={50}
        height={50}
        alt="weather pronostic icon"
      />
      <div>
        <p className={styles.max}>{parseInt(item.main.temp_max)} °C</p>
        <p className={styles.min}>{parseInt(item.main.temp_min)} °C</p>
      </div>
    </div>
  );
}
