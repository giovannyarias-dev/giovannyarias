import Image from 'next/image'
import styles from './page.module.css'

const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight()

export default function Home() {
  return (
    <main className={styles.main}>
      Giovanny Arias
    </main>
  )
}
