import * as styles from "./aboutElements";
import img from "../images/mainPic.svg";

const About = () => {
  return (
    <>
      <styles.aboutSection>
        <styles.textContainer>
          <styles.titles> /about me </styles.titles>

          <styles.textContainer>
            Greetings! I'm Hasib, and I'm currently in my third year of studying
            Software Engineering at Carleton University. Exploring the seamless
            fusion of cutting-edge technology with user-centric design is what
            truly ignites my passion.
            <br />
            <br />
            My recent endeavors have revolved around delving deep into the
            functionalities of frameworks like React and Spring Boot.
            <br />
            <br />
            Here, you'll discover my ventures and undertakings as I endeavor to
            push the boundaries of software engineering, one code at a time.
          </styles.textContainer>
        </styles.textContainer>

        <styles.imgContainer src={img} alt="pic" />
      </styles.aboutSection>
    </>
  );
};

export default About;
