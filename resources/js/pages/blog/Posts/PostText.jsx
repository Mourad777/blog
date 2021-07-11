import React from "react";

const PostText = ({ post, isMobile }) => {
    return (
        <div
            className="col-12 col-sm-6"
            style={{ display: "flex", padding: 0 }}
        >
            <div
                style={{
                    width: "100%",
                    background: "rgba(218, 173, 134,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: isMobile ? 'calc(100vh - 461px)' : 200,
                    minWidth: isMobile ? '' : 478,
                }}
            >
                <div
                    style={{
                        color: "white",
                        width: "80%",
                        padding: 5,
                        textAlign:isMobile ? 'center' : '',
                        zIndex: 2,
                        fontSize: 16,
                        background: 'transparent !important'
                    }}

                >
                    <span style={{fontSize:'1.3em'}}>{post.title}</span>
                </div>

            </div>
        </div>
    );
};

export default PostText;
