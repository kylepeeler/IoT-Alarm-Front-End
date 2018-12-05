import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import ColorIcon from "@material-ui/icons/Brightness1";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Grid } from "@material-ui/core";
import { getHourObj, rgbToHex } from "../helpers/utilityFunctions";

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    [theme.breakpoints.down("xs")]: {
      minWidth: "inherit"
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "360px"
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "800px"
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "1000px"
    }
  },

  timeText: {
    display: "inline-block"
  },
  amPMText: {
    display: "inline-block",
    paddingLeft: "4px"
  },
  cardContent: {
    marginBottom: -20,
    paddingBottom: 0
  },
  enabledSwitch: {
    float: "right"
  },
  bottomItems: {
    paddingLeft: "5px"
  },
  chip: {
    // ...theme.mixins.gutters(),
    width: 32,
    height: 32,
    fontSize: 10,
    marginRight: 5
  },
  editButton: {
    marginLeft: 3,
    textAlign: "right"
  },
  colorIcon: {
    position: "relative",
    top: 8,
    border: "2px solid #757575",
    borderRadius: "100%"
  }
});

class AlarmItem extends Component {
  constructor(props) {
    super(props);
    console.log(getHourObj(this.props.hour));
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.root} elevation={1}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h3" className={classes.timeText}>
              {getHourObj(this.props.hour).ampmHour}:
              {isNaN(this.props.min)
                ? this.props.min
                : String(this.props.min).padStart(2, "0")}
            </Typography>
            <Typography variant="h6" className={classes.amPMText}>
              {getHourObj(this.props.hour).evening ? "pm" : "am"}
            </Typography>
            <Switch className={classes.enabledSwitch} value="enabled" />
            {this.props.name && <Typography variant="body1">{this.props.name}</Typography>}
          </CardContent>

          <br />
          <CardActions>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.bottomItems}
            >
              <Grid item>
                <Chip
                  label="M"
                  className={classes.chip}
                  color={
                    this.props.days && this.props.days.monday
                      ? "primary"
                      : "default"
                  }
                />
                <Chip
                  label="T"
                  className={classes.chip}
                  color={
                    this.props.days && this.props.days.tuesday
                      ? "primary"
                      : "default"
                  }
                />
                <Chip
                  label="W"
                  className={classes.chip}
                  color={
                    this.props.days && this.props.days.wednesday
                      ? "primary"
                      : "default"
                  }
                />
                <Chip
                  label="Th"
                  className={classes.chip}
                  color={
                    this.props.days && this.props.days.thursday
                      ? "primary"
                      : "default"
                  }
                />
                <Chip
                  label="F"
                  className={classes.chip}
                  color={
                    this.props.days && this.props.days.friday
                      ? "primary"
                      : "default"
                  }
                />
              </Grid>
              <Grid item>
              {this.props.color && 
                <ColorIcon className={classes.colorIcon} style={{color: rgbToHex(this.props.color)}}/>}
                <IconButton className={classes.editButton} aria-label="Delete">
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AlarmItem);
