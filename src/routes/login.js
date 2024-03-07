const express = require("express");
const { login } = require("../controller/Login");
const { expense } = require("../controller/Expense");
const ExpenseModel = require("../models/Expense");

const route = express.Router();
const MONTH = [
  "Jan",
  "Feb",
  "Mar",
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
route.post("/delete-expense", async (req, res) => {});
route.post("/user-expense", async (req, res) => {
  var currentMonth = new Date().getMonth();
  const result = await ExpenseModel.find({
    user_id: req.body.user_id,
    month: MONTH[currentMonth],
  });
  res.send(result);
});

module.exports = route;
