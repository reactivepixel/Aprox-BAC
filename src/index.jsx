import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {DashboardContainer} from './components/Dashboard';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// instance the Redux Store
const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    name: "John Doe",
    facebookID: null,
    location: null,
    alcLevel: 0,
    drinksConsumed: [],
    drinkTypes: [
    {
    	type: "Beer",
    	bac: .05,
    	mods: ["A", "B", "C"]
    },
    {
    	type: "Wine",
    	bac: .12,
    	mods: ["A", "B", "C"]
    },
    {
    	type: "Shot",
    	bac: .4,
    	mods: ["A", "B", "C"]
    },
    {
      type: "Cocktail",
      bac: .4,
    	mods: ["A", "B", "C"]
    }
    ],
    driveStatus: true
  }
});

// Test of add drink with structure
// store.dispatch({
//   type: 'ADD_DRINK',
//   drink:{
//       type: 'Beer',
//       time: new Date(),
//       activeMods: ["A"]
//   }
// });

import './client/assets/bs3/css/bootstrap.min.css';
import './client/assets/css/bootstrap-reset.css';

import './client/assets/css/style.css';
import './client/assets/css/style-responsive.css';
import './client/assets/css/bootstrap-reset.css';

ReactDOM.render(
    // Redux wrapps a Provider around the app.
    <Provider store={store}>
      <DashboardContainer />
    </Provider>,
    document.getElementById('app')
);
