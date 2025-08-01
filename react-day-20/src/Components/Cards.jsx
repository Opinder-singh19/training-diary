import React from "react";
import Card from "./Card";
import "./Cards.css"; // ✅ Import the CSS

const Cards = ({ courses }) => {
  return (
    <div className="cards-container">
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <Card key={course.id} course={course} />
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default Cards;
