import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class BacMeter extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const bar = {
      width: '90%',
      height: 35,
      backgroundColor: '#FFFEF7',
      borderRadius: 3,
      borderColor: '#2D2D2D',
      borderWidth: 2,
      borderStyle: 'solid',
      paddingLeft: 0,
      paddingRight: 0,

    };
    const percentage = {
      width: this.props.bacPercent + '%',
      height: 31,
      backgroundColor: 'red',
      justifyContent: 'flex-end'

    }

    return <div>
      <h2> Current Blood Alcohol Content </h2>
      <div className="col-sm-3" aria-valuenow="{this.props.bacPercent}" aria-valuemin="0" aria-valuemax="100" style={bar}>
        <span className="col-sm-3" style={percentage}>{this.props.bacPercent}</span>
      </div>
    </div>

  }
};
