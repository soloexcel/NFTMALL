import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Image from 'next/image'
import { Button } from '../components'
import image from '../../img'
import Style from './MarketPlace.module.css'


const MarketPlace = () => {
    const marketPlaceData = [
        {
            image: image.marketplace1,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace2,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace3,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace4,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace5,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace6,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace7,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace8,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace1,
            name: "Solomon Excel"
        },
    ]

    const marketPlaceType = [
        "All",
        "Art",
        "Generic",
        "Common",
        "Trading",
        "Rare",
    ]


  return (
    <div className={Style.marketPlaceSection}>
         <div className={Style.title}>
            <h2>NFT Marketplace</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
         </div>

         <div className={Style.marketPlaceTypes}>
            {marketPlaceType.map((txt, index) => (
                <Button btnName={txt} blue = {index === 0} key={index}/>
            ))}
         </div>

         <div className={Style.marketPlaces}>
            {marketPlaceData.map(({image, name}, index) => (
                <div className={Style.marketplace} key={index}>
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
            ))}
         </div>
    </div>

    
  )
}

export default MarketPlace