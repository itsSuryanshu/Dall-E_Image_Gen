import ImageGen from "./components/ImageGen";
import PromptBar from "./components/PromptBar";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [imageLink, setImageLink] = useState("");

  const handleSubmit = async (prompt) => {
    const link = await ImageGen(prompt);
    setImageLink(link);
  };

  return (
    <div className="app">
      <PromptBar onSubmit={handleSubmit} />
      <h3 className="image-text">Generated Image:</h3>
      <img className="generated-image" src={imageLink} alt="generated_image" />
    </div>
  );
};

export default App;
