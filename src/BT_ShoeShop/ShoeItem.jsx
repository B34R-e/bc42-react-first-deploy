import React from 'react'

function ShoeItem({shoe}) {
  return (
    <div className='card text-center'>
        <img src={shoe.image} alt={shoe.name} 
        className='card-image'/>
        <div className="card-body">
            <h3 className='card-title' style={{fontSize: "1.5rem"}}>{shoe.name}</h3>
            <p className="card-text">{shoe.price}</p>
            <button className="btn btn-dark">Add to cart</button>
        </div>
    </div>
  )
}

export default ShoeItem