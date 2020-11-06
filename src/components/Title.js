import './Components.css';

function Title( text ) {
    return (
        <div className="container">
        <h1>
            {text.text}
        </h1>
    </div>
    );
  }
  
  export default Title;