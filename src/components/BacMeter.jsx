import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class BacMeter extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return <div className="col-sm-3">
      <p> Something Text worthy </p>
      
    </div>
  }
};
