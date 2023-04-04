import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <h2 >{price.option}</h2>
            <h5 >
                <span className='text-xl font-bold text-purple-700'>{price.price}</span>/Mon</h5>
        </div>
    );
};

export default PriceCart;