import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/index";
import PreSignUp from "./pages/PreSignUp/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/pre-sign-up" exact component={PreSignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
