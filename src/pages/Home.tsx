import React from 'react'
import styled from 'styled-components'
import { CoverVideo, Logo, AboutUs, Shop, Banner, NewArrivals, Footer}  from '../Components/HomeComponents'
import Navbar from '../Components/HomeComponents/Navbar'
type Props = {}

const Section = styled.section`
    position: relative; 
    min-height: 100vh;
    overflow: hidden;
`


const Home = (props: Props) => {
  
  return ( 
    <Section data-scroll-section>
       <CoverVideo /> 
       <Navbar />
       <AboutUs/>
       <Shop />
       {/* <Logo /> */}
       <Banner />
       <NewArrivals />
       {/* animate presence */}
      <Footer />
    </Section>
  ) 
}

export default Home