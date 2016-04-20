import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {

    return <div className="form-group col-sm-12">

        <section>
          <label><h2>Beer</h2></label>
          <button className="btn btn-lg btn-success" type="button" name="button"><span className="glyphicon glyphicon-plus"></span></button>
          <select class="" name="">
            <option>Bottle</option>
            <option>Draft</option>
          </select>
        </section>

        <section>
          <label><h2>Shot</h2></label>
          <button className="btn btn-lg btn-success" type="button" name="button"><span className="glyphicon glyphicon-plus"></span></button>
          <select>
            <option>Single</option>
            <option>Double</option>
          </select>
        </section>

        <section>
          <label><h2>Wine</h2></label>
          <button className="btn btn-lg btn-success" type="button" name="button"><span className="glyphicon glyphicon-plus"></span></button>
          <select>
            <option>Red</option>
            <option>White</option>
          </select>
        </section>

    </div>
  }
};
