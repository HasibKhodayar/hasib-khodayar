import { CCard, CRow,CCol, CCardImage, CCardBody,CCardTitle,CCardText,CCardFooter} from '@coreui/react'
import img1 from '../images/tictactoe.jpg'
import img2 from '../images/sysc.jpg'
import * as styled from '../home/homeElements'


const Cards = () => {
    const card_width = '20rem';
    const card_height = '32rem'; // if want cards to all have same height


    return(
        <>
        <styled.cardContainer>
        <CRow xs={{ cols: 2, gutter: 0 }}>
            <CCol xs>
                <CCard style={{width:card_width, height:card_height}} >
                    <CCardImage orientation="top" src={img1} />
                    <CCardBody>
                        <CCardTitle>TIC-TAC-TOE</CCardTitle>
                        <CCardText className='text'>
                        Built using React, my Tic-Tac-Toe project is a modern web application that showcases real-time gameplay, winning logic, and customization features. Players can enjoy interactive matches against AI or friends on various devices, making it an impressive addition to my portfolio.
                        </CCardText>
                    </CCardBody>
                    <CCardFooter>
                        <small className="text-medium-emphasis">March 2023</small>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard style={{width:card_width, height:card_height}}>
                    <CCardImage orientation="top" src={img2} />
                    <CCardBody>
                        <CCardTitle>Success in SYSC</CCardTitle>
                        <CCardText className='text'>
                        "Success in Sysc" is our team's React-based website, assisting engineering students with GPA calculations, class resources, and study aids. It's a user-friendly platform designed to streamline academic tasks and support students in achieving success.
                        </CCardText>
                    </CCardBody>
                    <CCardFooter>
                        <small className="text-medium-emphasis">July 2023</small>
                    </CCardFooter>
                </CCard>
            </CCol>

            

        </CRow>
        </styled.cardContainer>
        </>
    )
}

export default Cards;