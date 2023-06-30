import styles from './TodayInfo.module.css'
import Image from 'next/image'

function LocationTargetIcon(){
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <span className="material-symbols-outlined">
                my_location
             </span>
        </>
        
    )
}
function LocationIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#88869D" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
    )
}
export default function TodayInfo({info, fecha}){
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const noDia = fecha.getDate();
    const dia = fecha.getDay();
    const mes = fecha.getMonth();

    console.log(info.weather[0].main)
    return(
        <div className={styles.todayInfo}>
            <div className={styles.metodoBusqueda}>
                <button className={styles.boton}>Search for places</button>
                <div className={styles.iconoUbicacionDiv}>
                    <LocationTargetIcon />
                </div>
            </div>
            <div className={styles.iconoPronosticoDiv}>
                <Image src='/LightRain.png' width={150} height={174} alt="weather pronostic icon" />
            </div>
            <div className={styles.temperatura}>
                <div>
                    <h2>{Math.round(info.main.temp)}</h2>
                    <h3>°C</h3>
                </div>
                <h3>{info.weather[0].main}</h3>
            </div>
            <div className={styles.lugarFecha}>
                <h4>Today · {weekdays[dia]}. {noDia} {months[mes]}</h4>
                <div>
                    <LocationIcon />
                    <h4>{info.name}, {info.sys.country}</h4>
                </div>
            </div>
        </div>
    )
}