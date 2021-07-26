import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import { StyledBlueButton, StyledRedButton } from "../../blog/StyledComponents";
import { AppUrl } from "../../blog/utility";
import Avatar from 'react-avatar';
import { useParams } from "react-router-dom";

const Messages = ({ }) => {
    const [message, setMessage] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    const messageId = params.id;
    useEffect(() => {
        const getMessage = async () => {
            setIsLoading(true)
            let res;
            try {
                res = await axios.get(`${AppUrl}api/message/${messageId}`);
            } catch (e) {
                console.log('Message response error: ', e);
                setIsLoading(false)
            }
            setIsLoading(false)
            console.log('Fetch message response', res)
            const message = res.data;
            setMessage(message);

        }
        getMessage();
    }, [])

    return (
        <div >
            {isLoading && <h1>Loading</h1>}
            <div style={{ display: 'flex' }}>
                <Avatar
                    size={60}
                    email={message.email}
                    round={true}
                />
                <div style={{ padding: 20, fontSize: '1.3em' }}>
                    <span>{message.name}</span>
                </div>
            </div>
            {/* <div style={{ padding: 20, fontSize: '1.3em' }}>
                            <span>{m.email}</span>
                        </div> */}
            <div style={{ padding: '10px 0', fontSize: '1.1em', color: '#afafaf' }}>
                <span>{new Date(message.created_at).toLocaleDateString()}</span>
            </div>
            <div style={{ padding: '10px 0', fontSize: '1.1em' }}>
                <span>{!!message.message ? message.message.substring(0, 30) + '...' : ''}</span>
            </div>
        </div>
    );
};

export default Messages;