import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Book from "./Book";


let bookArray;


function breakdownResponse(data) {
    let items = data;

    let newArray = [];

    console.log(items)
    console.log(newArray)
}

const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px",
        marginLeft: "40px"
    }
}))


// const [bookArray, setBookArray] = useState([])

const options = {
    method: 'GET',
    url: 'https://www.googleapis.com/books/v1/volumes?q=potter&key=AIzaSyAAIPs_eEsE9tTb_Gkuh0AlJ3Kvk1055UU',
    // params: {q: 'Harry Potter', media: 'True', lang: 'en'},
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data.items);
      bookArray = response.data.items;
    //   setBookArray(response.data.items);
    //   breakdownResponse(response.data.items);
  }).catch(function (error) {
      console.error(error);
});


export default function SearchResults() {
    let classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant='h4'>
                Results
            </Typography>
            <Book 
                // title={item.title}
                // summary={item.summary}
                // date={item.date}
            />
        </div>
    )
}
