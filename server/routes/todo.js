const express = require("express");
const router = express.Router();
const TodoCtrl = require("../controllers/todo");

router.post("/", TodoCtrl.createTodo);
router.get("/", TodoCtrl.getAllTodos);
router.get("/:id", TodoCtrl.getTodo);
router.put("/:id", TodoCtrl.updateTodo);
router.delete("/:id", TodoCtrl.deleteTodo);
router.put("/com/:id", TodoCtrl.completeTodo);
router.get("/com/all", TodoCtrl.CompleteAllTodos);
router.get("/com/clr", TodoCtrl.clearCompleted);

module.exports = router;
