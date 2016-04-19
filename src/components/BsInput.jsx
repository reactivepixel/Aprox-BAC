import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {

    return <div className="form-group col-sm-3">
      <label>
        {this.props.title} <small>{this.props.subTitle}<sup>{this.props.sup}</sup></small>
      </label>
      <input type='text' className='form-control' placeholder={this.props.placeholder} />
    </div>
  }
};
