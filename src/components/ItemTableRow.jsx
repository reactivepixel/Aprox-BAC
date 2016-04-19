import React from 'react';
import classNames from 'classnames';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class ItemTableRow extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    var itemClass = classNames({
      'active': this.props.isActive,
      'editing': this.props.editing
    })
    return <tr  className={itemClass}
                onClick={() => this.props.toggleActive(this.props.id)}>
      <td><a href=''>{this.props.name}</a></td>
      <td className='center'>
        <span className='label label-warning label-mini'>
          {this.props.rarity}
        </span>
        </td>
    </tr>
  }
};
