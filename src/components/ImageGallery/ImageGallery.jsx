import s from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ imageGallery }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imageGallery={imageGallery} />
    </ul>
  );
};
