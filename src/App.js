import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import Login from './pages/login';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/employees" element={<EmployeeList />} />
				<Route path="/add-employee" element={<EmployeeForm />} />
			</Routes>
		</Router>
	);
};

export default App;
