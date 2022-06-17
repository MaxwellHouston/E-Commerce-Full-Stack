import searchIcon from '../../utilities/images/icons/search.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const createParams = () => {
        let nameSearch = '';
        setSearch(search.trim().toLowerCase());
        let pairArray = search.split(' ').map(word => {
            switch (word) {
              case 'large':
                return ['size', 'L'];
              case 'medium':
                return ['size', 'M'];
              case 'small':
                return ['size', 'S'];
              case 'black':
                return ['color', 'Black'];
              case 'blue':
                return ['color', 'Blue'];
              case 'red':
                return ['color', 'Red'];
              case 'white':
                return ['color', 'White'];
              case 'pink':
                return ['color', 'Pink'];    
              default:
                if(!nameSearch){
                  nameSearch = word
                } else {
                  nameSearch = nameSearch.concat(' ', word);
                }
                return null;
            }
        });
        let paramsArray = pairArray.filter(pair => pair);
        paramsArray.push(['name', nameSearch]);
        return new URLSearchParams(paramsArray);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        let searchParams = createParams();
        let searchURL = `/shop/search/?${searchParams.toString()}`;
        navigate(searchURL);
    };

    const handleInput = ({target}) => {
        setSearch(target.value);
    }

    return (
        <form className="search-bar" autoComplete="off" onSubmit={handleSearch}>
            <button className='search-btn' type='submit'>
                <img id='search-icon' src={searchIcon} alt='search button' />
            </button>
            <input type='search' name='search' required placeholder="Search" onChange={handleInput} />
        </form>
    )
}