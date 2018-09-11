import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRelease } from "../actions/releaseActions";
import ReleasePageItem from "../components/release_page_item";

class ReleasePage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, release_id: "81987" };
  }

  componentWillMount() {
    this.props.fetchRelease(this.state.release_id);
  }

  render() {
    const { release } = this.props.release;
    return (
      <div>
        <ReleasePageItem release={release} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ fetchRelease }, dispatch);
  return { ...actions, dispatch };
}

// function mapStateToProps(state) {
//   return { release: state.release };
// }

export default connect(
  null,
  mapDispatchToProps
)(ReleasePage);
