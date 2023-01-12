import React from 'react'
import Image from 'next/image'
import image from '../../img'
import Style from './Clients.module.css'

const Clients = () => {

    const clients = [
        image.client1, image.client2, image.client3, image.client4, image.client5, 
    ]
  return (
    <div className={Style.clientSection}>
        {clients.map((client, index) => (
            (<div className={Style.client} key={index}>
                <Image src={client} alt="client"/>
            </div>)
        ))}
    </div>
  )
}

export default Clients