import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/Scene/Index"), {
  ssr: false, // For client-side rendering
});

const Scene1 = dynamic(() => import("../components/Scene1/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.scene}>
        <Scene />
      </div>
      <div className={styles.scene1}>
        <Scene1 />
      </div>
    </main>
  );
}
