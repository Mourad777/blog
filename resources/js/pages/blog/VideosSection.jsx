import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import VideoIcon from '../../../../public/assets/video-icon.jpg'
import { AppUrl } from "./utility";
const dummyPhotos = [
    "assets/dummy-photos/coffee-shop.jpg",
    "assets/dummy-photos/sandra-hitching.jpg",
    "assets/dummy-photos/helicopter.jpg"
];

export default ({ reference, videos }) => {
    const history = useHistory();

    return (
        <div style={{ padding: 50, height: '100vh', background: 'rgb(236, 231, 226)', width: '100%' }} ref={reference}>
            <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#daad86', textAlign: 'center' }}>Videos</p>
            <div className="row" style={{ justifyContent: 'center' }}>
                {videos.map((video, i) => (
                    <div key={video} className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div
                            onClick={()=>history.push(`/video/${video.id}`)}
                            style={{
                                border: "3px solid white",
                                height: 200,
                                background: `url('${video.thumbnail||VideoIcon}')`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                cursor:'pointer'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
};
