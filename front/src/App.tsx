import './App.css'
import Footer from './components/footer/footer'
import { Navbar } from './components/navbar/navbar'
import { Route, Routes } from "react-router-dom";
import { Login } from './pages/login/login'
import { Storage } from './pages/storage/storage';
import { Profile } from './pages/profile/profile';
import { Albums } from './pages/albums/albums';

export const App = () => {

	return (
		<>
			<Navbar/>
				<Routes>
					<Route
						path='/login'
						element={<Login/>}
					/>
					<Route
						path='/storage'
						element={<Storage/>}
					/>
					<Route
						path='/profile'
						element={<Profile/>}
					/>
					<Route
						path='/albums'
						element={<Albums/>}
					/>
				</Routes>
			<Footer/>
		</>
	)
}

export default App
