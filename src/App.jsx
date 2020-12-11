import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/index";
import PreSignUp from "./pages/PreSignUp/index";
import ActivitiesChoices from "./pages/Activities";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/pre-sign-up" exact component={PreSignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/ActivitiesForms" exact component={ActivitiesChoices} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
