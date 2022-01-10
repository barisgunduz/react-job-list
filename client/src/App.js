import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    listedJobs: [],
  };

  handleSubmit = (listedJob) => {
    this.setState({ listedJobs: [...this.state.listedJobs, listedJob] });
  };

  removelistedJob = (index) => {
    const { listedJobs } = this.state;

    this.setState({
      listedJobs: listedJobs.filter((listedJob, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { listedJobs } = this.state;

    return (
      <div className="container">
        <div className="brand-tilt">
          <h1 className="brand-h1 text-center">Job List App</h1>
        </div>
        <Form handleSubmit={this.handleSubmit} />
        <Table listedJobData={listedJobs} removelistedJob={this.removelistedJob} />
      </div>
    );
  }
}

export default App;
