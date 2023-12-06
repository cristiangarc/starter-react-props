import React from "react";

function Aside(props) {
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>
        <h3>Roster:</h3>
      <ol>{props.dogs.map(dog => (
          dog.present ? <li key={dog.name}>{dog.name}</li> : null
        ))}
      </ol>
      </ol>
    </aside>
  );
}

export default Aside;
