import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapReduxStateToProps = reduxState => ({ reduxState }); // end of mapReduxStateToProps

class PageFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ""
    };
  } // end of constructor

  handleChangeForComment = event => {
    // this function returns the value that pass into it to setSet to commentText
    const entry = event.target.value;
    this.setState({
      commentText: entry
    });
  }; // end of  handleChangeForComment

  commentEntry = () => {
    const action = {
      type: "FORM_ENTRY",
      property: "comments",
      payload: this.state.commentText
    };
    this.props.dispatch(action);
    this.props.dispatch({ type: "SUBMIT_FEEDBACK" });
  }; // end of commentEntry

  render() {
    return (
      <div>
        <div className="pages">
          <h3>Page: 4 of 4</h3>
        </div>
        <h4>Any comments you want to leave?</h4>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <input
          type="text"
          onChange={this.handleChangeForComment}
          value={this.commentText}
          placeholder="write something here..."
        />
        <Link
          to="/5"
          style={{ textDecoration: "none" }}
          onClick={this.commentEntry}
        >
          NEXT
        </Link>
      </div>
    ); // end of return
  } // end of render
} // end of PageFour

export default connect(mapReduxStateToProps)(PageFour);
