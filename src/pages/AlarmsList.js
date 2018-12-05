import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AlarmItem from "../components/AlarmItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { BASE_URL } from "../helpers/apiHelpers";
import Modal from "@material-ui/core/Modal";
import AlarmModal from '../components/AlarmModal';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  title: {
    textAlign: "left"
  },
  modal: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    backgroundColor: "#f5f5f5"
  }
});
class AlarmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createAlarmModalOpen: false,
      alarms: []
    };
    this.closeModal.bind(this);
    this.handleOpen.bind(this);
  }

  handleOpen = () => {
    this.setState({ createAlarmModalOpen: true });
  };

  closeModal = () => {
      this.setState({ createAlarmModalOpen: false });
  };

  getAlarms = () => {
    fetch(BASE_URL + "/alarms", {
        cache: "no-cache"
        })
        .then(response => response.json())
        .then(data => {
            console.log("got", data);
            this.setState({ alarms: data });
            this.setState({ createAlarmModalOpen: false });
        });
  }

  componentDidMount() {
    this.getAlarms();
  }

  render() {
    const { props } = this;

    const { classes } = props;
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={16}
        >
          <Typography variant="h4" className={classes.title}>
            Your Alarms
          </Typography>
          {this.state.alarms.map((alarm) => {
            return (
              <Grid item key={alarm._id}>
                <AlarmItem
                  enabled={alarm.enabled}
                  id={alarm._id}
                  hour={alarm.hour}
                  min={alarm.min}
                  name={alarm.name}
                  days={alarm.days}
                  getAlarms={this.getAlarms}
                />
              </Grid>
            );
          })}
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.createAlarmModalOpen}
          onClose={this.getAlarms}
        >
          <div className={classes.modal}>
            <Typography variant="h6" id="modal-title">
              Create a new alarm
            </Typography>
            <br/>
            <AlarmModal placeholder="New alarm time" fetchAlarms={this.getAlarms} closeModal={this.closeModal}/>
          </div>
        </Modal>
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleOpen} >
          <AddIcon/>
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(AlarmsList);
