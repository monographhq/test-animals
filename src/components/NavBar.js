import React from 'react';
import Select from 'react-select';
// import '../App.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item">
            <Select
              value={null}
              onChange={() => console.log("filter")}
              options={[]}
              className="menu__link"
            />
          </li>
          <li class="menu__item">
            <Select
              value={null}
              onChange={() => console.log("sort")}
              options={[]}
              className="menu__link"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;