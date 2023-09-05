import Navbar from "./navbar/Navbar";
import * as styles from './homeElements'
import Projects from "../projects/Projects";
import About from "../about/About";
import Element from "react-scroll/modules/components/Element";

const Home = () =>{

    return (
        <>

       
    
        <styles.homeContainer>
        <Navbar/>

        
        <Element name = "home"> 
        <styles.wrapper>
            <styles.typewritter>
                hi, i'm hasib.
            </styles.typewritter>
        </styles.wrapper>
        </Element>

        <Element name = "about">  <About /></Element>
        <Element name = "projects"> <Projects /> </Element>
        

      
        </styles.homeContainer>
       
        
        </>
    );
}

export default Home