import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { StyledRedButton } from '../../blog/StyledComponents';
import { useParams } from 'react-router';
import { AppUrl } from '../../blog/utility';
import { Checkbox } from 'semantic-ui-react'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const processComments = (comments) => {
    //recursive function to get replies
    const processedComments = [];

    const getReplies = (comments) => {
        comments.forEach(c => {
            processedComments.push(c)
            if ((c.replies || []).length > 0) {
                getReplies(c.replies)
            }
        })
    }

    getReplies(comments)

    return processedComments;
}

const Comments = ({ isPost, isVideo }) => {
    let docType;
    if (isPost) {
        docType = 'post'
    }
    if (isVideo) {
        docType = 'video'
    }
    const params = useParams();
    const [comments, setComments] = useState([]);
    const [document, setDocument] = useState({});
    const getComments = async (docId) => {
        const res = await axios.get(`${AppUrl}api/comments/${docType}/${docId}`);
        console.log('res comments', res)
        const comments = res.data;
        setComments(processComments(comments));
    }

    useEffect(() => {
        const docId = params.id;
        const getDocument = async (docId) => {
            const res = await axios.get(`${AppUrl}api/${docType}s/${docId}`);
            console.log('res post or video', res)
            const doc = res.data;

            setDocument(doc);

        }
        getDocument(docId);
        getComments(docId);
    }, [])

    const handleDeleteComment = async (commentId) => {

    }

    const handleCommentApproval = async (id) => {

        const formData = new FormData();
        formData.append('comment_id', id)
        await axios.post(`${AppUrl}api/comments/approve-comment`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));
        getComments(params.id)
    }
    console.log('document -----------------',document)
    return (
        <div style={{ margin: 'auto', maxWidth: 800 }}>
            <h1>{capitalizeFirstLetter(docType)} Comments from {document.title}</h1>
            <table style={{ margin: 'auto', width: '100%' }}>
                <tbody>

                    <tr><th></th><th style={{ fontSize: '1.2em' }}>User</th><th style={{ fontSize: '1.2em' }}>E-mail</th><th style={{ fontSize: '1.2em', textAlign: 'center' }}>Approved</th></tr>

                    {comments.map((c, i) => (
                        <Fragment key={c.id}>
                            <tr style={{
                                height: 60,
                                padding: 20,
                            }} key={c.id}>
                                <td>{i + 1}</td>

                                <td>{c.user}</td>
                                <td>{c.email}</td>
                                <td> <div style={{ display: 'flex', justifyContent: 'space-around' }}><Checkbox checked={!!c.is_approved} onChange={() => handleCommentApproval(c.id)} /></div></td>
                                <td><StyledRedButton onClick={() => handleDeleteComment(c.id)}>Delete</StyledRedButton> </td>
                            </tr>
                            <tr style={{
                                height: 60,
                                padding: 10,

                                width: '100%',
                                margin: 20
                            }}
                            >
                                <td></td>
                                <td style={{ background: '#efefef', paddingLeft: 20 }} colSpan="4">
                                    <textarea readOnly rows="4" cols="50" style={{
                                        fontWeight: 600,
                                        border: 'none',
                                        background: '#efefef',
                                        fontFamily: 'Mulish',
                                        fontSize: '1.1em',
                                        lineHeight: 1.8,
                                    }}>
                                        {c.content}
                                    </textarea>
                                </td>
                            </tr>
                        </Fragment>
                    ))}

                </tbody>
            </table>
        </div >
    )
}

export default Comments;
