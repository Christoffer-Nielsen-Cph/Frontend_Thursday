import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Contact from "./pages/Contact.jsx";
import Jokes from "./pages/Jokes.jsx";
import Scrape from "./pages/Scrape.jsx";
import Header from "./components/Header.jsx";
import facade from "./utils/apiFacade.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('All is good ... so far');

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setErrorMessage('Logged out.')
    };

    const obj = {
        name: "",
        street: "",
        town: "",
        country: "",
    }

    return (
        <Container>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} facade={facade}/>
            <Routes>
                <Route path="/" element={<Home
                    facade={facade}
                />}/>
                <Route path="search" element={<Search/>}/>
                <Route path="contact" element={<Contact address={obj}/>}/>
                <Route path="jokes" element={facade.hasUserAccess('user', loggedIn) &&
                        <Jokes facade={facade} setErrorMessage={setErrorMessage} />}/>

                <Route path="scrape" element={<Scrape/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </Container>
    );
}

export default App;
