import searchIcon from '../../utilities/images/icons/search.svg';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';

export function SearchBar() {

    const [search, setSearch] = useState('');

    const { submitSearch } = useContext(SearchContext);

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        submitSearch(search);
        setSearch('');
        navigate('/shop/search');
    };

    const handleInput = ({target}) => {
        setSearch(target.value);
    }

    return (
        <form className="search-bar" autoComplete="off" onSubmit={handleSearch}>
            <button className='search-btn' type='submit'>
                <img id='search-icon' src={searchIcon} alt='search button' />
            </button>
            <input type='search' name='search' required placeholder="Search" onChange={handleInput} value={search} />
        </form>
    )
}