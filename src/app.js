import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 5000, createdAt: 200 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 7500, createdAt: 2200 }));
// store.dispatch(addExpense({ description: 'Gifts', amount: 240, createdAt: 7000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 1200, createdAt: 1200 }));
// // store.dispatch(setTextFilter('gift'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
