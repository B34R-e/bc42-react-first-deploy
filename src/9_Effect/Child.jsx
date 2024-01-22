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
  return (
    <div>
        <h1>Child</h1>
        <p>Total: {total}</p>
    </div>
  )
}

export default Child