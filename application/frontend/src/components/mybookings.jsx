// MyBookings.jsx

import React, { useEffect, useState } from 'react';
import instance from '../services/axios';
import '../assets/css/MyBookings.css';
import { useLocation } from 'react-router-dom';
import BigNavbar from './navbar2';
import { Link , useNavigate } from 'react-router-dom';


const MyBookings = (props) => {
    const location = useLocation();
    const email = location.state?.email;
    console.log("sd",email);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const bookpage=()=>{
      navigate('/bookevents', { state: { email: email } });
  }
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await instance.get(`http://localhost:8181/bookings/get-by-user/${email}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [email]);

  return (
    <div className='whole-user-dashboard'>
        <div className='my-bookings-container'>
        <nav className="partyhub-navbar">
      <div className="partyhub-navbar-left">
        
      <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
      </div>
        <span className="partyhub-navbar-item" onClick={()=>bookpage()}>Book New !</span>
      {/* <h1 className="partyhub-navbar-title">Party Hub</h1> */}
      
    </nav>
        <h3>My Bookings:</h3>
        <div className='user-inside-div'>
        <ul className='bookings-list'>
            {bookings.map((booking) => (
            <li key={booking.bookingId} className='booking-item'>
                <div className='venue-card-left'>
                <h3>{booking.eventType}</h3>
                <p>No. of Persons: {booking.noOfPersons}</p>
                <p>Username: {booking.userId}</p>
                <p>Venue Name: {booking.venueId}</p>
                <p>On Date: {booking.ondate}</p>
                <p>Payment Status: {booking.paymentStatus}</p>
                </div>
            </li>
            ))}
        </ul>
        </div>
        </div>
    </div>
  );
};

export default MyBookings;
