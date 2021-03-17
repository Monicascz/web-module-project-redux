import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//STEP 1: install dependencies - npm i redux react-redux
//STEP 1: import createStore
import {createStore} from 'redux'
//STEP 4: import reducer from react-redux
import {reducer} from './reducers/index'
import {Provider} from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.css';

//STEP 2: create store ... you will need the reducer which you import above from the reducer you create. 
//STEP 3: create a reducer in a reducers folder.
const store= createStore(reducer)

const rootElement = document.getElementById('root');

//STEP 5: wrap your App in a provider and give it access to the store as props. (Remember to import Provider above from react-redux.)
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement);
