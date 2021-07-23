import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AdminLayout from "./components/admin/AdminLayout"
import { BrowserRouter, withRouter} from "react-router-dom";
import Home from './pages/blog/Main/Home'
import './style.css'
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/admin/posts/Posts"
import Comments from "./pages/admin/comments/Comments"
import CreatePost from "./pages/admin/create-post/CreatePost"
import Images from "./pages/admin/images/Images"
import Videos from "./pages/admin/videos/Videos"
import Messages from "./pages/admin/messages/Messages"
import Post from "./pages/blog/Posts/Post"
import Category from "./pages/blog/Category/Category";
import Photo from "./pages/blog/Photos/Photo";
import Video from "./pages/blog/Videos/Video";
import { getWindowSizeInteger } from "./pages/blog/utility";
import './fonts/WaitingfortheSunrise/WaitingfortheSunrise-Regular.ttf';
import _ from "lodash";

const ScrollToTop = withRouter(({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
})

const App = () => {
    const [winSize, setWinSize] = useState(getWindowSizeInteger(window.innerWidth));
    const [scrollWidth, setScrollWidth] = useState(getWindowSizeInteger(window.innerWidth));
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        addEventListener("resize", _.throttle(getWindowSize,200), { passive: true });
    }, []);

    const getWindowSize = () => {
        const windowSizeWidthInt = getWindowSizeInteger(window.innerWidth);
        const windowSizeHeight = window.innerHeight;
        setScrollWidth(window.innerWidth);
        setHeight(windowSizeHeight)
        setWinSize(windowSizeWidthInt);
    };

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route path="/admin">
                    <AdminLayout>
                        <Route exact path="/admin/posts">
                            <Posts winSize={winSize} />
                        </Route>
                        <Route exact path="/admin/post/:id/comments">
                            <Comments isPost />
                        </Route>
                        <Route exact path="/admin/video/:id/comments">
                            <Comments isVideo />
                        </Route>
                        <Route exact path="/admin/create-post">
                            <CreatePost />
                        </Route>
                        <Route exact path="/admin/edit-post/:id">
                            <CreatePost isEditing />
                        </Route>
                        <Route exact path="/admin/photos">
                            <Images />
                        </Route>
                        <Route exact path="/admin/videos">
                            <Videos />
                        </Route>
                        <Route exact path="/admin/messages">
                            <Messages />
                        </Route>
                    </AdminLayout>
                </Route>
                <Route path="/post/:postId">
                    <Post winSize={winSize} />
                </Route>
                <Route path="/destination/:country">
                    <Category winSize={winSize} />
                </Route>
                <Route path="/category/:categoryId">
                    <Category winSize={winSize} />
                </Route>
                <Route path="/photo/:photoId">
                    <Photo winSize={winSize} />
                </Route>
                <Route path="/video/:videoId">
                    <Video winSize={winSize} />
                </Route>
                <Route path="/">
                    <Home winSize={winSize} scrollWidth={scrollWidth} height={height}/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}


if (document.getElementById("app")) {
    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
}

