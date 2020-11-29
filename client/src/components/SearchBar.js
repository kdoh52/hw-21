import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from "./Book";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddBtn from "./AddBtn";

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
    },
    title: {
        margin: "20px",
        marginLeft: "40px"
    }
}));



function Books () {
    let classes = useStyles();

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     searchBooks("harry potter")
    // }, [])
    
    function searchBooks(query) {
        const options = {
            method: 'GET',
            url: 'https://www.googleapis.com/books/v1/volumes?q='+ query +'&key=AIzaSyAAIPs_eEsE9tTb_Gkuh0AlJ3Kvk1055UU',
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

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleSearch(event) {
        event.preventDefault();
        console.log("EVENT: ", event);
        console.log(formObject.title);
        searchBooks(formObject.title);
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    label="Search Books"
                    variant="outlined"
                    onChange={handleInputChange}
                    name="title"
                />
                <Button className={classes.button} variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </form>

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



// export default function SearchBar() {
//     const classes = useStyles();

//     return (
//         <form className={classes.root} noValidate autoComplete="off">
//             <TextField id="outlined-basic" label="Search Books" variant="outlined" />
//             <Button className={classes.button} variant="contained" color="primary">
//                 Search
//             </Button>
//         </form>
//     );
// }
