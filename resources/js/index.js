import React from "react";
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

const App = () => {
    const history = useHistory();
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
                    <Home />
                </Route>
                <Route path="/destination/:country">
                    <Home />
                </Route>
                <Route path="/photo/:photoId">
                    <Home />
                </Route>
                <Route path="/video/:videoId">
                    <Home />
                </Route>
                <Route path="/">
                    <Home />
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

