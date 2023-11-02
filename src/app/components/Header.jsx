import React from 'react'
import Image from 'next/image'
import logo from '../../../public/homepage/logo.svg'
import logoname from '../../../public/homepage/logoname.svg'
import arrowicon from '../../../public/homepage/arrowicon.svg'
const Header = () => {
    const navList=[
        {
            id:1,
            title:"Platform",
            path:"platform"
        },
        {
            id:2,
            title:"Solutions",
            path:"solutions"
        },
        {
            id:3,
            title:"Company",
            path:"company"
        },
        {
            id:4,
            title:"Resources",
            path:"resources"
        },
        {
            id:5,
            title:"Events",
            path:"events"
        },

    ]
  return (
    <>
       <div >
         {/* BLUE STRIP  */}
         <nav className='nav'>
           <span >Bersin & Southwest: The X Factor | Sign up now → </span> 
         </nav>
         {/* NAV HEADER  */}
         <header>
            {/* logo  */}
           <div>
              <Image 
              src={logo}
              width={50}
              height={50}
              alt='logonm'
              objectFit="cover" 
               />
                <Image 
              src={logoname}
              width={100}
              height={50}
              alt='logonm'
               />
           </div>

            {/* NAV LINKS  */}
           <ul className='list'>
            {navList?.map((nav,idx)=>(
                    <li key={idx}>
                    <span>{nav?.title}</span>
                    <Image src={arrowicon} width={10} alt='arr' className='arrow-img' />
                  </li>
            ))}
           </ul>
            
            {/* BTN BOX  */}
           <div className='btn-group'>
            <button className='btn1'>
                 Book Demo
            </button>
            <button className='btn2'>
              Login
              </button>
           </div>
         </header>
        </div>
    </>
  )
}

export default Header