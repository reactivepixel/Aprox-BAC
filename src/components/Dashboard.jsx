import {connect} from 'react-redux';
import React from 'react';

import * as actionCreators from '../action_creators';


import DrinkInput from './DrinkInput';

import TempComponent from './TempComponent';
import Bar from './Bar';
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
        <DrinkInput {...this.props} changeFilter={this.props.changeFilter} />

        <Bar bacPercent="35" bac=".06" numOfDrinks="4" />
        <TempComponent {...this.props} dispTitle="derp" changeFilter={this.props.changeFilter} />
        <DataCollection {...this.props} changeFilter={this.props.changeFilter} />
      </section>
    </div>
  }
};


function mapStateToProps(state){
    return {
      items: state.get('items'),
      filter: state.get('filter')
    }
}

export const DashboardContainer = connect(mapStateToProps, actionCreators)(Dashboard);
