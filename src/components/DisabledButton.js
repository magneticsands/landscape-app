import './Components.css';

function DisabledButton( text ) {
    return (
        <div className="container">
      <button className="disabled-button">
        {text.text}
      </button>
      </div>
    );
  }
  
  export default DisabledButton;
