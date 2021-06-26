import React, { useEffect, useState } from "react";
import Navigation from "../../components/blog/Navbar/Navbar";
import 'semantic-ui-css/semantic.min.css'
import "./Home.module.css";
import WorldMap from "../../components/blog/Home/WorldMap/WorldMap";
import Loader from "./Loader";
import { Switch, Route, useParams } from "react-router-dom";
import { gsap, ScrollTrigger, TweenMax, ScrollToPlugin } from 'gsap/all'
import axios from 'axios'
import { animate } from './gsapAnimations'
import PhotosSection from "./PhotosSection";
import VideosSection from "./VideosSection";

import DestinationSection from "./Destination";
import PhotosSectionDetail from "./Photo";
import VideosSectionDetail from "./Videos";
import {
    getWindowSizeInteger,
    AppUrl,
} from "./utility";
import {
    heroTextPathOne,
    latestPostsPath,
    airplane,
    passport,
    compass,
    running,
    cableCar,
    map,
    navigation,
    pencilCompass,
    footPrints,
    piggyBank,
    contactTitle
} from "./svgs";

import {
    StyledMap,
    StyledHorizontalScrollOuterContainer,
    StyledMapOverlay,
    StyledHeroSection,
    StyledLatestPostsSection,
    StyledDestinationsSection,
    StyledContactTitle,
    StyledContactSection,
    StyledLatestPostsTitle,
    StyledSpacerSectionOne,
} from './StyledComponents'
import MapPath from "./MapPath";
import ContactForm from "./ContactForm";
import Post from "./Post";
import Country from "./Country";
import { useRef } from "react";
import LatestPostsSection from "./LatestsPosts";
import PostsSection from "./Posts"
import HorizontalScrollSection from "./HorizontalScroll";
import HeroSectionContent from "./HeroSectionContent";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const Home = ({ }) => {

    const refSection1 = useRef(null)
    const refSection2 = useRef(null)
    const refSection3 = useRef(null)
    const refSection4 = useRef(null)
    const refSection5 = useRef(null)
    const refSection6 = useRef(null)
    const refSectionX = useRef(null)
    const panelsContainer = useRef(null)
    const refSectionPosts = useRef(null)
    const refSectionDestination = useRef(null)
    const refSectionPhotos = useRef(null)
    const refSectionVideos = useRef(null)

    const refSpacerOne = useRef(null)

    const panelOneHRef = useRef(null)
    const panelTwoHRef = useRef(null)
    const horizontalScrollContainerRef = useRef(null)

    const heroPicMainRef = useRef(null);

    const [isAssetLoaded, setIsAssetLoaded] = useState(false);
    const [postsFromDB, setPostsFromDB] = useState([]);
    const [selectedSection, setSelectedSection] = useState('');

    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [containerWidth, setContainerWidth] = useState(innerWidth * 2)


    const params = useParams();

    useEffect(() => {
        console.log('params... changed ----------------------', params)
        if (params.postId) {
            setSelectedPost(params.postId)
            setSelectedSection('posts')
        }
        else if (params.country) {
            setSelectedDestination(params.country)
            setSelectedSection('destination')
        }
        else if (params.photoId) {
            setSelectedPhoto(params.photoId)
            setSelectedSection('photos')
        }
        else if (params.videoId) {
            setSelectedVideo(params.videoId)
            setSelectedSection('videos')
        } else {
            setSelectedSection('')
            setSelectedPost(null)
            setSelectedDestination(null)
            setSelectedPhoto(null)
            setSelectedVideo(null)
        }
    }, [params])


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
    }, [])

    useEffect(() => {

        const sections = [refSection2, refSection3, refSection4, refSection5, refSection6, refSectionX].filter(i => i);

        sections.forEach((pan, i) => {
            if (!pan) return;
            ScrollTrigger.create({
                trigger: pan.current,
                start: "top top",
                // end:() => "+=" + (panelsContainer.offsetHeight - innerHeight),
                // endTrigger:panel,
                snap: true,
                markers: true,
            });

        });

        animate()

    }, [refSection2, refSection3, refSection4, refSection5, refSection6, refSectionX])

    const [winSize, setWinSize] = useState(
        getWindowSizeInteger(window.innerWidth)
    );

    const assetLoadedHandler = () => {
        setIsAssetLoaded(true);
    };

    const getWindowSize = () => {
        const windowSizeInt = getWindowSizeInteger(window.innerWidth);
        setWinSize(windowSizeInt);
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
        addEventListener("resize", getWindowSize, { passive: true });
    }, [postsFromDB])


    return (

        <div id="main" style={{ overflow: 'hidden' }}>
            <Loader isAssetLoaded={isAssetLoaded} />
            {winSize > 1 && (
                <Navigation
                    selectedSection={selectedSection}
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
            {winSize > 1 && (<MapPath winSize={winSize} />)}

            <div id="container" style={{ position: "relative" }}>
                <StyledHeroSection ref={refSection1} id="hero-section" >
                    <HeroSectionContent heroPicMainRef={heroPicMainRef} winSize={winSize} isAssetLoaded={isAssetLoaded} />
                </StyledHeroSection>
                {/* the spacer section is so that gsap will snap to latest post section if the top part of that section is in view port */}
                <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }} ref={refSectionX} />
                <LatestPostsSection reference={refSection2} postsFromDB={postsFromDB} winSize={winSize} />

                <WorldMap reference={refSection3} postsFromDB={postsFromDB} winSize={winSize} />
                {/* <Country reference={refSectionDestination} postsFromDB={postsFromDB} /> */}

                <PhotosSection reference={refSection4} winSize={winSize} />
                {/* <PhotosSectionDetail reference={refSectionPhotos}/> */}

                <VideosSection reference={refSection5} winSize={winSize} />
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

    );
};

export default Home;
