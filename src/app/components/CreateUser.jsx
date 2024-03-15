'use client';
import React from 'react'
import { createUser } from '@/axios/axiosCrudService'

export default function CreateUser() {



    const createNewUser = (name, job) => {
        createUser(name, job)
        .then((response) => {
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('User not created')
            }
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

  return (  
    <div className=' flex  flex-col justify-center items-center w-1/2 border-2 border-black'>
        <h1 className='text-4xl font-bold text-center p-6'>Crear Usuario</h1>
        <form className='flex flex-col space-y-4 p-6 ' onSubmit={(e)=>{e.preventDefault(); createNewUser(e.target[0].value, e.target[1].value  ) } }>
            <input className='p-2 border-2 rounded-md' type="text" placeholder='Nombre' />
            <input className='p-2 border-2 rounded-md' type="text" placeholder='Trabajo' />
            <button className='p-2 border-2 rounded-md' type="submit" >Crear Usuario</button>
        </form>
      
    </div>
  )
}
