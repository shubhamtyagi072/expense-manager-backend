const mongoose = require('mongoose')

const Expense = new mongoose.Schema({
    date:String,
    item:String,
    price:Number,
    quantity:Number,
    user_id:String,
    month:String,
    year:String,
    type:String,
    id:String
})

const ExpenseModel = mongoose.model('Expense',Expense)

module.exports = ExpenseModel