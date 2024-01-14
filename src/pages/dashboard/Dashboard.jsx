import React from 'react';
import GoogleMapComponent from '../../components/google/GoogleMapComponent';
import RightSideBar from '../../components/bar/RightSideBar';

const Dashboard = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
    }}>
      <GoogleMapComponent />
      <RightSideBar />
    </div>
  );
};

export default Dashboard;
