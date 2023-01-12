import React from 'react'
import Image from 'next/image'
import image from '../../img'
import { Button } from '../components'

import Style from './Blog.module.css'
const Blog = () => {
  return (
    <div className={Style.blogSection}>
        
        <div className={Style.blogContent}>
            <h2>Why Choose Prowess ?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, assumenda est nesciunt omnis iure sed rerum, vitae ipsum tempore molestias possimus sapiente magni praesentium eligendi ad quo architecto corrupti repellat.
            </p>
            <Button btnName='Learn More' handleClick={()=> {}} blue/>
        </div>

        <div className={Style.image}>
            <Image className={Style.img} src={image.update} alt="Blog post picture"/>
        </div>
    </div>
  )
}

export default Blog