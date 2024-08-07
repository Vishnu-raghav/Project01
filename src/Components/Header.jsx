import React from 'react'
import { Link,NavLink } from "react-router-dom";


function Header() {
  return (
    <header>
    <div className='bg-#FFFFFF hide-scrollbar h-[9vh] border  border-gray-400 flex items-center justify-evenly '>
      <div>
        <nav>
            <img src="https://images.hindustantimes.com/tech/img/2021/03/04/960x540/cashify_1614848867310_1614848873157.jpg" alt="_img" height={70} width={70} />
           
        </nav>
      </div>
    
      <div className= 'h-9 items-center bg-#F7F7F7 w-[60vw] flex border border-gray-400 p-2 '>
        <div className='h-40vw text-gray-700  '>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
       <div className='w-[50vw] h-8  ml-4 flex items-center '>
        <input 
        type="text"
        placeholder='Search for mobiles,accessories & More'
        className='w-[50vw] h-8.4 focus:outline-none'
        />
        </div>
      </div>
      <div className=' p-2 flex items-center w-[8vw]  gap-1.5   '>
      <i className="fa-solid fa-location-dot"></i>
        <p className='inline text-lg'>Gurgaon</p>
        <select className='w-4 h-2  pb-5'></select>
      </div>
      <div className='bg-sky-500 text-white rounded-md w-[7vw] flex items-center justify-center h-[4vh]'>
        <p>Login</p>
      </div>
    </div>

      <div className='border-b border-gray-400 h-[6vh] flex items-center justify-center'>
        <ul className="flex font-medium lg:flex-row  w-[94vw] justify-evenly">
          <li>
           <NavLink
             to='/'
             className={({isActive})=>
              `${isActive ? "text-blue-500": "text-gray-600"}`
           }
           >
            Home
           </NavLink>
          </li>
          <li>
           <NavLink
             to='sell phone'
             className={({isActive})=>
              `${isActive ? "text-blue-500": "text-gray-600"}`
           }
           >
            Sell Phone
           </NavLink>
          </li>
          <li>
           <NavLink
             to='buy phone'
             className={({isActive})=>
              `${isActive ? "text-blue-500": "text-gray-600"}`
           }
           >
            Buy Phone
           </NavLink>
          </li>
          <li>
           <NavLink
             to='buy laptop'
             className={({isActive})=>
               `${isActive ? "text-blue-500": "text-gray-600"}`
            }
           >
            Buy Laptop
           </NavLink>
          </li>
          
        </ul>
      </div>
    
    </header>
    
  )
}

export default Header
