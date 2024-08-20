import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  const galleryStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyles = {
    flex: "0 1 calc(25% - 10px)",
  };

  return (
    <ul style={galleryStyles}>
      {images.map((image) => (
        <li key={image.id} style={listItemStyles}>
          <ImageCard openModal={openModal} image={image} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
