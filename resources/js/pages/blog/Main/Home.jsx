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
import { AppUrl, getMapPosition } from "../utility";
import {
    StyledMap,
    StyledMapOverlay,
    StyledHeroSection,
    StyledContactSection,
} from '../StyledComponents'
import MapPath from "./MapPath";
import ContactForm from "../Contact/ContactSection";
import { useRef } from "react";
import PostsSection from "../Posts/Posts";
import HeroSectionContent from "./HeroSectionContent";
import { Fragment } from "react";
import _ from "lodash";
import VideoIcon from '../../../../../public/assets/video-icon.jpg'
import { useHistory } from "react-router-dom";
import mapLowRes from '../../../../../public/assets/map-notepad-desk-md.jpg'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
// gsap.ticker.fps(30)
// gsap.ticker.lagSmoothing(50,50)
// gsap.ticker.deltaRatio(30)
const Home = ({ scrollWidth, winSize }) => {

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
    const [scrollPosition, setScrollPostion] = useState(0);

    const handleScrollPosition = (value) => {
        setScrollPostion(value)
    }
    const history = useHistory()
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

            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////

            // the animation to use
            const tlPath = gsap.timeline({ paused: true });
            const tlHeroPicOne = gsap.timeline({ paused: true });
            const tlHeroPicOneEnd = gsap.timeline({ paused: true });
            // const tlHeroPicTwo = gsap.timeline({ paused: true });
            // const tlHeroPicThree = gsap.timeline({ paused: true });

            tlPath.to("#myline", { strokeDashoffset: 2850 });
            tlHeroPicOne.to("#hero-pic-1", { scale: 1, rotate: '10deg', opacity: 1 });
            // tlHeroPicOneEnd.to("#hero-pic-1", { scale: 0, rotate: '0deg', opacity: 0, });
            // tlHeroPicTwo.to("#hero-pic-1", { opacity: 1 });
            // tlHeroPicOne.to("#hero-pic-1", { opacity: 1 });

            let requestId;
            // The start and end positions in terms of the page scroll
            // const startY = innerHeight / 10;
            const startY = 0;
            // const finishDistance = innerHeight / 5;
            const finishDistancePath = innerHeight * 2;
            const finishDistanceHeroPicOne = 200;
            // const finishDistanceHeroBackgroundPiece = innerHeight / 2;
            // Listen to the scroll event
            // _.throttle()
            document.addEventListener("scroll", _.throttle(function () {
                // Prevent the update from happening too often (throttle the scroll event)
                if (!requestId) {
                    requestId = requestAnimationFrame(update);
                }
            }, 500, {}));

            update();

            function update() {
                // Update our animation
                tlPath.progress((scrollY - startY) / finishDistancePath);
                // tlHeroPicOne.progress((scrollY - startY) / finishDistanceHeroPicOne);
                handleScrollPosition(scrollY)
                tlHeroPicOneEnd.progress((scrollY - startY) / finishDistanceHeroPicOne);


                // tlHeroBackgroundPieceOne.progress((scrollY - startY) / finishDistanceHeroBackgroundPiece);
                // tlHeroBackgroundPieceTwo.progress((scrollY - startY) / finishDistanceHeroBackgroundPiece);
                // Let the scroll event fire again
                requestId = null;
            }

            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////

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

    const transformStyles1 = scrollPosition >= 200 && scrollPosition < 1000 ? {
        opacity: 1,
        scale: 1,
        transform: 'rotate(-15deg) scale(1)',
    } : {};


    const transformStyles2 = scrollPosition >= 300 && scrollPosition < 1000 ? {
        opacity: 1,
        scale: 1,
        transform: 'rotate(20deg) scale(1)',
    } : {};


    const transformStyles3 = scrollPosition >= 500 && scrollPosition < 1000 ? {
        opacity: 1,
        scale: 1,
        transform: 'rotate(-10deg) scale(1)',
    } : {};

    return (
        <Fragment>

            <div id="main" style={{ overflow: 'hidden' }}>

                <Loader isAssetLoaded={isAssetLoaded} />
                {winSize > 1 && (
                    <Navigation
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
                <div id="map-pics-container" style={{ zIndex: 5, position: 'fixed',height:'100vh',width:'100%'}}>

                        <div id="hero-pic-1" style={{
                            position: 'absolute',
                            top: '42%',
                            left: '32%',
                            transform: 'translateX(-50%) translateY(-50%)',
                            // top: winSize === 1 ? 270 : 300,
                            // left: winSize === 1 ? 15 : 100,
                            height: 100,
                            width: 100,
                            cursor: 'pointer',
                            border: '5px solid #e7c5a2',
                            zIndex: 4,
                            transition: '0.3s all ease-in',
                            opacity: 0,
                            scale: 0,
                            transform: 'rotate(0) scale(0)',
                            ...transformStyles1,

                        }}
                            onClick={() => history.push(`/photo/${(photos[0] || {}).id}`)}
                        >
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={(photos[0] || {}).src} />
                        </div>
                        <div id="hero-pic-2" style={{
                            position: 'absolute',
                            top: '62%',
                            left:winSize <= 2 ? '7%' : '35%',
                            height: 100,
                            width: 100,
                            cursor: 'pointer',
                            border: '5px solid #e7c5a2',
                            zIndex: 4,
                            transition: '0.3s all ease-in',
                            opacity: 0,
                            scale: 0,
                            transform: 'rotate(0) scale(0)',
                            ...transformStyles2,
                        }}
                            onClick={() => history.push(`/photo/${(photos[1] || {}).id}`)}

                        >
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={(photos[1] || {}).src} />
                        </div>
                        <div id="hero-pic-3" style={{
                            position: 'absolute',
                            top: '58%',
                            left: '50%',
                            height: 100,
                            width: 100,
                            cursor: 'pointer',
                            border: '5px solid #e7c5a2',
                            zIndex: 4,
                            transition: '0.3s all ease-in',
                            opacity: 0,
                            scale: 0,
                            transform: 'rotate(0) scale(0)',
                            ...transformStyles3,
                        }}
                            onClick={() => history.push(`/photo/${(photos[2] || {}).id}`)}
                        >
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={(photos[2] || {}).src} />
                        </div>
            

                </div>


                <div id="container" style={{ position: "relative" }}>
                    <div id="map-container" style={{ position: 'fixed', height: '100%', width: '100%', top: getMapPosition(winSize).top, zIndex: -1 }}>
                        <div style={{ position: 'relative', height: '100vh' }}>
                            <StyledMap windowWidth={winSize} width={getMapPosition(winSize).width} lowRes src={mapLowRes} />

                            {/* path drawing on world map svg */}
                            <MapPath winSize={winSize} />

                        </div>
                    </div>

                    <StyledHeroSection ref={refSection1} id="hero-section">
                        <HeroSectionContent posts={postsFromDB} photos={photos} videos={videos} tags={[]} categories={[]} heroPicMainRef={heroPicMainRef} winSize={winSize} isAssetLoaded={isAssetLoaded} />
                    </StyledHeroSection>
                    {/* the spacer section is so that gsap will snap to latest post section if the top part of that section is in view port */}
                    <div id="spacer" style={{ overflow: 'hidden', width: '100%', height: '100vh', zIndex: -10 }} ref={refSectionX} />
                    <PostsSection reference={refSection2} postsFromDB={postsFromDB} winSize={winSize} />

                    <WorldMap reference={refSection3} postsFromDB={postsFromDB} videos={videos} photos={photos} winSize={winSize} />
                    {/* <Country reference={refSectionDestination} postsFromDB={postsFromDB} /> */}

                    <PhotosSection photos={photos} reference={refSection4} winSize={winSize} scrollWidth={scrollWidth} />
                    {/* <PhotosSectionDetail reference={refSectionPhotos}/> */}

                    <VideosSection videos={videos} reference={refSection5} winSize={winSize} />
                    {/* <VideosSectionDetail reference={refSectionVideos}/> */}

                    <StyledContactSection ref={refSection6} id="contact-section">
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
