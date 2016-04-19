import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {AdminContainer} from './components/AdminApp';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// instance the Redux Store
const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    items: [
      {id: 1, name: 'Wand of Wasting', rarity: 'Uncommon', isActive: false, editing: false},
      {id: 2, name: 'Ice laden Sword', rarity: 'Common', isActive: false, editing: true},
      {id: 3, name: 'Orphan\'s Tear', rarity: 'Rare', isActive: false, editing: false}
    ],
    filter: 'all'
  }
});

import './client/assets/bs3/css/bootstrap.min.css';
import './client/assets/css/bootstrap-reset.css';
// Causing errors
// import './client/assets/font-awesome/css/font-awesome.css'
// import 'font-awesome-webpack';

import './client/assets/css/style.css';
import './client/assets/css/style-responsive.css';
import './client/assets/css/bootstrap-reset.css';

ReactDOM.render(
    // Redux wrapps a Provider around the app.
    <Provider store={store}>
      <AdminContainer />
    </Provider>,
    document.getElementById('app')
);
