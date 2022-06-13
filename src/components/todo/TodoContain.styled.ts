import styled from "styled-components";
import {AiOutlinePlusSquare} from 'react-icons/ai';

export const TodoContainer = styled.div`
    padding: 40px 0px;
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 20px;
    @media screen and (max-width:750px) {
        grid-template-columns: 100%  0px;
    }
`
export const TodoBody = styled.div`
    padding: 10px 0px;
    
`
export const TodoBlog = styled.div`
    
`
export const TodoElement = styled.div`
    display: flex;
`
export const TodoTitle = styled.h1`
    font-size: 24px;
    color: #000;
    @media screen and (max-width:540px) {
        font-size: 18px;
    }
    @media screen and (max-width:440px) {
        font-size: 18px;
    }
`
export const TitleSpan = styled.span`
    color:#ff0066 !important;
`
export const AddButton = styled.button`
    padding: 8px 10px;
    margin-left: 10px;
    background-color:#6600ff;
    border: none;
    border-radius: 8px;
    color: #fff;
    vertical-align: middle;
    cursor: pointer;
    font-size: 14px;
    @media screen and (max-width:440px) {
        width:52%;
    }
`
export const PlusIcon = styled(AiOutlinePlusSquare)`
    font-size: 16px;
    vertical-align: middle;
    margin-right: 5px;
`
export const TodoInput = styled.input`
   width:320px;
   padding: 10px 0px;
   border-top: none;
   border-left: none;
   padding: 0px 10px;
`
export const SubmitButton = styled.button`
    padding: 8px 10px;
    background-color:#6600ff;
    border: none;
    color: #fff;
    vertical-align: middle;
    cursor: pointer;
    font-size: 14px;
    @media screen and (max-width:440px) {
        width:52%;
    }
`
export const PlusIcons = styled(AiOutlinePlusSquare)`
    font-size: 16px;
    vertical-align: middle;
    margin-right: 5px;
`
export const TodoText = styled.h5`
    font-size: 18px;
    padding-top: 40px;
    padding-bottom: 20px;
    color: gray;
`