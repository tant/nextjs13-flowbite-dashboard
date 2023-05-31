import React from 'react'

function Sidebar({children,}: {children: React.ReactNode}) {
  return (
    <nav>
        <h1>Sidebar</h1>
        <main className='p-4 sm:ml-64'>
            {children}
        </main>
    </nav>
    
  )
}

export default Sidebar