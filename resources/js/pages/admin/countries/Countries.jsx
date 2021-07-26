import React, { useState,createRef } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { StyledThumbnailPreview, StyledBlueButton, StyledRedButton } from '../../blog/StyledComponents';
import { countries } from '../util/countries-iso';

const Countries = ({ winSize }) => {
    const [country, setCountry] = useState('');

    const handleCountry = (e, { value }) => {
        e.preventDefault();
        setCountry(value);
    };
    const handleFileChange = e => {
        e.preventDefault()
        setFile(e.target.files[0]);
    };
    const fileInputRef = createRef();
    const [file, setFile] = useState('');
    return (
        <div style={{ maxWidth: 800 }}>
            <h1>Countries</h1>
            <div style={{ marginTop: 20 }}>
                <label style={{ fontSize: '1.2em' }}>Country</label>
                <Dropdown
                    clearable
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={countries}
                    onChange={handleCountry}
                    value={country}
                >

                </Dropdown>
            </div>
            <div style={{ marginTop: 20 }}>
                <StyledThumbnailPreview file={file instanceof File ? URL.createObjectURL(file) : file} />
            </div>
            <div style={{ marginTop: 20 }}>
                <StyledBlueButton onClick={() => fileInputRef.current.click()} icon="image"
                >
                    Upload Thumbnail
                </StyledBlueButton>
                <StyledRedButton onClick={() => setFile(null)}
                >
                    <i className="trash icon"></i>
                </StyledRedButton>
                <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
            </div>

        </div >
    )
}

export default Countries
