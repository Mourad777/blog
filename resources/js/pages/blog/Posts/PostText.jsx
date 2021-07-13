import React from "react";
import moment from "moment";
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
                    position: 'relative'
                }}
            >
                <div
                    style={{
                        color: "white",
                        // width: "80%",
                        padding: 5,
                        textAlign: isMobile ? 'center' : '',
                        zIndex: 2,
                        fontSize: 16,
                        background: 'transparent !important',
                        position: 'absolute',
                        top: 60,
                        left: '20%',
                        textAlign:'center',
                        maxWidth:170,
                    }}

                >
                    <div >
                        {!!post.title && <p style={{ fontSize: '1.5em' }}>{post.title}</p>}
                        {!!post.created_at && <p style={{ fontStyle: 'italic', color: 'rgb(251,251,251)', }}>{moment(new Date(post.created_at).getTime()).format("MMMM DD YYYY")}</p>}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostText;
