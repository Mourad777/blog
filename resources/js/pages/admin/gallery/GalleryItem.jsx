import React from "react";
import { useHistory } from "react-router-dom";
import { StyledBlueButton, StyledRedButton } from "../../blog/StyledComponents";

const imgWithClick = { cursor: "pointer" };
//commentCount
const Photo = ({ index, onClick, photo, margin, direction, top, left, handleDetails, handleDelete, galleryType }) => {
  const history = useHistory()
  const imgStyle = { margin: margin, padding: 20, objectFit: 'cover', maxWidth: 400 };
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
    <div key={`${galleryType === 'video' ? 'video' : 'photo'}[${photo.id}]`} style={{ display: 'flex', flexDirection: 'column',maxHeight:400 }}>
      <img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        src={photo.src}
        onClick={onClick ? handleClick : null}
        alt="img"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <StyledBlueButton style={{ width: '100%' }} onClick={() => handleDetails(photo)}
        >
          Details
        </StyledBlueButton>
        {galleryType === 'video' && <StyledBlueButton style={{ width: '100%' }} onClick={() => history.push(`/admin/video/${photo.id}/comments`)}
        >
          Comments {photo.commentCount}
        </StyledBlueButton>}
        <StyledRedButton style={{ maxWidth: 100, }} onClick={() => handleDelete(photo.id)}
        >
          Delete
          {/* <i className="trash icon" onClick={() => handleDeleteVideo(photo.id)}></i> */}
        </StyledRedButton>
      </div>
    </div>
  );
};

export default Photo;