'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathName = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/shop/dashboard" },
        { name: "Orders", href: "/shop/orders" },
        { name: "Products", href: "/shop/products" },
        { name: "Settings", href: "/shop/settings" }
    ];

    return (
        <div className='w-64 h-screen bg-gray-900 text-white p-5'>
            <h2 className='text-xl font-bold mb-6'>Shop Panel</h2>
            <nav className='flex flex-col gap-2'>
                {
                    navItems.map((item) => {
                        const isActive = pathName === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                                    text-white/90 hover:text-white hover:bg-gray-700 px-3 py-2 rounded transition-colors
                                    ${isActive ? 'bg-gray-600 font-semibold' : ''}
                                `}
                            >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default Sidebar