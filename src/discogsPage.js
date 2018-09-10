import React, { Component } from "react";
import Discogs from "disconnect";

export default class discogsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let db = new Discogs().database();
    db.getRelease(176126, function(err, data) {
      console.log(data);
    });

    return (
      <div>
        <h1>Discogs</h1>
      </div>
    );
  }
}
