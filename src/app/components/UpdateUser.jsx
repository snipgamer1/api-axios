'use client';
import {updateUserByID } from '@/axios/axiosCrudService'

export default function UpdateUser() {
    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then((response) => {
                if(response.data && response.status === 200){
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not found & no update done')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
  return (
    <div>
        <h1 className='font-bold text-xl mt-4 text-center'>Update User</h1>
        <form onSubmit={(e)=>{e.preventDefault(); updateUser(e.target[0].value, e.target[1].value, e.target[2].value)}}>
            <input className='p-2 border-2 rounded-md' type="text" placeholder='id' />
            <input  className='p-2 border-2 rounded-md' type="text" placeholder='Nombre' />
            <input className='p-2 border-2 rounded-md' type="text" placeholder='Trabajo' />
            <button type="submit">Actualizar Usuario</button>
        </form>
      
    </div>
  )
}
