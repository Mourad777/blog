import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import _ from 'lodash';
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
// import geo from "../../../../pages/blog/geo.json"
import { ScrollTrigger } from 'gsap/all';
import Photos from './Photos'
import axios from 'axios'
import { AppUrl } from '../utility';
import countryCodes from '../Countries/country-codes.json';
import moment from 'moment';
import VideoIcon from '../../../../../public/assets/video-icon.jpg'

function capitalize(str) {
    const capStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capStr
}
function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

const Country = ({ winSize }) => {
    const params = useParams();
    const countryIso = params.country;
    const selectedCategory = params.categoryId;
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const triggers = ScrollTrigger.getAll();
        triggers.forEach(tr => {
            tr.kill()
        });
        let url;
        if (countryIso) {
            //switch keys and values to search country code by country name
            const countryCodesSwapped = swap(countryCodes);
            //capitalize first letter of country name to match the json object
            // const country = capitalize(selectedCountry);
            // const countryIso = countryCodesSwapped[country];
            url = `${AppUrl}api/countries/${countryIso}`;
        }
        if (selectedCategory) {
            url = `${AppUrl}api/categories/${selectedCategory}`
        }
        const getContent = async () => {
            const contentResponse = await axios.get(url);
            console.log('content response', contentResponse)
            setPosts(contentResponse.data.posts || []);
            setPhotos(contentResponse.data.photos || []);
            setVideos(contentResponse.data.videos || []);
        }
        getContent();

    }, []);
    let videoContainerWidth;
    if (winSize === 1) {
        videoContainerWidth = 300
    }
    if (winSize === 2) {
        videoContainerWidth = 650
    }
    if (winSize >= 3) {
        videoContainerWidth = 800
    }

    const titleContainerStyle = {
        position: 'absolute',
        color: 'rgb(255, 255, 255)',
        background: 'rgb(0, 0, 0)',
        opacity: 0.5,
        left: '50%',
        top: 10,
        transform: 'translateX(-50%)',
        textAlign: 'center',
        padding: 5,
        minWidth: 230,
        borderRadius: 5,
    }
    let postColumns, gridWidth;
    if (winSize > 2 && posts.length > 2) {
        postColumns = 'repeat(3, 1fr)';
        gridWidth = 800;
    }
    if (winSize === 2 || posts.length === 2) {
        postColumns = 'repeat(2, 1fr)';
        gridWidth = 650;
    }
    if (winSize === 1 || posts.length === 1) {
        postColumns = 'repeat(1, 1fr)';
        gridWidth = 300;
    }
    return (
        <div style={{ height: '100%', width: '100%', background: '#ece7e2', minHeight: '100vh', paddingBottom: 20 }}>
            <div style={{ padding: 20 }}>
                <Button content='Home' onClick={() => { history.push('/') }} />
            </div>
            <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '4em', fontFamily: 'Mulish', paddingTop: 30 }}>{capitalize(countryCodes[countryIso] || selectedCategory)}</p>
            {posts.length > 0 && <div className="posts-category-container" style={{ padding: 10 }}>
                <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish' }}>Posts</p>
                <div style={{
                    display: 'grid',
                    maxWidth: gridWidth,
                    margin: '0 auto',
                    gridGap: '3rem',
                    gridTemplateColumns: postColumns,
                }}>
                    {posts.map(p => <div key={p.title} onClick={() => history.push(`/post/${p.id}`)} style={{ borderRadius: 5, background: '#fff', height: '50vh', cursor: 'pointer', }}>
                        <div style={{ height: '25%', padding: 10 }}><p style={{
                            fontFamily: 'Mulish',
                            fontWeight: 600,
                            // color: '#daad86',
                            textAlign: 'center',
                            fontSize: '1.5em',
                            maxWidth: '100%'


                        }}
                        >{p.title + 'Hitchhiking across Mexico and Nicaragua'}</p></div>
                        <div style={{ height: '40%', background: 'blue' }}>
                            <img src={p.image} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{ fontStyle: 'italic', color: '#8b8b8b', padding: 10 }}>{moment(new Date(p.created_at).getTime()).format("MMMM DD YYYY")}</span>
                        <div style={{ padding: 10 }}>
                            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </p>
                        </div>
                    </div>)}
                </div>
            </div>}
            {
                photos.length > 0 && <div className="photo-category-container">
                    <Photos winSize={winSize} photos={photos} />
                </div>
            }
            {
                videos.length > 0 && <div className="video-category-container">
                    <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish', paddingTop: 30 }}>Videos</p>
                    <div>
                        {videos.map(v =>
                        (<div key={`video[${v.id}]`} style={
                            {
                                background: '#fff',
                                alignItems: 'center',
                                display: 'flex', flexDirection: winSize === 1 ? 'column' : 'row',
                                borderRadius: 5,
                                maxWidth: videoContainerWidth,
                                margin: 'auto',
                                color: 'rgb(0,0,0)',
                                cursor: 'pointer',
                                marginBottom: 20,
                            }
                        }
                            onClick={() => history.push(`/video/${v.id}`)}>
                            <div style={{ position: 'relative', height: '100%', width: winSize === 1 ? '100%' : '50%' }}>

                                <img src={v.thumbnail||VideoIcon} style={{ objectFit: 'cover', width: '100%', borderRadius: winSize === 1 ? '5px 5px 0 0' : '5px 0 0 5px' }} />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                padding: 10,
                                height: winSize === 1 ? 200 : '100%',
                                width: winSize === 1 ? '100%' : '50%'
                            }}>
                                <div>
                                    <p style={{ fontSize: '1.5em', textAlign: 'center',margin:0 }}>{v.title}</p>
                                    <p style={{ fontStyle: 'italic', color: '#8b8b8b', padding: 10,textAlign:'center' }}>{moment(new Date(v.created_at).getTime()).format("MMMM DD YYYY")}</p>

                                </div>

                                <p style={{textAlign:'center'}}>{v.description}</p>

                                <div />
                            </div>
                        </div>)
                        )}
                    </div>
                </div>
            }
            {/* <StyledBackdrop onClick={(e) => { history.push('/') }} /> */}

            {/* <h1 style={{ textAlign: 'center', paddingTop: 30 }}>  {selectedCountry.slice(0, 1).toUpperCase() + selectedCountry.slice(1, selectedCountry.length)} </h1> */}

            {/* <svg  viewBox="0 0 750 750">
                    <path  d={countryShape} />
                </svg> */}

            {/* {posts.map(p => (<h5 key={p.title} >
                {p.title}
            </h5>))} */}

        </div >
    )
}

export default Country;