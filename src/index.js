import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"


//redux
import configureStore from './store/configureStore'
import {increment, decrement,reset,incrementBy} from './action/count'
import {Provider} from 'react-redux'


const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementBy(10))
store.dispatch(reset())

const ele=(
    <Provider store = {store}>
        <App />
    
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));

