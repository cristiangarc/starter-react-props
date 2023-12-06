import React from "react";
import Button from "./Button"

function Main(props) {
  return (
    <main>
      <h2>Class Average:</h2>
      <h3>Notable performances and grades:</h3>
      <Button name="Submit" color="green"/>
      <Button name="Cancel" color="red"/>
      <ul>
        {props.dogs.map(dog => <li key={dog.name}>
          <span>{dog.name}</span> {dog.notes}
          <span>&nbsp; Grade:</span> {dog.grade}
        </li>)}
      </ul>
    </main>
  );
}

export default Main;