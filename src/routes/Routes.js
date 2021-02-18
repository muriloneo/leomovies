import React from "react";
import Layout from "../components/layout/LayoutCore";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";
import WatchLater from "../pages/watchlater/WatchLater";
import NotFound from "../pages/errors/NotFound";
import { Redirect, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/watch-later" component={WatchLater} />
          <Redirect path="/" to="/home" exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  );
}
