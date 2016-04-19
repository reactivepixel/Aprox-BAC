import React from 'react';
import ItemTableRow from './ItemTableRow';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class ItemsTableBasic extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getItems() {
    if (this.props.items) {
      return this.props.items.filter(
        (item) => this.props.filter === 'all' || item.get('rarity') === this.props.filter
      );
    }
    return [];
  }
  render() {
    return <div className='panel'>
      <header className='panel-heading'>
        Items Table
        <span className='tools pull-right'>
          <a className='fa fa-chevron-down'></a>
          <a className='fa fa-cog'></a>
          <a className='fa fa-times'></a>
        </span>
      </header>


      <table className='table table-hover general-table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Rarity</th>
          </tr>
        </thead>
        <tbody>
        {this.getItems().map(item =>
          <ItemTableRow
            key={item.get('id')}
            id={item.get('id')}
            name={item.get('name')}
            rarity={item.get('rarity')}
            isActive={item.get('isActive')}
            editing={item.get('editing')}
            toggleActive={this.props.toggleActive}
            />
        )}
        </tbody>
      </table>
    </div>
  }
};
