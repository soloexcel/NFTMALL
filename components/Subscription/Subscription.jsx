import React from 'react';
import Image from 'next/image';
import Style from './Subscription.module.css';
import image from '../../img';


import { RiSendPlaneFill } from 'react-icons/ri';
const Subscription = () => {
  return (
    <div className={Style.subscription}>
      <div className={Style.content}>
        <h2>Never miss a drop</h2>
        <p>
          Subcribe to our super-exclusive drop list and be the first to know
          abour upcoming drops  
        </p>
      

        <div className={Style.tip}>
          <span>01</span>
          <small>Get more discount</small>
        </div>

        <div className={Style.tip}>
          <span>02</span>
          <small>Get premium magazines</small>
        </div>

        <div className={Style.inputContainer}>
            <input type="email" placeholder="Enter your email" className={Style.input}/>
              <RiSendPlaneFill className={Style.icon} />
        </div>
      </div>

      <div className={Style.image}>
        <Image src={image.sub} alt="subscribe" className={Style.img}/>
      </div>

    </div>
  )
}

export default Subscription

// import React from 'react'
// import Image from 'next/image';
// import { RiSendPlaneFill } from 'react-icons/ri';

// import Style from './Subscription.module.css';
// import images from '../../img';


// const Subscription = () => {
//   return (
//     <div className={Style.subscribe}>
//       <div className={Style.subscribe_box}>
//         <div className={Style.subscribe_box_left}>
//           <h2>Never miss a drop</h2>
//           <p>
//             Subcribe to our super-exclusive drop list and be the first to know
//             abour upcoming drops
//           </p>
//           <div className={Style.subscribe_box_left_box}>
//             <span>01</span>
//             <small>Get more discount</small>
//           </div>

//           <div className={Style.subscribe_box_left_box}>
//             <span>02</span>
//             <small>Get premium magazines</small>
//           </div>

//           <div className={Style.subscribe_box_left_input}>
//             <input type="email" placeholder="Enter your email" />
//             <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
//           </div>
//         </div>

//         <div className={Style.subscribe_box_right}>
//           <Image
//           className={Style.sub}
//             src={images.sub}
//             width={300}
//             height= {300}
//             alt="get update"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Subscription