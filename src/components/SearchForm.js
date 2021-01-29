import React, { useEffect} from 'react';
import { useGlobalContext} from '../context';

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef('');

    useEffect(() => {
       searchValue.current.focus()
    }, [])

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="name">Search for a cocktail</label>
                    <input id="name" type="text" ref={searchValue} onChange={searchCocktail}></input>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
