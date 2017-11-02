import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <header>
          <label>{ this.state.count }</label>
          <button onClick={this.handleClick}>Click Me!</button>
        </header>
        <Modal>
          <header>Modal</header>
          <section>
            Body
          </section>
        </Modal>
      </div>
    );
  }
}

export default App;