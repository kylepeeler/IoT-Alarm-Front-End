import React, { Component } from "react";
import TimeInput from "material-ui-time-picker";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Paper, Grid, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { BASE_URL } from "../helpers/apiHelpers";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  checkbox: {
    marginBottom: -10
  }
});

class AlarmModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name ? this.props.name : "",
      hour: this.props.hour ? this.props.hour : new Date().getHours(),
      min: this.props.min ? this.props.min : new Date().getMinutes(),
      days: {
        monday:
          this.props.days && this.props.days.monday
            ? this.props.days.monday
            : false,
        tuesday:
          this.props.days && this.props.days.tuesday
            ? this.props.days.tuesday
            : false,
        wednesday:
          this.props.days && this.props.days.wednesday
            ? this.props.days.wednesday
            : false,
        thursday:
          this.props.days && this.props.days.thursday
            ? this.props.days.thursday
            : false,
        friday:
          this.props.days && this.props.days.friday
            ? this.props.days.friday
            : false,
        saturday:
          this.props.days && this.props.days.saturday
            ? this.props.days.saturday
            : false,
        sunday:
          this.props.days && this.props.days.sunday
            ? this.props.days.sunday
            : false
      }
    };
    this.submitAlarm = this.submitAlarm.bind(this);
  }

  submitAlarm() {
    if (!this.props.id) {
      fetch(BASE_URL + "/alarms", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(this.state) // body data type must match "Content-Type" header
      }).then(response => response.json()); // parses response to JSON
    } else {
      fetch(BASE_URL + "/alarms/" + this.props.id, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(this.state) // body data type must match "Content-Type" header
      }).then(response => {
        response.json();
        this.props.fetchAlarms();
        this.props.closeModal();
      }); // parses response to JSON
    }
  }

  deleteAlarm() {
      if (this.props.id) {
          fetch(BASE_URL + "/alarms/" + this.props.id, {
              method: "DELETE", // *GET, POST, PUT, DELETE, etc.
              headers: {
                  "Content-Type": "application/json; charset=utf-8"
              },
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          }).then(response => {
              response.json();
              this.props.fetchAlarms();
              this.props.closeModal();
          }); // parses response to JSON
      }
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <FormLabel component="legend">Alarm Time</FormLabel>
          <TimeInput
            placeholder={this.props.placeholder}
            mode="12h"
            defaultValue={
              this.props.id
                ? new Date(new Date().setHours(this.props.hour, this.props.min))
                : new Date()
            }
            onChange={time =>
              this.setState({ hour: time.getHours(), min: time.getMinutes() })
            }
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="alarmName"
            label="Alarm Name"
            margin="normal"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.monday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, monday: e.target.checked }
                    })
                  }
                />
              }
              label="Monday"
            />
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.tuesday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, tuesday: e.target.checked }
                    })
                  }
                  value="tuesday"
                />
              }
              label="Tuesday"
            />
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.wednesday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, wednesday: e.target.checked }
                    })
                  }
                  value="wednesday"
                />
              }
              label="Wednesday"
            />
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.thursday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, thursday: e.target.checked }
                    })
                  }
                  value="thursday"
                />
              }
              label="Thursday"
            />
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.friday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, friday: e.target.checked }
                    })
                  }
                  value="friday"
                />
              }
              label="Friday"
            />
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.saturday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, saturday: e.target.checked }
                    })
                  }
                  value="saturday"
                />
              }
              label="Saturday"
            />
            <FormControlLabel
              className={this.props.classes.checkbox}
              control={
                <Checkbox
                  checked={this.state.days.sunday}
                  onChange={e =>
                    this.setState({
                      days: { ...this.state.days, sunday: e.target.checked }
                    })
                  }
                  value="sunday"
                />
              }
              label="Sunday"
            />
          </FormGroup>
        </Grid>
        <br />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                this.submitAlarm();
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item>
            {this.props.id && (
              <Button
                style={{marginLeft: 25}}
                variant="contained"
                onClick={() => {
                  this.deleteAlarm();
                }}
              >
                Delete
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AlarmModal);
