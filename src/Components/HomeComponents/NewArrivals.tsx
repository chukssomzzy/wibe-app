import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import styled from 'styled-components'
import {Img2 as Images} from '../../assets/Images'
import Product from './Product'  
type Props = {}
const Section = styled.section`
  min-height: 100vh; 
  width: 100vw; 
  margin: 0 auto; 
  display: flex; 
  justify-content: center; 
  align-items: center;    
  position: relative; 
  background-color: #f8f808;


`
const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl}; 
    font-family: 'Kaushan Script';
    font-weight: 300; 
    text-shadow: 1p 1px 1px ${ props => props.theme.text };
    color: ${props => props.theme.body};
    position: absolute; 
    top: 1rem; 
    left: 5%; 
    z-index: 11; 

`

const OverLay = styled.div`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate( -50%, -50% ); 
  width: 20vw; 
  height: 90vh;
  z-index: 11;
  box-shadow: 0 0 0 4vw ${ props => props.theme.text };
  border: 3px solid ${ props => props.theme.body };
`

const Text = styled.div`
  width: 20%; 
  font-size: ${props => props.theme.fontlg}; 
  font-weight: 300; 
  position: absolute ; 
  padding: 2rem; 
  top: 0; 
  right: 0; 
  z-index: 11; 
  border: 1px solid black;                                      

`
const Container = styled.div`
    position: absolute; 
    top: 0; 
    left: 50%; 
    transform: translate(-50%, 0);
    width: 25vw; 
    height: auto;
   
    /* width: 65%;  */
    display: flex; 
    justify-content: center; 
    flex-direction: column;
    align-items: center; 
`

const NewArrivals = (props: Props) => {
  gsap.registerPlugin(ScrollTrigger);
  const refContainer = useRef(null)
  const verticalRef = useRef<HTMLDivElement>(null) 
  useLayoutEffect(()=>{
    let element = refContainer.current; 
    let scrollingElement = verticalRef.current
  
    let ti = gsap.timeline(); 
   
    setTimeout( 
     ()=> {
       ti.to(element,{
         scrollTrigger:{
           trigger: element,
           start: 'top top', 
           end: `bottom+=100% top-=100%`, 
           scroller: '.App', // locomotive element
           scrub: true, 
           pin: true,
           pinType: 'transform',

          //markers: true
         }, 
         // increasing the scrolling height of the element as well as the scrolling element width  
          ease: "none",

       })
       ti.fromTo(scrollingElement,
        {
          y: '0'
        },
        {
         scrollTrigger:{
           trigger: element,
           start: 'top top', 
           end: `bottom top`, 
           scroller: ".App", // locomotive element
           scrub: true, 
            //markers: true,
         }, 
         // increasing the scrolling height of the element as well as the scrolling element width 
         y: '-84%',
         ease: "power3.ease",

       })
       ScrollTrigger.refresh()
     }, 1000); 
     return () =>{
       ti.kill(); 
       ScrollTrigger.killAll()
     }
 }, [])
  /* --- some maps --- */
  const ProductMap = Images.map(({img, title}) =>(
    <Product img={img} title={title} newArrivals as='h2'/>
  ))
  return (
    <Section ref={refContainer} id='upTarget'>
      <OverLay/>
      <Title data-scroll data-scroll-speed='-1'
      data-scroll-direction='horizontal'

      >
             New Arrivals
             </Title>

             <Text data-scroll data-scroll-direction='vertical' data-scroll-sticky data-scroll-target='#upTarget'>
             There is new collection available for cool clothes in all sizes. 
This collection is a great way to find a new look for you. 
It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
<br /><br />
The first line of clothing you will see on this collection is for men. 
The collection also includes three new styles for women.
<br /><br />
Give it a try and experience a new look.
      </Text>
      <Container ref={verticalRef}>
          {
            ProductMap
          }
        </Container>
      </Section>
  )
}

export default NewArrivals