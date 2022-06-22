import { createContext, useCallback, useState } from "react";
import apiProducts from "../../utilities/api/apiProducts";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');

    const createSearchObject = (newSearch) => {
        setSearchText(newSearch);
        let nameSearch = '';
        let searchObject = {};
        let formatedSearch = newSearch.trim().toLowerCase();
        formatedSearch.split(' ').forEach(word => {
            switch (word) {
              case 'large':
                searchObject.size = 'L';
                break;
              case 'medium':
                searchObject.size = 'M';
                break;
              case 'small':
                searchObject.size = 'S';
                break;
              case 'black':
                searchObject.color = 'Black';
                break;
              case 'blue':
                searchObject.color = 'Blue';
                break;
              case 'red':
                searchObject.color = 'Red';
                break;
              case 'white':
                searchObject.color = 'White';
                break;
              case 'pink':
                searchObject.color = 'Pink';
                break;    
              default:
                if(!nameSearch){
                  nameSearch = word;
                } else {
                  nameSearch = nameSearch.concat(' ', word);
                }
                break;
            }
        });
        searchObject.name = nameSearch;
        if(!searchObject.name){ searchObject.name = 'null'};
        if(!searchObject.color){ searchObject.color = 'null'};
        if(!searchObject.size){ searchObject.size = 'null'};
        return searchObject;
    };

    const submitSearch = async (newSearch) => {
        let searchObject = createSearchObject(newSearch);
        let searchResponse = await apiProducts.fetchProductBySearch(searchObject);
        setSearchResults(searchResponse);
    };

    const clearSearch = useCallback( 
      () => { 
        setSearchResults([]);
        setSearchText('');
      }, []
    );

    return (
        <SearchContext.Provider value={{searchResults: searchResults, submitSearch: submitSearch, clearSearch: clearSearch, searchText: searchText}}>
            {children}
        </SearchContext.Provider>
    )
};