import React, { useEffect, useState } from 'react'
import { DownArrow, Camera, Aperture, ShutterSpeed, Iso, Lens, FocalLength, Location } from "./svgs";
import { FaWindowClose } from "react-icons/fa";
import { useParams } from 'react-router';
import axios from 'axios'
import { AppUrl } from './utility';
import { Typography } from '@material-ui/core';
import { countries } from './countries';
import { ScrollTrigger } from 'gsap/all';
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

const Photo = ({ winSize }) => {
    const params = useParams();
    const history = useHistory();
    console.log('photo params', params);
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        const getPhoto = async () => {
            const photoResponse = await axios.get(`${AppUrl}api/photo/${params.photoId}`);
            console.log('photo response', photoResponse)
            setPhoto(photoResponse.data);
        }
        getPhoto();

        const triggers = ScrollTrigger.getAll();
        triggers.forEach(tr => {
            tr.kill()
        });
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
            <div style={{ padding: 20 }}>
                <Button labelPosition='left' icon='left chevron' content='Home' onClick={() => { history.push('/') }} />
            </div>
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
                            padding: '30px 30px 0 30px'
                        }}
                        className="image-container"
                    >
                        <div className="image" style={{ display: 'flex', flexDirection: 'column', background: 'black', position: 'relative' }}>
                            {/* <FaWindowClose onClick={() => setPhoto("")} size="2em" color="white" cursor="pointer" /> */}
                            <div style={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                color: 'rgb(255, 255, 255)',
                                background: '#997d6a',
                                margin: 10,
                                opacity: 0.8,
                                borderRadius: 10,
                            }}>
                                <div
                                    style={{ display: "flex", width: 200, padding: 5 }}
                                >
                                    <Camera />
                                    <p style={{ marginLeft: 10 }}>
                                        Camera <span>{photo.camera}</span>
                                    </p>
                                </div>
                                <div
                                    style={{ display: "flex", width: 200, padding: 5 }}
                                >
                                    <Lens />
                                    <p style={{ marginLeft: 10 }}>
                                        Lens <span>{(photo.lens || '').substring(0, 18)}</span>
                                    </p>
                                </div>
                                <div
                                    style={{ display: "flex", width: 200, padding: 5 }}
                                >
                                    <FocalLength />
                                    <p style={{ marginLeft: 10 }}>
                                        Focal Length <span>{photo.focal_length}</span>
                                    </p>
                                </div>
                                <div
                                    style={{ display: "flex", width: 200, padding: 5 }}
                                >
                                    <Aperture />
                                    <p style={{ marginLeft: 10 }}>
                                        Aperture <span>{photo.aperture}</span>
                                    </p>
                                </div>
                                <div
                                    style={{ display: "flex", width: 200, padding: 5 }}
                                >
                                    <ShutterSpeed />
                                    <p style={{ marginLeft: 10 }}>
                                        Shutter <span>{photo.shutter_speed}</span>
                                    </p>
                                </div>
                                <div
                                    style={{ display: "flex", width: 200, padding: 5 }}
                                >
                                    <Iso />
                                    <p style={{ marginLeft: 10 }}>
                                        Iso <span>{photo.iso}</span>
                                    </p>
                                </div>
                            </div>
                            <img
                                style={{
                                    border: "10px solid white",
                                    height: '60vh',
                                    // height:
                                    //     winSize === 1
                                    //         ? "auto"
                                    //         : winSize === 2
                                    //             ? 333
                                    //             : 533,
                                    // width: winSize > 1 ? "500px" : "100%",
                                    width:
                                        winSize === 1
                                            ? "100%"
                                            : winSize === 2
                                                ? 500
                                                : 800,
                                    objectFit: "contain"
                                }}
                                src={photo.src}
                                alt=""
                            />{" "}
                            <div className="extra-img-info-container" style={{ color: 'white', }}>
                                {photo.photographer && (
                                    <div style={{ color: "#fff4e1" }}>
                                        <Typography style={{ fontStyle: 'italic' }} variant="subtitle1">Taken by {photo.photographer} {photo.date_taken ? ' on ' + new Date(photo.date_taken).toDateString() : ''}</Typography>
                                    </div>
                                )}
                                {photo.country && (
                                    <div style={{ display: 'flex', color: "#fff4e1" }}>
                                        <Location />
                                        <Typography variant="body1">{countries.find(c => c.value === photo.country).text}</Typography>

                                    </div>
                                )}
                                {photo.title && (
                                    <div>
                                        <Typography variant="h5">{photo.title}</Typography>
                                    </div>
                                )}
                                <div>
                                    <Typography variant="h6">{photo.description}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            height: "100%",
                            backgroundColor: "rgb(218, 173, 134)",
                            width: "100%",
                            display: "flex",
                            alignItems: winSize === 1 ? 'start' : "center",
                            // justifyContent: winSize > 1 ? "center" : ""
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                paddingLeft: 30,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                            }}
                            className="photo-icon-container"
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: 200,
                                    cursor: "pointer",
                                    padding: 5,
                                }}
                            >
                                <DownArrow />
                                <p style={{ marginLeft: 10 }}>
                                    Download
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >)
}

export default Photo