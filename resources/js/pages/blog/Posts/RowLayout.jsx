import React, { Fragment } from 'react';
import Spacer from "./Spacer";
import PostTitleImage from "./PostTitleImage";
import PostText from "./PostText";

const RowLayout = ({ winSize, post, index }) => (
    <Fragment>
        {!(winSize === 1) && <Spacer />}

        {winSize === 1 && (
            <Fragment>
                <PostTitleImage post={post} />
                <PostText
                    post={post}
                    isMobile={winSize === 1}
                />

            </Fragment>
        )}

        {!(winSize === 1) && !!(index % 2) && (
            <Fragment>
                <PostTitleImage post={post} />
                <PostText
                    post={post}
                    isMobile={winSize === 1}
                />
            </Fragment>
        )}
        
        {!(index % 2) && !(winSize === 1) && (
            <Fragment>
                <PostText
                    post={post}
                    isMobile={winSize === 1}
                />
                <PostTitleImage post={post} />
            </Fragment>
        )}
    </Fragment>
);

export default RowLayout;