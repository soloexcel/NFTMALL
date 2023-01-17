import React from 'react';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Link from 'next/link';
// import Image from 'next/image'
// import { Button } from '../components'
// import image from '../../img'

import Style from './MPCard.module.css'

// const MPCard = ({image, name}) => {

const MPCard = (data) => {
    const newTo = {
        pathname:"/nftpage/"+data.tokenId
    }
  return (
        <Link href={newTo}>
            <div className={Style.marketplace}>
                <div className={Style.image}>
                    <Image src={data.image} alt="marketplace"/>                    
                </div>
                <div className={Style.name}>
                    <h4>{data.name}</h4>
                    <BsThreeDots />
                </div>
                <h6 className={Style.username}>{data.description}</h6>
                <div className={Style.priceContainer}>
                    <h5 className={Style.price}>{data.price} ETH</h5>
                    <FaEthereum />
                </div>
            </div>
        </Link>
    
  )
}

export default MPCard