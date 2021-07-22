import React, { Fragment } from 'react';
import Spacer from "./Spacer";
import PostTitleImage from "./PostTitleImage";
import PostText from "./PostText";

const RowLayout = ({ winSize, post, index, offset }) => (
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
                <PostTitleImage index={index} post={post} />
                <PostText
                    post={post}
                    isMobile={winSize === 1}
                    index={index}
                />
            </Fragment>
        )}

        {!(index % 2) && !(winSize === 1) && (
            <Fragment>
                <PostText
                    index={index}
                    post={post}
                    isMobile={winSize === 1}
                />
                <PostTitleImage index={index} post={post} />
            </Fragment>
        )}
    </Fragment>
);

export default RowLayout;