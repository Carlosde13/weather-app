'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import TodayInfo from '@/components/todayInfo/TodayInfo';
import Buscador from '@/components/buscador/Buscador';
import LoadingView from '@/components/loadingView/LoadingView';
import Highlights from '@/components/highlights/Highlights';

export default function Home() {

  

  return (
    <main className={styles.main}>

        <Buscador />

    </main>
  )
}