import React, {  useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type Props = {}

const Section = styled.div`
min-height: 100vh;
height: auto; 
width: 100vw; 
margin: 0 auto; 
overflow: hidden; 
display: flex; 
justify-content: flex-start ; 
align-items: flex-start;
position: relative;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl}; 
    font-family: 'Kaushan Script';
    font-weight: 300; 
    text-shadow: 1p 1px 1px ${ props => props.theme.body };
    color: ${props => props.theme.text};
    position: absolute; 
    top: 1rem; 
    left: 5%; 
    z-index: 11; 

`
const Left = styled.div`
width : 35%; 
background-color: ${ props => props.theme.body }; 
color: ${ props => props.theme.text }; 
min-height: 100vh; 
z-index: 5; 
position:fixed;
display: flex;
left: 0;
justify-content : center;
align-items: center;
p{
    font-size: ${ props => props.theme.fontlg }; 
    font-weight: 300; 
    width: 80%; 
    margin: 0 auto; 

}

`
const Right = styled.div`
    position: absolute; 
    left: 35%; 
    min-height: 100vh;
    padding-left: 30%; 
    background-color: ${ props => props.theme.gray };
    /* width: 65%;  */
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
    h1 {
      width: 5rem; 
      margin: 0 2rem;  
    }
`

const Shop = (props: Props) => {
  gsap.registerPlugin(ScrollTrigger);
  const refContainer = useRef(null)
  const horizontalRef = useRef<HTMLDivElement>(null) 

  useLayoutEffect(()=>{
     let element = refContainer.current; 
     let scrollingElement = horizontalRef.current
     let pinWrapWidth = scrollingElement?.offsetWidth as number; 
     let ti = gsap.timeline(); 
     console.log(pinWrapWidth)
     setTimeout( 
      ()=> {
        ti.to(element,{
          scrollTrigger:{
            trigger: element,
            start: 'top top', 
            end: pinWrapWidth, 
            scroller: '.App', // locomotive element
            scrub: true, 
            pin: true,
            // markers: true
          }, 
          // increasing the scrolling height of the element as well as the scrolling element width 
          height: `${scrollingElement?.scrollWidth}px`, 
          ease: "none",

        })
        ti.to(scrollingElement,{
          scrollTrigger:{
            trigger: scrollingElement,
            start: 'top top', 
            end: pinWrapWidth, 
            scroller: ".App", // locomotive element
            scrub: true, 
            // markers: true
          }, 
          // increasing the scrolling height of the element as well as the scrolling element width 
          x: -pinWrapWidth,
          ease: "none",

        })
        ScrollTrigger.refresh()
      }, 1000); 
      return () =>{
        ti.kill(); 
        ScrollTrigger.killAll()
      }
  }, [])
  
  return (
    <Section ref={refContainer}>
        <Title data-scroll data-scroll-speed='-1'>
             New Arrivals
             </Title>
        <Left>
            <p>
                 The brand new collection is currently being developed in USA. 
We create our products using best quality material, including the use of some of the pure fabrics to make our products. 
All products are made using the best materials, from the finest cotton to the finest fabrics.
<br /><br />
We have lots of different clothing options like shoes, jackets and dresses. 
Not only clothes but we also provide unique Jewellery as well. 
It is great for us to carry our new clothes all around the country and look different.
            </p>
           
        </Left>
        <Right className="scrollRight" ref={horizontalRef}>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
           <h1>img</h1>
        </Right>
    </Section>
  )
}

export default Shop