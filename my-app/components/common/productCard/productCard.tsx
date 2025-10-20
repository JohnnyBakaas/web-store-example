"use client";

import styles from "./productCard.module.scss";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  const formatedPrice = product.price.toFixed(2);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["img-wrapper"]}>
        <img src={product.imageLinks[0]} alt="" className={styles["img-1"]} />
        {product.imageLinks[1] && (
          <img src={product.imageLinks[1]} alt="" className={styles["img-2"]} />
        )}
      </div>
      <p className={styles["name"]}>{product.name}</p>
      <p className={styles["text"]}>{product.text}</p>
      <p className={styles["price"]}>{formatedPrice} kr</p>
    </div>
  );
};

export default ProductCard;
