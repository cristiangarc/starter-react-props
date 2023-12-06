import React from "react";
import Button from "./Button"

function Main() {
  return (
    <main>
      <h2>Class Average:</h2>
      <h3>Notable performances and grades:</h3>
      <Button name="Submit" color="green"/>
      <Button name="Cancel" color="red"/>
      <ul></ul>
    </main>
  );
}

export default Main;
