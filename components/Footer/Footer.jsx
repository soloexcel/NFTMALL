import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from '../../img';
import Style from './Footer.module.css'
// import AiFillFacebook from 'react-icons/ai' 
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {

  const servicesLinks = 
  [
    {
      name:"Art",
      link:"art"
    },

    {
      name:"Generic",
      link:"generic"
    },

    {
      name:"Common",
      link:"common"
    },

    {
      name:"Trading",
      link:"trading"
    },

    {
      name:"Rare",
      link:"rare"
    }
  ];

  const companyLinks = 
  [
    {
      name:"Home",
      link:"home"
    },

    {
      name:"About",
      link:"about"
    },

    {
      name:"Marketplace",
      link:"marketplace"
    },

    {
      name:"Sellers",
      link:"sellers"
    },

    {
      name:"Create",
      link:"create"
    }
  ];

  const contactInfo = [
    {
      icon: <MdEmail />,
      value: "kishanshet21@gmail.com",
    },

    {
      icon: <MdPhoneInTalk />,
      value: "+(480) 555-0103",
    },

    {
      icon: <IoLocationSharp />,
      value: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    }
  ];
  const socialIcons = [
    <AiFillFacebook />,
    <FaTwitterSquare />,
    <BsLinkedin />,
    <FaInstagramSquare />,
  ];

  return (
    <div className={Style.footerSection}>
        <div className={Style.row}>
        <div className={Style.brand}>
          <img src={image.logo} alt="logo" />
        </div>
        <p className={Style.description}>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
        <div className={Style.socialIcons}>
          {socialIcons.map((icon) => {
            return <div className={Style.icon}>{icon}</div>;
          })}
        </div>
      </div>
      <div className={Style.row}>
        <h3>Our Services</h3>
        <div className={Style.links}>
                {servicesLinks.map((el, i) => (
                    <div key={i + 1} className={Style.li}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </div>
                ))}
        </div>
        {/* <ul className={Style.list}>
          {servicesLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul> */}
      </div>
      <div className={Style.row}>
        <h3>Company</h3>
        <div className={Style.links}>
                {companyLinks.map((el, i) => (
                    <div key={i + 1} className={Style.li}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </div>
                ))}
        </div>
        {/* <ul className={Style.list}>
          {companyLinks.map((link) => {
            return <li className={Style.listItem} key={link}>{link}</li>;
          })}
        </ul> */}
        
      </div>
      <div className={Style.row}>
        <h3>Contact Us</h3>
        {/* <ul>
          {contactInfo.map(({ icon, value }) => {
            return (
              <li>
                <div className={Style.icon}>{icon}</div>
                <span>{value}</span>
              </li>
            );
          })}
        </ul> */}
        <div className={Style.links}>
                {contactInfo.map((el, i) => (
                    <div key={i + 1} className={Style.li}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default Footer;


