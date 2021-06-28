import React from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const ButtonNavBar = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: transparent;
    border: none;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    cursor: pointer;
`;

const ButtonImage = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M15.772 15.4145C17.8896 15.4145 19.7234 14.655 21.2217 13.1564C22.72 11.6582 23.4795 9.82491 23.4795 7.707C23.4795 5.58982 22.72 3.75633 21.2214 2.25756C19.7229 0.759519 17.8894 0 15.772 0C13.6541 0 11.8208 0.759519 10.3225 2.2578C8.82422 3.75609 8.06445 5.58958 8.06445 7.707C8.06445 9.82491 8.82422 11.6584 10.3228 13.1567C11.8213 14.6547 13.6548 15.4145 15.772 15.4145Z' fill='white'/%3E%3Cpath d='M29.2581 24.6063C29.2148 23.9828 29.1274 23.3026 28.9988 22.5844C28.8689 21.8608 28.7017 21.1767 28.5015 20.5514C28.2947 19.9052 28.0134 19.267 27.6658 18.6554C27.3049 18.0207 26.8811 17.4679 26.4055 17.0131C25.9082 16.5373 25.2993 16.1547 24.5952 15.8757C23.8936 15.5981 23.116 15.4575 22.2842 15.4575C21.9575 15.4575 21.6416 15.5915 21.0315 15.9887C20.656 16.2336 20.2168 16.5168 19.7266 16.83C19.3074 17.0971 18.7395 17.3473 18.0381 17.5739C17.3538 17.7953 16.6589 17.9076 15.9731 17.9076C15.2874 17.9076 14.5928 17.7953 13.9077 17.5739C13.207 17.3476 12.6392 17.0973 12.2205 16.8303C11.7349 16.52 11.2954 16.2368 10.9143 15.9885C10.3049 15.5912 9.98877 15.4572 9.66211 15.4572C8.83008 15.4572 8.05273 15.5981 7.35132 15.8759C6.64771 16.1545 6.03857 16.537 5.54077 17.0134C5.06543 17.4684 4.64136 18.0209 4.28101 18.6554C3.93359 19.267 3.65234 19.905 3.44531 20.5517C3.24536 21.1769 3.07812 21.8608 2.94824 22.5844C2.81958 23.3017 2.73218 23.9821 2.68896 24.6071C2.64648 25.2194 2.625 25.8549 2.625 26.4967C2.625 28.1671 3.15601 29.5194 4.20312 30.5167C5.2373 31.5009 6.60571 32.0001 8.26978 32.0001H23.678C25.342 32.0001 26.71 31.5011 27.7444 30.5167C28.7917 29.5201 29.3228 28.1676 29.3228 26.4965C29.3225 25.8517 29.3008 25.2157 29.2581 24.6063Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MRDonalds</H1>
        </Logo>
        <ButtonNavBar>
            <ButtonImage/>
            <span>войти</span>
        </ButtonNavBar>
    </NavBarStyled>
);