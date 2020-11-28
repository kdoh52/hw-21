import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: 40,
        width: '25ch',
      },
    },
    button: {
        height: 55,
        width: '25ch',
        marginLeft: 10
    }
}));

export default function SearchBar() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search Books" variant="outlined" />
            <Button className={classes.button} variant="contained" color="primary">
                Search
            </Button>
        </form>
    );
}
