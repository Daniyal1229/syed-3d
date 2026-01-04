import React from 'react';
import MiniMap from './MiniMap';
import Toolbar from './Toolbar';

const Dashboard = (props) => (
  <div className="dashboard">
    <Toolbar {...props} />
    <MiniMap />
  </div>
);

export default Dashboard;
