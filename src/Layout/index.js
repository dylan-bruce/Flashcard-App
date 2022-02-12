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
import CreateDeckButton from "../Buttons/CreateDeckButton";

function Layout() {
  return (
    <>
      <Header />
        <div className="container">
          {/* TODO: Implement the screen starting here */}
          
          <Router>
            <Switch>

              <Route exact path="/">
                <CreateDeckButton/>
                <br/>
                <Home />
              </Route>

              <Route path="/decks">
                <Decks />
              </Route>

              <Route>
                <NotFound/>
              </Route>

            </Switch>
            </Router>
        </div>
    </>
  );
}

export default Layout;
