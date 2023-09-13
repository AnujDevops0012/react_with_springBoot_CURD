
import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';

class NewComponent extends Component {
  // redirectToAnotherRoute = () => {
  //   const { history } = this.props;
  //   history.push('/'); // Replace '/another-route' with your desired route
  // }
  redirectToAnotherRoute = () => {
    // Use this.props.history to access the history object
    this.props.history.push('/another-route'); // Replace '/another-route' with your desired route
  }

  render() {
    return (
      <div>
        <button onClick={this.redirectToAnotherRoute}>Redirect</button>
      </div>
    );
  }
}

export default NewComponent;
