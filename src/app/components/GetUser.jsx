'use client';
import {getUserByID } from '@/axios/axiosCrudService'
export default function GetUser() {
    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }
  return (
    <div>
        <h1 className='font-bold text-xl mt-4'>Obtener Usuario  incorreto</h1>
        <form onSubmit={(e)=>{e.preventDefault(); obtainUserByID(e.target[0].value)}}>
            <input className='p-2 border-2 rounded-md' type="text" placeholder='id' />
            <button type="submit">Obtener Usuario</button>
        </form>

        
    </div>
  )
}
