import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=' flex flex-row items-center justify-between  '>
        <img className='w-32 rounded-md' src="https://res.cloudinary.com/dfd8vbjzj/image/upload/v1669924395/attachment_123900006-removebg-preview_blyzqo.png" alt="" />
        
        <div>
            <ul className='li flex flex-row text-lg space-x-4'>
                <li>
                  <Link to='/'>
                     Home
                  </Link>
                  </li>
                <li>Services</li>
                <li>Features</li>
                <li>Abouts Us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            
        </div>
        
    </div>
  )
}

export default NavBar