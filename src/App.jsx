import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/index";
import Tickets from "./pages/Tickets/index";
import PreSignUp from "./pages/PreSignUp/index";
import LogIn from "./pages/LogIn/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/pre-sign-up" exact component={PreSignUp} />
        <Route path="/choose-ticket" exact component={Tickets} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
