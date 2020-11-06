import './Components.css';

function PrimaryButton( text ) {
    return (
        <div className="container">
      <button className="primary-button">
        {text.text}
        </button>
      </div>
    );
  }
  
  export default PrimaryButton;
