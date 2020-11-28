import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Book from "./Book";




const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px",
        marginLeft: "40px"
    }
}))


function Books () {
    let classes = useStyles();

    const [books, setBooks] = useState([])

    useEffect(() => {
        searchBooks()
    }, [])
    
    function searchBooks() {
        const options = {
            method: 'GET',
            url: 'https://www.googleapis.com/books/v1/volumes?q=potter&key=AIzaSyAAIPs_eEsE9tTb_Gkuh0AlJ3Kvk1055UU',
            // params: {q: 'Harry Potter', media: 'True', lang: 'en'},
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data.items);
            setBooks(response.data.items);
            //   breakdownResponse(response.data.items);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <Typography className={classes.title} variant='h4'>
                Results
            </Typography>
        {books.map(book => (
            <Book 
                key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
            />
        ))}
        </div>
    )

}

export default Books;
