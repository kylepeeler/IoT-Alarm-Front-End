import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ModuleListColumn from "./ModuleListColumn";
import { DragDropContext } from "react-beautiful-dnd";

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
      columnOrder: ["active", "inactive"]
    };
  }

  getModules = moduleId => {
    if (moduleId === "active") {
      return this.getActiveModules(this.state.modules);
    } else if (moduleId === "inactive") {
      return this.getInactiveModules(this.state.modules);
    } else return null;
  };

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
    //Cancel the drag if we already have 4 active modules
    if (destination.droppableId === 'active' && source.droppableId === 'inactive' && this.getActiveModules(this.state.modules).length === 4) return;

    console.log(result);
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
