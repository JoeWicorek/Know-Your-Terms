import React from 'react';
import './ProductCard.css'; // Import CSS for styling

const ProductCard = ({ label, productName }) => {
    return (
        <div className="product-card">
            {label && <div className="label">{label}</div>}
            <div className="product-image">Facebook Data</div>
            <div className="product-details">
                <p>{productName}</p>
                <button className="read-now-button">Read now</button>
            </div>
            <div className="product-icons">
                <span>🛒</span>
                <span>👜</span>
                <span>🔍</span>
            </div>
        </div>
    );
};

export default ProductCard;
