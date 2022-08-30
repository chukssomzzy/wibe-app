import { ThemeProvider } from "styled-components";
import { myTheme } from "./styles/my-theme";
import GlobalStyles from "./styles/GlobalStyles";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {  useRef } from "react";
import { Home } from './pages'
import './styles/locomotiveScroll.css'
import { AnimatePresence } from "framer-motion";
import { ScrollTriggerProxy } from "./Components/HomeComponents";

function App() {
  /* Hooks */ 

  const containerRef = useRef(null)


  return (
    <>
    <GlobalStyles/> 
    <ThemeProvider theme={myTheme}>
        <LocomotiveScrollProvider
     options={
      {
        smooth: true,
        smartphone:{
          smooth:true,
        },
        tablet:{
          smooth:true,
        }
        // ... all available Locomotive Scroll instance options 
      }
    }
    watch={
      [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
    }
    containerRef={containerRef}
    >
      <ScrollTriggerProxy />
    <AnimatePresence>
       <main className="App" data-scroll-container ref={containerRef}>
         <Home/>
    </main>
    </AnimatePresence>
    </LocomotiveScrollProvider>
    </ThemeProvider>
  
    </>
  );
}

export default App; 
