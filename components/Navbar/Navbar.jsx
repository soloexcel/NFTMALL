import React from 'react'

import Style from './Navbar.module.css'
import Link from 'next/link'
import { Button } from '../components'

const Navbar = () => {
    const navLinks = [
        {
            name : "Home",
            link: "/"
        },
        {
            name : "Marketplace",
            link: "marketplace"
        },
        {
            name : "Create",
            link: "create"
        },
        {
            name : "Profile",
            link: "profile"
        }
    ]
  return (
    <div className={Style.nav}>
        <div className={Style.brand}>
            {/* <img src="" alt="" /> */}
        </div>
        <div className={Style.toggle}></div>
            <div className={Style.links}>
                {navLinks.map((el, i) => (
                    <div key={i + 1} className={Style.li}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </div>
                ))}
            </div>
        <Button blue={true} btnName="Connect" handleClick={()=>{}}/>
    </div>
  )
      }


export default Navbar