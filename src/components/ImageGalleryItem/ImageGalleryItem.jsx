import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  showModal,
}) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
    </li>
  );
};
