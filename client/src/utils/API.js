import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        console.log("THIS IS BOOK DATA", bookData)
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};