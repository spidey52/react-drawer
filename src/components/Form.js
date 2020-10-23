import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			comments: "",
			topic: "react",
		}
	}

	usernameHandler = (event) => {
		this.setState({ username: event.target.value }, () => {
			console.log(this.state.username)
		})
	}

	commentsHandler = (event) => {
		this.setState({ comments: event.target.value }, () => {
			console.log(this.state.comments)
		})
	}

	topicHandler = (event) => {
		this.setState({topic: event.target.value}, () => {
			console.log(this.state.topic)
		})
	}

	render() {
		return (
			<form >
				<h1>Form Component</h1>
				<div className="form-group">
					<label for="username" >Username: </label>
					<input type="text" value={this.state.username} onChange={this.usernameHandler} id="username" />
				</div>
				<div className="form-group">
					<label>comments: </label>
					<textarea value={this.state.comments} onChange={this.commentsHandler} />
				</div>

				<div>
					<label>Topic </label>
					<select onChange={this.topicHandler} value={this.state.topic}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>

			</form>
		)
	}
}

export default Form
