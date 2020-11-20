import './Components.css';
import ManaType from './ManaType.js';
import Counter from './Counter.js';


function ManaListItem(props) {
    return (
            <div className="mana-list-item">
              <ManaType color={props.color}/>
              <Counter 
               color={props.color}
               increment = {props.increment}
               decrement = {props.decrement}
               value = {props.value}
              />
            </div>
    );
  }
  
  export default ManaListItem;