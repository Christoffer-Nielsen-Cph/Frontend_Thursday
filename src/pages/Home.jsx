import React from 'react';
import Login from "../components/Login.jsx";

function Home({ facade }) {

    return (
        <div>
            <h1>Home</h1>
                    <p> Welcome {facade.getUserRoles()}</p>
        </div>
    );
}

export default Home;
