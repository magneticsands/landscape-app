import './Components.css';
import logo from '../logo.svg';
import Menu from './Menu.js';

function Header() {
    return (
      <div className="header-container">
          <img src={logo} alt="Logo" className="header-logo" />
          <Menu />
      </div>
    );
  }
  
  export default Header;
  
  