const ImageCard = ({ image, openModal }) => {
  const imageStyles = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };
  return (
    <div style={{ backgroundColor: image.color, borderColor: image.color }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;
