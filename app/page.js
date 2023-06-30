'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import TodayInfo from '@/components/todayInfo/TodayInfo';

export default function Home() {

  const [info, setInfo]= useState(null);
  const [temp, setTemp] = useState(0);
  const [loading, setLoading] = useState(true);

  const date = new Date();
  console.log(date);

  function getInfo(lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cbc475882bc69fbb7d7227a36f4f93c&units=metric`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setInfo(data);
        setTemp(Math.round(data.main.temp));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    let lon;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;

        console.log(`LON: ${lon}, LAT: ${lat}`)
        getInfo(lat, lon);
      })
    }
  }, [])

  useEffect(() => {
    // Acciones a realizar después de que 'info' se haya actualizado
    console.log(info);
    console.log(`${temp} °C`);
    console.log(loading);
  }, [info, temp]) // Agrega 'info' y 'temp' como dependencias

  return (
    <main className={styles.main}>
      {
        loading ? <h1>Loading... </h1> : <TodayInfo info={info} fecha={date}/>
      }
    </main>
  )
}
