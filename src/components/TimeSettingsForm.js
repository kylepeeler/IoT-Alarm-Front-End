import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { CirclePicker } from "react-color";
import displayColors from "../helpers/displayColors";
import { patchData, updateStateFromAPI } from "../helpers/apiHelpers";

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

class TimeSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      format24: false
    };
  }
  componentDidMount() {
    updateStateFromAPI(this)
  }

  handleUpdateSettings = () => {
    console.log('handled updated settings');
    patchData(this.props.apiKey, {...this.state});
    this.props.closeModal();
  }

  handleChangeColor = color => {
    this.setState({ color: color.rgb });
  };

  handleChangeFormat = event => {
    this.setState({ format24: event.target.checked });
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
                checked={this.state.format24}
                onChange={this.handleChangeFormat}
                value="format24"
              />
            }
            label="Display as 24-hour time?"
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
          onClick={this.handleUpdateSettings}

        >
          Update
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(TimeSettingsForm);
