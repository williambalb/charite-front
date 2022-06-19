import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import How from './pages/how';
import Items from './pages/items';
import SignUp from './pages/signup';
import Login from './pages/login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/how" element={<How/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </Router>
    );
}

export default App;
