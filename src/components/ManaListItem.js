import './Components.css';
import ManaType from './ManaType.js';
import Counter from './Counter.js';


function ManaListItem({ color, src }) {
    return (
      <div className="container">
            <div className="mana-list-item">
              <ManaType src={src}/>
              <Counter color={color}/>
            </div>
        </div>
    );
  }
  
  export default ManaListItem;