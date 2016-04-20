import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import AddDrink from './AddDrink';

export default class DrinkInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div className="form-group col-sm-12">
      <AddDrink
        name="Beer"
        varients={['Bottle', 'Draft']} />

      <AddDrink
        name="Wine"
        varients={['Red', 'White']} />
      <AddDrink
        name="Shot"
        varients={['Half', 'Full', 'Double']} />
    </div>
  }
};
