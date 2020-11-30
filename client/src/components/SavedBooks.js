import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import API from "../utils/API";
import Book from "./Book";
// import AddedBook from "./AddedBook"
import DeleteBtn from './DeleteBtn';


const useStyles = makeStyles(theme => ({
    title: {
        margin: "20px",
        marginLeft: "40px"
    },
    book: {
        backgroundColor: "red",
        margin: 40,
        marginTop: 20,
        backgroundColor: "#e6e6e6",
        borderRadius: "20px",
        paddingTop: "20px",
        paddingBottom: "40px"
    },
    delete: {
        display: "block",
        marginTop: "10px",
        marginLeft: "40px",
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

    function handleDeleteBook(id) {
        API.deleteBook(id)
        .then(res => searchDatabase())
        .catch(err => console.log(err));
    };
    

    return (
        <div>
            <Typography className={classes.title} variant='h4'>
                Saved Books
            </Typography>
            {console.log(books)}
            {books.map(book => (
                <div className={classes.book}>
                    <Book 
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                    />
                    <div className={classes.delete}>
                        <DeleteBtn  onClick={() => handleDeleteBook(book._id)}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SavedBooks;