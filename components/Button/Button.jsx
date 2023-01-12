import React from 'react';

// Internal Import
import Style from './Button.module.css';

const Button = ({ btnName, handleClick, blue=false}) => {
  return (
    <div className={Style.box}>
      <button className={`${Style.button} ${blue ? Style.blue : ""}`} onClick={()=> handleClick()}>
        {btnName}
      </button>
    </div>
    
  );
};


export default Button