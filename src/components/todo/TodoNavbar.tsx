import React from 'react';
import { NavLeft, NavRight, SearchButton, SearchInput, TodoNav, UserIcon} from './TodoNavbar.styled';
import { BsSearch } from 'react-icons/bs';
import { FaUserCircle} from 'react-icons/fa';

const TodoNavbar = () => {
    return (
        <>
            <TodoNav>
                <NavLeft>
                    {/* <SearchInput type="text" placeholder="Search..">
                    </SearchInput>
                    <SearchButton> <BsSearch /></SearchButton> */}
                </NavLeft>
                <NavRight>
                    <UserIcon>
                    <FaUserCircle/>
                    </UserIcon>
                </NavRight>
                
            </TodoNav>  
        </>
    );
};

export default TodoNavbar;