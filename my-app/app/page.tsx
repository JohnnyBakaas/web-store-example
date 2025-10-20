import HomeHero from "@/components/home/hero/hero";
import styles from "./page.module.css";
import HomeProducShocase from "@/components/home/producShocase/producShocase";

export default function Home() {
  return (
    <main className={styles["home-wrapper"]}>
      <HomeHero />
      <HomeProducShocase />
      <section style={{ height: "100vh" }}></section>
    </main>
  );
}
