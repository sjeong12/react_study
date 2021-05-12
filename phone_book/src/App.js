import './App.css';
import React, {Component} from 'react';
import Modal from './components/Modal.js';
import PhoneForm from './components/PhoneForm.js';
import PhoneInfoList from './components/PhoneInfoList.js';
import {MdAdd, MdSearch} from 'react-icons/md';

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
		keyword: '',
		searchOpen: false,
		modalOpen: false,
	}

	handleChange = (e) => {
		this.setState({
			keyword: e.target.value,
		});
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

	onSearch = () => {
		const input = document.querySelector(".App > .btns");
		const { searchOpen } = this.state;
		this.setState({searchOpen: !this.searchOpen});
		if (searchOpen === true)
			this.setState({keyword: ''});
		input.classList.toggle("appear");
  	}

	render() {
		const {information, keyword, modalOpen} = this.state;
		const filteredList = information.filter(
			info => info.name.indexOf(keyword) !== -1
		);
		return (
			<div class="App">
				<h1>PHONE BOOK</h1>
				<div class="btns">
					<input
						placeholder="검색할 이름을 입력하세요"
						onChange={this.handleChange}
						value={keyword}
					/>
					<MdAdd id="modal-btn" onClick={this.openModal}></MdAdd>
					<MdSearch id="search-btn" onClick={this.onSearch}></MdSearch>
				</div>
				<PhoneInfoList
					data={filteredList}
					onRemove={this.handleRemove}
					onUpdate={this.handleUpdate}
				/>
      			<Modal open={modalOpen} close={this.closeModal} header="ADD CONTACTS">
					<PhoneForm
						onCreate={this.handleCreate}
						close={this.closeModal}
					/>
      			</Modal>
			</div>
		);
	}
}
export default App;
