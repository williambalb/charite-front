import './App.css';
import api from './services/api';
import Home from './pages/home';
import {useState, useEffect} from "react";

function App() {
    const [item, setItem] = useState();

    useEffect(() => {
       api
           .get('/items/1')
           .then((response) => setItem(response.data.item))
           .catch((err) => {
               console.log("Ocorreu um erro " + err);
           })
    }, []);

    return (
        <div className="App">
            <Home />

        </div>
    );
}

export default App;
