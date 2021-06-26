import React from "react";
import { useHistory } from 'react-router-dom';

const PostTitleImage = ({ post }) => {
    const history = useHistory();
    return (
        <div style={{ padding: 0, zIndex: 2 }} className="col-12 col-sm-6">

            <div style={{ background: "#cc9764" }}>

                <div
                    onClick={() => {
                        if (!post.content) return
                        history.push(`/post/${post.id}`)
                    }}
                    style={{
                        height: 100,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: 'pointer',
                    }}
                >
                    <h3
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight:0,
                        }}
                    >
                        {post.title}
                    </h3>
                </div>
                <div
                    onClick={() => {
                        if (!post.content) return
                        history.push(`/post/${post.id}`)
                    }}
                    style={{
                        height: 150,
                        // background: `url('${post.image}')`,
                        background:`url('${post.image}') center center / cover no-repeat`,
                        // backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "center",
                        cursor: 'pointer',
                    }}
                />
            </div>

        </div>
    );
};

export default PostTitleImage;
