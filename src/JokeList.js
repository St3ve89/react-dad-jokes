import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };


  constructor(props) {
    super(props)
    this.state = {
      jokes: []
    }
  }
  async componentDidMount() {
    // Load Jokes
    let jokes = []
    while(jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: 'application/json'}});
      jokes.push(res.data.joke)
    }
    this.setState({jokes: jokes})
  };

  render() {
    return (
      <div className="jokelist">
        <div className="jokelist-sidebar">
          <h1 className="jokelist-title"><span>Dad</span> Jokes</h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="jokelist-getmore">New Jokes</button>
        </div>
        <div className="jokelist-jokes">
          {this.state.jokes.map(j => <div>{j}</div>)}
        </div>
      </div>
    )
  }
}

export default JokeList