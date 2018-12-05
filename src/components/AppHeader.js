import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 64
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const AppHeader = props => (
  <div className={props.classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={props.classes.grow}
        >
          IoT Alarm Clock
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Alarms
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Modules
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(AppHeader);
