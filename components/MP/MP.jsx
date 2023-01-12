import React, {useState, useEffect} from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Image from 'next/image';
import { Button } from '../components';
import image from '../../img';
import Style from './MP.module.css'
import MPCard from './MPCard/MPCard'

const MP = () => {
    const [all, setAll] = useState(true);
    const [art, setArt] = useState(false)
    const [generic, setGeneric] = useState(false)
    const [common, setCommon] = useState(false)
    const [trading, setTrading] = useState(false)
    const [rare, setRare] = useState(false)

    const allArray = [
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
    ];

    const artArray = [
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
    ];

    const genericArray = [
        {
            image: image.marketplace7,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace5,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace3,
            name: "Solomon Excel"
        },
        {
            image: image.marketplace6,
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
    ];

    const commonArray = [
        {
            image: image.marketplace1,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace7,
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
    ];

    const tradeArray = [

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
            image: image.marketplace5,
            name: "Solomon Excel"
        },
        {
            image: image.marketplace4,
            name: "Solomon Excel"
        },

        {
            image: image.marketplace1,
            name: "Solomon Excel"
        },
        {
            image: image.marketplace7,
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
        }
    ];

    const rareArray = [
        

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
    ];

    const openAll = () => {
        if (!all) {
          setAll(true);
          setArt(false);
          setGeneric(false);
          setCommon(false);
          setTrading(false);
          setRare(false);
        }
      };
    
      const openArt = () => {
        if (!art) {
          setAll(false);
          setArt(true);
          setGeneric(false);
          setCommon(false);
          setTrading(false);
          setRare(false);
        }
      };

      const openGeneric = () => {
        if (!generic) {
          setAll(false);
          setArt(false);
          setGeneric(true);
          setCommon(false);
          setTrading(false);
          setRare(false);
        }
      };

      const openCommon = () => {
        if (!common) {
          setAll(false);
          setArt(false);
          setGeneric(false);
          setCommon(true);
          setTrading(false);
          setRare(false);
        }
      };

      const openTrading = () => {
        if (!trading) {
          setAll(false);
          setArt(false);
          setGeneric(false);
          setCommon(false);
          setTrading(true);
          setRare(false);
        }
      };

      const openRare = () => {
        if (!rare) {
          setAll(false);
          setArt(false);
          setGeneric(false);
          setCommon(false);
          setTrading(false);
          setRare(true);
        }
      };

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
            {marketPlaceType.map((txt, index) => {
                if (txt == "All") {
                    return <Button btnName={txt} handleClick = {openAll} blue = {true} key={index}/>
                }
                else if (txt == "Art") {
                    return <Button btnName={txt} handleClick = {openArt} key={index}/>
                }
                else if (txt == "Generic") {
                    return <Button btnName={txt} handleClick = {openGeneric} key={index}/>
                }
                else if (txt == "Common") {
                    return <Button btnName={txt} handleClick = {openCommon} key={index}/>
                }
                else if (txt == "Trading") {
                    return <Button btnName={txt} handleClick = {openTrading} key={index}/>
                }
                else if (txt == "Rare") {
                    return <Button btnName={txt} handleClick = {openRare} key={index}/>
                }
            } )}
         </div>

        {all && (
            <div className={Style.marketPlaces}>
                {allArray.map(({image, name}, index) => (
                    <MPCard key={index + 1} image={image} name={name}/>
                ))}
            </div>
        )}

        {art && (
            <div className={Style.marketPlaces}>
                {artArray.map(({image, name}, index) => (
                    <MPCard key={index + 1} image={image} name={name}/>
                ))}
            </div>
        )} 

        {generic && (
            <div className={Style.marketPlaces}>
                {genericArray.map(({image, name}, index) => (
                    <MPCard key={index + 1} image={image} name={name}/>
                ))}
            </div>
        )}

        {common && (
            <div className={Style.marketPlaces}>
                {commonArray.map(({image, name}, index) => (
                    <MPCard key={index + 1} image={image} name={name}/>
                ))}
            </div>
        )}

        {trading && (
            <div className={Style.marketPlaces}>
                {tradeArray.map(({image, name}, index) => (
                    <MPCard key={index + 1} image={image} name={name}/>
                ))}
            </div>
        )}

        {rare && (
            <div className={Style.marketPlaces}>
                {rareArray.map(({image, name}, index) => (
                    <MPCard key={index + 1} image={image} name={name}/>
                ))}
            </div>
        )} 

    </div>
  )
}

export default MP