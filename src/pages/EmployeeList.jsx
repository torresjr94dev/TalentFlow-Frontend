import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/employeeService';

const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const fetchEmployees = async () => {
			const data = await getEmployees();
			setEmployees(data);
		};
		fetchEmployees();
	}, []);

	return (
		<div>
			<h1>Lista de Empleados</h1>
			<ul>
				{employees.map(employee => (
					<li key={employee.id}>
						{employee.firstName} {employee.lastName} - {employee.position}
					</li>
				))}
			</ul>
		</div>
	);
};

export default EmployeeList;
