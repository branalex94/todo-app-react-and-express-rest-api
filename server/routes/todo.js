const router = require("express").Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").patch(updateTodo).delete(deleteTodo);

module.exports = router;
