/* eslint-disable no-unused-vars */
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const AddUser = () => {
	const [user, setUser] = useState({});

	const submitHandler = async (e) => {
		e.preventDefault();
		// console.log(e.target);

		const { name, email, mobile } = e.target;

		// setUser({
		//     name : name.value,
		//     email : email.value,
		//     mobile : mobile.value
		// })

		const { data } = await axios.post(`/api/addUser`, {
			name: name.value,
			email: email.value,
			mobile: mobile.value,
		});

		toast(data.message);
		e.target.reset();
	};

	// console.log(user);

	return (
		<div>
			<h1>Add User Form</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="Name">Name : </label>
					<input
						id="name"
						name="name"
						type="text"
						autoComplete="name"
						required
						className="bg-blue-300 border-ra"
					/>
				</div>
				<div>
					<label htmlFor="email">Email : </label>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						required
					/>
				</div>
				<div>
					<label htmlFor="Mobile">Mobile : </label>
					<input
						id="mobile"
						name="mobile"
						type="number"
						autoComplete="number"
						required
					/>
				</div>
				<div>
					<button type="submit">Add User</button>
					<ToastContainer />
				</div>
			</form>
		</div>
	);
};
export default AddUser;
