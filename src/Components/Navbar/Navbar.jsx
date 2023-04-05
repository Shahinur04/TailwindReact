import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open ,setOpen ]=useState(false);
   
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
        <nav className='text-[#1e1b4b] bg-lime-400 px-4'>
            <div onClick={()=>setOpen(!open)} 
            className='md:hidden'>
            
            
            <span>
              { 
              open===!false ? 
              <XMarkIcon className="h-6 w-6 text-purple-500"/>:<Bars4Icon className="h-6 w-6 text-purple-500" />
              }
              </span>
            </div>
            <ul className={`md:flex md:static absolute duration-500 ${open ? 'top-6':'-top-96'}`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;