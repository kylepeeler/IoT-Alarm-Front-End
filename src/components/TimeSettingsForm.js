import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class TimeSettingsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'somevalue',
            format24: false
        };
    }
    render(){
        const { classes } = this.props;

        return <Button variant="contained" color="primary" className={classes.button}>
            Update
      </Button>
    }
}
export default withStyles(styles)(TimeSettingsForm);