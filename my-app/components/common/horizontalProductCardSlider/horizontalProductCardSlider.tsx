"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./horizontalProductCardSlider.module.scss";
import { Product } from "@/types/product";
import ProductCard from "../productCard/productCard";

const HorizontalProductCardSlider = ({ prodicts }: { prodicts: Product[] }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdgeState = () => {
    const element = scrollerRef.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    const x = element.scrollLeft;
    setAtStart(x <= 0);
    setAtEnd(x >= max - 1);
  };

  useEffect(() => {
    updateEdgeState();
    const element = scrollerRef.current;
    if (!element) return;

    const onScroll = () => updateEdgeState();
    element.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateEdgeState);
    return () => {
      element.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateEdgeState);
    };
  }, []);

  const scrollPage = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={[styles["direction-buttons"], styles.left].join(" ")}
        onClick={() => scrollPage(-1)}
        disabled={atStart}
        aria-label="Scroll left"
      >
        {"<"}
      </button>

      <div className={styles["cards-wrapper"]} ref={scrollerRef}>
        {prodicts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <button
        type="button"
        className={[styles["direction-buttons"], styles.right].join(" ")}
        onClick={() => scrollPage(1)}
        disabled={atEnd}
        aria-label="Scroll right"
      >
        {">"}
      </button>
    </div>
  );
};

export default HorizontalProductCardSlider;
