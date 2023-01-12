import React from 'react'
import { Navbar, Button  } from '../components'
import Style from "./HeroSection.module.css"
import Image from 'next/image'
import image from '../../img'


const HomeSection = () => {
  return (
    <div className={Style.home_section}>
        {/* <Navbar /> */}
        <div className={Style.ellipse}></div>
        <div className={Style.container}>
            <div className={Style.heroContent}>
                <h1>
                    Discover, <span className={Style.underlined + ' ' + Style.underlineClip}>Sell</span><br />& Collect <span className={Style.underlined + ' ' + Style.underlineMask}>Rare</span><br /><span className={Style.underlined  + ' ' + Style.underlineOverflow}>NFTs</span>
                </h1>

                <h2 className={Style.heroTxt}>
                    Welcome to prowess NFT Marketplace!, we offer a wide <span className={Style.wrap}>selection of unique and one-of-a-kind NFTs for you to browse and purchase.</span>
                </h2>
                
                <div className={Style.buttons}>
                    <Button blue={true} btnName='Browse Now' handleClick={()=> {}}/>
                    <Button btnName='Create NFT' handleClick={()=> {}}/>
                </div>
                
                <div className={Style.data}>
                    <div className={Style.dataTab}>
                        <h2 className={Style.stat}>10k</h2>
                        <h5 className={Style.statTag}>Artist</h5>
                    </div>

                    <div className={Style.dataTab}>
                        <h2 className={Style.stat}>10k</h2>
                        <h5 className={Style.statTag}>Artwork</h5>
                    </div>

                    <div className={Style.dataTab}>
                        <h2 className={Style.stat}>15k</h2>
                        <h5 className={Style.statTag}>Auction</h5>
                    </div>
                </div>
            </div>
            <div className={Style.img}>
                <Image className={Style.heroImg} src={image.hero} alt="heroImg"/>
        </div>
        </div>
    </div>
  )
}

export default HomeSection