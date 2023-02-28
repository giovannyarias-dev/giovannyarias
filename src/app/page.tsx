"use client";

import Image from 'next/image'
import { useEffect } from 'react';
import styles from './page.module.css'

export default function Home() {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

  return (
    <main className={styles.main}>
      Giovanny Arias
    </main>
  )
}

