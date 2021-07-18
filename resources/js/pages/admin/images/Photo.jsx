import React from "react";
import { StyledBlueButton, StyledRedButton } from "../../blog/StyledComponents";

const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left, handleImageDetails,handleDeleteImage }) => {
  const imgStyle = { margin: margin, padding: 20, objectFit:'cover',maxWidth:400 };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
    imgStyle.objectFit = 'cover'
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...photo}
        onClick={onClick ? handleClick : null}
        alt="img"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between',padding:'0 20px' }}>
        <StyledBlueButton style={{width:'100%'}}  onClick={() => handleImageDetails(photo)}
        >
          Details
        </StyledBlueButton>
        <StyledRedButton style={{ maxWidth: 100, }} onClick={() => handleDeleteImage(photo.id)}
        >
          Delete
          {/* <i className="trash icon" onClick={() => handleDeleteImage(photo.id)}></i> */}
        </StyledRedButton>
      </div>
    </div>
  );
};

export default Photo;