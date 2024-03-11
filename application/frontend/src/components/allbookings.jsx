// AllBookings.jsx
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaCard from "./home-side-nav";
import "../assets/css/addevents.css"; // Reusing the CSS file from the previous component
import instance from '../services/axios';
const AllBookings = () => {
  // Replace the following data with actual booking data
//   const bookingsData = [
//     { noOfPersons: 50, eventType: 'Birthday', username: 'John Doe', venueName: 'Venue A', onDate: '2024-02-14', paymentStatus: 'Paid' },
//     { noOfPersons: 100, eventType: 'Wedding', username: 'Jane Smith', venueName: 'Venue B', onDate: '2024-03-20', paymentStatus: 'Pending' },
//     // Add more booking data as needed
//   ];

const [bookingsData,setBooking]=useState([]);
const handleReject = (bookingId) => {
  // Make an API call to delete the booking with the given bookingId
  instance
    .delete(`http://localhost:8181/bookings/delete/${bookingId}`)
    .then(response => {
      console.log(`Booking ${bookingId} rejected successfully`);
      // After successful deletion, update the state to reflect the changes
      // setBooking(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
      // Display an alert
      alert(`Booking has been rejected.`);
      window.location.reload();
    })
    .catch(error => {
      console.error(`Error rejecting booking ${bookingId}`, error);
    });
};
  useEffect(()=>{
    instance.
       
    get('http://localhost:8181/bookings/all')
    .then(response=>{
       console.log(response.data);
        setBooking(response.data);
        
    })
    .catch(error=>{
        console.error('Error fetching data',error);
    });

   
    // instance
    //   .get(`http://localhost:8181/users/${bookingsData.userId}`)
    //   .then(response => {
    //     console.log(response);
    //     setUsername(response.data.username);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching username', error);
    //   });

  },[]);
  return (
    <div className="venue-whole">
      <div className="venue-nav">
        <nav className="venue-navbar">
          <div className="venue-navbar-left">
            <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
          </div>
        </nav>
      </div>
      <h3 style={{ color: "white", padding: "30px" }}>All Bookings:</h3>

      <div className="venue-cards">
        {bookingsData.map((booking, index) => (
          <div className="venue-card1" key={index}>
            <div className="venue-card-left">
              <h3>{booking.eventType}</h3>
              <p>No. of Persons: {booking.noOfPersons}</p>
              <p>Username: {booking.userId}</p>
              <p>Venue Name: {booking.venueId}</p>
              <p>On Date: {booking.ondate}</p>
              <p>Payment Status: pending</p>
            </div>
            <div className="venue-card-right">
              <button className="login-button"  >Approve</button>
              <button className="login-button" style={{padding:"20px"}}onClick={() => handleReject(booking.bookingId)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBookings;
