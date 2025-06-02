document.addEventListener('DOMContentLoaded', () => {
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const addExpenseBtn = document.getElementById('add-expense-btn');
    const expensesTableBody = document.querySelector('#expenses-table tbody');
    const calculateBtn = document.getElementById('calculate-btn');
    const totalExpensesSpan = document.getElementById('total-expenses');
    const avgDailyExpenseSpan = document.getElementById('avg-daily-expense');
    const topExpensesList = document.getElementById('top-expenses-list');

    let expenses = [];

    // Pre-populate with example data
    const exampleExpenses = [
        { category: 'Groceries', amount: 15000 },
        { category: 'Rent', amount: 40000 },
        { category: 'Transportation', amount: 5000 },
        { category: 'Entertainment', amount: 10000 },
        { category: 'Communication', amount: 2000 },
        { category: 'Gym', amount: 3000 },
    ];

    exampleExpenses.forEach(expense => {
        expenses.push(expense);
        addExpenseToTable(expense);
    });

    addExpenseBtn.addEventListener('click', () => {
        const category = categoryInput.value.trim();
        const amount = parseFloat(amountInput.value);

        if (category === '' || isNaN(amount) || amount <= 0) {
            alert('Please enter a valid category and amount.');
            return;
        }

        const newExpense = { category, amount };
        expenses.push(newExpense);
        addExpenseToTable(newExpense);

        categoryInput.value = '';
        amountInput.value = '';
    });

    calculateBtn.addEventListener('click', () => {
        if (expenses.length === 0) {
            alert('Please add some expenses first.');
            return;
        }

        const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalExpensesSpan.textContent = `${totalAmount.toLocaleString()} $`;

        const avgDailyExpense = totalAmount / 30; // Assuming 30 days in a month
        avgDailyExpenseSpan.textContent = `${avgDailyExpense.toLocaleString(undefined, { maximumFractionDigits: 2 })} $`;

        const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
        topExpensesList.innerHTML = ''; // Clear previous list
        for (let i = 0; i < Math.min(3, sortedExpenses.length); i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `${sortedExpenses[i].category} (${sortedExpenses[i].amount.toLocaleString()} $)`;
            topExpensesList.appendChild(listItem);
        }
    });

    function addExpenseToTable(expense) {
        const row = expensesTableBody.insertRow();
        const categoryCell = row.insertCell();
        const amountCell = row.insertCell();

        categoryCell.textContent = expense.category;
        amountCell.textContent = expense.amount.toLocaleString();
    }
}); 