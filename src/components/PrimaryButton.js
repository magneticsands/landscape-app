import './Components.css';

function PrimaryButton( props ) {
    return (
      <button className="primary-button" onClick={() => props.onClick()}>
        {props.text}
        </button>
    );
  }
  
  export default PrimaryButton;
