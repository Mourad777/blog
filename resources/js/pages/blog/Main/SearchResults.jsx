import React, { useEffect, useRef, useState, Fragment } from 'react';
import './SearchInput.css'
import { Icon } from 'semantic-ui-react'
import { getSearchInputStyle } from '../utility';

function useOutsideAlerter(ref, handleOutsideClick) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleOutsideClick()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Search = ({ posts, photos, videos,winSize }) => {
    const [searchValue, setSearchValue] = useState('');
    console.log('searchValue', searchValue)
    const options = [{ id: 1, title: 'Couchsurfing in Mexico', summary: 'Free accomodation', content: 'A new way to travel' },
    { id: 2, title: 'Hitchhking across Honduras', summary: 'Hitching is not as dangerous as you think', content: 'A way to meet cool people' },
    ]

    const handleSearchValue = (e) => {
        console.log('search e', e, 'e.target.value', e.target.value)
        setSearchValue(e.target.value);
    }

    const handleOutsideClick = () => {
        console.log('clicking outside is search value', !!searchValue)

        console.log('reseting search value')
        setSearchValue('');

    }
    const countries =
        [...posts, ...photos, ...videos]
            .filter(item => !!item.country)
            .map(item => item.country);
    console.log('------- countries ---------', countries)



    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, handleOutsideClick);

    const filteredResults = options
        .map(item => ({ title: item.title.toLowerCase(), summary: item.summary.toLowerCase(), content: item.content.toLowerCase() }))
        .filter(item => (item.title.includes(searchValue.toLowerCase()) || item.summary.includes(searchValue.toLowerCase()) || item.content.includes(searchValue.toLowerCase())) && !!searchValue.toLowerCase());

    return (
        <div
            style={{
                margin: 'auto',
                transform: 'translateX(-50%)',
                left: '50%',
                position: 'absolute',
                ...getSearchInputStyle(winSize),
                zIndex:10
            }}
            ref={wrapperRef} 
        >
            <div className="search-box">
                <button className="btn-search"><Icon name="search" /></button>
                <input value={searchValue} onChange={handleSearchValue} type="text" className="input-search" placeholder="Type to Search..."></input>
            </div>
            <div style={{
                margin: 'auto',
                minWidth: 300,
                transform: 'translateX(-50%)',
                left: '50%',
                position: 'absolute',
                top: 100,
                zIndex: 10
            }}

            >
                <div style={{ background: '#fff', borderRadius: 5, width: 300 }} >
                    {
                        filteredResults.map(res => (
                            <div key={`search-result[${res.id}]`} style={{ display: 'flex', padding: 5, cursor: 'pointer' }}>
                                <div ><img style={{
                                    width: '100%',
                                    maxWidth: 50,
                                }} src={(photos[0] || {}).src} /></div>
                                <p style={{ padding: 5 }}>{res.title}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}

export default Search;