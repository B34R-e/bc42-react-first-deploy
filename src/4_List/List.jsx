import React from 'react'

function List() {
    const templates = [
        <p>User A</p>,
        <p>User B</p>,
        <p>User C</p>
    ]

    const products = [
        {id: 1, name: "Iphone"},
        {id: 2, name: "Samsung"},
        {id: 3, name: "Oppo"}
    ]
    
    // Dùng hàm map để biến đổi array các object thành array các phần tử JSX
    const listProducts = products.map((item) => {
        // Với mỗi phần tử trong danh sách, ta cần cung cấp thuộc tính key với các giá trị không trùng lặp, thông thường ta sẽ dùng id của dữ liệu để làm key
        return (
                <li key={item.id}>{item.name} </li>
        )
    })

    const students = [
        {id: '0001', name: 'Hiếu'},
        {id: '0002', name: "Khải"},
        {id: '0003', name: "Nguyên"},
    ]

  return (
    <div>
        <h1>List</h1>
        {/* {templates} */}

        <ul>{listProducts}</ul>

        <ul>
        {students.map((student) => {
            return (
                <li key={student.id}>{student.name}</li>
            )
        })}
        </ul>
        
    </div>
    
  )
}

export default List