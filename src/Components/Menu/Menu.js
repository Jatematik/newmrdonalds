import React, { useContext } from 'react';
import styled from 'styled-components';
import { Banner } from './Banner';
import { ListItem } from './ListItem';
import { Context } from '../Functions/context';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({ dbMenu }) => {

    const {openItem: {setOpenItem}} = useContext(Context);
    
    return (
        <MenuStyled>
            <Banner/>
            {dbMenu ? <>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
                </SectionMenu>
                <SectionMenu>
                    <h2>Напитки / Закуски</h2>
                    <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
                </SectionMenu>
            </> : <div>Загрузка</div>}
        </MenuStyled>
    )
};