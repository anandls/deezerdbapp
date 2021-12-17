import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TracksPage from "@pages/TracksPage";
import ArtistPage from "@pages/ArtistPage";
import "./App.scss";
import Layout from "@components/Layout";

const App = () => {
    return (
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={TracksPage} />
                    <Route exact path="/tracks" component={TracksPage} />
                    <Route exact path="/artist/:id" component={ArtistPage} />
                </Switch>
            </Router>
        </Layout>
    );
};

export default App;
