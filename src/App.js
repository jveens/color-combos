import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ColorForm from './components/ColorForm';
import ColorCard from './components/ColorCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      colors: []
    }
  }

  addColor = (event, name, foreground, background) => {

    event.preventDefault();

    const newColor = {
      name,
      foreground,
      background
    };

    const colors = [ ...this.state.colors ];

    colors.push(newColor);

    this.setState({
      colors
    });

  }

  renderColors() {
    const colors = this.state.colors.map((color, index) => {
      return (
        <ColorCard
          key={ index }
          name={ color.name }
          background={ color.background }
          foreground={ color.foreground }
        />
      );
    })

    return colors;
  }

  renderPlaceholder() {
    return <p>Add a color using the form above</p>
  }

  render() {
    return (
      <div className="App wrapper">
        <header className="App-header">
          <h1>Color Creator</h1>
          <ColorForm addColor={ this.addColor }/>
        </header>
        <main>
          {
            this.state.colors.length
            ? this.renderColors()
            : this.renderPlaceholder()
          }
        </main>
      </div>
    );
  }
}

export default App;
