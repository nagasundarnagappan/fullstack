// // index.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles.css';

// // EventCard component
// const EventCard = ({ name, type, image }) => (
//     <div className="event-card">
//         <img src={image} alt={`${name} Event`} className="event-image" />
//         <h3>{name}</h3>
//         <p>{type}</p>
//     </div>
// );

// const App = () => {
//     const events = [
//         { name: "Birthday Bash", type: "Birthday", image: "birthday-image.jpg" },
//         { name: "Dream Wedding", type: "Wedding", image: "wedding-image.jpg" },
//         { name: "Corporate Mixer", type: "Corporate", image: "corporate-image.jpg" },
//         // Add more events as needed
//     ];

//     return (
//         <div>
//             <header>
//                 <h1>Party Planner</h1>
//                 <p>Your one-stop solution for unforgettable events!</p>
//             </header>

//             <div className="navigation">
//                 <Link to="#home" className="nav-link">Home</Link>
//                 <Link to="#services" className="nav-link">Services</Link>
//                 <Link to="#about" className="nav-link">About Us</Link>
//                 <Link to="#contact" className="nav-link">Contact</Link>
//             </div>

//             <section id="home" className="feature-div">
//                 <h2>Welcome to Party Planner</h2>
//                 <p>Let us make your special moments memorable. From birthdays to weddings, we've got you covered!</p>
//                 <Link to="#contact" className="cta-button">Get Started</Link>
//             </section>

//             <section id="events" className="feature-div">
//                 <h2>Upcoming Events</h2>
//                 <div className="event-container">
//                     {events.map((event, index) => (
//                         <EventCard key={index} name={event.name} type={event.type} image={event.image} />
//                     ))}
//                 </div>
//                 <Link to="#contact" className="cta-button">View All Events</Link>
//             </section>

//             <section id="about" className="feature-div">
//                 <h2>About Us</h2>
//                 <p>Learn about our team of experienced professionals dedicated to making your events truly special.</p>
//                 <Link to="#contact" className="cta-button">Meet the Team</Link>
//             </section>

//             <section id="contact" className="feature-div">
//                 <h2>Contact Us</h2>
//                 <p>Ready to plan your event? Contact us now for a personalized consultation.</p>
//                 <Link to="#contact" className="cta-button">Contact Now</Link>
//             </section>

//             <footer>
//                 <p>&copy; 2024 Party Planner. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default App;
