'use client';
import { getAllUsers } from '@/axios/axiosCrudService'
import { useEffect, useState } from 'react'

export default function ListUsers() {

    const [users, setUsers] = useState([])

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data.data && response.status === 200){
                    setUsers(response.data.data)
                }else{
                    throw new Error(`No users found`)
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    useEffect(() => {
        obtainAllUsers()
    }, [])
  




  return (
    <div className='grid grid-cols-3 p-10 space-x-2 '>
    {users.map((user) => (
        <div key={user.id} className=' w-60 rounded-md border-2 flex flex-col justify-center items-center'>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <img src={user.avatar} alt={user.first_name} />
        </div>
    ))}
    </div>

  )
}
