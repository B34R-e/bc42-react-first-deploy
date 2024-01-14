import React, {useState} from 'react'
import data from './data.json';
import ProductList from './ProductList'
import ProductDetail from './ProductDetail';
import Cart from './Cart';

// console.log(data

function ShoppingCart() {
    // State quản lý sản phẩm đang được chọn để xem chi tiết
    const [selectedProduct, setSelectedProduct] = useState(null);
    // State quản lý trạng thái ẩn hiện của giỏ hàng
    const [isOpen, setIsOpen] = useState(false);
    // State quản lý các sản phẩm được thêm vào giỏ hàng
    const [carts, setCarts] = useState([])
    const handleGetProduct = (product) => {
        // Giá trị product chỉ tồn tại trong hàm handleGetProduct
        // ?: Làm thế nào để đưa giá trị product xuống component ProductDetails
        setSelectedProduct(product);
    }

    const handleAddToCart = (product) => {
        // Tìm xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const index = carts.findIndex((item) => item.id == product.id);

        // Sản phẩm chưa tồn tại trong giỏ hàng => thêm sản phẩm vào giỏ hàng và đặt số lượng là 1
        if(index == -1){
            const newProduct = {...product, quantity: 1};
            setCarts([...carts, newProduct])
        }else{
            // Đã tồn tại, tăng số lượng thêm 1
            const newCarts = [...carts]
            newCarts[index].quantity += 1;
            setCarts(newCarts);
        }
    }

    const handleRemoveProductCart = (product) => {
        const index = carts.findIndex((item) => item.id == product.id);

        const selectedProduct = [...carts][index]
            const newCarts = [...carts].filter((item) => item.id != selectedProduct.id);

        setCarts(newCarts);

    }

    const handleUpdateQuantity = (productId, quantity) => {
        const newCarts = carts.map(item => {
            if(item.id == productId){
                return {...item, quantity: item.quantity + quantity}
            }

            return item;
        })

        setCarts(newCarts);
    }

  return (
    <div className='container'>
        <h1 className='text-center'>FPT Shop</h1>
        <div className='d-flex justify-content-end mb-3'>
            <button className='btn btn-danger' onClick={() => setIsOpen(true)}>Giỏ hàng</button>
        </div>
        <ProductList products={data} onSelectProduct={handleGetProduct} onAddToCart={handleAddToCart}/>
        <ProductDetail product={selectedProduct}/>
        <Cart carts={carts} isOpen={isOpen} onClose={() => setIsOpen(false)} onRemoveProductCart={handleRemoveProductCart}
        onUpdateQuantity={handleUpdateQuantity}/>
    </div>
  )
}

export default ShoppingCart