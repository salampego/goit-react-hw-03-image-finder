import s from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ imageGallery }) => {
  return imageGallery.map(data => {
    const { id, webformatURL, tags } = data;
    return (
      <li className={s.ImageGalleryItem} key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};
