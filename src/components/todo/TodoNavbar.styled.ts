import styled from "styled-components";

export const TodoNav = styled.div`
    display: flex;
    justify-content: space-between;
`
export const NavLeft = styled.div`
    display: flex;
    width: 30%;
    @media screen and (max-width:1000px) {
        width: 50%;
    }
    @media screen and (max-width:600px) {
        width: 70%;
    }
`
export const SearchInput = styled.input`
    width: 350px;
    border-radius: 0px;
    padding: 10px 10px;
    border:1px solid gray;
    @media screen and (max-width:400px) {
        width: 250px !important;
    }
`
export const SearchButton = styled.button`
  padding: 8px 20px;
  background: skyblue;
  font-size: 15px;
  border: none;
  cursor: pointer;
  @media screen and (max-width:400px) {
    padding: 8px 10px;
    }
`

export const NavRight = styled.div`
 
`
export const UserIcon = styled.span`
    font-size:30px;
    cursor: pointer;
`
