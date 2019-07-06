import React from 'react';
import './style.css';

function RegisterForm(props) {
	return (
		<div class="card">
			<div class="card-body">
				<form>
					<div className="form-group">
						<label for="firstName">First Name</label>
						<input type="text" className="form-control" id="firstName" placeholder="First Name" />
					</div>
					<div className="form-group">
						<label for="LastName">Last Name</label>
						<input type="text" className="form-control" id="lastName" placeholder="Last Name" />
					</div>
					<div className="form-group">
						<label for="inputEmail">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label for="inputPassword">Password</label>
						<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default RegisterForm;
