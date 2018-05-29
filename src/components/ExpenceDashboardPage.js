import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenceDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />    
    </div>
);

export default ExpenceDashboardPage;