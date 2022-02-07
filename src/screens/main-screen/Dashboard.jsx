import React from 'react';
import styled from 'styled-components';
import DashboardNavbar from "./DashboardNavbar"

const Dashboard = () => {
  return <Container>
      <DashboardNavbar/>
</Container>;
};

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: var(--dark-green);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;


export default Dashboard;
