import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import ModuleListItem from "../components/ModuleListItem";
import TimeSettingsForm from "../components/TimeSettingsForm";
import DateSettingsForm from "../components/DateSettingsForm";
import NextAlarmSettingsForm from "../components/NextAlarmSettingsForm";
import WeatherSettingsForm from "../components/WeatherSettingsForm";
import TextSettingsForm from "../components/TextSettingsForm";
import ModuleList from "../components/ModuleList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  }
});

function AlarmItems(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        Drag modules from inactive to active to display it on your alarm. You
        can only have 4 active modules at a time.
      </Typography>
      <br />
          <ModuleList>
            <ModuleListItem apiName="Time" active>
              <TimeSettingsForm />
            </ModuleListItem>
            <ModuleListItem
              apiName="Alarm"
              displayName="Next Alarm Time"
              active
            >
              <NextAlarmSettingsForm />
            </ModuleListItem>
            <ModuleListItem apiName="Date" active>
              <DateSettingsForm />
            </ModuleListItem>
            <ModuleListItem apiName="Weather" active>
              <WeatherSettingsForm />
            </ModuleListItem>
          </ModuleList>
    </div>
  );
}

AlarmItems.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AlarmItems);
