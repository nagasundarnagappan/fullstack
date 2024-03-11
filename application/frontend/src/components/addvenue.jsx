// AddVenue.jsx
import React, { useState } from 'react';
import instance from '../services/axios';

const AddVenue = () => {
  const [venueName, setVenueName] = useState('');
  const [venueLocation, setVenueLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
const data={
    venuName:venueName,
    location:venueLocation,
}
    try {
      
      const response = await instance.post('http://localhost:8181/venues/create',  data);

      console.log(data);
      console.log('Venue added successfully:', response.data);

      setVenueName('');
      setVenueLocation('');
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  return (
    <div className='mydiv'>
      <div className='add-event-div'>
        <h2>Add Venue</h2>
        <form className="add-event-form" >
          <label>
            Venue Name:
            <input
              type="text"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
          </label>
          <br />

          <label>
            Venue Location:
            <input
              type="text"
              value={venueLocation}
              onChange={(e) => setVenueLocation(e.target.value)}
            />
          </label>
          <br />

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddVenue;
