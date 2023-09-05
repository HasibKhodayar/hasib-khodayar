import * as styles from "./aboutElements"

const About = () =>{
    return (
        <>
        <styles.aboutSection>
        <styles.textContainer> 
            
            <styles.titles> /about me </styles.titles> 
            
            Hi, i'm Hasib! I'm a second-year software engineering student, currently completing my second semester at Carleton University.
            <br/>
            <br/>
            My goal is to explore different areas in tech, as well as connect with different people and build new relationships. 
            <br/>
            <br/>
            Some technologies that I've been working with are: Python, React.js, Javascript, and HTML & CSS. 
        
        </styles.textContainer>
        
        <styles.imgContainer> <img src="/IMAGES/mainPic.svg" alt="pic"/> </styles.imgContainer>
        </styles.aboutSection>
        </>
    );
}

export default About;