import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VideoIcon from '../../../../public/assets/video-icon.jpg'
import ReactPaginate from 'react-paginate';


export default ({ reference, videos }) => {
    const history = useHistory();
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const perPage = 3;
    const getData = async () => {
        const slice = videos.slice(offset === 1 || offset === 0 ? 0 : offset * perPage - perPage, offset === 0 ? perPage : offset * perPage);
        console.log('slice', slice)
        setData(slice)
        console.log('videos.length / perPage)', videos.length / perPage)
        setPageCount(Math.ceil(videos.length / perPage))
    }

    useEffect(() => {
        getData()
    }, [offset, videos]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
    return (
        <div style={{ padding: 50, height: '100vh', background: 'rgb(236, 231, 226)', width: '100%' }} ref={reference}>
            <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#daad86', textAlign: 'center' }}>Videos</p>
            {/* <div className="row" style={{ justifyContent: 'center' }}>
                {data.map((video, i) => (
                    <div key={`video[${video.id}]`} className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div
                            onClick={() => history.push(`/video/${video.id}`)}
                            style={{
                                border: "3px solid white",
                                height: 200,
                                background: `url('${video.thumbnail || VideoIcon}')`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                ))}
            </div> */}
            <div
                style={{
                    overflow: "hidden",
                    width: "85vw",
                    maxWidth: 700,
                    margin: "auto"
                }}
            >
                {data.map((video, i) => (
                    <div
                        key={`video-[${i + 1}]`}
                        onClick={() => {
                            history.push(`/video/${video.id}`)
                        }}
                        style={{
                            background:'#fff',
                            cursor: "pointer",
                            float: "left",
                            position: "relative",
                            width: "30%",
                            height: "50vh",
                            margin: "1.66%",
                            overflow: "hidden",
                        }}
                    >
                        <div style={{height:'10vh',background:'#fff'}}><p style={{textAlign:'center',paddingTop:10}}>Title</p></div>
                        <img src={video.thumbnail || VideoIcon} style={{ width: '100%', height: '25vh', objectFit: 'cover' }} />
                        <div style={{height:'100%',background:'#fff'}}><p style={{textAlign:'center',paddingTop:10}}>Description</p></div>
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
    )
};
