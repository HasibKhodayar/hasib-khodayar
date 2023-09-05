import Cards from "../cards/Cards";
import * as styles from "./projectElements"



const Projects = () => {
   

    return (
        <>
        <styles.projectsSection>
            


            <styles.textContainer> 
            <styles.titles>projects</styles.titles>
            <styles.imgContainer><Cards/></styles.imgContainer>
           </styles.textContainer>
          

        </styles.projectsSection>
        

        </>
    );
}

export default Projects;