function ExpenseTracker() {
    let expenses = []; 
    
    return {
        addExpense: function (amount, category) {
            expenses.push({ amount, category, date: new Date().toLocaleDateString() });
            console.log(`Added: $${amount} to ${category}`);
        },
        getTotal: function () {
            return expenses.reduce((sum, expense) => sum + expense.amount, 0);
        },
        filterByCategory: function (category) {
            return function () {
                return expenses.filter(expense => expense.category === category);
            };
        },
        displayExpenses: function () {
            console.log("All Expenses:");
            expenses.forEach(expense => {
                console.log(`${expense.date} - $${expense.amount} [${expense.category}]`);
            });
        }
    };
}
const myTracker = ExpenseTracker();
myTracker.addExpense(50, "Food");
myTracker.addExpense(100, "Shopping");
myTracker.addExpense(20, "Food");
myTracker.addExpense(200, "Rent");

console.log("Total Expenses:", myTracker.getTotal());

const foodExpenses = myTracker.filterByCategory("Food");
console.log("Food Expenses:", foodExpenses());

myTracker.displayExpenses();
