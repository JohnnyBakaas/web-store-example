import HorizontalProductCardSlider from "@/components/common/horizontalProductCardSlider/horizontalProductCardSlider";
import styles from "./producShocase.module.scss";
import mockProducts from "@/mock/mockProducs";

const HomeProducShocase = () => {
  const prodicts = mockProducts;

  return (
    <section className={styles["wrapper"]}>
      <HorizontalProductCardSlider prodicts={prodicts} />
    </section>
  );
};

export default HomeProducShocase;
