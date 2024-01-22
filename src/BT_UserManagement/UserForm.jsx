import React, {useState, useEffect} from 'react'

function UserForm({onSubmit, selectedUser, onReset}) {
    // Quản lý giá trị của các input trong state
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
    },);

    // Hàm setup của useEffect sẽ được chạy ở sau lần render đầu tiên và mỗi khi giá trị của props user thay đổi
    useEffect(() => {
        // Dùng giá trị mới của prop user để cập nhật cho state values
        setValues(selectedUser);
    }, [selectedUser])
    
    const handleSubmit = (evt) => {
        // Chặn hành vi submit mặc định của form
        evt.preventDefault();

        // Tạo object user từ giá trị của các input
        // const user = {...values, id: Math.floor(Math.random() * 100)};

        // Gọi prop onSubmit và truyền vào object user, và tham số để xác định xem là cần thêm mới hay cập nhật
        onSubmit(values, values.id ? "update" : "create");

        // Gọi hàm handleResetForm để set giá trị trên các input về rỗng
        handleResetForm();
    }

    

    const handleChange = (evt) => {
        const {value, name} = evt.target
        console.log(evt.target.value);
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleResetForm = (evt) => {
        setValues(
            {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
            }
        )
        onReset();
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label'>First Name</label>
            <input 
                type="text" 
                name="firstName"
                className='form-control' 
                value={values.firstName} 
                onChange={handleChange}
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Last Name</label>
            <input 
                type="text"
                name="lastName"
                className='form-control'
                value={values.lastName} 
                onChange={handleChange}
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input 
                type="email" 
                name="email"
                className='form-control'
                value={values.email} 
                onChange={handleChange}
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Address</label>
            <input 
                type="text"
                name="address"
                className='form-control'
                value={values.address} 
                onChange={handleChange}
            />
        </div>

        <button type='submit' className='btn btn-success me-4'>Submit</button>
        <button type='button' className='btn btn-secondary' onClick={handleResetForm}
        >Reset</button>
    </form>
  )
}

export default UserForm