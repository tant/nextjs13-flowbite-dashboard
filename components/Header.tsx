import React from 'react'
import Image from 'next/image';

import HeaderUser from './HeaderUser';
import HeaderLogo from './HeaderLogo';


function Header() {
    
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <HeaderLogo
                logosrc= {"https://flowbite.com/docs/images/logo.svg"}
                logoalt= {"ok nha"}
                logourl= {'https://carp.vn'}
            />
            {/* Tương lai là phải truyền vào avatar, tên, email             */}
            <HeaderUser
            />
            
            </div>
          </div>
    </nav>
  )
}

export default Header