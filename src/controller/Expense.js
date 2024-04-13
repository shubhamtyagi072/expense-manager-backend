const ExpenseModel = require("../models/Expense");
const { getMonth } = require("../utlils/getmonth");
const fs = require("node:fs");

exports.expense = async (req, res) => {
  console.log(req.body);
  try {
    req.body.month = getMonth(Number(req.body.month));
    // fs.writeFile("./Expense.txt", "utf-8", (err) => {
    //   console.log(err);
    // });
    console.log(req.body);
    const expen = new ExpenseModel(req.body);
    const result = await expen.save();
    res.send(result);
  } catch (err) {
    res.status("500");
  }
};
