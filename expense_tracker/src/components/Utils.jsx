export default function Sum(transactions){
    let totalIncome =0;
    let totalExpense = 0;
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].type==='income'){
            totalIncome+=transactions[i].amount;
        }
        else if(transactions[i].type==='expense'){
            totalExpense += transactions[i].expense;
        }
        return {totalIncome:totalIncome,totalExpense:totalExpense};
    }
}