import React from 'react'

function Product({name, price, onAddToCart}) {
  return (
    <div>
        <h3>
            {name} - {price}$ - <button className='btn btn-dark' onClick={() => onAddToCart({name, price})}>Add to cart</button>
        </h3>
    </div>
  )
}

export default Product