import styles from "./hero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles["wrapper"]}>
      <div className={styles["left-wrapper"]}>
        <div className={styles["left"]}>
          <h1 className={styles["title"]}>En kul nett butikk</h1>
          <p className={styles["text"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            dicta commodi praesentium eveniet, molestiae earum suscipit odio
            modi veritatis illum culpa delectus officiis vero repellendus
            incidunt itaque asperiores obcaecati est?
          </p>
        </div>
      </div>
      <div className={styles["right"]}>
        <img
          src="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1734"
          alt=""
          className={styles["img"]}
        />
      </div>
    </section>
  );
};

export default HomeHero;
