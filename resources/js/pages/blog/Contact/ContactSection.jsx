import React, { useState } from 'react'
import { StyledContactFormContainer, StyledInputGroup, StyledInputLabel, StyledTextInput, StyledTextareaInput, StyledContactFormSubmitButton } from '../StyledComponents'
import { AppUrl } from '../utility';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const setNameHandler = (value) => {
        setName(value)
    }

    const setEmailHandler = (value) => {
        setEmail(value)
    }

    const setMessageHandler = (value) => {
        setMessage(value)
    }

    const submitMessageHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('name', name);
        formData.append('message', message);
        setIsLoading(true);
        let messageResponse;
        try {
            messageResponse = await axios.post(`${AppUrl}api/messages/save`, formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
        } catch (e) {
            setIsLoading(false);
            console.log('message error response', messageResponse);
        }
        setIsLoading(false);
        console.log('message response', messageResponse);

    }

    return (
        <StyledContactFormContainer>
            {isLoading &&<h1>Loader</h1>}
            <p style={{ fontFamily: 'Mulish,sans-serif', fontSize: '4em', color: '#fff', textAlign: 'center' }}>Get In Touch</p>
            <StyledInputGroup>
                <StyledInputLabel>Full name</StyledInputLabel>
                <StyledTextInput value={name} onChange={(e) => setNameHandler(e.target.value)} type="text" />
            </StyledInputGroup>

            <StyledInputGroup>
                <StyledInputLabel>E-mail</StyledInputLabel>
                <StyledTextInput value={email} onChange={(e) => setEmailHandler(e.target.value)} type="text" />
            </StyledInputGroup>

            <StyledInputGroup>
                <StyledInputLabel>Message</StyledInputLabel>
                <StyledTextareaInput value={message} onChange={(e) => setMessageHandler(e.target.value)} rows="4" />
            </StyledInputGroup>
            <StyledContactFormSubmitButton onClick={submitMessageHandler}>
                Submit
            </StyledContactFormSubmitButton>
        </StyledContactFormContainer>
    )

}

export default ContactForm;