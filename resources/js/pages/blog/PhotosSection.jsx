import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { gsap } from 'gsap/all'
import './pagination.css'
import { AppUrl } from "./utility";
import axios from 'axios'
import { useHistory } from "react-router";

export default ({ reference }) => {
    // const [photo, setPhoto] = useState("");
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const perPage = 9;
    const [pageCount, setPageCount] = useState(0);
    const [photos, setPhotos] = useState([]);
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
        //fetch photos
        const getPhotos = async () => {
            const fetchPhotosUrl = `${AppUrl}api/photos`;
            const resFetchPhotos = await axios.get(fetchPhotosUrl);
            console.log('Fetch photos response', resFetchPhotos);

            const fetchConfigUrl = `${AppUrl}api/configurations`;
            const resFetchConfigurations = await axios.get(fetchConfigUrl);
            console.log('Fetch config response', resFetchConfigurations);
            const formattedPhotos = resFetchPhotos.data.map(item => {
                return {
                    src: item.src,
                    id: item.id,
                }
            });

            console.log('formattedPhotos', formattedPhotos)
            if (resFetchConfigurations.data !== 'no_config') {
                const order = JSON.parse(resFetchConfigurations.data.photo_gallery_order);
                console.log('saved order: ', order);
                const orderedFormattedPhotos = [];
                order.forEach(number => {
                    formattedPhotos.forEach(photo => {
                        if (photo.id === number) {
                            orderedFormattedPhotos.push(photo);
                        }
                    })
                });
                console.log('orderedFormattedPhotos', orderedFormattedPhotos);
                setPhotos(orderedFormattedPhotos)
            } else {
                console.log('default order')
                setPhotos(formattedPhotos)
            }



        }
        getPhotos()
    }, [])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };


    return (
        <div style={{ height: '100vh', background: 'rgb(218, 173, 134)', width: '100%' }} ref={reference}>
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
                            // paddingBottom:
                            //     "30%" 
                            //     /* = width for a 1:1 aspect ratio */,
                            margin: "1.66%",
                            overflow: "hidden",
                            // background: `url('${p.src}')`,
                            // backgroundSize: "cover",
                            // backgroundRepeat: "no-repeat",
                            // backgroundPosition: "center"
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
