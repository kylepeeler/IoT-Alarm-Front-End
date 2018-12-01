import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ModuleListColumn from "./ModuleListColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { BASE_URL, patchData } from '../helpers/apiHelpers';

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
        time: -1,
        nextalarm: -1,
        date: -1,
        weather: -1,
        text: -1
      },
      columnOrder: ["active", "inactive"]
    };
  }
  
  componentDidMount() {
    fetch(BASE_URL + '/modules', {
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ modules: data })
      });
  }

  getModules = moduleId => {
    if (moduleId === "active") {
      return this.getActiveModules(this.state.modules);
    } else if (moduleId === "inactive") {
      return this.getInactiveModules(this.state.modules);
    } else return null;
  };

  getActiveModules = modules => {
    return Object.keys(modules)
      .filter(key => {
        return modules[key] >= 0 && modules[key] <= 3;
      })
      .sort((a, b) => {
        return modules[a] - modules[b];
      });
  };

  getInactiveModules = modules => {
    return Object.keys(modules).filter(value => {
      return modules[value] < 0 || modules[value] > 3;
    });
  };

  onDragEnd = result => {
    // TODO: reorder our column
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (destination.droppableId === "inactive") {
      //Set the state as inactive
      var newState = {
        ...this.state.modules,
        [draggableId]: -1
      };
      this.setState({
        modules: newState
      }, () => {
        console.log({ ...this.state.modules });
        patchData('modules', { ...this.state.modules })
      });
    }

    if (
      //Inactive -> Active, Cancel the drag if we already have 4 active modules
      destination.droppableId === "active" &&
      source.droppableId === "inactive" &&
      this.getActiveModules(this.state.modules).length === 4
    ) {
      return;
    } else if (
      //Else we are moving from Inactive -> Active
      destination.droppableId === "active" &&
      source.droppableId === "inactive" &&
      this.getActiveModules(this.state.modules).length < 4
    ) {
      let newModules = this.getActiveModules(this.state.modules);
      newModules.splice(destination.index, 0, draggableId);
      let newState = {
        ...this.state.modules
      };
      newModules.forEach(moduleName => {
        newState[moduleName] = newModules.indexOf(moduleName);
      });
      this.setState({ modules: newState }, () => {
        console.log({ ...this.state.modules });
        patchData('modules', { ...this.state.modules })
      });
    }

    if (
      // Reordering within Active Modules
      destination.droppableId === "active" &&
      source.droppableId === "active"
    ) {
      let newModules = this.getActiveModules(this.state.modules);
      newModules.splice(source.index, 1);
      newModules.splice(destination.index, 0, draggableId);
      let newState = {
        ...this.state.modules
      };
      newModules.forEach(moduleName => {
        newState[moduleName] = newModules.indexOf(moduleName);
      });
      this.setState({ modules: newState }, ()=>{
          console.log({...this.state.modules});
          patchData('modules', { ...this.state.modules })
      });
    }

     
    //TODO: update position on the server
  };

  render() {
    return (
      <Grid container spacing={24}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map(columnId => {
            const modules = this.getModules(columnId);
            return (
              <ModuleListColumn
                modules={modules}
                columnId={columnId}
                key={columnId}
                indexes={this.state.modules}
              />
            );
          })}
        </DragDropContext>
      </Grid>
    );
  }
}

export default withStyles(styles)(ModuleList);
