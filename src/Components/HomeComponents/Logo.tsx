import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
type Props = {}

const Container = styled.div`
    position: absolute; 
    top: 1rem; 
    left: 1rem; 
    width: 100%; 
    color: ${props => props.theme.text}; 
    z-index: 5;
    a{
        display: flex;
        align-items: flex-end;
    }
    svg{
        width: 4rem; 
        height: auto; 
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g{ 
            path {
                stroke: ${props => props.theme.text}
            }
         }
    }
`

const Text = styled(motion.span)`
    font-size: ${props => props.theme.fontlg}; 
    color: ${props => props.theme.text}; 
    padding-bottom: 0.5rem;
`

const pathVariant = {
    hidden : {
        opacity: 0,
      pathLength: 0,
     },
     visible:{
         opacity : 1,
         pathLength: 1,
         transition :{
            duration: 2, 
            ease: 'easeInOut'
        }
     },
    
}
const textVariant = {
    hidden : {
        opacity: 0,
        x: -50,
     },
     visible:{
         opacity : 1,
         x: 1,
         transition :{
            duration: 2, 
            delay: 2,
            ease: 'easeInOut'
        }
     },
    
}

const Logo = (props: Props) => {
  return (
    <Container>
        <Link to="/">
        <svg 
           xmlns="http://www.w3.org/2000/svg" 
           enable-background="new 0 0 24 24" 
           height="48px" 
           viewBox="0 0 24 24" 
           width="48px" 
           fill="none"
           >
            <g>
                </g>
                <g>
                    <motion.path 
                    variants= {pathVariant}
                    initial= 'hidden'
                    animate='visible'
                    d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/>
                    </g>
                    </svg>
          <Text
            variants= {textVariant}
            initial='hidden'
            animate= 'visible'
          >Wibe Studi0</Text>
        </Link>
    </Container>
  )
}

export default Logo