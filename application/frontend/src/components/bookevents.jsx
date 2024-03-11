import React, { useEffect, useState } from 'react';
import '../assets/css/addevents.css';
import { Link , useNavigate } from 'react-router-dom';
import instance from '../services/axios';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useLocation } from 'react-router-dom';
const BookEvents = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  console.log("sdfsdf",email);
  const [venue, setVenue] = useState('');
  const [bookingdate, setBookingDate] = useState('');
  const [eventtype, setEventType] = useState('');
  const [participantsCount, setParticipantsCount] = useState(0);
  const [venuesList, setVenuesList] = useState([]); 
  const [eventList, setEventList] = useState([]); 
  // const [charges, setCharges] = useState(0);
  useEffect(() => {
 
    const fetchVenues = async () => {
      try {
        const response = await instance.get("http://localhost:8181/venues/all");
        console.log(response);
        setVenuesList(response.data); 
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };
    const fetchEventType = async () => {
      try {
        const response = await instance.get("http://localhost:8181/events/all");
        console.log(response);
        setEventList(response.data); 
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };
   
  
    fetchVenues();
    fetchEventType();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = bookingdate.valueOf() / 1000;
const data={
  eventType:eventtype,
  userId:email,
  venueId:venue,
  noOfPersons:participantsCount,
  ondate:timestamp,


}
    try {
      const response = await instance.post('http://localhost:8181/bookings/create',  data);
   
      console.log(data);
      console.log('Form submitted successfully!');
      navigate('/makepayment', { state: { email: email } });
     
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    navigate('/makepayment', { state: { email: email } });
  };


  return (
    <div className='mydiv'>
        <div className='add-event-div'>
        <h2>Book Event</h2>
        <form className ="add-event-form" onSubmit={handleSubmit}>
            <label>
            Venue:
            <select value={venue} onChange={(e) => setVenue(e.target.value)} >
              <option value='' >Select Venue</option>
              {venuesList.map((venue) => (
                <option key={venue.venueId} value={venue.venuName} style={{ color: 'black' }}>
                  {venue.venuName}
                </option>
              ))}
            </select>
            </label>
            <br />

            <label>
            Booking Date:
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker  
                  value={bookingdate}
                  onChange={(value) => setBookingDate(value)}/>
      </DemoContainer>
    </LocalizationProvider>
            </label>
            <br />

      


            <br />

            <label>
            Participants Count:
            <input
                type="number"
                value={participantsCount}
                onChange={(e) => setParticipantsCount(parseInt(e.target.value))}
            />
            </label>
            <br />

            <label>
            Event Type:
            <select value={eventtype} onChange={(e) => setEventType(e.target.value)} >
              <option value='' >Select EventType</option>
              {eventList.map((event) => (
                <option key={event.eventId} value={event.eventType} style={{ color: 'black' }}>
                  {event.eventType}
                </option>
              ))}
            </select>
            </label>
            <br />

            <button type="submit">Make Payment</button>
        </form>
        </div>
    </div>
  );
};

export default BookEvents;
