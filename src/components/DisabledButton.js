import './Components.css';

function DisabledButton( text ) {
    return (
      <button className="disabled-button">
        {text.text}
      </button>
    );
  }
  
  export default DisabledButton;
