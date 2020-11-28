import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px",
        marginLeft: "40px"
    }
}))


export default function SavedBooks() {
    let classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant='h4'>
                Saved Books
            </Typography>
        </div>
    )
}
