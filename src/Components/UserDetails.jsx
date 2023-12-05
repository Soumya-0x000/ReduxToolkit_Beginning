import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { fakeUserData } from '../api'

const UserDetails = () => {
    const addNewUser = (payLoad) => {
        console.log(payLoad);
    }

    return (
        <div className='flex flex-col gap-y-2 items-center justify-center mt-16'>
            <div className='flex flex-col xsm:flex-row items-center justify-between px-3 sm:px-0 w-full sm:w-[92vw] lg:w-[70vw]'>
                <div className='text-slate-300 text-[.97rem] sm:text-lg lg:text-2xl'>List of User details</div>

                <button 
                onClick={() => addNewUser(fakeUserData())}
                className='text-sm md:text-[1rem] min-w-[4rem] px-2 md:px-4 py-1 md:py-2 bg-gradient-to-tr from-violet-400 to-blue-400 hover:bg-gradient-to-tl rounded-md text-blue-950 font-semibold active:scale-90 transition-all'>
                    Add new users
                </button>
            </div>
           
            <hr />
            
            <ul>
                {/* <li>Hey</li>
                <li>Hii</li>
                <li>Hello</li>
                <li>What's Up</li> */}
            </ul>
            
            <DeleteAllUsers/>
        </div>
    )
}

export default UserDetails