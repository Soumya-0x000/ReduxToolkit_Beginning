import React from 'react'

const NavBar = () => {
    const navItems = [
        'Home', 'About', 'Project', 'Code', 'Contact', 'Course'
    ]

    return (
        <div className='text-slate-300 flex flex-col items-center gap-y-4 md:gap-y-6'>
            <div className='text-sm xsm:text-lg sm:text-xl md:text-2xl'>Redux ToolKit beginning</div>
            <div className='text-2xl xl:text-6xl'>ADMIN TABLE</div>
            <div>At the starting phase</div>
            <div className={`grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-6 text-center gap-2 gap-x-5 md:gap-x-10 bg-slate-700 px-3 md:px-5 py-2 md:py-4 rounded-md`}>
                {navItems.map((items, key) => (
                    <div key={key} className='text-sm md:text-md lg:text-lg min-w-[4rem] px-2 md:px-4 py-1 md:py-2 rounded-md bg-green-400 text-green-900 font-semibold hover:bg-green-300 hover:scale-105 transition-all cursor-pointer'>
                        {items}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavBar