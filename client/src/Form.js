import React, { Component } from "react";

class Form extends Component {
  initialState = {
    priority: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { priority, job } = this.state;

    return (
      <form>
        <label htmlFor="job">Job</label>
        <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
        <label htmlFor="priority">Priority</label>
        <input type="text" name="priority" id="priority" value={priority} onChange={this.handleChange} />
        <input type="button" value="Create" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
