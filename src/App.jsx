import ImageGen from "./components/ImageGen";
import PromptBar from "./components/PromptBar";
import FilterList from "./components/FilterList";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [imageLink, setImageLink] = useState("");
  const [filter, setFilter] = useState("");

  const handleSelect = (selected_filter) => {
    if (selected_filter === "Default") {
      setFilter("");
    } else {
      setFilter(selected_filter);
    }
  };

  const handleSubmit = async (prompt) => {
    const link = await ImageGen(prompt, filter);
    setImageLink(link);
  };

  return (
    <div className="app">
      <PromptBar onSubmit={handleSubmit} />
      <FilterList onSelect={handleSelect} />
      <h3 className="image-text">Generated Image:</h3>
      <img className="generated-image" src={imageLink} alt="generated_image" />
    </div>
  );
};

export default App;
