import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Switch} from 'react-router'
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/login";
import SignUp from "./components/signup";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/post" element={<Post />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<SignUp />} />
					{/* <Post/> */}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
