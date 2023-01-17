// import axie from "../tile.jpeg";
// import {
//     BrowserRouter as Router,
//     Link,
//   } from "react-router-dom";

import Link from "next/link";

function NFTCard (nft) {
    const newTo = {
        pathname:"/nftPage/"+nft.nfttokenId
    }
    return (
        <Link href={newTo}>
            <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
                <img src={nft.nft.image} alt="" className="w-72 h-80 rounded-lg object-cover" />
                <div className= "text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
                    <strong className="text-xl">{nft.nft.name}</strong>
                    <p className="display-inline">
                        {nft.nft.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default NFTCard;
