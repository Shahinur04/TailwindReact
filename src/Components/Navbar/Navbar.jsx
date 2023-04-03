import React from 'react';

const Navbar = () => {
    const routes = [
        {
          id: 1,
          name: 'Route A',
          time: '10:00 AM'
        },
        {
          id: 2,
          name: 'Route B',
          time: '11:30 AM'
        },
        {
          id: 3,
          name: 'Route C',
          time: '1:00 PM'
        },
        {
          id: 4,
          name: 'Route D',
          time: '3:00 PM'
        },
        {
          id: 5,
          name: 'Route E',
          time: '5:00 PM'
        }
      ];
      
    return (
        <nav>
            <ul>
            {
                routes.map(route=><li key={route.id}>{route.name}</li>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;