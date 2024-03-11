import React, { useEffect, useState } from 'react';
import instance from '../services/axios';

import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const MyPayments = (props) => {
  const location = useLocation();
  const email = location.state?.email;
  console.log("sd", email);
  const [payments, setPayments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await instance.get(`http://localhost:8181/payments/get-by-user/${email}`);
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, [email]);

  return (
    <div className='whole-user-dashboard'>
      <div className='my-bookings-container'>
        <nav className="partyhub-navbar">
          <div className="partyhub-navbar-left">
            <img className="logo-1" src={"src/assets/images/Screenshot 2024-01-31 204130.png"} alt="Party Hub Logo" />
          </div>
         
        </nav>
        <h3>My Payments:</h3>
        <div className='user-inside-div'>
          <ul className='bookings-list'>
            {payments.map((payment) => (
              <li key={payment.paymentId} className='booking-item'>
                <div className='payment-card-left'>
                  <h3>Amount: {payment.amount}$</h3>
                  <p>User ID: {payment.userId}</p>
                  {/* <p>Payment Date: {new Date(payment.paidDate * 1000).toLocaleDateString()}</p> */}
                  <p>Payment Method: {payment.paymentMethod}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPayments;
