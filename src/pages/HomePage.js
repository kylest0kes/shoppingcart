import React from 'react';
import StoreItem from '../components/StoreItem';

export default function HomePage() {
    return (
        <div className="container" style={containerStyle}> 
           <StoreItem />
           <StoreItem />
        </div>
    )
}

const containerStyle = {
    margin: "10px 50px"
}
