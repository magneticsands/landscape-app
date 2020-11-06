import './Components.css';
import logo from '../img/logo.svg';
//import Menu from './Menu.js';

function Header() {
    return (
      <div className="header-container">
          <img src={logo} alt="Logo" className="header-logo" />
      </div>
    );
  }
  
  export default Header;
  
  