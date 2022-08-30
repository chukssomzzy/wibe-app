import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

type Props = {
    img: string, 
    title: string
}

const Item = styled(motion.div)`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 20rem; 
    margin-right: 6rem; 
    img{
        width: 100%; 
        height: auto ; 
        cursor: pointer; 
    }
    h1{ 
       display: inline-block; 
       width: fit-content;
       font-weight: 500; 
       text-align: center; 
       cursor: pointer; 
     }
`

const Product = ({ img, title= '' }: Props) => {
  return (
    <Item
     initial = {{ filter: `grayscale(100%)`  }}
     whileInView={{ filter: `grayscale(0%)` }}
     transition= {
        {
            duration: 0.5
        }
     }
     viewport={{
        once: false, amount: 'all'
     }}
    >
        <img src={img} alt="title" />
        <h1>{ title }</h1>
        </Item>
  )
}

export default Product