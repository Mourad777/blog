import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/all';
import ReactPlayer from 'react-player'
import { AppUrl } from './utility';

const Video = () => {
    const params = useParams();
    const [video, setVideo] = useState(null);
    console.log('video abc', video)

    useEffect(() => {
        const getVideo = async () => {
            const videoResponse = await axios.get(`${AppUrl}api/video/${params.videoId}`);
            console.log('video response', videoResponse)
            setVideo(videoResponse.data);
        }
        getVideo()
        const triggers = ScrollTrigger.getAll();
        triggers.forEach(tr => {
            tr.kill()
        });
    }, [])
    console.log('params', params)
    return (<div style={{ background: '#ece7e2', height: '100%', width: '100%' }}>{!!video && <ReactPlayer
        controls
        width="100%"
        height="100%"
        url={video.src}
    />}</div>)
}

export default Video