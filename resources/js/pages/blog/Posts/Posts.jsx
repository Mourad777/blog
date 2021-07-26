import React, { useEffect, useState } from 'react'
import { StyledLatestPostsTopLayer, StyledPostRow, StyledLatestPostsInnerWrapper, StyledLatestPostsOuterWrapper } from '../StyledComponents'
import OuterColumn from "./OuterColumns";
import RowLayout from './RowLayout';
import Paginate from '../../../components/blog/Paginate/Paginate';
import { gsap } from 'gsap/all';

const LatestPosts = ({ winSize, postsFromDB, reference }) => {

    const [pageCount, setPageCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [selectedPage, setSelectedPage] = useState(0);

    // useEffect(() => {
    //     if (winSize > 1) {
    //         setOffset(1)
    //     }
    // }, [winSize])

    // useEffect(() => {
    //     getData()
    // }, [offset, winSize, postsFromDB]);

    useEffect(() => {
        gsap.fromTo(".post-text-1", { opacity: 0.3 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".post-image-1", { opacity: 0.3 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".post-text-2", { opacity: 0.3 }, { opacity: 1, duration: 1 });
        gsap.fromTo(".post-image-2", { opacity: 0.3 }, { opacity: 1, duration: 1 });
    }, [selectedPage]);

    useEffect(() => {
        getData()
    }, [selectedPage, postsFromDB]);

    useEffect(() => {
        setSelectedPage(0)
        getData();
    }, [winSize])

    const getPostsPerPage = (winSize) => {
        let postsPerPage = 2;
        if (winSize === 1) postsPerPage = 1;
        return postsPerPage
    }

    const getData = async () => {
        const perPage = getPostsPerPage(winSize);
        setPageCount(Math.ceil((postsFromDB || []).length / perPage))
        const slice = postsFromDB.slice((selectedPage + 1) * perPage - perPage, (selectedPage + 1) * perPage);
        setPosts(slice)
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setSelectedPage(selectedPage)
    };

    return (<div ref={reference} style={{ height: '100vh', overflow: 'hidden', zIndex: 6 }}>

        <StyledLatestPostsTopLayer >
            <p style={{ fontFamily: 'Mulish,sans-serif', fontSize: '4em', color: '#fff', textAlign: 'center' }}>Posts</p>
        </StyledLatestPostsTopLayer>
        <div style={{
            display: 'flex', background: '#DAAD86',
            height:
                // 'calc(100vh - 760px)'
                '100%',
            maxHeight: winSize === 1 && postsFromDB.length === 0 ? '100%' : 50,
        }}>
            {postsFromDB.length > 1 &&
                <Paginate totalPages={pageCount} page={selectedPage} handlePageClick={handlePageClick} />}
        </div>
        <StyledLatestPostsOuterWrapper >
            {winSize > 1 && <OuterColumn isLeft />}
            <StyledLatestPostsInnerWrapper >

                {posts.map((post, index) => (
                    <StyledPostRow key={`post[${post._id}]index[${index}]`} className="row" index={index} winSize={winSize} >

                        <RowLayout offset={selectedPage} winSize={winSize} post={post} index={index} />

                    </StyledPostRow>
                ))}

                <div style={{ background: '#daad86', height: '100%' }} />
            </StyledLatestPostsInnerWrapper>
            {winSize > 1 && <OuterColumn />}
        </StyledLatestPostsOuterWrapper>

        <div style={{
            background: '#DAAD86',
        }}>
        </div>
    </div>)
}

export default LatestPosts;