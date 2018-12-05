import React, { Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";

import AppHeader from "./components/AppHeader";
import ModuleSettings from "./pages/ModuleSettings.js";
import AlarmsList from './pages/AlarmsList.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Alarms = () => <h2>Alarms will go here</h2>;

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

const App = ({ classes }) => (
  <Router>
    <Fragment>
      <CssBaseline />
      <AppHeader/>
      <main className={classes.main}>
        <Route path="/" exact component={ModuleSettings} />
        <Route path="/alarms" exact component={AlarmsList} />
      </main>
    </Fragment>
  </Router>
);

export default withStyles(styles)(App);
