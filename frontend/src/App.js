import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SearchContainer from "./components/SearchContainer";
import HomePageContainer from "./components/HomePageContainer";
import MoviePageContainer from "./components/MoviePageContainer";
import ListPageContainer from "./components/ListPageContainer";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import ContactMe from "./components/ContactMe";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        <ContactMe />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <HomePageContainer />
            </Route>
            <Route path="(/login|/signup)">
              <LoginContainer />
            </Route>
            <Route path="/search/:searchTerm">
              <SearchContainer />
            </Route>
            <Route path="/movies/:imdbId">
              <MoviePageContainer />
            </Route>
            <Route path="/lists/:listId">
              <ListPageContainer />
            </Route>
          </Switch>
        )}
      </>
    )
  );
}

export default App;
