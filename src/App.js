import React from "react";
import "./style/master.scss"; //applies global scss styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import AddGiftName from "./components/pages/AddGiftName";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login-page" component={LoginPage} />
        <Route exact path="/add-gift-name" component={AddGiftName} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
