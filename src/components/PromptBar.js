import { useState } from "react";
import "./PromptBar.css";

const PromptBar = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(prompt);
  };

  return (
    <div>
      <form className="form-items" onSubmit={handleFormSubmit}>
        <input
          className="prompt-box"
          value={prompt}
          onChange={handleChange}
          placeholder="Prompt..."
          spellCheck
        />
        <button className="prompt-submit-button">Enter</button>
      </form>
    </div>
  );
};

export default PromptBar;
