import styles from './Forecast.module.css'
import ForecastCard from '../forecastCard/ForecastCard'

export default function Forecast({prediccion, fecha}){
    console.log("*****");
    console.log(prediccion);
    console.log(prediccion.list[0].dt_txt);
    console.log(prediccion.list.length);

    const pronostico = prediccion.list;

    let contador= fecha.getDate() + 1;
    
    
    pronostico.forEach(element => {
        let dia = fecha.getDate();
        const fechaPronostico = new Date(element.dt_txt);
        let diaPronostico = fechaPronostico.getDate();

        if(contador==diaPronostico){
            
            console.log(element.dt_txt);
            contador++;
            //console.log(contador)
        }
        //console.log(`Dia Actual: ${dia} Dia Pronostico: ${diaPronostico}`);
        
       
    });

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