import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products, onSelectProduct, onAddToCart}) {
  
  const handleGetProduct = (product) => {
    onSelectProduct(product)
  }

  const handleAddToCart = (product) => {
    onAddToCart(product)
  }

  return (
    <div className='row'>
      {products.map(product => {
        return(
          <div className="col-sm-4" key={product.id}>
            <ProductItem product={product} onSelectProduct={handleGetProduct}
            onAddToCart={handleAddToCart}/>
          </div>
        )
      })

      }
    </div>
  )
}

export default ProductList