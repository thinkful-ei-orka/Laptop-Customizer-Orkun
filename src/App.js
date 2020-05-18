import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import Header from './components/Header';
import MainForm from './components/MainForm';
import MainSummary from './components/MainSummary';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  //updateFeature changes the state to the selected items
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    //selected is the list of currently selected items
    selected[feature] = newValue;
    //selected[feature] /*gives the props of selected item*/ 
    this.setState({
      selected
    });
  };

  render() {
    
    return (
      <div className="App">
        <Header/>
        <main>
        <MainForm
        store={this.props.features} 
        selected={this.state.selected}
        updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
        />

        <MainSummary 
        selected={this.state.selected} 
        />
        </main>
      </div>
    );
  }
}

export default App;
