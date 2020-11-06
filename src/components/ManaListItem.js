import './Components.css';
import ManaType from './ManaType.js';
import Counter from './Counter.js';


function ManaListItem({ color }) {
    return (
      <div className="container">
            <div className="mana-list-item">
              <ManaType color={color}/>
              <Counter color={color}/>
            </div>
        </div>
    );
  }
  
  export default ManaListItem;