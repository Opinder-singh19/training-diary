import React, { useState } from "react";
import { FaPlay, FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import './Card.css';

const Card = ({ course }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    toast(liked ? "Removed from wishlist 💔" : "Added to wishlist ❤️");
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={course.image.url} alt={course.title} className="card-image" />
        <div className="play-button">
          <button>
            <FaPlay fontSize="1.75rem" />
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <p className="card-title">{course.title}</p>
          <button className="heart-btn" onClick={toggleLike}>
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>
        <p className="card-description">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
