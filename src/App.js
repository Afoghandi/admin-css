import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
const App = () => {
	return (
		<BrowserRouter>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<Routes>
					<Route path='/' element={<Home />} exact />

					<Route path='/users' element={<UserList />} />
					<Route path='/newUser' element={<NewUser />} />
					<Route path='/user/:userId' element={<User />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
