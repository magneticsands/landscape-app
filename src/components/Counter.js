import React, { useState } from "react";
import './Components.css';
//import Plus from '../img/plus.svg';
//import Minus from '../components/Minus.js';
//import Minus from '../img/minus.svg';
//import { render } from 'react-dom';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
          <button disabled={count < 1} className="counter-button-container" onClick={() => setCount(count - 1)}>
            <svg className="minus-button" width={20} height={2} viewBox="0 0 20 2" {...props}>
        <path
          fill=""
          stroke=""
          strokeLinecap="round"
          strokeWidth={2}
          d="M1 1h18"
        />
      </svg>   
      </button>
            <span className={`value--${props.color}`}>
               {count}
                </span>
            <button disabled={count > 29} className="counter-button-container" onClick={() => setCount(count + 1)}>
            <svg className="plus-button" width={22} height={22} viewBox="0 0 22 22" {...props}>
      <g fill="" stroke="" strokeLinecap="round" strokeWidth={2}>
        <path d="M11 1v20M1 11h20" />
      </g>
    </svg>
           </button> 
        </div>
    );
 }
  
export default Counter;
   //
              //<img src={Plus} alt="Plus-Sign" className="plus-button" />
                //