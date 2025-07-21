import { useState } from "react";

const MyInput = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };
  return (
    <div>
      <label>Your Name</label>
      <input value={input} onChange={handleInputChange} />
    </div>
  );
};

export default MyInput;
