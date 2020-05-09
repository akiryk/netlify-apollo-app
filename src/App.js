import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import HelloWorld from './HelloWorld';
import './App.css';

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql',
});

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick('hello')}>
          {loading ? 'Loading...' : 'Call Lambda'}
        </button>
        <button onClick={this.handleClick('async-dadjoke')}>
          {loading ? 'Loading...' : 'Call Async Lambda'}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <HelloWorld />
          <LambdaDemo />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
