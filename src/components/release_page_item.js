import React, { Component } from "react";
import { connect } from "react-redux";

class ReleasePageItem extends Component {
  render() {
    const release = this.props.release;
    let year = release.year;

    let title = release.title;
    let id = release.id;
    let styles = release.styles;
    let country = release.country;
    // // let { size } = release.size;

    const url = `https://www.discogs.com/release/${id}`;

    // if (this.props.coversize === "large") {
    //   size = 350;
    //   image = this.props.data.thumb;
    // }s

    return (
      <div>
        <a href={url} target="_blank">
          {/* <img src={image} title={title} alt={title} /> */}
          {/* <h1>{title}</h1>
        <h4>{year}</h4> */}

          <h1>{title}</h1>
          <h4>{year}</h4>
          <h4>{styles}</h4>
          <h4>{country}</h4>
        </a>
      </div>
    );
  }
}

ReleasePageItem.defaultProps = {};

function mapStateToProps(state) {
  return { release: state.release };
}

export default connect(mapStateToProps)(ReleasePageItem);
