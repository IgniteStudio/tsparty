import React from "react";
import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: input.age,
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: 0,
      url: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="note"
        value={input.note}
        placeholder="Note"
      ></textarea>
      <button className="AddToList-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddToList;
