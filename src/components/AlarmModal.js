import React, { Component } from 'react';
import TimeInput from "material-ui-time-picker";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});


class AlarmModal extends Component {
    render() {
        return (
            <div>
                <TimeInput
                    placeholder={this.props.placeholder}
                    mode='12h'
                    onChange={(time) => console.log(time)}
                />
            </div>
        );
    }
}

export default withStyles(styles)(AlarmModal);