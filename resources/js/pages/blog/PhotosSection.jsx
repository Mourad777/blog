import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { gsap } from 'gsap/all'
import './pagination.css'
import { AppUrl } from "./utility";
import axios from 'axios'
import { useHistory } from "react-router";

export default ({ reference, photos, winSize }) => {
    console.log('photos ---------------',photos)
    // const [photo, setPhoto] = useState("");
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const perPage = 9;
    const [pageCount, setPageCount] = useState(0);
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

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };


    return (
        <div style={{ height: '100vh', background: 'rgb(218, 173, 134)', width: '100%' }} ref={reference}>
            <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#fff', textAlign: 'center', marginBottom: 0 }}>Photos</p>
            <div
                style={{
                    overflow: "hidden",
                    width: "85vw",
                    maxWidth: 700,
                    margin: "auto"
                }}
            >
                {data.map((p, i) => (
                    <div
                        key={`photo-[${i + 1}]`}
                        onClick={() => {
                            history.push(`/photo/${p.id}`)
                        }}
                        style={{
                            cursor: "pointer",
                            float: "left",
                            position: "relative",
                            width: "30%",
                            height: "30%",
                            margin: "1.66%",
                            overflow: "hidden",
                        }}
                    >
                            <img src={p.src} style={{ width: 200, height: 200, objectFit: 'cover' }} />
                     
                    </div>
                    // </Link>
                ))}
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
        </div>
    );
};
