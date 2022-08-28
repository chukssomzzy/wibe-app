import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import WalkingGirl from '../../assets/video/walking-girl.mp4'


type Props = {}

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    video{
        width: 100%; 
        height: 100vh;
        object-fit: cover;
    }
`
const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0; 
    left:0;     
    right: 0;
    z-index: 5;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    `


const Title = styled(motion.div)`
    position: absolute; 
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    z-index: 5; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${ props => props.theme.text };
    div{
        display: flex; 
    }
    h1 {
        font-family: 'Kaushan Script';
        font-size: ${props => props.theme.fontBlg}; 
        text-shadow:1px 1px 1px ${props => props.theme.body};
        
    }
    h2{
       font-family: "Sirin Stencil"; 
       font-size:${props => props.theme.fontlg}; 
       text-shadow: 1px 1px 1px ${props => props.theme.body};
       text-transform: capitalize; 
        font-weight: 500; 
    }
`

const containerVariant = {
    hidden : {
        opacity: 0,
     },
     visible:{
         opacity : 1,
         transition :{
            delayChildren: 0.2, 
            staggerChildren: 0.3
        }
     },
    
}
const itemVariant = {
    hidden : {
        opacity: 0,
       
     },
     visible:{
         opacity : 1,
        
        }
     }
    

const CoverVideo = (props: Props) => {
  return (
    <VideoContainer>
        <DarkOverlay/>
        <Title 
           variants={containerVariant}
           initial= 'hidden'
           animate='visible'
        >
            <div>
            <motion.h1 variants={itemVariant} data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>W</motion.h1> 
            <motion.h1 variants={itemVariant} data-scroll data-scroll-delay='0.09' data-scroll-speed='4'>i</motion.h1>
            <motion.h1 variants={itemVariant} data-scroll data-scroll-delay='0.06' data-scroll-speed='4'>b</motion.h1>
            <motion.h1 variants={itemVariant} data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>e</motion.h1>
            </div>
            <motion.h2 variants={itemVariant} data-scroll data-scroll-delay='0.04' data-scroll-speed='2'>
                Inspire. Create. Belive</motion.h2>
        </Title>
        <video
         src={WalkingGirl} 
         autoPlay 
         muted 
         loop
        />
    </VideoContainer>
  )
}

export default CoverVideo
