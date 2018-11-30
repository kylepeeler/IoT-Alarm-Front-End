import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ModuleList from "../components/ModuleList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  }
});

function ModuleSettings(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        Drag modules from inactive to active to display it on your alarm. You
        can only have 4 active modules at a time.
      </Typography>
      <br />
      <ModuleList />
    </div>
  );
}

ModuleSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModuleSettings);
