import React from "react";
import contacts from '../contacts';
import Card from "./Card";

function App() {

    return (
        <div>
            <Card data={contacts[0]}/>
            <Card data={contacts[1]}/>
            <Card data={contacts[2]}/>
        </div>
    );
}

export default App;
