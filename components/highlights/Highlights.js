import styles from "./Highlights.module.css";
import Forecast from "../forecast/Forecast";

function NavigationIcon({}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <span className="material-symbols-outlined">navigation</span>
    </>
  );
}

export default function Highlights({ info }) {
  let humedad = info.main.humidity;
  let visibility = parseInt(info.visibility) / 1000;
  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.title}>
          <h2>Today's Highlights</h2>
        </div>
        <div className={styles.contenedorAdentro}>
          <div className={styles.wind}>
            <h4>Wind Status</h4>
            <div className={styles.windResults}>
              <h3>{parseInt(info.wind.speed)}</h3>
              <p>mph</p>
            </div>
            <div className={styles.windResults}>
              <div className={styles.navigationIconDiv}>
                <NavigationIcon />
              </div>
              <h4>WSW</h4>
            </div>
          </div>
          <div className={styles.wind}>
            <h4>Humidity</h4>
            <div className={styles.windResults}>
              <h3>{info.main.humidity}</h3>
              <p>%</p>
            </div>
            <div className={styles.barraPorcentajeDiv}>
              <div className={styles.numeros}>
                <small className={styles.small}>0</small>
                <small className={styles.small}>50</small>
                <small className={styles.small}>100</small>
              </div>
              <div className={styles.contenedorBarras}>
                <div className={styles.barraReferencia}></div>
                <div
                  className={styles.barraPorcentaje}
                  style={{ width: `${humedad}%` }}
                ></div>
              </div>
              <div className={styles.porcentaje}>
                <small className={styles.small}>%</small>
              </div>
            </div>
          </div>
          <div className={styles.wind}>
            <h4>Visibility</h4>
            <div className={styles.windResults}>
              <h3>{visibility}</h3>
              <p>miles</p>
            </div>
          </div>
          <div className={styles.wind}>
            <h4>Air Pressure</h4>
            <div className={styles.windResults}>
              <h3>{info.main.pressure}</h3>
              <p>mb</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
