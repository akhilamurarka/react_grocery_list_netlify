import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  /* const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0); 

  const handleName = () => {
    const names = ["Bob", "kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

   const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name}`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }; */

  return (
    <>
      {/* <p onDoubleClick={handleClick2}>
        Hello {name}, {count}
      </p>
      <button onClick={handleName}>click here for name</button>
      <button onClick={handleClick}>click here</button>
      <button onClick={(e) => handleClick3(e)}>click here for event</button> */}

      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}> Your list is empty.</p>
      )}
    </>
  );
};

export default Content;
