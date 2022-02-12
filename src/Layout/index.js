import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import NotFound from "./MainPath/NotFound";
import Home from "./MainPath/Home";
import CreateDeck from "./MainPath/CreateDeck";
import Deck from "./MainPath/Deck";
import Study from "./MainPath/Study";
import EditDeck from "./MainPath/EditDeck";
import AddCard from "./MainPath/AddCard";
import EditCard from "./MainPath/EditCard";

function Layout() {
  return (
    <>
      <Header />
        <div className="container">
          {/* TODO: Implement the screen starting here */}
          
          <Router>
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/decks/new">
                <CreateDeck />
              </Route>

              <Route exact path="/decks/:deckId">
                <Deck />
              </Route>

              <Route path="/decks/:deckId/study">
                <Study />
              </Route>

              <Route path="/decks/:deckId/edit">
                <EditDeck />
              </Route>

              <Route path="/decks/:deckId/cards/new">
                <AddCard />
              </Route>

              <Route path="/decks/:deckId/cards/:cardId/edit">
                <EditCard />
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
