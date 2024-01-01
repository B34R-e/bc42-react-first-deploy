import React from 'react'

// html: <button onclick="handleClick()">Click</button>

function Event() {
    // Lưu ý: Định nghĩa các hàm xử lý sự kiện bên trong component
    // Định nghĩa hàm xử lý sự kiện click cho button
    const handleClick = () => {
        alert("Clicked");
    }

    // Định nghĩa hàm xử lý sự kiện change cho input
    // Tất cả sự kiện đều sẽ nhận được đối tượng event
    const handleChange = (event) => {
        console.log("value: ", event.target.value);
        console.log("Input changed");
    }

    // Hàm xử lý sự kiện click của Set Message
    const handleGetMessage = (message) => {
        alert(`"Message: ", ${message}`);
    }

    const example = () => {
        return handleGetMessage("Hello BC42");
    }

  return (
    <div>
        <h1>Event</h1>
        
        {/* onClick={handleClick} không bao gồm cặp () ở cuối */}
        {/* Không gọi hàm xử lý sự kiện, ta chỉ đưa nó vào trong onClick và React sẽ tự gọi đến hàm đó khi user click vào button */}
        <button onClick={handleClick}>Click</button>

        <hr />
        <hr />

        <input onChange={handleChange} />

        <hr />
        <hr />

        {/* Nếu hàm xử lý sự kiện cần nhận vào một tham số, ta sẽ đưa vào onClick một hàm ẩn danh (thường viết bằng arrow function). Khi user click vào button, React sẽ gọi tới hàm ẩn danh này, và hàm này sẽ gọi tới hàm xử lý sự kiện và truyền vào tham số */}
        <button onClick={() => handleGetMessage("Hello BC42")}>Button</button>
    </div>
  )
}

export default Event