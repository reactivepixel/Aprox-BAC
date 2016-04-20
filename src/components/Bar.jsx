import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const barStyle = {
      width: this.props.bacPercent + '%'
    };

    return <div>    
      <h2>Current Alcohol Level</h2>
      <div className="progress progress-striped active progress-sm">
          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="{this.props.bacPercent}" aria-valuemin="0" aria-valuemax="100" style={barStyle}>
            <p>.04</p>
              <span className="sr-only"></span>
          </div>
      </div>
    </div>
  }
};
