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
    console.log('params', params)
    const selectedCountry = params.country;
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

        if (selectedCountry) {
            //switch keys and values to search country code by country name
            const countryCodesSwapped = swap(countryCodes);
            //capitalize first letter of country name to match the json object
            const country = capitalize(selectedCountry);
            const countryIso = countryCodesSwapped[country];
            url = `${AppUrl}api/countries/${countryIso}`;
            console.log('url---', url)
        }
        if (selectedCategory) {
            const categoryId = ''
            url = `${AppUrl}api/photo/${categoryId}`
        }
        const getContent = async () => {
            const contentResponse = await axios.get(url);
            console.log('photo response', contentResponse)
            setPosts(contentResponse.data.posts || []);
            setPhotos(contentResponse.data.photos || []);
            setVideos(contentResponse.data.videos || []);
        }
        getContent();

    }, []);
    let videoContainerWidth;
    if (winSize === 1) {
        videoContainerWidth = '95%'
    }
    if (winSize === 2) {
        videoContainerWidth = 500
    }
    if (winSize >= 3) {
        videoContainerWidth = 700
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
    return (
        <div style={{ height: '100%', width: '100%', background: '#ece7e2', minHeight: '100vh', paddingBottom: 20 }}>
            <div style={{ padding: 20 }}>
                <Button labelPosition='left' icon='left chevron' content='Home' onClick={() => { history.push('/') }} />
            </div>
            <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '4em', fontFamily: 'Mulish', paddingTop: 30 }}>{capitalize(selectedCountry)}</p>
            {posts.length > 0 && <div className="photo-category-container">
                <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish' }}>Posts</p>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px' }}>
                    {posts.map(p => <div key={p.title} style={{ background: '#fff', height: '50vh', width: '28%' }}>
                        <div style={{ height: '15%', padding: 10 }}><p style={{
                            fontFamily: 'Mulish',
                            fontWeight: 600,
                            color: '#daad86',
                            textAlign: 'center',
                        }}>{p.title}</p></div>
                        <div style={{ height: '40%', background: 'blue' }}>

                        </div>
                        <span style={{ padding: 10 }}>February 10, 2021</span>
                        <div style={{ padding: 10 }}>
                            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </p>
                        </div>
                    </div>)}
                </div>
            </div>}
            {photos.length > 0 && <div className="photo-category-container">
                <Photos winSize={winSize} photos={photos} />
            </div>}
            {/* <Gallery photos={[...posts, ...posts]} renderImage={(props) => (
                <div style={{ height: 200, width: 150, background: '#fff', border: 'red 1px solid' }} />
            )} /> */}
            {videos.length > 0 && <div className="video-category-container">
                <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish', paddingTop: 30 }}>Videos</p>
                <div>
                    {videos.map(v =>
                    (<div style={{ background: '#fff',alignItems:'center', display: 'flex', flexDirection: winSize === 1 ? 'column' : 'row', borderRadius: 5, width: videoContainerWidth, margin: 'auto', color: 'rgb(0,0,0)' }}>
                        <div style={{ position: 'relative', height: '100%',width:winSize === 1 ? '100%' :'50%'  }}>
                            <div style={titleContainerStyle}><span>Title</span></div>
                            <img src={v.thumbnail} style={{ objectFit: 'cover', width: '100%', borderRadius: winSize === 1 ? '5px 5px 0 0' : '5px 0 0 5px' }} />
                        </div>
                        <div style={{ 
                            display:'flex',
                            justifyContent:'space-around',
                            flexDirection:'column',
                            padding: 10, 
                            height: winSize === 1 ? 200 : '100%',
                            width:winSize === 1 ? '100%' :'50%' 
                            }}>
                            <p>fas;lkf al;kjfsa;lkjfafa as;lkjf fas;lkf al;
                            kjfsa;lkjfafa as;lkjf fas;lkf al;kjfsa;lkjfafa as;lkjffas;lkf al;kjfsa;lkjfafa as;lkjf
                            kjfsa;lkjfafa as;lkjf fas;lkf al;kjfsa;lkjfafa as;lkjffas;lkf al;kjfsa;lkjfafa as;lkjf
                        </p>
                        </div>
                    </div>)
                    )}
                </div>
            </div>}
            {/* <StyledBackdrop onClick={(e) => { history.push('/') }} /> */}

            {/* <h1 style={{ textAlign: 'center', paddingTop: 30 }}>  {selectedCountry.slice(0, 1).toUpperCase() + selectedCountry.slice(1, selectedCountry.length)} </h1> */}

            {/* <svg  viewBox="0 0 750 750">
                    <path  d={countryShape} />
                </svg> */}

            {/* {posts.map(p => (<h5 key={p.title} >
                {p.title}
            </h5>))} */}

        </div>
    )
}

export default Country;