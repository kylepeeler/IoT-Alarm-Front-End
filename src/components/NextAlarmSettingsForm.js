import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { CirclePicker } from "react-color";
import displayColors from "../helpers/displayColors";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: "30px"
  },
  colorHeader: {
    marginBottom: "5px"
  },
  modal: {
    backgroundColor: "#f5f5f5"
  }
});

class NextAlarmSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      displayAsCountdown: false
    };
  }

  handleChangeColor = color => {
    this.setState({ color: color.rgb });
  };

  handleChangeDisplayFormat = event => {
    this.setState({ displayAsCountdown: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.modal}>
        <FormLabel component="legend">Display Format</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.displayAsCountdown}
                onChange={this.handleChangeDisplayFormat}
                value="displayAsCountdown"
              />
            }
            label="Display as countdown until next alarm?"
          />
          <FormLabel variant="subtitle2" className={classes.colorHeader}>
            Display Color
          </FormLabel>
          <CirclePicker
            colors={displayColors}
            onChange={this.handleChangeColor}
            color={this.state.color}
          />
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          fullWidth
        >
          Update
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(NextAlarmSettingsForm);
