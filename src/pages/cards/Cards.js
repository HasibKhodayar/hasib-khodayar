import { CCard, CRow,CCol, CCardImage, CCardBody,CCardTitle,CCardText,CCardFooter} from '@coreui/react'
import img1 from '../images/tictactoe.jpg'
import img2 from '../images/sysc.jpg'
import img3 from '../images/zuul.jpg'
import * as styled from '../home/homeElements'


const Cards = () => {
    const styles =  {
        width: '20rem',
        height: '32rem', // if want cards to all have same height;
        color: "#262223", 
        borderRadius: "30px" /* Rounded corners */
   }

  const cols = {
      width:"60px",
      paddingBottom: "60px",
      marginLeft: "-5px"
  }
  
  const but = {
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#262223", /* Text color */
    border: "2px solid #262223", /* Button border color */
    borderRadius: "4px" /* Rounded corners */
  }


  const handleClick1 = () =>{
    window.open('https://replit.com/@HasibKhodayar/Tictactoe', '_blank'); 
  }
  
  const handleClick2 = () =>{
    window.open('https://replit.com/@HasibKhodayar/Tictactoe', '_blank'); 
  }
  const handleClick3 = () =>{
    window.open('https://replit.com/@HasibKhodayar/world-of-zuul', '_blank'); 
  }


    return(
        <>
        <styled.cardContainer>
        <CRow xs={{ cols: 3, gutter: 0 }} >
            <CCol xs style={cols}>
                <CCard style={styles} >
                    <CCardImage orientation="top" src={img1} />
                    <CCardBody style = {{backgroundColor: "#DDC6B6"}}>
                        <CCardTitle>TIC-TAC-TOE</CCardTitle>
                        <CCardText className='text'>
                        Built using Java, my Tic-Tac-Toe project is a modern web application that showcases real-time gameplay, winning logic, and customization features. Players can enjoy interactive matches against AI or friends on various devices, making it an impressive addition to my portfolio.
                        </CCardText>
                    </CCardBody>
                    <CCardFooter style={{textAlign:"center"}}>
                         <button onClick={handleClick1} style = {but}>Demo</button>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs style={cols}>
                <CCard style={styles}>
                    <CCardImage orientation="top" src={img2} />
                    <CCardBody style = {{backgroundColor: "#DDC6B6"}}>
                        <CCardTitle>Success in SYSC</CCardTitle>
                        <CCardText className='text'>
                        "Success in Sysc" is our team's React-based website, assisting engineering students with GPA calculations, class resources, and study aids. It's a user-friendly platform designed to streamline academic tasks and support students in achieving success.
                        </CCardText>
                    </CCardBody>
                    <CCardFooter style={{textAlign:"center"}}>
                        <button onClick={handleClick2} style = {but}>Demo</button>
                    </CCardFooter>
                </CCard>
            </CCol>
            
            <CCol xs style={cols}>
                <CCard style={styles} >
                    <CCardImage orientation="top" src={img3} />
                    <CCardBody style = {{backgroundColor: "#DDC6B6"}}>
                        <CCardTitle>World of Zuul</CCardTitle>
                        <CCardText className='text'>
                        Built using Java, Zuul is a game I developed for a course on Object Oriented Programming I took in second year. In this game we explore Carleton University, jump room to room while collecting items and avoiding enemies.   
                        </CCardText>
                    </CCardBody>
                    <CCardFooter style={{textAlign:"center"}}>
                        <button onClick={handleClick3} style = {but}>Demo</button>
                    </CCardFooter>
                </CCard>
            </CCol>
            

        </CRow>
        </styled.cardContainer>
        </>
    )
}

export default Cards;