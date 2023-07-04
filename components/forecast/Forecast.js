import styles from './Forecast.module.css'
import ForecastCard from '../forecastCard/ForecastCard'

export default function Forecast({prediccion, fecha}){

    const pronostico = prediccion.list;

    let contador= fecha.getDate() + 1;
    
    let listaPronosticos = []
    pronostico.forEach(element => {
        let dia = fecha.getDate();
        const fechaPronostico = new Date(element.dt_txt);
        let diaPronostico = fechaPronostico.getDate();

        if(contador==diaPronostico){
            listaPronosticos.push(element)
            contador++;
        }
    });
    let fechaPronostico;
    return(
        <div className={styles.contenedor}>
            <div className={styles.contenedorAdentro}>
                {
                    listaPronosticos.map((item, index) => (
                        <ForecastCard key = {index} item={item} fecha={fecha}/>
                    ))
                }
                
            </div>
        </div>
    )
}
/*
<ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
*/