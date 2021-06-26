import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledBlueButton, StyledRedButton, StyledThumbnailPreview } from '../../blog/StyledComponents';
import { useHistory } from 'react-router';
import { AppUrl } from '../../blog/utility';
import { Checkbox } from 'semantic-ui-react'
const Posts = () => {
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

    return (
        <div style={{ margin: 'auto', maxWidth: 800 }}>
            <h1>Posts</h1>
            <table style={{ margin: 'auto', width: '100%' }}>
                <tbody>

                    <tr><th style={{ fontSize: '1.2em' }}></th><th style={{ fontSize: '1.2em' }}>Title</th><th style={{ fontSize: '1.2em' }}>Author</th><th style={{ fontSize: '1.2em' }}>Published</th></tr>

                    {posts.map(p => (
                        <tr key={p.id}>
                            <td><StyledThumbnailPreview small file={p.image} /></td>
                            <td>{p.title}</td><td>{p.author}</td>
                            <td><div style={{ display: 'flex', justifyContent: 'space-around' }}><Checkbox checked={true} onChange={handlePublished} /></div></td>
                            <td><StyledBlueButton onClick={() => history.push(`/admin/post/${p.id}/comments`)}>Comments {p.comment_count}</StyledBlueButton> </td>
                            <td><StyledBlueButton onClick={() => history.push(`/admin/edit-post/${p.id}`)}>Edit</StyledBlueButton> </td>
                            <td><StyledRedButton onClick={() => handleDeletePost(p.id)}> Delete</StyledRedButton> </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Posts
