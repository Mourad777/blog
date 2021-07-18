import React, { Fragment, useEffect, useState } from 'react'
import { StyledLatestPostsTopLayer, StyledPostRow, StyledLatestPostsInnerWrapper, StyledLatestPostsOuterWrapper, StyledSeeAllPostsText } from '../StyledComponents'
import OuterColumn from "./OuterColumns";
import RowLayout from './RowLayout';
import ReactPaginate from 'react-paginate';
import { Link } from "react-scroll";
import { gsap } from 'gsap/all';

const LatestPosts = ({ winSize, postsFromDB, setSelectedSection, selectedSection, setPhoto, reference }) => {

    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [posts, setPosts] = useState([]);

    const placeHolderPosts = [
        {
            _id: posts.length + 1,
            title: "",
            image: "",
            content: "",
            country: '',
        },
        {
            _id: posts.length + 2,
            title: "",
            image: "",
            content: "",
            country: '',
        },
        {
            _id: posts.length + 3,
            title: "",
            image: "",
            content: "",
            country: '',
        }
    ]


    useEffect(() => {
        if (winSize > 1) {
            setOffset(1)
        }
    }, [winSize])

    useEffect(() => {
        getData()
    }, [offset, winSize, postsFromDB]);

    const getPostsPerPage = (winSize) => {
        let postsPerPage = 2;
        if (winSize === 1) postsPerPage = 1;
        return postsPerPage
    }

    const getData = async () => {

        const perPage = getPostsPerPage(winSize);
        setPageCount(Math.ceil((postsFromDB || []).length / perPage))
        const slice = (postsFromDB || []).slice(offset === 1 || offset === 0 ? 0 : offset * perPage - perPage, offset === 0 ? perPage : offset * perPage);
        if (slice.length === 1) {
            setPosts([...slice, placeHolderPosts[0]]);
            return;
        }

        setPosts(slice)

    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    return (<div ref={reference} style={{ height: '100vh', overflow: 'hidden', zIndex: 6 }}>

        <StyledLatestPostsTopLayer >
            <p style={{ fontFamily: 'Mulish,sans-serif', fontSize: '4em', color: '#fff', textAlign: 'center' }}>Posts</p>
            {/* <Link
                    activeClass="activeLink"
                    to="posts-section"
                    spy={true}
                    smooth={true}
                    duration={2000}
                > */}
            {/* <StyledSeeAllPostsText 
                    onClick={() => {
                        // if (selectedSection === 'posts') return;
                        setSelectedSection('posts');
                        gsap.to(window,{duration:1, scrollTo:refB.current});
                    }}
                    >See all posts</StyledSeeAllPostsText> */}
            {/* </Link> */}
            {/* <p style={{fontFamily: 'Mulish', fontSize: '1em', color: '#fff', textAlign: 'center',position:'absolute'}}>See all posts</p> */}
        </StyledLatestPostsTopLayer>
        <div style={{
            display: 'flex', background: '#DAAD86',
            height:
                // 'calc(100vh - 760px)'
                '100%',
            maxHeight: winSize === 1 && postsFromDB.length === 0 ? '100%' : 50,
        }}>
            {postsFromDB.length > 1 && <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />}
        </div>
        <StyledLatestPostsOuterWrapper >
            {winSize > 1 && <OuterColumn isLeft />}
            <StyledLatestPostsInnerWrapper >
                {posts.map((post, index) => (
                    <StyledPostRow key={`post[${post._id}]index[${index}]`} className="row" index={index} winSize={winSize} >

                        <RowLayout winSize={winSize} post={post} index={index} />

                    </StyledPostRow>
                ))}
                <div style={{ background: '#daad86', height: '100%' }} />
            </StyledLatestPostsInnerWrapper>
            {winSize > 1 && <OuterColumn />}
        </StyledLatestPostsOuterWrapper>




        <div style={{
            background: '#DAAD86',
            // height: '100%'
        }}>
        </div>
    </div>)
}

export default LatestPosts;