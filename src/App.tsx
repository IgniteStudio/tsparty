import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John",
      age: 45,
      url: "https://media-exp1.licdn.com/dms/image/C5603AQGwJYk9E0r_8g/profile-displayphoto-shrink_800_800/0/1586963480238?e=1641427200&v=beta&t=Dc7LqOOd8GaXJ1FNGxkicHcWEODbDXoCVZhnOcKVmuI",
      note: "He's an asshole"
    },
    {
      name: "John",
      age: 45,
      url: "https://media-exp1.licdn.com/dms/image/C5603AQGwJYk9E0r_8g/profile-displayphoto-shrink_800_800/0/1586963480238?e=1641427200&v=beta&t=Dc7LqOOd8GaXJ1FNGxkicHcWEODbDXoCVZhnOcKVmuI",
      note: "He's an asshole"
    },
    {
      name: "John",
      age: 45,
      url: "https://media-exp1.licdn.com/dms/image/C5603AQGwJYk9E0r_8g/profile-displayphoto-shrink_800_800/0/1586963480238?e=1641427200&v=beta&t=Dc7LqOOd8GaXJ1FNGxkicHcWEODbDXoCVZhnOcKVmuI",
      note: "He's an asshole"
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
