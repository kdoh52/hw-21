import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px",
        marginLeft: "40px",
        marginBottom: "7px"
    },
    author: {
        marginLeft: "40px",
        marginBottom: "7px"
    },
    image: {
        marginLeft: "40px",
        marginBottom: "7px"
    },
    description: {
        marginTop: "10px",
        marginLeft: "40px",
        marginRight: "40px"
    },
    link: {
        marginTop: "10px",
        marginLeft: "40px"
    }
}))

export default function Book(props) {
    let classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant='h5'>
                {props.title}
            </Typography>
            <Typography className={classes.author} variant='h6'>
                {props.author}
            </Typography>
            <img src={props.image} className={classes.image}></img>
            <br></br>
            <p className={classes.description}>
                {props.description}
            </p>
            <a href={props.link} className={classes.link}>View Info</a>
        </div>
    )
}
