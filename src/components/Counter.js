import './Components.css';
import Plus from '../plus.svg';
import Minus from '../minus.svg';


function Counter({ color }) {
    return (
        <div className="counter">
           <button className="counter-button-container">
                <img src={Minus} alt="Minus-Sign" className="minus-button" />
            </button> 
            <span className={`value--${color}`}>
                0
            </span>
            <button className="counter-button-container">
                <img src={Plus} alt="Plus-Sign" className="plus-button" />
                </button> 
        </div>
    );
  }
  

  export default Counter;