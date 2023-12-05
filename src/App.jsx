import React from 'react'
import NavBar from './Components/NavBar'
import UserDetails from './Components/UserDetails'

const App = () => {
    return (
        <div className='h-[100vh] bg-slate-800 overflow-y-auto'>
            <NavBar/>
            <UserDetails/>      
        </div>
    )
}

export default App
