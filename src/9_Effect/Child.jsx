import React, {useEffect, useState} from 'react'

function Child({count}) {
    const [total, setTotal] = useState(0);

    // Dùng useEffect để đọc giá trị mới nhất của props hoặc state
    useEffect(() => {
        console.log("Child component", count);
        // Dùng giá trị mới nhất của prop count để thực hiện một hành động nào đó

        // Ví dụ: Ta có một state total, ta muốn mỗi khi prop count thay đổi, dùng giá trị của prop count để tính toán giá trị của state total
        setTotal(total + count);
    }, [count]);

    // Trong hàm setup của useEffect nếu có return về một function thì nó được gọi là cleanup effect
    useEffect(() => {
      console.log("Child component mounted.");

      const handler = () => console.log("Mouse move");
      document.addEventListener("mousemove", handler);


      // cleanup effect: sẽ được chạy trước khi component bị huỷ bỏ
      return () => {
        console.log("Child component unmounted");

        document.removeEventListener("mousemove", handler);
      }
    }, [])
  return (
    <div>
        <h1>Child</h1>
        <p>Total: {total}</p>
    </div>
  )
}

export default Child