import './Components.css';

function PrimaryButton( text ) {
    return (
      <button className="primary-button">
        {text.text}
        </button>
    );
  }
  
  export default PrimaryButton;
