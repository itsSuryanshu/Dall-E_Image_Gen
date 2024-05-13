import "./FilterShow.css";

const FilterShow = ({ onSelect, filter_name, current_filter }) => {
  const classname =
    current_filter === filter_name ? "selected-filter-box" : "filter-box";
  const handleClick = () => {
    //document.getElementById(`${filter_name}123`).className =
    //"selected-filter-box";
    onSelect(filter_name);
  };
  return (
    <div onClick={handleClick} className={classname} id={`${filter_name}123`}>
      <p className="filter-name">{filter_name}</p>
    </div>
  );
};

export default FilterShow;
