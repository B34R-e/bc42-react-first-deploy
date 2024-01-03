// State bằng function component

import React, {useState} from 'react'

// useState là một hook của React dùng để tạo và quản lý state trong function component
// Các đặc tính của state:
// - Khi giá trị của state bị thay đổi, component sẽ được chạy lại (re-render), tuy nhiên giá trị của state sẽ được lưu trữ lại
// - Giá trị của state sẽ được giữ nguyên ở các lần re-render.
// Lưu ý: Không được thay đổi trực tiếp giá trị của state, mà phải thông qua hàm setter 

function State() {
    // useState nhận vào 1 tham số là giá trị khởi tạo và trả về một array gồm 2 phần tử
    // Phần tử 1: Giá trị của state
    // Phần tử 2: Hàm dùng để thay đổi giá trị của state
    const [count, setCount] = useState(0);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <h1>State</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <hr />

        {isLoggedIn ? (
            <div>
                <h1>Welcome Back</h1>
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
        ): 
            <div>
                <h1>Please Login</h1>
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            </div>}
    </div>
  )
}

export default State