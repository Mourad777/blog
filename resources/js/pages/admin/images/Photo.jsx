import React from "react";
import { StyledBlueButton, StyledRedButton } from "../../blog/StyledComponents";

const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left, handleImageDetails }) => {
  const imgStyle = { margin: margin, padding: 20 };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  const handleDeleteImage = async () => {
    console.log('delete image', photo.id)
  }
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
        <StyledRedButton style={{ maxWidth: 60, }} onClick={() => handleDeleteImage()}
        >
          <i className="trash icon"></i>
        </StyledRedButton>
      </div>
    </div>
  );
};

export default Photo;