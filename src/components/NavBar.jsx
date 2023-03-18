import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'react-ui-drawer'
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
function NavBar() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [position, setPosition] = useState('top')

  const handleOpenDrawer = (pos) => {
    setPosition(pos)
    setShowDrawer(prevState => !prevState)
  }
  const menuItems = [
    {
      name: 'Home',
      icon: 'fa-home'
    },
    {
      name: 'Contacts',
      icon: 'fa-address-book'
    },
    {
      name: 'Messages',
      icon: 'fa-envelope'
    },
    {
      name: 'Podcast',
      icon: 'fa-podcast'
    },
    {
      name: 'Profile',
      icon: 'fa-user-circle-o'
    },
    {
      name: 'Settings',
      icon: 'fa-cogs'
    }
  ]
  return (
    <div className=' sticky top-0 z-40 shadow-lg flex flex-row items-center justify-between font-Roboto md:px-0 px-4  bg-white'>
        <img className='md:w-28 w-20  rounded-md' src="https://res.cloudinary.com/dfd8vbjzj/image/upload/v1669924395/attachment_123900006-removebg-preview_blyzqo.png" alt="" />
        
        <div className='hidden md:flex'>
            <ul className='li flex flex-row text-2xl space-x-8'>
                <li><Link to='/'>
                     Home
                  </Link></li>
                <li>Services</li>
                <li>Features</li>
                <li><Link to='/about'>
                     About US
                  </Link></li>
                <li><Link to='/contact'>
                     Contact
                  </Link></li>
            </ul>
        </div>
        <div className='md:hidden flex'>
          <div><Fa.FaBars size={24} color={'black'} onClick={handleOpenDrawer}/></div>
              {showDrawer && (
              <Drawer
                position={position}
                requestClose={() => setShowDrawer(false)}
              >
                <div className="flex flex-col">
                  {menuItems.map((link, index) => (
                    <Link>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </Drawer>
            )}
        </div>
        
        <div className='md:flex hidden'>
            
        </div>
        
    </div>
  )
}

export default NavBar