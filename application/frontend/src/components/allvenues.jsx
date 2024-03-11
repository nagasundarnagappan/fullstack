
import BigNavbar from "./venue-nav-bar";
import "../assets/css/venue.css";
import instance from '../services/axios';
import React, { useEffect, useState } from 'react';
const Allvenues = () => {
    const deleteById = (id) => {
        instance.delete(`http://localhost:8181/venues/delete/${id}`)
          .then(response => {
            console.log('Venue deleted successfully:', response.data);
          })
          .catch(error => {
            console.error('Error deleting venue:', error);
          });
      };
    const [venueData, setVenues] = useState([]);
    useEffect(() => {
        instance.get('http://localhost:8181/venues/all')
            .then(response => {
                console.log(response.data);
                setVenues(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="venue-whole">
            <div className="venue-nav">
                <BigNavbar />
            </div>
            <h3 style={{ color: "white", padding: "30px" }}>Available Venues:</h3>

            <div className="venue-cards">
                {venueData.map((venue, index) => (
                    <div className="venue-card1" key={index}>
                        <div className="venue-card-left">
                            <h3>{venue.venuName}</h3>
                            <p>Location: {venue.location}</p>
                        </div>
                        <div className="venue-card-right">
                            <button className="login-button">Edit</button>
                            <button className="login-button" onClick={() => deleteById(venue.venueId)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Allvenues;
