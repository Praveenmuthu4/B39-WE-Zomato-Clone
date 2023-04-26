import './App.css';
import { Route , Routes } from 'react-router-dom';
import FrontPage from './compnent/Home/FrontPage/frontPage';
import MobilePage from './compnent/Home/MobileApp/MobilePage';
import CreateRestaurant from './pages/Restaurant/CreateRestaurant';
import SignUp from './compnent/SignUp/SignUp';
import Login from './compnent/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<FrontPage/>} />
       <Route path={"/mobilepage"} element={<MobilePage />} />
       <Route path='/createRestaurant' element={<CreateRestaurant/>}/>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
