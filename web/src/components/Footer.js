
import styled from 'styled-components'

/*const Barra = styled.div`
width: 100%; 
height: 30px;
padding-top: 12px;
background-color: #343a40;
margin-top:15px;

color: #ffffff;
justify-content: center;
align-items: center;

display: flex;

flex-direction: column-reverse;

bottom: 0;
position: "fixed"
  
`;*/

/*
const Barra = styled.div`

width: 100%;
height: auto;
text-align: center;
color: #ffffff;
bottom: 0;
margin: 15px 0 0 0 ;
background-color: #343a40;
position: relative
`;*/

const Barra = styled.div`
bottom: 0;
position: absolute;
width: 100%;
height: 32px;
text-align: center;
color: #ffffff;
background-color: #343a40;

@media (max-width: 768px) {
  margin-top:15px;
  padding-top:15px
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position:relative
  
  }
  @media (min-width: 769px) and (max-width: 1366px) {
    margin-top:15px;
    height: 40px;
    padding-top:27px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position:relative
  }
  @media (min-width: 1377px) and (max-width: 1440px) {

  }
 
  @media (min-width: 1920px) {
  
`;




function Footer(){
    return(
       <Barra> 
          <p> Todos os direitos reservados - Pedro Hugo</p>
        </Barra>

    )
}

export default Footer;