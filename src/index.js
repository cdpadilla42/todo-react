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
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      tasted: false
    };
  }

  updateTitleChange(e) {
    const val = e.target.value;
    this.setState({
      title: val
    });
  }

  updateDescChange(e) {
    const val = e.target.value;
    this.setState({
      description: val
    });
  }

  updateTastedCheck(e) {
    const val = !this.state.tasted;
    this.setState({
      tasted: val
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // extracts form values - Use obj destructuring :)
    const title = this.state.title;
    const description = this.state.description;
    const tasted = this.state.tasted;
    const key = 10 + this.props.coffees.length;
    const newCoffee = { title, description, tasted, key };
    // passes data up from prop function
    this.props.addCoffee(newCoffee);
    // clears state
  }

  render() {
    return (
      <div className="Coffee-Form">
        <h1>Submit New Coffee</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            <label htmlFor="title">Coffee Name:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.updateTitleChange.bind(this)}
            ></input>
          </p>
          <p>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.updateDescChange.bind(this)}
            ></input>
          </p>
          <p>
            <label htmlFor="tasted">Tasted?:</label>
            <input
              type="checkbox"
              id="tasted"
              name="tasted"
              checked={this.state.tasted}
              onChange={this.updateTastedCheck.bind(this)}
            ></input>
          </p>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

class Coffee extends React.Component {
  handleClick = e => {
    const key = parseInt(e.target.getAttribute('data-key'));
    this.props.drinkCoffee(key);
  };

  handleDelete = e => {
    const key = parseInt(e.target.getAttribute('data-key'));
    this.props.deleteCoffee(key);
  };

  render() {
    return (
      <div className="coffee">
        <h3>{this.props.coffee.title}</h3>
        <p onClick={this.handleClick} data-key={this.props.coffee.key}>
          Tasted? {this.props.coffee.tasted ? 'Yes!' : 'Not yet!'}
        </p>
        <p onClick={this.handleDelete} data-key={this.props.coffee.key}>
          Delete
        </p>
      </div>
    );
  }
}

class CoffeeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Coffee List</h1>
        {this.props.coffees.map(coffee => {
          return (
            <Coffee
              coffee={coffee}
              key={coffee.key}
              drinkCoffee={this.props.drinkCoffee}
              deleteCoffee={this.props.deleteCoffee}
            />
          );
        })}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [...defaultCoffees]
    };
  }

  addCoffee = newCoffee => {
    const currentCoffeeList = this.state.coffees;
    this.setState({ coffees: [...currentCoffeeList, newCoffee] });
  };

  deleteCoffee = coffeeKey => {
    let currentCoffeeList = this.state.coffees;
    console.log(currentCoffeeList, "before")
    currentCoffeeList = currentCoffeeList.filter(function(obj) {
      return obj.key !== coffeeKey;
    });
    console.log(currentCoffeeList, "after")
    this.setState({ coffees: currentCoffeeList });
  };

  drinkCoffee = coffeeKey => {
    console.log('Hello from App!', coffeeKey);
    const coffeeList = this.state.coffees.map(coffee => {
      if (coffee.key === coffeeKey) {
        coffee.tasted = !coffee.tasted;
      }
      return coffee;
    });

    console.log(coffeeList);

    this.setState({
      coffees: coffeeList
    });
  };

  render() {
    return (
      <div className="coffee-journal">
        <h1>Coffee Journal</h1>
        <div className="coffee-list">
          <CoffeeList
            coffees={this.state.coffees}
            drinkCoffee={this.drinkCoffee.bind(this)}
            deleteCoffee={this.deleteCoffee.bind(this)}
          />
        </div>
        <div className="coffee-form">
          <NewCoffeeForm
            formValue={this.state.formValue}
            addCoffee={this.addCoffee.bind(this)}
            coffees={this.state.coffees}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById('root'));
