import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { RedirectButton } from '../components/RedirectButton';
import { BsSearch } from "react-icons/bs";

import '../css/search-by.css'
import { IconContext } from 'react-icons';

export const SearchView = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchAfter, setSearchAfter] = useState("");
    let history = useHistory();

    useEffect(() => {
        setSearchAfter(history.location.pathname.split('-')[1])
    }, [history]);


    const handleSearchInput = (event: any) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        history.push({
            pathname: "/result",
            state: searchInput
        });
    };
    
    /**
     * TODO:
     *  Lägg till funktionalitet för land
     */

    return (
        <div className="search-container">
            <div className="search-by-column-flexbox">
                <p className="description-text">SEARCH BY {searchAfter.toUpperCase()}</p>
                <input type="text" onChange={handleSearchInput} placeholder={"Enter a " + searchAfter} required></input>
                <button className="search-icon-button" type="submit" onClick={handleSubmit}>
                    <IconContext.Provider value={{ size: '2.5em' }}>
                        <BsSearch type="submit" />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}