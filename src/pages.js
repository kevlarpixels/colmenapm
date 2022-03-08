import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";

const frontUnitPhotos = [
    'https://i.imgur.com/4BBfaqY.jpg',
    'https://i.imgur.com/RXswCVQ.jpg',
    'https://i.imgur.com/ZfX1ZbC.jpg',
    'https://i.imgur.com/sTLAWWJ.jpg',
    'https://i.imgur.com/jMjZwkh.jpg',
    'https://i.imgur.com/4jsY6BC.jpg',
    'https://i.imgur.com/AG1y7rN.jpg',
    'https://i.imgur.com/PCGXe87.jpg',
    'https://i.imgur.com/EVZIK4X.jpg'
];

export function FrontUnitPhotos(props) {
    return (
        <div>
            <section className="btn"><Link to="/TwoBd" style={{ textDecoration: 'none' }}>
                <p className="btnTextLeft">Back</p>
            </Link ></section>
            {frontUnitPhotos.map((image, i) => (
                <img alt={frontUnitPhotos.title} key={i} src={image}></img>
            ))}
        </div>
    );
}

const backUnitPhotos = [
    'https://i.imgur.com/CUF5fTt.jpg',
    'https://i.imgur.com/g3ekmj.jpg',
    'https://i.imgur.com/BllcbyQ.jpg',
    'https://i.imgur.com/sOdBxMF.jpg',
    'https://i.imgur.com/k7pkNQk.jpg',
    'https://i.imgur.com/7tfCX9v.jpg',
    'https://i.imgur.com/v9pAm7I.jpg',
    'https://i.imgur.com/osaAHrF.jpg',
    'https://i.imgur.com/Vnp6Ujw.jpg'
];

export function BackUnitPhotos(props) {
    return (
        <div>
            <section className="btn"><Link to="/OneBd" style={{ textDecoration: 'none' }}>
                <p className="btnTextLeft">Back</p>
            </Link ></section>
            {backUnitPhotos.map((image, i) => (
                <img alt={backUnitPhotos.title} key={i} src={image}></img>
            ))}
        </div>
    );
}

export function Home() {
    return (
        <div>
            <section className="card"><Link to="/TwoBd" style={{ textDecoration: 'none' }}>
                <h5>3637 E. Cesar E. Chavez Ave</h5>
                <p>2 Bedrooms</p>
                <p>1 Bathroom</p>
            </Link>
            </section>
            <section className="card"><Link to="/OneBd" style={{ textDecoration: 'none' }}>
                <h5>3637 1/4 E. Cesar E. Chavez Ave</h5>
                <p>1 Bedroom</p>
                <p>1 Bathroom</p>
            </Link>
            </section>
        </div>
    );
}

