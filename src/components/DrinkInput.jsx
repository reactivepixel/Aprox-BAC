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
        <label className="col-sm-1">
          <h2>Beer</h2>
        </label>
        <div className="col-sm-11">
          <button className="btn btn-lg btn-success" type="button" name="button">
            <span className="glyphicon glyphicon-plus"></span>
          </button>
        </div>
        <div className="col-sm-12 btn-group">
          <button type="button" className="btn btn-lg btn-round btn-default">Bottle</button>
          <button type="button" className="btn btn-lg btn-round btn-default">Draft</button>
        </div>
      </section>

      <section>
        <label className="col-sm-1">
          <h2>Shot</h2>
        </label>
        <div className="col-sm-11">
          <button className="btn btn-lg btn-success" type="button" name="button">
            <span className="glyphicon glyphicon-plus"></span>
          </button>
        </div>
        <div className="col-sm-12 btn-group">
          <button type="button" className="btn btn-lg btn-round btn-default">Single</button>
          <button type="button" className="btn btn-lg btn-round btn-default">Double</button>
        </div>
      </section>

      <section>
        <label className="col-sm-1">
          <h2>Wine</h2>
        </label>
        <div className="col-sm-11">
          <button className="btn btn-lg btn-success" type="button" name="button">
            <span className="glyphicon glyphicon-plus"></span>
          </button>
        </div>
        <div className="col-sm-12 btn-group">
          <button type="button" className="btn btn-lg btn-round btn-default">Red</button>
          <button type="button" className="btn btn-lg btn-round btn-default">White</button>
        </div>
      </section>

    </div>
  }
};
