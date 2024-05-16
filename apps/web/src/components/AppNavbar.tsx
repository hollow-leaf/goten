import React, {useState} from 'react'
import { logo } from '../assets'
import { useNavigate } from 'react-router-dom'
import { secondNavLinks } from '../constants'
import { navLinksTypes } from 'src/models/type/ui.type'

export default function Navbar() {
  const navigate = useNavigate();
//   const [active, setActive] = useState<string>('Home')
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <a href='/'><img src={logo} alt='Goten' className='w-[64px] h-[64px]'/></a>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {secondNavLinks.map((nav: navLinksTypes, index) => (
            <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                } ${index === secondNavLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                onClick={() => {
                    if (index === 0) {
                      navigate("/launch")
                    } else if (index === 1) {
                      navigate("/lend");
                    } else if (index === 2) {
                      navigate("/prove")
                    }
                }}
            >
                <a href={index === 0 ? `#${nav.id}` : undefined}>{nav.title}</a>
            </li>
            ))}
        </ul>
            <div className="navbar-end">
                <w3m-button />
            </div>
        </nav>
    )
}
