import React from 'react'
import styled from 'styled-components'
import { CoverVideo, Logo, AboutUs, Shop, ScrollTriggerProxy }  from '../Components/HomeComponents'
import Navbar from '../Components/HomeComponents/Navbar'
type Props = {}

const Section = styled.section`
    position: relative; 
    min-height: 100vh;
    overflow: hidden;
`


const Home = (props: Props) => {
  
  return ( 
    <>
     <ScrollTriggerProxy />
    <Section className='App' data-scroll-section>
       <CoverVideo /> 
       <Navbar />
       <AboutUs/>
       <Shop />
       {/* <Logo /> */}
       <h1>Logo</h1>
       {/* animate presence */}
       
    </Section>
    </>
  )
}

export default Home