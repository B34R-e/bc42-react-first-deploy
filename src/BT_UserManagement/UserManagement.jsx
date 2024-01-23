import React, {useState, useEffect} from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import axios from 'axios';
import Search from './Search';

function UserManagement() {
    const [users, setUsers] = useState([]);

    // State quản lý user đang đƯợc chọn
    const [selectedUser, setSelectedUser] = useState({});

    // State quản lý giá trị tìm kiếm
    const [searchByEmail, setSearchByEmail] = useState("");


    // Viết hàm call API để lấy danh sách users
    const fecthUsers = async () => {
        try{
            // const response = await axios({
            //     method: "GET",
            //     url:  "https://jsonplaceholder.typicode.com/users",
            // })

            const response = await axios.get("https://65af85b32f26c3f2139b044a.mockapi.io/users",
            {
                params: {
                    email: searchByEmail || undefined,
                },
            });

            setUsers(response.data)
            console.log(response.data)
        }catch(error){
            console.log(error);
        }
    }

    

    // Viết hàm xử lý nhận vào một object user, để thêm hoặc cập nhật user
    const handleSubmit = async (user) => {
        const {id, ...payload} = user;

        try{
            if(id){
                // Cập nhật
                // const newUser = {...user, id: Math.floor(Math.random() * 100)};
                // setUsers([...users, newUser]);
                await axios.put(`https://65af85b32f26c3f2139b044a.mockapi.io/users/${id}`, payload)
            }
            else{
                // Thêm mới
                // const newUsers = users.map((item) => {
                //     if(item.id == user.id){
                //         return user;
                //     }
                //     return item;
                // });
                // setUsers(newUsers);
                await axios.post(`https://65af85b32f26c3f2139b044a.mockapi.io/users`, payload);
            }
            fecthUsers();
        }catch(error){
            console.log(error);
        }

        
    };

    // Viết hàm xử lý nhận vào id và xoá user
    const handleDelete = async (id) => {
        // setUsers([...users].filter((user) => user.id != id));

        try{
            // console.log(id);
            await axios.delete(`https://65af85b32f26c3f2139b044a.mockapi.io/users/${id}`)
        }catch(error){
            console.log(error);
        }
        // Sau khi xoá thành công, dữ liệu chỉ mới thay đổi ở phía server
        // Cần gọi lại hàm fetchUsers để lấy danh sách users mới nhất và set lại cho state users
        fecthUsers();
    }

    // Viết hàm xử lý nhận vào object user
    const handleGetUser = (user) => {
        console.log(user);
        setSelectedUser(user);
    }

    // Viết hàm xử lý nhận vào giá trị searchString
    const handleSearch = (searchString) => {
        setSearchByEmail(searchString)
        // ? : Khi state searchByEmail thay đổi, ta muốn gọi lại hàm fetchUsers
        // => đưa state searchByEmail vào array của useEffect chứa hàm fetchUsers

    

        // console.log(searchString);
        // const searchedUser = users.filter((user) => user.email == searchString)
        // console.log("searchedUser", searchedUser);
    }

    //
    useEffect(() => {
        fecthUsers();
    }, [searchByEmail])

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
        <hr />
        <Search onSearch={handleSearch}/>
        <hr />
        <div className='mt-4'>
            <UserList users={users} onDelete={handleDelete} onEdit={handleGetUser} />
        </div>
        
    </div>
  )
}

export default UserManagement