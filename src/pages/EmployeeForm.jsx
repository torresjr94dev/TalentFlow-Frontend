import React, { useState } from 'react';
import { addEmployee } from '../services/employeeService';

const EmployeeForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		position: '',
		salary: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await addEmployee(formData);
			alert('Empleado agregado exitosamente');
		} catch (error) {
			console.error('Error al agregar empleado', error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="firstName"
				placeholder="Nombre"
				value={formData.firstName}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="lastName"
				placeholder="Apellido"
				value={formData.lastName}
				onChange={handleChange}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Correo"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="position"
				placeholder="Puesto"
				value={formData.position}
				onChange={handleChange}
			/>
			<input
				type="number"
				name="salary"
				placeholder="Salario"
				value={formData.salary}
				onChange={handleChange}
			/>
			<button type="submit">Agregar Empleado</button>
		</form>
	);
};

export default EmployeeForm;
