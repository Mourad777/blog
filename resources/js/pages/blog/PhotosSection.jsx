import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { gsap } from 'gsap/all'
import './pagination.css'

const loremPhotos = [
    "https://loremflickr.com/320/240/dog",
    "https://loremflickr.com/g/320/240/paris",
    "https://loremflickr.com/320/240/brazil,rio",
    "https://loremflickr.com/320/240?random=1",
    "https://loremflickr.com/320/240?random=2",
    "https://loremflickr.com/320/240?random=3",
    "https://loremflickr.com/320/240?random=4",
    "https://loremflickr.com/320/240?random=5",
    "https://loremflickr.com/320/240?random=6",
    "https://loremflickr.com/320/240?random=7",
    "https://loremflickr.com/320/240?random=8",
    "https://loremflickr.com/320/240?random=9",
    "https://loremflickr.com/320/240?random=10",
    "https://loremflickr.com/320/240?random=11",
    "https://loremflickr.com/320/240?random=12",
    "https://loremflickr.com/320/240?random=13",
    "https://loremflickr.com/320/240?random=14",
    "https://loremflickr.com/320/240?random=15",
    "https://loremflickr.com/320/240?random=16",
    "https://loremflickr.com/320/240?random=17",
    "https://loremflickr.com/320/240?random=18",
    "https://loremflickr.com/320/240?random=19",
    "https://loremflickr.com/320/240?random=20"
]

export default ({ winSize, setPhoto, setSelectedSection, selectedSection, reference }) => {
    // const [photo, setPhoto] = useState("");
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const perPage = 9;
    const [pageCount, setPageCount] = useState(0);
    const getData = async () => {
        const slice = loremPhotos.slice(offset === 1 || offset === 0 ? 0 : offset * perPage - perPage, offset === 0 ? perPage : offset * perPage)
        setData(slice)
        setPageCount(Math.ceil(loremPhotos.length / perPage))
    }

    useEffect(() => {
        getData()
    }, [offset])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };


    return (
        <div style={{ height: '100vh', background: 'purple', width: '100%' }} ref={reference}>
            <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#fff', textAlign: 'center', marginBottom: 0 }}>Photos</p>
            <div
                style={{
                    // padding: '50px 150px',
                    overflow: "hidden",
                    width: "85vw",
                    maxWidth: 700,
                    margin: "auto"
                }}
            >
                {data.map(p => (
                    <div
                        key={p}
                        onClick={() => {
                            setPhoto(p)
                            setSelectedSection('photos')

                            // gsap.to(window, { duration: 1, scrollTo: refB.current });


                        }}
                        style={{
                            cursor: "pointer",
                            float: "left",
                            position: "relative",
                            width: "30%",
                            paddingBottom:
                                "30%" /* = width for a 1:1 aspect ratio */,
                            margin: "1.66%",
                            overflow: "hidden",
                            background: `url('${p}')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    />
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
