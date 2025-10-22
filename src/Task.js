import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Task() {
  const [name, setName] = useState("");
  const [reversName, setRname] = useState("");

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  const handleReverse = async () => {
    const reversed = name.split("").reverse().join("");
    setRname(reversed);
    const data = { name: name, reversName: reversed };
     try {
      const response = await axios.post("http://localhost:3001/api/task", data, {
        headers: {"Content-Type": "application/json",}
      });
      console.log(response.data, "data");
    } catch (error) {
      console.error("Error", error);
    }
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
