const ExpenseModel = require('../models/Expense')
const {getMonth} = require('../utlils/getmonth')

exports.expense = async (req,res) => {
   req.body.month = getMonth(req.body.date.split('-'))
   req.body.year = req.body.date.split('-')[0]
   const expen = new ExpenseModel(req.body)
   const result = await expen.save()
   res.send(result)
}