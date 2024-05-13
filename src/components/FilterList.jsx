import { useState } from "react";
import FilterShow from "./FilterShow";
import "./FilterList.css";

const FilterList = ({ onSelect }) => {
  const filters = [
    "Default",
    "Realistic",
    "Anime",
    "Cartoon",
    "Retro",
    "Comic",
  ];

  const [filter, setFilter] = useState(filters[0]);

  const handleSelect = (current_filter) => {
    //document.getElementById(`${filter}123`).className = "filter-box";
    setFilter(current_filter);
    onSelect(current_filter);
  };

  const filters_list = filters.map((eachfilter, index) => {
    return (
      <FilterShow
        onSelect={handleSelect}
        key={index}
        filter_name={eachfilter}
        current_filter={filter}
      />
    );
  });

  return (
    <div className="filter-list">
      <div className="filter-list-text">Filters:</div>
      <div className="list">{filters_list}</div>
    </div>
  );
};

export default FilterList;
