import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Decks from "../Decks/Decks";

function Layout() {
  return (
    <>
      <Header />
      <Router>
        <div className="container">
          {/* TODO: Implement the screen starting here */}
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/decks">
              <Decks />
            </Route>

            <Route>
              <NotFound/>
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Layout;
