import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/dashboardadmin.css'; // Import the CSS file
import Dchart from './dchart';
import instance from '../services/axios';
import { useEffect } from 'react';
const DashboardAdmin= () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [bookingsPerDay, setBookingsPerDay] = useState(0);
  const [availableEvents, setAvailableEvents] = useState(0);
  const [bookingsData, setBooking] = useState([]);

  // const handleReject = (bookingId) => {
  //   // Handle rejection logic
  // };

  useEffect(() => {
    // Make API call to fetch booking data
    instance.get('http://localhost:8181/bookings/all')
      .then(response => {
        console.log(response.data);
        setBooking(response.data);
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);
  useEffect(() => {
    // Make Axios requests to fetch data for each dashboard card
    instance.get('http://localhost:8181/bookings/total')
      .then(response => setTotalBookings(response.data))
      .catch(error => console.error('Error fetching total bookings count', error));
      instance.get('http://localhost:8181/events/count')
      .then(response => {
        setAvailableEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching total events count', error);
      });
      instance.get('http://localhost:8181/payments/sum')
      .then(response => {
        setTotalEarnings(response.data);
      })
      .catch(error => {
        console.error('Error fetching total payments amount', error);
      });

  }, []);

 
  return (
    

    <div className='whole-dashboard'>
       
      <div className='ad-sidebar'>
          <ul>
          <li>
                  <Link to={`/`} className="add-events-link" color="white">

                    Home
                  </Link>
                </li>
                <li>
                  <Link to={`/adminprofile`} className="add-events-link" color="white">

                    My Profile
                  </Link>
                </li>
               
                <li>
                  <Link to={`/all-bookings`} className="all-bookings-link">
                    All Bookings
                  </Link>
                </li>
                <li>
                  <Link to={`/all-event`} className="all-events-link">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link to={`/allvenues`} className="all-events-link">
                    All Venues
                  </Link>
                </li>
                <li>
                  <Link to={`/logout`} className="logout-btn">
                    Logout
                  </Link>
                </li>
              </ul>

      </div>
    <div className='main-dashboard'>
        <div className='ad-d2'>
          Admin Dashboard
        </div>

        <div className='ad-d3'>
        <div className="dashboard-container">
                <div className="dashboard-card">
                    <h4>Total Bookings</h4>
                    <h4>{totalBookings}</h4>
                </div>
                <div className="dashboard-card">
                    <h4>Total Earnings</h4>
                    <h4>{totalEarnings}$</h4>
                </div>
                <div className="dashboard-card">
                    <h4>Bookings/Day</h4>
                    <h4>3</h4>
                </div>
                <div className="dashboard-card">
                    <h4>Available Events</h4>
                    <h4>{availableEvents}</h4>
                </div>
            </div>
        </div>
<div className='ad-d4'>
        <div className='db-chart'>
          <Dchart/>

        </div>

<div className='booking-details-table'>
         
          <table>
            <thead>
              <tr>
                <th>Event Type</th>
                <th>No. of Persons</th>
                <th>Username</th>
                <th>Venue Name</th>
                <th>On Date</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingsData.slice(0, 4).map((booking, index) => (
                <tr key={index}>
                  <td>{booking.eventType}</td>
                  <td>{booking.noOfPersons}</td>
                  <td>{booking.userId}</td>
                  <td>{booking.venueId}</td>
                  <td>{booking.ondate}</td>
                  <td>Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>

        
     
    </div>
  );
};

export default DashboardAdmin;
