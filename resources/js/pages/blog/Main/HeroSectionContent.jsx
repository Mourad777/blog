import React, { Fragment, useState } from 'react'
import ScrollDownArrow from '../../../components/blog/ScrollDownArrow/ScrollDownArrow';
import SearchInput from '../../../components/blog/SearchInput/SearchInput';
import { heroTextPathOne } from '../svgs';
import {
    getHeroSectionPicPiecesStyle,
    getHeroSectionPicStyle,
    getHeroSectionNameStyle,
    getHeroSectionTextStyle,
    getSearchInputStyle,
} from "../utility";
const HeroSectionContent = ({ winSize, heroPicMainRef, isAssetLoaded }) => {
    const [searchValue, setSearchValue] = useState('');
    const options = [{ id: 1, title: 'Couchsurfing in Mexico', summary: 'Free accomodation', content: 'A new way to travel' },
    { id: 2, title: 'Hitchhking across Honduras', summary: 'Hitching is not as dangerous as you think', content: 'A way to meet cool people' },
    ]
    const filteredResults = options.filter(item => (item.title.includes(searchValue) || item.summary.includes(searchValue) || item.content.includes(searchValue)) && !!searchValue);

    const handleSearchValue = (e) => {
        console.log('search e',e,'e.target.value',e.target.value)
        setSearchValue(e.target.value);
    }
    return (
        <Fragment>
            <div
                style={{
                    margin: 'auto',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    position: 'absolute',
                    ...getSearchInputStyle(winSize)
                }}
            >
                <SearchInput searchValue={searchValue} handleSearchValue={handleSearchValue} />
                {/* <div style={{ width: '100%', margin: 'auto' }}>
                    <div style={{ background: '#fff', borderRadius: 5, width: 300 }} >
                        {

                            filteredResults.map(res => (
                                <div key={`search-result[${res.id}]`}>
                                    <p>{res.title}</p>
                                </div>
                            ))}
                    </div>
                </div> */}
            </div>
            <div
                className="scroll-arrows"
                style={{
                    position: 'absolute',
                    bottom: winSize === 1 ? 100 : 55,
                    textAlign: 'center',
                    /* width: 100%, */
                    left: 5,

                }}
            >
                <ScrollDownArrow />
            </div>
            <div
                className="scroll-arrows"
                style={{
                    position: 'absolute',
                    bottom: winSize === 1 ? 100 : 55,
                    textAlign: 'center',
                    /* width: 100%, */
                    right: 5,

                }}
            >
                <ScrollDownArrow />
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