import styles from './Forecast.module.css'
import ForecastCard from '../forecastCard/ForecastCard'

export default function Forecast(){
    return(
        <div className={styles.contenedor}>
            <div className={styles.contenedorAdentro}>
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </div>
        </div>
    )
}