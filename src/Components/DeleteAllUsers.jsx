import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllUsersImport } from '../store/actions'

const DeleteAllUsers = () => {
    const dispatch = useDispatch()

    const removeAllUsers = () => {
        dispatch(clearAllUsersImport())
    }

    return (
        <button 
        onClick={() => removeAllUsers()}
        className='text-sm md:text-[1rem] min-w-[4rem] px-2 md:px-4 py-1 md:py-2 bg-gradient-to-tr from-amber-400 to-pink-400 hover:bg-gradient-to-tl transition-all rounded-md text-red-900 font-semibold active:scale-90'>
            Delete All users
        </button>
    )
}

export default DeleteAllUsers
