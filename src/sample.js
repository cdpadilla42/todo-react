// ===================================

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


// ================================

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  submitForm() {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
  }

  updateSearchInput(e) {
    const val = e.target.value;
    this.setState({
      searchText: val
    })
  }

  SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
  }

  SearchForm.defaultProps = {
    onSubmit: () => {},
    searchVisible: false
  }

  render() {

    const { searchVisible } = this.state;
    let searchClasses = ['searchInput']

    <form onSubmit={this.submitForm.bind(this)}>
      <input
      type="text"
      className={searchClasses.join(' ')}
      placeholder="Search ..." />  
    </form>
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    }
  }

  Header.propTypes = {
    onSearch: PropTypes.func
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">
          {this.props.title}
        </span>

        <SearchForm searchVisible={this.props.searchVisible} onSubmit={this.props.onSearch}/>

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: data,
    }
  }

  handleSearch(val) {
    // handle search
  }

  render() {
    const { activities } = this.state; // ES6 destructuring

    return (
      <div>
        <Header
          title="Github activity" 
          onSearch={this.handleSearch.bind(this)}/>
        <div className="content">
          <div className="line" />
          {/* Timeline item */}
          {activities.map(activity => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    );
  }
}