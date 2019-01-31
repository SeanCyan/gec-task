import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.js'
import Header from './Header.js'
import Stats from './Stats.js'

class App extends Component {

  state = {
      visitors: {
        title: 'Visitors',
        num: 6579,
        adj: '+12%',
        class: 'green'
      },
      subscribers: {
        title: 'Subscribers',
        num: 3485,
        adj: '+9%',
        class: 'green'
      },
      yearlyChange: {
        title: 'Yearly Change',
        num: -289,
        adj: '-5%',
        class: 'red'
      }
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Header />
        <div className="card_container">
          <Stats title={this.state.visitors.title} num={this.state.visitors.num} adj={this.state.visitors.adj} class={this.state.visitors.class}/>
          <Stats title={this.state.subscribers.title} num={this.state.subscribers.num} adj={this.state.subscribers.adj} class={this.state.subscribers.class}/>
          <Stats title={this.state.yearlyChange.title} num={this.state.yearlyChange.num} adj={this.state.yearlyChange.adj} class={this.state.yearlyChange.class}/>
        </div>
      </div>
    );
  }
}

export default App;
