import React, { useEffect, useState } from "react";
import Navigation from "../../../components/blog/Navbar/Navbar";
import 'semantic-ui-css/semantic.min.css'
import "./Home.module.css";
import WorldMap from "../Countries/WorldMap";
import Loader from "./Loader";
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import axios from 'axios'
import { animate } from './gsapAnimations'
import PhotosSection from "../Photos/PhotosSection";
import VideosSection from "../Videos/VideosSection";
import { AppUrl, } from "../utility";
import {
    StyledMap,
    StyledMapOverlay,
    StyledHeroSection,
    StyledContactSection,
} from '../StyledComponents'
import MapPath from "./MapPath";
import ContactForm from "../Contact/ContactForm";
import { useRef } from "react";
import LatestPostsSection from "../Posts/Posts";
import HeroSectionContent from "./HeroSectionContent";
import { Fragment } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const Home = ({ scrollWidth,winSize }) => {

    const refSection1 = useRef(null)
    const refSection2 = useRef(null)
    const refSection3 = useRef(null)
    const refSection4 = useRef(null)
    const refSection5 = useRef(null)
    const refSection6 = useRef(null)
    const refSectionX = useRef(null)
    const heroPicMainRef = useRef(null);

    const [isAssetLoaded, setIsAssetLoaded] = useState(false);
    const [postsFromDB, setPostsFromDB] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        //function that inserts placeholders in the posts array when necessary
        //for example if there are no posts
        const getPosts = async () => {
            const postsResponse = await axios.get(`${AppUrl}api/posts`);
            console.log('postsResponse', postsResponse)
            const retrievedPosts = postsResponse.data;
            if (retrievedPosts.length > 0) {
                setPostsFromDB(retrievedPosts)
            }
        }
        getPosts()

        //fetch photos
        const getPhotos = async () => {
            const fetchPhotosUrl = `${AppUrl}api/photos`;
            const resFetchPhotos = await axios.get(fetchPhotosUrl);
            console.log('Fetch photos response', resFetchPhotos);

            const fetchConfigUrl = `${AppUrl}api/configurations`;
            const resFetchConfigurations = await axios.get(fetchConfigUrl);
            console.log('Fetch config response', resFetchConfigurations);
            const formattedPhotos = resFetchPhotos.data.map(item => {
                return {
                    ...item,
                    src: item.src,
                    id: item.id,
                }
            });

            if (resFetchConfigurations.data !== 'no_config') {
                const order = JSON.parse(resFetchConfigurations.data.photo_gallery_order);
                console.log('saved order: ', order);
                const orderedFormattedPhotos = [];
                order.forEach(number => {
                    formattedPhotos.forEach(photo => {
                        if (photo.id === number) {
                            orderedFormattedPhotos.push(photo);
                        }
                    })
                });

                setPhotos(orderedFormattedPhotos)
            } else {
                console.log('default order')
                setPhotos(formattedPhotos)
            }
        }
        getPhotos()

        //fetch videos
        const getVideos = async () => {
            const fetchVideosUrl = `${AppUrl}api/videos`;
            const resFetchVideos = await axios.get(fetchVideosUrl);
            console.log('Fetch videos response', resFetchVideos);

            const fetchConfigUrl = `${AppUrl}api/configurations`;
            const resFetchConfigurations = await axios.get(fetchConfigUrl);
            console.log('Fetch config response', resFetchConfigurations);
            const formattedVideos = resFetchVideos.data.map(item => {
                return {
                    ...item,
                    src: item.src,
                    id: item.id,
                    thumbnail: item.thumbnail,

                }
            });

            console.log('formattedVideos', formattedVideos)
            if (resFetchConfigurations.data !== 'no_config') {
                const order = JSON.parse(resFetchConfigurations.data.video_gallery_order);
                console.log('saved order: ', order);
                const orderedFormattedVideos = [];
                order.forEach(number => {
                    formattedVideos.forEach(video => {
                        if (video.id === number) {
                            orderedFormattedVideos.push(video);
                        }
                    })
                });
                console.log('orderedFormattedVideos', orderedFormattedVideos);
                setVideos(orderedFormattedVideos)
            } else {
                console.log('default order')
                setVideos(formattedVideos)
            }



        }
        getVideos()
    }, [])

    useEffect(() => {
        const triggers = ScrollTrigger.getAll();
        triggers.forEach(tr => {
            tr.kill()
        });
        if (isAssetLoaded) {
            const sections = [refSection2, refSection3, refSection4, refSection5, refSection6, refSectionX].filter(i => i);
            sections.forEach((pan, i) => {
                if (!pan) return;

                ScrollTrigger.create({
                    trigger: pan.current,
                    start: "top top",
                    // end:() => "+=" + (panelsContainer.offsetHeight - innerHeight),
                    // endTrigger:panel,
                    scrub: 0.5,
                    snap: true,
                    // markers: true,
                    pin: false,
                });

            });

            animate()
        }
    }, [refSection2, refSection3, refSection4, refSection5, refSection6, refSectionX, isAssetLoaded])

    const assetLoadedHandler = () => {
        setIsAssetLoaded(true);
    };

    useEffect(() => {
        //function that determines when heavy images are loaded
        const src = $(heroPicMainRef.current).css("background-image");
        if (src) {
            const url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, "");
            const img = new Image();
            img.onload = function () {
                assetLoadedHandler();
            };
            img.src = url;
            if (img.complete) img.onload();
        }
        //function to listen to viewport width changes
        // addEventListener("resize", getWindowSize, { passive: true });
    }, [postsFromDB])


    return (
        <Fragment>

            <div id="main" style={{ overflow: 'hidden' }}>

                <Loader isAssetLoaded={isAssetLoaded} />
                {winSize > 1 && (
                    <Navigation
                        isPosts={postsFromDB.length > 0}
                        componentReferences={
                            {
                                welcome: refSection1,
                                posts: refSection2,
                                destinations: refSection3,
                                photos: refSection4,
                                videos: refSection5,
                                contact: refSection6
                            }
                        }
                    />
                )}


                {/* must use a lower resolution map for mobile devices */}
                <StyledMap windowWidth={winSize} />

                <StyledMapOverlay id="map-overlay" windowWidth={winSize} />

                {/* path drawing on world map svg */}
                 <MapPath winSize={winSize} />

                <div id="container" style={{ position: "relative" }}>
                    <StyledHeroSection ref={refSection1} id="hero-section" >
                        <HeroSectionContent heroPicMainRef={heroPicMainRef} winSize={winSize} isAssetLoaded={isAssetLoaded} />
                    </StyledHeroSection>
                    {/* the spacer section is so that gsap will snap to latest post section if the top part of that section is in view port */}
                    <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }} ref={refSectionX} />
                    <LatestPostsSection reference={refSection2} postsFromDB={postsFromDB} winSize={winSize} />

                    <WorldMap reference={refSection3} postsFromDB={postsFromDB} videos={videos} photos={photos} winSize={winSize} />
                    {/* <Country reference={refSectionDestination} postsFromDB={postsFromDB} /> */}

                    <PhotosSection photos={photos} reference={refSection4} winSize={winSize} scrollWidth={scrollWidth} />
                    {/* <PhotosSectionDetail reference={refSectionPhotos}/> */}

                    <VideosSection videos={videos} reference={refSection5} winSize={winSize} />
                    {/* <VideosSectionDetail reference={refSectionVideos}/> */}

                    <StyledContactSection ref={refSection6} id="contact-section">
                        <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#fff', textAlign: 'center' }}>Get In Touch</p>
                        <ContactForm />
                    </StyledContactSection>
                </div>

                {/* floating rotating icons */}
                {/* {[
                { style: getCompassStyle(winSize), path: compass },
                { style: getPlaneStyle(winSize), path: airplane },
                { style: getFeetStyle(winSize), path: footPrints }
            ].map((icon, i) => (
                    <svg
                        className="rotating-icon"
                        style={icon.style}
                        viewBox="0 0 50 50"
                        key={`[icon]${i}`}
                    >
                        <g>
                            <path d={icon.path} id={`'${icon.path}'`} />
                        </g>
                    </svg>
            ))} */}

            </div>
        </Fragment>

    );
};

export default Home;
