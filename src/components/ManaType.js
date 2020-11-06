import './Components.css';
import WhiteManaSymbol from '../white-mana-symbol.svg';


function Mana() {
    return (
        <div className="mana-type">
        <img src={WhiteManaSymbol} alt="White-Mana" className="mana-symbol" />
        <label className="mana-label">
            White
        </label>
</div>

    );
  }
  
  export default Mana;