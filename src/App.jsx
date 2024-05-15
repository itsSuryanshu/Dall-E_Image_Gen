import ImageGen from "./components/ImageGen";
import PromptBar from "./components/PromptBar";
import FilterList from "./components/FilterList";
import PreviousImages from "./components/PreviousImages";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [imageLink, setImageLink] = useState("");
  const [filter, setFilter] = useState("");
  const [imageLinks, setImageLinks] = useState([]);

  const handleSelect = (selected_filter) => {
    if (selected_filter === "Default") {
      setFilter("");
    } else {
      setFilter(selected_filter);
    }
  };

  const handleSubmit = async (prompt) => {
    if (imageLink !== "" && !imageLinks.includes(imageLink)) {
      setImageLinks([...imageLinks, imageLink]);
    }
    const link = await ImageGen(prompt, filter);
    setImageLink(link);
  };

  return (
    <div className="app">
      <PromptBar onSubmit={handleSubmit} />
      <FilterList onSelect={handleSelect} />
      <div className="images-past-images">
        <div className="current-image">
          <p className="image-text">Generated Image:</p>
          <img
            className="generated-image"
            src={imageLink}
            alt="generated_image"
          />
        </div>
        <PreviousImages images={imageLinks} />
      </div>
    </div>
  );
};

export default App;
