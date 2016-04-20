import {connect} from 'react-redux';
import React from 'react';

import * as actionCreators from '../action_creators';

import BacMeter from './BacMeter';
import DrinkInput from './DrinkInput';
import DataCollection from './DataCollection';

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
        <BacMeter {...this.props} bacPercent={85} bacLevel={.06} changeFilter={this.props.changeFilter} />
        <DataCollection {...this.props} changeFilter={this.props.changeFilter} />
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
