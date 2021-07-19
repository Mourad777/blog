import React, { useEffect, useRef, useState, Fragment } from 'react';
import './SearchInput.css'
import { Icon } from 'semantic-ui-react'
import { AppUrl, getSearchInputStyle } from '../utility';
import VideoIcon from '../../../../../public/assets/video-icon.jpg'
import { useHistory } from 'react-router-dom';
import countryCodes from '../Countries/country-codes.json'

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
    console.log('-------- photos',photos)
    console.log('-------- videos',videos)
    console.log('-------- posts',posts)

    const adjustedPhotos = photos.map(p=>({
        type:'photo',
        id:p.id,country:p.country||'',
        summary:(p.description||'').toLowerCase(),
        author:(p.photographer||'').toLowerCase(),
        title:(p.title||'').toLowerCase(),
        content:'',
        image:p.src,

    }));
    const adjustedVideos = videos.map(v=>({
        type:'video',
        id:v.id,
        country:v.country||'',
        summary:(v.description||'').toLowerCase(),
        author:(v.videographer||'').toLowerCase(),
        title:(v.title||'').toLowerCase(),
        content:'',
        image:v.thumbnail,
    }));
    const adjustedPosts = posts.map(p=>({
        type:'post',
        id:p.id,
        country:p.country||'',
        summary:(p.summary||'').toLowerCase(),
        author:(p.author||'').toLowerCase(),
        title:(p.title||'').toLowerCase(),
        content:(p.content||'').toLowerCase(),
        image:p.image,
    }));

    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();
    console.log('searchValue', searchValue)

    const countries =
    [...posts, ...photos, ...videos]
        .filter(item => !!item.country)
        .map(item => ({
            title:countryCodes[item.country].toLowerCase(),
            type:'country',
            id:item.country,
            summary:'',
            author:'',
            content:'',
        }));

    const options = [...adjustedPhotos,...adjustedVideos,...adjustedPosts,...countries]

    const handleSearchValue = (e) => {
        console.log('search e', e, 'e.target.value', e.target.value)
        setSearchValue(e.target.value);
    }

    const handleOutsideClick = () => {
        console.log('clicking outside is search value', !!searchValue)

        console.log('reseting search value')
        setSearchValue('');

    }
    console.log('------- countries ---------', countries)

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, handleOutsideClick);

    const filteredResults = options
        .filter(item => (
            item.title.includes(searchValue.toLowerCase()) || 
            item.summary.includes(searchValue.toLowerCase()) || 
            item.author.includes(searchValue.toLowerCase()) || 
            item.content.includes(searchValue.toLowerCase())) && 
            !!searchValue.toLowerCase());

    console.log('-----------options--------',options)

    const handleResult = ({type,id}) => {
        if(type === 'photo')history.push(`/photo/${id}`);
        if(type === 'video')history.push(`/video/${id}`);
        if(type === 'post')history.push(`/post/${id}`);
        if(type === 'country')history.push(`/destination/${countryCodes[id].toLowerCase()}`)
    }

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
                            <div onClick={()=>handleResult({type:res.type,id:res.id})} key={`search-result[${res.id}]`} style={{ display: 'flex', padding: 5, cursor: 'pointer' }}>
                                <div ><img style={{
                                    width: '100%',
                                    maxWidth: 50,
                                }} src={res.image || VideoIcon} /></div>
                                <p style={{ padding: 5 }}>{res.title}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}

export default Search;