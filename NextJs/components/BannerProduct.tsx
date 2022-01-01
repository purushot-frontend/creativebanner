//@ts-ignore
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./BannerProduct.module.scss";
import styled from "styled-components";
import { Fade } from "react-reveal";

const myLoader = ({ src, quality }) => {
  return `http://localhost:1337${src}`;
};

const BannerProduct = (props: any) => {
  return (
    <Fade>
      <Banner
        colorLight={props.colorLight}
        color={props.color}
        className={`${styles["banner"]}`}
      >
        <div className={styles["banner__content"]}>
          <h3 className={styles["banner__caption"]}>{props.caption}</h3>
          <H1 color={props.color} className={styles["banner__product"]}>
            {props.product}
          </H1>
          <Button
            className={styles["banner__btn"]}
            rightIcon={<FaLongArrowAltRight />}
            colorScheme={props.colorScheme}
            variant="outline"
            size="lg"
          >
            Add to Cart
          </Button>
          <div className={styles["banner__image"]}>
            <Image
              loader={myLoader}
              src={props.image}
              alt="Image Of Icecream"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Banner>
    </Fade>
  );
};

const H1 = styled.h1`
  span {
    color: ${(props) => props.color};
  }
`;

const Banner = styled.div`
  border: 3px solid  ${(props) => props.color};
  background: linear-gradient(
    90deg,
    ${(props) => props.color} 0%,
    ${(props) => props.colorLight} 10%,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.8) 70%,
    ${(props) => props.colorLight} 90%,
    ${(props) => props.color} 100%
  );s
`;

export default BannerProduct;
