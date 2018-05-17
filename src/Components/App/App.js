import React, { Component } from 'react';
// import './App.css';
// import { Card, CardBody } from "react-simple-card";

// import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

// Component is the parent class
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        {
          name: 'Bob',
          city: 'Queens',
          zip: '11358',
        }
      ],
      newUser:
        { name: '', city: '', zip: '' }

    };
    // makes `this` in handleChange
    // the same as `this` in the constructor

  }

  handleChangeFor = propertyName => event => {
    //this.state.user = event.target.value;
    this.setState({
      newUser: {
        ...this.state.newUser,
        [propertyName]: event.target.value
      }
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      user: [...this.state.user, this.state.newUser],
      newUser: {
        name: '',
        city: '',
        zip: '',
      },
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="username" />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder="user city" />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder="zip code" />
          <input type="submit" value="Submit" />
        </form>
        <div>

        </div>

        <ul>
          {
            this.state.user.map(user => <li key={user.name}>{user.name} is from {user.city}, which has a zip code of {user.zip}</li>)
          }
        </ul>
      </div>
    );
  }

}

export default App;

