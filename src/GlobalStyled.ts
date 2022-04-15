
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@200;400;500;600;700;800;900&display=swap');
body{
  overflow-x:hidden !important ;
}
*{
    box-sizing:border-box ;
    margin:0 ;
    padding:0 ;
    font-family: 'Open Sans', sans-serif !important;
}
`
export const Container = styled.div`
  max-width: 2600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;