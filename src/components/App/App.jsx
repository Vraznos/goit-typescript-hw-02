//import { getPhotos } from "apiService/photos";

import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getPhotos } from "../apiPhotos/apiphotos";
import ImageGallery from "../ImageGallery/ImageGallery";

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const App = () => {
  //query,images,pages,error,loader,empty,visible,modal,modalUrl,modalAlt
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(1);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoader(true);
      try {
        const { total_pages, results } = await getPhotos(query, pages);
        if (results.length === 0) {
          toast.error("There is no matches to yout request. PLS Try again!");
          setLoader(false);
          setEmpty(true);
          return;
        }
        setImages((previmages) => [...previmages, ...results]);
        setVisible(pages < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchImages();
  }, [query, pages]);

  const onSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPages(1);
    setError(null);
    setEmpty(false);
    setVisible(false);
  };
  const onLoadMore = () => {
    setPages((page) => page + 1);
  };
  const openModal = (image) => {
    setModal(true);
    setModalUrl(image.urls.regular);
    setModalAlt(image.alt_description);
  };
  const onCloseModal = () => {
    setModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery openModal={openModal} images={images} />
      )}
      {visible && (
        <LoadMoreBtn onClick={onLoadMore} /* disabled={loader} */>
          Load More
        </LoadMoreBtn>
      )}

      {loader && <Loader />}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {empty && <ErrorMessage>Sorry, there are no images...</ErrorMessage>}
      <ImageModal
        modalIsOpen={modal}
        src={modalUrl}
        alt={modalAlt}
        closeModal={onCloseModal}
      />
    </>
  );
};

export default App;
