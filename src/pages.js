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
                <button className="btn"><Link to="/propertieslist">English</Link></button>
                <button className="btn"><Link to="/propertieslistesp">Español</Link></button>
            </div>
        </div>
    );
}

export function PropertiesList() {
    return (
        <div>
            <section className="card"><Link to="/propertyDetails">
            <h5>3637 E. Cesar E. Chavez Ave</h5>
            <p>2 Bedrooms</p>
            <p>1 Bathroom</p>
            </Link >
            </section>
            <section className="card">
            <h5>3637 1/2 E. Cesar E. Chavez Ave</h5>
            <p>1 Bedroom</p>
            <p>1 Bathroom</p>
            </section>
        </div>
    );
}

export function PropertiesListEsp() {
    return (
        <div>
            <section className="card">
            <h5>3637 E. Cesar E. Chavez Ave</h5>
            <p>2 Recámaras</p>
            <p>1 Baño</p>
            </section>
            <section className="card">
            <h5>3637 1/2 E. Cesar E. Chavez Ave</h5>
            <p>1 Recámara</p>
            <p>1 Baño</p>
            </section>
        </div>
    );
}

export function PropertyDetails() {
    return (
        <div>
            <h5>props</h5>
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