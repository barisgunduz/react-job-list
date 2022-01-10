import React, { Component } from "react";
import axios from "axios";

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

	componentDidMount() {
		axios.get(`http://localhost:3000/priority`).then((res) => {
			const priority = res.data;
			this.setState({ priority });
			console.log(this.state);
			console.log(priority);
		});
	}

	render() {
		const { priority, job } = this.state;
		return (
			<form>
				<label htmlFor="job">job</label>
				<input
					type="text"
					name="job"
					id="job"
					value={job}
					onChange={this.handleChange}
				/>
				<label htmlFor="priority">
					Priority
					<select
						name="priority"
						id="priority"
						value={this.state.value}
						onChange={this.handleChange}
					>
						{/* get data from api */}
						<option value="urgent">Urgent</option>
						<option value="regular">Regular</option>
						<option value="trivial">Trivial</option>
					</select>
				</label>
				<input type="button" value="Create" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;
