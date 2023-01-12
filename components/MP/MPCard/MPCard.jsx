import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Image from 'next/image'
// import { Button } from '../components'
// import image from '../../img'

import Style from './MPCard.module.css'

const MPCard = ({image, name}) => {
  return (
        <div className={Style.marketplace}>
            <div className={Style.image}>
                <Image src={image} alt="marketplace"/>                    
            </div>
            <div className={Style.name}>
                <h4>{name}</h4>
                <BsThreeDots />
            </div>
            <h6 className={Style.username}>@solommonexcel</h6>
            <div className={Style.priceContainer}>
                <h5 className={Style.price}>.18 ETH</h5>
                <FaEthereum />
            </div>
        </div>
    
  )
}

export default MPCard