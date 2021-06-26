import React, { useState } from 'react'
import {StyledContactFormContainer,StyledInputGroup, StyledInputLabel, StyledTextInput,StyledTextareaInput,StyledContactFormSubmitButton} from '../../pages/blog/StyledComponents'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const setNameHandler = (value) => {
        setName(value)
    }

    const setEmailHandler = (value) => {
        setEmail(value)
    }

    const setMessageHandler = (value) => {
        setMessage(value)
    }

    return (
        <StyledContactFormContainer>
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
            <StyledContactFormSubmitButton>
                Submit
            </StyledContactFormSubmitButton>
        </StyledContactFormContainer>
    )

}

export default ContactForm;