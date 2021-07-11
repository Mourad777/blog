import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from 'react-paginate';
import { gsap } from 'gsap/all'
import '../global-styles.css/pagination.css'
import { AppUrl } from "../utility";
import axios from 'axios'
import { useHistory } from "react-router";
import Gallery from "react-photo-gallery";
export default ({ reference, photos, winSize,scrollWidth }) => {
    console.log('photos ---------------', photos)
    // const [photo, setPhoto] = useState("");
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const perPage = 9;
    const [pageCount, setPageCount] = useState(0);
    const [gridWidth, setGridWidth] = useState(0);
    const history = useHistory();
    const getData = async () => {
        const slice = photos.slice(offset === 1 || offset === 0 ? 0 : offset * perPage - perPage, offset === 0 ? perPage : offset * perPage);
        console.log('slice', slice)
        setData(slice)
        console.log('photos.length / perPage)', photos.length / perPage)
        setPageCount(Math.ceil(photos.length / perPage))
    }

    useEffect(() => {
        getData()
    }, [offset, photos]);

    useEffect(() => {
        getData()
    }, [winSize])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    const gridContainerReference = useRef(null);
    useEffect(() => {
        console.log('gridContainerReference', gridContainerReference);
        setGridWidth(gridContainerReference.current.scrollWidth);
    }, [gridContainerReference,scrollWidth]);
    
    return (
        <div style={{ height: '100vh', background: 'rgb(218, 173, 134)', width: '100%',overflow:'hidden' }} ref={reference}>
            <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#fff', textAlign: 'center', marginBottom: 0 }}>Photos</p>
            <div
                style={{
                    overflow: "hidden",
                    maxWidth: 650,
                    margin: "auto",
                    width:winSize === 1 ? '100%' : '70%'
                }}
            >

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(100px, 293px))',
                    justifyContent: 'center',
                    gridGap: 3,

                }}
                    ref={gridContainerReference}
                >
                    {data.map((p, i) => (
                        <div
                        key={`photo-grid-item[${i+1}]`}
                        onClick={()=>history.push(`/photo/${p.id}`)}
                        style={{
                            position: 'relative',
                            display: 'block',
                            height: !!gridWidth ? (gridWidth - 6) / 3 : '',
                            cursor:'pointer'

                        }}>
                            <figure style={{ margin: 0, height: '100%' }}>
                                <img style={{
                                    width: '100%',
                                    height: '100%',
                                    verticalAlign: 'top',
                                    objectFit: 'cover'
                                }} src={p.src} alt="" />
                            </figure>
                        </div>

                        // <div
                        //     key={`photo-[${i + 1}]`}
                        //     onClick={() => {
                        //         history.push(`/photo/${p.id}`)
                        //     }}
                        //     style={{
                        //         cursor: "pointer",
                        //         float: "left",
                        //         position: "relative",
                        //         width: winSize === 1 ? 110: "30%",
                        //         height: winSize === 1 ? 110: "30%",
                        //         margin: "1.66%",
                        //         overflow: "hidden",
                        //     }}
                        // >
                        //     <img src={p.src} style={{ width: winSize === 1 ? 150 : 200, height: winSize === 1 ? 150 : 200, objectFit: 'cover' }} />

                        // </div>
                        // </Link>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <ReactPaginate
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
                    activeClassName={"active"} />
            </div>
        </div >
    );
};
