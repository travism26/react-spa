import React from 'react';
import { TravelingList } from '../data/traveling';
import { Link } from 'react-router-dom';

const Traveling = (props) => {

    let places_to_travel = TravelingList.map((travel) => {
        return (
            <div className="travel-container">
                <a>
                    {/* Feel like this is a security risk doing this... */}
                    <div className="travel-image" style={{ backgroundImage: "url(" + travel.capital_img + ")" }}></div>
                </a>
                <h3>{travel.country}</h3>
            </div>
        )
    });
    return (
    <div className="main-content">
        <div><Link className="back" to="/">Back</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
            {places_to_travel}
        </div>
    </div>
    )
};

export default Traveling