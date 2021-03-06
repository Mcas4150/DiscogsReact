import React, { Component } from "react";
import { connect } from "react-redux";
import Youtube from "react-youtube";
import _ from "lodash";

class ReleasePageItem extends Component {
  constructor() {
    super();
  }

  render() {
    const releaseData = this.props.release;
    const url = `https://www.discogs.com/release/${id}`;

    let year = releaseData.year;
    // let image = releaseData.thumb;
    let title = releaseData.title;
    let id = releaseData.id;
    let style = releaseData.styles;
    let country = releaseData.country;
    let styles = [];
    let uri = [];
    let images = [];

    // let uri = this.props.release.videos.duration[0];
    if (_.isArray(releaseData.images) && !_.isEmpty(releaseData.images)) {
      releaseData.images.map(image => {
        images.push(image.uri);
      });
    }

    if (_.isArray(releaseData.styles) && !_.isEmpty(releaseData.styles)) {
      releaseData.styles.map(style => {
        styles.push(style);
      });
    }

    if (_.isArray(releaseData.videos) && !_.isEmpty(releaseData.videos)) {
      releaseData.videos.map(video => {
        // uri.push(video.uri);
        let uriLink = video.uri;
        let uriCode = uriLink.substr(uriLink.indexOf("=") + 1);
        uri.push(uriCode);
      });
    }

    return (
      <div>
        <a href={url} target="_blank">
          <img src={images[0]} title={title} alt={title} />
          {/* <h1>{title}</h1>
        <h4>{year}</h4> */}

          <h1>{title}</h1>
        </a>

        <h4>{year}</h4>
        <h4>{styles[0]}</h4>
        <h4>{country}</h4>

        <Youtube videoId={uri[0]} />
      </div>
    );
  }
}

ReleasePageItem.defaultProps = {};

function mapStateToProps(state) {
  return { release: state.release };
}

export default connect(mapStateToProps)(ReleasePageItem);