export function TwoBd() {
    return (
        <div>
            <section className="btn"><Link to="/colmenapm" style={{ textDecoration: 'none' }}>
                <p className="btnTextLeft">Back</p>
            </Link ></section>
            <img alt='front' src="https://i.imgur.com/4BBfaqY.jpg" height={200} />
            <button className="btn" onClick={FrontUnitPhotos}><Link to="/frontphotos" style={{ textDecoration: 'none' }}>
                More Photos
            </Link>
            </button>
            <div className="address">
                <h2>3637 E. Cesar Chavez Ave</h2>
                <h5>972 Sq Ft. 2 bedrooms 1 bath for $2,000</h5>
            </div>
            <div className="description">
                <div>
                    <h2>Property Details</h2>
                    <p>Commercial-Residential Mix Unit</p>
                </div>
                <div className="environment">
                    <div className="schools">
                        <h5>Nearby Schools</h5>
                        <table>
                            <tr>
                                <th>School</th>
                                <th>Grades</th>
                                <th>Distance</th>
                            </tr>
                            <tr>
                                <td>William R. Anton Elementary School</td>
                                <td>K-6</td>
                                <td>0.5 mi</td>
                            </tr>
                            <tr>
                                <td>Belvedere Middle School</td>
                                <td>6-8</td>
                                <td>0.2 mi</td>
                            </tr>
                            <tr>
                                <td>Hilda L. Solis Learning Academy</td>
                                <td>9-12</td>
                                <td>0.9 mi</td>
                            </tr>
                        </table>
                    </div>
                    <div className="neighborhood">
                        <h5>Neighborhood</h5>
                        <p>H T Hazard's East Side</p>
                    </div>
                </div>
            </div>
            <div className="application">
                <div>
                    <form typeof="button"></form>
                    <a className="myButton" href="https://docs.google.com/forms/d/e/1FAIpQLSdVMAtl0KVgxD2HGLtR48h6AmnMBtPPX61YnL97wx-sKNlwJw/viewform?usp=sf_link">Application</a>
                </div>
                <p>
                    Fill out the form by clicking on the "Application" button.
                    This initial form is for the Hive Management Team (HMT) to know more about the applicant without charging for an application;
                    however, HMT will send an official rent application via email to prospects that meet the minimum qualifications.
                    Be aware that the California rental application form allows landlords to obtain background information about prospective tenants.
                    A charge of $38 fee for the application will include criminal, credit, or rental history.
                </p>
            </div>
        </div>
    );
}



export function OneBd() {
    return (
        <div>
            <section className="btn"><Link to="/colmenapm" style={{ textDecoration: 'none' }}>
                <p className="btnTextLeft">Back</p>
            </Link ></section>
            <img alt='front' src="https://i.imgur.com/CUF5fTt.jpg" hieght={200} />
            <button className="btn" onClick={BackUnitPhotos}><Link to="/backphotos" style={{ textDecoration: 'none' }}>
                More Photos
            </Link>
            </button>
            <div className="address">
                <h2>3637 1/4 E. Cesar Chavez Ave</h2>
                <h5>633 Sq Ft. 1 bedroom 1 bath for $2,000</h5>
            </div>
            <div className="description">
                <div>
                    <h2>Property Details</h2>
                    <p>Commercial-Residential Mix Unit</p>
                    <p>Bungalow</p>
                    <p></p>
                </div>
                <div className="environment">
                    <div className="schools">
                        <h5>Nearby Schools</h5>
                        <table>
                            <tr>
                                <th>School</th>
                                <th>Grades</th>
                                <th>Distance</th>
                            </tr>
                            <tr>
                                <td>William R. Anton Elementary School</td>
                                <td>K-6</td>
                                <td>0.5 mi</td>
                            </tr>
                            <tr>
                                <td>Belvedere Middle School</td>
                                <td>6-8</td>
                                <td>0.2 mi</td>
                            </tr>
                            <tr>
                                <td>Hilda L. Solis Learning Academy</td>
                                <td>9-12</td>
                                <td>0.9 mi</td>
                            </tr>
                        </table>
                    </div>
                    <div className="neighborhood">
                        <h5>Neighborhood</h5>
                        <p>H T Hazard's East Side</p>
                    </div>
                </div>
            </div>
            <div className="application">
                <p>
                    Fill out the form by clicking on the "Application" button.
                    This initial form is for the Hive Management Team (HMT) to know more about the applicant without charging for an application;
                    however, HMT will send an official rent application via email to prospects that meet the minimum qualifications.
                    Be aware that the California rental application form allows landlords to obtain background information about prospective tenants.
                    A charge of $38 fee for the application will include criminal, credit, or rental history.
                </p>
                <Footer />
            </div>
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

export function Footer() {
    return (
            <div className="footer">
                <div className="footer_contents">
                    <form typeof="button"></form>
                    <a className="myButton" href="https://docs.google.com/forms/d/e/1FAIpQLSdVMAtl0KVgxD2HGLtR48h6AmnMBtPPX61YnL97wx-sKNlwJw/viewform?usp=sf_link">Application</a>
                </div>
            </div>

    );
}