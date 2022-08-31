import s from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
export class ImageGallery extends Component {
  state = {
    showModal: false,
  };
  toggleModal = showModal => {
    this.setState({ showModal: !showModal });
  };
  render() {
    const imageGallery = this.props.imageGallery;
    return (
      <ul className={s.ImageGallery}>
        <ImageGalleryItem imageGallery={imageGallery} />
      </ul>
    );
  }
}
