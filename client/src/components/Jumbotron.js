import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    title: {
        marginTop: 40
    },
    headline: {
        marginTop: 15,
        marginBottom: 25
    },
    container: {
        margin: 40,
        border: '2px solid',
        backgroundColor: "#e6e6e6",
        borderRadius: "20px"
    }
}))

export default function Search() {
    let classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant='h3' align="center">
                Google Book Search
            </Typography>
            <Typography className={classes.headline} variant='h5' align="center">
                Search for and Save Books of Interest
            </Typography>
        </div>
    )
}
