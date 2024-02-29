const express = require("express");
const { login } = require("../controller/Login");
const { expense } = require("../controller/Expense");
const ExpenseModel = require("../models/Expense");

const route = express.Router();

/*
----it used to cfor testing purpose---
route.get("/", (req, res) => {
  res.send("Hello world");
});
*/

/* 
json = {name:"Shubham" , emailId:"shubhamtyagi072@gmail.com"}
*/
route.post("/login", login);
/* 
json = {date:"2022-3-11" , item:"maggie", price:14, quantity:4}
*/
route.post("/expense", expense);
route.post("/user-expense", async (req, res) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var currentMonth = new Date().getMonth();
  const result = await ExpenseModel.find({
    user_id: req.body.user_id,
    month: month[currentMonth],
  });
  console.log(result);
  res.send(result);
});

module.exports = route;
