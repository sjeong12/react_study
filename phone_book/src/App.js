import './App.css';
import React, {Component} from 'react';
import Modal from './components/Modal.js';
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';
import {MdAddCircle} from 'react-icons/md';

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
		],
		modalOpen: false,
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

  	openModal = () => {
		this.setState({
			modalOpen: true
		})
  	}
  	closeModal = () => {
    	this.setState({
			modalOpen: false
		})
  	}

	render() {
		const {information, modalOpen} = this.state;
		return (
			<div class="App">
				<h1>PHONE BOOK</h1>
				<PhoneInfoList
					data={information}
					onRemove={this.handleRemove}
					onUpdate={this.handleUpdate}
				/>
				<MdAddCircle id="modal-btn" onClick={this.openModal}></MdAddCircle>
      			<Modal open={modalOpen} close={this.closeModal} header="ADD CONTACTS">
					<PhoneForm
						onCreate={this.handleCreate}
					/>
      			</Modal>
			</div>
		);
	}
}
export default App;
