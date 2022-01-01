import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerProduct from "./BannerProduct";
import styles from "./Banner.module.scss";
import React, { useState, useEffect, useMemo } from "react";

const Banner = (props: any) => {
  const products = props.data;
  //  const products = useMemo(() => props.data, [props.data]);
  /*
  const products = useMemo(
    () => [
      {
        caption: "Now Available!",
        productSpan: "Lime",
        product: "Blast",
        colorScheme: "green",
        image: "/ice.png",
        color: "rgba(43, 216, 0, 1)",
        colorLight: "rgba(172, 255, 172, 1)",
      },
      {
        caption: "50% Offer!",
        productSpan: "Choco",
        product: "Bar",
        colorScheme: "brown",
        image: "/choco.png",
        color: "rgba(162, 96, 64, 1)",
        colorLight: "rgba(255, 199, 172, 1)",
      },
      {
        caption: "Vitamin Rich",
        productSpan: "Alphonso",
        product: "Mango",
        colorScheme: "yellow",
        image: "/mango.png",
        color: "rgba(233, 181, 80,1)",
        colorLight: "rgba(252, 237, 206, 1)",
      },
    ],
    []
  );
  */
  const [toggle, setToggle] = useState(false);
  const [product, setProduct] = useState(products[0]);

  useEffect(() => {
    let timer: any;
    if (!toggle) {
      //change current product
      const totalLength = products.length;
      const currentIndex = products.indexOf(product);
      console.log(totalLength, currentIndex);
      timer = setTimeout(() => {
        if (currentIndex + 1 < totalLength) {
          setProduct(products[currentIndex + 1]);
          setToggle(true);
        } else {
          setProduct(products[0]);
          setToggle(true);
        }
      }, 7000);
    }
    return () => {
      if (!toggle) {
        clearTimeout(timer);
      }
    };
  }, [product, products, toggle]);

  useEffect(() => {
    let timer: any;
    if (toggle) {
      timer = setTimeout(() => {
        setToggle(false);
      }, 0);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [toggle]);
  return (
    <section className={styles.section}>
      {toggle || (
        <BannerProduct
          caption={product.caption}
          product={
            <React.Fragment>
              <span>{product.productSpan}</span>
              {product.product}
            </React.Fragment>
          }
          colorScheme={product.colorScheme}
          image={product.image}
          color={product.color}
          colorLight={product.colorLight}
        />
      )}
    </section>
  );
};

export default Banner;
