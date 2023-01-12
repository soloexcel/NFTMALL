import React from 'react'
import Image from 'next/image'
import { Button } from '../components'
import image from '../../img'
import Style from './Services.module.css'


const Services = () => {
    const data = [
        // {
        //     image: image.order,
        //     title: "Create Your Collection",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam, minus saepe autem provident dicta aliquam ducimus, ratione debitis, fuga pariatur a doloribus hic. Veritatis ullam eum nisi voluptas provident.",
        //     btnTxt: "Create"
        // },

        {
            image: image.sell1,
            title: "Add Your NFTs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam, minus saepe autem provident dicta aliquam ducimus, ratione debitis, fuga pariatur a doloribus hic. Veritatis ullam eum nisi voluptas provident.",
            btnTxt: "Add NFT"
        },

        {
            image: image.sell2,
            title: "List NFT For Sale",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam, minus saepe autem provident dicta aliquam ducimus, ratione debitis, fuga pariatur a doloribus hic. Veritatis ullam eum nisi voluptas provident.",
            btnTxt: "Sell"
        },

        {
            image: image.sell3,
            title: "Create Your Collection",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam, minus saepe autem provident dicta aliquam ducimus, ratione debitis, fuga pariatur a doloribus hic. Veritatis ullam eum nisi voluptas provident.",
            btnTxt: "Create"
        }
    ]
  return (
    <div className={Style.serviceSection}>
        
        <h2 className={Style.title}>Create and Sell Your NFTs</h2>
        <div className={Style.container}>
            <div className={Style.serviceContent}>
                {data.map(({image, description, title, btnTxt}, index) => (
                    <div className={Style.services} key={index}>
                        <div className={Style.imgFrame}>
                            <Image className={Style.img} src={image} alt="Services"/>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Button btnName={btnTxt} handleClick={()=> {}} blue={index === 1}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Services