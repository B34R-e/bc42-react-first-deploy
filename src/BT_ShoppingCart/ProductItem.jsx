import React from 'react'

function ProductItem({product, onSelectProduct, onAddToCart}) {
  return (
    <div className='card'>
        <img src={product.image} alt={product.name} height="350px" width="auto"/>
        <div className='card-body' style={{textAlign: "center"}}>
          <h3 className='card-title'>{product.name}</h3>
          <p className='card-text'>{product.price}</p>
          {/* Xem chi tiết */}
          <button className='btn btn-dark' onClick={() => onSelectProduct(product)}>Xem chi tiết</button>
          {/* Thêm vào giỏ hàng */}
          <button className="btn btn-success" onClick={() => onAddToCart(product)}>Thêm vào giỏ hàng</button>
        </div>
    </div>
  )
}

export default ProductItem