import {connect} from 'react-redux';
import React from 'react';

import * as actionCreators from '../action_creators';

import ItemsTableBasic from './ItemsTableBasic';
import ItemInput from './ItemInput';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class AdminApp extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div>
      <section id="container">
        <ItemsTableBasic {...this.props} changeFilter={this.props.changeFilter} />
        <ItemInput />
      </section>
    </div>
  }
};


function mapStateToProps(state){
    return {
      items: state.get('items'),
      filter:state.get('filter')
    }
}

export const AdminContainer = connect(mapStateToProps, actionCreators)(AdminApp);
