import React from "react";
import { Route,Switch } from "react-router-dom";
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
    <div className="Layout">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId" exact>
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
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
