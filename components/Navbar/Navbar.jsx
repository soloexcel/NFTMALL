// import React, { useEffect, useState }  from 'react'
// import { useLocation } from 'react-router';
// import Style from './Navbar.module.css'
// import Link from 'next/link'
// import { Button } from '../components'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     // Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";

//   import { useRouter } from "next/router";



// const Navbar = () => {

//     const [connected, toggleConnect] = useState(false);
//     // const location = useLocation();
//     const router = useRouter
//     const location = router.location
//     const [currAddress, updateAddress] = useState('0x');

//     async function getAddress() {
//     const ethers = require("ethers");
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const addr = await signer.getAddress();
//     updateAddress(addr);
//     }

//     function updateButton() {
//     const ethereumButton = document.querySelector('.enableEthereumButton');
//     ethereumButton.textContent = "Connected";
//     ethereumButton.classList.remove("hover:bg-blue-70");
//     ethereumButton.classList.remove("bg-blue-500");
//     ethereumButton.classList.add("hover:bg-green-70");
//     ethereumButton.classList.add("bg-green-500");
//     }

//     async function connectWebsite() {

//         const chainId = await window.ethereum.request({ method: 'eth_chainId' });
//         if(chainId !== '0x5')
//         {
//         //alert('Incorrect network! Switch your metamask network to Rinkeby');
//         await window.ethereum.request({
//             method: 'wallet_switchEthereumChain',
//             params: [{ chainId: '0x5' }],
//         })
//         }  
//         await window.ethereum.request({ method: 'eth_requestAccounts' })
//         .then(() => {
//             updateButton();
//             console.log("here");
//             getAddress();
//             window.location.replace(location.pathname)
//         });
//     }

//     useEffect(() => {
//         let val = window.ethereum.isConnected();
//         if(val)
//         {
//         console.log("here");
//         getAddress();
//         toggleConnect(val);
//         updateButton();
//         }

//         window.ethereum.on('accountsChanged', function(accounts){
//         window.location.replace(location.pathname)
//         })
//     });


//     const navLinks = [
//         {
//             name : "Home",
//             link: "/"
//         },
//         {
//             name : "Marketplace",
//             link: "marketplace"
//         },
//         {
//             name : "Create",
//             link: "create"
//         },
//         {
//             name : "Profile",
//             link: "profile"
//         }
//     ]
//   return (
//     <div className={Style.nav}>
//         <div className={Style.brand}>
//             {/* <img src="" alt="" /> */}
//         </div>
//         <div className={Style.toggle}></div>
//             <div className={Style.links}>
//                 {navLinks.map((el, i) => (
//                     <div key={i + 1} className={Style.li}>
//                     <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
//                     </div>
//                 ))}
//             </div>
//         <Button blue={true} btnName={connected? "Connected":"Connect Wallet"} handleClick={()=>{}}/>


//         <div className='text-white text-bold text-right mr-10 text-sm'>
//           {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to view NFTs"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
//         </div>
//     </div>
//   )
//       }


// export default Navbar

// 2

// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { useRouter } from "next/router";
// import { Button } from '../components'
// import Style from './Navbar.module.css'

// const Navbar = () => {
//     const [connected, toggleConnect] = useState(false);
//     const router = useRouter()
//     const location = router.pathname
//     const [currAddress, updateAddress] = useState('0x');

//     async function getAddress() {
//         const ethers = require("ethers");
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const addr = await signer.getAddress();
//         updateAddress(addr);
//     }

//     function updateButton() {
//         const ethereumButton = document.querySelector('.enableEthereumButton');
//         ethereumButton.textContent = "Connected";
//         ethereumButton.classList.remove("hover:bg-blue-70");
//         ethereumButton.classList.remove("bg-blue-500");
//         ethereumButton.classList.add("hover:bg-green-70");
//         ethereumButton.classList.add("bg-green-500");
//     }

//     async function connectWebsite() {
//         const chainId = await window.ethereum.request({ method: 'eth_chainId' });
//         if(chainId !== '0x5') {
//             await window.ethereum.request({
//                 method: 'wallet_switchEthereumChain',
//                 params: [{ chainId: '0x5' }],
//             })
//         }  
//         await window.ethereum.request({ method: 'eth_requestAccounts' })
//         .then(() => {
//             updateButton();
//             getAddress();
//             router.reload()
//         });
//     }

//     useEffect(() => {
//         let val = window.ethereum.isConnected();
//         if(val) {
//             getAddress();
//             toggleConnect(val);
//             updateButton();
//         }

//         window.ethereum.on('accountsChanged', function(accounts){
//             router.reload()
//         })
//     }, []);

//     const navLinks = [
//         {
//             name : "Home",
//             link: "/"
//         },
//         {
//             name : "Marketplace",
//             link: "marketplace"
//         },
//         {
//             name : "Create",
//             link: "create"
//         },
//         {
//             name : "Profile",
//             link: "profile"
//         }
//     ]
//     return (
//         <div className={Style.nav}>
//             <div className={Style.brand}>
//                 {/* <img src="" alt="" /> */}
//             </div>
//             <div className={Style.toggle}></div>
//             <div className={Style.links}>
//                 {navLinks.map((el, i) => (
//                     <div key={i + 1} className={Style.li}>
//                         <Link href={el.link}>{el.name}</Link>
//                     </div>
//                 ))}
//             </div>

//             <Button blue={true} btnName={connected? "connected" :"Connect Wallet"} handleClick={()=>{}}/>


//          <div className='text-white text-bold text-right mr-10 text-sm'>
//           {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to view NFTs"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
//       </div>
//  </div>
// )
//        }


// export default Navbar

            


import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { Button } from '../components'
import Style from './Navbar.module.css'

const Navbar = () => {
    const [connected, toggleConnect] = useState(false);
    const router = useRouter()
    const location = router.pathname
    const [currAddress, updateAddress] = useState('0x');

    async function getAddress() {
        const ethers = require("ethers");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        updateAddress(addr);
    }

    useEffect(() => {
        let val = window.ethereum.isConnected();
        if(val) {
            getAddress();
            toggleConnect(val);
            const ethereumButton = document.querySelector('.enableEthereumButton');
            if (ethereumButton) {
                ethereumButton.textContent = "Connected";
                ethereumButton.classList.remove("hover:bg-blue-70");
                ethereumButton.classList.remove("bg-blue-500");
                ethereumButton.classList.add("hover:bg-green-70");
                ethereumButton.classList.add("bg-green-500");
            }
            
        }

        window.ethereum.on('accountsChanged', function(accounts){
            router.reload()
        })
    }, []);

    async function connectWebsite() {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if(chainId !== '0x5') {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x5' }],
            })
        }  
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
            updateButton();
            getAddress();
            router.reload()
        });
    }

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
                        <Link href={el.link}>{el.name}</Link>
                    </div>
                ))}
            </div>

            <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button>
                
            {/* <Button blue={true} btnName={connected? "Connected" :"Connect Wallet"} handleClick={connectWebsite()}/> */}


         <div className='text-white text-bold text-right mr-10 text-sm'>
          {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to view NFTs"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
      </div>
 </div>
)
       }


export default Navbar