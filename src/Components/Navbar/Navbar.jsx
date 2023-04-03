import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
    cont [open ,setOpen ]=useState(false);
   
      const routes = [
        {
          name: 'Home',
          id: 1,
          path: '/'
        },
        {
          name: 'About',
          id: 2,
          path: '/about'
        },
        {
          name: 'Contact',
          id: 3,
          path: '/contact'
        },
        {
            name: 'Dashboard',
            id: 4,
            path: '/dashboard'
          },
          {
            name: 'Profile',
            id: 5,
            path: '/profile'
          }
      ];
            
      
    return (
        <nav>
            <Bars4Icon className="h-6 w-6 text-purple-500" />
            <ul className='md:flex text-2xl'>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;