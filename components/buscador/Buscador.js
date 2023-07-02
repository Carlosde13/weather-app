import styles from "./Buscador.module.css";
import TodayInfo from "../todayInfo/TodayInfo";
import { useState } from "react";
import Image from "next/image";
import Highlights from "../highlights/Highlights";
import Forecast from "../forecast/Forecast";

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="white"
      className="bi bi-x"
      viewBox="0 0 16 16"
    >
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#616475"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
}

function ForwardIcon() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </>
  );
}
function LocationTargetIcon() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <span className="material-symbols-outlined">my_location</span>
    </>
  );
}
function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#88869D"
      className="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

export default function Buscador({ info, fecha }) {
  //Sirve para mostrar la informacion del buscador y todayInfo
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  function SearchForPlacesButtons() {
    let newMostrar = !mostrarBuscador;
    setMostrarBuscador(newMostrar);
  }

  const noDia = fecha.getDate();
  const dia = fecha.getDay();
  const mes = fecha.getMonth();

  //console.log(info.weather[0].main)
  let clase;
  if (mostrarBuscador == true) clase = styles.buscador;
  if (mostrarBuscador == false) clase = styles.buscadorOculto;

  let imagenClima = "/LightCloud.png";
  let descripcionClima = info.weather[0].main;

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
    <div className={styles.cp}>
      <div className={clase}>
        <div className={styles.contenedorX} onClick={SearchForPlacesButtons}>
          <CloseIcon />
        </div>
        <div className={styles.contenedorX2}>
          <div className={styles.contenedorInput}>
            <div>
              <SearchIcon />
            </div>
            <input placeholder="search location"></input>
          </div>
          <button>Search</button>
        </div>
        <div className={styles.opcionDiv}>
          <p>London</p>
          <ForwardIcon />
        </div>
        <div className={styles.opcionDiv}>
          <p>Barcelona</p>
          <ForwardIcon />
        </div>
        <div className={styles.opcionDiv}>
          <p>Long Beach</p>
          <ForwardIcon />
        </div>
      </div>
      {/*<TodayInfo info={info} fecha={fecha}/>*/}
      <div className={styles.todayInfo}>
        <div className={styles.metodoBusqueda}>
          <button className={styles.boton} onClick={SearchForPlacesButtons}>
            Search for places
          </button>
          <div className={styles.iconoUbicacionDiv}>
            <LocationTargetIcon />
          </div>
        </div>
        <div className={styles.iconoPronosticoDiv}>
          <Image
            src={imagenClima}
            width={150}
            height={150}
            alt="weather pronostic icon"
          />
        </div>
        <div className={styles.temperatura}>
          <div>
            <h2>{Math.round(info.main.temp)}</h2>
            <h3>°C</h3>
          </div>
          <h3>{descripcionClima}</h3>
        </div>
        <div className={styles.lugarFecha}>
          <h4>
            Today · {weekdays[dia]}. {noDia} {months[mes]}
          </h4>
          <div>
            <LocationIcon />
            <h4>
              {info.name}, {info.sys.country}
            </h4>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className={styles.hlfc}>
        <Forecast />
        <Highlights info={info} />
      </div>

    </div>
  );
}
