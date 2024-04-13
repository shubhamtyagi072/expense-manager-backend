const express = require("express");
const { signUp, login } = require("../controller/SignUp");
const { expense } = require("../controller/Expense");
const ExpenseModel = require("../models/Expense");
const { MONTH, getMonth } = require("../utlils/getmonth");

const route = express.Router();

route.post("/signUp", signUp);
route.post("/login", login);
route.post("/expense", expense);
route.post("/delete-expense", async (req, res) => {
  const result = await ExpenseModel.deleteOne({ _id: req.body.id });
  res.send("removed succesffuly");
});
route.post("/expense-month", async (req, res) => {
  try {
    const result = await ExpenseModel.find({
      user_id: req.body.user_id,
      // month: getMonth(req.body.month),
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }

  console.log({
    user_id: req.body.user_id,
    month: getMonth(req.body.month),
  });
});
route.post("/expense-year", () => {});
route.post("/user-expense", async (req, res) => {
  var currentMonth = new Date().getMonth();
  const result = await ExpenseModel.find({
    user_id: req.body.user_id,
    month: getMonth(currentMonth),
  });
  res.send(result);
});

module.exports = route;
