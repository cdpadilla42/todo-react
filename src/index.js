import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const defaultCoffees = [
  {
    title: 'Pike Place',
    description: 'balanced, rich',
    tasted: true,
    key: 1
  },
  {
    title: 'Veranda',
    description: 'Blonde, light, aromatic',
    tasted: true,
    key: 2
  },
  {
    title: 'Hawaiian Blend',
    description: 'Dark, careml, tropical',
    tasted: false,
    key: 3
  }
];

class NewCoffeeForm extends React.Component {
  render() {
    return <h1>Submit New Coffee</h1>;
  }
}

class Coffee extends React.Component {
  render() {
    return (
      <div className="coffee" key={this.props.coffee.key}>
        <h3>{this.props.coffee.title}</h3>
        <p>Tasted? {this.props.coffee.tasted ? 'Yes!' : 'Not yet!'}</p>
      </div>
    );
  }
}

class CoffeeList extends React.Component {
  render() {
    // render all coffees
    return (
      <div>
        <h1>Coffee List</h1>
        {this.props.coffees.map(coffee => {
          return <Coffee coffee={coffee} />;
        })}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [...defaultCoffees],
      formValue: '',
      searchText: ''
    };
  }

  drinkCoffee() {
    // makes change to state that coffee is drank/undrank
  }

  render() {
    return (
      <div className="coffee-journal">
        <h1>Coffee Journal</h1>
        <div className="coffee-list">
          <CoffeeList coffees={this.state.coffees} />
        </div>
        <div className="coffee-form">
          <NewCoffeeForm />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById('root'));
