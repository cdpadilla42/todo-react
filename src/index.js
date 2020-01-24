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
    return (
      <div className="Coffee-Form">
        {/* <h1>Submit New Coffee</h1>
        <form>
          <p>
            <label htmlFor="title">Coffee Name:</label>
            <input type="text" id="title" name="title" value={this.props.formValue.title}></input>
          </p>
          <p>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={this.props.formValue.description}
            ></input>
          </p>
          <p>
            <label htmlFor="tasted">Tasted?:</label>
            <input
              type="checkbox"
              id="tasted"
              name="tasted"
              checked={this.props.formValue.tasted}
            ></input>
          </p>
        </form> */}
      </div>
    );
  }
}

class Coffee extends React.Component {
  handleClick = key => {
    console.log('big gulp');
    this.props.drinkCoffee();
  };

  render() {
    return (
      <div className="coffee">
        <h3>{this.props.coffee.title}</h3>
        <p onClick={this.handleClick}>Tasted? {this.props.coffee.tasted ? 'Yes!' : 'Not yet!'}</p>
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
          return <Coffee coffee={coffee} key={coffee.key} />;
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
      formValue: {
        title: '',
        description: '',
        tasted: false
      },
      searchText: ''
    };
  }

  drinkCoffee = () => {
    console.log('gulp');
    // this.setState({
    //   coffees: this.state.coffees.map(coffee => {
    //     if (coffee.key === coffeeKey) {
    //       coffee.tasted = !coffee.tasted;
    //     }
    //     return coffee;
    //   })
    // });

    // // copy current list of coffees
    // let coffees = this.state.coffees;
    // // find the current coffee in the list
    // let currentCoffee = coffees.find(obj => obj.key === coffeeKey);
    // // make the change
    // currentCoffee.tasted = !currentCoffee.tasted;
    // // reset state to replace with this list
    // this.setState({ coffees: coffees });
  };

  render() {
    return (
      <div className="coffee-journal">
        <h1>Coffee Journal</h1>
        <div className="coffee-list">
          <CoffeeList coffees={this.state.coffees} drinkCoffee={this.drinkCoffee} />
        </div>
        <div className="coffee-form">
          <NewCoffeeForm formValue={this.state.formValue} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById('root'));
