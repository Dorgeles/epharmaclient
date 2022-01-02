import React from 'react'
import "./Dashboard.css";
import { Sidebar } from '..';
import { Maincontent } from '..';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <Maincontent />
        </div>
    )
}

export default Dashboard
