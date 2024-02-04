import './App.css'
import Footer from './components/footer/footer'
import { Navbar } from './components/navbar/navbar'
import { Route, Routes, useNavigate } from "react-router-dom";

import { Login } from './pages/login/login'
import { Storage } from './pages/storage/storage';
import { useEffect } from 'react';

export const App = () => {

	let navigate = useNavigate();
	
	// useEffect(() => {
	// 	navigate("/login");
	// })
	return (
		<>
			
			<Navbar/>
			{/* <div className='main-app'> */}
				<Routes>
					<Route
						path='/login'
						element={<Login/>}
					/>
					<Route
						path='/storage'
						element={<Storage/>}
					/>
				</Routes>

			{/* </div> */}
		
			<Footer/>

		</>
	)
}

export default App
