import React, { Component } from "react";
import { connect } from "react-redux";
import Youtube from "react-youtube";

class ReleasePageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const release = this.props.release;
    let year = release.year;
    let image = release.thumb;
    let title = release.title;
    let id = release.id;
    let styles = release.styles;
    let country = release.country;
    // let uri = release.videos[0].uri;

    const url = `https://www.discogs.com/release/${id}`;

    return (
      <div>
        <a href={url} target="_blank">
          <img src={image} title={title} alt={title} />
          {/* <h1>{title}</h1>
        <h4>{year}</h4> */}

          <h1>{title}</h1>
        </a>
        <h4>{year}</h4>
        <h4>{styles}</h4>
        <h4>{country}</h4>
        {/* <h4>{uri}</h4> */}
        <Youtube videoId="BLSLTuLavUA" />
      </div>
    );
  }
}

ReleasePageItem.defaultProps = {};

function mapStateToProps(state) {
  return { release: state.release };
}

export default connect(mapStateToProps)(ReleasePageItem);
