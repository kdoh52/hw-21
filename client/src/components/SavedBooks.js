import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import API from "../utils/API";
import Book from "./Book";


const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px",
        marginLeft: "40px"
    }
}))


function SavedBooks() {
    let classes = useStyles();
    const [books, setBooks] = useState([])


    useEffect(() => {
        searchDatabase()
    }, [])

    function searchDatabase() {
        API.getBooks()
        .then(res => 
            setBooks(res.data)
        ).catch(err => console.log(err));
    }
    

    return (
        <div>
            <Typography className={classes.title} variant='h4'>
                Saved Books
            </Typography>
            {console.log(books)}
            {books.map(book => (
                <Book 
                    key={book._id}
                    title={book.title}
                    author={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                />
            ))}
        </div>
    )
}

export default SavedBooks;