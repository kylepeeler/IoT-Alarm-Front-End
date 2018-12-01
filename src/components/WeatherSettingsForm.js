import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import { CirclePicker } from "react-color";
import displayColors from "../helpers/displayColors";
import { BASE_URL, patchData, updateStateFromAPI } from "../helpers/apiHelpers";

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
  },
  textField: {
    marginBottom: "10px"
  }
});

class WeatherSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      city: "Indianapolis"
    };
  }

  componentDidMount() {
    updateStateFromAPI(this)
  }

  handleUpdateSettings = () => {
    console.log('handled updated settings');
    patchData(this.props.apiKey, { ...this.state });
    this.props.closeModal();
  }

  handleChangeColor = color => {
    this.setState({ color: color.rgb });
  };

  handleChangeCity = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.modal}>
        <FormGroup>
          <TextField
            id="city"
            label="City"
            className={classes.textField}
            value={this.state.city}
            onChange={this.handleChangeCity}
            margin="normal"
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
export default withStyles(styles)(WeatherSettingsForm);
