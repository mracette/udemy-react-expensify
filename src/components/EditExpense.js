import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch( editExpense(props.expense.id, expense) );
                    props.history.push('/');
                }}
            />
            <button onClick = {() => {
                props.dispatch(removeExpense(props.expense.id));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log(state.expenses);
    return {
        expense: state.expenses.find((expense) => {
            console.log(expense);
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditExpense);