import React, { useState } from 'react';
import '../assets/css/addevents.css';
import instance from '../services/axios';
const AddEvents = () => {
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [participantsCount, setParticipantsCount] = useState(0);
  const [charges, setCharges] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();



    // setEventType('');
    // setDescription('');
    // setEventPackage('');
    // setParticipantsCount(0);
    // setCharges(0);
    const data={
      EventType:eventType,
      Description:description,
      ParticipantCount:participantsCount,
      charges:charges
    }

    console.log(data);
    const response = await instance.post('http://localhost:8181/events/create',data);
    console.log("Event added",response.data);
    


  };

  return (
    <div className='mydiv'>
        <div className='add-event-div'>
        <h2>Add Event</h2>
        <form className ="add-event-form" onSubmit={handleSubmit}>
            <label>
            Event Type:
            <input
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
            />
            </label>
            <br />

            <label>
            Description:
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
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
            Charges:
            <input
                type="number"
                value={charges}
                onChange={(e) => setCharges(parseFloat(e.target.value))}
            />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default AddEvents;
