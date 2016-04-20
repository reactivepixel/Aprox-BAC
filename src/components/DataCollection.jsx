import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class DataCollection extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {

    return <div className="form-group col-sm-3">
      <h1>Basic Information</h1>
      <label>
        Weight <small>(lbs.)</small>
      </label>
      <input type='text' className='form-control' placeholder={this.props.weight} />
      <label>
        Gender <small>(male)</small>
      </label>
      <input type='text' className='form-control' placeholder={this.props.gender} />
    </div>
  }
};