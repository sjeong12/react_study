import './App.css';
import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';

class App extends Component {
	id = 2
	state = {
		information: [
			{
				id: 0,
				name: '김가나',
				phone: '010-0000-0000'
			},
			{
				id: 1,
				name: '김다라',
				phone: '010-1111-1111'
			}
		]
	}

	handleCreate = (data) => {
		const {information} = this.state;
		this.setState({
			information: information.concat({id: this.id++, ...data})
		})
	}

	handleRemove = (id) => {
		const {information} = this.state;
		this.setState({
			information: information.filter(info => info.id !== id)
		})
	}

	handleUpdate = (id, data) => {
		const {information} = this.state;
		this.setState({
			information: information.map(
				info => id === info.id ?
				{...info, ...data} : info
			)
		})
	}

	render() {
		const {information} = this.state;
		return (
			<div className="App">
				<PhoneForm
					onCreate={this.handleCreate}
				/>
				<PhoneInfoList
					data={information}
					onRemove={this.handleRemove}
					onUpdate={this.handleUpdate}
				/>
			</div>
		);
	}
}
export default App;
