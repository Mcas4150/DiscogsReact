import React, { Component } from "react";
import { connect } from "react-redux";

class ReleasePageItem extends Component {
  render() {
    const { release } = this.props;
    let { year } = release.year;

    let { title } = release.title;
    let { id } = release.id;
    // let { size } = release.size;
    // let image = this.props.data.cover_image;

    const url = `https://www.discogs.com/release/${id}`;

    // if (this.props.coversize === "large") {
    //   size = 350;
    //   image = this.props.data.thumb;
    // }s

    return (
      <div>
        {/* <a href={url} target="_blank">
       <img height={size} width={size} src={image} title={title} alt={title} /> */}
        <h1>{title}</h1>
        <h4>{year}</h4>

        <h1>release page</h1>
      </div>
    );
  }
}

ReleasePageItem.defaultProps = {};

function mapStateToProps(state) {
  return { release: state.release };
}

export default connect(mapStateToProps)(ReleasePageItem);
