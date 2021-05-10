import React, {useState, useEffect} from 'react';

const PhoneInfo = ({info, onRemove, onUpdate}) => {
	const [modify, setModify] = useState(undefined);
	const [data, setData] = useState({
		name: '',
		phone: '',
	});

	const handleRemove = () => {
		onRemove(info.id);
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
		console.log(data);
	};

	useEffect(() => {
		if (modify === false) {
			onUpdate(info.id, {
				name: data.name,
				phone: data.phone
			});
		}
	}, [modify]);

	const style = {
		border: '1px solid black',
		padding: '8px',
		margin: '8px'
	};

	if (modify) {
		return (
			<div style={style}>
			<div>
				<input
					value={data.name}
					name="name"
					placeholder="이름"
					onChange={handleChange}
				/>
			</div>
			<div>
				<input
					value={data.phone}
					name="phone"
					placeholder="전화번호"
					onChange={handleChange}
				/>
			</div>
			<button onClick={handleRemove}>삭제</button>
			<button onClick={handleModify}>적용</button>
			</div>
		);
	}
	else {
		return (
			<div style={style}>
			<div><b>{info.name}</b></div>
			<div>{info.phone}</div>
			<button onClick={handleRemove}>삭제</button>
			<button onClick={handleModify}>수정</button>
			</div>
		);
	}

}

export default PhoneInfo;