import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Paper, Grid, Typography } from "@material-ui/core";
import toUppercase from '../helpers/toUpper';
import ModuleListColumn from './ModuleListColumn';

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
   

  render() {
    const { props } = this;
      return (<Grid container spacing={24}>{this.state.columnOrder.map((columnId) => {
            const modules = this.getModules(columnId);
            return <ModuleListColumn modules={modules} columnId={columnId} key={columnId}/>
        })}</Grid>)
    }
}


export default withStyles(styles)(ModuleList);
