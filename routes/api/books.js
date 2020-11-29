const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// matches with "/api/books/add"
// router.route("/add")
//   .post(booksController.create);

// matches with "/api/books/add"
router.route("/:id")
  .delete(booksController.remove);
  
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
