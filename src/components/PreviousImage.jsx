import "./PreviousImage.css";

const PreviousImage = ({ imageLink }) => {
  return (
    <div className="old-image-small">
      <img src={imageLink} />
    </div>
  );
};

export default PreviousImage;
