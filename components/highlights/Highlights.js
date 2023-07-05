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

  
  function obtenerDireccionViento(grados) {
    // Definir los rangos y las correspondientes direcciones cardinales
    const direcciones = [
      { rango: [348.75, 11.25], direccion: 'N' },
      { rango: [11.25, 33.75], direccion: 'NNE' },
      { rango: [33.75, 56.25], direccion: 'NE' },
      { rango: [56.25, 78.75], direccion: 'ENE' },
      { rango: [78.75, 101.25], direccion: 'E' },
      { rango: [101.25, 123.75], direccion: 'ESE' },
      { rango: [123.75, 146.25], direccion: 'SE' },
      { rango: [146.25, 168.75], direccion: 'SSE' },
      { rango: [168.75, 191.25], direccion: 'S' },
      { rango: [191.25, 213.75], direccion: 'SSW' },
      { rango: [213.75, 236.25], direccion: 'SW' },
      { rango: [236.25, 258.75], direccion: 'WSW' },
      { rango: [258.75, 281.25], direccion: 'W' },
      { rango: [281.25, 303.75], direccion: 'WNW' },
      { rango: [303.75, 326.25], direccion: 'NW' },
      { rango: [326.25, 348.75], direccion: 'NNW' },
    ];
  
    // Encontrar la dirección correspondiente al valor de grados
    const direccionEncontrada = direcciones.find(
      (direccion) => grados >= direccion.rango[0] && grados < direccion.rango[1]
    );
  
    if (direccionEncontrada) {
      return direccionEncontrada.direccion;
    } else {
      return 'N/A'; // Dirección no encontrada
    }
  }
  const grados = info.wind.deg;
  const iniciales = obtenerDireccionViento(grados);

  const speed = parseInt((info.wind.speed * 1 * 3600)/ (1609.36 * 1));
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
              <h3>{speed}</h3>
              <p>mph</p>
            </div>
            <div className={styles.windResults}>
              <div className={styles.navigationIconDiv} style={{transform: `rotate(${grados}deg`}}>
                <NavigationIcon />
              </div>
              <h4>{iniciales}</h4>
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
