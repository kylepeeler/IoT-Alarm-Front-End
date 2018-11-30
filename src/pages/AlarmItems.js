import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography} from '@material-ui/core';
import List from "@material-ui/core/List";
import ModuleListItem from '../components/ModuleListItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
});

function AlarmItems(props) {
    const { classes } = props;

    return <div className={classes.root}>
        <Typography variant="h5">
          Drag modules from inactive to active to display it on your alarm.
        </Typography>
        <br/>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Active Modules</Typography>
            <Paper className={classes.paper}>
              <List>
                <ModuleListItem name="Time" active/>
                <ModuleListItem name="Alarm Countdown" active/>
                <ModuleListItem name="Date" active/>
                <ModuleListItem name="Weather" active/>
              </List>
            </Paper>
          </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Inactive Modules</Typography>
                <Paper className={classes.paper}>
                    <List>
                        <ModuleListItem name="Text"/>
                    </List>
                </Paper>
            </Grid>
        </Grid>
      </div>;
}

AlarmItems.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlarmItems);