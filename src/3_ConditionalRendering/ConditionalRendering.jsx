import React from 'react'

function ConditionalRendering() {
    // isLoggedIn thể hiện xem user đã đăng nhập hay chưa
    let isLoggedIn = false;
    let content = null;

    let isActive = false;

    if(isLoggedIn == true){
        content = <div>Welcome to Summoner Rift</div>
    }else{
        content = <div>Please login !!!</div>
    }

  return (
    <div>
        {content}

        {/* Nếu muốn hiển thị theo điều kiện bên trong JSX ta dùng toán tử bậc 3 */}
        {isActive ? <h3>Activated</h3> : <h3>Unactivated</h3>}

        {/* Trong trường hợp chỉ muốn kiểm tra điều kiện đúng để hiển thị giao diện */}
        {/* {isActive ? <h3>Activated</h3> : null} */}
        {isActive && <h3>Activated</h3>}
    </div>
  )
}

export default ConditionalRendering