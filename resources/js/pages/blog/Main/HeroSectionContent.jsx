import React, { Fragment } from 'react'
import ScrollDownArrow from '../../../components/blog/ScrollDownArrow/ScrollDownArrow';
import { heroTextPathOne } from '../svgs';
import {
    getHeroSectionPicPiecesStyle,
    getHeroSectionPicStyle,
    getHeroSectionNameStyle,
    getHeroSectionTextStyle,
    getSearchInputStyle,
    getHeroSectionButtonOneStyle,
    getHeroSectionButtonTwoStyle
} from "../utility";
import Search from './SearchResults';
import { gsap } from 'gsap/all'

const HeroSectionContent = ({
    winSize,
    heroPicMainRef,
    isAssetLoaded,
    photos,
    videos,
    posts,
    height,
    countryThumbnails,
    refPosts,
    refVideos,
    isLargeMobileLandscape
}) => {

    const handleScroll = (ref) => {
        gsap.to(window, { duration: 3, scrollTo: ref.current });
    }

    return (
        <Fragment>

            <Search photos={photos} videos={videos} posts={posts} winSize={winSize} countryThumbnails={countryThumbnails} />

            <div id="hero-pic-main" ref={heroPicMainRef} style={{ ...getHeroSectionPicStyle(winSize, height), position: 'fixed' }} />
            {["One", "Two", "One"].map((piece, i) => (
                <div
                    className={`HeroPicPiece${piece}`}
                    key={`[Heropic]${i}`}
                    style={getHeroSectionPicPiecesStyle(winSize, i + 1, height)}
                />
            ))}

            <svg
                style={{
                    ...getHeroSectionNameStyle(winSize, height),
                    opacity: (winSize === 1 && height < 480) || (isLargeMobileLandscape && height < 250) ? 0 : 1, transition: 'opacity 0.3s ease-in'
                }}
                className={isAssetLoaded ? "HeroTextAnimationOne" : ""}
                viewBox="0 0 120 50"
                id="heroTextMainPath"
            >
                <g>
                    <path d={heroTextPathOne} />
                </g>
            </svg>

            <div style={{
                ...getHeroSectionTextStyle(winSize, height),
                opacity: (winSize === 1 && height < 430) || (isLargeMobileLandscape && height < 200) ? 0 : 1, transition: 'opacity 0.3s ease-in'
            }} >
                <p id="heroTextSecondary" style={{
                    fontFamily: 'Mulish,sans-serif',
                    borderRadius: 5,
                    padding: 10,
                    background: isLargeMobileLandscape ? 'rgb(123,123,123,0.2)' : '',
                }} >
                    I'm Mourad - Adventure travel photographer,
                    videographer, blogger, and digital nomad. Join me as
                    I share wild stories, beautiful images, and useful
                    travel tips with you from around the world!
                </p>
            </div>
            <button onClick={() => handleScroll(refPosts)} id="hero-button-1" className="hero-button" style={{
                ...getHeroSectionButtonOneStyle(winSize, height),
                opacity: (winSize === 1 && height < 480) || (isLargeMobileLandscape && height < 250) ? 0 : 1, transition: 'opacity 0.3s ease-in'

                // background:'blue'

            }}>Read my Blog</button>
            <button onClick={() => handleScroll(refVideos)} id="hero-button-2" className="hero-button" style={{
                ...getHeroSectionButtonTwoStyle(winSize, height),
                opacity: (winSize === 1 && height < 480) || (isLargeMobileLandscape && height < 250) ? 0 : 1, transition: 'opacity 0.3s ease-in'


            }}>Watch my Videos</button>

            <div className="scroll-down-arrow" style={{ position: 'absolute', bottom: 100, left: '5%', height: 70 }}>
                <ScrollDownArrow />
            </div>
            <div className="scroll-down-arrow" style={{ position: 'absolute', bottom: 100, right: '5%', height: 70 }}>
                <ScrollDownArrow />
            </div>
        </Fragment>
    )
}

export default HeroSectionContent;