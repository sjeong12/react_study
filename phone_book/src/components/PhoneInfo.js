import './PhoneInfoList.css';
import React, {useState, useEffect} from 'react';
import {MdEdit, MdCheckCircle, MdCancel, MdUndo} from 'react-icons/md';

const PhoneInfo = ({info, onRemove, onUpdate}) => {
	const [modify, setModify] = useState(undefined);
	const [data, setData] = useState({
		name: '',
		phone: '',
	});

	const handleRemove = () => {
		onRemove(info.id);
	}

	const handleUndo = () => {
		//setData(info);
		setModify(!modify);
	}

	const handleModify = () => {
		if (modify === undefined)
			setModify(false);
		setModify(!modify);
	}

	const handleChange = (e) => {
		const newData = {
			...data,
			[e.target.name]: e.target.value,
		};
		setData(newData);
	}

	useEffect(() => {
		if (modify === false && data.name !== '' && data.phone !== '') {
			onUpdate(info.id, {
				name: data.name,
				phone: data.phone
			});
			setData({name:'', phone:''});
		}
	}, [modify])

	if (modify) {
		return (
			<div class="info">
				<div class= "items">
					<input
						id="name-input"
						value={data.name}
						name="name"
						placeholder="이름"
						onChange={handleChange}
					/>
					<input
						value={data.phone}
						name="phone"
						placeholder="전화번호"
						onChange={handleChange}
					/>
				</div>
				<div class="btns">
					<MdCheckCircle id="modify" onClick={handleModify}></MdCheckCircle>
					<MdUndo id="delete" onClick={handleUndo}></MdUndo>
				</div>
			</div>
		);
	}
	else {
		return (
			<div class="info">
				<div class= "items">
					<div id="name">{info.name}</div>
					<div id="phone">{info.phone}</div>
				</div>
				<div class="btns">
					<div id="modify">
						<MdEdit onClick={handleModify}></MdEdit>
					</div>
					<MdCancel id="delete" onClick={handleRemove}></MdCancel>
				</div>
			</div>
		);
	}

}

export default PhoneInfo;