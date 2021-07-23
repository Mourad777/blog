import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/all';
import ReactPlayer from 'react-player'
import { AppUrl } from '../utility';
import { Replies } from '../Posts/Post';
import { List, TextArea, Form, Button } from 'semantic-ui-react'
import { StyledFormTextInput, StyledBlueButton, StyledRedButton } from '../StyledComponents';
import Avatar from 'react-avatar';

const Video = () => {
    const params = useParams();
    const history = useHistory();
    const selectedVideo = params.videoId;

    const [video, setVideo] = useState({});
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [content, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [replyComment, setReplyComment] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleComment = (e) => {
        setComment(e.target.value)
    }


    useEffect(() => {
        const getVideo = async () => {
            const videoResponse = await axios.get(`${AppUrl}api/videos/${selectedVideo}`);
            console.log('video response', videoResponse)
            setVideo(videoResponse.data);
        }
        getVideo()


        const getComments = async () => {
            const commentsRes = await axios.get(`${AppUrl}api/comments/video/${selectedVideo}`);
            console.log('Fetch comments response', commentsRes.data)
            setComments(commentsRes.data);
        }
        getComments()


        const triggers = ScrollTrigger.getAll();
        triggers.forEach(tr => {
            tr.kill()
        });
    }, [])


    const submitComment = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('video_id', selectedVideo);
        formData.append('content', content);
        formData.append('comment_type', 'video');

        if (replyComment) {
            formData.append('comment_id', replyComment.id)
        }
        const videoUploadResponse = await axios.post(`${AppUrl}api/comments/save`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));
        
        console.log('Video Upload Response',videoUploadResponse)

        const commentsRes = await axios.get(`${AppUrl}api/comments/video/${selectedVideo}`);
        setComments(commentsRes.data)
        setComment('');
        setName('');
        setEmail('');
        setReplyComment('');
    }

    return (
        <div style={{ background: '#ece7e2', height: '100vh', width: '100%' }}>
            <div style={{ padding: 20 }}>
                <Button content='Home' onClick={() => { history.push('/') }} />
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


            <div style={{ background: '#fff',padding:10 }} className="video-comments-container">
                {comments.length > 0 && <p style={{ fontSize: '2.5em', marginTop: 30 }}>{replyComment ? 'Comment' : 'Comments'}</p>}
                <Form style={{ paddingBottom: 20 }}>
                    {replyComment ?
                        <div style={{ display: 'flex', margin: '20px 0' }}>
                            <div style={{ width: 60 }}>
                                <Avatar
                                    size={100}
                                    md5Email={replyComment.encryptedEmail}

                                />
                            </div>
                            <textarea readOnly rows="3" cols="50" style={{
                                fontWeight: 600,
                                border: 'none',
                                background: '#efefef',
                                fontFamily: 'Mulish',
                                fontSize: '1.1em',
                                lineHeight: 1.8,
                                marginLeft: 20

                            }}>
                                {replyComment.content}
                            </textarea>

                        </div>
                        : <List>
                            {(comments || []).map(item => {
                                if (!item.is_approved) return null;
                                return (<List.Item style={{ marginTop: 20 }} key={item.id}>
                                    <div style={{ display: 'flex', marginBottom: 20 }}>
                                        <div style={{ width: 60 }}>
                                            <Avatar
                                                size={60}
                                                md5Email={item.encryptedEmail}
                                                round={true}
                                            />
                                        </div>
                                        <div style={{ padding: '0 20px' }}>
                                            <span style={{ display: 'block', fontSize: '1.6em', fontWeight: 'bold', marginBottom: 10, lineHeight: 1.1 }}>{item.user}</span>
                                            <textarea readOnly rows="4" cols="50" style={{
                                                fontWeight: 600,
                                                border: 'none',
                                                background: '#efefef',
                                                fontFamily: 'Mulish',
                                                fontSize: '1.1em',
                                                lineHeight: 1.8,
                                            }}>
                                                {item.content}
                                            </textarea>
                                        </div>
                                    </div>

                                    <StyledBlueButton onClick={() => setReplyComment(item)} icon="image"
                                    >
                                        Reply
                                    </StyledBlueButton>
                                    {(item.replies || []).length > 0 && (
                                        <div style={{ marginLeft: 20, marginTop: 10 }}>
                                            <Replies comment={item} setReplyComment={setReplyComment} />
                                        </div>
                                    )}
                                </List.Item>)
                            })}
                        </List>}


                    <div>
                        <label style={{ fontSize: '2em', display: 'block', margin: '40px 0 30px 0' }}>{replyComment.content ? `Reply to ${replyComment.user}` : 'Leave a Comment'}</label>
                        <TextArea value={content} onChange={handleComment} placeholder='Comment' style={{ minHeight: 100, width: '100%' }} />
                        <div style={{ marginTop: 20 }}>
                            <label style={{ fontSize: '1.2em' }}>Full Name</label>
                            <StyledFormTextInput value={name} onChange={handleName} placeholder='Full Name' />
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <label style={{ fontSize: '1.2em' }}>E-mail</label>
                            <StyledFormTextInput value={email} onChange={handleEmail} placeholder='E-mail' />
                        </div>
                    </div>
                    <div style={{ margin: '40px 0' }}>
                        <StyledBlueButton onClick={submitComment} icon="image"
                        >
                            Submit
                        </StyledBlueButton>
                        {replyComment.content && (
                            <StyledRedButton onClick={() => setReplyComment('')} icon="image"
                            >
                                Cancel Reply
                            </StyledRedButton>
                        )}
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Video