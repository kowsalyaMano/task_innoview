import React, { useState, useEffect } from "react";

export default function Task() {
  const [name, setName] = useState("");
  const [reversName, setRname] = useState("");

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  const handleReverse = () => {
    const reversed = name.split("").reverse().join("");
    setRname(reversed);
  };

  return (
    <div>
      <label htmlFor="name">Profile Name:</label>
      <input id="name" value={name} onChange={handleSubmit}></input>
      <button onClick={handleReverse}>Submit</button>
      <p>Reversed Input: {reversName}</p>
    </div>
  );
}
