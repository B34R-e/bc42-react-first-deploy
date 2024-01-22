import React, {useState} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

function UserManagement() {
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "Minh",
            lastName: "Hoang",
            email: "minh@gmail.com",
            address: "123 Cao Thắng"
        },
    ]);

    // State quản lý user đang đƯợc chọn
    const [selectedUser, setSelectedUser] = useState({});

    // Viết hàm xử lý nhận vào một object user và thêm vào state Users
    const handleSubmit = (user, status) => {
        console.log(user);
        if(status == "create"){
            const newUser = {...user, id: Math.floor(Math.random() * 100)};
            setUsers([...users, newUser]);
        }
        else if(status == "update"){
            const newUsers = users.map((item) => {
                if(item.id == user.id){
                    return user;
                }
                return item;
            });
            setUsers(newUsers);
        }
        
    };

    const handleDelete = (id) => {
        setUsers([...users].filter((user) => user.id != id));
    }

    // Viết hàm xử lý nhận vào object user
    const handleGetUser = (user) => {
        console.log(user);
        setSelectedUser(user);
    }

  return (
    <div className='container-fluid'>
        <h1 className='text-center text-primary'>User Management</h1>

        <div className='card'>
            <div className="card-header bg-dark text-white">User Form</div>
            <div className='card-body'>
                <UserForm onSubmit={handleSubmit} selectedUser={selectedUser}
                onReset={() => setSelectedUser({})}/>
            </div>
        </div>
        <div className='mt-4'>
            <UserList users={users} onDelete={handleDelete} onEdit={handleGetUser} />
        </div>
        
    </div>
  )
}

export default UserManagement