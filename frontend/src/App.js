import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import HomePageContainer from "./components/HomePageContainer";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";

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
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <HomePageContainer />
            </Route>
            <Route path="(/login|/signup)">
              <LoginContainer />
            </Route>
            {/* <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route> */}
          </Switch>
        )}
      </>
    )
  );
}

export default App;
