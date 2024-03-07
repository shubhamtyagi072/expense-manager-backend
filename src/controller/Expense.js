const ExpenseModel = require("../models/Expense");
const { getMonth } = require("../utlils/getmonth");
const fs = require("node:fs");

exports.expense = async (req, res) => {
  try {
    req.body.month = getMonth(req.body.month);
    fs.writeFile("./Expense.txt", "utf-8", (err) => {
      console.log(err);
    });
    const expen = new ExpenseModel(req.body);
    const result = await expen.save();
    res.send(result);
  } catch (err) {
    res.status("500");
  }
};
