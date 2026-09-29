import Sidebar from '@/component/sidebar'
import React from 'react'

const ShopLayout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='p-6'>
                {children}
            </main>
        </div>
    )
}

export default ShopLayout