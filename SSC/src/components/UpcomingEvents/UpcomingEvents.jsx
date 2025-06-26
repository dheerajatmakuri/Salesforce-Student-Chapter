import React from "react";
import "./UpcomingEvents.css";
import kickoffFlyer from "../../assets/event1.png";
import hiringFlyer from "../../assets/hiring.png";  // ← your new flyer

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Salesforce Student Chapter UTD Kickoff Event",
      date: "Apr 17",
      time: "5:00 - 7:00 PM CST",
      image: kickoffFlyer,
      location: "Davidson Auditorium JSOM - University of Texas at Dallas",
      registerLink: "",
    },
    {
      id: 2,
      title: "We Are Hiring! Join the Salesforce Student Chapter UTD",
      date: "July 30",                   // ← update to real date
      time: "-",       // ← update to real time
      image: hiringFlyer,
      location: "Online via Zoom",      // ← update to real location
      registerLink: "https://docs.google.com/forms/d/1x5NXIFAbAkxaoesJ0WjJhIwo3XU8ywGTVxeN0uGeviw/viewform?edit_requested=true",  // ← update if needed
    },
  ];

  // Helper to parse "MMM DD" into a Date object for the current year
  const parseEventDate = (dateStr) => {
    const [month, day] = dateStr.split(" ");
    return new Date(`${month} ${day}, ${new Date().getFullYear()}`);
  };

  const today = new Date();
  const pastEvents = events.filter((e) => parseEventDate(e.date) < today);
  const upcomingEvents = events.filter((e) => parseEventDate(e.date) >= today);

  const renderEvents = (list) => (
    <div className="events-grid">
      {list.map((ev) => (
        <div className="hover-card" key={ev.id}>
          <img src={ev.image} alt={ev.title} className="flyer-img" />
          <div className="event-details-hover">
            <h3>{ev.title}</h3>
            <p><strong>Date:</strong> {ev.date}</p>
            <p><strong>Time:</strong> {ev.time}</p>
            <p><strong>Location:</strong> {ev.location}</p>
            <a
              href={ev.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Register
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="upcoming-events" id="events">
      <div className="events-container">
        <section className="past-events-section">
          <h2>Past Events</h2>
          {pastEvents.length ? renderEvents(pastEvents) : <p>No past events.</p>}
        </section>
        <section className="upcoming-events-section">
          <h2>Upcoming Events</h2>
          {upcomingEvents.length
            ? renderEvents(upcomingEvents)
            : <p>No upcoming events.</p>
          }
        </section>
      </div>
    </div>
  );
};

export default UpcomingEvents;
