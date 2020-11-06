import './App.css';
import Header from './components/Header.js';
import Title from './components/Title.js';
import ManaListItem from './components/ManaListItem.js';
import PrimaryButton from './components/PrimaryButton.js';
//import DisabledButton from './components/DisabledButton.js';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Title />
      <ManaListItem color='white'/>
      <ManaListItem color='blue'/>
      <ManaListItem color='black'/>
      <ManaListItem color='red'/>
      <ManaListItem color='green'/>

      <PrimaryButton />
    </div>
  
  );
}

export default App;
