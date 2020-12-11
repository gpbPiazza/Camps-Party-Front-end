import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/index";
import Tickets from "./pages/Tickets/index";
import Hotel from "./pages/UserDashboard/ChooseHotel/index";
import PreSignUp from "./pages/PreSignUp/index";
import CompleteSignUp from "./pages/CompleteSignUp/index";
import Review from "./pages/UserDashboard/Review/index";
import { UserProvider } from "./contexts/UserContext";
import LogIn from "./pages/LogIn/index";
import ChooseActivities from "./pages/UserDashboard/ChooseActivities/index";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/pre-sign-up" exact component={PreSignUp} />
          <Route path="/complete-sign-up" exact component={CompleteSignUp} />
          <Route path="/dashboard/" component={Review} />
          <Route path="/choose-ticket" exact component={Tickets} />
          <Route path="/choose-hotel" exact component={Hotel} />
          <Route path="/choose-activities" exact component={ChooseActivities} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
