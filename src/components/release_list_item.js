import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ReleaseListItem extends Component {
  render() {
    let { title } = this.props.data;
    let { id } = this.props.data;
    let { size } = this.props;
    let image = this.props.data.cover_image;

    const url = `https://www.discogs.com/release/${id}`;

    if (this.props.coversize === "small") {
      size = 150;
      image = this.props.data.thumb;
    }

    return (
      <Link to={`/release/${id}`}>
        <img height={size} width={size} src={image} title={title} alt={title} />
      </Link>
    );
  }
}

ReleaseListItem.defaultProps = {
  size: 250
};

function mapStateToProps(state) {
  return { coversize: state.coversize };
}

export default connect(mapStateToProps)(ReleaseListItem);
