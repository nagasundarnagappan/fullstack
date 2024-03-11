import React, { useEffect, useState } from 'react';
import '../assets/css/addevents.css';
import instance from '../services/axios';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MakePayment = (props) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  console.log("sdfsdf", email);

  const [amount, setAmount] = useState(0);
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentList, setPaymentList] = useState([]); // Assuming you have a list of payments

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await instance.get("http://localhost:8181/payments/all");
        console.log(response);
        setPaymentList(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userId: email,
      amount: amount,
      paidDate: paymentDate.valueOf() / 1000,
      paymentMethod: paymentMethod,
    };

    try {
      const response = await instance.post('http://localhost:8181/payments/create', data);

      console.log(data);
      navigate('/mybookings')
      console.log('Payment submitted successfully!');
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  };

  return (
    <div className='mydiv'>
      <div className='add-event-div'>
        <h2>Make Payment</h2>
        <form className ="add-event-form" onSubmit={handlePaymentSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </label>
          <br />


          <br />

          <label>
            Payment Method:
            <input
              type="text"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </label>
          <br />

          <button type="submit">Submit Payment</button>
        </form>
        
      </div>
    </div>
  );
};

export default MakePayment;
