import React from 'react';

const RightSideBar = () => {
  return (
    <section style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div>
        <div
          style={{ backgroundColor: 'white', padding: '30px', width: '200px' }}
        >
          <p>4,510</p>
          <p>Total Items</p>
        </div>
        <div></div>
      </div>
      <div
        style={{ backgroundColor: 'white', padding: '30px', width: '200px' }}
      >
        <div>
          <p>45.234</p>
          <p>Total Orders</p>
        </div>
        <div></div>
      </div>
      <div
        style={{ backgroundColor: 'white', padding: '30px', width: '200px' }}
      >
        <div>
          <p>1.325</p>
          <p>Total Restaurant</p>
        </div>
        <div></div>
      </div>
      <div
        style={{ backgroundColor: 'white', padding: '30px', width: '200px' }}
      >
        <div>
          <p>105.434</p>
          <p>Total Users</p>
        </div>
        <div></div>
      </div>
      <div
        style={{ backgroundColor: 'white', padding: '30px', width: '200px' }}
      >
        <div>
          <p>1.752</p>
          <p>Total Drivers</p>
        </div>
        <div></div>
      </div>
      <button
        style={{
          all: 'unset',
          textAlign: 'center',
          backgroundColor: '#3b5998',
          color: 'white',
          padding: '10px',
        }}
      >
        VIEW ALL
      </button>
    </section>
  );
};

export default RightSideBar;
