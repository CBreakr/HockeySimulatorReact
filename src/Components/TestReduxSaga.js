
import React from "react";

import { connect } from "react-redux";

class TestReduxSaga extends React.Component {
  render(){
    return (
      <div>
        Just a test component
        <span onClick={this.props.test}>
          Click Me!
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {...state};
}

const mapDispachToProps = dispatch => {
  return {
    test: () => dispatch({type:"TEST_ASYNC"})
  };
}

const enhancer = connect(mapStateToProps, mapDispachToProps);

export default enhancer(TestReduxSaga);
