import s from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
export const SearchBar = ({ onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s['SearchForm-button']}>
          <span className={s['SearchForm-button-label']}>Search</span>
          <AiOutlineSearch value={{ size: '30px' }} />
        </button>

        <input
          name="searchBar"
          className={s['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
