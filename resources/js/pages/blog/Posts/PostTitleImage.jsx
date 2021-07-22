import React from "react";
import { useHistory } from 'react-router-dom';

const PostTitleImage = ({ post,index }) => {
    console.log('index in image',index)

    console.log('post image: ',`post-image-${index % 2 || !index ? 1 : 2}`)
    const history = useHistory();
    return (
        <div style={{ padding: 0, zIndex: 2 }} className="col-12 col-sm-6">

            <div className={`post-image-${index +1}`}
                style={{ background: "#cc9764" }}>
                <div
                    onClick={() => {
                        if (!post.content) return
                        history.push(`/post/${post.id}`)
                    }}
                    style={{
                        height: 250,
                        // background: `url('${post.image}')`,
                        background: `url('${post.image}') center center / cover no-repeat`,
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
