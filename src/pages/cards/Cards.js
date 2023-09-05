import { CCard, CRow,CCol, CCardImage, CCardBody,CCardTitle,CCardText,CCardFooter} from '@coreui/react'
import img1 from '../images/tictactoe.jpg'
import img2 from '../images/sysc.jpg'

import '@coreui/coreui/dist/css/coreui.min.css'

const Cards = () => {



    return(
        <>
        <div className='cc'>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
            <CCol xs>
                <CCard style={{width:'50rem'}} >
                    <CCardImage className='img' orientation="top" src={img1} />
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText className='text'>
                            This is a wider card with supporting text below as a natural lead-in to additional
                            content. This content is a little bit longer.
                        </CCardText>
                    </CCardBody>
                    <CCardFooter>
                        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard style={{width:'50rem'}}>
                    <CCardImage className='img' orientation="top" src={img2} />
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText className='text'>
                            This is a wider card with supporting text below as a natural lead-in to additional
                            content. This content is a little bit longer.
                        </CCardText>
                    </CCardBody>
                    <CCardFooter>
                        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardFooter>
                </CCard>
            </CCol>

            

        </CRow>
        </div>
        </>
    )
}

export default Cards;