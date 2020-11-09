import './Components.css';
import ManaType from './ManaType.js';
import Counter from './Counter.js';


function ManaListItem(props) {
    return (
            <div className="mana-list-item">
              <ManaType color={props.color}/>
              <Counter color={props.color}/>
            </div>
    );
  }
  
  export default ManaListItem;