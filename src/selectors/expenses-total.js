
export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
        const amounts = expenses.map((expense) => {
            return expense.amount;
        });
        const total = amounts.reduce((a,b) => {
            return a + b;
        });
        return total;
    }
}