import React from 'react';
import Select from 'react-select';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.filterOptions = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];

    this.sortOptions = [
      { value: 'none', label: 'none' },
      { value: 'alphabetical', label: 'alphabetical' },
      { value: 'reverse alphabetical', label: 'reverse alphabetical' },
    ]

    this.iceCreams = [
      { id: 1, flavor: 'chocolate' },
      { id: 2, flavor: 'strawberry' },
      { id: 3, flavor: 'vanilla' },
    ]

    this.state = {
      filter: this.filterOptions[0],
      sort: this.sortOptions[0],
    }
  }

  render() {
    return (
      <div>
        <nav>
          <Select
            value={this.state.filter}
            onChange={(value) => this.setState({ filter: value })}
            options={this.filterOptions}
          />
          <Select
            value={this.state.sort}
            onChange={(value) => this.setState({ sort: value })}
            options={this.sortOptions}
          />
        </nav>
        <ul>
          {this.iceCreams.map(iceCream => {
            return (
              <li
                key={iceCream.id}
              >{iceCream.flavor}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
