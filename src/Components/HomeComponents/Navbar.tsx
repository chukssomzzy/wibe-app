import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  isclick?: boolean;
}

const NavContainer = styled(motion.div)<Props>`
   position: absolute; 
   top: ${ props => props.isclick ? '0' : `-${props.theme.navHeight}` }; 
   width: 100vw;
   z-index: 6;
   display: flex; 
   justify-content: center;
   align-items: center; 
   transition: all 0.3s ease-out;
   `
   const MenuItems = styled(motion.ul)`
     position: relative; 
     height: ${ props => props.theme.navHeight }; 
     background-color: ${props => props.theme.body};
     color: ${ props => props.theme.textRgba }; 
     list-style: none; 
     display: flex; 
     justify-content: space-around; 
     align-items: center; 
     width: 100%; 
     padding: 0 10rem; 

   `

   const MenuBtn = styled.li`
    background-color: ${props => `rgba(${props.theme.textRgba},0.7)`};
    list-style-type: none; 
    color: ${ props => props.theme.body };
    width: 15rem;
    height:2.5rem ; 
    clip-path: polygon(0 0, 100% 1%, 71% 100%, 26% 100%);
    position: absolute; 
    top: 100%; 
    left: 50%;
    transform: translateX(-50%);
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontmd};
    font-weight: 600; 
    text-transform: uppercase; 
    cursor: pointer;
   `
const MenuItem = styled(motion.li)`
  text-transform: uppercase; 
  color: ${ props => props.theme.text };
`

const Navbar = (props: Props) => {
  const [ click , setClick ] = useState(false)
  return (
    <NavContainer isclick={click}
      initial={{
        y : "-100%"
      }}

      animate={{
        y : 0
      }}

      transition ={{
        duration: 2, 
        dalay: 2 
      }}
    >
      <MenuItems
      drag ='y'
      dragConstraints={{
        top:0,
        bottom: 70,
      }}
      dragElastic={0.05}
      dragSnapToOrigin
      >
       <MenuBtn onClick={ () => setClick(!click) }>
            Menu 
        </MenuBtn>
        <MenuItem
        whileHover={{scale:1.1,y:-5}}
        whileTap={{ scale:0.9, y: 0}}
        >Home</MenuItem>
        <MenuItem
        whileHover={{scale:1.1,y:-5}}
        whileTap={{ scale:0.9, y: 0}}
        >Home</MenuItem>
        <MenuItem
        whileHover={{scale:1.1,y:-5}}
        whileTap={{ scale:0.9, y: 0}}
        >Home</MenuItem>
        <MenuItem
        whileHover={{scale:1.1,y:-5}}
        whileTap={{ scale:0.09, y: 0}}
        >Home</MenuItem>
        <MenuItem
        whileHover={{scale:1.1,y:-5}}
        whileTap={{ scale:0.9, y: 0}}
        >Home</MenuItem>

      </MenuItems>
       

    </NavContainer>
  )
}

export default Navbar