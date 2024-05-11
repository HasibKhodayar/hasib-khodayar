import Navbar from "./navbar/Navbar";
import * as styles from './homeElements'
import Projects from "../projects/Projects";
import About from "../about/About";
import Experience from "../Experience/experience";
import Element from "react-scroll/modules/components/Element";

const Home = () =>{

    return (
        <>

       
        <Navbar/>
        <styles.homeContainer>
        
        <Element name = "home"> 
        <styles.wrapper>
            <styles.typewritter>
                hi, i'm hasib.
            </styles.typewritter>
        </styles.wrapper>
        </Element>

        <Element name = "about">  <About /></Element>
        <Element name = "experience"> <Experience/> </Element>
        <Element name = "projects"> <Projects /> </Element>
        

      
        </styles.homeContainer>
       
        
        </>
    );
}

export default Home