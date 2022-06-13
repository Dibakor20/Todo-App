import styled from "styled-components";
import {BiEdit} from 'react-icons/bi'

export const TaskCard = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid lightgray;
`
export const TaskList = styled.li`
    color:#6600ff;
`
export const TaskTitle = styled.span`
    color: gray !important;
    font-size: 16px;
    @media screen and (max-width:580px) {
        font-size: 13px;
    }
`

export const TaskTable = styled.div`
    display: grid;
    grid-template-columns: 60% 20%  15%;
    grid-gap: 20px;
    @media screen and (max-width:580px) {
        grid-gap:10px;
    }
`

export const TaskStatus = styled.button`
     background-color:#007bff;
     border-radius: 30px !important;
     color: white;
     height:22px;
     width: 80px;
    border: none;
     text-align: center;
    margin: auto;
     border-radius: 5px;
     font-size: 12px;
     cursor: pointer;
     @media screen and (max-width: 500px) {
        height:22px;
        width: 60px;
     }
`
export const EditButton = styled(BiEdit)`
    font-size: 22px;
    margin-left: auto;
    cursor: pointer;
    color: #ff6600;
    margin: auto 0 auto auto;
`