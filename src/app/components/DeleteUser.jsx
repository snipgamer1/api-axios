'use client'; 
import { deleteUserByID } from '@/axios/axiosCrudService'


export default function DeleteUser() {
    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if(response.status === 204){
                    alert(`User with id: ${id} successfully deleted`)
                }else{
                    throw new Error('User not found & no delete done')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

  return (
    <div>
        <h1 className='font-bold text-xl mt-4 text-center'>Delete User</h1>
        <form onSubmit={(e)=>{e.preventDefault(); deleteUser(e.target[0].value)}}>
            <input className='p-2 border-2 rounded-md' type="text" placeholder='id' />
            <button type="submit">Delete User</button>
        </form>
      
    </div>
  )
}
