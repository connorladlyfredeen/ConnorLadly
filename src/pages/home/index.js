import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'react-md';

import './home.css';

const Home = ({
  filePath,
}) => (
  <Paper className="connorladly-home-page">
    <h2>About</h2>
  </Paper>
);

Home.propTypes = {
  filePath: PropTypes.string,
};

Home.defaultProps = {
  filePath: '',
};

class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filePath: './src/containers/app/index.js',
    };
  }

  render() {
    return (
      <Home
        filePath={this.state.filePath}
      />
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
