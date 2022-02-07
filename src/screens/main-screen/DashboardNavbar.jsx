import React from 'react';
import { GiHospital } from 'react-icons/gi';
import styled from 'styled-components';

const DashboardNavbar = () => {
  return <div>
      <Header>
      <div className='logo'>
                <GiHospital color='#fff' size={35}/>
                <p className="logo-text">
                    Pharma <span>Fresco</span>
                </p>
            </div>
          <nav>
              <Unline>
                <Li><A href="#">Ventes</A></Li>
                <Li><A href="#">Inventaires</A></Li>
                <Li><A href="#">Client</A></Li>
              </Unline>
          </nav>
          <A href="#"><ButtonDash>Super Admin</ButtonDash></A>
      </Header>
  </div>;
};

const Unline = styled.ul`
    list-style: none;

`;
const Li = styled.li`
    font-weight: 500;
    font-size: 16px;
    color: edf0f1;
    text-decoration: none;
    display: inline-block;
`;
const A = styled.a`
    font-weight:500;
    font-size:16px;
    color: edf0f1;
    text-decoration: none;
`;
const ButtonDash = styled.button`
    font-weight:500;
    font-size:16px;
    color: edf0f1;
    text-decoration: none;
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
`;


export default DashboardNavbar;
