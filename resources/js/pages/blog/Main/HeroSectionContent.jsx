import React, { Fragment } from 'react'
import SearchInput from '../../../components/blog/SearchInput/SearchInput';
import { heroTextPathOne } from '../svgs';
import {
    getHeroSectionPicPiecesStyle,
    getHeroSectionPicStyle,
    getHeroSectionNameStyle,
    getHeroSectionTextStyle,
} from "../utility";
const HeroSectionContent = ({ winSize, heroPicMainRef, isAssetLoaded }) => {
    return (
        <Fragment>
            <div
                style={{
                    margin: 'auto',
                    bottom: 85,
                    transform: 'translateX(-50%)',
                    left: '50%',
                    position:'absolute'
                }}
            >
                <SearchInput />
            </div>

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
                <p id="heroTextSecondary" >
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