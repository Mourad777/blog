import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { StyledBlueButton, StyledRedButton, StyledThumbnailPreview } from '../../blog/StyledComponents';
import { useHistory } from 'react-router';
import { AppUrl } from '../../blog/utility';
import { Checkbox, Icon } from 'semantic-ui-react'
const Posts = ({ winSize }) => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await axios.get(`${AppUrl}api/posts`);
        console.log('res post', res)
        const posts = res.data;
        setPosts(posts);
    }

    useEffect(() => {
        getPosts()
    }, [])

    const handleDeletePost = async (id) => {
        await axios.delete(`${AppUrl}api/posts/delete/${id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));

        getPosts()
    }

    const handlePublished = () => {

    }
    const labelStyle = { fontSize: '1.4em', display: 'block' };
    const titleStyle = { fontSize: '1.9em', display: 'block',fontStyle:'bold' };
    return (
        <div style={{ margin: 'auto', maxWidth: 800 }}>
            <h1>Posts</h1>
            <table style={{ margin: 'auto', width: '100%' }}>
                <tbody>

                    {winSize > 1 && (<tr><th style={{ fontSize: '1.2em' }}></th><th style={{ fontSize: '1.2em' }}>Title</th><th style={{ fontSize: '1.2em' }}>Author</th><th style={{ fontSize: '1.2em' }}>Published</th></tr>)}

                    {posts.map(p => (
                        <Fragment>
                            <tr key={p.id}>
                                {winSize > 1 && (
                                    <Fragment>
                                        <td><StyledThumbnailPreview small file={p.image} /></td>
                                        <td>{p.title}</td><td>{p.author}</td>
                                        <td><div style={{ display: 'flex', justifyContent: 'space-around' }}><Checkbox checked={true} onChange={handlePublished} /></div></td>
                                        <td><StyledBlueButton onClick={() => history.push(`/admin/post/${p.id}/comments`)}>Comments {p.comment_count}</StyledBlueButton> </td>
                                        <td><StyledBlueButton onClick={() => history.push(`/admin/edit-post/${p.id}`)}>Edit</StyledBlueButton> </td>
                                        <td><StyledRedButton onClick={() => handleDeletePost(p.id)}> Delete</StyledRedButton> </td>
                                    </Fragment>
                                )}
                            </tr>
                            {winSize === 1 && (
                                <div style={{ marginBottom: 20 }}>
                                    <StyledThumbnailPreview file={p.image} />
                                    <span style={titleStyle}>{p.title}</span>
                                    <p style={{ margin: '5px 0', fontSize: '1.3em' }}>{`Posted on ${new Date(p.created_at).toLocaleDateString()} ${!!p.author ? 'by ' + p.author : ''}`}</p>
                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}><span style={{ ...labelStyle, marginRight: 10 }}>Published: </span><Checkbox checked={true} onChange={handlePublished} /></div>


                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <StyledBlueButton maxWidth onClick={() => history.push(`/admin/post/${p.id}/comments`)}><Icon name='comment outline' size='large' /> {p.comment_count}</StyledBlueButton>
                                        <StyledBlueButton maxWidth onClick={() => history.push(`/admin/edit-post/${p.id}`)}><Icon name='edit outline' size='large' /></StyledBlueButton>
                                        <StyledRedButton maxWidth onClick={() => handleDeletePost(p.id)}> <Icon name='trash alternate outline' size='large' /></StyledRedButton>
                                    </div>
                                </div>
                            )}
                        </Fragment>
                    ))}

                </tbody>
            </table>
        </div >
    )
}

export default Posts
