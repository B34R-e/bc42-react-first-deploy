import axios from 'axios';
import React, {useState, useEffect} from 'react'

// Demo call API
function User() {
    // state quản lý giá trị trả về từ API
    const [users, setUsers] = useState([]);

    // Hàm dùng để call API
    const fetchUsers = async () => {
        try{
            const response = await axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/users",
            });
            // Call API thành công, set state cho users bằng data trả về từ API
            setUsers(response.data);
        }catch(error){
            console.log(error);
        }
    }

    // Sau khi component được hiển thị, hàm setup của useEffect sẽ được tự động gọi tới, bên trong hàm setup ta gọi tới hàm fetchUsers để call API và set state
    useEffect(() => {
        fetchUsers();
    }, [])

  return (
    <div>
        <h1>User</h1>

        <ul>
            {users.map((user) => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    </div>
  )
}

export default User