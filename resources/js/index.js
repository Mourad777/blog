import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AdminLayout from "./components/admin/AdminLayout"
import { BrowserRouter, useHistory } from "react-router-dom";
import Home from './pages/blog/Home'
import Admin from './pages/admin/index'
import './style.css'
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/admin/posts/Posts"
import Post from "./pages/admin/post/Post"
import Comments from "./pages/admin/comments/Comments"
import CreatePost from "./pages/admin/create-post/CreatePost"
import Images from "./pages/admin/images/Images"
import Videos from "./pages/admin/videos/Videos"
import Country from "./pages/blog/Country";
import Photo from "./pages/blog/Photo";
import Video from "./pages/blog/Country";
import { getWindowSizeInteger } from "./pages/blog/utility";

const App = () => {
    const history = useHistory();

    const [winSize, setWinSize] = useState(getWindowSizeInteger(window.innerWidth));

    useEffect(() => {
        addEventListener("resize", getWindowSize, { passive: true });
    }, [])
    const getWindowSize = () => {
        const windowSizeInt = getWindowSizeInteger(window.innerWidth);
        setWinSize(windowSizeInt);
    };
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/admin">
                    <AdminLayout>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/admin/posts">
                            <Posts />
                        </Route>
                        <Route exact path="/admin/post/:id">
                            <Post />
                        </Route>
                        <Route exact path="/admin/post/:id/comments">
                            <Comments />
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
                    </AdminLayout>
                </Route>
                <Route path="/post/:postId">
                    <Post winSize={winSize} />
                </Route>
                <Route path="/destination/:country">
                    <Country winSize={winSize} />
                </Route>
                <Route path="/photo/:photoId">
                    <Photo winSize={winSize} />
                </Route>
                <Route path="/video/:videoId">
                    <Video winSize={winSize} />
                </Route>
                <Route path="/">
                    <Home winSize={winSize} />
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

