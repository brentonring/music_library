// import { useContext } from "react";
// import { SearchContext } from "./context/SearchContext";

// export default function SearchBar() {
//     let [term, handleSearch] = useContext(SearchContext)

//     return(
//         <form>
//             <input ref={term} type='text' placeholder="Enter a search term here" />
//             <button onClick={(e) => handleSearch(e, term)}>Submit</button>
//         </form>
//     )
// }

import { useContext } from 'react'
import {SearchContext} from './context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}

export default SearchBar;