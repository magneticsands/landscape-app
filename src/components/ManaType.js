import './Components.css';
import WhiteManaSymbol from '../img/white-mana-symbol.svg';
import BlueManaSymbol from '../img/blue-mana-symbol.svg';
import BlackManaSymbol from '../img/black-mana-symbol.svg';
import RedManaSymbol from '../img/red-mana-symbol.svg';
import GreenManaSymbol from '../img/green-mana-symbol.svg';

const type = {
    'white':
        src = {WhiteManaSymbol},
        label: "White",

    'blue': 
        src = {BlueManaSymbol},
        label: "Blue",

    'black':
        src = {BlackManaSymbol},
        label: "Black",

    'red':
        src = {RedManaSymbol},
        label: "Red",

    'green':
        src = {GreenManaSymbol},
        label: "Green",
}

function Mana({ type }) {
    return (
        <div className="mana-type">
        <img src={type[color].src} alt="White-Mana" className="mana-symbol" />
        <label className="mana-label">
            {type.label.color}
        </label>
</div>

    );
  }
  
  export default Mana;