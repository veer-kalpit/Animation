import styles from './page.module.css'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,  // For client-side rendering
})

export default function Home() {
  return (
    <main className={styles.main}>
        <Scene />
    </main>
  )
}
