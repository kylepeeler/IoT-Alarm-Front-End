import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {DragHandle, Settings} from "@material-ui/icons";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import IconButton from "@material-ui/core/IconButton"



class ModuleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props,
    } = this;

    return (
      <ListItem>
        <ListItemIcon>
          <DragHandle />
        </ListItemIcon>
        <ListItemText primary={props.name} />
            {props.active &&
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                    <Settings />
                </IconButton>
            </ListItemSecondaryAction>}
      </ListItem>
    );
  }
}

export default ModuleListItem;