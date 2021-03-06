import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Google Books
                </Typography>
                <Button color="inherit" component={Link} to="/">Saved</Button>
                <Button color="inherit" component={Link} to="/search">Search</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
