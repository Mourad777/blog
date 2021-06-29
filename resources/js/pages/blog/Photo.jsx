import React, { useEffect, useState } from 'react'
import { DownArrow, Camera, Aperture, ShutterSpeed, Iso } from "./svgs";
import { FaWindowClose } from "react-icons/fa";
import { useParams } from 'react-router';
import axios from 'axios'
import { AppUrl } from './utility';

const Photo = ({ winSize }) => {
    const params = useParams();
    console.log('photo params', params);
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        const getPhoto = async () => {
            const photoResponse = await axios.get(`${AppUrl}api/photo/${params.photoId}`);
            console.log('photo response', photoResponse)
            setPhoto(photoResponse.data);
        }
        getPhoto()
    }, [])

    return (<div style={{ background: '#ece7e2', height: '100%', width: '100%' }}>
        <div
            style={{
                opacity: photo ? 1 : 0,
                transition: "opacity 1s ease-in",
                width: "100vw",
                height: "100%",
                zIndex: 10,
                position: "fixed",
                top: 0,
                right: 0,
                backgroundColor: "rgb(218, 173, 134)"
            }}
            className="photo-preview-container"
        >
            <div
                style={{
                    left: 0,
                    margin: winSize === 1 ? "auto" : "",
                    right: winSize === 1 ? 0 : "",
                    position: "absolute",
                    height: "100%",
                    width: "100vw"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection:
                            winSize < 2 ? "column" : "initial",
                        height: "100%"
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            padding: 30
                        }}
                        className="image-container"
                    >
                        <div className="image">
                            {/* <FaWindowClose onClick={() => setPhoto("")} size="2em" color="white" cursor="pointer" /> */}
                            <img
                                style={{
                                    border:
                                        winSize > 1
                                            ? "10px solid white"
                                            : "",
                                    height:
                                        winSize === 1
                                            ? "auto"
                                            : winSize === 2
                                                ? 333
                                                : 533,
                                    // width: winSize > 1 ? "500px" : "100%",
                                    width:
                                        winSize === 1
                                            ? "100%"
                                            : winSize === 2
                                                ? 500
                                                : 800,
                                    objectFit: "cover"
                                }}
                                src={photo.src}
                                alt=""
                            />{" "}

                        </div>
                    </div>

                    <div
                        style={{
                            height: "100%",
                            backgroundColor: "rgb(218, 173, 134)",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: winSize > 1 ? "center" : ""
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                padding: winSize === 1 ? 30 : "",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                minHeight: 200,
                            }}
                            className="photo-icon-container"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: 200,
                                    cursor: "pointer"
                                }}
                            >
                                <DownArrow />
                                <p style={{ marginLeft: 10 }}>
                                    Download
                                        </p>
                            </div>
                            <div
                                style={{ display: "flex", width: 200 }}
                            >
                                <Camera />
                                <p style={{ marginLeft: 10 }}>
                                    Camera <span>{photo.camera}</span>
                                </p>
                            </div>
                            <div
                                style={{ display: "flex", width: 200 }}
                            >
                                <Aperture />
                                <p style={{ marginLeft: 10 }}>
                                    Aperture <span>{photo.aperture}</span>
                                </p>
                            </div>
                            <div
                                style={{ display: "flex", width: 200 }}
                            >
                                <ShutterSpeed />
                                <p style={{ marginLeft: 10 }}>
                                    Shutter <span>{photo.shutter_speed}</span>
                                </p>
                            </div>
                            <div
                                style={{ display: "flex", width: 200 }}
                            >
                                <Iso />
                                <p style={{ marginLeft: 10 }}>
                                    Iso <span>{photo.iso}</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <span>Title: {photo.title}</span>
                        </div>
                        <div>
                            <span>Photographer: {photo.photographer}</span>
                        </div>
                        <div>
                            <span>Description: {photo.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Photo