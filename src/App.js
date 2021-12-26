import Navbar from './components/navbar'
import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom'
// import {Switch} from 'react-router'
import Home from './components/home'
import Post from './components/post'
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route  path="/home">
      
      </Route>
      <Route path="/post" element={<Post/>}/>
      {/* <Post/> */}
      {/* </Route> */}
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
