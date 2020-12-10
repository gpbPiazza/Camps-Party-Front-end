import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/index";
import PreSignUp from "./pages/PreSignUp/index";
import CompleteSignUp from "./pages/CompleteSignUp/index";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/pre-sign-up" exact component={PreSignUp} />
          <Route path="/complete-sign-up" exact component={CompleteSignUp} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
