import React from "react";

function Cart({isOpen, onClose, carts, onRemoveProductCart, onUpdateQuantity}) {
    if(isOpen == false){
        return null;
    }

    const handleQuantityOnDelete = (product) => {
        onRemoveProductCart(product);
    }


    

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        id="exampleModal"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map(item => {
                            if(item.quantity < 1){
                                onRemoveProductCart(item)
                            }
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <img 
                                        src={item.image}
                                        alt={item.name}
                                        width="70px"
                                        height="70px"
                                        />
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => onUpdateQuantity(item.id, -1)}>
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button className="btn btn-primary" onClick={() => onUpdateQuantity(item.id, 1)}>
                                            +
                                        </button>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity * item.price}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleQuantityOnDelete(item)}>Xoá</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"/>
    </>
  );
}

export default Cart;
