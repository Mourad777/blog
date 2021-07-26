import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import { StyledBlueButton, StyledRedButton } from "../../blog/StyledComponents";
import { AppUrl } from "../../blog/utility";
import Avatar from 'react-avatar';
import { useHistory } from "react-router-dom";
const Messages = ({ }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            let res;
            try {
                res = await axios.get(`${AppUrl}api/messages`);
            } catch (e) {
                console.log('Messages response error: ', e);
                setLoading(false)
            }
            setLoading(false)
            console.log('Fetch messages response', res)
            const messages = res.data;
            setMessages(messages);

        }
        getMessages();
    }, []);

    const handleMessage = (id) => {
        history.push(`/admin/message/${id}`)
    }

    return (
        <div >
            {loading && <h1>loading</h1>}
            <List>
                {messages.map((m, i) => (
                    <List.Item style={{padding:0}} key={m.name + i}>
                        <div style={{ background: i % 2 === 0 ? '#f8fafc' : 'rgb(242,242,242)',padding:10,cursor:'pointer' }} onClick={()=>handleMessage(m.id)}>
                            <div style={{ display: 'flex' }}>
                                <Avatar
                                    size={60}
                                    email={m.email}
                                    round={true}
                                />
                                <div style={{ padding: 20, fontSize: '1.3em' }}>
                                    <span>{m.name}</span>
                                </div>
                            </div>
                            {/* <div style={{ padding: 20, fontSize: '1.3em' }}>
                            <span>{m.email}</span>
                        </div> */}
                            <div style={{ padding: '10px 0', fontSize: '1.1em', color: '#afafaf' }}>
                                <span>{new Date(m.created_at).toLocaleDateString()}</span>
                            </div>
                            <div style={{ padding: '10px 0', fontSize: '1.1em' }}>
                                <span>{m.message.substring(0, 30) + '...'}</span>
                            </div>
                        </div>
                    </List.Item>))}
            </List>
        </div>
    );
};

export default Messages;