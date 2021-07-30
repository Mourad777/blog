import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// import AdminLayout from "./components/admin/AdminLayout"
import { BrowserRouter, withRouter } from "react-router-dom";
import Home from './pages/blog/Main/Home'
import './style.css'
import { Switch, Route } from "react-router-dom";
// import Posts from "./pages/admin/posts/Posts"
// import Comments from "./pages/admin/comments/Comments"
// import CreatePost from "./pages/admin/create-post/CreatePost"
// import Images from "./pages/admin/images/Images"
// import Videos from "./pages/admin/videos/Videos"
// import Messages from "./pages/admin/messages/Messages"
// import Message from "./pages/admin/messages/Message"
// import Post from "./pages/blog/Posts/Post"
// import Category from "./pages/blog/Category/Category";
// import Photo from "./pages/blog/Photos/Photo";
// import Video from "./pages/blog/Videos/Video";
import { getWindowSizeInteger } from "./pages/blog/utility";
import './fonts/WaitingfortheSunrise/WaitingfortheSunrise-Regular.ttf';
import _ from "lodash";
// import Categories from "./pages/admin/categories/Categories";
// import Countries from "./pages/admin/countries/Countries";
import Loader from "./pages/blog/Main/Loader";


const AdminLayout = React.lazy(() => import("./components/admin/AdminLayout"));
const Posts = React.lazy(() => import("./pages/admin/posts/Posts"));

const Comments = React.lazy(() => import("./pages/admin/comments/Comments"));
const CreatePost = React.lazy(() => import("./pages/admin/create-post/CreatePost"));
const Images = React.lazy(() => import("./pages/admin/images/Images"));
const Videos = React.lazy(() => import("./pages/admin/videos/Videos"));
const Messages = React.lazy(() => import("./pages/admin/messages/Message"));
const Message = React.lazy(() => import("./components/admin/AdminLayout"));
const Post = React.lazy(() => import("./pages/blog/Posts/Post"));
const Category = React.lazy(() => import("./pages/blog/Category/Category"));

const Photo = React.lazy(() => import("./pages/blog/Photos/Photo"));
const Video = React.lazy(() => import("./pages/blog/Videos/Video"));

const Categories = React.lazy(() => import("./pages/admin/categories/Categories"));
const Countries = React.lazy(() => import("./pages/admin/countries/Countries"));



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
        addEventListener("resize", _.throttle(getWindowSize, 200), { passive: true });
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
            <React.Suspense fallback={<Loader />}>
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
                            <Route exact path="/admin/categories">
                                <Categories />
                            </Route>
                            <Route exact path="/admin/countries">
                                <Countries />
                            </Route>
                            <Route exact path="/admin/messages">
                                <Messages />
                            </Route>
                            <Route exact path="/admin/message/:id">
                                <Message />
                            </Route>
                        </AdminLayout>
                    </Route>
                    <Route path="/post/:postId">
                        <Post winSize={winSize} />
                    </Route>
                    <Route path="/destination/:country">
                        <Category winSize={winSize} height={height} />
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
                        <Home winSize={winSize} scrollWidth={scrollWidth} height={height} />
                    </Route>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}


if (document.getElementById("app")) {
    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
}

