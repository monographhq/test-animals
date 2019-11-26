import React from "react";
import Select from "react-select";
import NavBar from "./NavBar.js";
import ListItem from "./ListItem.js";
import "../App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.animals = [
      { id: 1, name: "Bear",        type: "mammal",  diet: "omnivore" },
      { id: 2, name: "Clownfish",   type: "fish",    diet: "omnivore" },
      { id: 3, name: "Crocodile",   type: "reptile", diet: "carnivore" },
      { id: 4, name: "Eagle",       type: "bird",    diet: "carnivore" },
      { id: 5, name: "Horse",       type: "mammal",  diet: "herbivore" },
      { id: 6, name: "Shark",       type: "fish",    diet: "carnivore" },
      { id: 7, name: "Surgeonfish", type: "fish",    diet: "herbivore" },
      { id: 8, name: "Swan",        type: "bird",    diet: "carnivore" },
      { id: 9, name: "Tortoise",    type: "reptile", diet: "herbivore" },
    ];

    this.state = {
      // 
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <ul>
          {/* put <ListItem>s here */}
        </ul>
      </div>
    );
  }
}

export default App;
