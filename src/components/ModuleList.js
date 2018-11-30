import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Paper, Grid, Typography } from "@material-ui/core";
import toUppercase from '../helpers/toUpper';
import ModuleListItem from "../components/ModuleListItem";
import TimeSettingsForm from "../components/TimeSettingsForm";
import DateSettingsForm from "../components/DateSettingsForm";
import NextAlarmSettingsForm from "../components/NextAlarmSettingsForm";
import WeatherSettingsForm from "../components/WeatherSettingsForm";
import TextSettingsForm from "../components/TextSettingsForm";
const styles = theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});



class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: {
        time: 1,
        nextalarm: 2,
        date: 3,
        weather: 4,
        text: -1
      },
      columnOrder: ['active', 'inactive']
    };
  }

  componentDidMount() {
    // this.setState({
    //   columns: { active: this.getActiveModules(this.state.modules), inactive: this.getInactiveModules(this.state.modules) }
    // });
  }

  getModules = moduleId => {
    if (moduleId == 'active'){
        return this.getActiveModules(this.state.modules);
    }else if (moduleId == 'inactive'){
        return this.getInactiveModules(this.state.modules);
    }else return null;
  }

  getActiveModules = modules => {
    return Object.keys(modules).filter(key => {
      return modules[key] >= 1 && modules[key] <= 4;
    });
  };

  getInactiveModules = modules => {
    return Object.keys(modules).filter(value => {
      return modules[value] < 1 || modules[value] > 4;
    });
  };

  handleOpenSettings = () => {
    this.setState({ settingsOpen: true });
  };

  handleClose = () => {
    this.setState({ settingsOpen: false });
  };

    getSettingsPaneforModule = (moduleName) =>{
            switch (moduleName) {
                case 'time': return <TimeSettingsForm apiKey={moduleName}/>;
                case 'nextalarm': return <NextAlarmSettingsForm apiKey={moduleName}/>;
                case 'date': return <DateSettingsForm apiKey={moduleName}/>;
                case 'weather': return <WeatherSettingsForm apiKey={moduleName}/>;
                case 'text': return <TextSettingsForm apiKey={moduleName}/>;
                default: return null;
            }
    }

  render() {
    const { props } = this;
      return (<Grid container spacing={24}>{this.state.columnOrder.map((columnId) => {
            const modules = this.getModules(columnId);
            const columnName = toUppercase(columnId)
            return (<Grid item xs={12} sm={6} key={columnId}>
                <Typography variant="h6">{columnName}</Typography>
                <Paper className={props.classes.paper}>
                    <List>
                        {modules.map((moduleName)=>{
                            //TODO: fix hack to get next alarm to be two words, change the API name or create a map of api names to module names (for only one??)
                            return (<ModuleListItem apiName={moduleName} displayName={moduleName == 'nextalarm' ? 'Next Alarm' : toUppercase(moduleName)} active={columnId === 'active' ? true: false} key={moduleName}>
                                {this.getSettingsPaneforModule(moduleName)}                               
                            </ModuleListItem>);
                        })}
                    </List>
                </Paper>
            </Grid>)
        })}</Grid>)
    }
}


export default withStyles(styles)(ModuleList);
