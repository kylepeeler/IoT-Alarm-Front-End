import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Paper, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ModuleListItem from "../components/ModuleListItem";
import TimeSettingsForm from "../components/TimeSettingsForm";
import DateSettingsForm from "../components/DateSettingsForm";
import NextAlarmSettingsForm from "../components/NextAlarmSettingsForm";
import WeatherSettingsForm from "../components/WeatherSettingsForm";
import TextSettingsForm from "../components/TextSettingsForm";
import toUppercase from "../helpers/toUpper";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    paper: {
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

const getSettingsPaneforModule = (moduleName) =>{
            switch (moduleName) {
                case 'time': return <TimeSettingsForm apiKey={moduleName}/>;
                case 'nextalarm': return <NextAlarmSettingsForm apiKey={moduleName}/>;
                case 'date': return <DateSettingsForm apiKey={moduleName}/>;
                case 'weather': return <WeatherSettingsForm apiKey={moduleName}/>;
                case 'text': return <TextSettingsForm apiKey={moduleName}/>;
                default: return null;
            }
}
const ModuleListColumn = (props) => (
    <Grid item xs={12} sm={6}>
            <Typography variant="h6">{toUppercase(props.columnId)}</Typography>
                 <Paper className={props.classes.paper}>
                     <List>
                         {props.modules.map((moduleName)=>{
                             //TODO: fix hack to get next alarm to be two words, change the API name or create a map of api names to module names (for only one??)
                             return (<ModuleListItem apiName={moduleName} displayName={moduleName == 'nextalarm' ? 'Next Alarm' : toUppercase(moduleName)} active={props.columnId === 'active' ? true: false} key={moduleName}>
                                 {getSettingsPaneforModule(moduleName)}                               
                             </ModuleListItem>);
                         })}
                     </List>
                 </Paper>
             </Grid>
);

export default withStyles(styles)(ModuleListColumn);
