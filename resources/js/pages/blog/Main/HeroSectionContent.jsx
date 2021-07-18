import React, { Fragment, useState } from 'react'
import ScrollDownArrow from '../../../components/blog/ScrollDownArrow/ScrollDownArrow';
import SearchInput from '../../../components/blog/SearchInput/SearchInput';
import { heroTextPathOne } from '../svgs';
import countryCodes from '../Countries/country-codes.json'
import {
    getHeroSectionPicPiecesStyle,
    getHeroSectionPicStyle,
    getHeroSectionNameStyle,
    getHeroSectionTextStyle,
    getSearchInputStyle,
} from "../utility";
import Search from './SearchResults';
const HeroSectionContent = ({
    winSize,
    heroPicMainRef,
    isAssetLoaded,
    photos,
    videos,
    posts,
    categories,
    tags
}) => {

    return (
        <Fragment>

            <Search photos={photos} videos={videos} posts={posts} winSize={winSize} />

            <div id="hero-pic-main" ref={heroPicMainRef} style={{ ...getHeroSectionPicStyle(winSize), position: 'fixed' }} />
            {["One", "Two", "One"].map((piece, i) => (
                <div
                    className={`HeroPicPiece${piece}`}
                    key={`[Heropic]${i}`}
                    style={getHeroSectionPicPiecesStyle(winSize, i + 1)}
                />
            ))}

            <svg
                style={getHeroSectionNameStyle(winSize)}
                className={isAssetLoaded ? "HeroTextAnimationOne" : ""}
                viewBox="0 0 400 50"
                id="heroTextMainPath"
            >
                <g>
                    <path d={heroTextPathOne} />
                </g>
            </svg>

            <div style={getHeroSectionTextStyle(winSize, isAssetLoaded)} >
                <p id="heroTextSecondary" style={{ fontFamily: 'Mulish,sans-serif' }} >
                    I'm Mourad - Adventure travel photographer,
                    videographer, blogger, and digital nomad. Join me as
                    I share wild stories, beautiful images, and useful
                    travel tips with you from around the world!
                </p>
            </div>
        </Fragment>
    )
}

export default HeroSectionContent;