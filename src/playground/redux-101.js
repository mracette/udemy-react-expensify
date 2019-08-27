import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ( { amount = 1 } ) => (
    {
        type: 'INCREMENT', 
        amount
    }
);

const decrementCount = ( { amount = 1 } ) => (
    {
        type: 'DECREMENT', 
        amount
    }
);

const setCount = ( { amount } ) => (
    {
        type: 'SET',
        amount
    }
);

const resetCount = () => (
    {
        type: 'RESET'
    }
);

const countReducer = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.amount
            };
        case 'DECREMENT':
            return {
                count: state.count - action.amount
            };
        case 'SET':
            return {
                count: action.amount
            };
        case 'RESET':
            return {
                count: 0
            };
    }
    return state;
});

store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch( incrementCount({ amount: 5 }));
store.dispatch( incrementCount({}) );
store.dispatch( incrementCount({ amount: 5 }));
store.dispatch( decrementCount({ amount: 10 }))
store.dispatch( setCount({ amount: 100 }));
store.dispatch( resetCount() );