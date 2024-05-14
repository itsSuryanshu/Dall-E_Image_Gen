import PreviousImage from "./PreviousImage";
import "./PreviousImages.css";

const PreviousImages = ({ images }) => {
  const past_images = images.map((image, index) => {
    return <PreviousImage imageLink={image} key={index} />;
  });
  return (
    <div>
      <p className="past-images-text">Past Images:</p>
      <div className="past-images">{past_images}</div>
    </div>
  );
};

export default PreviousImages;
