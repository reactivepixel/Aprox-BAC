import {connect} from 'react-redux';
import React from 'react';

import * as actionCreators from '../action_creators';

import DrinkInput from './DrinkInput';
import Bar from './Bar';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div>
      <section id="container">
        <DrinkInput info={this.props.drinkTypes} changeFilter={this.props.changeFilter} />
        <Bar bacPercent="35" bac=".06" numOfDrinks="4" />
      </section>
    </div>
  }
};


function mapStateToProps(state){
    return {
      drinkTypes: state.get('drinkTypes'),
      filter: state.get('filter')
    }
}

export const DashboardContainer = connect(mapStateToProps, actionCreators)(Dashboard);
