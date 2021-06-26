import React, { useState, useEffect } from 'react'
import { StyledFormTextInput, StyledBlueButton, StyledRedButton } from '../blog/StyledComponents';
import { List, TextArea, Form, Button } from 'semantic-ui-react'
import { AppUrl } from './utility';
import axios from 'axios';
import './tinymceReadonly.css'
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';
import { gsap } from 'gsap/all';

const Replies = ({ comment, setReplyComment }) => {
    return (
        <div>
            {(comment.replies || []).map(reply => {
                if (!reply.is_approved) return null;
                return (
                    <div style={{ marginLeft: 10 }} key={reply.id}>
                        <div style={{ display: 'flex', margin: '20px 0' }}>
                            <Avatar
                                size={60}
                                md5Email={reply.encryptedEmail}
                                round={true}
                            />
                            <div style={{ padding: '0 20px' }}>
                                <span style={{ display: 'block', fontSize: '1.6em', fontWeight: 'bold', marginBottom: 10 }}>{reply.user}</span>
                                {reply.content}
                            </div>
                        </div>

                        <StyledBlueButton onClick={() => setReplyComment(reply)} icon="image"
                        >
                            Reply
                        </StyledBlueButton>
                        <Replies setReplyComment={setReplyComment} comment={reply} />
                    </div>
                )
            })}
        </div>
    )
}

const Post = ({ postsFromDB, selectedPost, refPosts }) => {
    console.log('------------------------------------------postsFromDB', postsFromDB)
    const post = (postsFromDB || []).find(p => p.id.toString() === selectedPost);

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
    const submitComment = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('post_id', selectedPost);
        formData.append('content', content);
        if (replyComment) {
            formData.append('comment_id', replyComment.id)
        }
        await axios.post(`${AppUrl}api/comments/save`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));

        const commentsRes = await axios.get(`${AppUrl}api/comments/post/${selectedPost}`);
        setComments(commentsRes.data)
        setComment('');
        setName('');
        setEmail('');
        setReplyComment('');
    }
    useEffect(() => {
        const getComments = async () => {
            const commentsRes = await axios.get(`${AppUrl}api/comments/post/${selectedPost}`);
            console.log('commentsRes.data', commentsRes.data)
            setComments(commentsRes.data);
        }
        getComments()
    }, [selectedPost]);

    console.log('selec post', selectedPost)
    const history = useHistory();

    if (!post || !(postsFromDB.length > 0)) return null;
    return (
        <div style={{ width: '100%', height: '100%', background: 'white', padding: '40px 20px' }}>
            <Button labelPosition='left' icon='left chevron' content='Back' onClick={() => {
                // gsap.to(window, { duration: 1, scrollTo: refPosts.current });

                history.push('/')
            }} />
            <h1 style={{ textAlign: 'center', margin: '20px 0', fontSize: '3em' }}>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: "<style>@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');</style>" + post.content }} />
            {/* {!!(post.content) && <Editor
                    initialValue={post.content}
                    apiKey="lmbdxengrz1nuue2c1bunerjwmcqgvzoptjjdr3w0o1imj5n"
                    disabled
                    init={{                    
                        // menubar: false,
                        // plugins: 'link image code autoresize',
                        // toolbar: '',
                        content_style:
                            "@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');",
                    }}
                />} */}

            {comments.length > 0 && <p style={{ fontSize: '2.5em', marginTop: 30 }}>{replyComment ? 'Comment' : 'Comments'}</p>}
            <Form>
                {replyComment ?
                    <div style={{ display: 'flex', margin: '20px 0' }}>
                        <Avatar
                            size={100}
                            md5Email={replyComment.encryptedEmail}

                        />
                        <div style={{ paddingLeft: 20 }}>
                            {replyComment.content}
                        </div>

                    </div>
                    : <List>
                        {(comments || []).map(item => {
                            if (!item.is_approved) return null;
                            return (<List.Item style={{ marginTop: 20 }} key={item.id}>
                                <div style={{ display: 'flex', marginBottom: 20 }}>
                                    <Avatar
                                        size={60}
                                        md5Email={item.encryptedEmail}
                                        round={true}
                                    />
                                    <div style={{ padding: '0 20px' }}>
                                        <span style={{ display: 'block', fontSize: '1.6em', fontWeight: 'bold', marginBottom: 10 }}>{item.user}</span>
                                        {item.content}
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
    )
}

export default Post;