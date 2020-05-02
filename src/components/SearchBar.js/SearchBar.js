import React, { useState, useEffect } from 'react';
import { fetchSearchData } from '../../api';
import GifLook from '../gif-look/GifLook';

import styles from './SearchBar.module.css';

function SearchBar() {

    const [search, setSearchState] = useState('');
    const [buttonClicked, setButtonClicked] = useState('');
    const [queryData, setQueryData] = useState([]);
    // const [limit, setLimit] = useState(25);
    const inputRef = React.createRef();

    const callApi = () => {
        setButtonClicked(search);
    }

    useEffect(() => {
        // console.log("Effect Running");
        const fetchAPI = async () => {
            setQueryData( await fetchSearchData(search, 25));
        }
        if(search) {
            fetchAPI();
        }
    }, [buttonClicked])

    return (
        <div>
            <div className={styles.searchArea}>
                <form className={styles.searchForm} onSubmit={ e => {
                    e.preventDefault();
                }}>
                    <div className={styles.inputContainer}>
                    <input type="text" value={search} onChange={e => setSearchState(e.target.value)} className={styles.inputBox} autoFocus placeholder="Search"
                    ref={inputRef}
                    onFocus={e => e.target.select()}
                    />
                    </div>
                    <button onClick={callApi} className={styles.searchButton}>
                        <img src="https://images.vexels.com/media/users/3/147105/isolated/preview/5c38be8d63c0ae0ad034417daaef3bcb-instagram-search-icon-by-vexels.png" alt="search" className={styles.searchImage}></img>
                    </button>
                </form>
                {/* <div className={styles.button}>
                    <button className={styles.trending} >
                        Trending
                    </button>
                </div> */}
            </div>
            <div className={styles.gifWrapper} onScroll={e => {
                e.preventDefault();
            }}>
            {queryData.length ?  queryData.map(
                (e) => {
                    // console.log(e);
                    return <GifLook url={e} key={e.id} />
                }
            ): 
                null
            }
            </div>
        </div>
    )
}

export default SearchBar
