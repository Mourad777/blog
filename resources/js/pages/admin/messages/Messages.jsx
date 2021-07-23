import React, { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import { StyledBlueButton, StyledRedButton } from "../../blog/StyledComponents";
import { AppUrl } from "../../blog/utility";

const Messages = ({ }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

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
    }, [])

    return (
        <div >
            {loading && <h1>loading</h1>}
            <List>
                {messages.map((m, i) => (
                    <List.Item key={m.name + i}>
                        <div>
                            <span>{m.name}</span>
                        </div>
                        <div>
                            <span>{m.email}</span>
                        </div>
                    </List.Item>))}
            </List>
        </div>
    );
};

export default Messages;