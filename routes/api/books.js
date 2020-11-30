const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// matches with "/api/books/add"
router.route("/:id")
  .delete(booksController.remove);
  

module.exports = router;
