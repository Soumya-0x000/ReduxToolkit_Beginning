import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const DisplayUsers = () => {
    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data);

    return (
        <div className='flex flex-col gap-y-2'>
            {data.map((item, index) => (
                <li key={index} className='py-2 rounded-md px-2 text-slate-300 bg-slate-900 flex justify-between'>
                    <div className='flex gap-x-8'>
                        <p className='text-green-300'>{item.prefix}</p>
                        <p className='text-cyan-200'>{item.name}</p>
                        <div className='space-x-3 flex text-violet-300'>
                            <p>Age:</p>
                            <p>{item.age}</p>
                        </div>
                    </div>
                    <button className='active:scale-110 transition-all'>
                        <FontAwesomeIcon icon={faTrashCan} className='text-red-500'/>
                    </button>
                </li>
            ))}
        </div>
    )
}

export default DisplayUsers