import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/all';
import ReactPlayer from 'react-player'
import { AppUrl } from './utility';
import { Button } from 'semantic-ui-react'
const Video = () => {
    const params = useParams();
    const [video, setVideo] = useState({});
    const history = useHistory();
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
    return (
        <div style={{ background: '#ece7e2', height: '100vh', width: '100%' }}>
            <div style={{ padding: 20 }}>
                <Button labelPosition='left' icon='left chevron' content='Home' onClick={() => { history.push('/') }} />
            </div>
            <p style={{ color: 'rgb(218, 173, 134)', fontSize: '4em', fontFamily: 'Mulish', textAlign: 'center', paddingTop: 56 }}>{video.title}</p>
            <div style={{
                maxWidth: '800px',
                display: 'flex',
                justifyContent: 'space-around',
                padding: 15,
                margin: 'auto'
            }}
                className="player-container">
                <ReactPlayer
                    controls
                    width="100%"
                    height="100%"
                    url={video.src}
                />

            </div>
        </div>
    )
}

export default Video