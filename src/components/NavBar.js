import React from "react";
import Select from "react-select";

function NavBar() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <label className="menu__label">Filter</label>
          <Select
            value={{ label: "All Animals", value: "" }}
            onChange={() => console.log("filter")}
            options={[
              { label: "All Animals", value: "" },
              { label: "Carnivores", value: "carnivore" },
              { label: "Herbivores", value: "herbivore" },
              { label: "Omnivores", value: "omnivore" }
            ]}
            className="menu__dropdown"
          />
        </li>
        <li className="menu__item">
          <label className="menu__label">Sort</label>
          <Select
            value={{ label: "Name", value: "name" }}
            onChange={() => console.log("sort")}
            options={[
              { label: "Name", value: "name" },
              { label: "Type", value: "type" },
              { label: "Diet", value: "diet" }
            ]}
            className="menu__dropdown"
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
