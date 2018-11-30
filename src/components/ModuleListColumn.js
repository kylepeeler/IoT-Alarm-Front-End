import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import Module from "../components/Module";
import TimeSettingsForm from "../components/TimeSettingsForm";
import DateSettingsForm from "../components/DateSettingsForm";
import NextAlarmSettingsForm from "../components/NextAlarmSettingsForm";
import WeatherSettingsForm from "../components/WeatherSettingsForm";
import TextSettingsForm from "../components/TextSettingsForm";
import toUppercase from "../helpers/toUpper";
import { withStyles } from "@material-ui/core/styles";
import { Droppable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";


const styles = theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  }
});

const getSettingsPaneforModule = moduleName => {
  switch (moduleName) {
    case "time":
      return <TimeSettingsForm apiKey={moduleName} />;
    case "nextalarm":
      return <NextAlarmSettingsForm apiKey={moduleName} />;
    case "date":
      return <DateSettingsForm apiKey={moduleName} />;
    case "weather":
      return <WeatherSettingsForm apiKey={moduleName} />;
    case "text":
      return <TextSettingsForm apiKey={moduleName} />;
    default:
      return null;
  }
};

class ModuleListColumn extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const { props } = this;

    return (
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">{toUppercase(props.columnId)}</Typography>
        <Droppable droppableId={props.columnId}>
          {(provided) => (
            <Paper className={props.classes.paper} {...provided.droppableProps}>
            <RootRef rootRef={provided.innerRef}>
              <List style={{minHeight: '60px'}}>
                {props.modules.map(moduleName => {
                  //TODO: fix hack to get next alarm to be two words, change the API name or create a map of api names to module names (for only one??)
                  return (
                    <Module
                      apiName={moduleName}
                      displayName={
                        moduleName === "nextalarm"
                          ? "Next Alarm"
                          : toUppercase(moduleName)
                      }
                      active={props.columnId === "active" ? true : false}
                      key={moduleName}
                      index={props.indexes[moduleName]}
                    >
                      {getSettingsPaneforModule(moduleName)}
                    </Module>
                  );
                })}
              </List>
              </RootRef>
                {props.modules.length === 0 ? <Typography variant="body2" style={{position: 'relative', bottom: '30px'}}>{"Drag modules here to add them to the alarm clock."}</Typography> : ""}
            </Paper>
          )}
        </Droppable>
      </Grid>
    );
  }
}

export default withStyles(styles)(ModuleListColumn);
