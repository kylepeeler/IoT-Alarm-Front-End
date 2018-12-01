import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
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
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={props.classes.grow}
        >
          IoT Alarm Clock
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Modules
        </Button>
        <Button color="inherit" component={Link} to="/alarms">
          Alarms
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(AppHeader);
