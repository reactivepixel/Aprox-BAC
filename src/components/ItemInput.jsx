import React from 'react';
import BsInput from './BsInput';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class ItemInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div className='panel'>
      <header className='panel-heading'>
        Need a New Item?
        <span className='tools pull-right'>
          <a href='javascript:;' className='fa fa-chevron-down'></a>
          <a href='javascript:;' className='fa fa-cog'></a>
          <a href='javascript:;' className='fa fa-times'></a>
        </span>
      </header>


      <div className='panel-body'>
        <BsInput title='Name' size='3' />
        <BsInput title='Description' size='3' />
        <BsInput title='Minimum Level' placeholder='1' size='3' />
        <BsInput title='Maximum Level' placeholder='50' size='3' />

        <div className='form-group col-sm-3 col-md-6'>
          <label>
            Binds on
          </label>
          <select className='form-control input-sm m-bot15' ng-model='newItem.bindType'>
            <option>None</option>
            <option>Use</option>
            <option>Equip</option>
            <option>Pickup</option>
            <option>Account</option>
            <option>Quest</option>
          </select>
        </div>

        <div className='form-group col-sm-3 col-md-6'>
          <label>
            Rarity
          </label>
          <select className='form-control input-sm m-bot15'>
            <option>Common</option>
            <option>Uncommon</option>
            <option>Rare</option>
            <option>Epic</option>
            <option>Artifact</option>
            <option>God-Touched</option>
            <option>God-Crafted</option>
          </select>
        </div>

        <BsInput title='Weight' subTitle='kg' placeholder='0.01' size='3' />
        <BsInput title='Volume' subTitle='cm' sup='3' placeholder='100' size='3' />
        <BsInput title='Tags' placeholder='Gem, Ore, Weapon...' size='12' />

        <div className='col-xs-12'>
          <input className='btn btn-info' type='submit' value='Add Item' />
        </div>
      </div>
    </div>
  }
};
