import './App.css';
import React from 'react';
import Header from './components/Header.js';
//import Title from './components/Title.js';
import ManaListItem from './components/ManaListItem.js';
import Calculator from './components/Calculator.js';
import PrimaryButton from './components/PrimaryButton.js';
//import DisabledButton from './components/DisabledButton.js';

class App extends React.Component{
  symbolMap = {
    r:'red',
    b:'black',
    w:'white',
    u:'blue',
    g:'green'
  };

  manaCalc = new Calculator();

  constructor(props) {
    super(props);
    this.state = {
      symbols: {r:0,b:0,w:0,u:0,g:0}
    };
  }

  incrementSymbol(s) {
    this.state.symbols[s] = this.state.symbols[s]+1;
    this.setState({symbols: this.state.symbols});
  }

  decrementSymbol(s) {
    this.state.symbols[s] = this.state.symbols[s]-1;
    this.setState({symbols: this.state.symbols});
  }

  calculateLands(){
    this.manaCalc.setSymbols(this.state.symbols);
    console.log(this.manaCalc.calculateLands());
  }

  renderManaListItem(s) {
    return (
        <ManaListItem 
          color={this.symbolMap[s]}
          value={this.state.symbols[s]} 
          increment = {() => this.incrementSymbol(s)}
          decrement = {() => this.decrementSymbol(s)}
        />
      );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <h1>
          What's the total number of each mana symbol in your deck?
        </h1>
        {this.renderManaListItem('w')}
        {this.renderManaListItem('u')}
        {this.renderManaListItem('b')}
        {this.renderManaListItem('r')}
        {this.renderManaListItem('g')}
        <PrimaryButton text="Continue to the next screen" onClick={() => this.calculateLands()}/>
      </div>
      </div>
    
    );
  }
}

export default App;
