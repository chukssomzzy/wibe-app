import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type Props = {
  img: string;
  title: string;
  newArrivals: boolean;
  as ?: 'h1' | 'h2'
};
const Item = styled(motion.div) <{ newArrivals: boolean }>`
 ${props => props.newArrivals && 'margin: 5rem 0;'}
${props => !props.newArrivals && ' width: 20rem; margin-right: 6rem;'}
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    ${props => !(props.newArrivals) && 'cursor: pointer;'}
    ${props => props.newArrivals && 'z-index:5;'}
  }
  ${props => !(props.newArrivals) && ' h1 { display: inline-block;width: fit-content;font-weight: 500;text-align: center; cursor: pointer; }'}

 
`

const Product = 
({
  img,
  title = "",
  newArrivals,
  as
}: Props
) => {
  const Text = as || 'h1'
  return (
    < Item

      initial={{ filter: `grayscale(100%)` }}
      whileInView={{ filter: `grayscale(0%)` }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: false,
        amount: "all",
      }}
      newArrivals={newArrivals}
    >
      <img src={img} alt="title" />
      <Text>{title}</Text>
    </Item>
  );
};

export default Product;
