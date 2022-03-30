import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import HomeScreen from './Screens/HomeScreen';

function App() {
    return (
        <BrowserRouter>
            <div className='main' variant='dark'>
                <header>
                    <a href='/'>FeriaDelAlto.com</a>
                </header>
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                    </Routes>
                <main>
                        
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
