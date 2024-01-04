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

    const [colors, setColors] = useState(['red', 'green', 'blue']);

    const handleAddColor = () => {
        const color = prompt("Input your color: ");
        // Làm sao để thêm color vừa nhập vào danh sách colors

        // Bởi vì không được thay đổi trực tiếp state mà phải thông qua setter nên ta không thể dùng colors.push(color)
        // Sử dụng spread Operator để sao chép những phần tử hiện có của state và thêm một phần tử mới vào
        // => Luôn tạo ra 1 array mới và thay đổi trên nó, sau đó đưa array mới vào hàm setter
        setColors([...colors,color]);
    }

    const handleRemoveColor = () => {
        const color = prompt("Input color you want to remove: ");

        const newColors = colors.filter((item) => item != color);
        setColors(newColors)
    }

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

        <hr />

        <p>Color: {colors.join(", ")}</p>
        <button onClick={handleAddColor}>Add Color</button>
        <button onClick={handleRemoveColor}>Remove Color</button>
    </div>
  )
}

export default State