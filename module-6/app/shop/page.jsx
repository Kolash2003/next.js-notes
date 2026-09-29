'use client';
import React from 'react'
import { useParams } from 'next/navigation'

const ShopPage = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>ShopPage</div>
    )
}

export default ShopPage