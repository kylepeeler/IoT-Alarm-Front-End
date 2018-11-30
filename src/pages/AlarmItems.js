import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography} from '@material-ui/core';
import List from "@material-ui/core/List";
import ModuleListItem from '../components/ModuleListItem';
import TimeSettingsForm from '../components/TimeSettingsForm';

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
        <Typography variant="subtitle1">
          Drag modules from inactive to active to display it on your alarm. You can only have 4 active modules at a time.
        </Typography>
        <br/>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Active Modules</Typography>
            <Paper className={classes.paper}>
              <List>
                <ModuleListItem apiName="Time" active>
                    <TimeSettingsForm/>
                </ModuleListItem>
                <ModuleListItem apiName="Alarm" displayName="Next Alarm Time" active/>
                <ModuleListItem apiName="Date" active/>
                <ModuleListItem apiName="Weather" active/>
              </List>
            </Paper>
          </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6">Inactive Modules</Typography>
                <Paper className={classes.paper}>
                    <List>
                        <ModuleListItem apiName="Text"/>
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