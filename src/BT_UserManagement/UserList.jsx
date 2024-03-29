import React from 'react'

function UserList({users, onDelete, onEdit}) {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => {
                return(
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>
                            <button className='btn btn-warning me-4' onClick={() => onEdit(user)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => onDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                )
                
            })}
        </tbody>
    </table>
  )
}

export default UserList