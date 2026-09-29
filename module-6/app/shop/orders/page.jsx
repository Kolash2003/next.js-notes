'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

const OrdersPage = () => {
    const router = useRouter();
    return (
        <div className='hover:cursor-pointer' onClick={() => router.push("/shop/products")}>Go to Products</div>
    )
}

export default OrdersPage