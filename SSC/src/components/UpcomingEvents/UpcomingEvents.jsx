import React from "react";
import "./UpcomingEvents.css";
import kickoffFlyer from "../../assets/event1.png";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Salesforce Student Chapter UTD Kickoff Event",
      date: "Apr 17",
      time: "5:00 - 7:00 PM CST",
      image: kickoffFlyer,
      location: "Davidson Auditorium JSOM - University of Texas at Dallas",
      registerLink: "https://forms.gle/YghDNEk4uFFb46xQ7",
    },
  ];

  return (
    <div className="upcoming-events" id="events">
      <h2>Past Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div className="hover-card" key={event.id}>
            <img src={event.image} alt={event.title} className="flyer-img" />
            <div className="event-details-hover">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <a
                href={event.registerLink}
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
    </div>
  );
};

export default UpcomingEvents;
