'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import TodayInfo from '@/components/todayInfo/TodayInfo';
import Buscador from '@/components/buscador/Buscador';
import LoadingView from '@/components/loadingView/LoadingView';
import Highlights from '@/components/highlights/Highlights';

export default function Home() {

  const [info, setInfo]= useState(null);
  const [loading, setLoading] = useState(true);
  const [prediccion, setPrediccion] = useState (null);
  let lon;
  let lat;

  const date = new Date();
  console.log(date);

  function getInfo(lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cbc475882bc69fbb7d7227a36f4f93c&units=metric`
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1cbc475882bc69fbb7d7227a36f4f93c`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setInfo(data);
        
      })
      .catch(error => {
        console.log(error);
      })
      fetch(url2)
      .then(response => response.json())
      .then(data => {
        setPrediccion(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })

      
  }
  function getPrediccion(lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1cbc475882bc69fbb7d7227a36f4f93c`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPrediccion(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;

        console.log(`LON: ${lon}, LAT: ${lat}`)
        getInfo(lat, lon);
        //getPrediccion(lat, lon)
      })
    }
  }, [])

  useEffect(() => {
    // Acciones a realizar después de que 'info' se haya actualizado
    console.log(info);
    console.log(loading);
    console.log(prediccion);
  }, [info, prediccion]) // Agrega 'info' ' como dependencia

  return (
    <main className={styles.main}>
      {
        loading ? <LoadingView /> : <Buscador info={info} fecha={date} prediccion={prediccion}/>
      }
    </main>
  )
}