import React from 'react';
import StoreItem from '../components/StoreItem';

import './pages.css';

export default function HomePage(props) {
    const { storeItems } = props

    return (
        <div className="home-container" style={containerStyle}> 
            {storeItems.map(storeItem => (
                <StoreItem 
                    key={storeItem.id}
                    image={storeItem.image}
                    name={storeItem.name}
                    description={storeItem.description}
                    price={storeItem.price}
                    refName={storeItem.refName}
                />
            ))}
        </div>
    )
}

const containerStyle = {
    margin: "15px"
}

