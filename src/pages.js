import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h5 className="headline">Language / Idioma</h5>
            <div>
                <button className="btn"><Link to="/propertiesList">English</Link></button>
                <button className="btn"><Link to="/spanish">Español</Link></button>
            </div>
        </div>
    );
}

export function PropertiesList() {
    return (
        <div>
            <section>
            <h5>3637 E. Cesar E. Chavez Ave</h5>
            <p>2 Bedrooms</p>
            <p>1 Bathroom</p>
            </section>
        </div>
    );
}

export function PropertyDetails() {
    return (
        <div>
            <h1>[Properties Details] </h1>
        </div>
    );
}

export function English() {
    return (
        <div>
            <h2>English</h2>
        </div>
    );
}

export function Spanish() {
    return (
        <div>
            <h2>Spanish</h2>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at {location.pathname}!</h1>
        </div>
    );
}