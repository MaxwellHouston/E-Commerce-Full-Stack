import searchIcon from '../../utilities/images/icons/search.svg';

export function SearchBar() {
    return (
        <form className="search-bar" autoComplete="off">
            <button className='search-btn' type='submit'>
                <img id='search-icon' src={searchIcon} alt='search button' />
            </button>
            <input type='search' name='search' required placeholder="Search" />
        </form>
    )
}