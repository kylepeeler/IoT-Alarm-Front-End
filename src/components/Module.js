import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { DragHandle, Settings } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import {Draggable} from 'react-beautiful-dnd';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        settingsOpen: false,
    }
  }

  handleOpenSettings = () => {
      this.setState({settingsOpen: true});
  }

  handleClose = () => {
      this.setState({settingsOpen: false})
  }

  render() {
    const { props } = this;

    return <Draggable draggableId={props.apiName} index={props.index}>
        {(provided, snapshot) => <div {...provided.draggableProps} ref={provided.innerRef}>
            <ListItem style={snapshot.isDragging ? { backgroundColor: "#f5f5f5" } : { backgroundColor: "white" }}>
              <div {...provided.dragHandleProps}>
              <ListItemIcon>
                <DragHandle />
              </ListItemIcon>
              </div>
              <ListItemText primary={props.displayName || props.apiName} />
              {props.active && <ListItemSecondaryAction>
                  <IconButton aria-label="Open Settings" onClick={this.handleOpenSettings}>
                    <Settings />
                  </IconButton>
                </ListItemSecondaryAction>}
            </ListItem>
            <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={this.state.settingsOpen} onClose={this.handleClose}>
              <div style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#f5f5f5" }} className={props.classes.paper}>
                {props.children}
              </div>
            </Modal>
          </div>}
      </Draggable>;
  }
}

export default withStyles(styles)(Module);
