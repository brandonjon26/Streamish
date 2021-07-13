import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import UserVideos from "./UserVideos";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <VideoList />
            </Route>

            <Route path="/videos/add">
                <VideoForm />
            </Route>

            <Route path="/videos/:id">
                <VideoDetails />
            </Route>

            <Route path="/users/:id" exact>
                <UserVideos />
            </Route>

            <Route path="/videos/:id">{/* TODO: Video Details Component */}</Route>
        </Switch>
    );
};

export default ApplicationViews;
