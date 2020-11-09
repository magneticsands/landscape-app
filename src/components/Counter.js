import './Components.css';
import React, { useState } from 'react';
import Plus from '../img/plus.svg';
import Minus from '../img/minus.svg';
//import { render } from 'react-dom';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
           <button className="counter-button-container" onClick={() => setCount(count - 1)}>
                <img src={Minus} alt="Minus-Sign" className="minus-button" />
            </button> 
            <span className={`value--${props.color}`}>
               {count}
                </span>

            <button className="counter-button-container" onClick={() => setCount(count + 1)}>
              <img src={Plus} alt="Plus-Sign" className="plus-button" />
                </button> 
        </div>
    );
 }
  
export default Counter;
  