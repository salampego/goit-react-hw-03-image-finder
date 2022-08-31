import s from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
export const ImageGallery = ({ imageGallery }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imageGallery={imageGallery} />
    </ul>
  );
};
