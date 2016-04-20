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
      <BsInput title='Weight' subTitle='kg' placeholder='0.01' size='3' />
      <BsInput title='Weight' subTitle='kg' placeholder='0.01' size='3' />
      <BsInput title='Weight' subTitle='kg' placeholder='0.01' size='3' />
      <BsInput title='Weight' subTitle='kg' placeholder='0.01' size='3' />
    </div>
  }
};
