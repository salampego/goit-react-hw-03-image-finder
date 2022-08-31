import { Component } from 'react';
import s from './App.module.css';

import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
export class App extends Component {
  state = {
    searchQuery: '',
    imageGallery: [],
    loading: false,
    page: 1,
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      console.log(searchQuery);
      this.setState({ loading: true });
      console.log(this.state.searchQuery);
      fetch(
        `https://pixabay.com/api/?key=26652166-68919f4336d4ff6c386516ecc&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(imageGallery =>
          this.setState({
            loading: false,
            imageGallery: [...prevState.imageGallery, ...imageGallery.hits],
            totalHits: imageGallery.totalHits,
          })
        )
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchBar.value;
    this.setState({
      imageGallery: [],
      searchQuery: value,
      page: 1,
      totalHits: 0,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, imageGallery, totalHits, page } = this.state;
    const totalPages = totalHits / 12;
    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.onSubmit} />
        {imageGallery && <ImageGallery imageGallery={imageGallery} />}
        {loading && <Loader />}

        {totalPages > page && <Button onClick={this.onLoadMore} />}
      </div>
    );
  }
}
